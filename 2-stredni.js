/* Téma 2, úroveň Střední. */
QUIZ_REG({
  blurb: "Doplňování a skládání vět",
  questions: [
    {
      type: "choice",
      prompt: "Where ___ your keys?",
      options: ["is", "are", "am", "do"],
      correct: 1,
      hint: "Keys je množné číslo.",
      why: "Keys = they → Where are your keys? Tázací slovo + are + podmět."
    },
    {
      type: "fill",
      instruction: "Doplň správný tvar slovesa be.",
      prompt: "My sister ___ fifteen years old.",
      answers: ["is"],
      hint: "My sister = she.",
      why: "S she se používá is: My sister is fifteen."
    },
    {
      type: "build",
      instruction: "Seřaď slova do věty.",
      cz: "Jsme kamarádi.",
      words: ["friends", "are", "We"],
      answers: ["We are friends."],
      why: "Podmět + sloveso be + zbytek věty."
    },
    {
      type: "choice",
      prompt: "Are you from Brno? Yes, ___.",
      options: ["I am", "I'm", "I do", "I are"],
      correct: 0,
      hint: "V krátké kladné odpovědi se nezkracuje.",
      why: "Krátká kladná odpověď: Yes, I am. Zkrácený tvar I'm se v ní nepoužívá."
    },
    {
      type: "fill",
      instruction: "Přepiš větu jako zápor.",
      prompt: "She is a teacher.",
      answers: ["She isn't a teacher.", "She is not a teacher."],
      hint: "Je to sloveso be, žádné doesn't.",
      why: "Zápor s be: is + not = isn't. Další slova zůstávají stejná."
    },
    {
      type: "build",
      instruction: "Seřaď slova do otázky.",
      cz: "Kde jsou moje boty?",
      words: ["are", "shoes", "Where", "my"],
      answers: ["Where are my shoes?"],
      why: "Tázací slovo + are + podmět: Where are my shoes?"
    },
    {
      type: "choice",
      prompt: "Is Tom your brother? No, he ___.",
      options: ["isn't", "aren't", "doesn't", "not"],
      correct: 0,
      why: "Krátká záporná odpověď: No, he isn't."
    },
    {
      type: "fill",
      instruction: "Doplň správný tvar slovesa be.",
      prompt: "They ___ not at home.",
      answers: ["are"],
      hint: "They → ?",
      why: "S they patří are: They are not (aren't) at home."
    },
    {
      type: "build",
      instruction: "Seřaď slova do záporné věty.",
      cz: "Ona není doma.",
      words: ["home", "isn't", "at", "She"],
      answers: ["She isn't at home."],
      why: "Podmět + isn't + zbytek věty."
    },
    {
      type: "fill",
      instruction: "Vytvoř otázku.",
      prompt: "You are ready.",
      answers: ["Are you ready?"],
      hint: "Prohoď are a you.",
      why: "Otázka vznikne přehozením slovesa a podmětu: Are you ready?"
    }
  ]
});
