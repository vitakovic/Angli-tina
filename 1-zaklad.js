/* Téma 1, úroveň Základ. */
QUIZ_REG({
  title: "Present Simple vs. Continuous",
  description: "Zápory a otázky, zvyk a děj právě teď",
  cheat: `
<section class="tense">
  <h3>Present Simple</h3>
  <p class="when">zvyk, pravidelnost</p>
  <ul>
    <li><b>+</b><span>She plays tennis.</span></li>
    <li><b>–</b><span>She <u>doesn't play</u> tennis.</span></li>
    <li><b>?</b><span><u>Does</u> she <u>play</u> tennis?</span></li>
  </ul>
  <p class="rule">Po <i>do / does / don't / doesn't</i> je sloveso vždy základní, bez -s.</p>
  <p class="signals">usually, often, every day, on Sundays</p>
</section>
<section class="tense">
  <h3>Present Continuous</h3>
  <p class="when">děj právě teď</p>
  <ul>
    <li><b>+</b><span>He <u>is playing</u> tennis.</span></li>
    <li><b>–</b><span>He <u>isn't playing</u> tennis.</span></li>
    <li><b>?</b><span><u>Is</u> he <u>playing</u> tennis?</span></li>
  </ul>
  <p class="rule">am / is / are + sloveso s -ing. Žádné do / does.</p>
  <p class="signals">now, right now, at the moment, Look!</p>
</section>
`,
  blurb: "Výběr z možností",
  questions: [
    {
      type: "choice",
      prompt: "I ___ to school by bus every day.",
      options: ["go", "goes", "am going", "going"],
      correct: 0,
      hint: "Every day říká, že jde o zvyk.",
      why: "Every day = zvyk → Present Simple. S I se používá základní tvar slovesa: go."
    },
    {
      type: "choice",
      prompt: "My sister ___ English very well.",
      options: ["speak", "speaks", "is speak", "do speaks"],
      correct: 1,
      hint: "My sister = she. Co se přidává u he / she / it?",
      why: "Obecná schopnost = Present Simple. U he / she / it se přidává -s: speaks."
    },
    {
      type: "choice",
      prompt: "We ___ a film at the moment.",
      options: ["watch", "watches", "are watching", "is watching"],
      correct: 2,
      hint: "At the moment = právě teď.",
      why: "At the moment = děj právě teď → Present Continuous. S we patří are + sloveso s -ing."
    },
    {
      type: "choice",
      prompt: "He ___ eat vegetables.",
      options: ["don't", "doesn't", "isn't", "aren't"],
      correct: 1,
      why: "Zvyk v záporu → Present Simple. U he se používá doesn't + základní tvar slovesa."
    },
    {
      type: "choice",
      prompt: "___ you like music?",
      options: ["Do", "Does", "Are", "Is"],
      correct: 0,
      why: "Like je běžné sloveso v Present Simple. S you se otázka tvoří pomocí Do."
    },
    {
      type: "choice",
      prompt: "___ she dancing now?",
      options: ["Do", "Does", "Is", "Are"],
      correct: 2,
      hint: "Sloveso dancing má -ing.",
      why: "Now + dancing = Present Continuous. Otázka: Is + she + dancing?"
    },
    {
      type: "choice",
      prompt: "They ___ working today.",
      options: ["don't", "doesn't", "isn't", "aren't"],
      correct: 3,
      why: "Sloveso working má -ing, jde tedy o Present Continuous. S they patří aren't."
    },
    {
      type: "choice",
      prompt: "Which sentence is correct?",
      options: ["I am not like sport.", "I don't like sport.", "I doesn't like sport.", "I not like sport."],
      correct: 1,
      why: "Present Simple, záporná věta: I + don't + základní tvar slovesa."
    },
    {
      type: "choice",
      prompt: "Look! It ___.",
      options: ["rains", "does rain", "is raining", "rain"],
      correct: 2,
      hint: "Look! ukazuje na něco, co se děje teď.",
      why: "Look! = děj právě teď → Present Continuous: is raining."
    },
    {
      type: "choice",
      prompt: "Which question is correct?",
      options: ["Do your parents work in a bank?", "Does your parents work in a bank?", "Are your parents work in a bank?", "Do your parents works in a bank?"],
      correct: 0,
      why: "Your parents = they, tedy Do + podmět + základní tvar slovesa: Do your parents work…?"
    }
  ]
});
