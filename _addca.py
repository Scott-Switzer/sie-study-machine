import re
# Edit the DEPLOY index.html (the live artifact) directly.
DEP="/tmp/sie_deploy/index.html"
html=open(DEP).read()

news=[("ca5","CA5"),("ca6","CA6")]
marker="/* Concatenate all banks */"

# insert script tags before the <script> that opens the concat block
script_open=html.rfind("<script>", 0, html.find(marker))
if script_open<0: script_open=html.rfind("<script>")
ins_tags="\n".join([f'<script src="questions_{k}.js"></script>' for k,_ in news])
if "questions_youtube_ca5.js" not in html and "questions_youtube_ca6.js" not in html:
    html=html[:script_open]+ins_tags+"\n"+html[script_open:]
else:
    print("CA tags already present? ca5:", "questions_youtube_ca5.js" in html, "ca6:", "questions_youtube_ca6.js" in html)

concat_parts=[]
for _,u in news:
    concat_parts.append(f'if (typeof SIE_QUESTIONS_{u} !== "undefined") {{')
    concat_parts.append(f'  SIE_QUESTIONS = SIE_QUESTIONS.concat(SIE_QUESTIONS_{u});')
    concat_parts.append("}")
concat_ins="\n".join(concat_parts)
if "SIE_QUESTIONS_YT_CA5" not in html:
    html=html.replace(marker, marker+"\n"+concat_ins+"\n",1)
else:
    print("CA concat already present")

open(DEP,"w").write(html)
print("DEPLOY index.html updated with ca5/ca6")
