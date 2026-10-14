/* Nastavení odesílání výsledků do Google Formuláře. Upravujete jen tento soubor, index.html nechte být. */
window.QUIZ_CONFIG = {
  /* Adresa formuláře. Musí končit na /formResponse. */
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeTqHQ_jjUAbnJL5J0-0yICrOS7pwH2J9szCVOu0YDoDwgBuQ/formResponse",

  /* Čísla polí formuláře (z předvyplněného odkazu, část entry.xxxxx). */
  fields: {
    nick: "entry.1247520332",
    level: "entry.921090470",
    score: "entry.1160721131",
    missed: "entry.572733481",
    /* Volitelné: číslo pole pro samostatný sloupec s názvem tématu, např. "entry.123456789".
       Když je prázdné, název tématu se připíše do pole Úroveň. */
    topic: ""
  },

  /* Volitelné: pokud je pole Úroveň ve formuláři výběr z možností (ne krátká odpověď),
     napište sem přesně ty možnosti, např. { zaklad: "Easy", stredni: "Medium", tezsi: "Hard" }.
     Nechte null, pokud je pole krátká odpověď. */
  levelLabels: null
};
