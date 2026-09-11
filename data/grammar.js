/* grammar.js - the 12 non-tense B2 structures. Same lesson shape as tenses.js. */

window.E360DATA = window.E360DATA || {};
window.E360DATA.grammar = window.E360DATA.grammar || [];

window.E360DATA.grammar.push({
  id: "conditionals",
  group: "conditional",
  level: "B2",
  title: "Condiționale 0, 1, 2, 3 și mixte",
  summary: "Patru tipare fixe pentru a lega o condiție de o consecință, plus varianta mixtă pentru condiție în trecut cu efect în prezent.",
  also: "Regula care rezolvă majoritatea greșelilor: după if nu se pune niciodată will sau would.",
  form: {
    affirmative: "0: If + prezent, prezent. 1: If + prezent, will + V. 2: If + trecut, would + V. 3: If + had + V3, would have + V3.",
    affirmativeExample: "If it rains, we move inside. If it rains, we will move inside. If it rained, we would move inside. If it had rained, we would have moved inside.",
    negative: "Negativul se pune fie pe condiție, fie pe consecință",
    negativeExample: "If we don't confirm today, we will lose the date.",
    question: "Ordinea se poate inversa, fără virgulă",
    questionExample: "What would you do if the band cancelled?",
    short: "Mixt: If + had + V3, would + V (acum)",
    shortExample: "If I had studied English earlier, I would be more confident now.",
    note: "Virgula se pune doar când propoziția cu if stă prima. Unless înseamnă if not. Were se folosește la toate persoanele în condiționalul 2 formal: If I were you."
  },
  uses: [
    { ro: "Tipul 0: adevăruri generale și reguli, ambele verbe la prezent", examples: [
      { en: "If you book early, you get a discount.", ro: "Dacă rezervi din timp, primești reducere.", highlight: "book" },
      { en: "If the client pays late, we charge interest.", ro: "Dacă clientul plătește cu întârziere, percepem dobândă.", highlight: "pays" } ] },
    { ro: "Tipul 1: situație reală și probabilă în viitor", examples: [
      { en: "If we confirm today, we will get the venue.", ro: "Dacă confirmăm azi, obținem locația.", highlight: "will get" },
      { en: "They will be upset if we change the date again.", ro: "Se vor supăra dacă mai schimbăm o dată data.", highlight: "will be" } ] },
    { ro: "Tipul 2: situație ipotetică sau improbabilă în prezent și viitor", examples: [
      { en: "If I had more time, I would learn Spanish too.", ro: "Dacă aș avea mai mult timp, aș învăța și spaniolă.", highlight: "would learn" },
      { en: "If I were you, I would ask for a written offer.", ro: "În locul tău, aș cere o ofertă scrisă.", highlight: "were" } ] },
    { ro: "Tipul 3: regret sau situație imposibilă din trecut", examples: [
      { en: "If we had booked earlier, we would have paid less.", ro: "Dacă am fi rezervat mai devreme, am fi plătit mai puțin.", highlight: "would have paid" },
      { en: "She would have come if you had invited her.", ro: "Ar fi venit dacă ai fi invitat-o.", highlight: "had invited" } ] },
    { ro: "Mixt: condiție în trecut cu efect în prezent", examples: [
      { en: "If I had taken that job, I would be in London now.", ro: "Dacă aș fi acceptat jobul acela, aș fi acum la Londra.", highlight: "would be" },
      { en: "If she hadn't missed the flight, she would be here.", ro: "Dacă nu ar fi pierdut avionul, ar fi aici.", highlight: "hadn't missed" } ] }
  ],
  signalWords: ["if", "unless", "as long as", "provided that", "in case", "otherwise", "even if", "were I you"],
  compareWith: {
    id: "wish-if-only",
    leftTitle: "Condițional: condiție și consecință",
    rightTitle: "Wish: regret, fără consecință",
    rows: [
      { left: "If I had time, I would help.", right: "I wish I had time." },
      { left: "If we had booked earlier, we would have saved money.", right: "I wish we had booked earlier." },
      { left: "If it stopped raining, we could go out.", right: "I wish it would stop raining." },
      { left: "If I were taller, I would reach it.", right: "I wish I were taller." },
      { left: "If you had told me, I would have come.", right: "I wish you had told me." }
    ]
  },
  mistakes: [
    { wrong: "If it will rain, we will cancel.", right: "If it rains, we will cancel.", why: "După if nu se folosește will. Condiția se pune la prezent." },
    { wrong: "If I would have money, I would buy it.", right: "If I had money, I would buy it.", why: "Would nu se pune în propoziția cu if. Condiționalul 2 cere trecutul simplu." },
    { wrong: "If I would have known, I would have called.", right: "If I had known, I would have called.", why: "Condiționalul 3 cere had plus participiu după if." },
    { wrong: "If he wouldn't be so late, we would start.", right: "If he weren't so late, we would start.", why: "Aceeași regulă: after if se pune trecutul, nu would." },
    { wrong: "Unless you don't pay, we cannot deliver.", right: "Unless you pay, we cannot deliver.", why: "Unless înseamnă deja if not, deci nu se mai adaugă o negație." },
    { wrong: "If I was you, I would refuse.", right: "If I were you, I would refuse.", why: "În sfatul standard se folosește were la toate persoanele." },
    { wrong: "If we would have more staff, we would take the job.", right: "If we had more staff, we would take the job.", why: "Would apare doar în consecință, niciodată după if." }
  ],
  examples: [
    { en: "If you pay in advance, we give you five percent off.", ro: "Dacă plătiți în avans, vă dăm cinci la sută reducere.", highlight: "pay" },
    { en: "If the weather is bad, we will use the tent.", ro: "Dacă vremea e proastă, folosim cortul.", highlight: "will use" },
    { en: "If I were you, I would put everything in writing.", ro: "În locul tău, aș pune totul în scris.", highlight: "were" },
    { en: "If we had known about the traffic, we would have left earlier.", ro: "Dacă am fi știut de trafic, am fi plecat mai devreme.", highlight: "would have left" },
    { en: "Unless they confirm by Friday, we will offer the date to someone else.", ro: "Dacă nu confirmă până vineri, oferim data altcuiva.", highlight: "Unless" },
    { en: "If I had studied English at school, I would speak better now.", ro: "Dacă aș fi învățat engleză la școală, aș vorbi mai bine acum.", highlight: "would speak" },
    { en: "I will send the contract as long as you approve the budget.", ro: "Trimit contractul cu condiția să aprobi bugetul.", highlight: "as long as" },
    { en: "What would you do if the supplier cancelled the day before?", ro: "Ce ai face dacă furnizorul ar anula cu o zi înainte?", highlight: "would you do" },
    { en: "If she hadn't recommended us, we wouldn't have this client.", ro: "Dacă nu ne-ar fi recomandat, n-am avea clientul ăsta.", highlight: "wouldn't have" },
    { en: "Take a coat in case it gets cold.", ro: "Ia o haină în caz că se face frig.", highlight: "in case" },
    { en: "If you heat ice, it melts.", ro: "Dacă încălzești gheața, se topește.", highlight: "melts" },
    { en: "We would have finished on time if the truck had arrived at eight.", ro: "Am fi terminat la timp dacă ar fi venit camionul la opt.", highlight: "had arrived" }
  ],
  exercises: [
    { type: "fill", prompt: "If it ___ (rain), we will move the party inside.", answer: ["rains"], hint: "tipul 1", why: "În condiționalul 1, după if se pune prezentul." },
    { type: "fill", prompt: "If I ___ (have) more time, I would take that course.", answer: ["had"], hint: "tipul 2", why: "Condiționalul 2 cere trecutul simplu după if." },
    { type: "fill", prompt: "If we ___ (book) earlier, we would have paid less.", answer: ["had booked", "'d booked"], hint: "tipul 3", why: "Condiționalul 3 cere had plus participiu." },
    { type: "fill", prompt: "If you heat water to 100 degrees, it ___ (boil).", answer: ["boils"], hint: "tipul 0", why: "Adevăr general, ambele verbe la prezent." },
    { type: "fill", prompt: "She ___ (come) if you had asked her.", answer: ["would have come", "'d have come"], hint: "tipul 3", why: "Consecința în condiționalul 3 este would have plus participiu." },
    { type: "fill", prompt: "If I ___ (be) you, I would refuse politely.", answer: ["were", "was"], hint: "sfat", why: "În sfat se folosește were la toate persoanele." },
    { type: "fill", prompt: "If I had accepted that job, I ___ (live) in Berlin now.", answer: ["would be living", "would live", "'d be living", "'d live"], hint: "mixt", why: "Condiție în trecut cu efect în prezent: would plus infinitiv." },
    { type: "fill", prompt: "Unless they ___ (pay) the deposit, we cannot hold the date.", answer: ["pay"], hint: "unless", why: "Unless înseamnă if not, iar verbul rămâne la afirmativ." },
    { type: "choose", prompt: "If the client ___ tomorrow, tell him I am out.", options: ["will call", "calls", "would call"], answer: 1, why: "După if se folosește prezentul." },
    { type: "choose", prompt: "If I ___ enough money, I would buy a van.", options: ["would have", "had", "have"], answer: 1, why: "Condiționalul 2 cere trecutul simplu după if." },
    { type: "choose", prompt: "We ___ the flight if we had left earlier.", options: ["wouldn't miss", "wouldn't have missed", "didn't miss"], answer: 1, why: "Condiționalul 3 are would have plus participiu în consecință." },
    { type: "choose", prompt: "If I ___ known, I would have told you.", options: ["would have", "had", "have"], answer: 1, why: "După if în condiționalul 3 se pune had plus participiu." },
    { type: "choose", prompt: "Take an umbrella ___ it rains.", options: ["in case", "if not", "unless"], answer: 0, why: "In case exprimă precauția, nu condiția directă." },
    { type: "choose", prompt: "___ you sign today, we cannot start on Monday.", options: ["Unless", "If", "As long as"], answer: 0, why: "Unless înseamnă dacă nu." },
    { type: "transform", prompt: "I don't have time, so I can't help. (condiționalul 2)", answer: ["If I had time, I would help.", "If I had time, I'd help."], why: "Situație ireală în prezent, deci tipul 2." },
    { type: "transform", prompt: "We didn't book early, so we paid more. (condiționalul 3)", answer: ["If we had booked early, we would have paid less.", "If we had booked earlier, we would have paid less."], why: "Regret despre trecut, deci tipul 3." },
    { type: "transform", prompt: "If you don't confirm, we will cancel. (folosește unless)", answer: ["Unless you confirm, we will cancel.", "Unless you confirm, we'll cancel."], why: "Unless înlocuiește if not." },
    { type: "transform", prompt: "I didn't learn English as a child, so I am not fluent now. (condițional mixt)", answer: ["If I had learned English as a child, I would be fluent now.", "If I had learnt English as a child, I would be fluent now."], why: "Condiție în trecut cu efect în prezent." },
    { type: "translate", prompt: "Dacă plouă, mutăm evenimentul înăuntru.", answer: ["If it rains, we will move the event inside.", "If it rains, we'll move the event inside.", "If it rains, we will move the event indoors."], why: "Tipul 1: prezent după if, will în consecință." },
    { type: "translate", prompt: "În locul tău, aș cere o ofertă scrisă.", answer: ["If I were you, I would ask for a written offer.", "If I were you, I'd ask for a written offer."], why: "Sfat cu If I were you." },
    { type: "translate", prompt: "Dacă am fi știut, am fi plecat mai devreme.", answer: ["If we had known, we would have left earlier.", "If we'd known, we would have left earlier.", "If we had known, we'd have left earlier."], why: "Tipul 3, pentru o situație imposibil de schimbat." },
    { type: "translate", prompt: "Dacă aș avea mai mulți oameni, aș accepta proiectul.", answer: ["If I had more people, I would take the project.", "If I had more staff, I would take the project.", "If I had more people, I'd take the project."], why: "Tipul 2, situație ireală în prezent." },
    { type: "translate", prompt: "Dacă nu confirmă până vineri, dăm data altcuiva.", answer: ["Unless they confirm by Friday, we will give the date to someone else.", "If they don't confirm by Friday, we will give the date to someone else."], why: "Unless sau if not, cu prezentul în condiție." },
    { type: "translate", prompt: "Dacă aș fi acceptat jobul, aș fi acum la Londra.", answer: ["If I had accepted the job, I would be in London now.", "If I'd accepted the job, I would be in London now."], why: "Condițional mixt: trecut în condiție, prezent în consecință." }
  ],
  finalTest: [
    { type: "fill", prompt: "If you ___ (tell) me earlier, I would have come.", answer: ["had told", "'d told"], why: "Condiționalul 3 cere had plus participiu." },
    { type: "fill", prompt: "If the price ___ (go) up, we will look for another supplier.", answer: ["goes"], why: "Tipul 1: prezent după if." },
    { type: "fill", prompt: "If I ___ (not / be) so tired, I would join you.", answer: ["weren't", "wasn't", "were not", "was not"], why: "Tipul 2, cu were la toate persoanele în stil formal." },
    { type: "choose", prompt: "If they ___ the deposit, we will hold the date.", options: ["will pay", "pay", "would pay"], answer: 1, why: "După if se folosește prezentul." },
    { type: "choose", prompt: "I ___ you if I had your number.", options: ["will call", "would call", "would have called"], answer: 1, why: "Tipul 2: would plus infinitiv." },
    { type: "choose", prompt: "If she had left earlier, she ___ the train.", options: ["would catch", "would have caught", "catches"], answer: 1, why: "Tipul 3: would have plus participiu." },
    { type: "choose", prompt: "___ we get the approval, we can start on Monday.", options: ["Unless", "As long as", "In case"], answer: 1, why: "As long as exprimă condiția necesară." },
    { type: "choose", prompt: "If I hadn't moved to Bucharest, I ___ this job now.", options: ["wouldn't have", "wouldn't have had", "don't have"], answer: 0, why: "Condițional mixt: efect în prezent." },
    { type: "transform", prompt: "I am not rich, so I don't travel much. (condiționalul 2)", answer: ["If I were rich, I would travel more.", "If I was rich, I would travel more.", "If I were rich, I'd travel more."], why: "Situație ireală în prezent." },
    { type: "transform", prompt: "She didn't study, so she failed. (condiționalul 3)", answer: ["If she had studied, she would have passed.", "If she'd studied, she would have passed."], why: "Regret despre trecut." },
    { type: "transform", prompt: "If you do not hurry, you will be late. (folosește unless)", answer: ["Unless you hurry, you will be late.", "Unless you hurry, you'll be late."], why: "Unless înseamnă if not." },
    { type: "translate", prompt: "Dacă rezervi din timp, primești reducere.", answer: ["If you book early, you get a discount.", "If you book in advance, you get a discount."], why: "Tipul 0: adevăr general, ambele verbe la prezent." },
    { type: "translate", prompt: "Ce ai face dacă ar anula trupa?", answer: ["What would you do if the band cancelled?", "What would you do if the band canceled?"], why: "Tipul 2: would în principală, trecut după if." },
    { type: "translate", prompt: "Dacă nu ne-ar fi recomandat, n-am avea clientul ăsta.", answer: ["If they hadn't recommended us, we wouldn't have this client.", "If she hadn't recommended us, we wouldn't have this client.", "If he hadn't recommended us, we wouldn't have this client."], why: "Condițional mixt: trecut în condiție, prezent în consecință." },
    { type: "translate", prompt: "Ia o haină în caz că se face frig.", answer: ["Take a coat in case it gets cold.", "Bring a coat in case it gets cold."], why: "In case exprimă precauția." }
  ]
});

window.E360DATA.grammar.push({
  id: "passive-voice",
  group: "structuri",
  level: "B2",
  title: "Diateza pasivă",
  summary: "Mută accentul de pe cine face acțiunea pe ce se întâmplă. Se formează cu to be la timpul potrivit plus participiul.",
  also: "Se folosește foarte des în emailuri, rapoarte și anunțuri, exact acolo unde româna preferă se face, s-a trimis, se va anunța.",
  form: {
    affirmative: "S + be (la timpul dorit) + V3 (+ by cine)",
    affirmativeExample: "The invoice was sent yesterday. The room is being cleaned.",
    negative: "S + be + not + V3",
    negativeExample: "The order hasn't been confirmed.",
    question: "Be + S + V3?",
    questionExample: "Was the contract signed?",
    short: "It is said that... / He is said to...",
    shortExample: "It is said that the venue is closing. He is thought to be abroad.",
    note: "Toate timpurile: is done, is being done, was done, was being done, has been done, had been done, will be done, will have been done, can be done, must be done. Nu există formă pasivă pentru viitorul continuous și perfectul continuous."
  },
  uses: [
    { ro: "Când nu contează sau nu se știe cine face acțiunea", examples: [
      { en: "The invoices are sent at the end of the month.", ro: "Facturile se trimit la sfârșitul lunii.", highlight: "are sent" },
      { en: "My laptop was stolen from the office.", ro: "Mi-a fost furat laptopul din birou.", highlight: "was stolen" } ] },
    { ro: "În limbaj oficial, în proceduri și în anunțuri", examples: [
      { en: "Payment must be made within 30 days.", ro: "Plata trebuie făcută în 30 de zile.", highlight: "must be made" },
      { en: "Guests are kindly asked not to smoke inside.", ro: "Invitații sunt rugați să nu fumeze înăuntru.", highlight: "are kindly asked" } ] },
    { ro: "Când vrei să eviți acuzarea directă a cuiva", examples: [
      { en: "A mistake was made in the order.", ro: "S-a făcut o greșeală în comandă.", highlight: "was made" },
      { en: "The deadline was missed.", ro: "Termenul a fost depășit.", highlight: "was missed" } ] },
    { ro: "Cu it is said that și he is said to, pentru informații nesigure", examples: [
      { en: "It is said that they are moving abroad.", ro: "Se spune că se mută în străinătate.", highlight: "It is said that" },
      { en: "She is believed to be the best in the field.", ro: "Se crede că e cea mai bună din domeniu.", highlight: "is believed to be" } ] }
  ],
  signalWords: ["by", "is done", "was done", "has been done", "will be done", "must be done", "it is said that", "it is known that"],
  compareWith: {
    id: "causative",
    leftTitle: "Pasiv: subiectul primește acțiunea",
    rightTitle: "Cauzativ: cineva o face pentru tine",
    rows: [
      { left: "The car was repaired.", right: "I had the car repaired." },
      { left: "The room is being painted.", right: "We are having the room painted." },
      { left: "My hair was cut yesterday.", right: "I had my hair cut yesterday." },
      { left: "The photos were printed.", right: "We got the photos printed." },
      { left: "The contract will be reviewed.", right: "We will have the contract reviewed." }
    ]
  },
  mistakes: [
    { wrong: "The invoice was send yesterday.", right: "The invoice was sent yesterday.", why: "După be se pune participiul, sent, nu infinitivul send." },
    { wrong: "The room is cleaning now.", right: "The room is being cleaned now.", why: "Pasivul la continuous cere is being plus participiu." },
    { wrong: "It was happened last week.", right: "It happened last week.", why: "Happen nu are pasiv, pentru că nu are complement direct." },
    { wrong: "The problem has solved.", right: "The problem has been solved.", why: "Lipsește been din structura perfectului pasiv." },
    { wrong: "I was born in 1990 by my mother.", right: "I was born in 1990.", why: "By se pune doar când agentul chiar contează și nu este evident." },
    { wrong: "The offer will send tomorrow.", right: "The offer will be sent tomorrow.", why: "Viitorul pasiv este will be plus participiu." },
    { wrong: "This must do today.", right: "This must be done today.", why: "După un verb modal, pasivul este be plus participiu." }
  ],
  examples: [
    { en: "The contract was signed on Monday.", ro: "Contractul a fost semnat luni.", highlight: "was signed" },
    { en: "The invitations are being printed right now.", ro: "Invitațiile se tipăresc chiar acum.", highlight: "are being printed" },
    { en: "All the equipment has been checked.", ro: "Tot echipamentul a fost verificat.", highlight: "has been checked" },
    { en: "The venue will be decorated on Friday morning.", ro: "Locația va fi decorată vineri dimineață.", highlight: "will be decorated" },
    { en: "Payment must be made before the event.", ro: "Plata trebuie făcută înainte de eveniment.", highlight: "must be made" },
    { en: "We were told that the date was already taken.", ro: "Ni s-a spus că data era deja luată.", highlight: "were told" },
    { en: "The photos hadn't been edited when we sent them.", ro: "Pozele nu fuseseră editate când le-am trimis.", highlight: "hadn't been edited" },
    { en: "This room is cleaned twice a day.", ro: "Camera asta se curăță de două ori pe zi.", highlight: "is cleaned" },
    { en: "It is said that the new hall is bigger.", ro: "Se spune că sala nouă e mai mare.", highlight: "It is said that" },
    { en: "The order was cancelled by the client, not by us.", ro: "Comanda a fost anulată de client, nu de noi.", highlight: "was cancelled by" },
    { en: "By six the stage will have been assembled.", ro: "Până la șase scena va fi fost montată.", highlight: "will have been assembled" },
    { en: "Nothing can be done before the permit arrives.", ro: "Nu se poate face nimic până nu vine autorizația.", highlight: "can be done" }
  ],
  exercises: [
    { type: "fill", prompt: "The contract ___ (sign) yesterday.", answer: ["was signed"], hint: "trecut pasiv", why: "Pasivul la Past Simple este was plus participiu." },
    { type: "fill", prompt: "The invitations ___ (print) at the moment.", answer: ["are being printed"], hint: "prezent continuous pasiv", why: "Pasivul continuous este are being plus participiu." },
    { type: "fill", prompt: "All the chairs ___ (deliver) already.", answer: ["have been delivered"], hint: "present perfect pasiv", why: "Pasivul perfect este have been plus participiu." },
    { type: "fill", prompt: "The room ___ (clean) every morning.", answer: ["is cleaned"], hint: "prezent simplu pasiv", why: "Pasivul la Present Simple este is plus participiu." },
    { type: "fill", prompt: "The offer ___ (send) tomorrow.", answer: ["will be sent"], hint: "viitor pasiv", why: "Viitorul pasiv este will be plus participiu." },
    { type: "fill", prompt: "Payment ___ (must / make) within 30 days.", answer: ["must be made"], hint: "modal pasiv", why: "După modal se pune be plus participiu." },
    { type: "fill", prompt: "The photos ___ (not / edit) when we sent them.", answer: ["hadn't been edited", "had not been edited"], hint: "past perfect pasiv", why: "Pasivul la Past Perfect este had been plus participiu." },
    { type: "fill", prompt: "The stage ___ (assemble) when we arrived.", answer: ["was being assembled"], hint: "past continuous pasiv", why: "Pasivul continuous la trecut este was being plus participiu." },
    { type: "choose", prompt: "The problem ___ yesterday.", options: ["was solved", "has solved", "solved"], answer: 0, why: "Yesterday cere Past Simple pasiv." },
    { type: "choose", prompt: "The report ___ by the accountant right now.", options: ["is checked", "is being checked", "is checking"], answer: 1, why: "Right now cere pasivul continuous." },
    { type: "choose", prompt: "Nothing ___ before the permit arrives.", options: ["can do", "can be done", "can been done"], answer: 1, why: "După modal se pune be plus participiu." },
    { type: "choose", prompt: "It ___ that the venue is closing.", options: ["is said", "says", "is saying"], answer: 0, why: "Structura fixă este it is said that." },
    { type: "choose", prompt: "The van ___ last night.", options: ["was stolen", "was stole", "has stolen"], answer: 0, why: "Participiul lui steal este stolen." },
    { type: "choose", prompt: "By Friday everything ___ .", options: ["will have been finished", "will has finished", "will be finish"], answer: 0, why: "Future Perfect pasiv este will have been plus participiu." },
    { type: "transform", prompt: "They sent the invoice on Monday. (pasiv)", answer: ["The invoice was sent on Monday."], why: "Complementul devine subiect, verbul trece la was plus participiu." },
    { type: "transform", prompt: "Someone has taken my chair. (pasiv)", answer: ["My chair has been taken."], why: "Agentul necunoscut se omite." },
    { type: "transform", prompt: "We will announce the winner tomorrow. (pasiv)", answer: ["The winner will be announced tomorrow."], why: "Viitorul pasiv este will be plus participiu." },
    { type: "transform", prompt: "They are painting the office. (pasiv)", answer: ["The office is being painted."], why: "Pasivul continuous este is being plus participiu." },
    { type: "translate", prompt: "Facturile se trimit la sfârșitul lunii.", answer: ["The invoices are sent at the end of the month.", "Invoices are sent at the end of the month."], why: "Se plus verb din română devine pasiv în engleză." },
    { type: "translate", prompt: "Contractul a fost semnat luni.", answer: ["The contract was signed on Monday."], why: "Pasiv la Past Simple." },
    { type: "translate", prompt: "Camera se curăță acum.", answer: ["The room is being cleaned now.", "The room is being cleaned right now."], why: "Pasiv continuous." },
    { type: "translate", prompt: "Plata trebuie făcută în avans.", answer: ["Payment must be made in advance.", "The payment must be made in advance."], why: "Modal plus be plus participiu." },
    { type: "translate", prompt: "Tot echipamentul a fost verificat.", answer: ["All the equipment has been checked.", "All equipment has been checked."], why: "Pasiv la Present Perfect." },
    { type: "translate", prompt: "Se spune că sala nouă e mai mare.", answer: ["It is said that the new hall is bigger.", "It's said that the new hall is bigger."], why: "Structura it is said that pentru informații nesigure." }
  ],
  finalTest: [
    { type: "fill", prompt: "The tables ___ (set up) before the guests arrive.", answer: ["will be set up", "are set up"], why: "Pasiv la viitor sau la prezent, în funcție de context." },
    { type: "fill", prompt: "This building ___ (build) in 1930.", answer: ["was built"], why: "Pasiv la Past Simple, participiul lui build este built." },
    { type: "fill", prompt: "The results ___ (not / publish) yet.", answer: ["haven't been published", "have not been published"], why: "Pasiv la Present Perfect, negativ." },
    { type: "choose", prompt: "The email ___ by mistake.", options: ["was deleted", "deleted", "has deleting"], answer: 0, why: "Pasiv la Past Simple." },
    { type: "choose", prompt: "The road ___ at the moment.", options: ["is repairing", "is being repaired", "repairs"], answer: 1, why: "Pasiv continuous." },
    { type: "choose", prompt: "This ___ today, it cannot wait.", options: ["must be done", "must do", "must been done"], answer: 0, why: "Modal plus be plus participiu." },
    { type: "choose", prompt: "He ___ to be the best photographer in town.", options: ["is considered", "considers", "is considering"], answer: 0, why: "Structura pasivă cu to be pentru opinii generale." },
    { type: "choose", prompt: "The keys ___ when we got back.", options: ["hadn't been returned", "hadn't returned", "didn't return"], answer: 0, why: "Pasiv la Past Perfect." },
    { type: "transform", prompt: "The manager approved the budget. (pasiv)", answer: ["The budget was approved by the manager.", "The budget was approved."], why: "Complementul devine subiect." },
    { type: "transform", prompt: "They are repairing the lift. (pasiv)", answer: ["The lift is being repaired."], why: "Pasiv continuous." },
    { type: "transform", prompt: "People say that he is retiring. (folosește it is said that)", answer: ["It is said that he is retiring.", "It's said that he is retiring."], why: "Structura impersonală pentru zvonuri." },
    { type: "translate", prompt: "Nu se poate face nimic azi.", answer: ["Nothing can be done today."], why: "Modal pasiv." },
    { type: "translate", prompt: "Comanda a fost anulată de client.", answer: ["The order was cancelled by the client.", "The order was canceled by the client."], why: "By se folosește când agentul contează." },
    { type: "translate", prompt: "Invitațiile vor fi trimise mâine.", answer: ["The invitations will be sent tomorrow."], why: "Viitor pasiv." },
    { type: "translate", prompt: "Ni s-a spus că data era luată.", answer: ["We were told that the date was taken.", "We were told the date was taken.", "We were told that the date was already taken."], why: "Verbul tell la pasiv, cu persoana ca subiect." }
  ]
});

window.E360DATA.grammar.push({
  id: "reported-speech",
  group: "structuri",
  level: "B2",
  title: "Vorbirea indirectă",
  summary: "Cum repovestești ce a spus, a întrebat sau a cerut cineva, cu timpurile mutate un pas în trecut.",
  also: "Regula de bază: dacă verbul introductiv este la trecut, toate timpurile din interior coboară un nivel.",
  form: {
    affirmative: "S + said (that) + propoziție cu timpul mutat un pas în trecut",
    affirmativeExample: "He said (that) he was busy. She said she had already sent it.",
    negative: "S + said (that) + subiect + didn't / wasn't ...",
    negativeExample: "They said they hadn't received the payment.",
    question: "S + asked + if/whether + subiect + verb (ordine de afirmație)",
    questionExample: "She asked if I was free. He asked what time the event started.",
    short: "Comenzi: told + cineva + to + verb",
    shortExample: "He told me to wait. She asked me not to call after nine.",
    note: "Say nu se folosește cu persoana: he said to me, dar he told me. Timpurile nu se mută dacă informația este încă valabilă sau dacă verbul introductiv este la prezent."
  },
  uses: [
    { ro: "Afirmații, cu timpurile mutate un pas în trecut", examples: [
      { en: "He said he was working on it.", ro: "A spus că lucrează la asta.", highlight: "was working" },
      { en: "She said she had sent the invoice.", ro: "A spus că trimisese factura.", highlight: "had sent" } ] },
    { ro: "Întrebări cu răspuns da sau nu, introduse cu if sau whether", examples: [
      { en: "He asked if I could come earlier.", ro: "M-a întrebat dacă pot veni mai devreme.", highlight: "if I could" },
      { en: "She asked whether the price included VAT.", ro: "A întrebat dacă prețul includea TVA.", highlight: "whether" } ] },
    { ro: "Întrebări cu cuvânt interogativ, cu ordinea de afirmație", examples: [
      { en: "They asked what time the event started.", ro: "Au întrebat la ce oră începe evenimentul.", highlight: "what time the event started" },
      { en: "He asked where I had parked.", ro: "M-a întrebat unde parcasem.", highlight: "where I had parked" } ] },
    { ro: "Comenzi și rugăminți, cu tell sau ask plus to", examples: [
      { en: "The manager told us to wait outside.", ro: "Managerul ne-a spus să așteptăm afară.", highlight: "told us to wait" },
      { en: "She asked me not to be late.", ro: "M-a rugat să nu întârzii.", highlight: "asked me not to be" } ] },
    { ro: "Alte verbe introductive, mai precise decât say: promise, admit, suggest, refuse, offer", examples: [
      { en: "He promised to send it by Friday.", ro: "A promis că îl trimite până vineri.", highlight: "promised to send" },
      { en: "She suggested moving the meeting.", ro: "A propus să mutăm ședința.", highlight: "suggested moving" } ] }
  ],
  signalWords: ["said", "told", "asked", "explained", "admitted", "suggested", "promised", "if", "whether", "that"],
  compareWith: {
    id: "past-perfect",
    leftTitle: "Vorbire directă",
    rightTitle: "Vorbire indirectă",
    rows: [
      { left: "I am busy.", right: "He said he was busy." },
      { left: "I sent it yesterday.", right: "He said he had sent it the day before." },
      { left: "I will call you.", right: "He said he would call me." },
      { left: "Are you free?", right: "He asked if I was free." },
      { left: "Don't be late.", right: "He told me not to be late." }
    ]
  },
  mistakes: [
    { wrong: "He said me that he was busy.", right: "He told me that he was busy.", why: "Say nu primește direct persoana. Se folosește tell cu persoana, say fără." },
    { wrong: "She asked me what time is it.", right: "She asked me what time it was.", why: "În vorbirea indirectă ordinea este de afirmație, nu de întrebare." },
    { wrong: "He asked if did I want coffee.", right: "He asked if I wanted coffee.", why: "Nu se folosește auxiliarul did în întrebarea indirectă." },
    { wrong: "She told to me to wait.", right: "She told me to wait.", why: "Tell se construiește direct cu persoana, fără to." },
    { wrong: "He said that he will come.", right: "He said that he would come.", why: "După un verb introductiv la trecut, will devine would." },
    { wrong: "She asked me that I was ready.", right: "She asked me if I was ready.", why: "Întrebarea cu răspuns da sau nu se introduce cu if sau whether, nu cu that." },
    { wrong: "He told me don't worry.", right: "He told me not to worry.", why: "Comanda negativă indirectă este not to plus verb." }
  ],
  examples: [
    { en: "He said he was still waiting for the confirmation.", ro: "A spus că încă așteaptă confirmarea.", highlight: "was still waiting" },
    { en: "She told me she had already paid the deposit.", ro: "Mi-a spus că plătise deja avansul.", highlight: "had already paid" },
    { en: "They asked if we could deliver on Saturday.", ro: "Au întrebat dacă putem livra sâmbătă.", highlight: "if we could" },
    { en: "The client asked what the final price would be.", ro: "Clientul a întrebat care va fi prețul final.", highlight: "what the final price would be" },
    { en: "He told us to be there by eight.", ro: "Ne-a spus să fim acolo până la opt.", highlight: "told us to be" },
    { en: "She asked me not to mention the discount.", ro: "M-a rugat să nu pomenesc de reducere.", highlight: "asked me not to mention" },
    { en: "He admitted that he had forgotten the deadline.", ro: "A recunoscut că uitase termenul.", highlight: "admitted" },
    { en: "She suggested changing the supplier.", ro: "A propus să schimbăm furnizorul.", highlight: "suggested changing" },
    { en: "They said they would send the contract the next day.", ro: "Au spus că vor trimite contractul a doua zi.", highlight: "would send" },
    { en: "He explained that the venue was fully booked.", ro: "A explicat că locația era complet rezervată.", highlight: "explained that" },
    { en: "She asked where I had left the keys.", ro: "M-a întrebat unde lăsasem cheile.", highlight: "where I had left" },
    { en: "He promised to call me back within an hour.", ro: "A promis că mă sună înapoi într-o oră.", highlight: "promised to call" }
  ],
  exercises: [
    { type: "transform", prompt: "\"I am busy.\" He said... (vorbire indirectă)", answer: ["He said he was busy.", "He said that he was busy."], why: "Prezentul devine trecut după un verb introductiv la trecut." },
    { type: "transform", prompt: "\"I sent the file yesterday.\" She said... (vorbire indirectă)", answer: ["She said she had sent the file the day before.", "She said that she had sent the file the day before.", "She said she had sent the file the previous day."], why: "Past Simple devine Past Perfect, iar yesterday devine the day before." },
    { type: "transform", prompt: "\"I will call you.\" He said... (vorbire indirectă)", answer: ["He said he would call me.", "He said that he would call me."], why: "Will devine would." },
    { type: "transform", prompt: "\"Are you free on Friday?\" She asked... (vorbire indirectă)", answer: ["She asked if I was free on Friday.", "She asked whether I was free on Friday."], why: "Întrebarea da sau nu se introduce cu if sau whether." },
    { type: "transform", prompt: "\"What time does the event start?\" They asked... (vorbire indirectă)", answer: ["They asked what time the event started.", "They asked me what time the event started."], why: "Ordinea devine de afirmație, iar prezentul devine trecut." },
    { type: "transform", prompt: "\"Wait outside.\" He told me... (vorbire indirectă)", answer: ["He told me to wait outside."], why: "Comanda indirectă este tell plus persoană plus to plus verb." },
    { type: "transform", prompt: "\"Don't call after nine.\" She asked me... (vorbire indirectă)", answer: ["She asked me not to call after nine."], why: "Comanda negativă indirectă este not to plus verb." },
    { type: "transform", prompt: "\"I have already spoken to him.\" He said... (vorbire indirectă)", answer: ["He said he had already spoken to him.", "He said that he had already spoken to him."], why: "Present Perfect devine Past Perfect." },
    { type: "fill", prompt: "He ___ me that the price had gone up.", answer: ["told"], hint: "cu persoana", why: "Cu persoana se folosește tell, nu say." },
    { type: "fill", prompt: "She ___ that she would be late.", answer: ["said"], hint: "fără persoană", why: "Say se folosește fără persoană după el." },
    { type: "fill", prompt: "They asked ___ we had a free date in June.", answer: ["if", "whether"], hint: "întrebare da sau nu", why: "Întrebarea da sau nu se introduce cu if sau whether." },
    { type: "fill", prompt: "He asked me where I ___ (park) the van.", answer: ["had parked"], hint: "un pas în trecut", why: "Past Simple din vorbirea directă devine Past Perfect." },
    { type: "choose", prompt: "She said she ___ tired.", options: ["is", "was", "will be"], answer: 1, why: "Prezentul coboară la trecut după un verb introductiv la trecut." },
    { type: "choose", prompt: "He asked me ___ I wanted coffee.", options: ["that", "if", "what"], answer: 1, why: "Întrebarea da sau nu se introduce cu if." },
    { type: "choose", prompt: "She ___ me to close the door.", options: ["said", "told", "spoke"], answer: 1, why: "Comanda indirectă se face cu tell plus persoană." },
    { type: "choose", prompt: "They asked what time ___ .", options: ["did the show start", "the show started", "does the show start"], answer: 1, why: "Ordinea este de afirmație, fără auxiliar." },
    { type: "choose", prompt: "He ___ that he had made a mistake.", options: ["admitted", "refused", "offered"], answer: 0, why: "Admit înseamnă a recunoaște." },
    { type: "choose", prompt: "She ___ to help us with the setup.", options: ["suggested", "offered", "insisted"], answer: 1, why: "Offer to plus verb înseamnă a se oferi să facă ceva." },
    { type: "translate", prompt: "A spus că e ocupat.", answer: ["He said he was busy.", "She said she was busy.", "He said that he was busy.", "She said that she was busy."], why: "Prezentul coboară la trecut." },
    { type: "translate", prompt: "Mi-a spus că trimisese deja factura.", answer: ["He told me he had already sent the invoice.", "She told me she had already sent the invoice.", "He told me that he had already sent the invoice.", "She told me that she had already sent the invoice."], why: "Cu persoana se folosește tell, iar Past Simple devine Past Perfect." },
    { type: "translate", prompt: "M-a întrebat dacă sunt liber vineri.", answer: ["He asked if I was free on Friday.", "She asked if I was free on Friday.", "He asked whether I was free on Friday.", "She asked whether I was free on Friday."], why: "Întrebarea da sau nu se introduce cu if." },
    { type: "translate", prompt: "Ne-a spus să așteptăm afară.", answer: ["He told us to wait outside.", "She told us to wait outside."], why: "Comanda indirectă cu tell plus to." },
    { type: "translate", prompt: "M-a rugat să nu întârzii.", answer: ["He asked me not to be late.", "She asked me not to be late."], why: "Rugămintea negativă este ask plus persoană plus not to." },
    { type: "translate", prompt: "Au întrebat unde este locația.", answer: ["They asked where the venue was.", "They asked me where the venue was."], why: "Ordinea devine de afirmație, iar prezentul coboară la trecut." }
  ],
  finalTest: [
    { type: "transform", prompt: "\"We are moving offices.\" They said... (vorbire indirectă)", answer: ["They said they were moving offices.", "They said that they were moving offices."], why: "Present Continuous devine Past Continuous." },
    { type: "transform", prompt: "\"Can you help me?\" He asked... (vorbire indirectă)", answer: ["He asked if I could help him.", "He asked whether I could help him."], why: "Can devine could, iar întrebarea da sau nu primește if." },
    { type: "transform", prompt: "\"Send me the offer.\" She told me... (vorbire indirectă)", answer: ["She told me to send her the offer."], why: "Comanda indirectă cu to plus verb." },
    { type: "fill", prompt: "He ___ us that the truck had broken down.", answer: ["told"], why: "Cu persoana se folosește tell." },
    { type: "fill", prompt: "She asked ___ the invoice had been paid.", answer: ["if", "whether"], why: "Întrebare da sau nu." },
    { type: "fill", prompt: "They said they ___ (will) confirm the next day.", answer: ["would"], why: "Will devine would în vorbirea indirectă." },
    { type: "choose", prompt: "He said he ___ finish it by Friday.", options: ["will", "would", "shall"], answer: 1, why: "Will coboară la would." },
    { type: "choose", prompt: "She asked me why I ___ .", options: ["was late", "was I late", "am late"], answer: 0, why: "Ordinea este de afirmație." },
    { type: "choose", prompt: "The client ___ to pay in advance.", options: ["refused", "said", "told"], answer: 0, why: "Refuse to plus verb înseamnă a refuza să facă ceva." },
    { type: "choose", prompt: "He ___ that we should postpone it.", options: ["suggested", "asked", "told"], answer: 0, why: "Suggest introduce o propunere." },
    { type: "choose", prompt: "She told me ___ worry.", options: ["don't", "not to", "to not"], answer: 1, why: "Comanda negativă indirectă este not to plus verb." },
    { type: "translate", prompt: "A promis că trimite contractul până vineri.", answer: ["He promised to send the contract by Friday.", "She promised to send the contract by Friday.", "He promised he would send the contract by Friday.", "She promised she would send the contract by Friday."], why: "Promise to plus verb, sau promise plus that cu would." },
    { type: "translate", prompt: "A propus să mutăm ședința.", answer: ["He suggested moving the meeting.", "She suggested moving the meeting.", "He suggested that we move the meeting.", "She suggested that we move the meeting."], why: "Suggest se construiește cu gerunziu sau cu that." },
    { type: "translate", prompt: "A recunoscut că uitase.", answer: ["He admitted that he had forgotten.", "She admitted that she had forgotten.", "He admitted he had forgotten.", "She admitted she had forgotten.", "He admitted forgetting.", "She admitted forgetting."], why: "Admit se construiește cu that sau cu gerunziu." },
    { type: "translate", prompt: "M-a întrebat cât costă.", answer: ["He asked me how much it cost.", "She asked me how much it cost.", "He asked how much it cost.", "She asked how much it cost."], why: "Ordinea devine de afirmație, iar prezentul coboară la trecut." }
  ]
});

window.E360DATA.grammar.push({
  id: "modal-verbs",
  group: "verbe",
  level: "B2",
  title: "Verbe modale",
  summary: "Obligație, interdicție, posibilitate, permisiune și deducție, la prezent și la trecut.",
  also: "Modalele nu au -s la persoana a III-a, nu au to după ele și nu se combină între ele.",
  form: {
    affirmative: "S + modal + V (infinitiv fără to)",
    affirmativeExample: "She must sign it. You should call him. It might rain.",
    negative: "S + modal + not + V",
    negativeExample: "You mustn't park here. He can't be serious.",
    question: "Modal + S + V?",
    questionExample: "Should I call him? Can you help me?",
    short: "Trecut: modal + have + V3",
    shortExample: "He must have forgotten. You should have called. She can't have known.",
    note: "Must not înseamnă interdicție. Don't have to înseamnă că nu este obligatoriu. Aceasta este cea mai importantă distincție de la B2."
  },
  uses: [
    { ro: "Obligație și necesitate: must, have to, need to", examples: [
      { en: "You must wear a badge inside the venue.", ro: "Trebuie să porți ecuson în locație.", highlight: "must wear" },
      { en: "I have to be there at seven.", ro: "Trebuie să fiu acolo la șapte.", highlight: "have to be" } ] },
    { ro: "Lipsa obligației și interdicția: don't have to față de mustn't", examples: [
      { en: "You don't have to come, it is optional.", ro: "Nu trebuie să vii, e opțional.", highlight: "don't have to" },
      { en: "You mustn't smoke in the hall.", ro: "Nu ai voie să fumezi în sală.", highlight: "mustn't smoke" } ] },
    { ro: "Posibilitate și probabilitate: may, might, could", examples: [
      { en: "The client might ask for a discount.", ro: "S-ar putea ca clientul să ceară o reducere.", highlight: "might ask" },
      { en: "It could rain during the ceremony.", ro: "S-ar putea să plouă în timpul ceremoniei.", highlight: "could rain" } ] },
    { ro: "Deducție în prezent: must be, can't be, might be", examples: [
      { en: "He must be stuck in traffic.", ro: "Sigur e blocat în trafic.", highlight: "must be" },
      { en: "That can't be the final price.", ro: "Nu se poate să ăsta fie prețul final.", highlight: "can't be" } ] },
    { ro: "Deducție și regret despre trecut: must have, can't have, should have", examples: [
      { en: "They must have left already.", ro: "Sigur au plecat deja.", highlight: "must have left" },
      { en: "You should have told me earlier.", ro: "Trebuia să-mi spui mai devreme.", highlight: "should have told" } ] },
    { ro: "Sfaturi și sugestii: should, ought to, had better", examples: [
      { en: "You should send a written confirmation.", ro: "Ar trebui să trimiți o confirmare scrisă.", highlight: "should send" },
      { en: "We had better leave now.", ro: "Mai bine plecăm acum.", highlight: "had better leave" } ] }
  ],
  signalWords: ["must", "have to", "should", "ought to", "may", "might", "could", "can't", "had better", "needn't"],
  compareWith: {
    id: "conditionals",
    leftTitle: "Obligație și interdicție",
    rightTitle: "Deducție",
    rows: [
      { left: "You must sign here. (obligație)", right: "He must be tired. (deducție: sigur e)" },
      { left: "You mustn't park here. (interdicție)", right: "That can't be true. (deducție negativă)" },
      { left: "You don't have to pay now. (nu e obligatoriu)", right: "He might be in a meeting. (posibil)" },
      { left: "I had to work late. (obligație în trecut)", right: "He must have worked late. (deducție despre trecut)" },
      { left: "You should call them. (sfat)", right: "You should have called them. (reproș)" }
    ]
  },
  mistakes: [
    { wrong: "You must to sign the contract.", right: "You must sign the contract.", why: "După un modal se pune infinitivul fără to." },
    { wrong: "I mustn't come tomorrow, it is optional.", right: "I don't have to come tomorrow, it is optional.", why: "Mustn't înseamnă interdicție. Lipsa obligației se exprimă cu don't have to." },
    { wrong: "She musts pay today.", right: "She must pay today.", why: "Modalele nu primesc -s la persoana a III-a." },
    { wrong: "I will can help you next week.", right: "I will be able to help you next week.", why: "Două modale nu stau împreună. Can devine be able to." },
    { wrong: "He must be forgot.", right: "He must have forgotten.", why: "Deducția despre trecut se face cu must have plus participiu." },
    { wrong: "You should to call him.", right: "You should call him.", why: "Should se folosește fără to." },
    { wrong: "I must go yesterday.", right: "I had to go yesterday.", why: "Must nu are formă de trecut. Se folosește had to." }
  ],
  examples: [
    { en: "You must confirm in writing before Friday.", ro: "Trebuie să confirmi în scris până vineri.", highlight: "must confirm" },
    { en: "You don't have to bring anything, everything is provided.", ro: "Nu trebuie să aduci nimic, se asigură tot.", highlight: "don't have to bring" },
    { en: "Guests mustn't enter the technical area.", ro: "Invitații nu au voie în zona tehnică.", highlight: "mustn't enter" },
    { en: "He might be running late, the traffic is terrible.", ro: "S-ar putea să întârzie, traficul e groaznic.", highlight: "might be running" },
    { en: "That can't be right, the numbers don't add up.", ro: "Nu se poate să fie corect, cifrele nu se potrivesc.", highlight: "can't be" },
    { en: "You should have checked the sound before the guests arrived.", ro: "Trebuia să verifici sunetul înainte să vină invitații.", highlight: "should have checked" },
    { en: "They must have taken the wrong exit.", ro: "Sigur au luat ieșirea greșită.", highlight: "must have taken" },
    { en: "We had better confirm the date today.", ro: "Mai bine confirmăm data azi.", highlight: "had better confirm" },
    { en: "I had to reschedule the whole afternoon.", ro: "A trebuit să reprogramez toată după-amiaza.", highlight: "had to reschedule" },
    { en: "Could you send me the floor plan, please?", ro: "Îmi poți trimite planul sălii, te rog?", highlight: "Could you send" },
    { en: "She can't have known about the change.", ro: "Nu se poate să fi știut de schimbare.", highlight: "can't have known" },
    { en: "You needn't worry about the parking, it is included.", ro: "Nu trebuie să-ți faci griji pentru parcare, e inclusă.", highlight: "needn't worry" }
  ],
  exercises: [
    { type: "fill", prompt: "You ___ (obligație) wear a badge inside.", answer: ["must", "have to"], hint: "obligație", why: "Obligația se exprimă cu must sau have to." },
    { type: "fill", prompt: "You ___ (lipsa obligației) come if you are busy.", answer: ["don't have to", "do not have to", "needn't", "need not"], hint: "nu e obligatoriu", why: "Lipsa obligației se exprimă cu don't have to sau needn't." },
    { type: "fill", prompt: "He isn't answering. He ___ (deducție) be in a meeting.", answer: ["must"], hint: "sigur", why: "Deducția aproape sigură se face cu must." },
    { type: "fill", prompt: "That ___ (deducție negativă) be the final price, it is too low.", answer: ["can't", "cannot"], hint: "imposibil", why: "Deducția negativă se face cu can't." },
    { type: "fill", prompt: "You ___ (reproș) have told me earlier.", answer: ["should"], hint: "reproș despre trecut", why: "Should have plus participiu exprimă reproșul." },
    { type: "fill", prompt: "I ___ (trecutul lui must) work until midnight yesterday.", answer: ["had to"], hint: "trecut", why: "Must nu are trecut, se folosește had to." },
    { type: "fill", prompt: "I will ___ (can, la viitor) help you next week.", answer: ["be able to"], hint: "două modale", why: "Can nu se combină cu will, se folosește be able to." },
    { type: "fill", prompt: "They ___ (deducție despre trecut) have left already, the lights are off.", answer: ["must"], hint: "sigur, în trecut", why: "Must have plus participiu pentru deducție despre trecut." },
    { type: "choose", prompt: "You ___ smoke in the hall, it is forbidden.", options: ["don't have to", "mustn't", "shouldn't have"], answer: 1, why: "Interdicția se exprimă cu mustn't." },
    { type: "choose", prompt: "You ___ pay now, you can pay after the event.", options: ["mustn't", "don't have to", "can't"], answer: 1, why: "Lipsa obligației se exprimă cu don't have to." },
    { type: "choose", prompt: "She ___ be at home, her car is outside.", options: ["must", "can't", "needn't"], answer: 0, why: "Dovada indică o deducție pozitivă, deci must." },
    { type: "choose", prompt: "It ___ rain later, take an umbrella.", options: ["must", "might", "can't"], answer: 1, why: "Posibilitatea se exprimă cu might." },
    { type: "choose", prompt: "You ___ have checked the list before we left.", options: ["should", "must", "can"], answer: 0, why: "Should have plus participiu exprimă reproșul." },
    { type: "choose", prompt: "He ___ have known, nobody told him.", options: ["must", "can't", "should"], answer: 1, why: "Can't have plus participiu exprimă imposibilitatea despre trecut." },
    { type: "transform", prompt: "It is forbidden to park here. (folosește mustn't)", answer: ["You mustn't park here.", "You must not park here."], why: "Interdicția se exprimă cu mustn't." },
    { type: "transform", prompt: "It is not necessary to come. (folosește don't have to)", answer: ["You don't have to come.", "You do not have to come."], why: "Lipsa obligației se exprimă cu don't have to." },
    { type: "transform", prompt: "I am sure he forgot. (folosește must have)", answer: ["He must have forgotten."], why: "Deducție sigură despre trecut." },
    { type: "transform", prompt: "It was a mistake not to call them. (folosește should have)", answer: ["You should have called them.", "We should have called them.", "I should have called them."], why: "Reproș despre trecut." },
    { type: "translate", prompt: "Trebuie să confirmi până vineri.", answer: ["You must confirm by Friday.", "You have to confirm by Friday."], why: "Obligație, exprimată cu must sau have to." },
    { type: "translate", prompt: "Nu trebuie să vii, e opțional.", answer: ["You don't have to come, it is optional.", "You don't have to come, it's optional.", "You needn't come, it is optional."], why: "Lipsa obligației, nu interdicție." },
    { type: "translate", prompt: "Nu ai voie să intri acolo.", answer: ["You mustn't go in there.", "You must not go in there.", "You mustn't enter there."], why: "Interdicție, deci mustn't." },
    { type: "translate", prompt: "Sigur au plecat deja.", answer: ["They must have left already.", "They must have already left."], why: "Deducție sigură despre trecut." },
    { type: "translate", prompt: "Trebuia să-mi spui mai devreme.", answer: ["You should have told me earlier.", "You should have told me sooner."], why: "Reproș despre trecut." },
    { type: "translate", prompt: "S-ar putea să ceară o reducere.", answer: ["They might ask for a discount.", "He might ask for a discount.", "She might ask for a discount.", "They may ask for a discount."], why: "Posibilitate, exprimată cu might sau may." }
  ],
  finalTest: [
    { type: "fill", prompt: "You ___ have a ticket to enter.", answer: ["must", "have to", "need to"], why: "Obligație." },
    { type: "fill", prompt: "We ___ hurry, there is plenty of time.", answer: ["don't have to", "do not have to", "needn't", "need not"], why: "Lipsa obligației." },
    { type: "fill", prompt: "He ___ have seen the email, he replied.", answer: ["must"], why: "Deducție sigură despre trecut." },
    { type: "choose", prompt: "You ___ touch the equipment, it is dangerous.", options: ["don't have to", "mustn't", "needn't"], answer: 1, why: "Interdicție." },
    { type: "choose", prompt: "I ___ finish this today, the deadline is tomorrow.", options: ["mustn't", "don't have to", "must"], answer: 2, why: "Obligație." },
    { type: "choose", prompt: "That ___ be her, she is abroad.", options: ["must", "can't", "should"], answer: 1, why: "Deducție negativă." },
    { type: "choose", prompt: "I ___ to work late yesterday.", options: ["must", "had", "should"], answer: 1, why: "Trecutul lui must este had to." },
    { type: "choose", prompt: "We ___ better leave now if we want to be on time.", options: ["should", "had", "would"], answer: 1, why: "Structura fixă este had better." },
    { type: "transform", prompt: "It was not necessary for you to bring the documents. (needn't have)", answer: ["You needn't have brought the documents.", "You need not have brought the documents."], why: "Needn't have plus participiu arată că efortul a fost inutil." },
    { type: "transform", prompt: "I am sure she didn't know. (can't have)", answer: ["She can't have known."], why: "Deducție negativă despre trecut." },
    { type: "transform", prompt: "It is a good idea to send a reminder. (should)", answer: ["You should send a reminder.", "We should send a reminder."], why: "Sfat." },
    { type: "translate", prompt: "S-ar putea să întârzie.", answer: ["He might be late.", "She might be late.", "They might be late.", "He may be late.", "She may be late.", "They may be late."], why: "Posibilitate." },
    { type: "translate", prompt: "A trebuit să anulez întâlnirea.", answer: ["I had to cancel the meeting."], why: "Obligație în trecut." },
    { type: "translate", prompt: "Nu se poate să fi știut.", answer: ["He can't have known.", "She can't have known.", "They can't have known."], why: "Deducție negativă despre trecut." },
    { type: "translate", prompt: "Ar trebui să trimiți o confirmare scrisă.", answer: ["You should send a written confirmation.", "You ought to send a written confirmation."], why: "Sfat cu should sau ought to." }
  ]
});

window.E360DATA.grammar.push({
  id: "relative-clauses",
  group: "structuri",
  level: "B2",
  title: "Propoziții relative",
  summary: "Cum lipești două informații într-o singură propoziție cu who, which, that, whose, where și when.",
  also: "Diferența dintre relativa definitorie și cea nedefinitorie se vede în virgule și schimbă complet sensul.",
  form: {
    affirmative: "substantiv + who/which/that/whose/where/when + restul informației",
    affirmativeExample: "The supplier who called us is from Cluj. The venue which we booked is downtown.",
    negative: "Relativa poate conține orice negație obișnuită",
    negativeExample: "The client who didn't pay is on the list.",
    question: "Prepoziția poate merge la final sau, formal, înainte de which/whom",
    questionExample: "The person I spoke to. / The person to whom I spoke.",
    short: "Nedefinitorie: informație în plus, între virgule",
    shortExample: "My colleague, who lives in Brasov, will drive.",
    note: "Definitorie: fără virgule, se poate folosi that, pronumele se poate omite dacă este complement. Nedefinitorie: cu virgule, nu se poate folosi that, pronumele nu se poate omite."
  },
  uses: [
    { ro: "Relativa definitorie: spune despre care anume este vorba, fără virgule", examples: [
      { en: "The supplier who called this morning wants an answer.", ro: "Furnizorul care a sunat azi-dimineață vrea un răspuns.", highlight: "who called this morning" },
      { en: "This is the contract that we signed last week.", ro: "Ăsta e contractul pe care l-am semnat săptămâna trecută.", highlight: "that we signed" } ] },
    { ro: "Relativa nedefinitorie: adaugă o informație în plus, între virgule", examples: [
      { en: "My colleague, who has been here for ten years, will take over.", ro: "Colegul meu, care e aici de zece ani, va prelua.", highlight: ", who has been here for ten years," },
      { en: "The venue, which opened last year, is very modern.", ro: "Locația, care s-a deschis anul trecut, este foarte modernă.", highlight: ", which opened last year," } ] },
    { ro: "Whose pentru posesie, where pentru loc, when pentru timp", examples: [
      { en: "That is the client whose event we ran in June.", ro: "Ăla e clientul al cărui eveniment l-am făcut în iunie.", highlight: "whose" },
      { en: "This is the hall where we held the gala.", ro: "Asta e sala unde am ținut gala.", highlight: "where" } ] },
    { ro: "Omiterea pronumelui când este complement în relativa definitorie", examples: [
      { en: "The offer I sent yesterday is still valid.", ro: "Oferta pe care am trimis-o ieri e încă valabilă.", highlight: "I sent yesterday" },
      { en: "The person you need is on holiday.", ro: "Persoana de care ai nevoie e în concediu.", highlight: "you need" } ] }
  ],
  signalWords: ["who", "whom", "which", "that", "whose", "where", "when", "why"],
  compareWith: {
    id: "reported-speech",
    leftTitle: "Definitorie: fără virgule",
    rightTitle: "Nedefinitorie: cu virgule",
    rows: [
      { left: "My brother who lives in Iasi is a chef. (am mai mulți frați)", right: "My brother, who lives in Iasi, is a chef. (am un singur frate)" },
      { left: "The staff who arrived late were fined.", right: "The staff, who arrived late, were fined." },
      { left: "Se poate folosi that.", right: "Nu se poate folosi that." },
      { left: "Pronumele complement se poate omite.", right: "Pronumele nu se poate omite." },
      { left: "The car that I bought was cheap.", right: "My car, which I bought in 2020, is cheap." }
    ]
  },
  mistakes: [
    { wrong: "The man which called you is waiting.", right: "The man who called you is waiting.", why: "Which se folosește pentru lucruri, who pentru persoane." },
    { wrong: "My boss, that lives in Cluj, is on holiday.", right: "My boss, who lives in Cluj, is on holiday.", why: "That nu se folosește în relativele nedefinitorii." },
    { wrong: "The venue where we booked it is downtown.", right: "The venue where we booked is downtown. / The venue which we booked is downtown.", why: "Where înlocuiește deja in which, deci nu se mai repetă complementul." },
    { wrong: "The person who I spoke with him was helpful.", right: "The person I spoke with was helpful.", why: "Nu se repetă pronumele complement în relativă." },
    { wrong: "This is the client which event we organised.", right: "This is the client whose event we organised.", why: "Posesia se exprimă cu whose." },
    { wrong: "The report, that I sent yesterday, is wrong.", right: "The report I sent yesterday is wrong.", why: "Fie se scot virgulele, fie se folosește which în loc de that." }
  ],
  examples: [
    { en: "The supplier who delivered the chairs was very professional.", ro: "Furnizorul care a livrat scaunele a fost foarte profesionist.", highlight: "who delivered the chairs" },
    { en: "This is the venue that we visited last month.", ro: "Asta e locația pe care am vizitat-o luna trecută.", highlight: "that we visited" },
    { en: "My colleague, who speaks Spanish, will handle that client.", ro: "Colega mea, care vorbește spaniolă, se ocupă de clientul acela.", highlight: ", who speaks Spanish," },
    { en: "The photos which you sent are too small for print.", ro: "Pozele pe care le-ai trimis sunt prea mici pentru tipar.", highlight: "which you sent" },
    { en: "That is the client whose wedding we organised in June.", ro: "Ăla e clientul a cărui nuntă am organizat-o în iunie.", highlight: "whose" },
    { en: "This is the hall where the gala took place.", ro: "Asta e sala unde a avut loc gala.", highlight: "where" },
    { en: "I remember the day when we signed our first contract.", ro: "Îmi amintesc ziua în care am semnat primul contract.", highlight: "when" },
    { en: "The offer I sent on Monday is still valid.", ro: "Oferta pe care am trimis-o luni e încă valabilă.", highlight: "I sent on Monday" },
    { en: "The team, which has grown a lot, needs a bigger office.", ro: "Echipa, care a crescut mult, are nevoie de un birou mai mare.", highlight: ", which has grown a lot," },
    { en: "The person you should talk to is the technical manager.", ro: "Persoana cu care ar trebui să vorbești este managerul tehnic.", highlight: "you should talk to" },
    { en: "We lost the file, which was very annoying.", ro: "Am pierdut fișierul, ceea ce a fost foarte enervant.", highlight: ", which was very annoying" },
    { en: "Everyone who booked before June gets the old price.", ro: "Toți cei care au rezervat înainte de iunie primesc prețul vechi.", highlight: "who booked before June" }
  ],
  exercises: [
    { type: "fill", prompt: "The supplier ___ called this morning wants an answer.", answer: ["who", "that"], hint: "persoană, definitorie", why: "Pentru persoane se folosește who, iar în relativa definitorie se acceptă și that." },
    { type: "fill", prompt: "The venue ___ we booked is downtown.", answer: ["which", "that"], hint: "lucru, definitorie", why: "Pentru lucruri se folosește which sau that." },
    { type: "fill", prompt: "My boss, ___ lives in Cluj, travels a lot.", answer: ["who"], hint: "nedefinitorie", why: "În relativa nedefinitorie nu se folosește that." },
    { type: "fill", prompt: "That is the client ___ event we organised.", answer: ["whose"], hint: "posesie", why: "Posesia se exprimă cu whose." },
    { type: "fill", prompt: "This is the hall ___ the gala took place.", answer: ["where"], hint: "loc", why: "Where se folosește pentru loc." },
    { type: "fill", prompt: "I remember the day ___ we opened the office.", answer: ["when"], hint: "timp", why: "When se folosește pentru timp." },
    { type: "fill", prompt: "The report, ___ I sent yesterday, has an error.", answer: ["which"], hint: "nedefinitorie, lucru", why: "În relativa nedefinitorie se folosește which, nu that." },
    { type: "fill", prompt: "Everyone ___ booked early gets a discount.", answer: ["who", "that"], hint: "persoane", why: "Pentru persoane se folosește who." },
    { type: "choose", prompt: "The man ___ fixed the lights is outside.", options: ["which", "who", "whose"], answer: 1, why: "Who se folosește pentru persoane." },
    { type: "choose", prompt: "My laptop, ___ is three years old, is very slow.", options: ["that", "which", "who"], answer: 1, why: "That nu se folosește în relativa nedefinitorie." },
    { type: "choose", prompt: "The photos ___ you sent are too small.", options: ["who", "whose", "which"], answer: 2, why: "Pentru lucruri se folosește which." },
    { type: "choose", prompt: "She is the colleague ___ car we used.", options: ["which", "whose", "who"], answer: 1, why: "Posesia se exprimă cu whose." },
    { type: "choose", prompt: "The restaurant ___ we had lunch was excellent.", options: ["which", "where", "that"], answer: 1, why: "Where se folosește pentru loc." },
    { type: "choose", prompt: "The train was late, ___ made us miss the meeting.", options: ["that", "which", "what"], answer: 1, why: "Which se referă la toată propoziția anterioară." },
    { type: "transform", prompt: "The offer is valid. I sent it on Monday. (o singură propoziție, fără pronume relativ)", answer: ["The offer I sent on Monday is valid.", "The offer I sent on Monday is still valid."], why: "Pronumele complement se poate omite în relativa definitorie." },
    { type: "transform", prompt: "My colleague speaks Spanish. She will handle that client. (relativă nedefinitorie)", answer: ["My colleague, who speaks Spanish, will handle that client."], why: "Informația suplimentară se pune între virgule cu who." },
    { type: "transform", prompt: "This is the venue. We visited it last month. (relativă definitorie)", answer: ["This is the venue that we visited last month.", "This is the venue which we visited last month.", "This is the venue we visited last month."], why: "Relativă definitorie cu that, which sau fără pronume." },
    { type: "transform", prompt: "That is the client. We organised his wedding. (folosește whose)", answer: ["That is the client whose wedding we organised."], why: "Posesia se exprimă cu whose." },
    { type: "translate", prompt: "Furnizorul care a livrat scaunele a fost bun.", answer: ["The supplier who delivered the chairs was good.", "The supplier that delivered the chairs was good."], why: "Who pentru persoane, în relativă definitorie." },
    { type: "translate", prompt: "Asta e sala unde am ținut gala.", answer: ["This is the hall where we held the gala.", "This is the hall where we had the gala."], why: "Where pentru loc." },
    { type: "translate", prompt: "Colega mea, care vorbește franceză, va merge acolo.", answer: ["My colleague, who speaks French, will go there."], why: "Relativă nedefinitorie, între virgule, cu who." },
    { type: "translate", prompt: "Oferta pe care am trimis-o e încă valabilă.", answer: ["The offer I sent is still valid.", "The offer that I sent is still valid.", "The offer which I sent is still valid."], why: "Pronumele complement se poate omite." },
    { type: "translate", prompt: "Ăla e clientul a cărui nuntă am organizat-o.", answer: ["That is the client whose wedding we organised.", "That's the client whose wedding we organised.", "That is the client whose wedding we organized."], why: "Posesia se exprimă cu whose." },
    { type: "translate", prompt: "Am pierdut fișierul, ceea ce a fost enervant.", answer: ["We lost the file, which was annoying.", "I lost the file, which was annoying."], why: "Which se referă la toată propoziția anterioară." }
  ],
  finalTest: [
    { type: "fill", prompt: "The woman ___ answered the phone was very helpful.", answer: ["who", "that"], why: "Who pentru persoane." },
    { type: "fill", prompt: "The office, ___ we moved into last year, is too small.", answer: ["which"], why: "Relativă nedefinitorie, deci which." },
    { type: "fill", prompt: "This is the supplier ___ prices went up.", answer: ["whose"], why: "Posesie, deci whose." },
    { type: "choose", prompt: "The van ___ we rented broke down.", options: ["who", "that", "whose"], answer: 1, why: "Pentru lucruri se folosește that sau which." },
    { type: "choose", prompt: "Bucharest, ___ has two million people, is very busy.", options: ["that", "which", "where"], answer: 1, why: "Relativă nedefinitorie despre un loc ca subiect, deci which." },
    { type: "choose", prompt: "That is the room ___ we store the equipment.", options: ["which", "where", "that"], answer: 1, why: "Where pentru loc." },
    { type: "choose", prompt: "The client, ___ I met last year, called again.", options: ["that", "whom", "whose"], answer: 1, why: "Whom este forma de complement, folosită în stil formal." },
    { type: "choose", prompt: "He arrived late, ___ annoyed everyone.", options: ["what", "which", "that"], answer: 1, why: "Which se referă la propoziția anterioară." },
    { type: "transform", prompt: "The email is important. You received it yesterday. (fără pronume relativ)", answer: ["The email you received yesterday is important."], why: "Pronumele complement se poate omite." },
    { type: "transform", prompt: "My car is in the garage. It is ten years old. (nedefinitorie)", answer: ["My car, which is ten years old, is in the garage."], why: "Informație suplimentară, între virgule." },
    { type: "transform", prompt: "This is the shop. I bought the lights there. (folosește where)", answer: ["This is the shop where I bought the lights."], why: "Where înlocuiește in which." },
    { type: "translate", prompt: "Persoana cu care ar trebui să vorbești este managerul.", answer: ["The person you should talk to is the manager.", "The person you should speak to is the manager."], why: "Prepoziția stă la final, iar pronumele se omite." },
    { type: "translate", prompt: "Echipa, care a crescut mult, are nevoie de spațiu.", answer: ["The team, which has grown a lot, needs more space.", "The team, which has grown a lot, needs space."], why: "Relativă nedefinitorie cu which." },
    { type: "translate", prompt: "Toți cei care au rezervat primesc prețul vechi.", answer: ["Everyone who booked gets the old price.", "All those who booked get the old price."], why: "Who pentru persoane." },
    { type: "translate", prompt: "Îmi amintesc ziua în care am semnat contractul.", answer: ["I remember the day when we signed the contract.", "I remember the day we signed the contract."], why: "When pentru timp, se poate și omite." }
  ]
});

window.E360DATA.grammar.push({
  id: "used-to",
  group: "verbe",
  level: "B2",
  title: "Used to, would, be used to, get used to",
  summary: "Patru structuri care arată la fel dar înseamnă lucruri diferite: obiceiuri din trecut față de obișnuință cu ceva.",
  also: "Cheia: used to plus infinitiv este trecut. Be used to plus gerunziu înseamnă a fi obișnuit cu ceva.",
  form: {
    affirmative: "used to + V / would + V / be used to + V-ing / get used to + V-ing",
    affirmativeExample: "I used to smoke. We would meet every Friday. I am used to working late. I got used to the noise.",
    negative: "didn't use to + V / am not used to + V-ing",
    negativeExample: "I didn't use to like coffee. She isn't used to driving here.",
    question: "Did + S + use to + V? / Are you used to + V-ing?",
    questionExample: "Did you use to work in sales? Are you used to getting up early?",
    short: "be used to / get used to primesc substantiv sau gerunziu",
    shortExample: "I am used to the noise. I am used to working with them.",
    note: "În întrebare și în negativ se scrie use to, fără d: didn't use to. Would nu se folosește pentru stări, ci doar pentru acțiuni repetate."
  },
  uses: [
    { ro: "Used to: obicei sau stare din trecut care nu mai este valabilă", examples: [
      { en: "I used to work in a restaurant.", ro: "Lucram într-un restaurant, pe vremuri.", highlight: "used to work" },
      { en: "There used to be a cinema on this corner.", ro: "Era un cinema la colțul ăsta, cândva.", highlight: "used to be" } ] },
    { ro: "Would: acțiuni repetate din trecut, în povestire, dar nu pentru stări", examples: [
      { en: "Every summer we would drive to the seaside.", ro: "În fiecare vară mergeam cu mașina la mare.", highlight: "would drive" },
      { en: "He would always arrive ten minutes early.", ro: "Venea mereu cu zece minute mai devreme.", highlight: "would always arrive" } ] },
    { ro: "Be used to: a fi deja obișnuit cu ceva, la orice timp", examples: [
      { en: "I am used to working under pressure.", ro: "Sunt obișnuit să lucrez sub presiune.", highlight: "am used to working" },
      { en: "She wasn't used to the cold.", ro: "Nu era obișnuită cu frigul.", highlight: "wasn't used to" } ] },
    { ro: "Get used to: procesul de a te obișnui cu ceva", examples: [
      { en: "It took me a month to get used to the new system.", ro: "Mi-a luat o lună să mă obișnuiesc cu sistemul nou.", highlight: "get used to" },
      { en: "You will get used to the noise.", ro: "O să te obișnuiești cu zgomotul.", highlight: "will get used to" } ] }
  ],
  signalWords: ["used to", "would", "be used to", "get used to", "in those days", "back then", "every summer"],
  compareWith: {
    id: "past-simple",
    leftTitle: "used to + infinitiv: trecut",
    rightTitle: "be used to + gerunziu: obișnuință",
    rows: [
      { left: "I used to drive to work. (nu mai fac)", right: "I am used to driving to work. (mi-e obișnuință)" },
      { left: "She used to live alone.", right: "She is used to living alone." },
      { left: "We used to work late.", right: "We are used to working late." },
      { left: "Did you use to smoke?", right: "Are you used to smoking?" },
      { left: "I didn't use to like it.", right: "I am not used to it." }
    ]
  },
  mistakes: [
    { wrong: "I am used to work here.", right: "I am used to working here.", why: "După be used to se pune gerunziul, nu infinitivul." },
    { wrong: "I didn't used to smoke.", right: "I didn't use to smoke.", why: "În negativ se scrie use to, fără d, pentru că did preia trecutul." },
    { wrong: "I use to go there every week. (despre prezent)", right: "I go there every week.", why: "Used to se referă exclusiv la trecut. Pentru prezent se folosește Present Simple." },
    { wrong: "I would live in Cluj.", right: "I used to live in Cluj.", why: "Would nu se folosește pentru stări, doar pentru acțiuni repetate." },
    { wrong: "I am getting used to work with them.", right: "I am getting used to working with them.", why: "După get used to se pune gerunziul." },
    { wrong: "Did you used to work here?", right: "Did you use to work here?", why: "După did verbul revine la forma de bază." }
  ],
  examples: [
    { en: "I used to work in a hotel before I started the agency.", ro: "Lucram la un hotel înainte să pornesc agenția.", highlight: "used to work" },
    { en: "There used to be a bank on this street.", ro: "Era o bancă pe strada asta, cândva.", highlight: "used to be" },
    { en: "We didn't use to work with international clients.", ro: "Nu lucram cu clienți internaționali pe vremuri.", highlight: "didn't use to work" },
    { en: "Did you use to travel a lot for work?", ro: "Călătoreai mult cu serviciul pe vremuri?", highlight: "Did you use to travel" },
    { en: "Every Friday we would meet in the same place.", ro: "În fiecare vineri ne întâlneam în același loc.", highlight: "would meet" },
    { en: "I am used to working with tight deadlines.", ro: "Sunt obișnuit să lucrez cu termene strânse.", highlight: "am used to working" },
    { en: "She isn't used to driving on the left.", ro: "Nu e obișnuită să conducă pe stânga.", highlight: "isn't used to driving" },
    { en: "It took me a month to get used to the new software.", ro: "Mi-a luat o lună să mă obișnuiesc cu programul nou.", highlight: "get used to" },
    { en: "You will get used to the early starts.", ro: "O să te obișnuiești cu treziturile de dimineață.", highlight: "get used to" },
    { en: "He used to be much quieter in meetings.", ro: "Era mult mai tăcut în ședințe, pe vremuri.", highlight: "used to be" },
    { en: "I am not used to this kind of pressure.", ro: "Nu sunt obișnuit cu genul ăsta de presiune.", highlight: "am not used to" },
    { en: "We are getting used to the new office.", ro: "Ne obișnuim cu biroul nou.", highlight: "are getting used to" }
  ],
  exercises: [
    { type: "fill", prompt: "I ___ (used) work in a restaurant when I was a student.", answer: ["used to"], hint: "obicei din trecut", why: "Used to plus infinitiv arată un obicei din trecut." },
    { type: "fill", prompt: "I am used to ___ (work) under pressure.", answer: ["working"], hint: "gerunziu", why: "După be used to se pune gerunziul." },
    { type: "fill", prompt: "She ___ (not / use) to like coffee.", answer: ["didn't use to", "did not use to"], hint: "negativ", why: "În negativ se scrie use to, fără d." },
    { type: "fill", prompt: "It took me weeks to get used to ___ (drive) here.", answer: ["driving"], hint: "gerunziu", why: "După get used to se pune gerunziul." },
    { type: "fill", prompt: "There ___ (used) be a cinema on this corner.", answer: ["used to"], hint: "stare din trecut", why: "There used to be exprimă ce exista cândva." },
    { type: "fill", prompt: "Every summer we ___ (would) go to the mountains.", answer: ["would"], hint: "acțiune repetată", why: "Would exprimă acțiuni repetate din trecut." },
    { type: "fill", prompt: "___ (you / use) to travel a lot?", answer: ["Did you use to", "did you use to"], hint: "întrebare", why: "Întrebarea se face cu Did plus use to." },
    { type: "fill", prompt: "You will get used to ___ (get) up early.", answer: ["getting"], hint: "gerunziu", why: "După get used to se pune gerunziul." },
    { type: "choose", prompt: "I ___ live in Timisoara, but now I live in Cluj.", options: ["am used to", "used to", "would"], answer: 1, why: "Stare din trecut, deci used to." },
    { type: "choose", prompt: "I ___ working late, it doesn't bother me.", options: ["used to", "am used to", "would"], answer: 1, why: "Obișnuință actuală, deci am used to plus gerunziu." },
    { type: "choose", prompt: "She ___ to smoke ten years ago.", options: ["used", "use", "is used"], answer: 0, why: "La afirmativ se scrie used to." },
    { type: "choose", prompt: "I didn't ___ to work weekends.", options: ["used", "use", "using"], answer: 1, why: "După didn't se scrie use to." },
    { type: "choose", prompt: "He ___ live alone, it was just a habit of visiting.", options: ["would", "used to", "is used to"], answer: 1, why: "Live este stare, deci nu se folosește would." },
    { type: "choose", prompt: "We are slowly ___ to the new system.", options: ["used", "getting used", "use"], answer: 1, why: "Procesul de obișnuire se exprimă cu get used to." },
    { type: "transform", prompt: "I worked in a hotel in the past, but not now. (used to)", answer: ["I used to work in a hotel."], why: "Obicei din trecut care nu mai este valabil." },
    { type: "transform", prompt: "Working late is normal for me now. (be used to)", answer: ["I am used to working late.", "I'm used to working late."], why: "Obișnuință actuală." },
    { type: "transform", prompt: "At first the noise bothered me, now it doesn't. (get used to)", answer: ["I got used to the noise.", "I have got used to the noise.", "I got used to the noise eventually."], why: "Procesul de obișnuire." },
    { type: "transform", prompt: "I used to go running every morning. (negativ)", answer: ["I didn't use to go running every morning.", "I did not use to go running every morning."], why: "În negativ se scrie use to." },
    { type: "translate", prompt: "Lucram într-un restaurant pe vremuri.", answer: ["I used to work in a restaurant."], why: "Obicei din trecut." },
    { type: "translate", prompt: "Sunt obișnuit să lucrez sub presiune.", answer: ["I am used to working under pressure.", "I'm used to working under pressure."], why: "Be used to plus gerunziu." },
    { type: "translate", prompt: "O să te obișnuiești cu zgomotul.", answer: ["You will get used to the noise.", "You'll get used to the noise."], why: "Procesul de obișnuire, cu substantiv după to." },
    { type: "translate", prompt: "Nu beam cafea pe vremuri.", answer: ["I didn't use to drink coffee.", "I did not use to drink coffee."], why: "Negativul lui used to." },
    { type: "translate", prompt: "În fiecare vară mergeam la mare.", answer: ["Every summer we would go to the seaside.", "Every summer we used to go to the seaside."], why: "Acțiune repetată din trecut, cu would sau used to." },
    { type: "translate", prompt: "Nu e obișnuită să conducă noaptea.", answer: ["She isn't used to driving at night.", "She is not used to driving at night."], why: "Be used to plus gerunziu, la negativ." }
  ],
  finalTest: [
    { type: "fill", prompt: "He ___ (used) have long hair.", answer: ["used to"], why: "Stare din trecut." },
    { type: "fill", prompt: "I can't get used to ___ (live) in a big city.", answer: ["living"], why: "După get used to se pune gerunziul." },
    { type: "fill", prompt: "We ___ (not / use) to have so many clients.", answer: ["didn't use to", "did not use to"], why: "Negativul lui used to." },
    { type: "choose", prompt: "Are you ___ to working nights?", options: ["use", "used", "using"], answer: 1, why: "Structura este be used to." },
    { type: "choose", prompt: "There ___ be a shop here.", options: ["used to", "use to", "is used to"], answer: 0, why: "There used to be pentru ce exista cândva." },
    { type: "choose", prompt: "I ___ know him very well, but we lost contact.", options: ["would", "used to", "am used to"], answer: 1, why: "Know este stare, deci nu se folosește would." },
    { type: "choose", prompt: "Did she ___ to work here?", options: ["used", "use", "uses"], answer: 1, why: "După did se scrie use to." },
    { type: "choose", prompt: "I am not ___ to this weather.", options: ["use", "used", "using"], answer: 1, why: "Structura este be used to." },
    { type: "transform", prompt: "I lived in London, but I don't now. (used to)", answer: ["I used to live in London."], why: "Stare din trecut care nu mai este valabilă." },
    { type: "transform", prompt: "Driving on the left is normal for her now. (be used to)", answer: ["She is used to driving on the left.", "She's used to driving on the left."], why: "Obișnuință actuală." },
    { type: "transform", prompt: "Every winter we went skiing. (would)", answer: ["Every winter we would go skiing."], why: "Acțiune repetată din trecut." },
    { type: "translate", prompt: "Mi-a luat o lună să mă obișnuiesc.", answer: ["It took me a month to get used to it.", "It took me a month to get used to it all."], why: "Procesul de obișnuire." },
    { type: "translate", prompt: "Fumam, dar m-am lăsat.", answer: ["I used to smoke, but I quit.", "I used to smoke, but I gave up.", "I used to smoke, but I stopped."], why: "Obicei din trecut care nu mai este valabil." },
    { type: "translate", prompt: "Nu sunt obișnuit cu presiunea asta.", answer: ["I am not used to this pressure.", "I'm not used to this pressure."], why: "Be used to plus substantiv." },
    { type: "translate", prompt: "Venea mereu mai devreme.", answer: ["He would always arrive early.", "She would always arrive early.", "He always used to arrive early.", "She always used to arrive early."], why: "Acțiune repetată din trecut." }
  ]
});

window.E360DATA.grammar.push({
  id: "wish-if-only",
  group: "conditional",
  level: "B2",
  title: "Wish, if only, I would rather",
  summary: "Cum exprimi regretul, dorința neîmplinită și preferința: trei tipare cu timpuri deplasate în trecut.",
  also: "Regula: după wish timpul coboară cu un pas, exact ca la condiționale.",
  form: {
    affirmative: "wish + past simple (prezent) / wish + past perfect (trecut) / wish + would (iritare)",
    affirmativeExample: "I wish I had more time. I wish I had called him. I wish it would stop raining.",
    negative: "wish + subiect + didn't / hadn't",
    negativeExample: "I wish I hadn't said that.",
    question: "Would you rather + infinitiv fără to?",
    questionExample: "Would you rather start at eight or at nine?",
    short: "I would rather + infinitiv / I would rather you + past simple",
    shortExample: "I'd rather stay home. I'd rather you didn't smoke here.",
    note: "If only este mai puternic decât wish, dar folosește exact aceleași timpuri. Would rather se scurtează 'd rather și cere infinitiv fără to."
  },
  uses: [
    { ro: "Dorință despre prezent, imposibil de îndeplinit acum: wish plus trecut simplu", examples: [
      { en: "I wish I had more free time.", ro: "Aș vrea să am mai mult timp liber.", highlight: "wish I had" },
      { en: "She wishes she spoke better English.", ro: "Și-ar dori să vorbească mai bine engleză.", highlight: "wishes she spoke" } ] },
    { ro: "Regret despre trecut: wish plus past perfect", examples: [
      { en: "I wish I had booked that venue.", ro: "Aș fi vrut să fi rezervat locația aceea.", highlight: "wish I had booked" },
      { en: "He wishes he hadn't sent that email.", ro: "Ar vrea să nu fi trimis mailul acela.", highlight: "hadn't sent" } ] },
    { ro: "Iritare față de comportamentul altcuiva: wish plus would", examples: [
      { en: "I wish they would answer their emails.", ro: "Aș vrea odată să răspundă la mailuri.", highlight: "would answer" },
      { en: "I wish it would stop raining.", ro: "Aș vrea să se oprească ploaia odată.", highlight: "would stop" } ] },
    { ro: "If only, pentru un regret mai puternic", examples: [
      { en: "If only we had confirmed earlier.", ro: "Dacă am fi confirmat mai devreme.", highlight: "If only" },
      { en: "If only I knew what he wanted.", ro: "Dacă aș ști ce vrea.", highlight: "If only" } ] },
    { ro: "Preferință: would rather și would prefer", examples: [
      { en: "I would rather send it by email.", ro: "Aș prefera să îl trimit pe mail.", highlight: "would rather send" },
      { en: "I would rather you didn't tell them yet.", ro: "Aș prefera să nu le spui încă.", highlight: "would rather you didn't" } ] }
  ],
  signalWords: ["wish", "if only", "would rather", "would prefer", "I'd rather", "it is time"],
  compareWith: {
    id: "conditionals",
    leftTitle: "Wish: regret sau dorință",
    rightTitle: "Condițional: condiție și efect",
    rows: [
      { left: "I wish I had a car.", right: "If I had a car, I would drive." },
      { left: "I wish I had studied.", right: "If I had studied, I would have passed." },
      { left: "I wish he would call.", right: "If he called, I would explain." },
      { left: "If only we had more time.", right: "If we had more time, we would finish." },
      { left: "I'd rather stay.", right: "If I stayed, I would be bored." }
    ]
  },
  mistakes: [
    { wrong: "I wish I have more time.", right: "I wish I had more time.", why: "După wish, prezentul coboară la trecut simplu." },
    { wrong: "I wish I would have called him.", right: "I wish I had called him.", why: "Regretul despre trecut se exprimă cu wish plus past perfect." },
    { wrong: "I wish you will come.", right: "I wish you would come.", why: "După wish nu se folosește will, ci would." },
    { wrong: "I would rather to stay.", right: "I would rather stay.", why: "După would rather se pune infinitivul fără to." },
    { wrong: "I would rather you don't smoke.", right: "I would rather you didn't smoke.", why: "Când urmează altă persoană, verbul se pune la trecut simplu." },
    { wrong: "If only I would have known.", right: "If only I had known.", why: "If only urmează aceleași reguli ca wish." },
    { wrong: "I wish I was there yesterday.", right: "I wish I had been there yesterday.", why: "Regretul despre un moment din trecut cere past perfect." }
  ],
  examples: [
    { en: "I wish I had more time for English.", ro: "Aș vrea să am mai mult timp pentru engleză.", highlight: "wish I had" },
    { en: "She wishes she could work from home.", ro: "Și-ar dori să poată lucra de acasă.", highlight: "wishes she could" },
    { en: "I wish I hadn't accepted that project.", ro: "Aș fi vrut să nu fi acceptat proiectul acela.", highlight: "hadn't accepted" },
    { en: "I wish they would confirm the date.", ro: "Aș vrea odată să confirme data.", highlight: "would confirm" },
    { en: "If only we had booked the venue earlier.", ro: "Dacă am fi rezervat locația mai devreme.", highlight: "If only" },
    { en: "If only I spoke better English in meetings.", ro: "Dacă aș vorbi mai bine engleză în ședințe.", highlight: "If only" },
    { en: "I would rather meet on Tuesday.", ro: "Aș prefera să ne vedem marți.", highlight: "would rather meet" },
    { en: "I would rather you didn't mention the price.", ro: "Aș prefera să nu pomenești de preț.", highlight: "would rather you didn't" },
    { en: "Would you rather drive or take the train?", ro: "Ai prefera să conduci sau să iei trenul?", highlight: "Would you rather" },
    { en: "He wishes he had studied engineering.", ro: "Ar fi vrut să fi studiat inginerie.", highlight: "had studied" },
    { en: "I wish it would stop raining before the ceremony.", ro: "Aș vrea să se oprească ploaia înainte de ceremonie.", highlight: "would stop" },
    { en: "It is time we changed suppliers.", ro: "E timpul să schimbăm furnizorii.", highlight: "It is time we changed" }
  ],
  exercises: [
    { type: "fill", prompt: "I wish I ___ (have) more time.", answer: ["had"], hint: "dorință despre prezent", why: "După wish, prezentul coboară la trecut simplu." },
    { type: "fill", prompt: "I wish I ___ (call) him yesterday.", answer: ["had called", "'d called"], hint: "regret despre trecut", why: "Regretul despre trecut se exprimă cu past perfect." },
    { type: "fill", prompt: "I wish they ___ (answer) their emails.", answer: ["would answer"], hint: "iritare", why: "Iritarea față de comportamentul altcuiva se exprimă cu would." },
    { type: "fill", prompt: "If only I ___ (know) what he wants.", answer: ["knew"], hint: "prezent", why: "If only urmează aceleași reguli ca wish." },
    { type: "fill", prompt: "I would rather ___ (send) it by email.", answer: ["send"], hint: "infinitiv fără to", why: "După would rather se pune infinitivul fără to." },
    { type: "fill", prompt: "I would rather you ___ (not / tell) them yet.", answer: ["didn't tell", "did not tell"], hint: "altă persoană", why: "Când urmează altă persoană, verbul se pune la trecut simplu." },
    { type: "fill", prompt: "She wishes she ___ (can) work from home.", answer: ["could"], hint: "modal", why: "Can devine could după wish." },
    { type: "fill", prompt: "It is time we ___ (change) suppliers.", answer: ["changed"], hint: "it is time", why: "După it is time se folosește trecutul simplu." },
    { type: "choose", prompt: "I wish I ___ taller.", options: ["am", "were", "will be"], answer: 1, why: "După wish, to be devine were la toate persoanele." },
    { type: "choose", prompt: "I wish you ___ me earlier.", options: ["told", "had told", "would tell"], answer: 1, why: "Regret despre trecut, deci past perfect." },
    { type: "choose", prompt: "I wish he ___ so loudly.", options: ["doesn't talk", "wouldn't talk", "didn't talked"], answer: 1, why: "Iritare față de comportamentul cuiva, deci would." },
    { type: "choose", prompt: "I would rather ___ at home tonight.", options: ["to stay", "stay", "staying"], answer: 1, why: "Infinitiv fără to după would rather." },
    { type: "choose", prompt: "If only we ___ the date before they did.", options: ["booked", "had booked", "would book"], answer: 1, why: "Regret despre trecut." },
    { type: "choose", prompt: "I'd rather you ___ that to the client.", options: ["don't say", "didn't say", "not say"], answer: 1, why: "Trecut simplu când urmează altă persoană." },
    { type: "transform", prompt: "I don't have a bigger office. (folosește wish)", answer: ["I wish I had a bigger office."], why: "Dorință despre prezent, cu trecut simplu." },
    { type: "transform", prompt: "I sent the email and I regret it. (folosește wish)", answer: ["I wish I hadn't sent the email.", "I wish I had not sent the email."], why: "Regret despre trecut, cu past perfect." },
    { type: "transform", prompt: "They never answer the phone and it annoys me. (folosește wish)", answer: ["I wish they would answer the phone."], why: "Iritare, deci wish plus would." },
    { type: "transform", prompt: "I prefer to meet on Tuesday. (folosește would rather)", answer: ["I would rather meet on Tuesday.", "I'd rather meet on Tuesday."], why: "Preferință, cu infinitiv fără to." },
    { type: "translate", prompt: "Aș vrea să am mai mult timp.", answer: ["I wish I had more time."], why: "Dorință despre prezent." },
    { type: "translate", prompt: "Aș fi vrut să nu fi acceptat.", answer: ["I wish I hadn't accepted.", "I wish I had not accepted."], why: "Regret despre trecut." },
    { type: "translate", prompt: "Aș prefera să ne vedem marți.", answer: ["I would rather meet on Tuesday.", "I'd rather meet on Tuesday.", "I would prefer to meet on Tuesday."], why: "Preferință cu would rather sau would prefer to." },
    { type: "translate", prompt: "Dacă aș ști ce vrea.", answer: ["If only I knew what he wants.", "If only I knew what she wants.", "If only I knew what they want."], why: "If only plus trecut simplu pentru prezent." },
    { type: "translate", prompt: "Aș prefera să nu spui nimic.", answer: ["I would rather you didn't say anything.", "I'd rather you didn't say anything."], why: "Would rather plus altă persoană plus trecut simplu." },
    { type: "translate", prompt: "Aș vrea odată să confirme.", answer: ["I wish they would confirm.", "I wish he would confirm.", "I wish she would confirm."], why: "Iritare, deci wish plus would." }
  ],
  finalTest: [
    { type: "fill", prompt: "I wish I ___ (speak) better English.", answer: ["spoke"], why: "Dorință despre prezent." },
    { type: "fill", prompt: "He wishes he ___ (not / take) that job.", answer: ["hadn't taken", "had not taken"], why: "Regret despre trecut." },
    { type: "fill", prompt: "I'd rather you ___ (come) later.", answer: ["came"], why: "Trecut simplu când urmează altă persoană." },
    { type: "choose", prompt: "I wish it ___ raining.", options: ["stops", "would stop", "stopped"], answer: 1, why: "Iritare față de o situație, deci would." },
    { type: "choose", prompt: "If only I ___ her number.", options: ["have", "had", "would have"], answer: 1, why: "Dorință despre prezent." },
    { type: "choose", prompt: "I would rather ___ the train.", options: ["to take", "take", "taking"], answer: 1, why: "Infinitiv fără to." },
    { type: "choose", prompt: "I wish I ___ at the meeting yesterday.", options: ["was", "had been", "would be"], answer: 1, why: "Regret despre un moment din trecut." },
    { type: "choose", prompt: "It is time we ___ a decision.", options: ["make", "made", "will make"], answer: 1, why: "După it is time se folosește trecutul simplu." },
    { type: "transform", prompt: "I can't drive. (folosește wish)", answer: ["I wish I could drive."], why: "Can devine could după wish." },
    { type: "transform", prompt: "We didn't book earlier and now we regret it. (folosește if only)", answer: ["If only we had booked earlier."], why: "Regret despre trecut." },
    { type: "transform", prompt: "I prefer that you don't call after nine. (would rather)", answer: ["I would rather you didn't call after nine.", "I'd rather you didn't call after nine."], why: "Would rather cu altă persoană cere trecutul simplu." },
    { type: "translate", prompt: "Aș vrea să știu răspunsul.", answer: ["I wish I knew the answer."], why: "Dorință despre prezent." },
    { type: "translate", prompt: "Ar fi vrut să fi studiat mai mult.", answer: ["He wishes he had studied more.", "She wishes she had studied more."], why: "Regret despre trecut." },
    { type: "translate", prompt: "Ai prefera să conduci sau să mergi cu trenul?", answer: ["Would you rather drive or take the train?", "Would you rather drive or go by train?"], why: "Întrebare de preferință cu would rather." },
    { type: "translate", prompt: "E timpul să plecăm.", answer: ["It is time we left.", "It's time we left.", "It is time to go.", "It's time to go."], why: "It is time plus trecut simplu, sau plus infinitiv." }
  ]
});

window.E360DATA.grammar.push({
  id: "gerund-infinitive",
  group: "verbe",
  level: "B2",
  title: "Gerunziu sau infinitiv",
  summary: "Ce verbe cer -ing, ce verbe cer to plus infinitiv și ce verbe schimbă sensul în funcție de alegere.",
  also: "Nu există logică perfectă: listele se învață. Dar cele trei grupe de mai jos acoperă aproape tot ce apare la B2.",
  form: {
    affirmative: "verb + V-ing / verb + to + V / verb + cineva + to + V",
    affirmativeExample: "I enjoy working here. I decided to leave. She asked me to wait.",
    negative: "not se pune înaintea formei verbale",
    negativeExample: "I decided not to go. He admitted not telling the truth.",
    question: "Structura rămâne aceeași în întrebare",
    questionExample: "Do you mind waiting outside?",
    short: "După prepoziții se pune întotdeauna gerunziul",
    shortExample: "I am interested in working with you. Thank you for coming.",
    note: "Gerunziu: enjoy, avoid, finish, mind, suggest, keep, practise, imagine, risk, deny, consider. Infinitiv: decide, hope, want, plan, agree, promise, refuse, offer, manage, afford, learn, seem."
  },
  uses: [
    { ro: "Verbe urmate obligatoriu de gerunziu", examples: [
      { en: "I enjoy working with this team.", ro: "Îmi place să lucrez cu echipa asta.", highlight: "enjoy working" },
      { en: "We should avoid booking that hall again.", ro: "Ar trebui să evităm să mai rezervăm sala aceea.", highlight: "avoid booking" } ] },
    { ro: "Verbe urmate obligatoriu de to plus infinitiv", examples: [
      { en: "They decided to postpone the event.", ro: "Au decis să amâne evenimentul.", highlight: "decided to postpone" },
      { en: "He managed to fix the projector.", ro: "A reușit să repare proiectorul.", highlight: "managed to fix" } ] },
    { ro: "Verbe cu obiect plus to plus infinitiv", examples: [
      { en: "She asked me to send the file.", ro: "M-a rugat să trimit fișierul.", highlight: "asked me to send" },
      { en: "The client wants us to lower the price.", ro: "Clientul vrea să scădem prețul.", highlight: "wants us to lower" } ] },
    { ro: "Verbe care schimbă sensul: remember, forget, stop, try, regret, mean", examples: [
      { en: "I stopped smoking. / I stopped to smoke.", ro: "M-am lăsat de fumat. / M-am oprit ca să fumez.", highlight: "stopped smoking" },
      { en: "Remember to call him. / I remember calling him.", ro: "Nu uita să-l suni. / Îmi amintesc că l-am sunat.", highlight: "Remember to call" } ] },
    { ro: "După prepoziții se pune întotdeauna gerunziul", examples: [
      { en: "Thank you for helping us.", ro: "Mulțumesc că ne-ai ajutat.", highlight: "for helping" },
      { en: "I am interested in working with you.", ro: "Sunt interesat să lucrez cu voi.", highlight: "in working" } ] }
  ],
  signalWords: ["enjoy", "avoid", "finish", "mind", "suggest", "decide", "hope", "manage", "refuse", "look forward to", "be interested in"],
  compareWith: {
    id: "modal-verbs",
    leftTitle: "Gerunziu: -ing",
    rightTitle: "Infinitiv: to + verb",
    rows: [
      { left: "I enjoy travelling.", right: "I want to travel." },
      { left: "She avoided answering.", right: "She refused to answer." },
      { left: "We finished setting up.", right: "We managed to set up." },
      { left: "Do you mind waiting?", right: "Would you like to wait?" },
      { left: "He suggested moving it.", right: "He offered to move it." }
    ]
  },
  mistakes: [
    { wrong: "I enjoy to work here.", right: "I enjoy working here.", why: "Enjoy cere întotdeauna gerunziul." },
    { wrong: "I decided going home.", right: "I decided to go home.", why: "Decide cere to plus infinitiv." },
    { wrong: "I look forward to hear from you.", right: "I look forward to hearing from you.", why: "În look forward to, cuvântul to este prepoziție, deci urmează gerunziul." },
    { wrong: "He suggested me to call.", right: "He suggested that I call. / He suggested calling.", why: "Suggest nu se construiește cu obiect plus infinitiv." },
    { wrong: "I am interested in to work with you.", right: "I am interested in working with you.", why: "După prepoziție se pune gerunziul." },
    { wrong: "She wants that I come.", right: "She wants me to come.", why: "Want cere obiect plus to plus infinitiv, nu o propoziție cu that." },
    { wrong: "I avoid to talk about money.", right: "I avoid talking about money.", why: "Avoid cere gerunziul." }
  ],
  examples: [
    { en: "I enjoy working with international clients.", ro: "Îmi place să lucrez cu clienți internaționali.", highlight: "enjoy working" },
    { en: "They decided to cancel the outdoor part.", ro: "Au decis să anuleze partea de afară.", highlight: "decided to cancel" },
    { en: "Do you mind waiting five minutes?", ro: "Te deranjează să aștepți cinci minute?", highlight: "mind waiting" },
    { en: "She refused to sign without a lawyer.", ro: "A refuzat să semneze fără avocat.", highlight: "refused to sign" },
    { en: "We managed to finish before the guests arrived.", ro: "Am reușit să terminăm înainte să vină invitații.", highlight: "managed to finish" },
    { en: "I look forward to hearing from you.", ro: "Aștept cu interes răspunsul dumneavoastră.", highlight: "look forward to hearing" },
    { en: "He suggested moving the meeting to Friday.", ro: "A propus să mutăm ședința vineri.", highlight: "suggested moving" },
    { en: "Remember to send the invoice today.", ro: "Nu uita să trimiți factura azi.", highlight: "Remember to send" },
    { en: "I remember sending it last week.", ro: "Îmi amintesc că l-am trimis săptămâna trecută.", highlight: "remember sending" },
    { en: "The client asked us to change the layout.", ro: "Clientul ne-a cerut să schimbăm așezarea.", highlight: "asked us to change" },
    { en: "Thank you for coming at such short notice.", ro: "Mulțumesc că ai venit așa, pe nepusă masă.", highlight: "for coming" },
    { en: "We stopped taking new bookings in July.", ro: "Am încetat să mai luăm rezervări în iulie.", highlight: "stopped taking" }
  ],
  exercises: [
    { type: "fill", prompt: "I enjoy ___ (work) with this team.", answer: ["working"], hint: "enjoy", why: "Enjoy cere gerunziul." },
    { type: "fill", prompt: "They decided ___ (postpone) the event.", answer: ["to postpone"], hint: "decide", why: "Decide cere to plus infinitiv." },
    { type: "fill", prompt: "Do you mind ___ (wait) outside?", answer: ["waiting"], hint: "mind", why: "Mind cere gerunziul." },
    { type: "fill", prompt: "She asked me ___ (send) the file.", answer: ["to send"], hint: "ask cu obiect", why: "Ask cere obiect plus to plus infinitiv." },
    { type: "fill", prompt: "I look forward to ___ (hear) from you.", answer: ["hearing"], hint: "to este prepoziție", why: "În look forward to, cuvântul to este prepoziție, deci urmează gerunziul." },
    { type: "fill", prompt: "We should avoid ___ (book) that hall again.", answer: ["booking"], hint: "avoid", why: "Avoid cere gerunziul." },
    { type: "fill", prompt: "He managed ___ (fix) the projector.", answer: ["to fix"], hint: "manage", why: "Manage cere to plus infinitiv." },
    { type: "fill", prompt: "Thank you for ___ (come) so quickly.", answer: ["coming"], hint: "prepoziție", why: "După prepoziție se pune gerunziul." },
    { type: "choose", prompt: "I hope ___ you next week.", options: ["seeing", "to see", "see"], answer: 1, why: "Hope cere to plus infinitiv." },
    { type: "choose", prompt: "She suggested ___ the date.", options: ["to change", "changing", "change"], answer: 1, why: "Suggest cere gerunziul." },
    { type: "choose", prompt: "We can't afford ___ another mistake.", options: ["making", "to make", "make"], answer: 1, why: "Afford cere to plus infinitiv." },
    { type: "choose", prompt: "I am interested in ___ with you.", options: ["work", "to work", "working"], answer: 2, why: "După prepoziția in se pune gerunziul." },
    { type: "choose", prompt: "He refused ___ the contract.", options: ["signing", "to sign", "sign"], answer: 1, why: "Refuse cere to plus infinitiv." },
    { type: "choose", prompt: "Remember ___ the lights before you leave.", options: ["turning off", "to turn off", "turn off"], answer: 1, why: "Remember to plus infinitiv înseamnă a nu uita să faci ceva." },
    { type: "transform", prompt: "It is a good idea to move the meeting. He suggested it. (folosește suggest)", answer: ["He suggested moving the meeting.", "He suggested that we move the meeting."], why: "Suggest cere gerunziu sau o propoziție cu that." },
    { type: "transform", prompt: "Please send the file. She asked me. (folosește ask)", answer: ["She asked me to send the file."], why: "Ask cere obiect plus to plus infinitiv." },
    { type: "transform", prompt: "I smoked and then I quit. (folosește stop)", answer: ["I stopped smoking."], why: "Stop plus gerunziu înseamnă a înceta o activitate." },
    { type: "transform", prompt: "I don't want to go. I made this decision. (folosește decide)", answer: ["I decided not to go."], why: "Not se pune înaintea lui to." },
    { type: "translate", prompt: "Îmi place să lucrez aici.", answer: ["I enjoy working here.", "I like working here."], why: "Enjoy și like cer gerunziul în acest sens." },
    { type: "translate", prompt: "Au decis să amâne evenimentul.", answer: ["They decided to postpone the event."], why: "Decide cere to plus infinitiv." },
    { type: "translate", prompt: "Te deranjează să aștepți?", answer: ["Do you mind waiting?"], why: "Mind cere gerunziul." },
    { type: "translate", prompt: "Aștept cu interes răspunsul.", answer: ["I look forward to hearing from you.", "I am looking forward to hearing from you.", "I'm looking forward to hearing from you."], why: "Look forward to cere gerunziul." },
    { type: "translate", prompt: "Clientul vrea să schimbăm prețul.", answer: ["The client wants us to change the price."], why: "Want cere obiect plus to plus infinitiv." },
    { type: "translate", prompt: "Nu uita să trimiți factura.", answer: ["Remember to send the invoice.", "Don't forget to send the invoice."], why: "Remember to plus infinitiv pentru o sarcină viitoare." }
  ],
  finalTest: [
    { type: "fill", prompt: "We finished ___ (set) up at six.", answer: ["setting"], why: "Finish cere gerunziul." },
    { type: "fill", prompt: "He promised ___ (call) me back.", answer: ["to call"], why: "Promise cere to plus infinitiv." },
    { type: "fill", prompt: "I am not used to ___ (drive) in this city.", answer: ["driving"], why: "În be used to, cuvântul to este prepoziție." },
    { type: "choose", prompt: "She keeps ___ the same mistake.", options: ["to make", "making", "make"], answer: 1, why: "Keep cere gerunziul." },
    { type: "choose", prompt: "They agreed ___ the deadline.", options: ["extending", "to extend", "extend"], answer: 1, why: "Agree cere to plus infinitiv." },
    { type: "choose", prompt: "I regret ___ you that the date is taken.", options: ["telling", "to tell", "tell"], answer: 1, why: "Regret to tell este formula formală pentru a da o veste proastă." },
    { type: "choose", prompt: "We are thinking of ___ a second van.", options: ["buy", "to buy", "buying"], answer: 2, why: "După prepoziția of se pune gerunziul." },
    { type: "choose", prompt: "He offered ___ us with the setup.", options: ["helping", "to help", "help"], answer: 1, why: "Offer cere to plus infinitiv." },
    { type: "transform", prompt: "I smoke and I want to quit. (stop plus gerunziu)", answer: ["I want to stop smoking."], why: "Stop plus gerunziu înseamnă a înceta activitatea." },
    { type: "transform", prompt: "Please don't call after nine. She asked me. (ask)", answer: ["She asked me not to call after nine."], why: "Not se pune înaintea lui to." },
    { type: "transform", prompt: "I am interested. I want to work with you. (be interested in)", answer: ["I am interested in working with you.", "I'm interested in working with you."], why: "După prepoziție se pune gerunziul." },
    { type: "translate", prompt: "A reușit să termine la timp.", answer: ["He managed to finish on time.", "She managed to finish on time."], why: "Manage cere to plus infinitiv." },
    { type: "translate", prompt: "Evită să vorbească despre bani.", answer: ["He avoids talking about money.", "She avoids talking about money."], why: "Avoid cere gerunziul." },
    { type: "translate", prompt: "M-a rugat să aștept afară.", answer: ["He asked me to wait outside.", "She asked me to wait outside."], why: "Ask cere obiect plus to plus infinitiv." },
    { type: "translate", prompt: "Îmi amintesc că am trimis mailul.", answer: ["I remember sending the email.", "I remember sending the e-mail."], why: "Remember plus gerunziu se referă la o amintire." }
  ]
});

window.E360DATA.grammar.push({
  id: "causative",
  group: "verbe",
  level: "B2",
  title: "Cauzativul: have sau get something done",
  summary: "Cum spui că altcineva face ceva pentru tine: nu tu tipărești invitațiile, ci le dai la tipărit.",
  also: "Este structura care lipsește cel mai des din engleza românilor, pentru că în română spunem simplu am tipărit invitațiile.",
  form: {
    affirmative: "S + have/get + obiect + V3",
    affirmativeExample: "We had the invitations printed. I got my laptop repaired.",
    negative: "S + don't/didn't + have/get + obiect + V3",
    negativeExample: "We didn't have the room cleaned.",
    question: "Do/Did + S + have/get + obiect + V3?",
    questionExample: "Did you have the contract checked?",
    short: "have someone do something (activ, cu persoana)",
    shortExample: "I had the technician check the sound. I got my colleague to call them.",
    note: "Have something done este neutru. Get something done este mai informal. Have someone do something este activ. Get someone to do something cere to."
  },
  uses: [
    { ro: "Servicii pe care ți le face altcineva", examples: [
      { en: "We had the invitations printed at a local shop.", ro: "Am dat invitațiile la tipărit la un magazin local.", highlight: "had the invitations printed" },
      { en: "I need to get my car serviced before the trip.", ro: "Trebuie să-mi duc mașina la revizie înainte de drum.", highlight: "get my car serviced" } ] },
    { ro: "Lucruri neplăcute care ți se întâmplă", examples: [
      { en: "He had his laptop stolen at the airport.", ro: "I s-a furat laptopul la aeroport.", highlight: "had his laptop stolen" },
      { en: "We had our booking cancelled at the last minute.", ro: "Ni s-a anulat rezervarea în ultimul moment.", highlight: "had our booking cancelled" } ] },
    { ro: "Cu persoana, la activ: have someone do, get someone to do", examples: [
      { en: "I had the technician check every cable.", ro: "L-am pus pe tehnician să verifice fiecare cablu.", highlight: "had the technician check" },
      { en: "I got my colleague to call the supplier.", ro: "L-am convins pe colegul meu să sune furnizorul.", highlight: "got my colleague to call" } ] },
    { ro: "La orice timp verbal, pentru că have se conjugă normal", examples: [
      { en: "We are having the hall repainted this week.", ro: "Săptămâna asta dăm sala la zugrăvit.", highlight: "are having the hall repainted" },
      { en: "By Friday we will have had everything installed.", ro: "Până vineri o să avem totul instalat.", highlight: "will have had everything installed" } ] }
  ],
  signalWords: ["have something done", "get something done", "at the hairdresser", "at the garage", "printed", "repaired", "delivered", "installed"],
  compareWith: {
    id: "passive-voice",
    leftTitle: "Cauzativ: cineva o face pentru tine",
    rightTitle: "Acțiune proprie",
    rows: [
      { left: "I had my hair cut. (m-a tuns cineva)", right: "I cut my hair. (m-am tuns singur)" },
      { left: "We had the invitations printed.", right: "We printed the invitations." },
      { left: "She is having the kitchen redone.", right: "She is redoing the kitchen." },
      { left: "They had the van repaired.", right: "They repaired the van." },
      { left: "I got the contract translated.", right: "I translated the contract." }
    ]
  },
  mistakes: [
    { wrong: "I cut my hair yesterday. (voiai să spui că te-a tuns cineva)", right: "I had my hair cut yesterday.", why: "Fără cauzativ, propoziția înseamnă că te-ai tuns singur." },
    { wrong: "We had printed the invitations. (voiai cauzativ)", right: "We had the invitations printed.", why: "Ordinea contează: obiectul stă înaintea participiului." },
    { wrong: "I had the technician to check the sound.", right: "I had the technician check the sound.", why: "După have plus persoană se pune infinitivul fără to." },
    { wrong: "I got my colleague call them.", right: "I got my colleague to call them.", why: "După get plus persoană se pune to plus infinitiv." },
    { wrong: "We have the room cleaning every day.", right: "We have the room cleaned every day.", why: "Se folosește participiul, nu gerunziul." },
    { wrong: "I did my car repaired.", right: "I had my car repaired.", why: "Cauzativul se face cu have sau get, nu cu do." }
  ],
  examples: [
    { en: "We had the invitations printed last week.", ro: "Am dat invitațiile la tipărit săptămâna trecută.", highlight: "had the invitations printed" },
    { en: "I need to get the van serviced before the season.", ro: "Trebuie să dau duba la revizie înainte de sezon.", highlight: "get the van serviced" },
    { en: "She is having the office repainted.", ro: "Dă biroul la zugrăvit.", highlight: "having the office repainted" },
    { en: "Did you have the contract checked by a lawyer?", ro: "Ai dat contractul la verificat unui avocat?", highlight: "have the contract checked" },
    { en: "He had his phone stolen during the festival.", ro: "I s-a furat telefonul în timpul festivalului.", highlight: "had his phone stolen" },
    { en: "We will have the sound system installed on Thursday.", ro: "Joi o să ni se instaleze sonorizarea.", highlight: "have the sound system installed" },
    { en: "I had the technician check every cable.", ro: "L-am pus pe tehnician să verifice fiecare cablu.", highlight: "had the technician check" },
    { en: "I got my colleague to call the venue.", ro: "L-am rugat pe colegul meu să sune la locație.", highlight: "got my colleague to call" },
    { en: "They had their booking cancelled without warning.", ro: "Li s-a anulat rezervarea fără avertisment.", highlight: "had their booking cancelled" },
    { en: "We are getting the photos edited by a professional.", ro: "Dăm pozele la editat unui profesionist.", highlight: "getting the photos edited" },
    { en: "I have my suits cleaned twice a year.", ro: "Îmi dau costumele la curățat de două ori pe an.", highlight: "have my suits cleaned" },
    { en: "You should have that contract translated.", ro: "Ar trebui să dai contractul acela la tradus.", highlight: "have that contract translated" }
  ],
  exercises: [
    { type: "fill", prompt: "We had the invitations ___ (print) last week.", answer: ["printed"], hint: "participiu", why: "Cauzativul cere participiul după obiect." },
    { type: "fill", prompt: "I need to get my car ___ (repair).", answer: ["repaired"], hint: "participiu", why: "Get something done cere participiul." },
    { type: "fill", prompt: "She is having the office ___ (paint).", answer: ["painted", "repainted"], hint: "participiu", why: "Structura funcționează la orice timp verbal." },
    { type: "fill", prompt: "I had the technician ___ (check) the sound.", answer: ["check"], hint: "cu persoana", why: "După have plus persoană se pune infinitivul fără to." },
    { type: "fill", prompt: "I got my colleague ___ (call) them.", answer: ["to call"], hint: "get cu persoana", why: "După get plus persoană se pune to plus infinitiv." },
    { type: "fill", prompt: "He had his phone ___ (steal) at the festival.", answer: ["stolen"], hint: "lucru neplăcut", why: "Cauzativul se folosește și pentru lucruri neplăcute care ți se întâmplă." },
    { type: "fill", prompt: "___ (you / have) the contract checked?", answer: ["Did you have", "Have you had", "did you have"], hint: "întrebare", why: "Have se conjugă normal, deci întrebarea folosește auxiliarul potrivit." },
    { type: "fill", prompt: "We didn't have the room ___ (clean) before the event.", answer: ["cleaned"], hint: "negativ", why: "Participiul rămâne la fel și la negativ." },
    { type: "choose", prompt: "I ___ my hair cut yesterday.", options: ["did", "had", "made"], answer: 1, why: "Cauzativul se face cu have sau get." },
    { type: "choose", prompt: "We are ___ the hall repainted.", options: ["having", "doing", "making"], answer: 0, why: "Have something done, la Present Continuous." },
    { type: "choose", prompt: "She had the photos ___ by a professional.", options: ["edit", "editing", "edited"], answer: 2, why: "Se folosește participiul." },
    { type: "choose", prompt: "I had the plumber ___ the leak.", options: ["to fix", "fix", "fixing"], answer: 1, why: "După have plus persoană se pune infinitivul fără to." },
    { type: "choose", prompt: "I got the designer ___ the poster again.", options: ["do", "to do", "doing"], answer: 1, why: "După get plus persoană se pune to plus infinitiv." },
    { type: "choose", prompt: "They ___ their flight cancelled.", options: ["had", "did", "made"], answer: 0, why: "Cauzativul pentru un lucru neplăcut se face cu have." },
    { type: "transform", prompt: "A mechanic repaired my car. (cauzativ)", answer: ["I had my car repaired.", "I got my car repaired."], why: "Serviciul făcut de altcineva se exprimă cu have sau get something done." },
    { type: "transform", prompt: "A printer is printing our invitations. (cauzativ)", answer: ["We are having our invitations printed.", "We are getting our invitations printed."], why: "Structura funcționează la orice timp." },
    { type: "transform", prompt: "Someone stole his laptop. (cauzativ, lucru neplăcut)", answer: ["He had his laptop stolen."], why: "Cauzativul exprimă și evenimente neplăcute suferite." },
    { type: "transform", prompt: "I asked the technician and he checked the cables. (have someone do)", answer: ["I had the technician check the cables."], why: "Have plus persoană plus infinitiv fără to." },
    { type: "translate", prompt: "Am dat invitațiile la tipărit.", answer: ["We had the invitations printed.", "I had the invitations printed.", "We got the invitations printed."], why: "Serviciul făcut de altcineva." },
    { type: "translate", prompt: "Trebuie să-mi dau mașina la revizie.", answer: ["I need to get my car serviced.", "I need to have my car serviced."], why: "Get sau have something done." },
    { type: "translate", prompt: "I s-a furat telefonul.", answer: ["He had his phone stolen.", "She had her phone stolen."], why: "Cauzativ pentru un eveniment neplăcut." },
    { type: "translate", prompt: "Dăm sala la zugrăvit săptămâna viitoare.", answer: ["We are having the hall painted next week.", "We are getting the hall painted next week.", "We are having the hall repainted next week."], why: "Cauzativ la Present Continuous pentru un plan." },
    { type: "translate", prompt: "Ai dat contractul la verificat?", answer: ["Did you have the contract checked?", "Have you had the contract checked?", "Did you get the contract checked?"], why: "Întrebare cu cauzativ." },
    { type: "translate", prompt: "L-am pus pe tehnician să verifice totul.", answer: ["I had the technician check everything."], why: "Have plus persoană plus infinitiv fără to." }
  ],
  finalTest: [
    { type: "fill", prompt: "I am going to have the logo ___ (redesign).", answer: ["redesigned"], why: "Participiul după obiect." },
    { type: "fill", prompt: "She got her passport ___ (renew) last month.", answer: ["renewed"], why: "Get something done cere participiul." },
    { type: "fill", prompt: "We had the accountant ___ (review) the numbers.", answer: ["review"], why: "Have plus persoană plus infinitiv fără to." },
    { type: "choose", prompt: "I ___ my suit cleaned every season.", options: ["make", "have", "do"], answer: 1, why: "Cauzativul se face cu have." },
    { type: "choose", prompt: "They had the equipment ___ on Friday.", options: ["deliver", "delivered", "delivering"], answer: 1, why: "Participiu." },
    { type: "choose", prompt: "I got the intern ___ the list.", options: ["update", "to update", "updating"], answer: 1, why: "Get plus persoană plus to plus infinitiv." },
    { type: "choose", prompt: "He ___ his bag stolen on the train.", options: ["had", "did", "was"], answer: 0, why: "Cauzativ pentru un eveniment neplăcut." },
    { type: "choose", prompt: "We are ___ the website redone.", options: ["making", "having", "doing"], answer: 1, why: "Have something done, la continuous." },
    { type: "transform", prompt: "A photographer took our photos. (cauzativ)", answer: ["We had our photos taken.", "We got our photos taken."], why: "Serviciul făcut de altcineva." },
    { type: "transform", prompt: "Someone will install the lights tomorrow. (cauzativ)", answer: ["We will have the lights installed tomorrow.", "We are having the lights installed tomorrow."], why: "Cauzativ la viitor." },
    { type: "transform", prompt: "I asked my colleague and she sent the offer. (get someone to do)", answer: ["I got my colleague to send the offer."], why: "Get plus persoană plus to plus infinitiv." },
    { type: "translate", prompt: "Îmi dau pozele la editat.", answer: ["I am having the photos edited.", "I'm having the photos edited.", "I am getting the photos edited.", "I'm getting the photos edited."], why: "Serviciul făcut de altcineva." },
    { type: "translate", prompt: "Ni s-a anulat rezervarea.", answer: ["We had our booking cancelled.", "We had our booking canceled."], why: "Cauzativ pentru un eveniment neplăcut." },
    { type: "translate", prompt: "Ar trebui să dai contractul la tradus.", answer: ["You should have the contract translated.", "You should get the contract translated."], why: "Have sau get something done." },
    { type: "translate", prompt: "Am pus pe cineva să verifice cifrele.", answer: ["I had someone check the numbers.", "I got someone to check the numbers."], why: "Have plus persoană plus infinitiv, sau get plus to." }
  ]
});

window.E360DATA.grammar.push({
  id: "question-tags",
  group: "detalii",
  level: "B1",
  title: "Question tags",
  summary: "Scurta întrebare de la finalul propoziției: you are coming, aren't you? Se folosește pentru a cere confirmare.",
  also: "Regula: propoziție afirmativă cere tag negativ, propoziție negativă cere tag afirmativ.",
  form: {
    affirmative: "propoziție afirmativă + auxiliar negativ + pronume?",
    affirmativeExample: "You work here, don't you? She has left, hasn't she?",
    negative: "propoziție negativă + auxiliar afirmativ + pronume?",
    negativeExample: "You don't smoke, do you? He isn't coming, is he?",
    question: "Intonația coborâtă cere confirmare, cea urcată cere un răspuns real",
    questionExample: "It is cold, isn't it? (confirmare) You have the keys, don't you? (chiar întreb)",
    short: "Imperativ: will you? / Let's: shall we?",
    shortExample: "Close the door, will you? Let's start, shall we?",
    note: "Excepții: I am devine aren't I. Nobody, everybody, somebody cer they. Nothing și everything cer it. Let's cere shall we."
  },
  uses: [
    { ro: "Confirmarea a ceva ce crezi că este adevărat", examples: [
      { en: "You booked the venue, didn't you?", ro: "Ai rezervat locația, nu-i așa?", highlight: "didn't you" },
      { en: "They are coming tomorrow, aren't they?", ro: "Vin mâine, nu?", highlight: "aren't they" } ] },
    { ro: "Deschiderea unei conversații, mai ales despre vreme", examples: [
      { en: "It is a lovely day, isn't it?", ro: "Frumoasă zi, nu-i așa?", highlight: "isn't it" },
      { en: "The traffic was terrible, wasn't it?", ro: "Traficul a fost groaznic, nu?", highlight: "wasn't it" } ] },
    { ro: "Verificarea unei informații de care nu ești sigur", examples: [
      { en: "You haven't sent the invoice yet, have you?", ro: "N-ai trimis încă factura, nu?", highlight: "have you" },
      { en: "She doesn't work on Fridays, does she?", ro: "Nu lucrează vinerea, nu?", highlight: "does she" } ] },
    { ro: "Cereri politicoase după imperativ", examples: [
      { en: "Give me a hand, will you?", ro: "Dă-mi o mână de ajutor, te rog.", highlight: "will you" },
      { en: "Let's take a break, shall we?", ro: "Hai să luăm o pauză, da?", highlight: "shall we" } ] }
  ],
  signalWords: ["isn't it", "aren't you", "don't you", "didn't you", "haven't you", "will you", "shall we", "can't you"],
  compareWith: {
    id: "modal-verbs",
    leftTitle: "Propoziție afirmativă",
    rightTitle: "Tag negativ",
    rows: [
      { left: "You are ready,", right: "aren't you?" },
      { left: "She works here,", right: "doesn't she?" },
      { left: "They came late,", right: "didn't they?" },
      { left: "He has finished,", right: "hasn't he?" },
      { left: "I am next,", right: "aren't I?" }
    ]
  },
  mistakes: [
    { wrong: "You are coming, isn't it?", right: "You are coming, aren't you?", why: "Tag-ul repetă subiectul și auxiliarul propoziției, nu se folosește o formulă fixă." },
    { wrong: "She works here, doesn't it?", right: "She works here, doesn't she?", why: "Pronumele din tag trebuie să corespundă subiectului." },
    { wrong: "You don't like it, don't you?", right: "You don't like it, do you?", why: "Propoziția negativă cere tag afirmativ." },
    { wrong: "I am late, amn't I?", right: "I am late, aren't I?", why: "Forma corectă la I am este aren't I, o excepție consacrată." },
    { wrong: "Let's go, will we?", right: "Let's go, shall we?", why: "După let's se folosește shall we." },
    { wrong: "Nobody called, did he?", right: "Nobody called, did they?", why: "După nobody, somebody, everybody se folosește they." }
  ],
  examples: [
    { en: "You booked the venue, didn't you?", ro: "Ai rezervat locația, nu-i așa?", highlight: "didn't you" },
    { en: "She hasn't confirmed yet, has she?", ro: "N-a confirmat încă, nu?", highlight: "has she" },
    { en: "They are arriving at six, aren't they?", ro: "Ajung la șase, nu?", highlight: "aren't they" },
    { en: "You can drive a van, can't you?", ro: "Poți conduce o dubă, nu?", highlight: "can't you" },
    { en: "It wasn't very expensive, was it?", ro: "N-a fost foarte scump, nu?", highlight: "was it" },
    { en: "We should leave now, shouldn't we?", ro: "Ar trebui să plecăm acum, nu?", highlight: "shouldn't we" },
    { en: "I am on the list, aren't I?", ro: "Sunt pe listă, nu?", highlight: "aren't I" },
    { en: "Nobody complained, did they?", ro: "Nu s-a plâns nimeni, nu?", highlight: "did they" },
    { en: "Let's start with the numbers, shall we?", ro: "Hai să începem cu cifrele, da?", highlight: "shall we" },
    { en: "Close the window, will you?", ro: "Închide geamul, te rog.", highlight: "will you" },
    { en: "You have met him before, haven't you?", ro: "L-ai mai cunoscut, nu?", highlight: "haven't you" },
    { en: "Everything is ready, isn't it?", ro: "Totul e gata, nu?", highlight: "isn't it" }
  ],
  exercises: [
    { type: "fill", prompt: "You booked the venue, ___?", answer: ["didn't you", "did not you"], hint: "tag negativ", why: "Propoziție afirmativă la Past Simple, deci tag cu didn't." },
    { type: "fill", prompt: "She isn't coming, ___?", answer: ["is she"], hint: "tag afirmativ", why: "Propoziție negativă, deci tag afirmativ." },
    { type: "fill", prompt: "They have already paid, ___?", answer: ["haven't they", "have not they"], hint: "present perfect", why: "Auxiliarul have se repetă la negativ în tag." },
    { type: "fill", prompt: "I am next, ___?", answer: ["aren't I", "am I not"], hint: "excepție", why: "La I am, tag-ul este aren't I." },
    { type: "fill", prompt: "Let's take a break, ___?", answer: ["shall we"], hint: "let's", why: "După let's se folosește shall we." },
    { type: "fill", prompt: "Nobody called back, ___?", answer: ["did they"], hint: "nobody", why: "Nobody este negativ și cere they în tag." },
    { type: "fill", prompt: "You can drive, ___?", answer: ["can't you", "cannot you"], hint: "modal", why: "Modalul se repetă la negativ în tag." },
    { type: "fill", prompt: "Close the door, ___?", answer: ["will you", "would you", "can you"], hint: "imperativ", why: "După imperativ se folosește will you." },
    { type: "choose", prompt: "You are ready, ___?", options: ["isn't it", "aren't you", "don't you"], answer: 1, why: "Tag-ul repetă auxiliarul are și subiectul you." },
    { type: "choose", prompt: "He works here, ___?", options: ["doesn't he", "isn't he", "don't he"], answer: 0, why: "Present Simple la persoana a III-a cere doesn't." },
    { type: "choose", prompt: "They didn't confirm, ___?", options: ["didn't they", "did they", "do they"], answer: 1, why: "Propoziție negativă, deci tag afirmativ." },
    { type: "choose", prompt: "It was a good idea, ___?", options: ["wasn't it", "isn't it", "weren't it"], answer: 0, why: "Auxiliarul was se repetă la negativ." },
    { type: "choose", prompt: "Everybody signed, ___?", options: ["didn't he", "didn't they", "didn't it"], answer: 1, why: "După everybody se folosește they." },
    { type: "choose", prompt: "There is a problem, ___?", options: ["isn't there", "isn't it", "aren't there"], answer: 0, why: "Cu there is, tag-ul păstrează there." },
    { type: "transform", prompt: "You have the keys. (adaugă question tag)", answer: ["You have the keys, don't you?", "You have the keys, haven't you?"], why: "Have ca verb principal acceptă don't you sau, mai formal, haven't you." },
    { type: "transform", prompt: "She won't be late. (adaugă question tag)", answer: ["She won't be late, will she?"], why: "Propoziție negativă, deci tag afirmativ." },
    { type: "transform", prompt: "We should call them. (adaugă question tag)", answer: ["We should call them, shouldn't we?"], why: "Modalul should se repetă la negativ." },
    { type: "transform", prompt: "Let's go home. (adaugă question tag)", answer: ["Let's go home, shall we?"], why: "După let's se folosește shall we." },
    { type: "translate", prompt: "Ai trimis oferta, nu-i așa?", answer: ["You sent the offer, didn't you?", "You have sent the offer, haven't you?"], why: "Tag negativ după o propoziție afirmativă." },
    { type: "translate", prompt: "Nu vine, nu?", answer: ["He isn't coming, is he?", "She isn't coming, is she?", "They aren't coming, are they?"], why: "Propoziție negativă, tag afirmativ." },
    { type: "translate", prompt: "Frumoasă zi, nu-i așa?", answer: ["It's a lovely day, isn't it?", "It is a lovely day, isn't it?", "It's a nice day, isn't it?"], why: "Deschidere de conversație cu tag." },
    { type: "translate", prompt: "Hai să începem, da?", answer: ["Let's start, shall we?", "Let's begin, shall we?"], why: "După let's se folosește shall we." },
    { type: "translate", prompt: "Poți să conduci, nu?", answer: ["You can drive, can't you?"], why: "Modalul can se repetă la negativ." },
    { type: "translate", prompt: "Nu s-a plâns nimeni, nu?", answer: ["Nobody complained, did they?", "No one complained, did they?"], why: "Nobody este deja negativ și cere they." }
  ],
  finalTest: [
    { type: "fill", prompt: "She has left, ___?", answer: ["hasn't she", "has not she"], why: "Auxiliarul has se repetă la negativ." },
    { type: "fill", prompt: "You weren't there, ___?", answer: ["were you"], why: "Propoziție negativă, tag afirmativ." },
    { type: "fill", prompt: "Let's ask them, ___?", answer: ["shall we"], why: "După let's se folosește shall we." },
    { type: "choose", prompt: "They will come, ___?", options: ["won't they", "will they", "aren't they"], answer: 0, why: "Will se repetă la negativ în tag." },
    { type: "choose", prompt: "I am invited, ___?", options: ["amn't I", "aren't I", "am I"], answer: 1, why: "La I am, tag-ul este aren't I." },
    { type: "choose", prompt: "Nothing was damaged, ___?", options: ["was it", "wasn't it", "were they"], answer: 0, why: "Nothing este negativ și cere it." },
    { type: "choose", prompt: "You don't mind, ___?", options: ["don't you", "do you", "are you"], answer: 1, why: "Propoziție negativă, tag afirmativ." },
    { type: "choose", prompt: "Pass me the file, ___?", options: ["shall we", "will you", "don't you"], answer: 1, why: "După imperativ se folosește will you." },
    { type: "transform", prompt: "He can't come. (adaugă question tag)", answer: ["He can't come, can he?"], why: "Propoziție negativă, tag afirmativ." },
    { type: "transform", prompt: "The invoice was paid. (adaugă question tag)", answer: ["The invoice was paid, wasn't it?"], why: "Was se repetă la negativ." },
    { type: "transform", prompt: "Somebody left this here. (adaugă question tag)", answer: ["Somebody left this here, didn't they?"], why: "După somebody se folosește they." },
    { type: "translate", prompt: "Totul e gata, nu?", answer: ["Everything is ready, isn't it?", "Everything's ready, isn't it?"], why: "Everything cere it în tag." },
    { type: "translate", prompt: "N-ai uitat, nu?", answer: ["You didn't forget, did you?", "You haven't forgotten, have you?"], why: "Propoziție negativă, tag afirmativ." },
    { type: "translate", prompt: "Ar trebui să confirmăm, nu?", answer: ["We should confirm, shouldn't we?"], why: "Should se repetă la negativ." },
    { type: "translate", prompt: "Închide ușa, te rog.", answer: ["Close the door, will you?", "Shut the door, will you?"], why: "Imperativ plus will you." }
  ]
});

window.E360DATA.grammar.push({
  id: "articles-quantifiers",
  group: "detalii",
  level: "B2",
  title: "Articole și cuantificatori",
  summary: "Când se pune a, an, the sau nimic, plus much, many, few, little, some, any. Zona în care românii greșesc cel mai des.",
  also: "Româna are articolul lipit de substantiv, deci mintea îl uită sau îl pune unde nu trebuie. Merită învățat ca un set de reguli mecanice.",
  form: {
    affirmative: "a/an + substantiv numărabil singular nedefinit; the + ceva definit; nimic + plural sau nenumărabil general",
    affirmativeExample: "I need a chair. The chair you sent is broken. Chairs are expensive.",
    negative: "not any / no + substantiv",
    negativeExample: "We don't have any chairs. There are no chairs left.",
    question: "How much + nenumărabil? How many + numărabil?",
    questionExample: "How much time do we have? How many guests are coming?",
    short: "few / a few / little / a little",
    shortExample: "I have a few ideas. (câteva) I have few ideas. (puține, aproape deloc)",
    note: "Nenumărabile frecvente care în română sunt numărabile: information, advice, news, furniture, equipment, luggage, money, work, research, progress, feedback."
  },
  uses: [
    { ro: "A sau an: ceva menționat prima dată, sau o meserie", examples: [
      { en: "We need a bigger van for this job.", ro: "Avem nevoie de o dubă mai mare pentru treaba asta.", highlight: "a bigger van" },
      { en: "She is an event manager.", ro: "Este manager de evenimente.", highlight: "an event manager" } ] },
    { ro: "The: ceva deja cunoscut, unic sau precizat", examples: [
      { en: "The van we rented has a problem.", ro: "Duba pe care am închiriat-o are o problemă.", highlight: "The van" },
      { en: "Could you close the door, please?", ro: "Poți închide ușa, te rog?", highlight: "the door" } ] },
    { ro: "Fără articol: plural general, nenumărabile generale, mese, limbi, țări", examples: [
      { en: "Weddings are stressful for everyone.", ro: "Nunțile sunt stresante pentru toată lumea.", highlight: "Weddings" },
      { en: "I don't drink coffee after five.", ro: "Nu beau cafea după cinci.", highlight: "coffee" } ] },
    { ro: "Much, many, a lot of: cantitate", examples: [
      { en: "We don't have much time.", ro: "Nu avem mult timp.", highlight: "much time" },
      { en: "How many people are coming?", ro: "Câți oameni vin?", highlight: "How many people" } ] },
    { ro: "Few, a few, little, a little: cantități mici", examples: [
      { en: "We have a few options left.", ro: "Ne-au mai rămas câteva opțiuni.", highlight: "a few options" },
      { en: "There is little chance of a refund.", ro: "Sunt șanse mici de rambursare.", highlight: "little chance" } ] }
  ],
  signalWords: ["a", "an", "the", "some", "any", "much", "many", "a lot of", "few", "a few", "little", "a little", "no", "every"],
  compareWith: {
    id: "relative-clauses",
    leftTitle: "Numărabil",
    rightTitle: "Nenumărabil",
    rows: [
      { left: "many chairs", right: "much equipment" },
      { left: "How many guests?", right: "How much time?" },
      { left: "a few ideas", right: "a little advice" },
      { left: "fewer people", right: "less money" },
      { left: "an email, two emails", right: "information, some information" }
    ]
  },
  mistakes: [
    { wrong: "I need an advice.", right: "I need some advice.", why: "Advice este nenumărabil, deci nu primește a sau an și nu are plural." },
    { wrong: "She is manager.", right: "She is a manager.", why: "Meseriile primesc articolul nehotărât în engleză, spre deosebire de română." },
    { wrong: "I have many informations.", right: "I have a lot of information.", why: "Information este nenumărabil: fără plural și fără many." },
    { wrong: "The life is short.", right: "Life is short.", why: "Substantivele abstracte în sens general nu primesc the." },
    { wrong: "I go to the work by bus.", right: "I go to work by bus.", why: "Expresii fixe fără articol: to work, to school, at home, in bed." },
    { wrong: "There are less people this year.", right: "There are fewer people this year.", why: "Fewer se folosește cu numărabile, less cu nenumărabile." },
    { wrong: "I have few time.", right: "I have little time.", why: "Few se folosește cu numărabile, little cu nenumărabile." }
  ],
  examples: [
    { en: "We need a bigger room for eighty guests.", ro: "Ne trebuie o sală mai mare pentru optzeci de invitați.", highlight: "a bigger room" },
    { en: "The room you showed me last week was perfect.", ro: "Sala pe care mi-ai arătat-o săptămâna trecută era perfectă.", highlight: "The room" },
    { en: "Can you give me some advice about the contract?", ro: "Poți să-mi dai un sfat legat de contract?", highlight: "some advice" },
    { en: "We don't have much time before the deadline.", ro: "Nu avem mult timp până la termen.", highlight: "much time" },
    { en: "How many people confirmed so far?", ro: "Câți oameni au confirmat până acum?", highlight: "How many people" },
    { en: "There is very little information on their website.", ro: "Sunt foarte puține informații pe site-ul lor.", highlight: "little information" },
    { en: "She is an accountant at a big firm.", ro: "Este contabilă la o firmă mare.", highlight: "an accountant" },
    { en: "Weddings in June are always fully booked.", ro: "Nunțile din iunie sunt mereu ocupate complet.", highlight: "Weddings" },
    { en: "I go to work by metro every day.", ro: "Merg la muncă cu metroul în fiecare zi.", highlight: "to work" },
    { en: "We have a few chairs left in the warehouse.", ro: "Ne-au mai rămas câteva scaune în depozit.", highlight: "a few chairs" },
    { en: "There were fewer complaints than last year.", ro: "Au fost mai puține reclamații decât anul trecut.", highlight: "fewer complaints" },
    { en: "The equipment we ordered hasn't arrived.", ro: "Echipamentul pe care l-am comandat n-a ajuns.", highlight: "The equipment" }
  ],
  exercises: [
    { type: "fill", prompt: "I need ___ advice about this contract.", answer: ["some"], hint: "nenumărabil", why: "Advice este nenumărabil, deci se folosește some, nu an." },
    { type: "fill", prompt: "She is ___ event manager.", answer: ["an"], hint: "meserie", why: "Meseriile primesc articolul nehotărât, iar event începe cu sunet vocalic." },
    { type: "fill", prompt: "How ___ guests are coming?", answer: ["many"], hint: "numărabil", why: "Many se folosește cu substantive numărabile." },
    { type: "fill", prompt: "How ___ time do we have?", answer: ["much"], hint: "nenumărabil", why: "Much se folosește cu substantive nenumărabile." },
    { type: "fill", prompt: "There were ___ complaints than last year.", answer: ["fewer"], hint: "numărabil", why: "Fewer se folosește cu numărabile, less cu nenumărabile." },
    { type: "choose", prompt: "I go to ___ work by bus.", options: ["the", "a", "- (fără articol)"], answer: 2, why: "To work este expresie fixă, fără articol." },
    { type: "fill", prompt: "We have ___ few options left.", answer: ["a"], hint: "câteva", why: "A few înseamnă câteva, few singur înseamnă foarte puține." },
    { type: "fill", prompt: "___ equipment we ordered has arrived.", answer: ["The"], hint: "precizat", why: "Se referă la ceva precis, deci se folosește the." },
    { type: "choose", prompt: "I have ___ information about the venue.", options: ["many", "a lot of", "an"], answer: 1, why: "Information este nenumărabil, deci a lot of, nu many." },
    { type: "choose", prompt: "___ is short, enjoy it.", options: ["The life", "Life", "A life"], answer: 1, why: "Substantivele abstracte în sens general nu primesc articol." },
    { type: "choose", prompt: "There is ___ chance of a refund.", options: ["few", "little", "a few"], answer: 1, why: "Chance este nenumărabil aici, deci little." },
    { type: "choose", prompt: "We don't have ___ chairs left.", options: ["much", "many", "a little"], answer: 1, why: "Chairs este numărabil, deci many." },
    { type: "choose", prompt: "He works as ___ photographer.", options: ["photographer", "a photographer", "the photographer"], answer: 1, why: "Meseriile primesc articolul nehotărât." },
    { type: "choose", prompt: "Could you pass me ___ salt?", options: ["a", "the", "an"], answer: 1, why: "Se referă la sarea de pe masă, deci the." },
    { type: "transform", prompt: "I need an information. (corectează)", answer: ["I need some information.", "I need information."], why: "Information este nenumărabil." },
    { type: "transform", prompt: "There are less guests this year. (corectează)", answer: ["There are fewer guests this year."], why: "Fewer se folosește cu numărabile." },
    { type: "transform", prompt: "She is teacher. (corectează)", answer: ["She is a teacher."], why: "Meseriile primesc articolul nehotărât." },
    { type: "transform", prompt: "I have few time before the meeting. (corectează)", answer: ["I have little time before the meeting."], why: "Little se folosește cu nenumărabile." },
    { type: "translate", prompt: "Am nevoie de un sfat.", answer: ["I need some advice.", "I need advice."], why: "Advice este nenumărabil în engleză." },
    { type: "translate", prompt: "Câți invitați vin?", answer: ["How many guests are coming?"], why: "Many se folosește cu numărabile." },
    { type: "translate", prompt: "Nu avem mult timp.", answer: ["We don't have much time.", "We do not have much time.", "We haven't got much time."], why: "Much se folosește cu nenumărabile." },
    { type: "translate", prompt: "Este contabil la o firmă mare.", answer: ["He is an accountant at a big firm.", "She is an accountant at a big firm.", "He's an accountant at a big company.", "She's an accountant at a big company."], why: "Meseriile primesc articolul nehotărât." },
    { type: "translate", prompt: "Sunt foarte puține informații pe site.", answer: ["There is very little information on the website.", "There is very little information on the site."], why: "Information este nenumărabil, deci little și is." },
    { type: "translate", prompt: "Ne-au mai rămas câteva scaune.", answer: ["We have a few chairs left.", "There are a few chairs left."], why: "A few înseamnă câteva, cu substantiv numărabil." }
  ],
  finalTest: [
    { type: "fill", prompt: "Can I give you ___ piece of advice?", answer: ["a"], why: "Advice se numără cu a piece of advice." },
    { type: "fill", prompt: "How ___ luggage are you taking?", answer: ["much"], why: "Luggage este nenumărabil." },
    { type: "fill", prompt: "There is ___ furniture in the new office.", answer: ["little", "some", "no"], why: "Furniture este nenumărabil, deci little sau some." },
    { type: "choose", prompt: "We bought ___ new equipment last month.", options: ["a", "some", "many"], answer: 1, why: "Equipment este nenumărabil." },
    { type: "choose", prompt: "___ news you sent was very useful.", options: ["The", "A", "Some of"], answer: 0, why: "News este nenumărabil și se folosește cu the când este precizat." },
    { type: "choose", prompt: "He goes to ___ school by bike.", options: ["a", "the", "-"], answer: 2, why: "To school este expresie fixă, fără articol." },
    { type: "choose", prompt: "I have ___ friends in this industry, only two.", options: ["a few", "few", "little"], answer: 1, why: "Few fără a înseamnă foarte puțini." },
    { type: "choose", prompt: "There isn't ___ space left in the van.", options: ["many", "much", "few"], answer: 1, why: "Space este nenumărabil." },
    { type: "transform", prompt: "I made a good progress this month. (corectează)", answer: ["I made good progress this month.", "I have made good progress this month."], why: "Progress este nenumărabil, deci fără a." },
    { type: "transform", prompt: "The weddings are expensive in June. (corectează, sens general)", answer: ["Weddings are expensive in June."], why: "Pluralul în sens general nu primește articol." },
    { type: "transform", prompt: "Give me an advice, please. (corectează)", answer: ["Give me some advice, please.", "Give me a piece of advice, please."], why: "Advice este nenumărabil." },
    { type: "translate", prompt: "Nunțile sunt scumpe vara.", answer: ["Weddings are expensive in summer.", "Weddings are expensive in the summer."], why: "Pluralul general nu primește articol." },
    { type: "translate", prompt: "Nu am primit niciun feedback.", answer: ["I haven't received any feedback.", "I have not received any feedback.", "I didn't receive any feedback."], why: "Feedback este nenumărabil, deci any feedback, fără plural." },
    { type: "translate", prompt: "Merg la muncă pe jos.", answer: ["I walk to work.", "I go to work on foot."], why: "To work este expresie fixă, fără articol." },
    { type: "translate", prompt: "Au fost mai puține reclamații.", answer: ["There were fewer complaints."], why: "Fewer se folosește cu numărabile." }
  ]
});

window.E360DATA.grammar.push({
  id: "phrasal-verbs",
  group: "verbe",
  level: "B2",
  title: "Phrasal verbs esențiale pentru B2",
  summary: "Verbe formate din verb plus particulă, cu sens propriu. Nu se traduc cuvânt cu cuvânt și se învață ca unități.",
  also: "Lista completă de 100 de phrasal verbs pentru B2 se găsește în temele de vocabular 25 și 26. Aici înveți regulile de folosire.",
  form: {
    affirmative: "verb + particulă (+ obiect)",
    affirmativeExample: "I called off the meeting. I called the meeting off.",
    negative: "auxiliarul obișnuit plus not",
    negativeExample: "We didn't call off the meeting.",
    question: "Auxiliarul obișnuit trece în față",
    questionExample: "Did you call off the meeting?",
    short: "Cu pronume, obiectul stă obligatoriu la mijloc",
    shortExample: "I called it off. (niciodată I called off it)",
    note: "Separabile: turn on, put off, pick up, fill in, call off, take back. Inseparabile: look after, get over, run into, come across, deal with, look for. Cu trei cuvinte, obiectul stă la final: look forward to, put up with, get on with."
  },
  uses: [
    { ro: "Phrasal verbs separabile: obiectul poate sta la mijloc sau la final", examples: [
      { en: "Please fill in the form. / Please fill the form in.", ro: "Te rog completează formularul.", highlight: "fill in" },
      { en: "They called off the event. / They called the event off.", ro: "Au anulat evenimentul.", highlight: "called off" } ] },
    { ro: "Cu pronume, obiectul stă obligatoriu între verb și particulă", examples: [
      { en: "They called it off yesterday.", ro: "L-au anulat ieri.", highlight: "called it off" },
      { en: "Can you turn it on, please?", ro: "Poți să îl pornești, te rog?", highlight: "turn it on" } ] },
    { ro: "Phrasal verbs inseparabile: obiectul stă întotdeauna după particulă", examples: [
      { en: "I ran into an old colleague at the fair.", ro: "M-am întâlnit din întâmplare cu un fost coleg la târg.", highlight: "ran into" },
      { en: "Who is looking after the guests?", ro: "Cine se ocupă de invitați?", highlight: "looking after" } ] },
    { ro: "Phrasal verbs din trei cuvinte, mereu inseparabile", examples: [
      { en: "I can't put up with this noise.", ro: "Nu suport zgomotul ăsta.", highlight: "put up with" },
      { en: "We are looking forward to the event.", ro: "Așteptăm cu nerăbdare evenimentul.", highlight: "looking forward to" } ] },
    { ro: "În scris formal se preferă echivalentul dintr-un singur cuvânt", examples: [
      { en: "We had to call off the event. / We had to cancel the event.", ro: "A trebuit să anulăm evenimentul.", highlight: "call off" },
      { en: "Please fill in this form. / Please complete this form.", ro: "Vă rog să completați acest formular.", highlight: "fill in" } ] }
  ],
  signalWords: ["call off", "put off", "turn down", "look after", "get on with", "run out of", "deal with", "come up with", "put up with", "look forward to"],
  compareWith: {
    id: "gerund-infinitive",
    leftTitle: "Phrasal verb, în vorbire",
    rightTitle: "Echivalent formal, în scris",
    rows: [
      { left: "call off", right: "cancel" },
      { left: "put off", right: "postpone" },
      { left: "find out", right: "discover" },
      { left: "turn down", right: "reject" },
      { left: "come up with", right: "propose, invent" }
    ]
  },
  mistakes: [
    { wrong: "I called off it.", right: "I called it off.", why: "Cu pronume, obiectul stă obligatoriu între verb și particulă." },
    { wrong: "I am looking forward to meet you.", right: "I am looking forward to meeting you.", why: "În look forward to, cuvântul to este prepoziție, deci urmează gerunziul." },
    { wrong: "I ran an old colleague into.", right: "I ran into an old colleague.", why: "Run into este inseparabil, obiectul nu poate sta la mijloc." },
    { wrong: "Who looks the guests after?", right: "Who looks after the guests?", why: "Look after este inseparabil." },
    { wrong: "We put up the noise with.", right: "We put up with the noise.", why: "Phrasal verbs din trei cuvinte nu se despart niciodată." },
    { wrong: "Please fill the form.", right: "Please fill in the form.", why: "Fără particulă, sensul se schimbă. Formularul se completează, deci fill in." }
  ],
  examples: [
    { en: "They called off the event because of the storm.", ro: "Au anulat evenimentul din cauza furtunii.", highlight: "called off" },
    { en: "We had to put the meeting off until Monday.", ro: "A trebuit să amânăm ședința pentru luni.", highlight: "put the meeting off" },
    { en: "Can you fill in this form, please?", ro: "Poți completa formularul ăsta, te rog?", highlight: "fill in" },
    { en: "The client turned down our first offer.", ro: "Clientul a respins prima noastră ofertă.", highlight: "turned down" },
    { en: "I need to find out who is responsible.", ro: "Trebuie să aflu cine e responsabil.", highlight: "find out" },
    { en: "We ran out of chairs halfway through.", ro: "Ni s-au terminat scaunele pe la jumătate.", highlight: "ran out of" },
    { en: "She came up with a much better idea.", ro: "A venit cu o idee mult mai bună.", highlight: "came up with" },
    { en: "I get on well with the technical team.", ro: "Mă înțeleg bine cu echipa tehnică.", highlight: "get on well with" },
    { en: "I ran into our old supplier at the fair.", ro: "M-am întâlnit din întâmplare cu vechiul furnizor la târg.", highlight: "ran into" },
    { en: "Who is going to deal with the complaints?", ro: "Cine se ocupă de reclamații?", highlight: "deal with" },
    { en: "I can't put up with these delays any longer.", ro: "Nu mai suport întârzierile astea.", highlight: "put up with" },
    { en: "Please turn the lights on before the guests arrive.", ro: "Te rog aprinde luminile înainte să vină invitații.", highlight: "turn the lights on" }
  ],
  exercises: [
    { type: "fill", prompt: "They called ___ the event because of the weather.", answer: ["off"], hint: "a anula", why: "Call off înseamnă a anula." },
    { type: "fill", prompt: "We had to put the meeting ___ until Monday.", answer: ["off"], hint: "a amâna", why: "Put off înseamnă a amâna." },
    { type: "fill", prompt: "The client turned ___ our offer.", answer: ["down"], hint: "a respinge", why: "Turn down înseamnă a respinge." },
    { type: "fill", prompt: "We ran ___ of chairs at eight o'clock.", answer: ["out"], hint: "a se termina", why: "Run out of înseamnă a rămâne fără." },
    { type: "fill", prompt: "She came ___ with a better idea.", answer: ["up"], hint: "a veni cu o idee", why: "Come up with înseamnă a propune o idee." },
    { type: "fill", prompt: "I get ___ well with my colleagues.", answer: ["on", "along"], hint: "a se înțelege", why: "Get on with sau get along with înseamnă a se înțelege cu cineva." },
    { type: "fill", prompt: "I can't put ___ with this noise.", answer: ["up"], hint: "a suporta", why: "Put up with înseamnă a suporta." },
    { type: "fill", prompt: "Please fill ___ the form before you leave.", answer: ["in", "out"], hint: "a completa", why: "Fill in sau fill out înseamnă a completa un formular." },
    { type: "choose", prompt: "They called ___ yesterday.", options: ["off it", "it off", "off"], answer: 1, why: "Cu pronume, obiectul stă între verb și particulă." },
    { type: "choose", prompt: "I am looking forward to ___ you.", options: ["meet", "meeting", "met"], answer: 1, why: "În look forward to, cuvântul to este prepoziție." },
    { type: "choose", prompt: "Who is going to ___ the complaints?", options: ["deal with", "deal", "deal about"], answer: 0, why: "Deal with înseamnă a se ocupa de ceva." },
    { type: "choose", prompt: "I ___ an old colleague at the conference.", options: ["ran into", "ran in", "ran on"], answer: 0, why: "Run into înseamnă a întâlni din întâmplare." },
    { type: "choose", prompt: "Can you ___ the projector?", options: ["turn on", "turn in", "turn up"], answer: 0, why: "Turn on înseamnă a porni un aparat." },
    { type: "choose", prompt: "We need to ___ what went wrong.", options: ["find out", "find off", "find up"], answer: 0, why: "Find out înseamnă a afla." },
    { type: "transform", prompt: "They cancelled the event. (folosește call off)", answer: ["They called off the event.", "They called the event off."], why: "Call off este separabil, deci ambele ordini sunt corecte." },
    { type: "transform", prompt: "They called off the event. (înlocuiește evenimentul cu un pronume)", answer: ["They called it off."], why: "Cu pronume, obiectul stă obligatoriu la mijloc." },
    { type: "transform", prompt: "We postponed the meeting. (folosește put off)", answer: ["We put off the meeting.", "We put the meeting off."], why: "Put off este separabil." },
    { type: "transform", prompt: "I met an old colleague by chance. (folosește run into)", answer: ["I ran into an old colleague."], why: "Run into este inseparabil." },
    { type: "translate", prompt: "Au anulat evenimentul.", answer: ["They called off the event.", "They called the event off.", "They cancelled the event."], why: "Call off înseamnă a anula." },
    { type: "translate", prompt: "Nu mai suport întârzierile astea.", answer: ["I can't put up with these delays.", "I cannot put up with these delays.", "I can't put up with these delays any more."], why: "Put up with înseamnă a suporta." },
    { type: "translate", prompt: "Ni s-au terminat scaunele.", answer: ["We ran out of chairs.", "We have run out of chairs."], why: "Run out of înseamnă a rămâne fără." },
    { type: "translate", prompt: "Clientul a respins oferta.", answer: ["The client turned down the offer.", "The client turned the offer down.", "The client rejected the offer."], why: "Turn down înseamnă a respinge." },
    { type: "translate", prompt: "Cine se ocupă de invitați?", answer: ["Who is looking after the guests?", "Who's looking after the guests?", "Who is taking care of the guests?"], why: "Look after înseamnă a avea grijă de cineva." },
    { type: "translate", prompt: "Trebuie să aflu cine a greșit.", answer: ["I need to find out who made the mistake.", "I have to find out who made the mistake."], why: "Find out înseamnă a afla." }
  ],
  finalTest: [
    { type: "fill", prompt: "We need to sort ___ this problem today.", answer: ["out"], why: "Sort out înseamnă a rezolva." },
    { type: "fill", prompt: "Don't give ___, you are almost there.", answer: ["up"], why: "Give up înseamnă a renunța." },
    { type: "fill", prompt: "I will look ___ the details and call you back.", answer: ["into", "up"], why: "Look into înseamnă a cerceta, look up înseamnă a căuta o informație." },
    { type: "choose", prompt: "Please turn ___ before you leave.", options: ["off them", "them off", "off"], answer: 1, why: "Cu pronume, obiectul stă la mijloc." },
    { type: "choose", prompt: "She ___ a great solution.", options: ["came up with", "came up", "came with"], answer: 0, why: "Come up with înseamnă a propune o idee." },
    { type: "choose", prompt: "I ___ my boss very well.", options: ["get on with", "get with", "get on"], answer: 0, why: "Get on with cineva înseamnă a te înțelege cu el." },
    { type: "choose", prompt: "The meeting was ___ until next week.", options: ["put off", "put on", "put up"], answer: 0, why: "Put off înseamnă a amâna." },
    { type: "choose", prompt: "Can you ___ the children this evening?", options: ["look for", "look after", "look up"], answer: 1, why: "Look after înseamnă a avea grijă de cineva." },
    { type: "transform", prompt: "I discovered the truth. (folosește find out)", answer: ["I found out the truth.", "I found the truth out."], why: "Find out înseamnă a afla." },
    { type: "transform", prompt: "We rejected their proposal. (folosește turn down)", answer: ["We turned down their proposal.", "We turned their proposal down."], why: "Turn down înseamnă a respinge." },
    { type: "transform", prompt: "Turn off the lights. (înlocuiește luminile cu un pronume)", answer: ["Turn them off."], why: "Cu pronume, obiectul stă la mijloc." },
    { type: "translate", prompt: "Am amânat ședința.", answer: ["We put off the meeting.", "We put the meeting off.", "We postponed the meeting."], why: "Put off înseamnă a amâna." },
    { type: "translate", prompt: "Mă înțeleg bine cu ei.", answer: ["I get on well with them.", "I get along well with them."], why: "Get on with înseamnă a te înțelege cu cineva." },
    { type: "translate", prompt: "Aștept cu nerăbdare să te văd.", answer: ["I am looking forward to seeing you.", "I'm looking forward to seeing you.", "I look forward to seeing you."], why: "Look forward to cere gerunziul." },
    { type: "translate", prompt: "Poți să pornești proiectorul?", answer: ["Can you turn on the projector?", "Can you turn the projector on?", "Could you turn on the projector?"], why: "Turn on este separabil." }
  ]
});
