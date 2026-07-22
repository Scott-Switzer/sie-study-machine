/* ============================================================================
 * recap_integration.js  —  ADAPTIVE POST-DRILL RECAP engine.
 * ----------------------------------------------------------------------------
 * This file is the ONLY behavioral glue. It is injected after the question
 * banks and after concept_map.js / blurbs.js. It depends on globals already
 * defined in index.html:  SIE_QUESTIONS (array), state (object),
 * saveState(), fcInit(), FC_INTERVALS[], toast(), document.
 *
 * INTEGRATION POINTS (one-line calls inserted into index.html — see patches):
 *   1. In startQuizWith():  recapReset();                 // wipe per-session log
 *   2. In answer():         recapOnAnswer(q, letter, correct);
 *   3. In finishQuiz():     renderRecap();
 *   4. <section id="prac">: add the #prac-recap card (hidden by default).
 * ==========================================================================*/

/* ---- transient per-session miss log (NOT persisted) ---- */
var sessionMisses = [];
function recapReset(){ sessionMisses = []; }

/* ---- (a)/(b) CONCEPT LOOKUP for a question ----
 * Returns {concept, role} or null. Priority: explicit qmap id -> keyword rules
 * -> null (untagged). Mirrors the 2-tier scheme in concept_map.js. */
function conceptFor(q){
  if(!q) return null;
  var M = (typeof SIE_CONCEPT_MAP!=="undefined") ? SIE_CONCEPT_MAP : null;
  if(!M) return null;
  if(M.qmap && M.qmap[q.id]) return M.qmap[q.id];
  if(M.rules && q.stem){
    var s = q.stem.toLowerCase();
    for(var i=0;i<M.rules.length;i++){
      var r = M.rules[i];
      var kws = (r.if_stem_contains||[]);
      for(var j=0;j<kws.length;j++){
        if(s.indexOf(kws[j].toLowerCase())!==-1){
          return { concept: r.then_concept, role:"target" };
        }
      }
    }
  }
  return null;
}

/* ---- (c) MIX-UP DETECTION at answer time ----
 * Hooked from answer(q,letter,correct). A "mix-up" = the picked letter is the
 * CORRECT answer of a SIBLING question that maps to the SAME concept as the one
 * just missed. That is unambiguous evidence the user confused two concepts
 * (vs. a pure don't-know guess). We only flag when there is a real sibling in
 * this session to avoid false positives. */
function recapOnAnswer(q, letter, correct){
  if(correct) return;                       // only analyze wrong answers
  var cp = conceptFor(q);
  var mix = null;
  if(cp && typeof quiz!=="undefined" && quiz){
    for(var i=0;i<quiz.length;i++){
      var o = quiz[i];
      if(o.id===q.id) continue;
      var co = conceptFor(o);
      if(co && co.concept===cp.concept && o.answer===letter){
        mix = { siblingId:o.id, withConcept:cp.concept };
        break;
      }
    }
  }
  sessionMisses.push({
    id: q.id,
    picked: letter,
    correctAns: q.answer,
    concept: cp ? cp.concept : null,
    mixup: !!mix
  });
}

/* ---- (d) BUILD + RENDER the post-drill recap panel ---- */
function buildRecapHTML(){
  if(!sessionMisses.length) return "";
  var B = (typeof SIE_BLURBS!=="undefined") ? SIE_BLURBS : {};
  // group misses by concept; remember whether it was a mix-up or don't-know
  var byConcept = {};
  sessionMisses.forEach(function(m){
    var c = m.concept || "__untagged__";
    if(!byConcept[c]) byConcept[c] = { mix:0, dk:0, ids:[] };
    if(m.mixup) byConcept[c].mix++; else byConcept[c].dk++;
    byConcept[c].ids.push(m.id);
  });
  var rows = "";
  Object.keys(byConcept).forEach(function(c){
    var g = byConcept[c];
    var b = B[c];
    if(!b){
      rows += `<div class="recap-row"><div class="recap-h">${g.mix? '🔀 Mixed up' : '❓ Missed'} · <span class="muted">untagged concept</span></div>`
            + `<div class="small muted">Question(s): ${g.ids.join(', ')}</div></div>`;
      return;
    }
    var tag;
    if(g.mix && g.dk){
      tag = `<span class="pill" style="color:var(--bad);border-color:var(--bad)">🔀 MIX-UP + ❓ DON'T-KNOW</span>`;
    } else if(g.mix){
      tag = `<span class="pill" style="color:var(--bad);border-color:var(--bad)">🔀 MIX-UP</span>`;
    } else {
      tag = `<span class="pill" style="color:var(--warn);border-color:var(--warn)">❓ DON'T-KNOW</span>`;
    }
    var cmp = (b.compare||[]).map(function(r){
      return `<div class="cmp"><b>${r.item}</b> — ${r.point}</div>`;
    }).join("");
    var rel = (b.related||[]).filter(function(x){return B[x];})
      .map(function(x){ return `<span class="pill" style="cursor:pointer" onclick="showBlurb('${x}')">${B[x].title}</span>`; })
      .join(" ");
    rows += `<div class="recap-row">
        <div class="recap-h">${tag} ${b.title} <span class="muted">· ${b.section}</span></div>
        <div class="recap-blurb">${b.blurb}</div>
        <div class="recap-trap">⚠️ Trap: ${b.trap}</div>
        ${cmp? '<div class="cmp-wrap">'+cmp+'</div>' : ''}
        ${rel? '<div class="row" style="margin-top:6px">'+rel+'</div>' : ''}
      </div>`;
  });
  var mixCount = sessionMisses.filter(function(m){return m.mixup;}).length;
  return `<div class="recap-head">🧠 Adaptive Recap — ${sessionMisses.length} miss(es), `
       + `${mixCount} look like concept mix-ups</div>${rows}`;
}

/* show a single blurb inline (for the related-concept pills) */
function showBlurb(cid){
  var B = (typeof SIE_BLURBS!=="undefined") ? SIE_BLURBS : {};
  var b = B[cid]; if(!b) return;
  var cmp = (b.compare||[]).map(function(r){return `<div class="cmp"><b>${r.item}</b> — ${r.point}</div>`;}).join("");
  alert(`${b.title}\n\n${b.blurb}\n\nTrap: ${b.trap}\n\n${cmp.replace(/<\/?b>/g,'')}`);
}

function renderRecap(){
  var el = document.getElementById('prac-recap');
  if(!el) return;
  if(!sessionMisses.length){ el.classList.add('hidden'); return; }
  el.innerHTML = `<h2>🧠 Adaptive Recap</h2>` + buildRecapHTML()
    + `<div class="row" style="margin-top:12px">
         <button class="btn" style="border-color:var(--acc);color:var(--acc)" onclick="promoteMissedConcepts()">➕ Add missed concepts to flashcards</button>
         <button class="btn" onclick="beginQuiz()">Retry</button>
         <button class="btn" onclick="show('dash')">Dashboard</button>
       </div>`;
  el.classList.remove('hidden');
}

/* ---- (e) LEITNER INTEGRATION: promote missed concepts to a flashcard BOX ----
 * Reuses the EXISTING Leitner machinery (fcInit / FC_INTERVALS / box / due).
 * We don't create new question records; instead we mint a synthetic flashcard
 * state key per concept, scoping it to one of the questions already tagged with
 * that concept (so the existing showFc()/fcGrade() flow renders it with no
 * change). Missed-concept flashcards start at Box 1, due NOW (immediate). */
function promoteMissedConcepts(){
  var promoted = 0;
  var seen = {};
  sessionMisses.forEach(function(m){
    if(!m.concept || seen[m.concept]) return;
    seen[m.concept] = true;
    var B = (typeof SIE_BLURBS!=="undefined") ? SIE_BLURBS : {};
    if(!B[m.concept]) return;
    // find a representative question carrying this concept
    var rep = SIE_QUESTIONS.filter(function(q){ var c=conceptFor(q); return c && c.concept===m.concept; })[0];
    if(!rep) return;
    var key = "concept::"+m.concept;            // synthetic flashcard key
    if(!state[key]) state[key] = { seen:0, correct:0, wrong:0 };
    fcInit({ id:key });                          // ensures box/due exist (reuses existing fn)
    state[key].box = 1;                         // start at Box 1 (relearn)
    state[key].due = 0;                         // due now
    state[key]._concept = m.concept;
    state[key]._repQid = rep.id;                // for rendering the back
    promoted++;
  });
  saveState();
  if(promoted){
    toast(`Added ${promoted} concept flashcard(s) to Box 1 — review in 🔁 Due`);
  } else {
    toast('No tagged concepts to promote');
  }
}

/* NEW flashcard render path for concept cards (reuses existing fc* UI).
 * Wire a button "🔁 Concept cards due" next to the existing Due button, or
 * simply fold concept cards into startFcDue() by also matching state keys
 * that begin with "concept::". Minimal patch: extend fcSortDue/filter to
 * include them. See design doc. */
