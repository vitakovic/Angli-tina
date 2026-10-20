/* Téma 4, úroveň Střední. */
QUIZ_REG({
  blurb: "Doplňování a skládání vět",
  questions: [
    {
      type: "fill",
      instruction: "Doplň who's nebo whose.",
      prompt: "___ is this umbrella? – It's my mum's.",
      answers: ["Whose"],
      why: "Ptáme se, komu deštník patří: Whose is this umbrella?"
    },
    {
      type: "fill",
      instruction: "Doplň who's nebo whose.",
      prompt: "___ the new teacher? – Mr Brown.",
      answers: ["Who's", "Who is"],
      why: "Kdo je nový učitel? = Who is → Who's."
    },
    {
      type: "fill",
      instruction: "Doplň přivlastňovací zájmeno.",
      prompt: "This isn't my bag. It's ___. (she)",
      answers: ["hers"],
      hint: "Její (samostatně, bez podstatného jména).",
      why: "Samostatné přivlastňovací zájmeno od she je hers."
    },
    {
      type: "build",
      instruction: "Seřaď slova do správné otázky.",
      cz: "Čí jsou ty boty?",
      words: ["Whose", "shoes", "are", "these"],
      answers: ["Whose shoes are these?", "Whose are these shoes?"],
      why: "Whose + podstatné jméno + are + these? (lze i Whose are these shoes?)"
    },
    {
      type: "build",
      instruction: "Seřaď slova do správné otázky.",
      cz: "Kdo s tebou mluví?",
      words: ["Who's", "talking", "to", "you"],
      answers: ["Who's talking to you?"],
      why: "Who is talking → Who's talking. Who je tu podmět, proto se nemění slovosled."
    },
    {
      type: "fill",
      instruction: "Doplň přivlastňovací zájmeno.",
      prompt: "Is this your brother's room? – Yes, it's ___.",
      answers: ["his"],
      why: "Brother = he → samostatné zájmeno his (jeho)."
    },
    {
      type: "fill",
      instruction: "Doplň who's nebo whose.",
      prompt: "___ car is that? – It's the Smiths'.",
      answers: ["Whose"],
      hint: "The Smiths' = Smithových.",
      why: "Čí auto? Whose + car. U množného čísla na -s se přidává jen apostrof: the Smiths'."
    },
    {
      type: "fill",
      instruction: "Doplň who's nebo whose.",
      prompt: "___ got my phone? – I have.",
      answers: ["Who's", "Who has"],
      why: "Who has got my phone? → Who's got. Odpověď I have to potvrzuje."
    },
    {
      type: "build",
      instruction: "Seřaď slova do správné otázky.",
      cz: "Čí to byl nápad?",
      words: ["Whose", "idea", "was", "it"],
      answers: ["Whose idea was it?"],
      why: "Whose + podstatné jméno + was + it?"
    },
    {
      type: "fill",
      instruction: "Napiš who's v plném tvaru (dvě slova).",
      prompt: "Who's seen my keys? = ___ seen my keys?",
      answers: ["Who has"],
      hint: "Seen je příčestí, před ním je have / has.",
      why: "Po who's následuje příčestí seen → jde o Present Perfect: Who has seen …?"
    }
  ]
});
