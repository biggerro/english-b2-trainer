/* vocab-index.js - the 30 vocabulary themes: order, titles, files.
   The words themselves live in data/vocab/<file>. */

window.E360DATA = window.E360DATA || {};
window.E360DATA.vocabIndex = [
  { num: 1,  id: "work",          title: "Muncă și business",              titleEn: "Work and business",           file: "01-work.js",            desc: "Locul de muncă, cariera, ședințele, clienții și contractele." },
  { num: 2,  id: "education",     title: "Educație",                        titleEn: "Education",                   file: "02-education.js",       desc: "Școală, facultate, examene, cursuri și învățare." },
  { num: 3,  id: "technology",    title: "Tehnologie",                      titleEn: "Technology",                  file: "03-technology.js",      desc: "Calculatoare, internet, aplicații, date și dispozitive." },
  { num: 4,  id: "money",         title: "Bani și finanțe",                 titleEn: "Money and finance",           file: "04-money.js",           desc: "Prețuri, plăți, economii, credite, taxe și investiții." },
  { num: 5,  id: "health",        title: "Sănătate și corp",                titleEn: "Health and body",             file: "05-health.js",          desc: "Simptome, tratamente, spital, formă fizică și odihnă." },
  { num: 6,  id: "food",          title: "Mâncare și gătit",                titleEn: "Food and cooking",            file: "06-food.js",            desc: "Ingrediente, preparare, restaurant, gusturi și diete." },
  { num: 7,  id: "travel",        title: "Călătorii și transport",          titleEn: "Travel and transport",        file: "07-travel.js",          desc: "Zboruri, cazare, bagaje, drumuri și orientare." },
  { num: 8,  id: "environment",   title: "Mediu și natură",                 titleEn: "Environment and nature",      file: "08-environment.js",     desc: "Climă, poluare, reciclare, energie și peisaj." },
  { num: 9,  id: "media",         title: "Media și știri",                  titleEn: "Media and news",              file: "09-media.js",           desc: "Presă, televiziune, rețele sociale, reclame și publicitate." },
  { num: 10, id: "relationships", title: "Relații și familie",              titleEn: "Relationships and family",    file: "10-relationships.js",   desc: "Prieteni, cuplu, familie, întâlniri și conflicte." },
  { num: 11, id: "feelings",      title: "Emoții și personalitate",         titleEn: "Feelings and personality",    file: "11-feelings.js",        desc: "Stări, reacții, trăsături de caracter și atitudini." },
  { num: 12, id: "home",          title: "Casă și locuire",                 titleEn: "Home and living",             file: "12-home.js",            desc: "Apartament, chirie, mobilă, reparații și vecini." },
  { num: 13, id: "shopping",      title: "Cumpărături și servicii",         titleEn: "Shopping and services",       file: "13-shopping.js",        desc: "Magazine, comenzi, retur, garanție și reclamații." },
  { num: 14, id: "law",           title: "Lege și infracțiuni",             titleEn: "Law and crime",               file: "14-law.js",             desc: "Poliție, tribunal, contracte, drepturi și pedepse." },
  { num: 15, id: "politics",      title: "Politică și societate",           titleEn: "Politics and society",        file: "15-politics.js",        desc: "Alegeri, guvern, drepturi, inegalitate și dezbateri publice." },
  { num: 16, id: "science",       title: "Știință",                         titleEn: "Science",                     file: "16-science.js",         desc: "Cercetare, experimente, descoperiri, dovezi și teorii." },
  { num: 17, id: "arts",          title: "Artă și cultură",                 titleEn: "Arts and culture",            file: "17-arts.js",            desc: "Muzică, film, teatru, literatură, expoziții și spectacole." },
  { num: 18, id: "sport",         title: "Sport și mișcare",                titleEn: "Sport and fitness",           file: "18-sport.js",           desc: "Antrenamente, competiții, echipe, rezultate și accidentări." },
  { num: 19, id: "places",        title: "Orașe și zone rurale",            titleEn: "Cities and countryside",      file: "19-places.js",          desc: "Cartiere, trafic, clădiri, sate, peisaje și infrastructură." },
  { num: 20, id: "communication", title: "Comunicare și opinii",            titleEn: "Communication and opinions",   file: "20-communication.js",   desc: "Discuții, argumente, acord, dezacord și negociere." },
  { num: 21, id: "time",          title: "Timp și schimbare",               titleEn: "Time and change",             file: "21-time.js",            desc: "Planificare, termene, etape, tendințe și transformări." },
  { num: 22, id: "problems",      title: "Probleme și soluții",             titleEn: "Problems and solutions",      file: "22-problems.js",        desc: "Dificultăți, riscuri, cauze, remedii și decizii." },
  { num: 23, id: "describing",    title: "Descrieri: adjective",            titleEn: "Describing things",           file: "23-describing.js",      desc: "Adjective de nivel B2 pentru oameni, obiecte și situații." },
  { num: 24, id: "linking",       title: "Conectori și marcatori",          titleEn: "Linking words",               file: "24-linking.js",         desc: "Cuvinte de legătură pentru scris și vorbit organizat." },
  { num: 25, id: "phrasal1",      title: "Phrasal verbs 1",                 titleEn: "Phrasal verbs 1",             file: "25-phrasal-verbs-1.js", desc: "Primele 50 de phrasal verbs esențiale pentru B2." },
  { num: 26, id: "phrasal2",      title: "Phrasal verbs 2",                 titleEn: "Phrasal verbs 2",             file: "26-phrasal-verbs-2.js", desc: "Următoarele 50 de phrasal verbs esențiale pentru B2." },
  { num: 27, id: "collocations",  title: "Colocații cu make, do, take, get, have", titleEn: "Common collocations",  file: "27-collocations.js",    desc: "Combinațiile fixe care sună natural în engleză." },
  { num: 28, id: "idioms",        title: "Expresii idiomatice B2",          titleEn: "Idioms for B2",               file: "28-idioms.js",          desc: "Expresii care nu se traduc cuvânt cu cuvânt." },
  { num: 29, id: "academic",      title: "Vocabular academic și formal",     titleEn: "Academic and formal words",   file: "29-academic.js",        desc: "Cuvinte pentru rapoarte, emailuri formale și prezentări." },
  { num: 30, id: "events",        title: "Evenimente și marketing",         titleEn: "Events and marketing",        file: "30-events.js",          desc: "Vocabularul specific organizării de evenimente și promovării." }
];
