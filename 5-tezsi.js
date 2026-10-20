/* Téma 5, úroveň Těžší. */
QUIZ_REG({
  blurb: "Dovětky, otázky na podmět, opravy chyb",
  questions: [
    {
      type: "fill",
      instruction: "Doplň pomocné sloveso do dovětku (question tag).",
      prompt: "You're from Brno, ___ you?",
      answers: ["aren't"],
      hint: "Kladná věta → záporný dovětek.",
      why: "You are → dovětek aren't you?"
    },
    {
      type: "fill",
      instruction: "Doplň pomocné sloveso do dovětku (question tag).",
      prompt: "She plays tennis, ___ she?",
      answers: ["doesn't"],
      hint: "Plays = Present Simple.",
      why: "Present Simple, she, kladná věta → doesn't she?"
    },
    {
      type: "fill",
      instruction: "Doplň pomocné sloveso do dovětku (question tag).",
      prompt: "They didn't come, ___ they?",
      answers: ["did"],
      why: "Záporná věta → kladný dovětek: did they?"
    },
    {
      type: "fill",
      instruction: "Doplň pomocné sloveso do dovětku (question tag).",
      prompt: "He can't swim, ___ he?",
      answers: ["can"],
      why: "Záporná věta s can't → kladný dovětek: can he?"
    },
    {
      type: "choice",
      prompt: "What ___ your sister do? – She's a nurse.",
      options: ["does", "is", "do", "did"],
      correct: 0,
      hint: "Ptáme se na povolání, Present Simple.",
      why: "What does she do? = Čím je? Do na konci je hlavní sloveso, does pomocné."
    },
    {
      type: "choice",
      prompt: "Who ___ this cake? – My mum did.",
      options: ["made", "did make", "does make", "did made"],
      correct: 0,
      hint: "Who je tu podmět (kdo upekl?).",
      why: "Otázka na podmět nemá pomocné sloveso: Who made this cake?"
    },
    {
      type: "build",
      instruction: "Seřaď slova do správné otázky.",
      cz: "Kde jsi byl včera večer?",
      words: ["Where", "were", "you", "last", "night"],
      answers: ["Where were you last night?"],
      why: "Být v minulosti: were. Se slovesem be se did nepoužívá."
    },
    {
      type: "fill",
      instruction: "Doplň pomocné sloveso.",
      prompt: "I don't like coffee. – Neither ___ I.",
      answers: ["do"],
      hint: "Já taky ne. Které pomocné sloveso je v první větě?",
      why: "Neither + pomocné sloveso z první věty + podmět: Neither do I."
    },
    {
      type: "fill",
      instruction: "Oprav chybu a napiš celou větu.",
      prompt: "Does she likes pizza?",
      answers: ["Does she like pizza?"],
      why: "Po does je sloveso v základním tvaru, bez -s."
    },
    {
      type: "build",
      instruction: "Seřaď slova do správné otázky.",
      cz: "Už jsi někdy byl v Londýně?",
      words: ["Have", "you", "ever", "been", "to", "London"],
      answers: ["Have you ever been to London?"],
      why: "Present Perfect: Have + podmět + ever + příčestí (been)."
    }
  ]
});
