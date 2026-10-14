/* Téma 2, úroveň Základ. */
QUIZ_REG({
  title: "Sloveso to be",
  description: "Časování v přítomném a minulém čase",
  cheat: `
<section class="tense">
  <h3>Přítomný čas: am / is / are</h3>
  <p class="when">být, jsem, jsi, je …</p>
  <ul>
    <li><b>+</b><span>I <u>am</u> (I'm), you <u>are</u> (you're), he / she / it <u>is</u> (she's), we / you / they <u>are</u> (they're)</span></li>
    <li><b>–</b><span>I'm <u>not</u>, he <u>isn't</u>, they <u>aren't</u></span></li>
    <li><b>?</b><span><u>Am</u> I …? <u>Are</u> you …? <u>Is</u> she …?</span></li>
  </ul>
  <p class="rule">Otázku tvoříme přehozením slovesa a podmětu. Nepoužíváme do / does.</p>
  <p class="signals">Krátká odpověď: Yes, I am. / No, she isn't.</p>
</section>
<section class="tense">
  <h3>Minulý čas: was / were</h3>
  <p class="when">byl, byla, byli …</p>
  <ul>
    <li><b>+</b><span>I / he / she / it <u>was</u>, you / we / they <u>were</u></span></li>
    <li><b>–</b><span>he <u>wasn't</u>, we <u>weren't</u></span></li>
    <li><b>?</b><span><u>Was</u> he …? <u>Were</u> you …?</span></li>
  </ul>
  <p class="rule">Žádné did. Otázku opět tvoříme přehozením.</p>
  <p class="signals">yesterday, last year, two days ago</p>
</section>
`,
  blurb: "Výběr z možností",
  questions: [
    {
      type: "choice",
      prompt: "I ___ a student.",
      options: ["am", "is", "are", "be"],
      correct: 0,
      hint: "K I patří jen jeden tvar.",
      why: "S I se vždy používá am: I am a student."
    },
    {
      type: "choice",
      prompt: "She ___ from Prague.",
      options: ["am", "is", "are", "be"],
      correct: 1,
      why: "S he / she / it se používá is: She is from Prague."
    },
    {
      type: "choice",
      prompt: "We ___ at school today.",
      options: ["am", "is", "are", "be"],
      correct: 2,
      why: "S we / you / they se používá are: We are at school."
    },
    {
      type: "choice",
      prompt: "My parents ___ at home.",
      options: ["am", "is", "are", "be"],
      correct: 2,
      hint: "My parents = they.",
      why: "Parents je množné číslo (they), proto are: My parents are at home."
    },
    {
      type: "choice",
      prompt: "___ you tired?",
      options: ["Am", "Is", "Are", "Do"],
      correct: 2,
      why: "Otázku s be tvoříme přehozením: You are tired → Are you tired? Nepoužíváme do."
    },
    {
      type: "choice",
      prompt: "He ___ my brother. He is my cousin.",
      options: ["isn't", "aren't", "am not", "doesn't"],
      correct: 0,
      hint: "Zápor s he / she / it.",
      why: "He is → He isn't (is not). Pomocné do / does se u slovesa be nepoužívá."
    },
    {
      type: "choice",
      prompt: "Which sentence is correct?",
      options: ["She are happy.", "She is happy.", "She am happy.", "She be happy."],
      correct: 1,
      why: "S she patří is: She is happy."
    },
    {
      type: "choice",
      prompt: "___ Tom at the cinema?",
      options: ["Are", "Is", "Do", "Does"],
      correct: 1,
      why: "Tom = he → Is Tom at the cinema? Žádné do / does."
    },
    {
      type: "choice",
      prompt: "I ___ hungry.",
      options: ["not am", "am not", "isn't", "don't"],
      correct: 1,
      hint: "Slovíčko not jde za sloveso.",
      why: "Zápor s I je am not (I'm not). Tvar „amn't“ se nepoužívá."
    },
    {
      type: "choice",
      prompt: "Which question is correct?",
      options: ["Are your friends nice?", "Is your friends nice?", "Do your friends nice?", "Your friends are nice?"],
      correct: 0,
      why: "Your friends = they → Are your friends nice? Sloveso be se přehodí s podmětem."
    }
  ]
});
