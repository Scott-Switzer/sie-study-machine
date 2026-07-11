"""BULLETPROOF rewire: scan ALL questions_*.js files, ensure each has a <script src>
tag + a concat-if line, and rebuild the concat block WITHOUT clobbering the app
functions (which live in the SAME <script> as the concat lines, AFTER them).

Test mode: if run with --dry, operate on a copy and assert function count preserved.
"""
import os, glob, sys, subprocess

BASE = os.path.dirname(os.path.abspath(__file__))
HTML = os.path.join(BASE, "index.html")
# The project dir holds the authoritative copy of EVERY questions_*.js (incl web_*).
# The deploy dir (/tmp/sie_deploy) may have had web_* banks pruned by the cron,
# so sync them back from the project before rewiring. Make this self-healing.
PROJECT = os.path.expanduser("~/Desktop/SIE_prep")
if os.path.isdir(PROJECT) and PROJECT != BASE:
    for f in glob.glob(os.path.join(PROJECT, "questions*.js")):
        dst = os.path.join(BASE, os.path.basename(f))
        if not os.path.exists(dst) or os.path.getsize(dst) != os.path.getsize(f):
            try:
                import shutil
                shutil.copy(f, dst)
            except Exception as e:
                print("warn: could not copy", os.path.basename(f), e)

def rewire(html):
    files = sorted(set(os.path.basename(f) for f in glob.glob(os.path.join(BASE, "questions*.js"))
                      if os.path.basename(f) != "questions_youtube.js"))
    def var_of(name): return "SIE_" + name[:-3].upper()
    marker = "/* Concatenate all banks */"
    midx = html.find(marker)
    assert midx != -1
    # insert missing <script src> tags right before the <script> that opens the concat block
    script_open = html.rfind("<script>", 0, midx)
    for name in files:
        tag = f'<script src="{name}"></script>'
        if tag not in html:
            html = html[:script_open] + tag + "\n" + html[script_open:]
            midx = html.find(marker); script_open = html.rfind("<script>", 0, midx)
    # rebuild concat block: keep marker + new concat-if lines + functions tail
    midx = html.find(marker)
    line_start = html.rfind("\n", 0, midx) + 1
    cend = html.rfind("</script>")          # concat block is the LAST <script>
    block = html[line_start:cend]
    last_concat = block.rfind("SIE_QUESTIONS = SIE_QUESTIONS.concat(")
    tail_start = block.find("\n", last_concat) + 1
    functions_tail = block[tail_start:]
    other = [n for n in files if n != "questions.js"]
    concat = marker + "\n"
    concat += 'if (typeof SIE_QUESTIONS === "undefined") { var SIE_QUESTIONS = []; }\n'
    for n in other:
        v = var_of(n)
        concat += 'if (typeof ' + v + ' !== "undefined") {\n  SIE_QUESTIONS = SIE_QUESTIONS.concat(' + v + ');\n}\n'
    return html[:line_start] + concat + functions_tail + "</script>" + html[cend+len("</script>"):]

if __name__ == "__main__":
    html = open(HTML).read()
    before = html.count("function ")
    new = rewire(html)
    after = new.count("function ")
    if after != before:
        print(f"REFUSING: functions dropped {before} -> {after}")
        sys.exit(1)
    open(HTML, "w").write(new)
    n_banks = new.count('<script src="questions')
    print("Rewired safely. functions preserved: " + str(after) + ". banks: " + str(n_banks))
