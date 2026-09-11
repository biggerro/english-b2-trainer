/* tenses.js - the 13 tense lessons. Same shape for every lesson, see CLAUDE.md.
   Explanations in Romanian, examples in English with a Romanian translation. */

window.E360DATA = window.E360DATA || {};
window.E360DATA.tenses = window.E360DATA.tenses || [];

window.E360DATA.tenses.push({
  id: "present-simple",
  group: "prezent",
  level: "B1",
  title: "Present Simple",
  summary: "Timpul faptelor: rutine, obiceiuri, program fix, adevăruri generale și lucruri care nu se schimbă.",
  also: "Este cel mai des greșit timp de către români, pentru că în română folosim același prezent și pentru rutină, și pentru acțiunea de acum.",
  form: {
    affirmative: "S + V (he/she/it + V-s)",
    affirmativeExample: "I work in events. She works in events.",
    negative: "S + do/does not + V",
    negativeExample: "We do not work on Sundays. He doesn't answer emails after six.",
    question: "Do/Does + S + V?",
    questionExample: "Do you travel a lot? Does she speak English at work?",
    short: "Yes, I do. / No, she doesn't.",
    shortExample: "Do you know him? Yes, I do.",
    note: "La persoana a III-a singular se adaugă -s: works, goes, watches, studies (consoană + y devine -ies), has."
  },
  uses: [
    { ro: "Rutine și obiceiuri, cu cât de des se întâmplă", examples: [
      { en: "I check my email twice a day.", ro: "Îmi verific mailul de două ori pe zi.", highlight: "check" },
      { en: "We usually meet the client on Mondays.", ro: "De obicei ne vedem cu clientul lunea.", highlight: "meet" } ] },
    { ro: "Adevăruri generale și situații permanente", examples: [
      { en: "Water boils at 100 degrees.", ro: "Apa fierbe la 100 de grade.", highlight: "boils" },
      { en: "She lives in Cluj.", ro: "Locuiește în Cluj.", highlight: "lives" } ] },
    { ro: "Orare fixe: trenuri, avioane, program, evenimente programate", examples: [
      { en: "The train leaves at 7:40.", ro: "Trenul pleacă la 7:40.", highlight: "leaves" },
      { en: "The conference starts on Monday morning.", ro: "Conferința începe luni dimineață.", highlight: "starts" } ] },
    { ro: "Verbe de stare, care nu se folosesc la continuous: know, want, need, believe, understand, like, own", examples: [
      { en: "I know what you mean.", ro: "Știu ce vrei să spui.", highlight: "know" },
      { en: "She needs an answer today.", ro: "Are nevoie de un răspuns azi.", highlight: "needs" } ] },
    { ro: "Instrucțiuni, rețete, comentariu sportiv, povestit la prezent", examples: [
      { en: "First you open the file, then you check the numbers.", ro: "Întâi deschizi fișierul, apoi verifici cifrele.", highlight: "open" },
      { en: "He passes the ball and scores.", ro: "Pasează mingea și înscrie.", highlight: "passes" } ] }
  ],
  signalWords: ["always", "usually", "often", "sometimes", "rarely", "never", "every day", "every week", "on Mondays", "twice a month", "generally", "as a rule"],
  compareWith: {
    id: "present-continuous",
    leftTitle: "Present Simple: în general",
    rightTitle: "Present Continuous: acum",
    rows: [
      { left: "I work in Bucharest. (job permanent)", right: "I am working in Bucharest this month. (temporar)" },
      { left: "She speaks three languages. (abilitate)", right: "She is speaking to a client. (chiar acum)" },
      { left: "We meet every Friday. (rutină)", right: "We are meeting at four. (aranjament fixat)" },
      { left: "He never answers the phone. (obicei)", right: "He is not answering the phone today. (situație de azi)" },
      { left: "It rains a lot here. (climat)", right: "It is raining. (chiar acum, afară)" }
    ]
  },
  mistakes: [
    { wrong: "She work in a bank.", right: "She works in a bank.", why: "La he/she/it verbul primește -s. Este greșeala numărul unu a românilor, pentru că în română terminația nu se aude la fel." },
    { wrong: "He doesn't works here.", right: "He doesn't work here.", why: "După does/doesn't verbul rămâne la infinitiv, fără -s. -ul s-a mutat deja pe does." },
    { wrong: "Do she like coffee?", right: "Does she like coffee?", why: "La he/she/it, întrebarea se face cu does, nu cu do." },
    { wrong: "I am agree with you.", right: "I agree with you.", why: "Agree este verb, nu adjectiv. În română spunem sunt de acord, în engleză nu se pune to be." },
    { wrong: "I am having a car.", right: "I have a car.", why: "Have cu sensul de a poseda este verb de stare și nu se pune la continuous." },
    { wrong: "What means this word?", right: "What does this word mean?", why: "Întrebarea are nevoie de auxiliarul does, ordinea din română nu se copiază." },
    { wrong: "He go to the office by metro.", right: "He goes to the office by metro.", why: "Go devine goes la persoana a III-a singular." }
  ],
  examples: [
    { en: "I start work at nine and finish around six.", ro: "Încep lucrul la nouă și termin pe la șase.", highlight: "start" },
    { en: "She doesn't drink coffee after lunch.", ro: "Nu bea cafea după prânz.", highlight: "doesn't drink" },
    { en: "Do you often work from home?", ro: "Lucrezi des de acasă?", highlight: "Do you often work" },
    { en: "The office closes at seven on Fridays.", ro: "Biroul se închide la șapte vinerea.", highlight: "closes" },
    { en: "My brother teaches maths at a high school.", ro: "Fratele meu predă matematica la un liceu.", highlight: "teaches" },
    { en: "We don't take new projects in December.", ro: "Nu luăm proiecte noi în decembrie.", highlight: "don't take" },
    { en: "This app costs nothing.", ro: "Aplicația asta nu costă nimic.", highlight: "costs" },
    { en: "He always forgets his password.", ro: "Întotdeauna își uită parola.", highlight: "always forgets" },
    { en: "Does the price include VAT?", ro: "Prețul include TVA-ul?", highlight: "Does the price include" },
    { en: "They live twenty minutes from the venue.", ro: "Locuiesc la douăzeci de minute de locație.", highlight: "live" },
    { en: "I understand the problem, but I don't agree with the solution.", ro: "Înțeleg problema, dar nu sunt de acord cu soluția.", highlight: "understand" },
    { en: "The flight lands at half past eleven.", ro: "Avionul aterizează la unsprezece și jumătate.", highlight: "lands" }
  ],
  exercises: [
    { type: "fill", prompt: "She ___ (work) for a marketing agency.", answer: ["works"], hint: "persoana a III-a singular", why: "La she se adaugă -s: works." },
    { type: "fill", prompt: "We ___ (not / have) meetings on Fridays.", answer: ["don't have", "do not have"], hint: "negativ, we", why: "La we negativul se face cu don't + verb la infinitiv." },
    { type: "fill", prompt: "___ (he / speak) German?", answer: ["Does he speak", "does he speak"], hint: "întrebare, he", why: "Întrebarea la he/she/it se face cu Does + subiect + verb fără -s." },
    { type: "fill", prompt: "The shop ___ (open) at ten every morning.", answer: ["opens"], hint: "orar fix", why: "Program fix, deci Present Simple, iar the shop cere -s." },
    { type: "fill", prompt: "I ___ (not / understand) this contract.", answer: ["don't understand", "do not understand"], hint: "verb de stare", why: "Understand este verb de stare, nu se pune la continuous." },
    { type: "fill", prompt: "My colleagues ___ (finish) work at six.", answer: ["finish"], hint: "plural", why: "Subiect la plural, verbul rămâne fără -s." },
    { type: "fill", prompt: "It ___ (cost) about fifty euros.", answer: ["costs"], hint: "it", why: "It cere -s: costs." },
    { type: "fill", prompt: "She ___ (study) marketing at university.", answer: ["studies"], hint: "consoană + y", why: "Consoană + y devine -ies: studies." },
    { type: "choose", prompt: "___ you know where the meeting room is?", options: ["Does", "Do", "Are"], answer: 1, why: "La you se folosește Do, iar know este verb de stare, deci nu Are." },
    { type: "choose", prompt: "He ___ answer emails after seven.", options: ["doesn't", "don't", "isn't"], answer: 0, why: "La he negativul este doesn't + verb la infinitiv." },
    { type: "choose", prompt: "The train ___ at 7:40 every day.", options: ["is leaving", "leaves", "leave"], answer: 1, why: "Orar fix, Present Simple, subiect la singular deci leaves." },
    { type: "choose", prompt: "I ___ with your conclusion.", options: ["am agree", "agree", "am agreeing"], answer: 1, why: "Agree este verb: I agree, niciodată I am agree." },
    { type: "choose", prompt: "What ___ this word mean?", options: ["do", "does", "is"], answer: 1, why: "Subiectul this word este singular, deci does." },
    { type: "choose", prompt: "She ___ three languages fluently.", options: ["is speaking", "speaks", "speak"], answer: 1, why: "Abilitate permanentă, deci Present Simple cu -s." },
    { type: "transform", prompt: "He works in Timisoara. (negativ)", answer: ["He doesn't work in Timisoara.", "He does not work in Timisoara."], why: "Negativul la he se face cu doesn't, iar verbul pierde -ul s." },
    { type: "transform", prompt: "They travel a lot. (interogativ)", answer: ["Do they travel a lot?"], why: "La they întrebarea începe cu Do." },
    { type: "transform", prompt: "The meeting starts at nine. (interogativ)", answer: ["Does the meeting start at nine?"], why: "Subiect la singular, deci Does, iar verbul rămâne start." },
    { type: "transform", prompt: "I don't like long meetings. (afirmativ)", answer: ["I like long meetings."], why: "Se scoate don't și verbul rămâne la infinitiv." },
    { type: "translate", prompt: "Ea lucrează la o firmă de evenimente.", answer: ["She works for an events company.", "She works at an events company.", "She works in an events company."], why: "Present Simple pentru un job permanent, cu -s la she." },
    { type: "translate", prompt: "Nu lucrăm sâmbăta.", answer: ["We don't work on Saturdays.", "We do not work on Saturdays.", "We don't work on Saturday.", "We do not work on Saturday."], why: "Rutină negativă: don't + verb, iar zilele repetate primesc on + plural." },
    { type: "translate", prompt: "Vorbește engleză la birou?", answer: ["Does he speak English at work?", "Does she speak English at work?", "Does he speak English at the office?", "Does she speak English at the office?"], why: "Întrebare la persoana a III-a: Does + subiect + verb fără -s." },
    { type: "translate", prompt: "Întotdeauna își uită parola.", answer: ["He always forgets his password.", "She always forgets her password."], why: "Adverbul always stă între subiect și verb, iar verbul primește -s." },
    { type: "translate", prompt: "Prețul include transportul?", answer: ["Does the price include transport?", "Does the price include the transport?", "Does the price include delivery?"], why: "Întrebare cu Does, pentru că the price este singular." },
    { type: "translate", prompt: "Nu înțeleg ce vrea clientul.", answer: ["I don't understand what the client wants.", "I do not understand what the client wants."], why: "Understand și want sunt verbe de stare, deci Present Simple, nu continuous." }
  ],
  finalTest: [
    { type: "fill", prompt: "My sister ___ (live) in Spain.", answer: ["lives"], why: "Persoana a III-a singular cere -s." },
    { type: "fill", prompt: "___ (they / need) an invoice?", answer: ["Do they need", "do they need"], why: "La they întrebarea se face cu Do." },
    { type: "fill", prompt: "He ___ (not / want) to change the date.", answer: ["doesn't want", "does not want"], why: "Want este verb de stare, negativ cu doesn't." },
    { type: "choose", prompt: "The plane ___ at six in the morning.", options: ["is landing", "lands", "land"], answer: 1, why: "Orar fix, deci Present Simple cu -s." },
    { type: "choose", prompt: "___ your team work on weekends?", options: ["Do", "Does", "Is"], answer: 1, why: "Your team este subiect la singular, deci Does." },
    { type: "choose", prompt: "I ___ this is a good idea.", options: ["am thinking", "think", "thinks"], answer: 1, why: "Think cu sensul de a avea o părere este verb de stare." },
    { type: "choose", prompt: "She ___ her emails every morning.", options: ["check", "checks", "is check"], answer: 1, why: "Rutină zilnică plus persoana a III-a singular." },
    { type: "choose", prompt: "We ___ new suppliers very often.", options: ["don't change", "doesn't change", "aren't change"], answer: 0, why: "La we negativul este don't." },
    { type: "transform", prompt: "She answers every email. (negativ)", answer: ["She doesn't answer every email.", "She does not answer every email."], why: "Negativul mută -ul s pe doesn't." },
    { type: "transform", prompt: "They deliver on Mondays. (interogativ)", answer: ["Do they deliver on Mondays?"], why: "Întrebarea la they se face cu Do." },
    { type: "transform", prompt: "He doesn't drive to work. (afirmativ)", answer: ["He drives to work."], why: "La afirmativ verbul recuperează -ul s." },
    { type: "translate", prompt: "Biroul se închide la șapte.", answer: ["The office closes at seven.", "The office closes at 7."], why: "Program fix, Present Simple, subiect singular." },
    { type: "translate", prompt: "Nu bea cafea seara.", answer: ["He doesn't drink coffee in the evening.", "She doesn't drink coffee in the evening.", "He does not drink coffee in the evening.", "She does not drink coffee in the evening."], why: "Obicei negativ la persoana a III-a: doesn't + verb." },
    { type: "translate", prompt: "Cât costă livrarea?", answer: ["How much does delivery cost?", "How much does the delivery cost?", "How much does shipping cost?"], why: "Întrebare cu how much plus auxiliarul does." },
    { type: "translate", prompt: "De obicei ne vedem cu clienții lunea.", answer: ["We usually meet clients on Mondays.", "We usually meet the clients on Mondays.", "We usually meet our clients on Mondays."], why: "Rutină cu usually înaintea verbului." }
  ]
});

window.E360DATA.tenses.push({
  id: "present-continuous",
  group: "prezent",
  level: "B1",
  title: "Present Continuous",
  summary: "Acțiunea de acum, situația temporară și planul deja fixat pentru viitorul apropiat.",
  also: "În română spunem la fel și pentru rutină, și pentru acum. În engleză diferența este obligatorie.",
  form: {
    affirmative: "S + am/is/are + V-ing",
    affirmativeExample: "I am writing the offer. She is talking to the supplier.",
    negative: "S + am/is/are + not + V-ing",
    negativeExample: "They aren't answering the phone.",
    question: "Am/Is/Are + S + V-ing?",
    questionExample: "Are you working on the budget?",
    short: "Yes, I am. / No, she isn't.",
    shortExample: "Is he coming? No, he isn't.",
    note: "Ortografie: make devine making, run devine running, lie devine lying. Verbele de stare (know, want, like, believe, own, need) nu se folosesc la continuous."
  },
  uses: [
    { ro: "Ceea ce se întâmplă chiar în momentul vorbirii", examples: [
      { en: "I am reading your proposal right now.", ro: "Citesc propunerea ta chiar acum.", highlight: "am reading" },
      { en: "Sorry, she is talking to a client.", ro: "Scuze, vorbește cu un client.", highlight: "is talking" } ] },
    { ro: "Situații temporare, care nu sunt permanente", examples: [
      { en: "I am working from home this week.", ro: "Săptămâna asta lucrez de acasă.", highlight: "am working" },
      { en: "He is staying with his parents until the flat is ready.", ro: "Stă la părinți până e gata apartamentul.", highlight: "is staying" } ] },
    { ro: "Aranjamente deja fixate în viitorul apropiat, cu oră sau dată", examples: [
      { en: "We are meeting the client at four.", ro: "Ne vedem cu clientul la patru.", highlight: "are meeting" },
      { en: "I am flying to Madrid on Thursday.", ro: "Joi zbor la Madrid.", highlight: "am flying" } ] },
    { ro: "Schimbări și tendințe în desfășurare", examples: [
      { en: "Prices are going up again.", ro: "Prețurile cresc din nou.", highlight: "are going up" },
      { en: "The market is changing very fast.", ro: "Piața se schimbă foarte repede.", highlight: "is changing" } ] },
    { ro: "Reproș sau iritare, cu always, constantly, forever", examples: [
      { en: "He is always losing his keys.", ro: "Mereu își pierde cheile.", highlight: "is always losing" },
      { en: "They are constantly changing the deadline.", ro: "Schimbă termenul întruna.", highlight: "are constantly changing" } ] }
  ],
  signalWords: ["now", "right now", "at the moment", "currently", "today", "this week", "these days", "look", "listen", "still", "always (cu reproș)"],
  compareWith: {
    id: "present-simple",
    leftTitle: "Present Continuous: acum, temporar",
    rightTitle: "Present Simple: în general, permanent",
    rows: [
      { left: "I'm living in Brasov at the moment.", right: "I live in Brasov. (permanent)" },
      { left: "She's being difficult today. (se poartă azi)", right: "She is difficult. (așa e ea)" },
      { left: "What are you doing? (chiar acum)", right: "What do you do? (cu ce te ocupi)" },
      { left: "I'm seeing the dentist at five. (programare)", right: "I see the problem. (înțeleg)" },
      { left: "We're having lunch. (mâncăm)", right: "We have a car. (posedăm)" }
    ]
  },
  mistakes: [
    { wrong: "I am knowing the answer.", right: "I know the answer.", why: "Know este verb de stare. Verbele de stare nu se pun la continuous, oricât de mult ar suna a acum." },
    { wrong: "She is work now.", right: "She is working now.", why: "După am/is/are verbul trebuie să aibă -ing." },
    { wrong: "I working on the report.", right: "I am working on the report.", why: "Auxiliarul to be nu se poate omite, chiar dacă în română nu există." },
    { wrong: "What you are doing?", right: "What are you doing?", why: "În întrebare auxiliarul trece înaintea subiectului." },
    { wrong: "I am wanting a coffee.", right: "I want a coffee.", why: "Want este verb de stare. Se spune I want, niciodată I am wanting." },
    { wrong: "He is beeing rude.", right: "He is being rude.", why: "Forma de -ing a lui be este being, cu un singur e." },
    { wrong: "We are going to the office every day.", right: "We go to the office every day.", why: "Every day arată rutină, deci Present Simple." }
  ],
  examples: [
    { en: "I'm putting together the offer for tomorrow.", ro: "Pregătesc oferta pentru mâine.", highlight: "'m putting" },
    { en: "She isn't answering her phone today.", ro: "Azi nu răspunde la telefon.", highlight: "isn't answering" },
    { en: "Are you still waiting for their confirmation?", ro: "Încă aștepți confirmarea lor?", highlight: "Are you still waiting" },
    { en: "We're launching the new website next month.", ro: "Lansăm site-ul nou luna viitoare.", highlight: "'re launching" },
    { en: "The number of bookings is growing steadily.", ro: "Numărul de rezervări crește constant.", highlight: "is growing" },
    { en: "He's working on three projects at the same time.", ro: "Lucrează la trei proiecte în același timp.", highlight: "'s working" },
    { en: "They're not taking new orders this week.", ro: "Săptămâna asta nu iau comenzi noi.", highlight: "'re not taking" },
    { en: "I'm having lunch with the supplier at one.", ro: "La unu iau prânzul cu furnizorul.", highlight: "'m having" },
    { en: "Look, the projector isn't working again.", ro: "Uite, iar nu merge proiectorul.", highlight: "isn't working" },
    { en: "You're always complaining about the traffic.", ro: "Te plângi întruna de trafic.", highlight: "'re always complaining" },
    { en: "What are you doing on Friday evening?", ro: "Ce faci vineri seara?", highlight: "are you doing" },
    { en: "My English is getting better.", ro: "Engleza mea se îmbunătățește.", highlight: "is getting" }
  ],
  exercises: [
    { type: "fill", prompt: "I ___ (write) the report at the moment.", answer: ["am writing", "'m writing"], hint: "at the moment", why: "At the moment cere Present Continuous." },
    { type: "fill", prompt: "She ___ (not / work) today, she is ill.", answer: ["isn't working", "is not working"], hint: "today", why: "Situație de azi, deci continuous la negativ." },
    { type: "fill", prompt: "___ (you / wait) for me?", answer: ["Are you waiting", "are you waiting"], hint: "întrebare", why: "Întrebarea începe cu auxiliarul Are." },
    { type: "fill", prompt: "They ___ (build) a new hotel near the venue.", answer: ["are building", "'re building"], hint: "în desfășurare", why: "Acțiune în desfășurare în perioada asta." },
    { type: "fill", prompt: "We ___ (meet) the photographer at six tomorrow.", answer: ["are meeting", "'re meeting"], hint: "aranjament fixat", why: "Plan fixat cu oră, deci Present Continuous pentru viitor." },
    { type: "fill", prompt: "He ___ (always / interrupt) me in meetings.", answer: ["is always interrupting", "'s always interrupting"], hint: "reproș", why: "Always plus continuous exprimă iritare." },
    { type: "fill", prompt: "The costs ___ (go) up every quarter.", answer: ["are going"], hint: "tendință", why: "Tendință în desfășurare." },
    { type: "fill", prompt: "Listen, someone ___ (knock) at the door.", answer: ["is knocking", "'s knocking"], hint: "Listen", why: "Listen semnalează acțiunea de chiar acum." },
    { type: "choose", prompt: "I ___ what you mean.", options: ["am understanding", "understand", "understands"], answer: 1, why: "Understand este verb de stare, deci Present Simple." },
    { type: "choose", prompt: "She ___ in Iasi this month, but she lives in Cluj.", options: ["works", "is working", "work"], answer: 1, why: "This month arată o situație temporară." },
    { type: "choose", prompt: "What ___ you ___ tonight?", options: ["do / do", "are / doing", "is / doing"], answer: 1, why: "Plan pentru diseară, deci Present Continuous cu are." },
    { type: "choose", prompt: "The lift ___ again. Use the stairs.", options: ["doesn't work", "isn't working", "not working"], answer: 1, why: "Problemă de acum, temporară." },
    { type: "choose", prompt: "I ___ this jacket, it is my brother's.", options: ["am not owning", "don't own", "am not own"], answer: 1, why: "Own este verb de stare." },
    { type: "choose", prompt: "They ___ the contract right now.", options: ["sign", "are signing", "signs"], answer: 1, why: "Right now cere continuous." },
    { type: "transform", prompt: "We are working on the budget. (negativ)", answer: ["We aren't working on the budget.", "We are not working on the budget."], why: "Negativul se face adăugând not după auxiliar." },
    { type: "transform", prompt: "He is coming to the meeting. (interogativ)", answer: ["Is he coming to the meeting?"], why: "Auxiliarul is trece în față." },
    { type: "transform", prompt: "I work from home today. (corectează timpul)", answer: ["I am working from home today.", "I'm working from home today."], why: "Today arată o situație temporară, deci continuous." },
    { type: "transform", prompt: "She isn't listening. (afirmativ)", answer: ["She is listening.", "She's listening."], why: "Se scoate not din formă." },
    { type: "translate", prompt: "Chiar acum vorbesc cu furnizorul.", answer: ["I am talking to the supplier right now.", "I'm talking to the supplier right now.", "I am speaking to the supplier right now.", "I'm speaking to the supplier right now."], why: "Right now cere Present Continuous." },
    { type: "translate", prompt: "Săptămâna asta lucrez de acasă.", answer: ["I am working from home this week.", "I'm working from home this week."], why: "Situație temporară, marcată de this week." },
    { type: "translate", prompt: "Nu răspund la telefon azi.", answer: ["They aren't answering the phone today.", "They are not answering the phone today.", "He isn't answering the phone today.", "She isn't answering the phone today."], why: "Situație de azi, deci continuous la negativ." },
    { type: "translate", prompt: "Ce faci vineri?", answer: ["What are you doing on Friday?", "What are you doing Friday?"], why: "Plan pentru viitorul apropiat, deci Present Continuous." },
    { type: "translate", prompt: "Prețurile cresc din nou.", answer: ["Prices are going up again.", "The prices are going up again.", "Prices are rising again.", "The prices are rising again."], why: "Tendință în desfășurare." },
    { type: "translate", prompt: "Mereu schimbă termenul limită.", answer: ["They are always changing the deadline.", "They're always changing the deadline.", "He is always changing the deadline.", "She is always changing the deadline."], why: "Always plus continuous, pentru reproș." }
  ],
  finalTest: [
    { type: "fill", prompt: "Be quiet, the baby ___ (sleep).", answer: ["is sleeping", "'s sleeping"], why: "Acțiune de chiar acum." },
    { type: "fill", prompt: "I ___ (not / feel) well today.", answer: ["am not feeling", "'m not feeling", "don't feel", "do not feel"], why: "Feel acceptă ambele forme; today susține continuous." },
    { type: "fill", prompt: "___ (she / come) to the wedding?", answer: ["Is she coming", "is she coming"], why: "Plan fixat, întrebare cu Is." },
    { type: "choose", prompt: "I ___ that this is the best option.", options: ["am believing", "believe", "believes"], answer: 1, why: "Believe este verb de stare." },
    { type: "choose", prompt: "We ___ the offer this afternoon, not now.", options: ["send", "are sending", "sends"], answer: 1, why: "Aranjament fixat pentru mai târziu." },
    { type: "choose", prompt: "He ___ his emails twice a day.", options: ["is checking", "checks", "check"], answer: 1, why: "Twice a day arată rutină, deci Present Simple." },
    { type: "choose", prompt: "Why ___ you ___ at me like that?", options: ["do / look", "are / looking", "is / looking"], answer: 1, why: "Acțiune de acum, cu you deci are." },
    { type: "choose", prompt: "The company ___ ten new people this year.", options: ["hires", "is hiring", "hire"], answer: 1, why: "This year arată o perioadă în desfășurare." },
    { type: "transform", prompt: "They are printing the invitations. (interogativ)", answer: ["Are they printing the invitations?"], why: "Auxiliarul trece înaintea subiectului." },
    { type: "transform", prompt: "I am not driving today. (afirmativ)", answer: ["I am driving today.", "I'm driving today."], why: "Se scoate not." },
    { type: "transform", prompt: "She reads a book at the moment. (corectează timpul)", answer: ["She is reading a book at the moment.", "She's reading a book at the moment."], why: "At the moment cere continuous." },
    { type: "translate", prompt: "Stau la părinți luna asta.", answer: ["I am staying with my parents this month.", "I'm staying with my parents this month."], why: "Situație temporară." },
    { type: "translate", prompt: "Nu funcționează internetul.", answer: ["The internet isn't working.", "The internet is not working."], why: "Problemă de acum." },
    { type: "translate", prompt: "Luni zbor la Londra.", answer: ["I am flying to London on Monday.", "I'm flying to London on Monday."], why: "Plan fixat cu dată, deci Present Continuous." },
    { type: "translate", prompt: "Ce citești?", answer: ["What are you reading?"], why: "Acțiune de acum, întrebare cu are." }
  ]
});

window.E360DATA.tenses.push({
  id: "present-perfect",
  group: "prezent",
  level: "B1",
  title: "Present Perfect",
  summary: "Leagă trecutul de prezent: experiențe de viață, acțiuni recente și rezultate care se văd acum.",
  also: "Regula de aur: dacă spui exact când s-a întâmplat, folosești Past Simple, nu Present Perfect.",
  form: {
    affirmative: "S + have/has + V3 (participiu)",
    affirmativeExample: "I have finished the report. She has sent the invoice.",
    negative: "S + have/has + not + V3",
    negativeExample: "We haven't received the payment yet.",
    question: "Have/Has + S + V3?",
    questionExample: "Have you spoken to the client?",
    short: "Yes, I have. / No, she hasn't.",
    shortExample: "Has he called? No, he hasn't.",
    note: "V3 este a treia formă a verbului: go-went-gone, see-saw-seen, write-wrote-written. La verbele regulate V3 este identic cu forma de trecut: worked, finished."
  },
  uses: [
    { ro: "Experiențe de viață, fără moment precis", examples: [
      { en: "I have been to London twice.", ro: "Am fost la Londra de două ori.", highlight: "have been" },
      { en: "She has never worked with this supplier.", ro: "N-a lucrat niciodată cu furnizorul ăsta.", highlight: "has never worked" } ] },
    { ro: "Acțiune terminată recent, cu rezultat vizibil acum", examples: [
      { en: "I have lost my keys, so I can't get in.", ro: "Mi-am pierdut cheile, așa că nu pot intra.", highlight: "have lost" },
      { en: "They have just finished the setup.", ro: "Tocmai au terminat montajul.", highlight: "have just finished" } ] },
    { ro: "Acțiune începută în trecut care continuă și acum, cu since și for", examples: [
      { en: "We have worked together for five years.", ro: "Lucrăm împreună de cinci ani.", highlight: "have worked" },
      { en: "I have known her since 2019.", ro: "O cunosc din 2019.", highlight: "have known" } ] },
    { ro: "Perioadă de timp care nu s-a încheiat: today, this week, this year", examples: [
      { en: "I have sent four offers today.", ro: "Am trimis patru oferte azi.", highlight: "have sent" },
      { en: "We haven't had a single complaint this month.", ro: "Nu am avut nicio reclamație luna asta.", highlight: "haven't had" } ] },
    { ro: "Cu superlativ și cu it is the first time", examples: [
      { en: "This is the best coffee I have ever had.", ro: "Asta e cea mai bună cafea pe care am băut-o.", highlight: "have ever had" },
      { en: "It is the first time I have driven abroad.", ro: "E prima dată când conduc în străinătate.", highlight: "have driven" } ] }
  ],
  signalWords: ["already", "yet", "just", "ever", "never", "since", "for", "so far", "recently", "lately", "this week", "up to now", "still (în negativ)"],
  compareWith: {
    id: "past-simple",
    leftTitle: "Present Perfect: contează rezultatul",
    rightTitle: "Past Simple: contează momentul",
    rows: [
      { left: "I have lost my keys. (nu le am acum)", right: "I lost my keys yesterday. (moment precis)" },
      { left: "She has written three emails today.", right: "She wrote three emails yesterday." },
      { left: "Have you ever been to Italy?", right: "When did you go to Italy?" },
      { left: "We have lived here for ten years. (și acum)", right: "We lived there for ten years. (nu mai locuim)" },
      { left: "He has just arrived.", right: "He arrived ten minutes ago." }
    ]
  },
  mistakes: [
    { wrong: "I am living here since 2010.", right: "I have lived here since 2010.", why: "Since și for cer Present Perfect, nu prezent simplu sau continuous." },
    { wrong: "I have seen him yesterday.", right: "I saw him yesterday.", why: "Yesterday este moment precis din trecut, deci Past Simple." },
    { wrong: "She has went to the bank.", right: "She has gone to the bank.", why: "După have/has se pune participiul, gone, nu forma de trecut went." },
    { wrong: "I have finished it since two hours.", right: "I finished it two hours ago.", why: "Since se folosește cu un moment, for cu o durată, iar ago cere Past Simple." },
    { wrong: "How long time do you know him?", right: "How long have you known him?", why: "Durata până în prezent se cere cu how long plus Present Perfect." },
    { wrong: "I have already ate.", right: "I have already eaten.", why: "Participiul lui eat este eaten." },
    { wrong: "He has not came yet.", right: "He hasn't come yet.", why: "Participiul lui come este come, nu came." }
  ],
  examples: [
    { en: "I have already sent the invoice.", ro: "Am trimis deja factura.", highlight: "have already sent" },
    { en: "She hasn't replied yet.", ro: "Încă nu a răspuns.", highlight: "hasn't replied" },
    { en: "Have you ever worked with a Spanish client?", ro: "Ai lucrat vreodată cu un client spaniol?", highlight: "Have you ever worked" },
    { en: "We have known each other since university.", ro: "Ne cunoaștem din facultate.", highlight: "have known" },
    { en: "They have just confirmed the date.", ro: "Tocmai au confirmat data.", highlight: "have just confirmed" },
    { en: "He has worked here for eight years.", ro: "Lucrează aici de opt ani.", highlight: "has worked" },
    { en: "I have never seen such a small venue.", ro: "N-am văzut niciodată o locație atât de mică.", highlight: "have never seen" },
    { en: "The price has gone up three times this year.", ro: "Prețul a crescut de trei ori anul ăsta.", highlight: "has gone up" },
    { en: "We haven't decided anything so far.", ro: "Până acum nu am decis nimic.", highlight: "haven't decided" },
    { en: "It is the first time I have used this software.", ro: "E prima dată când folosesc programul ăsta.", highlight: "have used" },
    { en: "Someone has taken my charger.", ro: "Cineva mi-a luat încărcătorul.", highlight: "has taken" },
    { en: "I have been to that restaurant twice.", ro: "Am fost la restaurantul ăla de două ori.", highlight: "have been" }
  ],
  exercises: [
    { type: "fill", prompt: "She ___ (finish) the report already.", answer: ["has finished", "'s finished"], hint: "already", why: "Already cere Present Perfect." },
    { type: "fill", prompt: "We ___ (not / receive) the payment yet.", answer: ["haven't received", "have not received"], hint: "yet", why: "Yet în negativ cere Present Perfect." },
    { type: "fill", prompt: "___ (you / ever / be) to Portugal?", answer: ["Have you ever been", "have you ever been"], hint: "experiență", why: "Ever plus experiență de viață cere Present Perfect." },
    { type: "fill", prompt: "I ___ (know) him since 2018.", answer: ["have known", "'ve known"], hint: "since", why: "Since cere Present Perfect." },
    { type: "fill", prompt: "They ___ (work) together for three years.", answer: ["have worked", "'ve worked"], hint: "for", why: "For plus durată până acum cere Present Perfect." },
    { type: "fill", prompt: "He ___ (just / send) the confirmation.", answer: ["has just sent", "'s just sent"], hint: "just", why: "Just se pune între has și participiu." },
    { type: "fill", prompt: "I ___ (write) five emails so far today.", answer: ["have written", "'ve written"], hint: "so far", why: "So far și today arată o perioadă neîncheiată." },
    { type: "fill", prompt: "Someone ___ (break) the coffee machine.", answer: ["has broken", "'s broken"], hint: "rezultat acum", why: "Rezultat vizibil în prezent, participiul lui break este broken." },
    { type: "choose", prompt: "I ___ him since Monday.", options: ["didn't see", "haven't seen", "don't see"], answer: 1, why: "Since plus un moment din trecut cere Present Perfect." },
    { type: "choose", prompt: "___ you finished the presentation?", options: ["Have", "Did", "Are"], answer: 0, why: "Finished este participiu, deci auxiliarul este Have." },
    { type: "choose", prompt: "We ___ the contract last Friday.", options: ["have signed", "signed", "have sign"], answer: 1, why: "Last Friday este moment precis, deci Past Simple." },
    { type: "choose", prompt: "She has ___ to the bank.", options: ["went", "gone", "go"], answer: 1, why: "După has se folosește participiul gone." },
    { type: "choose", prompt: "This is the worst hotel I ___ stayed in.", options: ["have ever", "ever", "did ever"], answer: 0, why: "După superlativ se folosește Present Perfect cu ever." },
    { type: "choose", prompt: "How long ___ you ___ in this company?", options: ["do / work", "have / worked", "did / work"], answer: 1, why: "How long despre o situație care continuă cere Present Perfect." },
    { type: "transform", prompt: "They have sold the house. (negativ)", answer: ["They haven't sold the house.", "They have not sold the house."], why: "Not se pune după have." },
    { type: "transform", prompt: "She has finished her shift. (interogativ)", answer: ["Has she finished her shift?"], why: "Auxiliarul has trece înaintea subiectului." },
    { type: "transform", prompt: "I started this job in 2020. (folosește since)", answer: ["I have worked in this job since 2020.", "I have had this job since 2020.", "I've worked in this job since 2020.", "I've had this job since 2020."], why: "Since plus anul cere Present Perfect." },
    { type: "transform", prompt: "He arrived five minutes ago. (folosește just)", answer: ["He has just arrived.", "He's just arrived."], why: "Just plus Present Perfect exprimă acțiunea foarte recentă." },
    { type: "translate", prompt: "Nu am mâncat încă.", answer: ["I haven't eaten yet.", "I have not eaten yet."], why: "Încă în negativ se traduce cu yet, pus la final." },
    { type: "translate", prompt: "Lucrez aici de cinci ani.", answer: ["I have worked here for five years.", "I've worked here for five years.", "I have been working here for five years.", "I've been working here for five years."], why: "De cinci ani, cu situația care continuă, cere Present Perfect cu for." },
    { type: "translate", prompt: "Ai vorbit deja cu ei?", answer: ["Have you already spoken to them?", "Have you spoken to them yet?", "Have you already talked to them?", "Have you talked to them yet?"], why: "Deja în întrebare se traduce cu already sau cu yet la final." },
    { type: "translate", prompt: "Tocmai am trimis oferta.", answer: ["I have just sent the offer.", "I've just sent the offer."], why: "Just se pune între have și participiu." },
    { type: "translate", prompt: "N-am fost niciodată în Grecia.", answer: ["I have never been to Greece.", "I've never been to Greece."], why: "Experiență de viață negativă: never plus been to." },
    { type: "translate", prompt: "Prețul a crescut de două ori anul acesta.", answer: ["The price has gone up twice this year.", "The price has increased twice this year.", "The price has risen twice this year."], why: "This year este o perioadă neîncheiată, deci Present Perfect." }
  ],
  finalTest: [
    { type: "fill", prompt: "I ___ (not / speak) to him since the meeting.", answer: ["haven't spoken", "have not spoken"], why: "Since cere Present Perfect." },
    { type: "fill", prompt: "___ (they / confirm) the booking yet?", answer: ["Have they confirmed", "have they confirmed"], why: "Yet în întrebare cere Present Perfect." },
    { type: "fill", prompt: "She ___ (be) to Italy three times.", answer: ["has been", "'s been"], why: "Experiență de viață, been to pentru a fi fost și a te fi întors." },
    { type: "choose", prompt: "We ___ the new system last month.", options: ["have installed", "installed", "have install"], answer: 1, why: "Last month este moment precis din trecut." },
    { type: "choose", prompt: "He hasn't called ___.", options: ["already", "yet", "since"], answer: 1, why: "În negativ se folosește yet." },
    { type: "choose", prompt: "I have worked here ___ 2021.", options: ["for", "since", "from"], answer: 1, why: "Since se folosește cu un moment de start." },
    { type: "choose", prompt: "They have ___ the deadline three times.", options: ["change", "changed", "changing"], answer: 1, why: "După have se pune participiul." },
    { type: "choose", prompt: "___ ever ___ a wedding abroad?", options: ["Did you / organise", "Have you / organised", "Are you / organising"], answer: 1, why: "Ever plus experiență cere Present Perfect." },
    { type: "transform", prompt: "I have already booked the venue. (negativ cu yet)", answer: ["I haven't booked the venue yet.", "I have not booked the venue yet."], why: "Already devine yet la negativ, la finalul propoziției." },
    { type: "transform", prompt: "She started working here in 2015. (folosește for)", answer: ["She has worked here for ten years.", "She's worked here for ten years."], why: "For cere o durată, iar situația continuă până acum." },
    { type: "transform", prompt: "We have met the supplier. (interogativ)", answer: ["Have we met the supplier?"], why: "Auxiliarul trece în față." },
    { type: "translate", prompt: "Cineva a luat scaunul meu.", answer: ["Someone has taken my chair.", "Somebody has taken my chair."], why: "Rezultat vizibil acum, deci Present Perfect." },
    { type: "translate", prompt: "Am trimis trei oferte săptămâna asta.", answer: ["I have sent three offers this week.", "I've sent three offers this week."], why: "This week este perioadă neîncheiată." },
    { type: "translate", prompt: "N-a răspuns încă la mesajul meu.", answer: ["He hasn't replied to my message yet.", "She hasn't replied to my message yet.", "He has not replied to my message yet.", "She has not replied to my message yet.", "He hasn't answered my message yet.", "She hasn't answered my message yet."], why: "Yet plus negativ, la finalul propoziției." },
    { type: "translate", prompt: "E prima dată când vin aici.", answer: ["It is the first time I have been here.", "It's the first time I have been here.", "It's the first time I've been here.", "It is the first time I've been here."], why: "După it is the first time se folosește Present Perfect." }
  ]
});

window.E360DATA.tenses.push({
  id: "present-perfect-continuous",
  group: "prezent",
  level: "B2",
  title: "Present Perfect Continuous",
  summary: "Accentuează durata unei acțiuni care a început în trecut și încă ține sau tocmai s-a oprit, cu urme vizibile.",
  also: "Diferența față de Present Perfect simplu: aici contează cât timp și efortul, nu rezultatul numărat.",
  form: {
    affirmative: "S + have/has + been + V-ing",
    affirmativeExample: "I have been working on this since morning.",
    negative: "S + have/has + not + been + V-ing",
    negativeExample: "She hasn't been sleeping well lately.",
    question: "Have/Has + S + been + V-ing?",
    questionExample: "Have you been waiting long?",
    short: "Yes, I have. / No, he hasn't.",
    shortExample: "Has it been raining? Yes, it has.",
    note: "Verbele de stare (know, be, own, believe) nu se folosesc aici: se spune I have known, nu I have been knowing."
  },
  uses: [
    { ro: "Acțiune care a început în trecut și continuă acum, cu accent pe durată", examples: [
      { en: "I have been working here since March.", ro: "Lucrez aici din martie.", highlight: "have been working" },
      { en: "They have been looking for a venue for two months.", ro: "Caută o locație de două luni.", highlight: "have been looking" } ] },
    { ro: "Acțiune tocmai încheiată, ale cărei urme se văd acum", examples: [
      { en: "You look tired. Have you been running?", ro: "Pari obosit. Ai alergat?", highlight: "Have you been running" },
      { en: "The street is wet, it has been raining.", ro: "Strada e udă, a plouat.", highlight: "has been raining" } ] },
    { ro: "Activitate repetată pe o perioadă, adesea cu nuanță de deranj", examples: [
      { en: "He has been calling me all morning.", ro: "M-a sunat toată dimineața.", highlight: "has been calling" },
      { en: "We have been having problems with this supplier.", ro: "Avem probleme cu furnizorul ăsta de ceva vreme.", highlight: "have been having" } ] },
    { ro: "Cu how long, pentru a întreba cât durează deja ceva", examples: [
      { en: "How long have you been learning English?", ro: "De cât timp înveți engleză?", highlight: "have you been learning" },
      { en: "How long has she been waiting?", ro: "De cât timp așteaptă?", highlight: "has she been waiting" } ] }
  ],
  signalWords: ["how long", "since", "for", "all day", "all morning", "lately", "recently", "these last few weeks"],
  compareWith: {
    id: "present-perfect",
    leftTitle: "Present Perfect Continuous: durata",
    rightTitle: "Present Perfect: rezultatul",
    rows: [
      { left: "I have been writing emails all morning. (activitate)", right: "I have written ten emails. (rezultat numărat)" },
      { left: "She has been painting the office. (poate nu a terminat)", right: "She has painted the office. (gata)" },
      { left: "They have been talking for an hour. (încă vorbesc)", right: "They have talked about it. (subiect acoperit)" },
      { left: "I have been reading that report. (în curs)", right: "I have read that report. (l-am citit tot)" },
      { left: "He has been living here since May. (temporar, accent pe durată)", right: "He has lived here since May. (neutru)" }
    ]
  },
  mistakes: [
    { wrong: "I am working here since March.", right: "I have been working here since March.", why: "Since cere perfect, nu prezent continuous, oricât de mult ar semăna cu româna." },
    { wrong: "I have been knowing her for years.", right: "I have known her for years.", why: "Know este verb de stare și nu primește forma continuous." },
    { wrong: "How long are you waiting?", right: "How long have you been waiting?", why: "Durata de până acum cere Present Perfect Continuous." },
    { wrong: "She has been wrote three reports.", right: "She has written three reports.", why: "Amestec de forme. Cu been urmează obligatoriu -ing, iar aici rezultatul numărat cere perfectul simplu." },
    { wrong: "I have been work all day.", right: "I have been working all day.", why: "După been verbul trebuie să aibă -ing." },
    { wrong: "We are having problems since January.", right: "We have been having problems since January.", why: "Since obligă la perfect continuous." }
  ],
  examples: [
    { en: "I have been trying to reach him all morning.", ro: "Încerc să-l prind toată dimineața.", highlight: "have been trying" },
    { en: "How long have you been waiting for the invoice?", ro: "De cât timp aștepți factura?", highlight: "have you been waiting" },
    { en: "She has been working on the proposal since Monday.", ro: "Lucrează la propunere de luni.", highlight: "has been working" },
    { en: "They haven't been answering our emails lately.", ro: "În ultima vreme nu ne răspund la mailuri.", highlight: "haven't been answering" },
    { en: "My eyes hurt, I have been staring at the screen for hours.", ro: "Mă dor ochii, mă uit în ecran de ore întregi.", highlight: "have been staring" },
    { en: "It has been raining since we left the office.", ro: "Plouă de când am plecat de la birou.", highlight: "has been raining" },
    { en: "We have been using this software for two years.", ro: "Folosim programul ăsta de doi ani.", highlight: "have been using" },
    { en: "He has been complaining about the noise all week.", ro: "Se plânge de zgomot toată săptămâna.", highlight: "has been complaining" },
    { en: "I have been meaning to call you.", ro: "Voiam să te sun de mai demult.", highlight: "have been meaning" },
    { en: "The team has been preparing for this event since spring.", ro: "Echipa se pregătește pentru evenimentul ăsta din primăvară.", highlight: "has been preparing" },
    { en: "You have been driving for four hours, let me take over.", ro: "Conduci de patru ore, lasă-mă pe mine.", highlight: "have been driving" },
    { en: "Prices have been rising steadily since January.", ro: "Prețurile cresc constant din ianuarie.", highlight: "have been rising" }
  ],
  exercises: [
    { type: "fill", prompt: "I ___ (wait) for an answer since Tuesday.", answer: ["have been waiting", "'ve been waiting"], hint: "since", why: "Since plus durată în desfășurare cere Present Perfect Continuous." },
    { type: "fill", prompt: "How long ___ (you / learn) English?", answer: ["have you been learning", "have you been studying"], hint: "how long", why: "How long despre o activitate care continuă cere perfect continuous." },
    { type: "fill", prompt: "She ___ (work) on the budget all afternoon.", answer: ["has been working", "'s been working"], hint: "all afternoon", why: "All afternoon accentuează durata." },
    { type: "fill", prompt: "They ___ (not / answer) our calls lately.", answer: ["haven't been answering", "have not been answering"], hint: "lately", why: "Lately cu acțiune repetată cere perfect continuous." },
    { type: "fill", prompt: "It ___ (rain) all day, the ground is soaked.", answer: ["has been raining", "'s been raining"], hint: "urme vizibile", why: "Urme vizibile ale unei acțiuni recente." },
    { type: "fill", prompt: "We ___ (try) to fix this bug for two days.", answer: ["have been trying", "'ve been trying"], hint: "for", why: "For plus durată în desfășurare." },
    { type: "fill", prompt: "He ___ (talk) on the phone since he arrived.", answer: ["has been talking", "'s been talking"], hint: "since", why: "Since plus moment de start." },
    { type: "fill", prompt: "You look exhausted. ___ (you / run)?", answer: ["Have you been running", "have you been running"], hint: "rezultat vizibil", why: "Urmă vizibilă a unei acțiuni tocmai terminate." },
    { type: "choose", prompt: "I ___ her for ten years.", options: ["have been knowing", "have known", "am knowing"], answer: 1, why: "Know este verb de stare, deci perfect simplu." },
    { type: "choose", prompt: "She ___ five reports this week.", options: ["has been writing", "has written", "is writing"], answer: 1, why: "Rezultat numărat, deci Present Perfect simplu." },
    { type: "choose", prompt: "How long ___ this project?", options: ["are you working on", "have you been working on", "do you work on"], answer: 1, why: "Durata până acum cere perfect continuous." },
    { type: "choose", prompt: "They ___ in that flat since 2019.", options: ["are living", "have been living", "lived"], answer: 1, why: "Since cere perfect, iar living accentuează durata." },
    { type: "choose", prompt: "The printer ___ strange noises all morning.", options: ["makes", "has been making", "is make"], answer: 1, why: "All morning arată o activitate repetată până acum." },
    { type: "choose", prompt: "I'm tired because I ___ since six.", options: ["work", "have been working", "am working"], answer: 1, why: "Cauza oboselii de acum este activitatea de durată." },
    { type: "transform", prompt: "I started waiting an hour ago and I am still waiting. (perfect continuous)", answer: ["I have been waiting for an hour.", "I've been waiting for an hour."], why: "Durata până în prezent se exprimă cu for plus perfect continuous." },
    { type: "transform", prompt: "She has been cooking. (negativ)", answer: ["She hasn't been cooking.", "She has not been cooking."], why: "Not se pune după has." },
    { type: "transform", prompt: "They have been arguing all day. (interogativ)", answer: ["Have they been arguing all day?"], why: "Auxiliarul have trece înaintea subiectului." },
    { type: "transform", prompt: "It started snowing in the morning and it is still snowing. (perfect continuous)", answer: ["It has been snowing since the morning.", "It's been snowing since the morning.", "It has been snowing all day."], why: "Since plus momentul de start." },
    { type: "translate", prompt: "Lucrez la raportul ăsta de trei ore.", answer: ["I have been working on this report for three hours.", "I've been working on this report for three hours."], why: "For plus durată în desfășurare." },
    { type: "translate", prompt: "De cât timp aștepți?", answer: ["How long have you been waiting?"], why: "How long plus perfect continuous." },
    { type: "translate", prompt: "Plouă de azi dimineață.", answer: ["It has been raining since this morning.", "It's been raining since this morning."], why: "Since plus momentul de start, acțiune care continuă." },
    { type: "translate", prompt: "Caută un apartament de două luni.", answer: ["He has been looking for a flat for two months.", "She has been looking for a flat for two months.", "He's been looking for a flat for two months.", "She's been looking for a flat for two months.", "He has been looking for an apartment for two months.", "She has been looking for an apartment for two months."], why: "For plus durată, activitate în desfășurare." },
    { type: "translate", prompt: "Nu am dormit bine în ultima vreme.", answer: ["I haven't been sleeping well lately.", "I have not been sleeping well lately.", "I haven't been sleeping well recently."], why: "Lately cu situație repetată cere perfect continuous." },
    { type: "translate", prompt: "Folosim sistemul ăsta din 2022.", answer: ["We have been using this system since 2022.", "We've been using this system since 2022.", "We have used this system since 2022."], why: "Since plus anul de start." }
  ],
  finalTest: [
    { type: "fill", prompt: "He ___ (drive) for six hours without a break.", answer: ["has been driving", "'s been driving"], why: "Durata unei activități care continuă." },
    { type: "fill", prompt: "How long ___ (they / live) abroad?", answer: ["have they been living", "have they lived"], why: "How long cu situație care continuă." },
    { type: "fill", prompt: "I ___ (not / feel) well for a few days.", answer: ["haven't been feeling", "have not been feeling"], why: "For a few days plus stare în desfășurare." },
    { type: "choose", prompt: "We ___ each other since school.", options: ["have been knowing", "have known", "are knowing"], answer: 1, why: "Verb de stare, deci perfect simplu." },
    { type: "choose", prompt: "She ___ three emails while you were out.", options: ["has been sending", "has sent", "is sending"], answer: 1, why: "Rezultat numărat, perfect simplu." },
    { type: "choose", prompt: "Your hands are dirty. What ___?", options: ["have you done", "have you been doing", "do you do"], answer: 1, why: "Urme vizibile ale unei activități, deci perfect continuous." },
    { type: "choose", prompt: "They ___ about the same problem all week.", options: ["complain", "have been complaining", "are complain"], answer: 1, why: "Activitate repetată pe o perioadă." },
    { type: "choose", prompt: "I ___ to call you for days.", options: ["am trying", "have been trying", "try"], answer: 1, why: "For days cere perfect continuous." },
    { type: "transform", prompt: "It started raining two hours ago and it hasn't stopped. (perfect continuous)", answer: ["It has been raining for two hours.", "It's been raining for two hours."], why: "Durata până acum se exprimă cu for." },
    { type: "transform", prompt: "He has been studying all night. (interogativ)", answer: ["Has he been studying all night?"], why: "Auxiliarul trece în față." },
    { type: "transform", prompt: "We have been waiting. (negativ)", answer: ["We haven't been waiting.", "We have not been waiting."], why: "Not după have." },
    { type: "translate", prompt: "Se plânge de o săptămână.", answer: ["He has been complaining for a week.", "She has been complaining for a week.", "He's been complaining for a week.", "She's been complaining for a week."], why: "For plus durată." },
    { type: "translate", prompt: "De cât timp lucrezi în evenimente?", answer: ["How long have you been working in events?", "How long have you worked in events?"], why: "How long despre o activitate care continuă." },
    { type: "translate", prompt: "Am încercat toată ziua să dau de ei.", answer: ["I have been trying to reach them all day.", "I've been trying to reach them all day.", "I have been trying to get hold of them all day."], why: "All day plus activitate repetată." },
    { type: "translate", prompt: "Prețurile cresc de anul trecut.", answer: ["Prices have been rising since last year.", "Prices have been going up since last year.", "The prices have been rising since last year.", "The prices have been going up since last year."], why: "Since plus moment de start, tendință în desfășurare." }
  ]
});

window.E360DATA.tenses.push({
  id: "past-simple",
  group: "trecut",
  level: "B1",
  title: "Past Simple",
  summary: "Acțiuni terminate într-un moment precis din trecut, care nu mai au legătură cu prezentul.",
  also: "Dacă poți spune când, folosești Past Simple. Aceasta este regula care rezolvă 90 la sută din confuzii.",
  form: {
    affirmative: "S + V2 (verb la trecut)",
    affirmativeExample: "I sent the offer yesterday. She went to Vienna last week.",
    negative: "S + did not + V (infinitiv)",
    negativeExample: "We didn't finish on time.",
    question: "Did + S + V (infinitiv)?",
    questionExample: "Did you call the venue?",
    short: "Yes, I did. / No, she didn't.",
    shortExample: "Did he come? No, he didn't.",
    note: "Verbele regulate primesc -ed: worked, finished, decided. Cele neregulate au formă proprie: go-went, see-saw, take-took. La to be nu se folosește did: I was, you were, was I?, I wasn't."
  },
  uses: [
    { ro: "Acțiune terminată, cu moment precis exprimat sau subînțeles", examples: [
      { en: "We signed the contract on Monday.", ro: "Am semnat contractul luni.", highlight: "signed" },
      { en: "She called me an hour ago.", ro: "M-a sunat acum o oră.", highlight: "called" } ] },
    { ro: "Șir de acțiuni în ordine, la povestit", examples: [
      { en: "I arrived, checked the room and started the setup.", ro: "Am ajuns, am verificat sala și am început montajul.", highlight: "arrived" },
      { en: "He opened the laptop, looked at the numbers and left.", ro: "A deschis laptopul, s-a uitat la cifre și a plecat.", highlight: "opened" } ] },
    { ro: "Obiceiuri din trecut care nu mai sunt valabile", examples: [
      { en: "I worked in a restaurant when I was a student.", ro: "Am lucrat într-un restaurant când eram student.", highlight: "worked" },
      { en: "We always spent August at the seaside.", ro: "Petreceam mereu august la mare.", highlight: "spent" } ] },
    { ro: "Situații și stări încheiate", examples: [
      { en: "The venue was too small for 200 people.", ro: "Locația era prea mică pentru 200 de persoane.", highlight: "was" },
      { en: "They were very happy with the result.", ro: "Au fost foarte mulțumiți de rezultat.", highlight: "were" } ] }
  ],
  signalWords: ["yesterday", "last week", "last year", "two days ago", "in 2019", "then", "when I was", "at that time", "the other day"],
  compareWith: {
    id: "present-perfect",
    leftTitle: "Past Simple: moment precis",
    rightTitle: "Present Perfect: fără moment",
    rows: [
      { left: "I saw him yesterday.", right: "I have seen him. (nu spun când)" },
      { left: "She worked here for two years. (a plecat)", right: "She has worked here for two years. (încă lucrează)" },
      { left: "Did you eat? (la masa de atunci)", right: "Have you eaten? (până acum)" },
      { left: "We sold ten tickets last month.", right: "We have sold ten tickets this month." },
      { left: "He lost his keys on Friday.", right: "He has lost his keys. (nu le are nici acum)" }
    ]
  },
  mistakes: [
    { wrong: "I didn't went there.", right: "I didn't go there.", why: "După did/didn't verbul revine la infinitiv. Trecutul este deja marcat de did." },
    { wrong: "Did you saw the invoice?", right: "Did you see the invoice?", why: "Aceeași regulă la întrebare: după Did se pune infinitivul." },
    { wrong: "I was go to the office.", right: "I went to the office.", why: "Was nu se combină cu infinitivul. Trecutul simplu al lui go este went." },
    { wrong: "He didn't was at home.", right: "He wasn't at home.", why: "La to be nu se folosește did. Negativul este wasn't sau weren't." },
    { wrong: "When did you arrived?", right: "When did you arrive?", why: "Did preia trecutul, verbul rămâne la infinitiv." },
    { wrong: "I have called him yesterday.", right: "I called him yesterday.", why: "Yesterday este moment precis, deci Past Simple, nu Present Perfect." },
    { wrong: "We was late.", right: "We were late.", why: "La we, you, they se folosește were, nu was." }
  ],
  examples: [
    { en: "I sent the quote on Tuesday morning.", ro: "Am trimis oferta marți dimineață.", highlight: "sent" },
    { en: "They didn't confirm the booking in time.", ro: "N-au confirmat rezervarea la timp.", highlight: "didn't confirm" },
    { en: "Did you speak to the manager about it?", ro: "Ai vorbit cu managerul despre asta?", highlight: "Did you speak" },
    { en: "The event went much better than we expected.", ro: "Evenimentul a mers mult mai bine decât ne așteptam.", highlight: "went" },
    { en: "She was the project manager back then.", ro: "Ea era manager de proiect pe atunci.", highlight: "was" },
    { en: "We paid the deposit two weeks ago.", ro: "Am plătit avansul acum două săptămâni.", highlight: "paid" },
    { en: "He left the company in 2021.", ro: "A plecat din firmă în 2021.", highlight: "left" },
    { en: "I didn't know that they had changed the date.", ro: "Nu știam că schimbaseră data.", highlight: "didn't know" },
    { en: "The guests arrived at seven and the music started at eight.", ro: "Invitații au ajuns la șapte și muzica a început la opt.", highlight: "arrived" },
    { en: "Where did you buy those lights?", ro: "De unde ai cumpărat luminile alea?", highlight: "did you buy" },
    { en: "It rained all day on Saturday.", ro: "Sâmbătă a plouat toată ziua.", highlight: "rained" },
    { en: "We weren't happy with the sound system.", ro: "Nu am fost mulțumiți de sonorizare.", highlight: "weren't" }
  ],
  exercises: [
    { type: "fill", prompt: "We ___ (sign) the contract last Friday.", answer: ["signed"], hint: "last Friday", why: "Moment precis din trecut, verb regulat cu -ed." },
    { type: "fill", prompt: "She ___ (go) to Vienna in March.", answer: ["went"], hint: "verb neregulat", why: "Trecutul lui go este went." },
    { type: "fill", prompt: "They ___ (not / answer) the phone yesterday.", answer: ["didn't answer", "did not answer"], hint: "negativ", why: "Negativul se face cu didn't plus infinitiv." },
    { type: "fill", prompt: "___ (you / see) the final version?", answer: ["Did you see", "did you see"], hint: "întrebare", why: "Did plus infinitiv, fără -ed." },
    { type: "fill", prompt: "The room ___ (be) too small for the group.", answer: ["was"], hint: "to be", why: "La singular se folosește was." },
    { type: "fill", prompt: "We ___ (be) very tired after the setup.", answer: ["were"], hint: "we", why: "La we se folosește were." },
    { type: "fill", prompt: "He ___ (take) the wrong exit and arrived late.", answer: ["took"], hint: "verb neregulat", why: "Trecutul lui take este took." },
    { type: "fill", prompt: "I ___ (pay) the invoice two weeks ago.", answer: ["paid"], hint: "ago", why: "Ago cere obligatoriu Past Simple. Trecutul lui pay este paid." },
    { type: "choose", prompt: "I ___ him at the conference last year.", options: ["have met", "met", "was meeting"], answer: 1, why: "Last year este moment precis din trecut." },
    { type: "choose", prompt: "She didn't ___ the email.", options: ["received", "receive", "receives"], answer: 1, why: "După didn't verbul rămâne la infinitiv." },
    { type: "choose", prompt: "___ they happy with the service?", options: ["Did", "Were", "Was"], answer: 1, why: "La to be cu they se folosește Were, fără did." },
    { type: "choose", prompt: "When ___ you ___ the flat?", options: ["did / bought", "did / buy", "have / bought"], answer: 1, why: "Did plus infinitiv." },
    { type: "choose", prompt: "We ___ in that hotel for three nights.", options: ["have stayed", "stayed", "were staying"], answer: 1, why: "Perioadă încheiată în trecut." },
    { type: "choose", prompt: "He ___ born in Constanta.", options: ["is", "was", "were"], answer: 1, why: "Se spune was born, la trecut, cu subiect la singular." },
    { type: "transform", prompt: "She finished the report. (negativ)", answer: ["She didn't finish the report.", "She did not finish the report."], why: "Didn't plus verb la infinitiv." },
    { type: "transform", prompt: "They arrived on time. (interogativ)", answer: ["Did they arrive on time?"], why: "Did plus subiect plus infinitiv." },
    { type: "transform", prompt: "I was at the office. (negativ)", answer: ["I wasn't at the office.", "I was not at the office."], why: "La to be negativul este wasn't, fără did." },
    { type: "transform", prompt: "He didn't call the client. (afirmativ)", answer: ["He called the client."], why: "La afirmativ verbul preia forma de trecut." },
    { type: "translate", prompt: "Am trimis oferta ieri.", answer: ["I sent the offer yesterday.", "I sent the quote yesterday."], why: "Yesterday cere Past Simple." },
    { type: "translate", prompt: "N-au confirmat rezervarea.", answer: ["They didn't confirm the booking.", "They did not confirm the booking."], why: "Didn't plus infinitiv." },
    { type: "translate", prompt: "Ai vorbit cu ei săptămâna trecută?", answer: ["Did you speak to them last week?", "Did you talk to them last week?"], why: "Întrebare la trecut cu Did." },
    { type: "translate", prompt: "Evenimentul a început la ora șapte.", answer: ["The event started at seven.", "The event started at 7.", "The event began at seven."], why: "Moment precis din trecut." },
    { type: "translate", prompt: "Nu eram acasă când ai sunat.", answer: ["I wasn't at home when you called.", "I was not at home when you called."], why: "La to be se folosește wasn't, iar când introduce momentul." },
    { type: "translate", prompt: "Am plătit avansul acum două săptămâni.", answer: ["I paid the deposit two weeks ago.", "We paid the deposit two weeks ago."], why: "Ago cere Past Simple." }
  ],
  finalTest: [
    { type: "fill", prompt: "They ___ (leave) before the end of the party.", answer: ["left"], why: "Trecutul lui leave este left." },
    { type: "fill", prompt: "___ (she / bring) the documents?", answer: ["Did she bring", "did she bring"], why: "Did plus infinitiv." },
    { type: "fill", prompt: "We ___ (not / have) enough chairs.", answer: ["didn't have", "did not have"], why: "Negativ cu didn't plus have la infinitiv." },
    { type: "choose", prompt: "I ___ that film three times last month.", options: ["have watched", "watched", "was watching"], answer: 1, why: "Last month arată o perioadă încheiată." },
    { type: "choose", prompt: "___ the guests satisfied?", options: ["Did", "Were", "Was"], answer: 1, why: "The guests este plural, deci Were, fără did." },
    { type: "choose", prompt: "He didn't ___ me about the change.", options: ["told", "tell", "tells"], answer: 1, why: "După didn't se pune infinitivul." },
    { type: "choose", prompt: "The band ___ playing at midnight.", options: ["stopped", "have stopped", "stops"], answer: 0, why: "Moment precis din trecut." },
    { type: "choose", prompt: "Where ___ you ___ last summer?", options: ["did / went", "did / go", "have / gone"], answer: 1, why: "Last summer cere Past Simple cu did plus infinitiv." },
    { type: "transform", prompt: "We booked the venue. (interogativ)", answer: ["Did we book the venue?"], why: "Did plus subiect plus infinitiv." },
    { type: "transform", prompt: "She was late. (negativ)", answer: ["She wasn't late.", "She was not late."], why: "La to be nu se folosește did." },
    { type: "transform", prompt: "They didn't like the menu. (afirmativ)", answer: ["They liked the menu."], why: "La afirmativ verbul primește -ed." },
    { type: "translate", prompt: "A plecat din firmă anul trecut.", answer: ["He left the company last year.", "She left the company last year."], why: "Last year cere Past Simple." },
    { type: "translate", prompt: "Nu am știut că s-a schimbat data.", answer: ["I didn't know the date had changed.", "I did not know the date had changed.", "I didn't know that the date had changed."], why: "Didn't plus infinitiv, plus un plusquamperfect pentru acțiunea anterioară." },
    { type: "translate", prompt: "Câți invitați au venit?", answer: ["How many guests came?", "How many guests turned up?", "How many guests arrived?"], why: "Când cuvântul de întrebare este subiectul, nu se folosește did." },
    { type: "translate", prompt: "Sâmbătă a plouat toată ziua.", answer: ["It rained all day on Saturday.", "On Saturday it rained all day."], why: "Perioadă încheiată din trecut." }
  ]
});

window.E360DATA.tenses.push({
  id: "past-continuous",
  group: "trecut",
  level: "B1",
  title: "Past Continuous",
  summary: "Acțiune în desfășurare la un moment din trecut, adesea întreruptă de altceva sau folosită ca fundal al poveștii.",
  also: "Se recunoaște ușor: while cere Past Continuous, when cere de obicei Past Simple.",
  form: {
    affirmative: "S + was/were + V-ing",
    affirmativeExample: "I was driving to the venue at eight.",
    negative: "S + was/were + not + V-ing",
    negativeExample: "They weren't listening.",
    question: "Was/Were + S + V-ing?",
    questionExample: "Were you working when I called?",
    short: "Yes, I was. / No, they weren't.",
    shortExample: "Was it raining? Yes, it was.",
    note: "Was la I, he, she, it. Were la you, we, they. Verbele de stare nu se folosesc la continuous."
  },
  uses: [
    { ro: "Acțiune în desfășurare la o oră precisă din trecut", examples: [
      { en: "At nine last night I was still working.", ro: "Aseară la nouă încă lucram.", highlight: "was still working" },
      { en: "This time yesterday we were setting up the stage.", ro: "Ieri la ora asta montam scena.", highlight: "were setting up" } ] },
    { ro: "Acțiune lungă întreruptă de una scurtă", examples: [
      { en: "I was writing the offer when the client called.", ro: "Scriam oferta când a sunat clientul.", highlight: "was writing" },
      { en: "She was crossing the street when it started to rain.", ro: "Traversa strada când a început să plouă.", highlight: "was crossing" } ] },
    { ro: "Două acțiuni paralele în trecut, cu while", examples: [
      { en: "While I was checking the sound, he was greeting the guests.", ro: "În timp ce eu verificam sunetul, el întâmpina invitații.", highlight: "was checking" },
      { en: "They were talking while we were loading the van.", ro: "Ei vorbeau în timp ce noi încărcam duba.", highlight: "were talking" } ] },
    { ro: "Fundalul unei povestiri, decorul scenei", examples: [
      { en: "It was raining and nobody was waiting outside.", ro: "Ploua și nu aștepta nimeni afară.", highlight: "was raining" },
      { en: "The music was playing and people were dancing.", ro: "Cânta muzica și lumea dansa.", highlight: "was playing" } ] }
  ],
  signalWords: ["while", "when", "as", "at that moment", "at eight o'clock last night", "this time yesterday", "all morning"],
  compareWith: {
    id: "past-simple",
    leftTitle: "Past Continuous: în desfășurare",
    rightTitle: "Past Simple: acțiune completă",
    rows: [
      { left: "I was reading the contract. (nu spun dacă l-am terminat)", right: "I read the contract. (l-am citit tot)" },
      { left: "When she arrived, we were eating. (masa începuse)", right: "When she arrived, we ate. (apoi am mâncat)" },
      { left: "He was driving home at midnight.", right: "He drove home at midnight." },
      { left: "They were discussing the price all afternoon.", right: "They discussed the price and agreed." },
      { left: "What were you doing at six? (activitate)", right: "What did you do at six? (fapt)" }
    ]
  },
  mistakes: [
    { wrong: "I was knowing the answer.", right: "I knew the answer.", why: "Verbele de stare nu se pun la continuous, nici la trecut." },
    { wrong: "While I was going home, I have met him.", right: "While I was going home, I met him.", why: "Acțiunea scurtă din trecut se pune la Past Simple, nu la Present Perfect." },
    { wrong: "We was waiting outside.", right: "We were waiting outside.", why: "La we se folosește were." },
    { wrong: "I was work when you called.", right: "I was working when you called.", why: "După was/were verbul trebuie să aibă -ing." },
    { wrong: "When I was arriving, the show started.", right: "When I arrived, the show started.", why: "Sosirea este o acțiune scurtă, deci Past Simple." },
    { wrong: "While she talked, I was taking notes.", right: "While she was talking, I was taking notes.", why: "While cere de obicei Past Continuous pentru acțiunea lungă." }
  ],
  examples: [
    { en: "I was checking the invoices when you rang.", ro: "Verificam facturile când ai sunat.", highlight: "was checking" },
    { en: "They were still loading the van at midnight.", ro: "La miezul nopții încă încărcau duba.", highlight: "were still loading" },
    { en: "What were you doing when the power went out?", ro: "Ce făceai când s-a luat curentul?", highlight: "were you doing" },
    { en: "She wasn't listening, she was reading her messages.", ro: "Nu asculta, își citea mesajele.", highlight: "wasn't listening" },
    { en: "While we were setting up, the client changed the plan.", ro: "În timp ce montam, clientul a schimbat planul.", highlight: "were setting up" },
    { en: "It was getting dark, so we turned on the lights.", ro: "Se întuneca, așa că am aprins luminile.", highlight: "was getting" },
    { en: "The team was working on two events at the same time.", ro: "Echipa lucra la două evenimente în același timp.", highlight: "was working" },
    { en: "I was driving when I saw the accident.", ro: "Conduceam când am văzut accidentul.", highlight: "was driving" },
    { en: "Everyone was talking, so nobody heard the announcement.", ro: "Toată lumea vorbea, așa că nimeni n-a auzit anunțul.", highlight: "was talking" },
    { en: "We were waiting for the DJ while the guests were arriving.", ro: "Îl așteptam pe DJ în timp ce soseau invitații.", highlight: "were waiting" },
    { en: "He was trying to fix the projector all afternoon.", ro: "A încercat toată după-amiaza să repare proiectorul.", highlight: "was trying" },
    { en: "At this time last year I was working in another company.", ro: "Anul trecut pe vremea asta lucram la altă firmă.", highlight: "was working" }
  ],
  exercises: [
    { type: "fill", prompt: "I ___ (drive) when the phone rang.", answer: ["was driving"], hint: "acțiune lungă", why: "Acțiunea lungă întreruptă se pune la Past Continuous." },
    { type: "fill", prompt: "They ___ (wait) outside for an hour.", answer: ["were waiting"], hint: "they", why: "La they se folosește were." },
    { type: "fill", prompt: "What ___ (you / do) at ten last night?", answer: ["were you doing", "Were you doing"], hint: "oră precisă", why: "Activitate în desfășurare la o oră din trecut." },
    { type: "fill", prompt: "While she ___ (talk), I took notes.", answer: ["was talking"], hint: "while", why: "While cere Past Continuous pentru acțiunea lungă." },
    { type: "fill", prompt: "It ___ (not / rain) when we left.", answer: ["wasn't raining", "was not raining"], hint: "negativ", why: "Not se pune după was." },
    { type: "fill", prompt: "The guests ___ (dance) when the power went out.", answer: ["were dancing"], hint: "fundal", why: "Acțiunea de fundal se pune la Past Continuous." },
    { type: "fill", prompt: "I ___ (work) all morning on that presentation.", answer: ["was working"], hint: "all morning", why: "All morning arată durata în trecut." },
    { type: "fill", prompt: "___ (you / listen) when he explained the plan?", answer: ["Were you listening", "were you listening"], hint: "întrebare", why: "Were trece înaintea subiectului." },
    { type: "choose", prompt: "When I ___, the meeting had already started.", options: ["was arriving", "arrived", "arrive"], answer: 1, why: "Sosirea este o acțiune scurtă, deci Past Simple." },
    { type: "choose", prompt: "While they ___ dinner, we prepared the room.", options: ["had", "were having", "have had"], answer: 1, why: "While cere acțiunea lungă la Past Continuous." },
    { type: "choose", prompt: "I ___ the answer, so I said nothing.", options: ["wasn't knowing", "didn't know", "was not know"], answer: 1, why: "Know este verb de stare, deci Past Simple." },
    { type: "choose", prompt: "We ___ for you at the entrance.", options: ["was waiting", "were waiting", "were wait"], answer: 1, why: "La we se folosește were plus -ing." },
    { type: "choose", prompt: "At six o'clock yesterday I ___ home.", options: ["drove", "was driving", "have driven"], answer: 1, why: "La o oră precisă din trecut, acțiunea era în desfășurare." },
    { type: "choose", prompt: "She ___ her laptop when the coffee spilled.", options: ["used", "was using", "has used"], answer: 1, why: "Acțiune lungă întreruptă de una scurtă." },
    { type: "transform", prompt: "They were arguing. (negativ)", answer: ["They weren't arguing.", "They were not arguing."], why: "Not se pune după were." },
    { type: "transform", prompt: "He was waiting at reception. (interogativ)", answer: ["Was he waiting at reception?"], why: "Was trece înaintea subiectului." },
    { type: "transform", prompt: "I read the report and then the client called. (folosește when și Past Continuous)", answer: ["I was reading the report when the client called."], why: "Acțiunea lungă la continuous, cea scurtă la simple, legate cu when." },
    { type: "transform", prompt: "She wasn't sleeping. (afirmativ)", answer: ["She was sleeping."], why: "Se scoate not." },
    { type: "translate", prompt: "Scriam oferta când a sunat clientul.", answer: ["I was writing the offer when the client called.", "I was writing the quote when the client called.", "I was writing the offer when the client rang."], why: "Acțiunea lungă la Past Continuous, cea scurtă la Past Simple." },
    { type: "translate", prompt: "Ce făceai ieri la ora șase?", answer: ["What were you doing at six yesterday?", "What were you doing yesterday at six?", "What were you doing at 6 yesterday?"], why: "Oră precisă din trecut plus activitate în desfășurare." },
    { type: "translate", prompt: "În timp ce montam, a început să plouă.", answer: ["While we were setting up, it started to rain.", "While we were setting up, it started raining.", "While I was setting up, it started to rain.", "While I was setting up, it started raining."], why: "While cere Past Continuous pentru acțiunea lungă." },
    { type: "translate", prompt: "Nu ascultau.", answer: ["They weren't listening.", "They were not listening."], why: "Negativ la Past Continuous." },
    { type: "translate", prompt: "Ploua și nu era nimeni afară.", answer: ["It was raining and there was nobody outside.", "It was raining and there was no one outside.", "It was raining and nobody was outside."], why: "Fundalul poveștii se pune la Past Continuous." },
    { type: "translate", prompt: "Încă lucram la miezul nopții.", answer: ["I was still working at midnight.", "We were still working at midnight."], why: "Still se pune între was și verb." }
  ],
  finalTest: [
    { type: "fill", prompt: "We ___ (have) lunch when the fire alarm went off.", answer: ["were having"], why: "Acțiune lungă întreruptă." },
    { type: "fill", prompt: "___ (it / snow) when you left?", answer: ["Was it snowing", "was it snowing"], why: "Was trece înaintea subiectului." },
    { type: "fill", prompt: "He ___ (not / pay) attention during the briefing.", answer: ["wasn't paying", "was not paying"], why: "Negativ la Past Continuous." },
    { type: "choose", prompt: "While I ___ the report, she called three suppliers.", options: ["wrote", "was writing", "have written"], answer: 1, why: "While cere acțiunea lungă la continuous." },
    { type: "choose", prompt: "When the show ___, everyone stood up.", options: ["was starting", "started", "starts"], answer: 1, why: "Acțiune scurtă, deci Past Simple." },
    { type: "choose", prompt: "They ___ tired, so they went home early.", options: ["were being", "were", "was"], answer: 1, why: "Stare la trecut, cu they deci were." },
    { type: "choose", prompt: "At that moment I ___ what to say.", options: ["wasn't knowing", "didn't know", "was not know"], answer: 1, why: "Know este verb de stare." },
    { type: "choose", prompt: "The technicians ___ the lights when we arrived.", options: ["tested", "were testing", "test"], answer: 1, why: "Acțiune în desfășurare la momentul sosirii." },
    { type: "transform", prompt: "I was cooking. (interogativ)", answer: ["Was I cooking?"], why: "Was trece în față." },
    { type: "transform", prompt: "The guests were leaving. (negativ)", answer: ["The guests weren't leaving.", "The guests were not leaving."], why: "Not după were." },
    { type: "transform", prompt: "She talked to the client and I checked the list. (acțiuni paralele cu while)", answer: ["While she was talking to the client, I was checking the list.", "She was talking to the client while I was checking the list."], why: "Două acțiuni paralele se pun ambele la Past Continuous." },
    { type: "translate", prompt: "Conduceam când am văzut accidentul.", answer: ["I was driving when I saw the accident."], why: "Acțiune lungă plus acțiune scurtă." },
    { type: "translate", prompt: "Toată lumea vorbea.", answer: ["Everyone was talking.", "Everybody was talking."], why: "Everyone este singular, deci was." },
    { type: "translate", prompt: "Ieri la ora asta eram în avion.", answer: ["This time yesterday I was on a plane.", "This time yesterday I was on the plane."], why: "Situație în desfășurare la un moment din trecut." },
    { type: "translate", prompt: "Nu se uita la mine.", answer: ["He wasn't looking at me.", "She wasn't looking at me.", "He was not looking at me.", "She was not looking at me."], why: "Negativ la Past Continuous." }
  ]
});

window.E360DATA.tenses.push({
  id: "past-perfect",
  group: "trecut",
  level: "B2",
  title: "Past Perfect",
  summary: "Trecutul dinaintea trecutului: arată clar care dintre două acțiuni din trecut s-a întâmplat prima.",
  also: "Se folosește numai când ordinea contează sau nu este evidentă. Dacă spui lucrurile în ordine cu and then, Past Simple este suficient.",
  form: {
    affirmative: "S + had + V3",
    affirmativeExample: "By the time I arrived, they had left.",
    negative: "S + had + not + V3",
    negativeExample: "She hadn't sent the file before the meeting.",
    question: "Had + S + V3?",
    questionExample: "Had you met him before?",
    short: "Yes, I had. / No, they hadn't.",
    shortExample: "Had it started? No, it hadn't.",
    note: "Had este același pentru toate persoanele. Forma scurtă este 'd, care se confundă ușor cu would: I'd been (had) față de I'd go (would)."
  },
  uses: [
    { ro: "Acțiune anterioară altei acțiuni din trecut", examples: [
      { en: "When we arrived, the show had already started.", ro: "Când am ajuns, spectacolul începuse deja.", highlight: "had already started" },
      { en: "He was angry because he had waited for an hour.", ro: "Era supărat pentru că așteptase o oră.", highlight: "had waited" } ] },
    { ro: "Cu by the time, before, after, already, just, never", examples: [
      { en: "By the time the guests arrived, we had finished the setup.", ro: "Până să vină invitații, terminaserăm montajul.", highlight: "had finished" },
      { en: "I had never seen such a big venue before.", ro: "Nu mai văzusem niciodată o locație atât de mare.", highlight: "had never seen" } ] },
    { ro: "În vorbirea indirectă, ca trecut al lui Present Perfect sau Past Simple", examples: [
      { en: "She said she had sent the invoice.", ro: "A spus că trimisese factura.", highlight: "had sent" },
      { en: "They told me they had already paid.", ro: "Mi-au spus că plătiseră deja.", highlight: "had already paid" } ] },
    { ro: "În condiționalul de tipul 3 și după wish, pentru regret", examples: [
      { en: "If we had booked earlier, we would have paid less.", ro: "Dacă am fi rezervat mai devreme, am fi plătit mai puțin.", highlight: "had booked" },
      { en: "I wish I had taken that job.", ro: "Aș fi vrut să fi acceptat jobul acela.", highlight: "had taken" } ] }
  ],
  signalWords: ["by the time", "before", "after", "already", "just", "never", "when (cu ordine)", "as soon as", "until then"],
  compareWith: {
    id: "past-simple",
    leftTitle: "Past Perfect: prima acțiune",
    rightTitle: "Past Simple: a doua acțiune",
    rows: [
      { left: "When I arrived, they had eaten. (mâncaseră deja)", right: "When I arrived, they ate. (apoi au mâncat)" },
      { left: "She had left before I called.", right: "She left after I called." },
      { left: "The train had gone. (l-am pierdut)", right: "The train went at six." },
      { left: "I had never been there before that trip.", right: "I was never there." },
      { left: "He said he had finished.", right: "He said: I finished." }
    ]
  },
  mistakes: [
    { wrong: "When I arrived, they have left.", right: "When I arrived, they had left.", why: "Într-un context trecut se folosește had, nu have." },
    { wrong: "I had went home.", right: "I had gone home.", why: "După had se pune participiul, gone, nu went." },
    { wrong: "After I had finished, I had gone home.", right: "After I had finished, I went home.", why: "Doar acțiunea anterioară este la Past Perfect. A doua rămâne la Past Simple." },
    { wrong: "I had saw him before.", right: "I had seen him before.", why: "Participiul lui see este seen." },
    { wrong: "Before he came, I have prepared everything.", right: "Before he came, I had prepared everything.", why: "Referința este în trecut, deci Past Perfect." },
    { wrong: "She didn't had time.", right: "She hadn't had time.", why: "Negativul se face cu hadn't plus participiul, fără did." }
  ],
  examples: [
    { en: "By the time I got there, the client had already signed.", ro: "Până să ajung eu, clientul semnase deja.", highlight: "had already signed" },
    { en: "We couldn't get in because we had forgotten the key.", ro: "N-am putut intra pentru că uitaserăm cheia.", highlight: "had forgotten" },
    { en: "She said she had never worked with that supplier.", ro: "A spus că nu lucrase niciodată cu furnizorul acela.", highlight: "had never worked" },
    { en: "The room was a mess because nobody had cleaned it.", ro: "Sala era dezordonată pentru că nu o curățase nimeni.", highlight: "had cleaned" },
    { en: "After we had loaded everything, we left for the venue.", ro: "După ce am încărcat tot, am plecat spre locație.", highlight: "had loaded" },
    { en: "I had just sat down when the phone rang.", ro: "Abia mă așezasem când a sunat telefonul.", highlight: "had just sat" },
    { en: "They had booked the wrong date, so we had to move everything.", ro: "Rezervaseră data greșită, așa că a trebuit să mutăm tot.", highlight: "had booked" },
    { en: "Had you met the team before that project?", ro: "Cunoscuseși echipa înainte de proiectul acela?", highlight: "Had you met" },
    { en: "He hadn't told anyone about the change.", ro: "Nu spusese nimănui despre schimbare.", highlight: "hadn't told" },
    { en: "It was the first time I had driven such a big van.", ro: "Era prima dată când conduceam o dubă atât de mare.", highlight: "had driven" },
    { en: "The battery was flat because I had left the lights on.", ro: "Bateria era descărcată pentru că lăsasem luminile aprinse.", highlight: "had left" },
    { en: "By 2020 we had organised more than a hundred events.", ro: "Până în 2020 organizaserăm peste o sută de evenimente.", highlight: "had organised" }
  ],
  exercises: [
    { type: "fill", prompt: "When we arrived, the meeting ___ (already / start).", answer: ["had already started"], hint: "acțiune anterioară", why: "Prima acțiune din trecut se pune la Past Perfect." },
    { type: "fill", prompt: "She was upset because she ___ (lose) the file.", answer: ["had lost", "'d lost"], hint: "cauza anterioară", why: "Cauza s-a petrecut înaintea stării descrise." },
    { type: "fill", prompt: "By the time he called, I ___ (leave) the office.", answer: ["had left", "'d left"], hint: "by the time", why: "By the time cere Past Perfect pentru acțiunea anterioară." },
    { type: "fill", prompt: "They ___ (not / send) the contract before the deadline.", answer: ["hadn't sent", "had not sent"], hint: "negativ", why: "Negativul este hadn't plus participiu." },
    { type: "fill", prompt: "___ (you / be) to Spain before that holiday?", answer: ["Had you been", "had you been"], hint: "întrebare", why: "Had trece înaintea subiectului." },
    { type: "fill", prompt: "I ___ (never / see) so many people at one event.", answer: ["had never seen", "'d never seen"], hint: "never", why: "Never plus Past Perfect, într-un context trecut." },
    { type: "fill", prompt: "After she ___ (finish) the call, she joined us.", answer: ["had finished", "'d finished"], hint: "after", why: "After introduce acțiunea anterioară." },
    { type: "fill", prompt: "The food was cold because it ___ (stand) there for an hour.", answer: ["had stood", "'d stood", "had been standing"], hint: "cauza", why: "Cauza este anterioară stării din trecut." },
    { type: "choose", prompt: "When I got home, my wife ___ dinner.", options: ["cooked", "had cooked", "has cooked"], answer: 1, why: "Gătitul s-a petrecut înaintea sosirii." },
    { type: "choose", prompt: "He said he ___ the email that morning.", options: ["has sent", "had sent", "sends"], answer: 1, why: "În vorbirea indirectă la trecut, Present Perfect devine Past Perfect." },
    { type: "choose", prompt: "After we ___ everything, we went for a beer.", options: ["had packed", "have packed", "were packing"], answer: 0, why: "Acțiunea anterioară se pune la Past Perfect." },
    { type: "choose", prompt: "I ___ him before, so I did not recognise him.", options: ["didn't meet", "hadn't met", "haven't met"], answer: 1, why: "Nerecunoașterea are cauza într-un trecut anterior." },
    { type: "choose", prompt: "The show ___ by the time we found our seats.", options: ["started", "had started", "has started"], answer: 1, why: "By the time cere Past Perfect." },
    { type: "choose", prompt: "She had ___ the room before the guests arrived.", options: ["prepare", "prepared", "preparing"], answer: 1, why: "După had urmează participiul." },
    { type: "transform", prompt: "I finished the report. Then I sent it. (folosește after și Past Perfect)", answer: ["After I had finished the report, I sent it.", "I sent the report after I had finished it."], why: "Prima acțiune la Past Perfect, a doua la Past Simple." },
    { type: "transform", prompt: "They had already eaten. (negativ)", answer: ["They hadn't eaten yet.", "They had not eaten yet.", "They hadn't already eaten."], why: "Already devine yet la negativ." },
    { type: "transform", prompt: "She had seen the film. (interogativ)", answer: ["Had she seen the film?"], why: "Had trece înaintea subiectului." },
    { type: "transform", prompt: "The bus left. Then I arrived at the stop. (folosește when)", answer: ["When I arrived at the stop, the bus had left.", "When I got to the stop, the bus had left."], why: "Autobuzul plecase înainte de sosire, deci Past Perfect." },
    { type: "translate", prompt: "Când am ajuns, plecaseră deja.", answer: ["When I arrived, they had already left.", "When we arrived, they had already left."], why: "Plecarea este anterioară sosirii." },
    { type: "translate", prompt: "Nu mai fusesem niciodată acolo.", answer: ["I had never been there before.", "I'd never been there before."], why: "Never plus Past Perfect într-un context trecut." },
    { type: "translate", prompt: "A spus că trimisese factura.", answer: ["He said he had sent the invoice.", "She said she had sent the invoice.", "He said that he had sent the invoice.", "She said that she had sent the invoice."], why: "În vorbirea indirectă, trecutul devine Past Perfect." },
    { type: "translate", prompt: "Până să vină ei, terminaserăm tot.", answer: ["By the time they arrived, we had finished everything.", "By the time they came, we had finished everything."], why: "By the time cere Past Perfect." },
    { type: "translate", prompt: "Era supărat pentru că uitasem să-l sun.", answer: ["He was angry because I had forgotten to call him.", "He was upset because I had forgotten to call him.", "She was angry because I had forgotten to call her."], why: "Cauza este anterioară stării." },
    { type: "translate", prompt: "Abia intrasem când s-a stins lumina.", answer: ["I had just come in when the lights went out.", "I had just walked in when the lights went out.", "I'd just come in when the lights went out."], why: "Just plus Past Perfect pentru acțiunea imediat anterioară." }
  ],
  finalTest: [
    { type: "fill", prompt: "The train ___ (leave) before we got to the station.", answer: ["had left", "'d left"], why: "Acțiune anterioară altei acțiuni din trecut." },
    { type: "fill", prompt: "I ___ (not / meet) her before that evening.", answer: ["hadn't met", "had not met"], why: "Negativ la Past Perfect." },
    { type: "fill", prompt: "___ (they / pay) before the event?", answer: ["Had they paid", "had they paid"], why: "Întrebare cu Had în față." },
    { type: "choose", prompt: "By 2019 the company ___ over fifty people.", options: ["hired", "had hired", "has hired"], answer: 1, why: "By plus an, cu privire dintr-un punct din trecut." },
    { type: "choose", prompt: "He told me he ___ the offer already.", options: ["accepted", "had accepted", "has accepted"], answer: 1, why: "Vorbire indirectă la trecut." },
    { type: "choose", prompt: "We were tired because we ___ all night.", options: ["worked", "had worked", "have worked"], answer: 1, why: "Cauza este anterioară stării din trecut." },
    { type: "choose", prompt: "After the guests ___, we cleaned the hall.", options: ["had gone", "have gone", "were going"], answer: 0, why: "After introduce acțiunea anterioară." },
    { type: "choose", prompt: "It was the first time she ___ on stage.", options: ["was", "had been", "has been"], answer: 1, why: "După it was the first time se folosește Past Perfect." },
    { type: "transform", prompt: "She hadn't finished. (interogativ)", answer: ["Had she finished?"], why: "Had trece în față." },
    { type: "transform", prompt: "I cleaned the room. Then they arrived. (folosește by the time)", answer: ["By the time they arrived, I had cleaned the room."], why: "Prima acțiune la Past Perfect." },
    { type: "transform", prompt: "He had booked the venue. (negativ)", answer: ["He hadn't booked the venue.", "He had not booked the venue."], why: "Not se pune după had." },
    { type: "translate", prompt: "Nu spusese nimănui.", answer: ["He hadn't told anyone.", "She hadn't told anyone.", "He had not told anybody.", "She had not told anybody.", "He hadn't told anybody.", "She hadn't told anybody."], why: "Negativ la Past Perfect." },
    { type: "translate", prompt: "Uitasem să iau contractul.", answer: ["I had forgotten to bring the contract.", "I'd forgotten to bring the contract.", "I had forgotten to take the contract."], why: "Acțiune anterioară momentului din trecut." },
    { type: "translate", prompt: "Când a sosit, mâncaserăm deja.", answer: ["When he arrived, we had already eaten.", "When she arrived, we had already eaten."], why: "Masa a fost anterioară sosirii." },
    { type: "translate", prompt: "Era prima dată când zburam singur.", answer: ["It was the first time I had flown alone.", "It was the first time I'd flown alone."], why: "It was the first time cere Past Perfect." }
  ]
});

window.E360DATA.tenses.push({
  id: "past-perfect-continuous",
  group: "trecut",
  level: "B2",
  title: "Past Perfect Continuous",
  summary: "Arată cât timp durase deja o acțiune înainte de un alt moment din trecut, sau cauza unei situații din trecut.",
  also: "Este versiunea la trecut a lui Present Perfect Continuous. Se folosește rar, dar la B2 trebuie recunoscut și produs corect.",
  form: {
    affirmative: "S + had + been + V-ing",
    affirmativeExample: "We had been waiting for two hours when they finally arrived.",
    negative: "S + had + not + been + V-ing",
    negativeExample: "He hadn't been sleeping well before the exam.",
    question: "Had + S + been + V-ing?",
    questionExample: "Had you been working there long?",
    short: "Yes, I had. / No, we hadn't.",
    shortExample: "Had it been raining? Yes, it had.",
    note: "Verbele de stare nu se folosesc: se spune I had known, nu I had been knowing."
  },
  uses: [
    { ro: "Durata unei acțiuni până la un moment din trecut", examples: [
      { en: "She had been working there for ten years when the company closed.", ro: "Lucra acolo de zece ani când s-a închis firma.", highlight: "had been working" },
      { en: "We had been driving for four hours before we stopped.", ro: "Conduseserăm patru ore înainte să oprim.", highlight: "had been driving" } ] },
    { ro: "Cauza unei situații din trecut, cu urme vizibile atunci", examples: [
      { en: "His eyes were red because he had been crying.", ro: "Avea ochii roșii pentru că plânsese.", highlight: "had been crying" },
      { en: "The street was wet because it had been raining.", ro: "Strada era udă pentru că plouase.", highlight: "had been raining" } ] },
    { ro: "Activitate repetată sau continuă întreruptă de altceva", examples: [
      { en: "I had been trying to reach him all day when he finally called.", ro: "Încercasem toată ziua să dau de el când m-a sunat în sfârșit.", highlight: "had been trying" },
      { en: "They had been arguing about the price before we joined.", ro: "Se certau pe preț dinainte să venim noi.", highlight: "had been arguing" } ] }
  ],
  signalWords: ["for", "since", "how long", "before", "when", "all day", "all morning", "until then"],
  compareWith: {
    id: "past-perfect",
    leftTitle: "Past Perfect Continuous: durata",
    rightTitle: "Past Perfect: rezultatul",
    rows: [
      { left: "I had been writing emails all morning.", right: "I had written ten emails." },
      { left: "She had been looking for a flat for months.", right: "She had found a flat." },
      { left: "They had been talking for an hour when I arrived.", right: "They had talked about it before." },
      { left: "He was tired because he had been running.", right: "He was happy because he had won." },
      { left: "We had been waiting since eight.", right: "We had waited long enough." }
    ]
  },
  mistakes: [
    { wrong: "I had been knowing him for years.", right: "I had known him for years.", why: "Know este verb de stare și nu primește forma continuous." },
    { wrong: "She has been working there when it closed.", right: "She had been working there when it closed.", why: "Contextul este trecut, deci had, nu has." },
    { wrong: "We had been wait for an hour.", right: "We had been waiting for an hour.", why: "După been urmează obligatoriu forma cu -ing." },
    { wrong: "I had been working since two hours.", right: "I had been working for two hours.", why: "For se folosește cu o durată, since cu un moment de start." },
    { wrong: "He was tired because he was working all night.", right: "He was tired because he had been working all night.", why: "Cauza este anterioară stării descrise, deci Past Perfect Continuous." },
    { wrong: "Had you been work there long?", right: "Had you been working there long?", why: "Forma de -ing este obligatorie după been." }
  ],
  examples: [
    { en: "We had been waiting for over an hour when the DJ finally arrived.", ro: "Așteptam de peste o oră când a venit în sfârșit DJ-ul.", highlight: "had been waiting" },
    { en: "She was exhausted because she had been setting up since six.", ro: "Era epuizată pentru că monta de la șase.", highlight: "had been setting up" },
    { en: "They had been using that supplier for years before the problems started.", ro: "Foloseau furnizorul acela de ani buni înainte să apară problemele.", highlight: "had been using" },
    { en: "I had been trying to fix the projector when the technician showed up.", ro: "Încercam să repar proiectorul când a apărut tehnicianul.", highlight: "had been trying" },
    { en: "How long had you been living in Cluj before you moved?", ro: "De cât timp locuiai în Cluj înainte să te muți?", highlight: "had you been living" },
    { en: "The floor was muddy because people had been walking in from the garden.", ro: "Podeaua era plină de noroi pentru că lumea intrase din grădină.", highlight: "had been walking" },
    { en: "He hadn't been feeling well for weeks before he saw a doctor.", ro: "Nu se simțise bine de săptămâni întregi înainte să meargă la doctor.", highlight: "hadn't been feeling" },
    { en: "We had been talking about the budget when she walked in.", ro: "Vorbeam despre buget când a intrat ea.", highlight: "had been talking" },
    { en: "By 2022 they had been organising festivals for a decade.", ro: "Până în 2022 organizau festivaluri de un deceniu.", highlight: "had been organising" },
    { en: "I was annoyed because I had been holding the line for twenty minutes.", ro: "Eram enervat pentru că stăteam pe fir de douăzeci de minute.", highlight: "had been holding" },
    { en: "The team had been preparing for months when the client cancelled.", ro: "Echipa se pregătea de luni întregi când clientul a anulat.", highlight: "had been preparing" },
    { en: "It had been snowing all night, so the roads were blocked.", ro: "Ninsese toată noaptea, așa că drumurile erau blocate.", highlight: "had been snowing" }
  ],
  exercises: [
    { type: "fill", prompt: "We ___ (wait) for two hours when they arrived.", answer: ["had been waiting", "'d been waiting"], hint: "durată până la un moment din trecut", why: "Durata până la un moment din trecut cere Past Perfect Continuous." },
    { type: "fill", prompt: "She was tired because she ___ (work) all night.", answer: ["had been working", "'d been working"], hint: "cauza", why: "Cauza este anterioară stării din trecut." },
    { type: "fill", prompt: "___ (you / drive) long before the accident?", answer: ["Had you been driving", "had you been driving"], hint: "întrebare", why: "Had trece înaintea subiectului, apoi been plus -ing." },
    { type: "fill", prompt: "They ___ (not / talk) for long when I joined.", answer: ["hadn't been talking", "had not been talking"], hint: "negativ", why: "Not se pune între had și been." },
    { type: "fill", prompt: "The ground was wet because it ___ (rain).", answer: ["had been raining", "'d been raining"], hint: "urme vizibile", why: "Urmele din trecut arată o acțiune anterioară de durată." },
    { type: "fill", prompt: "He ___ (live) abroad for five years before he came back.", answer: ["had been living", "'d been living", "had lived"], hint: "for", why: "For plus durată până la un moment din trecut." },
    { type: "fill", prompt: "I ___ (try) to call you all morning.", answer: ["had been trying", "'d been trying"], hint: "all morning", why: "All morning arată o activitate repetată până la un punct din trecut." },
    { type: "fill", prompt: "By the time we left, we ___ (dance) for three hours.", answer: ["had been dancing", "'d been dancing"], hint: "by the time", why: "By the time plus durată cere Past Perfect Continuous." },
    { type: "choose", prompt: "She ___ him for ten years before they got married.", options: ["had been knowing", "had known", "was knowing"], answer: 1, why: "Know este verb de stare, deci perfect simplu." },
    { type: "choose", prompt: "We were soaked because we ___ in the rain.", options: ["walked", "had been walking", "have been walking"], answer: 1, why: "Cauza anterioară unei stări din trecut." },
    { type: "choose", prompt: "He ___ three coffees before the meeting started.", options: ["had been drinking", "had drunk", "has drunk"], answer: 1, why: "Rezultat numărat, deci Past Perfect simplu." },
    { type: "choose", prompt: "How long ___ before you found a buyer?", options: ["had you been advertising", "have you been advertising", "did you advertise"], answer: 0, why: "Durata până la un moment din trecut." },
    { type: "choose", prompt: "The kitchen was a mess because they ___ all afternoon.", options: ["cooked", "had been cooking", "have cooked"], answer: 1, why: "Activitate de durată anterioară stării descrise." },
    { type: "choose", prompt: "I ___ there for six months when I got promoted.", options: ["had been working", "have been working", "am working"], answer: 0, why: "Context trecut, deci had." },
    { type: "transform", prompt: "They started arguing at six. At seven I arrived. (Past Perfect Continuous)", answer: ["They had been arguing for an hour when I arrived.", "When I arrived, they had been arguing for an hour."], why: "Durata până la momentul sosirii." },
    { type: "transform", prompt: "She had been studying. (negativ)", answer: ["She hadn't been studying.", "She had not been studying."], why: "Not se pune după had." },
    { type: "transform", prompt: "We had been waiting for ages. (interogativ)", answer: ["Had we been waiting for ages?"], why: "Had trece în față." },
    { type: "transform", prompt: "It rained all night. The roads were blocked in the morning. (leagă-le cu because)", answer: ["The roads were blocked because it had been raining all night.", "In the morning the roads were blocked because it had been raining all night."], why: "Cauza anterioară se pune la Past Perfect Continuous." },
    { type: "translate", prompt: "Așteptam de o oră când au sunat.", answer: ["I had been waiting for an hour when they called.", "We had been waiting for an hour when they called.", "I'd been waiting for an hour when they called."], why: "Durata până la un moment din trecut." },
    { type: "translate", prompt: "Era obosit pentru că montase toată ziua.", answer: ["He was tired because he had been setting up all day.", "He was tired because he'd been setting up all day."], why: "Cauza anterioară stării." },
    { type: "translate", prompt: "De cât timp lucrai acolo când ai plecat?", answer: ["How long had you been working there when you left?"], why: "How long plus context trecut." },
    { type: "translate", prompt: "Ningea de câteva ore.", answer: ["It had been snowing for a few hours.", "It had been snowing for several hours."], why: "Durată în trecut, anterioară momentului povestit." },
    { type: "translate", prompt: "Nu dormiseră bine de o săptămână.", answer: ["They hadn't been sleeping well for a week.", "They had not been sleeping well for a week."], why: "Negativ la Past Perfect Continuous." },
    { type: "translate", prompt: "Vorbeau despre preț dinainte să ajung eu.", answer: ["They had been talking about the price before I arrived.", "They had been discussing the price before I arrived."], why: "Acțiune de durată anterioară altui moment din trecut." }
  ],
  finalTest: [
    { type: "fill", prompt: "I ___ (stand) in the queue for an hour when they closed the door.", answer: ["had been standing", "'d been standing"], why: "Durata până la un moment din trecut." },
    { type: "fill", prompt: "___ (they / work) together long before the conflict?", answer: ["Had they been working", "had they been working"], why: "Întrebare cu Had plus been plus -ing." },
    { type: "fill", prompt: "She ___ (not / feel) well for days before the trip.", answer: ["hadn't been feeling", "had not been feeling"], why: "Negativ la Past Perfect Continuous." },
    { type: "choose", prompt: "We ___ each other since school, so it was not awkward.", options: ["had been knowing", "had known", "were knowing"], answer: 1, why: "Verb de stare." },
    { type: "choose", prompt: "The car was dirty because he ___ on country roads.", options: ["drove", "had been driving", "has driven"], answer: 1, why: "Cauza anterioară stării din trecut." },
    { type: "choose", prompt: "By then they ___ four albums.", options: ["had been recording", "had recorded", "have recorded"], answer: 1, why: "Rezultat numărat, deci perfect simplu." },
    { type: "choose", prompt: "How long ___ before you gave up?", options: ["had you been trying", "have you been trying", "did you try"], answer: 0, why: "Durata până la un moment din trecut." },
    { type: "choose", prompt: "He ___ for the same company for twenty years when he retired.", options: ["had been working", "has been working", "works"], answer: 0, why: "Context trecut, deci had been working." },
    { type: "transform", prompt: "He had been smoking for years. (negativ)", answer: ["He hadn't been smoking for years.", "He had not been smoking for years."], why: "Not se pune după had." },
    { type: "transform", prompt: "It started raining at five. At seven we left. (Past Perfect Continuous)", answer: ["It had been raining for two hours when we left.", "When we left, it had been raining for two hours."], why: "Durata până la momentul plecării." },
    { type: "transform", prompt: "They had been complaining. (interogativ)", answer: ["Had they been complaining?"], why: "Had trece în față." },
    { type: "translate", prompt: "Conduceam de patru ore când am oprit.", answer: ["I had been driving for four hours when I stopped.", "We had been driving for four hours when we stopped.", "I'd been driving for four hours when I stopped."], why: "Durata până la un moment din trecut." },
    { type: "translate", prompt: "Avea ochii roșii pentru că plânsese.", answer: ["His eyes were red because he had been crying.", "Her eyes were red because she had been crying."], why: "Cauza cu urme vizibile atunci." },
    { type: "translate", prompt: "Se pregăteau de luni de zile.", answer: ["They had been preparing for months.", "They'd been preparing for months."], why: "Durată în trecut." },
    { type: "translate", prompt: "Încercam să dau de tine de dimineață.", answer: ["I had been trying to reach you since the morning.", "I had been trying to get hold of you since the morning.", "I'd been trying to reach you since the morning."], why: "Since plus moment de start, în context trecut." }
  ]
});

window.E360DATA.tenses.push({
  id: "future-will",
  group: "viitor",
  level: "B1",
  title: "Future Simple: will",
  summary: "Deciziile luate pe loc, promisiunile, ofertele, prognozele și tot ce credem că se va întâmpla.",
  also: "Will este viitorul neutru al opiniei. Pentru planuri deja făcute se folosește be going to sau Present Continuous.",
  form: {
    affirmative: "S + will + V (infinitiv)",
    affirmativeExample: "I will send you the offer tomorrow.",
    negative: "S + will not (won't) + V",
    negativeExample: "They won't accept that price.",
    question: "Will + S + V?",
    questionExample: "Will you be at the office on Friday?",
    short: "Yes, I will. / No, he won't.",
    shortExample: "Will it work? Yes, it will.",
    note: "Will este identic la toate persoanele. Forma scurtă este 'll, iar negativul este won't. Shall se folosește azi mai ales în întrebări de tipul Shall I help you?"
  },
  uses: [
    { ro: "Decizie luată în momentul vorbirii", examples: [
      { en: "The line is busy. I will call back later.", ro: "E ocupat. Sun eu mai târziu.", highlight: "will call" },
      { en: "It is heavy. I will help you.", ro: "E greu. Te ajut eu.", highlight: "will help" } ] },
    { ro: "Predicții, opinii despre viitor, cu think, believe, probably, I am sure", examples: [
      { en: "I think the client will accept the offer.", ro: "Cred că clientul va accepta oferta.", highlight: "will accept" },
      { en: "It will probably rain during the ceremony.", ro: "Probabil va ploua în timpul ceremoniei.", highlight: "will probably rain" } ] },
    { ro: "Promisiuni, oferte, refuzuri și cereri", examples: [
      { en: "I promise I will send it by Friday.", ro: "Promit că îl trimit până vineri.", highlight: "will send" },
      { en: "Will you give me a hand with the boxes?", ro: "Mă ajuți cu cutiile?", highlight: "Will you give" } ] },
    { ro: "Fapte inevitabile despre viitor", examples: [
      { en: "The new season will start in September.", ro: "Sezonul nou va începe în septembrie.", highlight: "will start" },
      { en: "She will be forty next year.", ro: "Anul viitor face patruzeci de ani.", highlight: "will be" } ] },
    { ro: "În propoziții cu if, când vorbim despre consecința reală (condițional 1)", examples: [
      { en: "If we book now, we will get a discount.", ro: "Dacă rezervăm acum, primim reducere.", highlight: "will get" },
      { en: "They will be upset if we cancel.", ro: "Se vor supăra dacă anulăm.", highlight: "will be" } ] }
  ],
  signalWords: ["tomorrow", "next week", "next year", "soon", "in a few days", "I think", "I am sure", "probably", "perhaps", "one day"],
  compareWith: {
    id: "be-going-to",
    leftTitle: "will: decizie de acum, predicție",
    rightTitle: "be going to: plan deja făcut, dovadă",
    rows: [
      { left: "I will have the salad. (decid acum)", right: "I am going to have the salad. (mă hotărâsem)" },
      { left: "I think it will rain.", right: "Look at those clouds, it is going to rain." },
      { left: "I will call him, don't worry.", right: "I am going to call him this afternoon. (plan)" },
      { left: "She will probably say yes.", right: "She is going to say yes, she told me." },
      { left: "We will see what happens.", right: "We are going to open a second office." }
    ]
  },
  mistakes: [
    { wrong: "I will to call you.", right: "I will call you.", why: "După will se pune infinitivul fără to." },
    { wrong: "If it will rain, we will cancel.", right: "If it rains, we will cancel.", why: "După if nu se folosește will. Condiția se pune la prezent." },
    { wrong: "I will can help you.", right: "I will be able to help you.", why: "Două verbe modale nu stau împreună. Can devine be able to." },
    { wrong: "She will goes tomorrow.", right: "She will go tomorrow.", why: "După will verbul nu primește -s." },
    { wrong: "When I will arrive, I will call you.", right: "When I arrive, I will call you.", why: "După when, as soon as, before, after se folosește prezentul pentru viitor." },
    { wrong: "I not will come.", right: "I will not come.", why: "Not se pune după will, iar forma scurtă este won't." }
  ],
  examples: [
    { en: "I'll send you the contract this evening.", ro: "Îți trimit contractul diseară.", highlight: "'ll send" },
    { en: "They won't agree to that deadline.", ro: "N-o să accepte termenul ăsta.", highlight: "won't agree" },
    { en: "Will you be free on Thursday morning?", ro: "Ești liber joi dimineață?", highlight: "Will you be" },
    { en: "I think the venue will be too small.", ro: "Cred că locația va fi prea mică.", highlight: "will be" },
    { en: "Don't worry, I'll take care of the music.", ro: "Nu-ți face griji, mă ocup eu de muzică.", highlight: "'ll take" },
    { en: "If we don't confirm today, we'll lose the date.", ro: "Dacă nu confirmăm azi, pierdem data.", highlight: "'ll lose" },
    { en: "The invoice will arrive by email tomorrow.", ro: "Factura va veni pe mail mâine.", highlight: "will arrive" },
    { en: "She'll probably ask for a discount.", ro: "Probabil o să ceară o reducere.", highlight: "'ll probably ask" },
    { en: "I'm sure everything will be ready in time.", ro: "Sunt sigur că totul va fi gata la timp.", highlight: "will be" },
    { en: "Shall I book a taxi for you?", ro: "Să-ți chem un taxi?", highlight: "Shall I book" },
    { en: "We won't know the final number until Friday.", ro: "N-o să știm numărul final până vineri.", highlight: "won't know" },
    { en: "One day I'll open my own agency.", ro: "Într-o zi o să-mi deschid propria agenție.", highlight: "'ll open" }
  ],
  exercises: [
    { type: "fill", prompt: "Don't worry, I ___ (help) you with the boxes.", answer: ["will help", "'ll help"], hint: "ofertă", why: "Oferta spontană se face cu will." },
    { type: "fill", prompt: "I think they ___ (not / accept) this price.", answer: ["won't accept", "will not accept"], hint: "opinie", why: "I think plus predicție cere will, negativ won't." },
    { type: "fill", prompt: "___ (you / be) at the office tomorrow?", answer: ["Will you be", "will you be"], hint: "întrebare", why: "Will trece înaintea subiectului." },
    { type: "fill", prompt: "If we leave now, we ___ (arrive) on time.", answer: ["will arrive", "'ll arrive"], hint: "condițional 1", why: "În condițional 1, consecința se pune cu will." },
    { type: "fill", prompt: "The doors ___ (open) at seven sharp.", answer: ["will open", "'ll open"], hint: "fapt viitor", why: "Fapt inevitabil despre viitor." },
    { type: "fill", prompt: "She ___ (probably / call) you this afternoon.", answer: ["will probably call", "'ll probably call"], hint: "probably", why: "Probably se pune după will." },
    { type: "fill", prompt: "I promise I ___ (not / be) late again.", answer: ["won't be", "will not be"], hint: "promisiune", why: "Promisiunea negativă se face cu won't." },
    { type: "fill", prompt: "When the guests ___ (arrive), we will start the music.", answer: ["arrive"], hint: "după when", why: "După when se folosește prezentul, nu will." },
    { type: "choose", prompt: "The phone is ringing. I ___ it.", options: ["am going to answer", "will answer", "answer"], answer: 1, why: "Decizie luată pe loc, deci will." },
    { type: "choose", prompt: "If it ___ tomorrow, we will move the event inside.", options: ["will rain", "rains", "is raining"], answer: 1, why: "După if nu se folosește will." },
    { type: "choose", prompt: "I ___ help you tomorrow, I am busy all day.", options: ["won't be able to", "will can", "not will"], answer: 0, why: "Can nu se combină cu will; se folosește be able to." },
    { type: "choose", prompt: "She ___ thirty next month.", options: ["will be", "will is", "is going to be"], answer: 0, why: "Fapt inevitabil despre viitor, se exprimă cu will be." },
    { type: "choose", prompt: "___ I open the window?", options: ["Will", "Shall", "Do"], answer: 1, why: "Shall I se folosește când oferi ajutor sau ceri o părere." },
    { type: "choose", prompt: "As soon as I ___ the confirmation, I will let you know.", options: ["will get", "get", "am getting"], answer: 1, why: "După as soon as se folosește prezentul." },
    { type: "transform", prompt: "I will come with you. (negativ)", answer: ["I won't come with you.", "I will not come with you."], why: "Negativul este won't." },
    { type: "transform", prompt: "They will sign the contract. (interogativ)", answer: ["Will they sign the contract?"], why: "Will trece înaintea subiectului." },
    { type: "transform", prompt: "Maybe he will accept. (folosește probably)", answer: ["He will probably accept.", "He'll probably accept."], why: "Probably se pune între will și verb." },
    { type: "transform", prompt: "We won't finish today. (afirmativ)", answer: ["We will finish today.", "We'll finish today."], why: "Se scoate not." },
    { type: "translate", prompt: "Îți trimit oferta mâine.", answer: ["I will send you the offer tomorrow.", "I'll send you the offer tomorrow.", "I will send the offer to you tomorrow."], why: "Promisiune sau decizie, deci will." },
    { type: "translate", prompt: "Cred că o să accepte.", answer: ["I think he will accept.", "I think she will accept.", "I think they will accept.", "I think he'll accept.", "I think she'll accept.", "I think they'll accept."], why: "I think plus predicție cu will." },
    { type: "translate", prompt: "Dacă plouă, mutăm evenimentul înăuntru.", answer: ["If it rains, we will move the event inside.", "If it rains, we'll move the event inside.", "If it rains, we will move the event indoors."], why: "Condiția la prezent, consecința cu will." },
    { type: "translate", prompt: "N-o să fie de acord cu prețul.", answer: ["They won't agree with the price.", "They will not agree with the price.", "He won't agree with the price.", "She won't agree with the price.", "They won't agree to the price."], why: "Predicție negativă cu won't." },
    { type: "translate", prompt: "Mă ajuți cu scaunele?", answer: ["Will you help me with the chairs?", "Will you give me a hand with the chairs?"], why: "Cerere politicoasă cu Will you." },
    { type: "translate", prompt: "Te sun când ajung.", answer: ["I will call you when I arrive.", "I'll call you when I arrive.", "I will call you when I get there.", "I'll call you when I get there."], why: "După when se folosește prezentul, iar în principală will." }
  ],
  finalTest: [
    { type: "fill", prompt: "I ___ (call) you as soon as I know something.", answer: ["will call", "'ll call"], why: "Promisiune, deci will în principală." },
    { type: "fill", prompt: "If you ___ (not / hurry), you will miss the train.", answer: ["don't hurry", "do not hurry"], why: "După if se folosește prezentul." },
    { type: "fill", prompt: "___ (they / deliver) on Saturday?", answer: ["Will they deliver", "will they deliver"], why: "Întrebare cu Will în față." },
    { type: "choose", prompt: "That bag looks heavy. I ___ you.", options: ["am helping", "will help", "help"], answer: 1, why: "Ofertă spontană, deci will." },
    { type: "choose", prompt: "I ___ finish it by Friday, I have too much work.", options: ["won't be able to", "will can", "am not able"], answer: 0, why: "Can nu se combină cu will." },
    { type: "choose", prompt: "Before we ___ the offer, let's check the numbers.", options: ["will send", "send", "are sending"], answer: 1, why: "După before se folosește prezentul pentru viitor." },
    { type: "choose", prompt: "___ I call you a taxi?", options: ["Will", "Shall", "Am"], answer: 1, why: "Shall I pentru a oferi ajutor." },
    { type: "choose", prompt: "It ___ be a long day tomorrow.", options: ["will", "is will", "wills"], answer: 0, why: "Will este identic la toate persoanele." },
    { type: "transform", prompt: "She will accept the offer. (negativ)", answer: ["She won't accept the offer.", "She will not accept the offer."], why: "Negativul este won't." },
    { type: "transform", prompt: "You will be there at eight. (interogativ)", answer: ["Will you be there at eight?"], why: "Will trece în față." },
    { type: "transform", prompt: "Perhaps they will change the date. (folosește probably)", answer: ["They will probably change the date.", "They'll probably change the date."], why: "Probably după will." },
    { type: "translate", prompt: "Promit că nu mai întârzii.", answer: ["I promise I won't be late again.", "I promise I will not be late again."], why: "Promisiune negativă cu won't." },
    { type: "translate", prompt: "Probabil o să coste mai mult.", answer: ["It will probably cost more.", "It'll probably cost more."], why: "Probably se pune după will." },
    { type: "translate", prompt: "Îți spun imediat ce aflu.", answer: ["I will tell you as soon as I find out.", "I'll tell you as soon as I find out.", "I will let you know as soon as I find out.", "I'll let you know as soon as I find out."], why: "As soon as cere prezentul, principala primește will." },
    { type: "translate", prompt: "Nu cred că vor veni.", answer: ["I don't think they will come.", "I don't think they'll come.", "I do not think they will come."], why: "Negația se pune pe think, nu pe will, în engleză." }
  ]
});

window.E360DATA.tenses.push({
  id: "be-going-to",
  group: "viitor",
  level: "B1",
  title: "Be going to",
  summary: "Intenții și planuri hotărâte dinainte, plus predicții bazate pe ceva ce se vede acum.",
  also: "Regula practică: dacă te-ai hotărât deja, folosești going to. Dacă te hotărăști chiar acum, folosești will.",
  form: {
    affirmative: "S + am/is/are + going to + V",
    affirmativeExample: "We are going to open a second office.",
    negative: "S + am/is/are + not + going to + V",
    negativeExample: "I'm not going to work this weekend.",
    question: "Am/Is/Are + S + going to + V?",
    questionExample: "Are you going to accept the offer?",
    short: "Yes, I am. / No, they aren't.",
    shortExample: "Is she going to come? No, she isn't.",
    note: "În vorbire se aude adesea gonna, dar în scris se folosește going to. Cu verbele go și come se preferă Present Continuous: I am going to the venue, nu I am going to go to the venue."
  },
  uses: [
    { ro: "Intenții și planuri decise înainte de momentul vorbirii", examples: [
      { en: "We are going to hire two more people next year.", ro: "Anul viitor o să mai angajăm doi oameni.", highlight: "are going to hire" },
      { en: "I am going to talk to him about the delay.", ro: "O să vorbesc cu el despre întârziere.", highlight: "am going to talk" } ] },
    { ro: "Predicții bazate pe dovezi vizibile acum", examples: [
      { en: "Look at those clouds, it is going to rain.", ro: "Uite ce nori, o să plouă.", highlight: "is going to rain" },
      { en: "He is driving too fast, he is going to crash.", ro: "Conduce prea repede, o să facă accident.", highlight: "is going to crash" } ] },
    { ro: "Ceva care este pe cale să se întâmple, iminent", examples: [
      { en: "The show is going to start in five minutes.", ro: "Spectacolul începe în cinci minute.", highlight: "is going to start" },
      { en: "Careful, that glass is going to fall.", ro: "Atenție, paharul o să cadă.", highlight: "is going to fall" } ] },
    { ro: "Refuzuri și avertismente ferme", examples: [
      { en: "I am not going to pay for their mistake.", ro: "Nu am de gând să plătesc pentru greșeala lor.", highlight: "am not going to pay" },
      { en: "She is going to be furious when she finds out.", ro: "O să fie furioasă când o să afle.", highlight: "is going to be" } ] }
  ],
  signalWords: ["tomorrow", "next month", "this weekend", "soon", "in a minute", "look", "listen", "I have decided"],
  compareWith: {
    id: "future-will",
    leftTitle: "be going to: plan sau dovadă",
    rightTitle: "will: decizie de acum, opinie",
    rows: [
      { left: "I am going to buy a new laptop. (m-am hotărât)", right: "I will buy a new laptop. (mă hotărăsc acum)" },
      { left: "Look, it is going to snow.", right: "I think it will snow tomorrow." },
      { left: "We are going to move offices in June. (plan)", right: "We will probably move offices. (opinie)" },
      { left: "She is going to quit, she told me.", right: "She will quit if they don't pay more." },
      { left: "I am not going to argue with him. (refuz ferm)", right: "I won't argue with him. (decizie acum)" }
    ]
  },
  mistakes: [
    { wrong: "I am going to buy it, I decide now.", right: "I will buy it, I have just decided.", why: "Decizia luată chiar acum se exprimă cu will, nu cu going to." },
    { wrong: "She going to call you.", right: "She is going to call you.", why: "Auxiliarul to be nu poate lipsi." },
    { wrong: "We are going to go to the venue at six.", right: "We are going to the venue at six.", why: "Cu verbul go se preferă Present Continuous, ca să eviți going to go." },
    { wrong: "Are you going to come tomorrow? Yes, I going.", right: "Are you going to come tomorrow? Yes, I am.", why: "Răspunsul scurt repetă doar auxiliarul." },
    { wrong: "It is going to rains.", right: "It is going to rain.", why: "După going to se pune infinitivul, fără -s." },
    { wrong: "I am going to can drive next year.", right: "I am going to be able to drive next year.", why: "Can nu se folosește după going to; se înlocuiește cu be able to." }
  ],
  examples: [
    { en: "We're going to launch the new package in autumn.", ro: "O să lansăm pachetul nou toamna.", highlight: "'re going to launch" },
    { en: "I'm going to speak to the supplier tomorrow.", ro: "Mâine o să vorbesc cu furnizorul.", highlight: "'m going to speak" },
    { en: "Look at the queue, we're going to be late.", ro: "Uite ce coadă, o să întârziem.", highlight: "'re going to be" },
    { en: "They aren't going to change the contract.", ro: "N-au de gând să schimbe contractul.", highlight: "aren't going to change" },
    { en: "Are you going to invite the whole team?", ro: "Ai de gând să inviți toată echipa?", highlight: "Are you going to invite" },
    { en: "This project is going to take longer than we thought.", ro: "Proiectul ăsta o să dureze mai mult decât credeam.", highlight: "is going to take" },
    { en: "I'm not going to accept those terms.", ro: "Nu am de gând să accept condițiile alea.", highlight: "'m not going to accept" },
    { en: "She's going to study marketing next year.", ro: "Anul viitor o să studieze marketing.", highlight: "'s going to study" },
    { en: "The battery is at two percent, the laptop is going to die.", ro: "Bateria e la doi la sută, laptopul o să se închidă.", highlight: "is going to die" },
    { en: "We're going to need more chairs.", ro: "O să avem nevoie de mai multe scaune.", highlight: "'re going to need" },
    { en: "He's going to be disappointed with the result.", ro: "O să fie dezamăgit de rezultat.", highlight: "'s going to be" },
    { en: "What are you going to do about the noise complaint?", ro: "Ce ai de gând să faci cu reclamația pentru zgomot?", highlight: "are you going to do" }
  ],
  exercises: [
    { type: "fill", prompt: "We ___ (open) a second office next year.", answer: ["are going to open", "'re going to open"], hint: "plan", why: "Plan decis dinainte, deci be going to." },
    { type: "fill", prompt: "Look at those clouds, it ___ (rain).", answer: ["is going to rain", "'s going to rain"], hint: "dovadă vizibilă", why: "Predicție bazată pe ce se vede acum." },
    { type: "fill", prompt: "I ___ (not / work) this weekend.", answer: ["am not going to work", "'m not going to work"], hint: "intenție negativă", why: "Not se pune după auxiliarul to be." },
    { type: "fill", prompt: "___ (you / accept) their offer?", answer: ["Are you going to accept", "are you going to accept"], hint: "întrebare", why: "Auxiliarul Are trece înaintea subiectului." },
    { type: "fill", prompt: "The show ___ (start) in five minutes.", answer: ["is going to start", "'s going to start"], hint: "iminent", why: "Acțiune pe cale să se întâmple." },
    { type: "fill", prompt: "They ___ (need) more staff for this event.", answer: ["are going to need", "'re going to need"], hint: "predicție", why: "Predicție bazată pe situația de acum." },
    { type: "fill", prompt: "She ___ (tell) him tonight, she has decided.", answer: ["is going to tell", "'s going to tell"], hint: "decizie deja luată", why: "Decizia era deja luată, deci going to." },
    { type: "fill", prompt: "I ___ (be) able to drive by June.", answer: ["am going to be", "'m going to be"], hint: "be able to", why: "Can devine be able to după going to." },
    { type: "choose", prompt: "The phone is ringing. I ___ it.", options: ["am going to answer", "will answer", "answer"], answer: 1, why: "Decizie luată pe loc, deci will." },
    { type: "choose", prompt: "We ___ the offer tomorrow, it is already agreed.", options: ["will send", "are going to send", "send"], answer: 1, why: "Plan deja stabilit." },
    { type: "choose", prompt: "Careful, you ___ that glass!", options: ["will drop", "are going to drop", "drop"], answer: 1, why: "Predicție bazată pe ce se vede în acest moment." },
    { type: "choose", prompt: "I think they ___ accept.", options: ["are going to", "will", "going to"], answer: 1, why: "I think plus opinie cere will." },
    { type: "choose", prompt: "___ going to join us for dinner?", options: ["Are you", "Do you", "You are"], answer: 0, why: "Întrebarea începe cu auxiliarul Are." },
    { type: "choose", prompt: "It ___ be a difficult year, judging by the numbers.", options: ["is going to", "will can", "goes to"], answer: 0, why: "Predicție bazată pe dovezi." },
    { type: "transform", prompt: "They are going to cancel the event. (negativ)", answer: ["They aren't going to cancel the event.", "They are not going to cancel the event."], why: "Not se pune după are." },
    { type: "transform", prompt: "She is going to resign. (interogativ)", answer: ["Is she going to resign?"], why: "Auxiliarul Is trece în față." },
    { type: "transform", prompt: "I have decided to call him tomorrow. (folosește going to)", answer: ["I am going to call him tomorrow.", "I'm going to call him tomorrow."], why: "Decizia era deja luată, deci going to." },
    { type: "transform", prompt: "We aren't going to move. (afirmativ)", answer: ["We are going to move.", "We're going to move."], why: "Se scoate not." },
    { type: "translate", prompt: "O să vorbesc cu ei mâine.", answer: ["I am going to talk to them tomorrow.", "I'm going to talk to them tomorrow.", "I am going to speak to them tomorrow.", "I'm going to speak to them tomorrow."], why: "Intenție deja hotărâtă." },
    { type: "translate", prompt: "Uite ce nori, o să plouă.", answer: ["Look at those clouds, it is going to rain.", "Look at those clouds, it's going to rain."], why: "Predicție bazată pe ce se vede." },
    { type: "translate", prompt: "N-am de gând să plătesc pentru greșeala lor.", answer: ["I am not going to pay for their mistake.", "I'm not going to pay for their mistake."], why: "Refuz ferm, exprimat cu going to." },
    { type: "translate", prompt: "Ai de gând să inviți toată echipa?", answer: ["Are you going to invite the whole team?", "Are you going to invite the entire team?"], why: "Întrebare despre intenție." },
    { type: "translate", prompt: "O să avem nevoie de mai mult timp.", answer: ["We are going to need more time.", "We're going to need more time."], why: "Predicție bazată pe situația actuală." },
    { type: "translate", prompt: "Anul viitor o să studieze în străinătate.", answer: ["He is going to study abroad next year.", "She is going to study abroad next year.", "He's going to study abroad next year.", "She's going to study abroad next year."], why: "Plan deja hotărât." }
  ],
  finalTest: [
    { type: "fill", prompt: "I ___ (buy) a new van, I have already chosen the model.", answer: ["am going to buy", "'m going to buy"], why: "Decizia era deja luată." },
    { type: "fill", prompt: "___ (they / come) to the meeting?", answer: ["Are they going to come", "are they going to come"], why: "Întrebare cu Are în față." },
    { type: "fill", prompt: "He ___ (not / apologise) for that.", answer: ["isn't going to apologise", "is not going to apologise", "isn't going to apologize", "is not going to apologize"], why: "Refuz ferm, negativ după is." },
    { type: "choose", prompt: "The lift is stuck. I ___ the emergency button.", options: ["am going to press", "will press", "press"], answer: 1, why: "Decizie luată în acest moment." },
    { type: "choose", prompt: "That pile of boxes ___ fall.", options: ["will", "is going to", "goes to"], answer: 1, why: "Predicție bazată pe dovada vizibilă." },
    { type: "choose", prompt: "We ___ redesign the whole website, the plan is approved.", options: ["will", "are going to", "go to"], answer: 1, why: "Plan aprobat, deci going to." },
    { type: "choose", prompt: "I ___ to the venue at six.", options: ["am going to go", "am going", "will going"], answer: 1, why: "Cu verbul go se preferă Present Continuous." },
    { type: "choose", prompt: "She ___ furious when she reads this.", options: ["is going to be", "will be going", "goes to be"], answer: 0, why: "Predicție fermă bazată pe context." },
    { type: "transform", prompt: "We are going to postpone it. (interogativ)", answer: ["Are we going to postpone it?"], why: "Auxiliarul trece în față." },
    { type: "transform", prompt: "He is going to complain. (negativ)", answer: ["He isn't going to complain.", "He is not going to complain."], why: "Not după is." },
    { type: "transform", prompt: "Our plan is to hire three people. (folosește going to)", answer: ["We are going to hire three people.", "We're going to hire three people."], why: "Plan stabilit, deci going to." },
    { type: "translate", prompt: "O să întârziem.", answer: ["We are going to be late.", "We're going to be late."], why: "Predicție bazată pe situația de acum." },
    { type: "translate", prompt: "Ce ai de gând să faci?", answer: ["What are you going to do?"], why: "Întrebare despre intenție." },
    { type: "translate", prompt: "Nu o să schimbe prețul.", answer: ["They aren't going to change the price.", "They are not going to change the price.", "He isn't going to change the price.", "She isn't going to change the price."], why: "Intenție negativă." },
    { type: "translate", prompt: "O să dureze mai mult decât credeam.", answer: ["It is going to take longer than we thought.", "It's going to take longer than we thought.", "It is going to take longer than I thought.", "It's going to take longer than I thought."], why: "Predicție bazată pe cum arată lucrurile acum." }
  ]
});

window.E360DATA.tenses.push({
  id: "future-continuous",
  group: "viitor",
  level: "B2",
  title: "Future Continuous",
  summary: "Ce vei fi în plină desfășurare de a face la un moment precis din viitor, sau ce se întâmplă oricum, ca parte din program.",
  also: "Este și o formă foarte politicoasă de a întreba planurile cuiva, fără să suni a cerere.",
  form: {
    affirmative: "S + will be + V-ing",
    affirmativeExample: "This time tomorrow I will be flying to Madrid.",
    negative: "S + will not be + V-ing",
    negativeExample: "I won't be working on Friday.",
    question: "Will + S + be + V-ing?",
    questionExample: "Will you be using the car tonight?",
    short: "Yes, I will. / No, I won't.",
    shortExample: "Will they be waiting? Yes, they will.",
    note: "Se folosește și forma be going to be V-ing, dar will be V-ing este cea standard. Verbele de stare rămân în afara acestei forme."
  },
  uses: [
    { ro: "Acțiune în desfășurare la un moment precis din viitor", examples: [
      { en: "At ten tomorrow I will be presenting the offer.", ro: "Mâine la zece o să prezint oferta.", highlight: "will be presenting" },
      { en: "This time next week we will be setting up the stage.", ro: "Săptămâna viitoare pe vremea asta o să montăm scena.", highlight: "will be setting up" } ] },
    { ro: "Ceva care se va întâmpla oricum, ca parte din desfășurarea normală", examples: [
      { en: "I will be passing your office anyway, so I can bring it.", ro: "Oricum trec pe la biroul tău, așa că pot să îl aduc.", highlight: "will be passing" },
      { en: "She will be seeing him at the conference.", ro: "Oricum îl va vedea la conferință.", highlight: "will be seeing" } ] },
    { ro: "Întrebări politicoase despre planurile cuiva, fără presiune", examples: [
      { en: "Will you be joining us for dinner?", ro: "Veniți și dumneavoastră la cină?", highlight: "Will you be joining" },
      { en: "Will you be needing the projector?", ro: "Veți avea nevoie de proiector?", highlight: "Will you be needing" } ] },
    { ro: "Acțiune care va fi în curs când se întâmplă altceva", examples: [
      { en: "When you arrive, we will still be loading the van.", ro: "Când ajungi, o să încărcăm încă duba.", highlight: "will still be loading" },
      { en: "Don't call at eight, I will be driving.", ro: "Nu suna la opt, o să conduc.", highlight: "will be driving" } ] }
  ],
  signalWords: ["this time tomorrow", "at ten o'clock", "when you arrive", "all day tomorrow", "next week at this time", "anyway"],
  compareWith: {
    id: "future-will",
    leftTitle: "Future Continuous: în desfășurare",
    rightTitle: "Future Simple: fapt complet",
    rows: [
      { left: "At six I will be driving. (voi fi pe drum)", right: "At six I will drive. (atunci pornesc)" },
      { left: "Will you be using the room? (întrebare neutră)", right: "Will you use the room? (aproape o cerere)" },
      { left: "We will be waiting outside.", right: "We will wait outside." },
      { left: "I will be working all day tomorrow.", right: "I will work tomorrow." },
      { left: "She will be staying with friends.", right: "She will stay with friends." }
    ]
  },
  mistakes: [
    { wrong: "I will be know the answer tomorrow.", right: "I will know the answer tomorrow.", why: "Know este verb de stare și nu se pune la continuous." },
    { wrong: "This time tomorrow I will fly to Madrid.", right: "This time tomorrow I will be flying to Madrid.", why: "La un moment precis din viitor, acțiunea este în desfășurare, deci will be V-ing." },
    { wrong: "I will be work all day.", right: "I will be working all day.", why: "După be verbul trebuie să aibă -ing." },
    { wrong: "Will you be come to the party?", right: "Will you be coming to the party?", why: "Aceeași regulă: forma de -ing este obligatorie." },
    { wrong: "When you will arrive, I will be waiting.", right: "When you arrive, I will be waiting.", why: "După when nu se folosește will." },
    { wrong: "I am going to be at ten in the meeting.", right: "At ten I will be in a meeting.", why: "Traducerea directă nu funcționează, se folosește structura corectă cu will be." }
  ],
  examples: [
    { en: "This time tomorrow I'll be flying to Madrid.", ro: "Mâine pe vremea asta o să zbor spre Madrid.", highlight: "'ll be flying" },
    { en: "Don't call me at nine, I'll be driving.", ro: "Nu mă suna la nouă, o să conduc.", highlight: "'ll be driving" },
    { en: "Will you be using the meeting room this afternoon?", ro: "Veți folosi sala de ședințe după-amiază?", highlight: "Will you be using" },
    { en: "We'll be waiting for you at the entrance.", ro: "Te așteptăm la intrare.", highlight: "'ll be waiting" },
    { en: "I won't be working next Monday.", ro: "Lunea viitoare nu lucrez.", highlight: "won't be working" },
    { en: "At this time next month we'll be running the festival.", ro: "Luna viitoare pe vremea asta o să ținem festivalul.", highlight: "'ll be running" },
    { en: "I'll be passing the warehouse anyway, so I can pick it up.", ro: "Oricum trec pe la depozit, așa că pot să îl iau eu.", highlight: "'ll be passing" },
    { en: "When you get there, the team will still be setting up.", ro: "Când ajungi acolo, echipa o să monteze încă.", highlight: "will still be setting up" },
    { en: "She'll be staying at the hotel next to the venue.", ro: "O să stea la hotelul de lângă locație.", highlight: "'ll be staying" },
    { en: "Will they be joining us for the tasting?", ro: "Vor veni și ei la degustare?", highlight: "Will they be joining" },
    { en: "We'll be discussing the budget all morning.", ro: "O să discutăm despre buget toată dimineața.", highlight: "'ll be discussing" },
    { en: "This time next year I'll be running my own agency.", ro: "Anul viitor pe vremea asta o să-mi conduc propria agenție.", highlight: "'ll be running" }
  ],
  exercises: [
    { type: "fill", prompt: "This time tomorrow I ___ (fly) to Rome.", answer: ["will be flying", "'ll be flying"], hint: "moment precis din viitor", why: "La un moment precis din viitor, acțiunea este în desfășurare." },
    { type: "fill", prompt: "Don't call at eight, I ___ (drive).", answer: ["will be driving", "'ll be driving"], hint: "în desfășurare", why: "La ora aceea vei fi în plină acțiune." },
    { type: "fill", prompt: "___ (you / use) the projector this afternoon?", answer: ["Will you be using", "will you be using"], hint: "întrebare politicoasă", why: "Will you be plus -ing este forma neutră, fără presiune." },
    { type: "fill", prompt: "We ___ (not / work) on the public holiday.", answer: ["won't be working", "will not be working"], hint: "negativ", why: "Negativul se face cu won't be plus -ing." },
    { type: "fill", prompt: "When you arrive, we ___ (still / load) the van.", answer: ["will still be loading", "'ll still be loading"], hint: "still", why: "Still se pune între will și be." },
    { type: "fill", prompt: "At ten tomorrow they ___ (present) the new concept.", answer: ["will be presenting", "'ll be presenting"], hint: "oră precisă", why: "Acțiune în desfășurare la o oră din viitor." },
    { type: "fill", prompt: "I ___ (pass) your office anyway, so I can drop it off.", answer: ["will be passing", "'ll be passing"], hint: "anyway", why: "Ceva ce se întâmplă oricum, ca parte din program." },
    { type: "fill", prompt: "She ___ (stay) with her sister next week.", answer: ["will be staying", "'ll be staying"], hint: "aranjament", why: "Aranjament pentru viitor, exprimat cu will be plus -ing." },
    { type: "choose", prompt: "I ___ the answer by tomorrow.", options: ["will be knowing", "will know", "am knowing"], answer: 1, why: "Know este verb de stare." },
    { type: "choose", prompt: "At six tomorrow we ___ in a meeting.", options: ["will be sitting", "will sit", "sit"], answer: 0, why: "Acțiune în desfășurare la un moment precis." },
    { type: "choose", prompt: "___ you ___ the car tonight?", options: ["Will / be needing", "Do / need", "Are / need"], answer: 0, why: "Întrebare politicoasă despre planuri." },
    { type: "choose", prompt: "When you ___, I will be waiting outside.", options: ["will arrive", "arrive", "are arriving"], answer: 1, why: "După when se folosește prezentul." },
    { type: "choose", prompt: "They ___ all day tomorrow.", options: ["will be travelling", "will travelling", "are travel"], answer: 0, why: "All day tomorrow arată durata în viitor." },
    { type: "choose", prompt: "I won't ___ able to help on Friday.", options: ["be", "being", "been"], answer: 0, why: "Won't be able to este forma corectă." },
    { type: "transform", prompt: "I will work all morning tomorrow. (Future Continuous)", answer: ["I will be working all morning tomorrow.", "I'll be working all morning tomorrow."], why: "All morning arată durata, deci will be plus -ing." },
    { type: "transform", prompt: "We will be waiting. (negativ)", answer: ["We won't be waiting.", "We will not be waiting."], why: "Won't be plus -ing." },
    { type: "transform", prompt: "She will be presenting at nine. (interogativ)", answer: ["Will she be presenting at nine?"], why: "Will trece înaintea subiectului." },
    { type: "transform", prompt: "Will you use the room later? (fă întrebarea mai politicoasă)", answer: ["Will you be using the room later?"], why: "Forma continuous elimină nuanța de cerere." },
    { type: "translate", prompt: "Mâine la ora asta o să fiu în avion.", answer: ["This time tomorrow I will be on a plane.", "This time tomorrow I'll be on a plane.", "This time tomorrow I will be flying.", "This time tomorrow I'll be flying."], why: "Situație în desfășurare la un moment precis din viitor." },
    { type: "translate", prompt: "Nu suna la opt, o să conduc.", answer: ["Don't call at eight, I will be driving.", "Don't call at eight, I'll be driving."], why: "Acțiune în curs la ora respectivă." },
    { type: "translate", prompt: "Veți folosi sala mâine?", answer: ["Will you be using the room tomorrow?", "Will you be using the hall tomorrow?"], why: "Întrebare politicoasă despre planuri." },
    { type: "translate", prompt: "Când ajungi, o să te așteptăm la intrare.", answer: ["When you arrive, we will be waiting at the entrance.", "When you arrive, we'll be waiting at the entrance.", "When you get there, we will be waiting at the entrance."], why: "După when se folosește prezentul, principala primește will be plus -ing." },
    { type: "translate", prompt: "Lunea viitoare nu lucrez.", answer: ["I won't be working next Monday.", "I will not be working next Monday."], why: "Negativ la Future Continuous." },
    { type: "translate", prompt: "Oricum trec pe acolo, îți aduc eu documentele.", answer: ["I will be passing by anyway, so I will bring you the documents.", "I'll be passing by anyway, so I'll bring you the documents.", "I will be going past anyway, so I will bring you the documents."], why: "Ceva ce se întâmplă oricum, ca parte din program." }
  ],
  finalTest: [
    { type: "fill", prompt: "At midnight we ___ (still / dance).", answer: ["will still be dancing", "'ll still be dancing"], why: "Acțiune în desfășurare la un moment precis din viitor." },
    { type: "fill", prompt: "___ (they / attend) the conference?", answer: ["Will they be attending", "will they be attending"], why: "Întrebare politicoasă despre planuri." },
    { type: "fill", prompt: "I ___ (not / use) the office next week.", answer: ["won't be using", "will not be using"], why: "Negativ la Future Continuous." },
    { type: "choose", prompt: "This time next month they ___ in their new flat.", options: ["will live", "will be living", "live"], answer: 1, why: "Situație în desfășurare la un moment din viitor." },
    { type: "choose", prompt: "I ___ what to do by then.", options: ["will be knowing", "will know", "know"], answer: 1, why: "Verb de stare." },
    { type: "choose", prompt: "Don't come at seven, we ___ dinner.", options: ["will have", "will be having", "have"], answer: 1, why: "Acțiune în curs la ora respectivă." },
    { type: "choose", prompt: "As soon as you ___, call me.", options: ["will land", "land", "will be landing"], answer: 1, why: "După as soon as se folosește prezentul." },
    { type: "choose", prompt: "She ___ in Berlin all next week.", options: ["will be working", "will working", "is work"], answer: 0, why: "Durată în viitor, deci will be plus -ing." },
    { type: "transform", prompt: "We will be travelling. (interogativ)", answer: ["Will we be travelling?", "Will we be traveling?"], why: "Will trece în față." },
    { type: "transform", prompt: "I will meet clients all day tomorrow. (Future Continuous)", answer: ["I will be meeting clients all day tomorrow.", "I'll be meeting clients all day tomorrow."], why: "All day arată durata în viitor." },
    { type: "transform", prompt: "He will be waiting. (negativ)", answer: ["He won't be waiting.", "He will not be waiting."], why: "Won't be plus -ing." },
    { type: "translate", prompt: "Săptămâna viitoare pe vremea asta o să montăm scena.", answer: ["This time next week we will be setting up the stage.", "This time next week we'll be setting up the stage."], why: "Acțiune în desfășurare la un moment precis din viitor." },
    { type: "translate", prompt: "Vor veni și ei la degustare?", answer: ["Will they be joining us for the tasting?", "Will they be coming to the tasting?"], why: "Întrebare politicoasă despre planuri." },
    { type: "translate", prompt: "O să discutăm despre buget toată dimineața.", answer: ["We will be discussing the budget all morning.", "We'll be discussing the budget all morning."], why: "Durată în viitor." },
    { type: "translate", prompt: "Când sosești, echipa o să lucreze încă.", answer: ["When you arrive, the team will still be working.", "When you get there, the team will still be working."], why: "După when se folosește prezentul; principala primește will still be plus -ing." }
  ]
});

window.E360DATA.tenses.push({
  id: "future-perfect",
  group: "viitor",
  level: "B2",
  title: "Future Perfect",
  summary: "Ce va fi deja terminat până la un moment din viitor. Se recunoaște după by și by the time.",
  also: "Există și varianta continuous, will have been V-ing, pentru durata acumulată până la un moment din viitor.",
  form: {
    affirmative: "S + will have + V3",
    affirmativeExample: "By Friday we will have finished the setup.",
    negative: "S + will not have + V3",
    negativeExample: "They won't have received the goods by then.",
    question: "Will + S + have + V3?",
    questionExample: "Will you have finished by six?",
    short: "Yes, I will. / No, they won't.",
    shortExample: "Will it have started? No, it won't.",
    note: "Varianta continuous: By June I will have been working here for ten years. Se folosește pentru durata acumulată, nu pentru rezultat."
  },
  uses: [
    { ro: "Acțiune terminată înainte de un moment din viitor", examples: [
      { en: "By six o'clock we will have loaded everything.", ro: "Până la ora șase o să încărcăm tot.", highlight: "will have loaded" },
      { en: "She will have sent the invoice by tomorrow morning.", ro: "Până mâine dimineață va fi trimis factura.", highlight: "will have sent" } ] },
    { ro: "Cu by the time, când o acțiune viitoare se termină înaintea alteia", examples: [
      { en: "By the time the guests arrive, we will have finished.", ro: "Până să vină invitații, o să terminăm.", highlight: "will have finished" },
      { en: "By the time you read this, I will have left.", ro: "Când vei citi asta, eu voi fi plecat.", highlight: "will have left" } ] },
    { ro: "Bilanț: cât se va fi acumulat până la un moment din viitor", examples: [
      { en: "By December we will have organised forty events this year.", ro: "Până în decembrie o să fi organizat patruzeci de evenimente anul ăsta.", highlight: "will have organised" },
      { en: "Next month I will have worked here for five years.", ro: "Luna viitoare se fac cinci ani de când lucrez aici.", highlight: "will have worked" } ] },
    { ro: "Presupuneri despre ceva deja terminat, cu probably și by now", examples: [
      { en: "They will have arrived by now.", ro: "Probabil au ajuns deja.", highlight: "will have arrived" },
      { en: "He will have seen the email already.", ro: "Probabil a văzut deja mailul.", highlight: "will have seen" } ] }
  ],
  signalWords: ["by", "by then", "by the time", "by Friday", "by next year", "before", "in two weeks' time", "by now"],
  compareWith: {
    id: "future-continuous",
    leftTitle: "Future Perfect: gata până atunci",
    rightTitle: "Future Continuous: în curs atunci",
    rows: [
      { left: "By eight I will have finished. (gata)", right: "At eight I will be finishing. (încă lucrez)" },
      { left: "By Friday we will have sent the offer.", right: "On Friday we will be writing the offer." },
      { left: "By then they will have left.", right: "At that moment they will be leaving." },
      { left: "I will have read it by tomorrow.", right: "I will be reading it tomorrow." },
      { left: "By June she will have moved.", right: "In June she will be moving." }
    ]
  },
  mistakes: [
    { wrong: "Until Friday I will finish it.", right: "By Friday I will have finished it.", why: "Până la un termen se traduce cu by, nu cu until. Until înseamnă pe tot parcursul, până la momentul acela." },
    { wrong: "By tomorrow I will finished.", right: "By tomorrow I will have finished.", why: "Structura este will have plus participiu." },
    { wrong: "By the time you will arrive, we will have finished.", right: "By the time you arrive, we will have finished.", why: "După by the time nu se folosește will." },
    { wrong: "I will have went by then.", right: "I will have gone by then.", why: "După have se pune participiul, gone." },
    { wrong: "By next year I will work here for five years.", right: "By next year I will have worked here for five years.", why: "Bilanțul acumulat până la un moment din viitor cere Future Perfect." },
    { wrong: "Will you have finish?", right: "Will you have finished?", why: "Participiul este obligatoriu după have." }
  ],
  examples: [
    { en: "By Friday we'll have finished the whole setup.", ro: "Până vineri o să terminăm tot montajul.", highlight: "'ll have finished" },
    { en: "They won't have received the goods by Monday.", ro: "Nu vor primi marfa până luni.", highlight: "won't have received" },
    { en: "Will you have signed the contract by then?", ro: "Vei fi semnat contractul până atunci?", highlight: "Will you have signed" },
    { en: "By the time the doors open, everything will have been checked.", ro: "Până se deschid ușile, totul va fi fost verificat.", highlight: "will have been checked" },
    { en: "In two years I'll have paid off the van.", ro: "În doi ani o să achit duba.", highlight: "'ll have paid off" },
    { en: "By December we'll have run thirty weddings.", ro: "Până în decembrie o să fi făcut treizeci de nunți.", highlight: "'ll have run" },
    { en: "He'll have left the office by six.", ro: "Va fi plecat de la birou până la șase.", highlight: "'ll have left" },
    { en: "By next spring she'll have been with us for ten years.", ro: "Până primăvara viitoare se fac zece ani de când e cu noi.", highlight: "'ll have been" },
    { en: "They'll have forgotten about it by next week.", ro: "O să uite de asta până săptămâna viitoare.", highlight: "'ll have forgotten" },
    { en: "By the time you read this, I'll have landed.", ro: "Când citești asta, eu voi fi aterizat.", highlight: "'ll have landed" },
    { en: "We won't have finished the report before the meeting.", ro: "Nu o să terminăm raportul înainte de ședință.", highlight: "won't have finished" },
    { en: "By now they'll have seen the proposal.", ro: "Probabil au văzut deja propunerea.", highlight: "'ll have seen" }
  ],
  exercises: [
    { type: "fill", prompt: "By Friday we ___ (finish) the setup.", answer: ["will have finished", "'ll have finished"], hint: "by", why: "By plus un moment viitor cere Future Perfect." },
    { type: "fill", prompt: "They ___ (not / receive) the goods by Monday.", answer: ["won't have received", "will not have received"], hint: "negativ", why: "Negativul este won't have plus participiu." },
    { type: "fill", prompt: "___ (you / sign) the contract by then?", answer: ["Will you have signed", "will you have signed"], hint: "întrebare", why: "Will trece înaintea subiectului, apoi have plus participiu." },
    { type: "fill", prompt: "By the time you arrive, I ___ (leave).", answer: ["will have left", "'ll have left"], hint: "by the time", why: "By the time cere Future Perfect în principală." },
    { type: "fill", prompt: "By next month I ___ (work) here for two years.", answer: ["will have worked", "'ll have worked", "will have been working"], hint: "bilanț", why: "Bilanț acumulat până la un moment din viitor." },
    { type: "fill", prompt: "She ___ (send) the invoice by tomorrow morning.", answer: ["will have sent", "'ll have sent"], hint: "termen", why: "Termen limită în viitor." },
    { type: "fill", prompt: "By the time the show starts, everyone ___ (arrive).", answer: ["will have arrived", "'ll have arrived"], hint: "by the time", why: "Acțiune terminată înaintea alteia din viitor." },
    { type: "fill", prompt: "In three weeks they ___ (move) to the new office.", answer: ["will have moved", "'ll have moved"], hint: "in three weeks", why: "Până la finalul acelei perioade acțiunea va fi terminată." },
    { type: "choose", prompt: "___ Friday I will have sent everything.", options: ["Until", "By", "In"], answer: 1, why: "Termenul limită se exprimă cu by, nu cu until." },
    { type: "choose", prompt: "By the time you ___, we will have started.", options: ["will get here", "get here", "are getting here"], answer: 1, why: "După by the time se folosește prezentul." },
    { type: "choose", prompt: "At eight we will ___ dinner, so call later.", options: ["have had", "be having", "had"], answer: 1, why: "La ora aceea acțiunea este în curs, deci Future Continuous." },
    { type: "choose", prompt: "They will have ___ by the time we get there.", options: ["went", "gone", "go"], answer: 1, why: "După have se pune participiul." },
    { type: "choose", prompt: "By 2030 the company ___ for fifty years.", options: ["will exist", "will have existed", "exists"], answer: 1, why: "Bilanț acumulat până la un moment din viitor." },
    { type: "choose", prompt: "I ___ finished by six, don't wait for me.", options: ["won't have", "will not be", "am not"], answer: 0, why: "Negativul la Future Perfect este won't have plus participiu." },
    { type: "transform", prompt: "We will finish before the guests arrive. (Future Perfect cu by the time)", answer: ["By the time the guests arrive, we will have finished.", "We will have finished by the time the guests arrive."], why: "Acțiune terminată înaintea alteia din viitor." },
    { type: "transform", prompt: "They will have paid. (negativ)", answer: ["They won't have paid.", "They will not have paid."], why: "Won't have plus participiu." },
    { type: "transform", prompt: "She will have left by nine. (interogativ)", answer: ["Will she have left by nine?"], why: "Will trece în față." },
    { type: "transform", prompt: "I started this job in 2021. Next year makes five years. (Future Perfect)", answer: ["By next year I will have worked here for five years.", "Next year I will have worked here for five years.", "By next year I will have been working here for five years."], why: "Bilanț acumulat până la un moment din viitor." },
    { type: "translate", prompt: "Până vineri o să terminăm tot.", answer: ["By Friday we will have finished everything.", "By Friday we'll have finished everything."], why: "By plus moment viitor, deci Future Perfect." },
    { type: "translate", prompt: "Când ajungi tu, eu voi fi plecat.", answer: ["By the time you arrive, I will have left.", "By the time you get here, I will have left.", "By the time you arrive, I'll have left."], why: "By the time cere prezentul în secundară și Future Perfect în principală." },
    { type: "translate", prompt: "Nu vor primi marfa până luni.", answer: ["They won't have received the goods by Monday.", "They will not have received the goods by Monday."], why: "Negativ la Future Perfect." },
    { type: "translate", prompt: "Până în decembrie o să fi organizat treizeci de evenimente.", answer: ["By December we will have organised thirty events.", "By December we'll have organised thirty events.", "By December we will have organized thirty events."], why: "Bilanț până la un moment din viitor." },
    { type: "translate", prompt: "Probabil au ajuns deja.", answer: ["They will have arrived by now.", "They'll have arrived by now."], why: "Presupunere despre ceva deja terminat, cu by now." },
    { type: "translate", prompt: "Vei fi semnat contractul până atunci?", answer: ["Will you have signed the contract by then?"], why: "Întrebare la Future Perfect." }
  ],
  finalTest: [
    { type: "fill", prompt: "By ten o'clock the guests ___ (leave).", answer: ["will have left", "'ll have left"], why: "By plus oră din viitor." },
    { type: "fill", prompt: "___ (she / finish) the report by Thursday?", answer: ["Will she have finished", "will she have finished"], why: "Întrebare cu Will plus have plus participiu." },
    { type: "fill", prompt: "We ___ (not / complete) the works before the opening.", answer: ["won't have completed", "will not have completed"], why: "Negativ la Future Perfect." },
    { type: "choose", prompt: "___ next summer I will have saved enough.", options: ["Until", "By", "On"], answer: 1, why: "Termen limită cu by." },
    { type: "choose", prompt: "By the time we ___, the meeting will have ended.", options: ["will arrive", "arrive", "are arriving"], answer: 1, why: "După by the time se folosește prezentul." },
    { type: "choose", prompt: "They will have ___ the contract by Friday.", options: ["sign", "signed", "signing"], answer: 1, why: "Participiul după have." },
    { type: "choose", prompt: "At nine tomorrow I ___ with a client.", options: ["will have met", "will be meeting", "meet"], answer: 1, why: "La ora aceea acțiunea este în curs." },
    { type: "choose", prompt: "By 2028 they ___ in this building for twenty years.", options: ["will work", "will have worked", "work"], answer: 1, why: "Bilanț acumulat." },
    { type: "transform", prompt: "He will have replied. (negativ)", answer: ["He won't have replied.", "He will not have replied."], why: "Won't have plus participiu." },
    { type: "transform", prompt: "We will pack everything before they come. (by the time)", answer: ["By the time they come, we will have packed everything.", "We will have packed everything by the time they come."], why: "Acțiune terminată înaintea alteia din viitor." },
    { type: "transform", prompt: "They will have booked the venue. (interogativ)", answer: ["Will they have booked the venue?"], why: "Will trece în față." },
    { type: "translate", prompt: "Până la ora șase o să încărcăm tot.", answer: ["By six o'clock we will have loaded everything.", "By six we will have loaded everything.", "By 6 we will have loaded everything."], why: "By plus oră din viitor." },
    { type: "translate", prompt: "Luna viitoare se fac cinci ani de când lucrez aici.", answer: ["Next month I will have worked here for five years.", "By next month I will have worked here for five years.", "Next month I will have been working here for five years."], why: "Bilanț acumulat până la un moment din viitor." },
    { type: "translate", prompt: "O să uite până săptămâna viitoare.", answer: ["They will have forgotten by next week.", "They'll have forgotten by next week.", "He will have forgotten by next week.", "She will have forgotten by next week."], why: "Acțiune terminată până la un moment din viitor." },
    { type: "translate", prompt: "Nu o să terminăm raportul înainte de ședință.", answer: ["We won't have finished the report before the meeting.", "We will not have finished the report before the meeting."], why: "Negativ la Future Perfect." }
  ]
});

window.E360DATA.tenses.push({
  id: "present-for-future",
  group: "viitor",
  level: "B1",
  title: "Prezentul folosit pentru viitor",
  summary: "Present Simple pentru orare fixe, Present Continuous pentru aranjamente personale deja stabilite.",
  also: "Este cel mai natural mod de a vorbi despre programul tău din zilele următoare. Un vorbitor nativ spune I am meeting him tomorrow, nu I will meet him tomorrow.",
  form: {
    affirmative: "S + V (orar) / S + am,is,are + V-ing (aranjament)",
    affirmativeExample: "The train leaves at seven. I am meeting the client at four.",
    negative: "S + do/does not + V / S + am,is,are + not + V-ing",
    negativeExample: "The shop doesn't open on Sunday. I'm not working tomorrow.",
    question: "Do/Does + S + V? / Am,Is,Are + S + V-ing?",
    questionExample: "What time does the ceremony start? Are you coming on Friday?",
    short: "Yes, it does. / No, I'm not.",
    shortExample: "Does it start at eight? Yes, it does.",
    note: "Present Simple se folosește pentru programe stabilite de altcineva: trenuri, avioane, cinema, program de lucru. Present Continuous se folosește pentru ce ai aranjat tu."
  },
  uses: [
    { ro: "Orare fixe și programe oficiale, cu Present Simple", examples: [
      { en: "The conference starts at nine tomorrow.", ro: "Conferința începe mâine la nouă.", highlight: "starts" },
      { en: "Our flight leaves at six in the morning.", ro: "Avionul nostru pleacă la șase dimineața.", highlight: "leaves" } ] },
    { ro: "Aranjamente personale deja stabilite, cu Present Continuous", examples: [
      { en: "I am seeing the venue manager on Thursday.", ro: "Joi mă văd cu managerul locației.", highlight: "am seeing" },
      { en: "We are having dinner with the suppliers tonight.", ro: "Diseară luăm cina cu furnizorii.", highlight: "are having" } ] },
    { ro: "După when, as soon as, before, after, until, if se folosește prezentul, nu will", examples: [
      { en: "I will call you when I get there.", ro: "Te sun când ajung.", highlight: "get" },
      { en: "We can start as soon as everyone arrives.", ro: "Putem începe imediat ce ajung toți.", highlight: "arrives" } ] },
    { ro: "Program personal repetat sau fixat de altcineva", examples: [
      { en: "My shift finishes at ten tonight.", ro: "Tura mea se termină diseară la zece.", highlight: "finishes" },
      { en: "The doors open at half past six.", ro: "Ușile se deschid la șase și jumătate.", highlight: "open" } ] }
  ],
  signalWords: ["tomorrow", "tonight", "next Friday", "at six", "when", "as soon as", "before", "after", "until", "the timetable says"],
  compareWith: {
    id: "future-will",
    leftTitle: "Prezent pentru viitor: program sau aranjament",
    rightTitle: "will: opinie sau decizie de acum",
    rows: [
      { left: "The train leaves at seven. (orar)", right: "The train will probably be late. (opinie)" },
      { left: "I am meeting them at four. (aranjat)", right: "I will meet them if they call. (condiție)" },
      { left: "The doors open at eight.", right: "I think the doors will open late." },
      { left: "We are flying on Monday. (bilete luate)", right: "We will fly if the price drops." },
      { left: "When he arrives, call me.", right: "He will arrive at six." }
    ]
  },
  mistakes: [
    { wrong: "When I will arrive, I will call you.", right: "When I arrive, I will call you.", why: "După when nu se folosește will. Se folosește prezentul, chiar dacă sensul este de viitor." },
    { wrong: "The train will leave at seven, it is on the timetable.", right: "The train leaves at seven.", why: "Orarele oficiale se exprimă cu Present Simple." },
    { wrong: "I will meet him tomorrow at four, it is arranged.", right: "I am meeting him tomorrow at four.", why: "Aranjamentele deja fixate se exprimă cu Present Continuous." },
    { wrong: "As soon as he will call, I will tell you.", right: "As soon as he calls, I will tell you.", why: "După as soon as se folosește prezentul." },
    { wrong: "I am having a meeting every Monday.", right: "I have a meeting every Monday.", why: "Every Monday arată rutină, deci Present Simple." },
    { wrong: "Before you will leave, sign the form.", right: "Before you leave, sign the form.", why: "După before se folosește prezentul, nu will." }
  ],
  examples: [
    { en: "The ceremony starts at four, not five.", ro: "Ceremonia începe la patru, nu la cinci.", highlight: "starts" },
    { en: "I'm meeting the florist tomorrow morning.", ro: "Mâine dimineață mă văd cu florăreasa.", highlight: "'m meeting" },
    { en: "Our flight lands at eleven at night.", ro: "Avionul nostru aterizează la unsprezece noaptea.", highlight: "lands" },
    { en: "We're having a tasting on Wednesday.", ro: "Miercuri avem o degustare.", highlight: "'re having" },
    { en: "What time does the venue close?", ro: "La ce oră se închide locația?", highlight: "does the venue close" },
    { en: "I'll send the file as soon as I finish it.", ro: "Trimit fișierul imediat ce îl termin.", highlight: "finish" },
    { en: "The band arrives at six for the sound check.", ro: "Trupa vine la șase pentru proba de sunet.", highlight: "arrives" },
    { en: "Are you coming to the site visit on Friday?", ro: "Vii vineri la vizita pe locație?", highlight: "Are you coming" },
    { en: "Call me when you get to the parking.", ro: "Sună-mă când ajungi la parcare.", highlight: "get" },
    { en: "The office doesn't open until nine on Mondays.", ro: "Lunea biroul se deschide abia la nouă.", highlight: "doesn't open" },
    { en: "We're not working next Friday, it is a holiday.", ro: "Vinerea viitoare nu lucrăm, e sărbătoare.", highlight: "'re not working" },
    { en: "The last bus leaves at half past eleven.", ro: "Ultimul autobuz pleacă la unsprezece și jumătate.", highlight: "leaves" }
  ],
  exercises: [
    { type: "fill", prompt: "The train ___ (leave) at seven tomorrow.", answer: ["leaves"], hint: "orar", why: "Orarele fixe se exprimă cu Present Simple." },
    { type: "fill", prompt: "I ___ (meet) the client at four this afternoon.", answer: ["am meeting", "'m meeting"], hint: "aranjament", why: "Aranjament personal deja stabilit, deci Present Continuous." },
    { type: "fill", prompt: "I will call you when I ___ (arrive).", answer: ["arrive"], hint: "după when", why: "După when se folosește prezentul, nu will." },
    { type: "fill", prompt: "The doors ___ (open) at half past six.", answer: ["open"], hint: "program", why: "Program oficial, deci Present Simple." },
    { type: "fill", prompt: "We ___ (have) dinner with them tonight.", answer: ["are having", "'re having"], hint: "aranjat", why: "Aranjament deja stabilit." },
    { type: "fill", prompt: "As soon as he ___ (call), I will let you know.", answer: ["calls"], hint: "as soon as", why: "După as soon as se folosește prezentul." },
    { type: "fill", prompt: "What time ___ (the film / start)?", answer: ["does the film start"], hint: "program", why: "Program de cinema, deci Present Simple." },
    { type: "fill", prompt: "Before you ___ (leave), please sign the delivery note.", answer: ["leave"], hint: "before", why: "După before se folosește prezentul." },
    { type: "choose", prompt: "The conference ___ on Monday at nine.", options: ["will start", "starts", "is starting"], answer: 1, why: "Program oficial, deci Present Simple." },
    { type: "choose", prompt: "I ___ the supplier tomorrow, it is already arranged.", options: ["will see", "am seeing", "see"], answer: 1, why: "Aranjament personal fixat." },
    { type: "choose", prompt: "When the guests ___, we will start the music.", options: ["will arrive", "arrive", "are arriving"], answer: 1, why: "După when se folosește prezentul." },
    { type: "choose", prompt: "Our flight ___ at six in the morning.", options: ["is leaving", "leaves", "will leave"], answer: 1, why: "Orar de zbor, deci Present Simple." },
    { type: "choose", prompt: "We ___ next Friday, it is a public holiday.", options: ["aren't working", "don't work", "won't working"], answer: 0, why: "Aranjament pentru o zi anume, deci Present Continuous." },
    { type: "choose", prompt: "I'll wait here until she ___.", options: ["will come", "comes", "is coming"], answer: 1, why: "După until se folosește prezentul." },
    { type: "transform", prompt: "I will meet him tomorrow, it is arranged. (folosește Present Continuous)", answer: ["I am meeting him tomorrow.", "I'm meeting him tomorrow."], why: "Aranjamentele fixate se exprimă cu Present Continuous." },
    { type: "transform", prompt: "The show will start at eight, according to the programme. (Present Simple)", answer: ["The show starts at eight."], why: "Programele oficiale se exprimă cu Present Simple." },
    { type: "transform", prompt: "When you will finish, send me the file. (corectează)", answer: ["When you finish, send me the file."], why: "După when nu se folosește will." },
    { type: "transform", prompt: "We are having a meeting on Tuesday. (interogativ)", answer: ["Are we having a meeting on Tuesday?"], why: "Auxiliarul Are trece în față." },
    { type: "translate", prompt: "Trenul pleacă la șapte.", answer: ["The train leaves at seven.", "The train leaves at 7."], why: "Orar fix, deci Present Simple." },
    { type: "translate", prompt: "Joi mă văd cu ei.", answer: ["I am seeing them on Thursday.", "I'm seeing them on Thursday.", "I am meeting them on Thursday.", "I'm meeting them on Thursday."], why: "Aranjament personal fixat." },
    { type: "translate", prompt: "Te sun când ajung.", answer: ["I will call you when I arrive.", "I'll call you when I arrive.", "I will call you when I get there.", "I'll call you when I get there."], why: "După when se folosește prezentul." },
    { type: "translate", prompt: "La ce oră se închide locația?", answer: ["What time does the venue close?", "What time does the venue shut?"], why: "Program oficial, deci Present Simple." },
    { type: "translate", prompt: "Diseară luăm cina cu furnizorii.", answer: ["We are having dinner with the suppliers tonight.", "We're having dinner with the suppliers tonight."], why: "Aranjament deja stabilit." },
    { type: "translate", prompt: "Începem imediat ce ajung toți.", answer: ["We will start as soon as everyone arrives.", "We'll start as soon as everyone arrives.", "We start as soon as everyone arrives."], why: "După as soon as se folosește prezentul." }
  ],
  finalTest: [
    { type: "fill", prompt: "The museum ___ (close) at five on Sundays.", answer: ["closes"], why: "Program oficial, Present Simple." },
    { type: "fill", prompt: "I ___ (fly) to Vienna on Monday, the ticket is booked.", answer: ["am flying", "'m flying"], why: "Aranjament fixat." },
    { type: "fill", prompt: "We will decide after we ___ (see) the venue.", answer: ["see"], why: "După after se folosește prezentul." },
    { type: "choose", prompt: "The ceremony ___ at four, it is on the invitation.", options: ["will start", "starts", "is starting"], answer: 1, why: "Program oficial." },
    { type: "choose", prompt: "___ you ___ to the tasting tomorrow?", options: ["Will / come", "Are / coming", "Do / come"], answer: 1, why: "Aranjament personal, deci Present Continuous." },
    { type: "choose", prompt: "I'll book the taxi as soon as I ___ the time.", options: ["will know", "know", "am knowing"], answer: 1, why: "După as soon as se folosește prezentul." },
    { type: "choose", prompt: "The last train ___ at midnight.", options: ["is leaving", "leaves", "will leave"], answer: 1, why: "Orar fix." },
    { type: "choose", prompt: "Don't leave until the client ___ the delivery.", options: ["will confirm", "confirms", "is confirming"], answer: 1, why: "După until se folosește prezentul." },
    { type: "transform", prompt: "It is arranged: I will visit the venue on Friday. (Present Continuous)", answer: ["I am visiting the venue on Friday.", "I'm visiting the venue on Friday."], why: "Aranjament fixat." },
    { type: "transform", prompt: "As soon as he will arrive, we will start. (corectează)", answer: ["As soon as he arrives, we will start.", "As soon as he arrives, we'll start."], why: "După as soon as nu se folosește will." },
    { type: "transform", prompt: "We are meeting on Wednesday. (negativ)", answer: ["We aren't meeting on Wednesday.", "We are not meeting on Wednesday."], why: "Not se pune după are." },
    { type: "translate", prompt: "Ultimul autobuz pleacă la unsprezece.", answer: ["The last bus leaves at eleven.", "The last bus leaves at 11."], why: "Orar fix." },
    { type: "translate", prompt: "Vinerea viitoare nu lucrăm.", answer: ["We aren't working next Friday.", "We are not working next Friday."], why: "Aranjament pentru o zi anume." },
    { type: "translate", prompt: "Sună-mă când ajungi la hotel.", answer: ["Call me when you get to the hotel.", "Call me when you arrive at the hotel."], why: "După when se folosește prezentul." },
    { type: "translate", prompt: "Miercuri avem o degustare.", answer: ["We are having a tasting on Wednesday.", "We're having a tasting on Wednesday.", "We have a tasting on Wednesday."], why: "Aranjament deja stabilit." }
  ]
});
