/* Téma 4, úroveň Základ. */
QUIZ_REG({
  title: "Who's × Whose",
  description: "Kdo je / kdo má × čí, přivlastňovací zájmena",
  cheat: `
<section class="tense">
  <h3>Who's = Who is / Who has</h3>
  <p class="when">kdo je, kdo má, kdo právě dělá</p>
  <ul>
    <li><b>?</b><span><u>Who's</u> that girl? = Who is that girl?</span></li>
    <li><b>?</b><span><u>Who's</u> coming tonight? = Who is coming?</span></li>
    <li><b>?</b><span><u>Who's</u> got my pen? = Who has got my pen?</span></li>
  </ul>
  <p class="rule">Za who's následuje podstatné jméno s členem (that girl), sloveso s -ing nebo got / příčestí (been, seen).</p>
  <p class="signals">Who's your teacher? Who's talking? Who's seen my keys?</p>
</section>
<section class="tense">
  <h3>Whose = čí</h3>
  <p class="when">komu něco patří</p>
  <ul>
    <li><b>?</b><span><u>Whose</u> bag is this? / <u>Whose</u> is this bag?</span></li>
    <li><b>+</b><span>It's <u>Tom's</u>. It's <u>mine</u>.</span></li>
    <li><b>+</b><span>That's the man <u>whose</u> dog is lost. (jehož)</span></li>
  </ul>
  <p class="rule">Whose + podstatné jméno bez členu. Odpověď: jméno + 's (Tom's, the Smiths') nebo zájmeno: mine, yours, his, hers, ours, theirs.</p>
  <p class="signals">Whose phone? Whose idea? Whose shoes?</p>
</section>
`,
  blurb: "Výběr z možností",
  questions: [
    {
      type: "choice",
      prompt: "___ that boy over there?",
      options: ["Who's", "Whose", "Who"],
      correct: 0,
      hint: "Ptáme se: Kdo je ten chlapec?",
      why: "Kdo je = Who is → Who's. Whose znamená čí."
    },
    {
      type: "choice",
      prompt: "___ phone is ringing?",
      options: ["Who's", "Whose", "Who"],
      correct: 1,
      hint: "Čí telefon zvoní?",
      why: "Čí + podstatné jméno (phone) → Whose."
    },
    {
      type: "choice",
      prompt: "___ your favourite singer?",
      options: ["Who's", "Whose", "Who"],
      correct: 0,
      why: "Kdo je tvůj oblíbený zpěvák? = Who is → Who's."
    },
    {
      type: "choice",
      prompt: "___ jacket is this?",
      options: ["Who's", "Whose", "Who"],
      correct: 1,
      why: "Čí je to bunda? Whose + jacket."
    },
    {
      type: "choice",
      prompt: "Whose book is this?",
      instruction: "Vyber správnou odpověď na otázku.",
      options: ["It's Peter's.", "It's Peter.", "Peter is.", "It's Peters."],
      correct: 0,
      hint: "Přivlastnění u jména: 's.",
      why: "Na otázku whose odpovídáme jménem s 's: It's Peter's."
    },
    {
      type: "choice",
      prompt: "___ coming to the party tonight?",
      options: ["Who's", "Whose", "Who"],
      correct: 0,
      hint: "Za mezerou je sloveso s -ing.",
      why: "Who is coming? → Who's coming? (Present Continuous)."
    },
    {
      type: "choice",
      prompt: "Whose are these keys?",
      instruction: "Vyber správnou odpověď na otázku.",
      options: ["They're mine.", "They're my.", "They're me.", "It's mine."],
      correct: 0,
      why: "Keys je množné číslo → They're. Samostatné přivlastňovací zájmeno: mine (moje)."
    },
    {
      type: "choice",
      prompt: "___ got a pencil?",
      options: ["Who's", "Whose", "Who"],
      correct: 0,
      hint: "Kdo má tužku? have got …",
      why: "Who has got a pencil? → Who's got a pencil?"
    },
    {
      type: "choice",
      prompt: "___ idea was it?",
      options: ["Who's", "Whose", "Who"],
      correct: 1,
      why: "Čí to byl nápad? Whose + idea."
    },
    {
      type: "choice",
      prompt: "Who's late again?",
      instruction: "Co znamená who's v této větě?",
      options: ["Who is", "Who has", "Whose", "Who was"],
      correct: 0,
      why: "Late je přídavné jméno, před ním je sloveso be: Who is late again?"
    }
  ]
});
