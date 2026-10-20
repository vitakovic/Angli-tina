/* Téma 4, úroveň Těžší. */
QUIZ_REG({
  blurb: "Vedlejší věty, vztažné whose, opravy chyb",
  questions: [
    {
      type: "choice",
      prompt: "___ the girl ___ dad is a pilot?",
      options: ["Who's / whose", "Whose / who's", "Who's / who's", "Whose / whose"],
      correct: 0,
      hint: "Kdo je ta dívka, jejíž táta je pilot?",
      why: "Kdo je = Who's. Jejíž (vztažné) = whose."
    },
    {
      type: "fill",
      instruction: "Doplň who's nebo whose.",
      prompt: "I don't know ___ coat this is.",
      answers: ["whose"],
      why: "Nepřímá otázka: nevím, čí je to kabát → whose coat. Slovosled je oznamovací (this is)."
    },
    {
      type: "fill",
      instruction: "Doplň who's nebo whose.",
      prompt: "Do you know ___ coming tomorrow?",
      answers: ["who's", "who is"],
      why: "Víš, kdo zítra přijde? who is coming → who's coming."
    },
    {
      type: "choice",
      prompt: "These aren't our seats. They're ___.",
      options: ["theirs", "their", "their's", "theirs'"],
      correct: 0,
      why: "Samostatné přivlastňovací zájmeno je theirs. Nikdy se nepíše s apostrofem."
    },
    {
      type: "build",
      instruction: "Seřaď slova do správné otázky.",
      cz: "Čí je tamto kolo?",
      words: ["Whose", "bike", "is", "that"],
      answers: ["Whose bike is that?", "Whose is that bike?"],
      why: "Whose + bike + is + that? (lze i Whose is that bike?)"
    },
    {
      type: "fill",
      instruction: "Doplň who's nebo whose.",
      prompt: "That's the man ___ dog bit me.",
      answers: ["whose"],
      hint: "To je ten muž, jehož pes mě kousl.",
      why: "Vztažné zájmeno jehož / jejíž = whose + podstatné jméno."
    },
    {
      type: "choice",
      prompt: "Čí je to pero?",
      instruction: "Vyber správný překlad.",
      options: ["Whose is this pen?", "Who's is this pen?", "Who's pen is this?", "Whose this pen?"],
      correct: 0,
      why: "Čí = whose. Who's znamená who is, proto Who's is ani Who's pen nedává smysl. Sloveso is nesmí chybět."
    },
    {
      type: "fill",
      instruction: "Doplň who's nebo whose.",
      prompt: "___ been to London? – Me!",
      answers: ["Who's", "Who has"],
      why: "Kdo už byl v Londýně? Present Perfect: Who has been → Who's been."
    },
    {
      type: "build",
      instruction: "Seřaď slova do správné otázky.",
      cz: "Kdo je ten muž, jehož auto stojí venku?",
      words: ["Who's", "the man", "whose", "car", "is", "outside"],
      answers: ["Who's the man whose car is outside?"],
      why: "Who's = kdo je, whose car = jehož auto."
    },
    {
      type: "fill",
      instruction: "Oprav chybu a napiš celou větu.",
      prompt: "Who's book is this?",
      answers: ["Whose book is this?"],
      why: "Čí kniha = whose book. Who's je zkrácené who is."
    }
  ]
});
