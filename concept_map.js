/* ============================================================================
 * concept_map.js  —  QUESTION -> CONCEPT tagging, SEPARATE from the 106 banks.
 * ----------------------------------------------------------------------------
 * WHY A SEPARATE FILE: the question banks (questions*.js) must NOT be edited.
 * Every concept assignment lives here, keyed by the existing stable question id
 * (q.id). To tag a new concept you only append to `qmap` or add a `rules`
 * entry below — zero edits to ~6,300 question records.
 *
 * LOADING: this file is pulled in via script tags (same pattern as every bank file),
 * right after the bank files (same pattern as every other bank file), so it
 * exposes the global `SIE_CONCEPT_MAP`. (Content is plain JSON wrapped in a
 * `var` assignment so it works over file:// without fetch/CORS.)
 * ==========================================================================*/
var SIE_CONCEPT_MAP = {
  "version": 1,
  "concepts": {
    "rights_vs_warrants": {
      "label": "Rights vs. Warrants",
      "section": "2 - Products & Risks",
      "summary": "Both grant the right to buy issuer stock at a fixed price. Rights are short-dated (~30-45 days) and offered to EXISTING shareholders. Warrants are long-dated (years) and usually attached to a new offering.",
      "confuses_with": ["accred_vs_qib"],
      "keywords": ["rights", "warrants", "longest period to expiration", "fixed price", "privilege to obtain its shares"]
    },
    "accred_vs_qib": {
      "label": "Accredited Investor vs. QIB",
      "section": "2 - Products & Risks",
      "summary": "An Accredited Investor is a person/entity meeting wealth tests (can buy private placements). A QIB (Qualified Institutional Buyer) is a big institution ($100M+ securities) that may buy RESTRICTED stock under Rule 144A.",
      "confuses_with": ["rights_vs_warrants"],
      "keywords": ["qib", "qualified institutional buyer", "accredited investor", "rule 144a", "restricted stock"]
    },
    "etn_vs_etf": {
      "label": "ETN vs. ETF",
      "section": "2 - Products & Risks",
      "summary": "An ETF is a basket of securities (owns the assets). An ETN is a senior UNSECURED debt note of the issuer — so it carries the issuer's CREDIT (default) risk, which is why a rating downgrade hurts an ETN but not an ETF.",
      "confuses_with": [],
      "keywords": ["exchange-traded note", "etn", "credit rating", "downgraded"]
    },
    "loi_mutualfund": {
      "label": "Mutual Fund Letter of Intent",
      "section": "2 - Products & Risks",
      "summary": "A Letter of Intent lets a customer reach a breakpoint sales-charge discount by promising to invest a total within a maximum 13-month window.",
      "confuses_with": [],
      "keywords": ["letter of intent", "13 months", "breakpoint", "mutual fund purchase"]
    },
    "reg_bluesky": {
      "label": "Blue-Sky Laws",
      "section": "4 - Regulatory Framework",
      "summary": "Blue-sky laws are STATE securities laws, enforced by STATE securities regulators (NOT the SEC/FINRA/MSRB). The SEC handles federal law.",
      "confuses_with": ["agency_exemptions"],
      "keywords": ["blue-sky", "blue sky", "state securities regulators"]
    },
    "voting_rights": {
      "label": "Statutory vs. Cumulative Voting",
      "section": "2 - Products & Risks",
      "summary": "Under STATUTORY (regular) voting, a shareholder gets ONE vote per share PER vacancy (votes cannot be concentrated). Under CUMULATIVE voting, votes are pooled and can be stacked on one candidate.",
      "confuses_with": [],
      "keywords": ["statutory voting", "shares owned", "board of directors", "votes"]
    },
    "u4_disqual": {
      "label": "Statutory Disqualification (U4)",
      "section": "4 - Regulatory Framework",
      "summary": "A felony conviction directly related to securities (theft, misappropriation) is a statutory disqualification. A DUI/felony NOT involving securities/finance is generally NOT a statutory disqualification.",
      "confuses_with": [],
      "keywords": ["form u4", "statutory disqualification", "felony", "dui"]
    },
    "index_option_settlement": {
      "label": "Index Option Settlement",
      "section": "2 - Products & Risks",
      "summary": "Because you cannot deliver 'the index', ALL in-the-money index options (e.g. S&P 100 calls) settle in CASH, not the underlying stocks.",
      "confuses_with": [],
      "keywords": ["s&p 100", "index call options", "settled by the delivery", "cash"]
    }
  },

  /* ---- Explicit, high-precision assignment (preferred). Keyed by q.id. ---- */
  "qmap": {
    "web-WEBMORE-2":  { "concept": "rights_vs_warrants", "role": "target" },
    "web-WEBMORE-22": { "concept": "rights_vs_warrants", "role": "target" },
    "web-WEBMORE-19": { "concept": "accred_vs_qib",      "role": "target" },
    "web-WEBMORE-29": { "concept": "etn_vs_etf",         "role": "target" },
    "web-WEBMORE-12": { "concept": "loi_mutualfund",     "role": "target" },
    "web-WEBMORE-6":  { "concept": "reg_bluesky",        "role": "target" },
    "web-WEBMORE-18": { "concept": "voting_rights",      "role": "target" },
    "web-WEBMORE-23": { "concept": "u4_disqual",         "role": "target" },
    "web-WEBMORE-14": { "concept": "index_option_settlement", "role": "target" }
  },

  /* ---- Keyword fallback: covers ids NOT in qmap (imported Qs, future
   *      banks) without touching source files. Evaluated in order. ---- */
  "rules": [
    { "if_stem_contains": ["qib", "qualified institutional buyer", "rule 144a"], "then_concept": "accred_vs_qib" },
    { "if_stem_contains": ["accredited investor"], "then_concept": "accred_vs_qib" },
    { "if_stem_contains": ["letter of intent", "13 months", "breakpoint"], "then_concept": "loi_mutualfund" },
    { "if_stem_contains": ["blue-sky", "blue sky"], "then_concept": "reg_bluesky" },
    { "if_stem_contains": ["statutory voting", "votes for each vacancy"], "then_concept": "voting_rights" },
    { "if_stem_contains": ["exchange-traded note", "etn"], "then_concept": "etn_vs_etf" }
  ]
};
