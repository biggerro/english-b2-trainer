# CLAUDE.md - reguli obligatorii pentru acest proiect

Aplicatie statica pentru invatarea limbii engleze pana la nivel B2.
Interfata in romana, continut englez + traducere romana.

## 1. Reguli tehnice (GOAL sectiunea 3)

- HTML5 + CSS3 + JavaScript vanilla (ES6+). Fara framework, fara npm, fara bundler, fara Node in workflow.
- Datele (lectii, vocabular, exercitii) stau in fisiere `.js` sub `data/` care atribuie obiecte pe
  `window.E360DATA` si sunt incarcate cu tag-uri `<script>`.
  NU se foloseste `fetch()` pentru date locale; nu functioneaza pe `file://`.
- Routing pe hash: `#/timpuri/present-perfect`, `#/vocabular/work`.
- Responsive, mobile-first, latime minima 360px. Butoane de minim 44px inaltime.
- Font Inter, inclus local in `assets/fonts/`, fallback `system-ui`.
- Fara emoji si fara simboluri Unicode decorative in cod sau in interfata. Doar text simplu.
- Un singur `index.html`, un singur `css/style.css`, JS impartit in module sub `js/`.
- Cod si comentarii in engleza. Textul de interfata in romana. Continutul de invatare: engleza plus
  traducere romana cu diacritice.
- Toate caile sunt relative (`./css/style.css`, niciodata `/css/style.css`), altfel nu merg si pe
  `file://` si pe GitHub Pages.
- Service worker-ul se inregistreaza doar daca `location.protocol !== 'file:'`.

## 2. Salvarea datelor (GOAL sectiunea 4)

- Tot ce face utilizatorul se salveaza in `localStorage`, sub o singura cheie `e360-b2-state`,
  obiect JSON versionat cu `schemaVersion: 1`.
- Se salveaza: scoruri pe lectie / test / tema, starea Leitner a fiecarui cuvant (cutie + data
  urmatoarei revizuiri), caietul de greseli, notitele personale, cuvintele marcate, testul de
  diagnostic si simularile, cu istoric.
- Caietul de greseli: fiecare raspuns gresit intra automat, cu raspunsul dat, raspunsul corect si
  explicatia. Un element iese din caiet dupa 2 raspunsuri corecte consecutive.
- Notitele personale se salveaza la fiecare tastare, cu debounce de 500 ms.
- Copie a starii si in `IndexedDB`, aceeasi structura, ca rezerva daca `localStorage` este golit.
  La pornire se foloseste cea mai recenta dintre cele doua.
- Export: buton in dashboard care descarca `e360-b2-backup-YYYY-MM-DD.json`. Pe telefon se
  foloseste Web Share API cand exista, altfel descarcare clasica.
- Import: incarca un JSON si il imbina cu starea curenta (pastreaza scorul mai mare, cutia Leitner
  mai avansata, notita mai recenta dupa data).
- Pe iPhone, Safari poate sterge `localStorage` dupa 7 zile de neutilizare daca aplicatia NU este
  instalata pe ecranul principal. Aplicatia arata un banner pe iOS pana la instalare.

## 3. Verificare automata a continutului (GOAL sectiunea 10)

Pagina ascunsa `#/dev/verificare` afiseaza:
- numarul de lectii, numarul de exercitii pe lectie, lectiile sub 20 de exercitii (rosu);
- numarul de intrari de vocabular pe tema si in total; temele sub 80 de intrari (rosu);
- duplicate in vocabular (acelasi `en` in doua teme sau acelasi `id`);
- intrari cu campuri lipsa (`ro`, `example.en`, `example.ro`, `why` la exercitii);
- fisiere din `data/` care lipsesc din lista din `sw.js`.

Pagina trebuie sa fie complet verde inainte ca o faza sa fie considerata terminata.

## 4. Reguli de calitate a continutului (GOAL sectiunea 12)

- Traducerile in romana sunt naturale, nu cuvant cu cuvant. Diacritice obligatorii (a-breve, a-circumflex, i-circumflex, s-virgula, t-virgula).
- Exemplele sunt propozitii pe care un adult chiar le-ar spune la birou, in calatorie, cu prietenii.
  Fara propozitii de manual gen "The cat is on the table".
- Fiecare exercitiu `fill`, `transform` si `translate` accepta toate variantele corecte (forme
  contrase si necontrase, `I have` / `I've`).
- Verificarea raspunsului ignora majusculele, spatiile multiple, punctuatia finala si apostroful
  drept fata de cel curbat.
- Fiecare exercitiu are `why`. La raspuns gresit se arata raspunsul corect si explicatia.
- Continutul se scrie in fisierele de date, niciodata direct in HTML.

## 5. Cand adaugi un fisier nou in `data/`

1. Adauga tag-ul `<script>` in `index.html`, in ordinea corecta.
2. Adauga fisierul in lista `PRECACHE` din `sw.js`.
3. Creste versiunea cache-ului din `sw.js` (`e360-b2-vN`).
4. Verifica `#/dev/verificare`.
