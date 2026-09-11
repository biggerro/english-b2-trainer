/* diagnostic.js - 40 questions: 25 grammar (one per lesson) and 15 vocabulary.
   Every question carries either a "lesson" id or a "theme" id, so the result page can
   turn wrong answers into a list of priorities. */

window.E360DATA = window.E360DATA || {};
window.E360DATA.diagnostic = [
  { area: "gramatica", lesson: "present-simple", type: "choose", prompt: "She ___ in a marketing agency.", options: ["work", "works", "is work"], answer: 1, why: "La he/she/it, verbul primește -s: works." },
  { area: "gramatica", lesson: "present-continuous", type: "choose", prompt: "Be quiet, I ___ on the phone.", options: ["talk", "am talking", "talks"], answer: 1, why: "Acțiune de chiar acum, deci Present Continuous." },
  { area: "gramatica", lesson: "present-perfect", type: "choose", prompt: "I ___ him since Monday.", options: ["didn't see", "haven't seen", "don't see"], answer: 1, why: "Since plus un moment din trecut cere Present Perfect." },
  { area: "gramatica", lesson: "present-perfect-continuous", type: "choose", prompt: "How long ___ for the answer?", options: ["are you waiting", "have you been waiting", "do you wait"], answer: 1, why: "Durata până în prezent cere Present Perfect Continuous." },
  { area: "gramatica", lesson: "past-simple", type: "choose", prompt: "We ___ the contract last Friday.", options: ["have signed", "signed", "were signing"], answer: 1, why: "Last Friday este moment precis din trecut." },
  { area: "gramatica", lesson: "past-continuous", type: "choose", prompt: "I ___ when the phone rang.", options: ["drove", "was driving", "have driven"], answer: 1, why: "Acțiunea lungă întreruptă se pune la Past Continuous." },
  { area: "gramatica", lesson: "past-perfect", type: "choose", prompt: "When we arrived, the show ___ already ___.", options: ["has / started", "had / started", "was / starting"], answer: 1, why: "Acțiunea anterioară altei acțiuni din trecut cere Past Perfect." },
  { area: "gramatica", lesson: "past-perfect-continuous", type: "choose", prompt: "She was tired because she ___ all night.", options: ["worked", "had been working", "has been working"], answer: 1, why: "Cauza de durată, anterioară unei stări din trecut." },
  { area: "gramatica", lesson: "future-will", type: "choose", prompt: "The bag looks heavy. I ___ you.", options: ["am helping", "will help", "help"], answer: 1, why: "Ofertă spontană, deci will." },
  { area: "gramatica", lesson: "be-going-to", type: "choose", prompt: "Look at those clouds. It ___ rain.", options: ["will", "is going to", "goes to"], answer: 1, why: "Predicție bazată pe o dovadă vizibilă acum." },
  { area: "gramatica", lesson: "future-continuous", type: "choose", prompt: "This time tomorrow I ___ to Madrid.", options: ["will fly", "will be flying", "fly"], answer: 1, why: "Acțiune în desfășurare la un moment precis din viitor." },
  { area: "gramatica", lesson: "future-perfect", type: "choose", prompt: "___ Friday we will have finished everything.", options: ["Until", "By", "In"], answer: 1, why: "Termenul limită se exprimă cu by, nu cu until." },
  { area: "gramatica", lesson: "present-for-future", type: "choose", prompt: "The train ___ at seven tomorrow.", options: ["will leave", "leaves", "is leaving to"], answer: 1, why: "Orarele fixe se exprimă cu Present Simple." },
  { area: "gramatica", lesson: "conditionals", type: "choose", prompt: "If we ___ earlier, we would have paid less.", options: ["booked", "had booked", "would book"], answer: 1, why: "Condiționalul 3 cere had plus participiu după if." },
  { area: "gramatica", lesson: "passive-voice", type: "choose", prompt: "The invoice ___ yesterday.", options: ["was sent", "has sent", "sent"], answer: 0, why: "Pasiv la Past Simple: was plus participiu." },
  { area: "gramatica", lesson: "reported-speech", type: "choose", prompt: "He ___ me that the price had gone up.", options: ["said", "told", "spoke"], answer: 1, why: "Cu persoana se folosește tell, nu say." },
  { area: "gramatica", lesson: "modal-verbs", type: "choose", prompt: "You ___ come if you are busy, it is optional.", options: ["mustn't", "don't have to", "can't"], answer: 1, why: "Lipsa obligației se exprimă cu don't have to." },
  { area: "gramatica", lesson: "relative-clauses", type: "choose", prompt: "My boss, ___ lives in Cluj, travels a lot.", options: ["that", "who", "which"], answer: 1, why: "În relativa nedefinitorie nu se folosește that, iar pentru persoane se folosește who." },
  { area: "gramatica", lesson: "used-to", type: "choose", prompt: "I ___ working under pressure.", options: ["used to", "am used to", "would"], answer: 1, why: "Obișnuința actuală se exprimă cu be used to plus gerunziu." },
  { area: "gramatica", lesson: "wish-if-only", type: "choose", prompt: "I wish I ___ more time.", options: ["have", "had", "would have"], answer: 1, why: "După wish, prezentul coboară la trecut simplu." },
  { area: "gramatica", lesson: "gerund-infinitive", type: "choose", prompt: "I look forward to ___ from you.", options: ["hear", "hearing", "heard"], answer: 1, why: "În look forward to, cuvântul to este prepoziție, deci urmează gerunziul." },
  { area: "gramatica", lesson: "causative", type: "choose", prompt: "We ___ the invitations printed last week.", options: ["did", "had", "made"], answer: 1, why: "Cauzativul se face cu have sau get something done." },
  { area: "gramatica", lesson: "question-tags", type: "choose", prompt: "You booked the venue, ___?", options: ["isn't it", "didn't you", "don't you"], answer: 1, why: "Tag-ul repetă auxiliarul și subiectul propoziției." },
  { area: "gramatica", lesson: "articles-quantifiers", type: "choose", prompt: "I need ___ advice about the contract.", options: ["an", "some", "many"], answer: 1, why: "Advice este nenumărabil, deci some advice." },
  { area: "gramatica", lesson: "phrasal-verbs", type: "choose", prompt: "They called ___ yesterday because of the weather.", options: ["off it", "it off", "off"], answer: 1, why: "Cu pronume, obiectul stă între verb și particulă." },

  { area: "vocabular", theme: "work", type: "choose", prompt: "We have to meet the ___ by Friday.", options: ["deadline", "delay", "schedule"], answer: 0, why: "Deadline înseamnă termen limită, iar colocația este meet a deadline." },
  { area: "vocabular", theme: "money", type: "choose", prompt: "The company had to ___ costs to stay profitable.", options: ["cut", "drop", "fall"], answer: 0, why: "Cut costs este colocația standard pentru a reduce cheltuielile." },
  { area: "vocabular", theme: "technology", type: "choose", prompt: "You should ___ the app before you use it.", options: ["upgrade", "update", "upload"], answer: 1, why: "Update înseamnă a actualiza, upload înseamnă a încărca." },
  { area: "vocabular", theme: "health", type: "choose", prompt: "The doctor gave me a ___ for antibiotics.", options: ["receipt", "prescription", "recipe"], answer: 1, why: "Prescription este rețeta medicală, recipe este rețeta de gătit." },
  { area: "vocabular", theme: "travel", type: "choose", prompt: "Our flight was ___ by two hours.", options: ["late", "delayed", "slow"], answer: 1, why: "Delayed este cuvântul standard pentru zboruri întârziate." },
  { area: "vocabular", theme: "environment", type: "choose", prompt: "Plastic waste is a serious ___ problem.", options: ["environmental", "environment", "enviromental"], answer: 0, why: "Se folosește adjectivul environmental înaintea substantivului." },
  { area: "vocabular", theme: "feelings", type: "choose", prompt: "I was ___ when they cancelled at the last minute.", options: ["annoyed", "annoying", "annoy"], answer: 0, why: "Adjectivul în -ed descrie ce simți, cel în -ing descrie cauza." },
  { area: "vocabular", theme: "describing", type: "choose", prompt: "The instructions were very ___, nobody understood them.", options: ["confused", "confusing", "confuse"], answer: 1, why: "Instrucțiunile provoacă confuzie, deci adjectivul în -ing." },
  { area: "vocabular", theme: "collocations", type: "choose", prompt: "Could you ___ me a favour?", options: ["make", "do", "take"], answer: 1, why: "Colocația fixă este do someone a favour." },
  { area: "vocabular", theme: "collocations", type: "choose", prompt: "I need to ___ a decision by tomorrow.", options: ["make", "do", "take"], answer: 0, why: "Se spune make a decision, nu take a decision în engleza standard." },
  { area: "vocabular", theme: "linking", type: "choose", prompt: "The venue was small. ___, the atmosphere was excellent.", options: ["Despite", "However", "Although"], answer: 1, why: "However leagă două propoziții separate, despite cere substantiv." },
  { area: "vocabular", theme: "phrasal1", type: "choose", prompt: "We ___ of chairs halfway through the event.", options: ["ran out", "run away", "ran off"], answer: 0, why: "Run out of înseamnă a rămâne fără ceva." },
  { area: "vocabular", theme: "idioms", type: "choose", prompt: "Let's talk about the price. Let's get to the ___.", options: ["point", "case", "matter"], answer: 0, why: "Get to the point înseamnă a trece la subiect." },
  { area: "vocabular", theme: "academic", type: "choose", prompt: "The report ___ that costs will rise next year.", options: ["tells", "says", "states"], answer: 2, why: "States este verbul formal potrivit pentru un raport." },
  { area: "vocabular", theme: "events", type: "choose", prompt: "How many people ___ to the wedding?", options: ["confirmed", "affirmed", "assured"], answer: 0, why: "Confirm este verbul folosit pentru confirmarea prezenței." }
];
