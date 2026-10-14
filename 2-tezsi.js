/* Téma 2, úroveň Těžší. */
QUIZ_REG({
  blurb: "Minulý čas a opravy",
  questions: [
    {
      type: "choice",
      prompt: "I ___ at school yesterday.",
      options: ["am", "was", "were", "is"],
      correct: 1,
      hint: "Yesterday = minulost.",
      why: "Yesterday → minulý čas. S I se používá was: I was at school."
    },
    {
      type: "choice",
      prompt: "They ___ in London last year.",
      options: ["was", "were", "are", "is"],
      correct: 1,
      why: "Last year → minulý čas. S they se používá were: They were in London."
    },
    {
      type: "fill",
      instruction: "Doplň was nebo were.",
      prompt: "We ___ very tired after the trip.",
      answers: ["were"],
      hint: "We → ?",
      why: "S we / you / they se v minulosti používá were."
    },
    {
      type: "fill",
      instruction: "Přepiš větu jako zápor.",
      prompt: "He was at the party.",
      answers: ["He wasn't at the party.", "He was not at the party."],
      why: "Zápor v minulosti: was + not = wasn't. Žádné didn't."
    },
    {
      type: "fill",
      instruction: "Vytvoř otázku.",
      prompt: "She was ill yesterday.",
      answers: ["Was she ill yesterday?"],
      hint: "Prohoď was a she.",
      why: "Otázka vznikne přehozením: Was she ill yesterday? Žádné did."
    },
    {
      type: "build",
      instruction: "Seřaď slova do otázky.",
      cz: "Kde jsi byl včera?",
      words: ["yesterday", "you", "were", "Where"],
      answers: ["Where were you yesterday?"],
      why: "Tázací slovo + were + podmět + yesterday."
    },
    {
      type: "choice",
      prompt: "Was she at home? No, she ___.",
      options: ["wasn't", "weren't", "isn't", "didn't"],
      correct: 0,
      why: "Otázka byla s was, krátká odpověď také: No, she wasn't."
    },
    {
      type: "fill",
      instruction: "Oprav chybu ve větě.",
      prompt: "I am at home yesterday.",
      answers: ["I was at home yesterday."],
      hint: "Yesterday se nehodí k přítomnému času.",
      why: "Yesterday → minulý čas: I was at home yesterday."
    },
    {
      type: "choice",
      prompt: "Which sentence is NOT correct?",
      options: ["They weren't happy.", "Was he in Prague?", "You was late.", "Were we late?"],
      correct: 2,
      hint: "Hledej špatný tvar u you.",
      why: "S you se v minulosti používá were: You were late."
    },
    {
      type: "build",
      instruction: "Seřaď slova do záporné věty.",
      cz: "Moji rodiče dnes nejsou doma.",
      words: ["home", "aren't", "parents", "at", "My", "today"],
      answers: ["My parents aren't at home today.", "Today my parents aren't at home."],
      why: "Podmět + aren't + zbytek věty. Today může stát na začátku i na konci."
    }
  ]
});
