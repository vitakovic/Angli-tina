/* Téma 5, úroveň Základ. */
QUIZ_REG({
  title: "Pomocná slovesa",
  description: "do / does / did, be, have, will, can v otázkách, záporech a krátkých odpovědích",
  cheat: `
<section class="tense">
  <h3>Které pomocné sloveso?</h3>
  <p class="when">otázka a zápor</p>
  <ul>
    <li><b>+</b><span>She likes tea. → <u>Does</u> she like tea? She <u>doesn't</u> like tea.</span></li>
    <li><b>+</b><span>They went home. → <u>Did</u> they go home? They <u>didn't</u> go.</span></li>
    <li><b>+</b><span>He is working. → <u>Is</u> he working? He <u>isn't</u> working.</span></li>
  </ul>
  <p class="rule">do / does = Present Simple, did = Past Simple, am / is / are / was / were = sloveso be a průběhové časy, have / has = have got a Present Perfect, will = budoucnost, can = umět, moct. Po do / does / did / will / can je sloveso v základním tvaru.</p>
  <p class="signals">Do you…? Does he…? Did they…? Are you…? Was it…? Have you…? Will she…? Can you…?</p>
</section>
<section class="tense">
  <h3>Krátké odpovědi a dovětky</h3>
  <p class="when">opakuje se pomocné sloveso, ne hlavní</p>
  <ul>
    <li><b>?</b><span>Do you like it? – Yes, I <u>do</u>. / No, I <u>don't</u>.</span></li>
    <li><b>?</b><span>Can you swim? – Yes, I <u>can</u>. / No, I <u>can't</u>.</span></li>
    <li><b>?</b><span>You're tired, <u>aren't</u> you? She plays tennis, <u>doesn't</u> she?</span></li>
  </ul>
  <p class="rule">Dovětek (question tag): kladná věta → záporný dovětek a naopak. Otázka na podmět nemá do / did: Who made it?</p>
  <p class="signals">Yes, I do. No, he isn't. Yes, they have. So do I. Neither do I.</p>
</section>
`,
  blurb: "Výběr z možností",
  questions: [
    {
      type: "choice",
      prompt: "___ you like chocolate?",
      options: ["Do", "Does", "Are", "Is"],
      correct: 0,
      why: "Like je běžné sloveso v Present Simple. S you se otázka tvoří pomocí Do."
    },
    {
      type: "choice",
      prompt: "___ she live in Prague?",
      options: ["Do", "Does", "Is", "Has"],
      correct: 1,
      hint: "She = 3. osoba jednotného čísla.",
      why: "Present Simple, she → Does. Sloveso live zůstává bez -s."
    },
    {
      type: "choice",
      prompt: "___ they at school yesterday?",
      options: ["Was", "Were", "Did", "Do"],
      correct: 1,
      hint: "Ve větě není jiné sloveso, jde o být v minulosti.",
      why: "Být v minulosti: they → were. Did se se slovesem be nepoužívá."
    },
    {
      type: "choice",
      prompt: "___ you see the film last night?",
      options: ["Did", "Do", "Were", "Was"],
      correct: 0,
      hint: "Last night = minulost, see je běžné sloveso.",
      why: "Past Simple, otázka: Did + podmět + základní tvar (see)."
    },
    {
      type: "choice",
      prompt: "He ___ like fish.",
      options: ["don't", "doesn't", "isn't", "aren't"],
      correct: 1,
      why: "Zápor v Present Simple u he: doesn't + základní tvar."
    },
    {
      type: "choice",
      prompt: "___ you swim? – Yes, I can.",
      options: ["Can", "Do", "Are", "Will"],
      correct: 0,
      hint: "Podívej se na krátkou odpověď.",
      why: "Krátká odpověď opakuje pomocné sloveso z otázky: Can you…? – Yes, I can."
    },
    {
      type: "choice",
      prompt: "Are you hungry? – Yes, I ___.",
      options: ["am", "do", "are", "is"],
      correct: 0,
      why: "Otázka s are → krátká odpověď s be. S I se používá am."
    },
    {
      type: "choice",
      prompt: "Does your dad drive? – No, he ___.",
      options: ["doesn't", "don't", "isn't", "not"],
      correct: 0,
      why: "Otázka s does → krátká odpověď No, he doesn't."
    },
    {
      type: "choice",
      prompt: "We ___ watching TV now.",
      options: ["are", "do", "is", "does"],
      correct: 0,
      hint: "Watching má -ing.",
      why: "Present Continuous: am / is / are + -ing. S we patří are."
    },
    {
      type: "choice",
      prompt: "I think it ___ rain tomorrow.",
      options: ["will", "did", "is", "does"],
      correct: 0,
      hint: "Tomorrow = budoucnost.",
      why: "Budoucnost: will + základní tvar slovesa (will rain)."
    }
  ]
});
