# PROGRESS.md

Aplicatie: English B2 Trainer. Interfata in romana, continut englez cu traducere romana.
Locatie: `~/Desktop/english-b2-trainer`.

- Aplicatia online (PWA): https://biggerro.github.io/english-b2-trainer/
- Depozit GitHub: https://github.com/biggerro/english-b2-trainer (public, contul biggerro)

## Stare curenta: toate cele 8 faze sunt terminate

| Faza | Continut | Stare |
|---|---|---|
| 0 | Schelet: index.html, style.css, router pe hash, meniu lateral si drawer, pagina Acasa, pagina Ghid | gata |
| 1 | ui.js, exercises.js, storage.js (localStorage + IndexedDB + export/import/merge), caiet de greseli, notite | gata |
| 2 | Toate cele 13 timpuri verbale | gata |
| 3 | Cele 12 structuri de gramatica B2 | gata |
| 4 | srs.js, flashcards, teste de tema, cautare, cuvinte marcate | gata |
| 5 | Toate cele 30 de teme de vocabular, 3000 de intrari | gata |
| 6 | manifest.json, sw.js, iconite, banner iOS, buton de instalare, publicat pe GitHub Pages | gata, verificat online |
| 7 | diagnostic.js, mock.js, traseu de 12 saptamani, panou complet, mod intunecat | gata |

## Cifre

- 13 timpuri verbale + 12 structuri B2 = 25 de lectii.
- 975 de exercitii in lectii (24 de antrenament si 15 in testul final la fiecare lectie).
- 3000 de intrari de vocabular, 100 pe fiecare din cele 30 de teme, zero duplicate.
- 40 de intrebari in testul de diagnostic (25 gramatica, 15 vocabular).
- 2 variante de simulare B2, 60 de intrebari fiecare, 45 de minute.
- Font Inter inclus local, subset latin si latin-ext (pentru diacritice).
- 62 de fisiere in lista de precache din `sw.js`.

## Verificari trecute

- `#/dev/verificare` este complet verde: numar de lectii, exercitii pe lectie, intrari pe tema,
  duplicate, campuri lipsa si fisierele din `data/` fata de lista din `sw.js`.
- Toate rutele se deschid fara eroare: `#/`, `#/ghid`, `#/timpuri`, `#/gramatica`, `#/vocabular`,
  `#/repeta`, `#/marcate`, `#/greseli`, `#/diagnostic`, `#/simulare`, `#/dev/verificare`,
  paginile de lectie si de tema.
- Testat end to end: test final de lectie, salvarea scorului, intrarea greselilor in caiet,
  iesirea din caiet dupa doua raspunsuri corecte consecutive, notite, cutii Leitner, cuvinte
  scadente, generarea testului de tema, export si import cu imbinare, testul de diagnostic,
  simularea cu cronometru, cautarea globala, modul intunecat.

## Verificare online (11.09.2026)

- Publicat pe GitHub Pages; toate fisierele raspund cu 200.
- Service worker activ, cache `e360-b2-v1` cu toate cele 62 de fisiere, deci aplicatia merge
  offline dupa prima deschidere.
- `#/dev/verificare` complet verde si pe varianta online.

## Ce ramane de verificat de utilizator (checkpoint Faza 6)

1. **Pe laptop, din folder**: deschide `index.html` in Chrome, Edge si Firefox.
2. **Instalare pe telefon**: deschide https://biggerro.github.io/english-b2-trainer/ si
   - iPhone, in Safari: butonul de partajare, apoi "Add to Home Screen";
   - Android, in Chrome: meniul cu trei puncte, apoi "Install app".
3. **Test offline**: dupa prima deschidere pe telefon, modul avion, apoi deschide aplicatia de pe
   ecranul principal si verifica o lectie si o tema.
4. **Mutarea progresului**: Panou, "Exporta progresul" pe telefon si "Importa un backup" pe laptop.

## Actualizari ulterioare

Dupa orice modificare: creste versiunea din `sw.js` (`e360-b2-v2`), apoi
`git add -A && git commit -m "..." && git push`. GitHub Pages republica in circa un minut, iar
telefonul preia versiunea noua la urmatoarea deschidere cu internet.

## Decizii luate in lipsa unui raspuns (sectiunea 14 din GOAL.md)

1. **Pronuntie**: engleza britanica (en-GB), asa cum cere sectiunea 7. Se poate schimba pe
   en-US din Panou, sectiunea Setari.
2. **Tema 30, evenimente si marketing**: construita de la zero, cu vocabular de organizare de
   evenimente, cabina foto, furnizori, contracte si promovare. Se poate completa oricand.
3. **GitHub**: publicat pe contul existent biggerro. Commit-urile folosesc adresa noreply de la
   GitHub, ca adresa de email personala sa nu apara public.
4. **Sectiunea "Writing B2"** (email formal, eseu, raport): nu a fost inclusa, GOAL.md o pune
   intr-o faza ulterioara. Vocabularul necesar exista deja in tema 29.

## Reguli de continut respectate

- Diacritice in tot continutul de invatare (traduceri, explicatii, motivatia de la exercitii).
  Textul de interfata este fara diacritice, ca in GOAL.md.
- Fara emoji si fara simboluri decorative.
- Fiecare exercitiu are `why`. Raspunsurile accepta forme contrase si necontrase, ignora
  majusculele, spatiile multiple, punctuatia finala si apostroful curbat, si accepta si varianta
  scrisa fara apostrof (havent, im, youre).
- Exemplele sunt propozitii de zi cu zi de la birou, de la evenimente si din calatorii.

## Daca adaugi un fisier nou in data/

1. Adauga tag-ul `<script>` in `index.html`.
2. Adauga fisierul in `self.E360_PRECACHE` din `sw.js`.
3. Creste versiunea cache-ului din `sw.js`, de exemplu `e360-b2-v2`.
4. Verifica `#/dev/verificare`.
