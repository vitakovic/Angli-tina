/* Téma 1, úroveň Střední. */
QUIZ_REG({
  blurb: "Doplňování a skládání vět",
  questions: [
    {
      type: "choice",
      prompt: "Does she ___ to music every evening?",
      options: ["listen", "listens", "listening", "is listen"],
      correct: 0,
      hint: "Po does je sloveso v základním tvaru.",
      why: "Po do / does už je sloveso vždy základní, bez -s a bez -ing: Does she listen…?"
    },
    {
      type: "fill",
      instruction: "Doplň sloveso ve správném tvaru.",
      prompt: "My brother (watch) ___ TV every evening.",
      answers: ["watches"],
      hint: "Every evening = zvyk. Sloveso končící na -ch dostane v 3. osobě -es.",
      why: "Present Simple, he → watch + es = watches. Po -ch, -sh, -s, -x a -o se přidává -es."
    },
    {
      type: "choice",
      prompt: "Why ___ you laughing?",
      options: ["do", "are", "does", "is"],
      correct: 1,
      why: "Laughing má -ing, takže jde o Present Continuous. S you patří are."
    },
    {
      type: "build",
      instruction: "Seřaď slova do správné otázky.",
      cz: "Kde bydlí tvůj učitel?",
      words: ["live", "teacher", "Where", "does", "your"],
      answers: ["Where does your teacher live?"],
      why: "Tázací slovo + does + podmět + základní tvar slovesa."
    },
    {
      type: "choice",
      prompt: "Tom ___ his homework at the moment.",
      options: ["doesn't do", "isn't doing", "isn't do", "doesn't doing"],
      correct: 1,
      hint: "At the moment = právě teď.",
      why: "At the moment → Present Continuous. Záporná věta: isn't + sloveso s -ing."
    },
    {
      type: "fill",
      instruction: "Doplň sloveso ve správném tvaru.",
      prompt: "Look! The children (run) ___ in the park.",
      answers: ["are running"],
      hint: "Look! = děj teď. Potřebuješ dvě slova.",
      why: "Present Continuous: are + running. Pozor, run zdvojuje n: running."
    },
    {
      type: "build",
      instruction: "Seřaď slova do záporné věty.",
      cz: "Ona se teď nedívá na televizi.",
      words: ["now", "isn't", "TV", "watching", "She"],
      answers: ["She isn't watching TV now.", "Now she isn't watching TV."],
      why: "Present Continuous, záporná věta: podmět + isn't + sloveso s -ing."
    },
    {
      type: "choice",
      prompt: "Which sentence is correct?",
      options: ["He don't know the answer.", "He doesn't knows the answer.", "He doesn't know the answer.", "He isn't know the answer."],
      correct: 2,
      why: "Present Simple, he → doesn't + základní tvar slovesa. Sloveso know už -s nedostane."
    },
    {
      type: "build",
      instruction: "Seřaď slova do správné otázky.",
      cz: "Co dělají?",
      words: ["doing", "are", "What", "they"],
      answers: ["What are they doing?"],
      why: "Tázací slovo + are + podmět + sloveso s -ing."
    },
    {
      type: "fill",
      instruction: "Doplň zápor. Použij slova v závorce.",
      prompt: "She ___ coffee. (not / like)",
      answers: ["doesn't like"],
      hint: "Je to zvyk, she → doesn't + základní tvar.",
      why: "Present Simple, she → doesn't like. Sloveso po doesn't je v základním tvaru."
    }
  ]
});
