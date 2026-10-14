/* Úroveň 3: Těžší. Vlastní věty, přepisování, opravy chyb a slovesa, která se netvoří s -ing. */
window.QUIZ_LEVELS = window.QUIZ_LEVELS || {};
window.QUIZ_LEVELS[3] = {
  name: "Těžší",
  blurb: "Vlastní věty a chyby",
  questions: [
    {
      type: "fill",
      instruction: "Přepiš větu jako zápor.",
      prompt: "Peter plays the guitar.",
      answers: ["Peter doesn't play the guitar."],
      hint: "Použij doesn't a základní tvar slovesa.",
      why: "Present Simple, he → doesn't + základní tvar. Sloveso play po doesn't ztratí -s."
    },
    {
      type: "choice",
      prompt: "I ___ this song. It's great!",
      options: ["am liking", "like", "is like", "liking"],
      correct: 1,
      hint: "Slovesa jako like, love, know nebo want se obvykle nedávají do -ing.",
      why: "Like je stavové sloveso (vyjadřuje stav, ne činnost), proto se používá Present Simple, i když mluvíme o přítomnosti."
    },
    {
      type: "fill",
      instruction: "Přepiš větu jako otázku (ano / ne).",
      prompt: "She is reading a book.",
      answers: ["Is she reading a book?"],
      hint: "Prohoď is a podmět.",
      why: "Present Continuous: otázka vznikne přehozením is a podmětu. Nepoužívá se do / does."
    },
    {
      type: "choice",
      prompt: "Every morning my dad ___ coffee, but today he ___ tea.",
      options: ["is drinking / drinks", "drinks / is drinking", "drink / is drinking", "drinks / drinks"],
      correct: 1,
      hint: "Every morning = zvyk. Today = výjimka, děj teď.",
      why: "Every morning = zvyk → drinks (Present Simple). Today = děj právě teď → is drinking (Present Continuous)."
    },
    {
      type: "fill",
      instruction: "Vytvoř otázku se slovem Where.",
      prompt: "They live in Brno.",
      answers: ["Where do they live?"],
      hint: "Tázací slovo + do / does + podmět + sloveso.",
      why: "Present Simple: Where + do + they + live? Sloveso zůstává v základním tvaru."
    },
    {
      type: "choice",
      prompt: "Which sentence is NOT correct?",
      options: ["She isn't playing now.", "Does he work here?", "They doesn't live here.", "Are you listening?"],
      correct: 2,
      hint: "Hledej větu, kde se pomocné sloveso nehodí k podmětu.",
      why: "S they se používá don't, ne doesn't: They don't live here."
    },
    {
      type: "build",
      instruction: "Seřaď slova do správné otázky.",
      cz: "Proč dnes nepracuje?",
      words: ["today", "Why", "working", "isn't", "he"],
      answers: ["Why isn't he working today?"],
      why: "Tázací slovo + isn't + podmět + sloveso s -ing."
    },
    {
      type: "fill",
      instruction: "Doplň sloveso ve správném tvaru.",
      prompt: "He (study) ___ English every day.",
      answers: ["studies"],
      hint: "Sloveso končí souhláskou + y.",
      why: "Souhláska + y → -ies: study → studies. (Po samohlásce zůstává jen -s: play → plays.)"
    },
    {
      type: "fill",
      instruction: "Oprav chybu ve větě.",
      prompt: "She don't like pizza.",
      answers: ["She doesn't like pizza."],
      hint: "S she se zápor tvoří jinak než s I / you / we / they.",
      why: "She → doesn't + základní tvar slovesa: She doesn't like pizza."
    },
    {
      type: "fill",
      instruction: "Vytvoř otázku se slovem What.",
      prompt: "He is eating.",
      answers: ["What is he eating?", "What's he eating?"],
      hint: "Tázací slovo + is + podmět + sloveso s -ing.",
      why: "Present Continuous: What + is + he + eating?"
    }
  ]
};
