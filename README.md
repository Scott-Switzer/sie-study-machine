# SIE Study Machine

A self-contained, no-login web app to drill for the FINRA **Securities Industry Essentials (SIE)** exam. Built around a large practice-question bank with explanations, blueprint-weighted mock exams, Leitner-system flashcards, and a weak-area drill — all running locally in your browser.

[Demo](https://scott-switzer.github.io/sie-study-machine/) · [Report a question](https://github.com/Scott-Switzer/sie-study-machine/issues/new?template=question-report.md)

## Why this exists

Official practice material is great but either costs money or doesn't give you enough volume. This app aggregates free sources (FINRA free practice, Knopman, OEP, YouTube walkthroughs, Quizlet, Achievable...) into one place that:

- **Explains every answer.** Reveal shows why the right choice is right and why your pick was wrong.
- **Mirrors the real exam.** Practice quiz weights match the FINRA blueprint (44/31/16/9 across the four sections).
- **Prevents repeats.** In-session dedupe means you won't see the same stem twice in a single quiz.
- **Works without an account.** All progress is `localStorage` in your browser. Bookmark the site, come back tomorrow, your stats are still there.
- **Runs offline.** Once the page loads once, you can kill your Wi-Fi and keep studying.
- **Works on your phone.** Responsive layout, keyboard shortcuts on desktop, tap-friendly on mobile.

## Features

| Feature | What it does |
|---|---|
| **Practice Quiz** | Blueprint-weighted or uniform sampling by section / topic / all questions. |
| **Mock Exam** | 75 scored + 5 pretest Qs at full blueprint split, 105-min timer, review at the end. |
| **Flashcards (Leitner SRS)** | 5-box spaced-repetition scheduler with a "Flagged & Weak" deck and a "Due for review" button. |
| **Adaptive Drill** | Over-samples sections where your accuracy is below 70% and questions you've never seen. |
| **Report wrong/garbled** | Flag a question from inside the app; export your report as JSON so it can be fixed upstream. |
| **Study Guides for Your Gaps** | Auto-links FINRA outline + free guides for the sections you're weakest in. |
| **Exam countdown** | Optional countdown timer + daily question goal tracker. |

## Screenshot

> *(Add a screenshot or gif here — the app renders to a single `index.html` so open it locally and grab one.)*

## Use it

Open the live site:

> **https://scott-switzer.github.io/sie-study-machine/**

No install needed. Works on desktop and mobile. Once loaded it runs offline until you refresh.

## Run locally

```bash
# Python 3
python3 -m http.server 8799

# then visit http://localhost:8799
```

> Don't open `index.html` as a `file://` URL — localStorage persistence is blocked by some browsers in that mode.

## Question banks

The question bank is built from several free, public sources:

- [FINRA free practice exam](https://testenrollment.finra.org/practicetest/sie/)
- [Knopman SIE Practice Exam PDF](https://knopman.com/sie-practice-exam/)
- [Achievable](https://achievable.me/) free SIE samples
- OEP / Exam King / Pass the SIE YouTube walkthroughs
- Quizlet open sets (user-generated; lower accuracy — flag anything that looks off)

**Want to add or fix a question?** Open an issue or a PR. Every question has an `id`, `section`, `stem`, `choices`, `answer`, and `explanation` — the schema is documented in `SKILL.md`.

## Contributing

PRs welcome — especially explanations, corrections, or new questions from additional free sources. Please open an issue first for large additions so we can agree on taxonomy and schema.

**Taxonomy:** questions are tagged with `section` (4 canonical SIE blueprint sections) and `topic` (28 FINRA-outline topics). See `SKILL.md` for the topic list and classification rules.

**Quality bar:** explanations should teach, not just restate the answer. "Correct answer: <text>" is the minimum; "why" text is preferred.

## License

MIT — see [LICENSE](LICENSE). The study guides in `literature/` are sourced from publicly available materials; if you hold copyright on any of them and want it removed, open an issue.

## Disclaimer

Study material is for personal exam prep. Not affiliated with FINRA, NASAA, or any exam provider. Verify all answers against current FINRA materials — the outline and rules change from time to time.

## Report a wrong or garbled question

Found a mistake? Use the app's **⬇️ Export reported** button and open a
[question-report issue](https://github.com/Scott-Switzer/sie-study-machine/issues/new?template=question-report.md)
pasting the JSON straight into the body. The auto-fix workflow will apply it
directly to the bank and redeploy — no maintainer intervention required.
