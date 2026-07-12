#!/usr/bin/env python3
"""Wire questions_web_quizlet2.js (var SIE_QUESTIONS_WEB_QUIZLET2, 308 Q) into the
DEPLOY index.html. Inserts the <script src> tag before the concat-block <script>
and the concat guard right after the marker. No rewire_safe (it injects stray braces)."""
DEP = "/tmp/sie_deploy"
FN = "questions_web_quizlet2.js"
VAR = "SIE_QUESTIONS_WEB_QUIZLET2"
html = open(f"{DEP}/index.html").read()

assert f'questions_{FN.split("_",1)[1]}'  # sanity
tag = f'<script src="{FN}"></script>\n'
guard = (f'if (typeof {VAR} !== "undefined") {{\n'
         f'  SIE_QUESTIONS = SIE_QUESTIONS.concat({VAR});\n'
         f'}}\n')
marker = "/* Concatenate all banks */"

if FN in html:
    print("ALREADY WIRED — aborting to avoid duplicates")
    raise SystemExit(2)

# insert script tag before the <script> that opens the concat block
so = html.rfind("<script>", 0, html.find(marker))
assert so >= 0, "concat <script> not found"
html = html[:so] + tag + html[so:]

# insert concat guard right after the marker line
idx = html.find(marker)
assert idx >= 0
# place guard on a new line after the marker line
eol = html.find("\n", idx)
html = html[:eol+1] + guard + html[eol+1:]

open(f"{DEP}/index.html", "w").write(html)
print("WIRED quizlet2 into deploy index.html")
