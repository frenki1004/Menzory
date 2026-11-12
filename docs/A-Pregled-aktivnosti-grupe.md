# A. Pregled aktivnosti grupe

**Cilj:** Prikazati kako je tim organizirao projekt, raspodijelio rad, reagirao na važne probleme i pridonio rezultatu. Zapisi trebaju opisivati ishode, a ne samo navoditi da je sastanak održan ili da se o nekoj temi raspravljalo.

## A.1 Evidencija sastanaka

**Cilj:** Voditi kratak zapis projektnih sastanaka i tjedne koordinacije: tko je sudjelovao, što je odlučeno i koja je radnja uslijedila. Raspravu koja nije dovela do odluke zabilježite samo ako je važno pitanje ostalo otvoreno.

**Kratice članova tima:**
- **FA** = Frane Andrić (koordinator tima)
- **LB** = Lovro Blagić
- **DK** = David Kokorović
- **EK** = Enzo Kutić
- **BM** = Borna Mužina Momčilović
- **FP** = Fabijan Pitlović
- **LT** = Luka Taslak

| Datum i sudionici | Glavna tema | Donesena odluka ili zadatak | Poveznica na zadatak ili rezultat, ako postoji |
| --- | --- | --- | --- |
| 16. 10. 2026.; FA, LB, DK, EK, BM, FP, LT (asistentica Iva Sović) | Uvodne laboratorijske vježbe (Tjedan 2) | Odabran voditelj/koordinator (FA), dodijeljena tema *SpasiZalogaj* (Grupa 7.2). Uspostavljen repozitorij `Menzory`, dodani suradnici i asistentica. | Zadaci [#10](https://github.com/frenki1004/Menzory/issues/10) i [#4](https://github.com/frenki1004/Menzory/issues/4). |
| 23. 10. 2026.; FA, LB, DK, EK, BM, FP, LT | Tjedna koordinacija: raspodjela zahtjeva i opsega (Tjedan 3) | Definiran opseg i granice sustava. Podijeljeni zadaci: FP čisti predložak i piše opseg; LB, BM i EK razrađuju funkcijske i nefunkcijske zahtjeve; LT priprema obrasce uporabe. | PR [#18](https://github.com/frenki1004/Menzory/pull/18), PR [#19](https://github.com/frenki1004/Menzory/pull/19), PR [#20](https://github.com/frenki1004/Menzory/pull/20). |
| 30. 10. 2026.; FA, LB, DK, EK, BM, FP, LT (asistentica Iva Sović) | M0: Prezentacija početnih zahtjeva i obrazaca uporabe (Tjedan 4) | Predstavljena prva verzija zahtjeva i UC dijagrama. Asistentica dala smjernice: FZ standardizirati na kratak opis i numerirane korake, pročistiti UC dijagrame od detalja koji pripadaju tekstu. | Issue [#2](https://github.com/frenki1004/Menzory/issues/2), Issue [#3](https://github.com/frenki1004/Menzory/issues/3). |
| 5. 11. 2026.; FA, LB, DK, EK, BM, FP, LT (asistentica Iva Sović) | Konzultacije s asistenticom o arhitekturi i doradama (Tjedan 5) | Dogovorene službene upute za predaju M1: dokumentacija do 4.3 (uključujući 4.1, 4.3.1 i 4.3.2), ali **BEZ poglavlja 4.2** (dijagram komponenata sluša se kasnije). UC dijagrame presložiti u horizontalni logički slijed s lijeva na desno. Odabran tehnološki stog: Next.js + Prisma + Neon PostgreSQL + Auth.js. | PR [#24](https://github.com/frenki1004/Menzory/pull/24), PR [#25](https://github.com/frenki1004/Menzory/pull/25), PR [#26](https://github.com/frenki1004/Menzory/pull/26), Issue [#5](https://github.com/frenki1004/Menzory/issues/5), Issue [#7](https://github.com/frenki1004/Menzory/issues/7). |

Za svaki relevantan sastanak ili zapis tjedne koordinacije upišite jedan sažet redak. Dodijeljeni zadatak treba imati odgovornu osobu; za neriješeno pitanje treba navesti tko će ga dalje obraditi. Sam naslov sastanka ne pokazuje što se promijenilo. U ovu evidenciju nemojte kopirati cijeli popis issuea ni prijepis razgovora.

<details>
<summary><strong>Primjer evidencije sastanaka (CrisisMap)</strong></summary>

**Primjer — CrisisMap:**

**Kratice članova tima:** AK = Ana Kovač; LM = Luka Marić; EP = Ema Petrović; NK = Nika Kralj.

| Datum i sudionici | Glavna tema | Odluka, radnja ili otvoreno pitanje | Poveznica na zadatak ili nastali rezultat, ako postoji |
| --- | --- | --- | --- |
| 15. 11. 2025.; AK, LM, EP | Lokacija kada je pristup preglednika odbijen | Dodati ručni odabir položaja na karti u obrazac za prijavu. AK obrađuje obrazac; LM provjerava valjanost lokacije. | Zadataka #21 i #23. |
| 22. 11. 2025.; AK, EP | Usklađivanje formata lokacijskih podataka | klijentski dio i poslužiteljski API koriste neusklađene formate koordinata. EP će uskladiti format zahtjeva i demonstrira spremanje na sljedećem pregledu. | Zadatak #25. |

**Ishod i odgovornost:** Zapisi jasno definiraju tko je odgovoran za koji dio posla i koji je provjerljivi rezultat dogovoren. npr Rečenica „Raspravljali smo o obradi lokacije” prikrila bi je li se itko obvezao na promjenu. Ovi redci navode odluku ili otvorenu radnju, odgovornu osobu i rezultat koji se može pregledati.

</details>

## A.2 Plan rada

**Cilj:** Prikazati planirani redoslijed rada i odgovornosti u timu. Prikažite projektne tjedne ili druga kratka razdoblja koja tim koristi, uključujući pripremu za formalne provjere.

**Trenutačni plan:** Plan se prati kroz [GitHub Issues](https://github.com/frenki1004/Menzory/issues) i Pull Requestove u repozitoriju. Za ažurnost plana i koordinaciju zadužen je **FA**.

| Razdoblje/Tjedan | Glavni planirani rad | Odgovorni članovi | Poveznica na zadatke |
| --- | --- | --- | --- |
| Projektni tjedan 1–2 | Formiranje tima, odabir teme, uspostava repozitorija i čišćenje predloška | FA, FP, svi | Issue [#4](https://github.com/frenki1004/Menzory/issues/4), PR [#19](https://github.com/frenki1004/Menzory/pull/19) |
| Projektni tjedan 3 | Definiranje opsega, dionika, početnih funkcijskih i nefunkcijskih zahtjeva | LB, BM, EK, FP | Issue [#1](https://github.com/frenki1004/Menzory/issues/1), Issue [#2](https://github.com/frenki1004/Menzory/issues/2), PR [#18](https://github.com/frenki1004/Menzory/pull/18) |
| Projektni tjedan 4 | Razrada ključnih obrazaca uporabe (UC-01 do UC-07) i priprema za M0 | LT, FP, EK | Issue [#3](https://github.com/frenki1004/Menzory/issues/3), PR [#20](https://github.com/frenki1004/Menzory/pull/20), PR [#22](https://github.com/frenki1004/Menzory/pull/22) |
| Projektni tjedan 5 | Dorada FZ/NFZ po uputama asistentice, pojednostavljenje UC dijagrama u horizontalni tok, oblikovanje arhitekture (ADR), ERD i dijagram razreda | BM, LB, DK, LT, FA | Issue [#2](https://github.com/frenki1004/Menzory/issues/2), Issue [#7](https://github.com/frenki1004/Menzory/issues/7), Issue [#8](https://github.com/frenki1004/Menzory/issues/8), Issue [#9](https://github.com/frenki1004/Menzory/issues/9), PR [#24](https://github.com/frenki1004/Menzory/pull/24), PR [#25](https://github.com/frenki1004/Menzory/pull/25), PR [#26](https://github.com/frenki1004/Menzory/pull/26), PR [#27](https://github.com/frenki1004/Menzory/pull/27) |
| Projektni tjedan 6 | Postavljanje monolitnog Next.js 15 kostura, Auth.js (OAuth 2.0 Google prijava), implementacija domenskih funkcija za ponude i rezervacije s kodom | FP, FA, EK | Issue [#10](https://github.com/frenki1004/Menzory/issues/10), Issue [#11](https://github.com/frenki1004/Menzory/issues/11), Issue [#12](https://github.com/frenki1004/Menzory/issues/12), PR [#28](https://github.com/frenki1004/Menzory/pull/28), PR [#29](https://github.com/frenki1004/Menzory/pull/29) |
| Projektni tjedan 7 | Osnovna ispitivanja, javno postavljanje na Vercel, izvoz dokumentacije u PDF i predaja prvog ciklusa (M1) | FA, FP, svi | Issue [#13](https://github.com/frenki1004/Menzory/issues/13), Issue [#14](https://github.com/frenki1004/Menzory/issues/14), Issue [#15](https://github.com/frenki1004/Menzory/issues/15), Issue [#16](https://github.com/frenki1004/Menzory/issues/16), PR [#30](https://github.com/frenki1004/Menzory/pull/30) |

Ako koristite tablicu, plan vodite na korisnoj tjednoj razini i ažurirajte ga kada se prioriteti promijene. Kratice članova tima definirajte u A.1 i ovdje ih primjenjujte dosljedno; ako dva člana imaju iste inicijale, proširite kraticu. Plan nije dokaz da je planirani rad dovršen (to dokazuje kod i dokumentacija).

<details>
<summary><strong>Primjer plana rada</strong></summary>

**Primjer — CrisisMap:** Plan rada obuhvaća razvoj prijava, karte i postavljanja aplikacije. Za svako razdoblje navedeni su glavni zadaci i odgovorni članovi.

| Razdoblje | Glavni planirani rad | Odgovorni članovi | Poveznica na zadatke/opis |
| --- | --- | --- | --- |
| Projektni tjedan 6 | Obrazac za prijavu i provjera valjanosti lokacije | AK, LM | Zadataka #21 i #23. |
| Projektni tjedan 7 | Povezivanje obrasca s API-jem za prijave | EP | Zadatak #25. |

**Čitanje plana:** Kratice štede prostor u sažetom planu; njihove definicije s početka A.1 vrijede u cijelom ovom primjeru. Kada rad kasni, ažurirajte stvarni zadatak i očekivanje u planu; nemojte tvrditi da je nedovršena funkcionalnost završena samo zato što je predviđeni tjedan prošao.

</details>

## A.3 Aktivnosti i doprinosi članova

**Cilj:** Prikazati koji su članovi radili na važnim projektnim aktivnostima i približan trud koji prijavljuju. Uz implementaciju uključite oblikovanje, dokumentaciju, integraciju, ispitivanje i postavljanje.

| Aktivnost ili rezultat | Član | Prijavljeni sati | Reprezentativni rezultat ili poveznica |
| --- | --- | --- | --- |
| Koordinacija tima, verifikacija dokumentacije, revizija UC dijagrama i integracija M1 isporuke | FA | 20 | PR [#27](https://github.com/frenki1004/Menzory/pull/27), Issue [#17](https://github.com/frenki1004/Menzory/issues/17), upravljanje GitHub izdanjima i granama |
| Razrada početnih funkcijskih zahtjeva i iterativno pročišćavanje kriterija prihvaćanja | LB | 19 | PR [#18](https://github.com/frenki1004/Menzory/pull/18), PR [#21](https://github.com/frenki1004/Menzory/pull/21), PR [#23](https://github.com/frenki1004/Menzory/pull/23), Issue [#2](https://github.com/frenki1004/Menzory/issues/2) |
| Usklađivanje FZ/NFZ po uputama asistentice (kratki opis, numerirani kriteriji), dionici, pretpostavke i matrica sljedivosti | BM | 22 | PR [#24](https://github.com/frenki1004/Menzory/pull/24), PR [#25](https://github.com/frenki1004/Menzory/pull/25), cjeline 2.1–2.7 u `docs/2-Analiza-zahtjeva.md` |
| Arhitekturne odluke (ADR-01 do ADR-03), relacijski model podataka (ERD) i domenski dijagram razreda (CD) | DK | 21 | PR [#26](https://github.com/frenki1004/Menzory/pull/26), Issue [#7](https://github.com/frenki1004/Menzory/issues/7), Issue [#8](https://github.com/frenki1004/Menzory/issues/8), Issue [#9](https://github.com/frenki1004/Menzory/issues/9) |
| Uspostava repozitorija, specifikacije UC-01 do UC-07, Next.js fullstack kostur, domenske funkcije za ponude/rezervacije s kodom | FP | 24 | PR [#19](https://github.com/frenki1004/Menzory/pull/19), PR [#20](https://github.com/frenki1004/Menzory/pull/20), PR [#28](https://github.com/frenki1004/Menzory/pull/28), PR [#29](https://github.com/frenki1004/Menzory/pull/29), PR [#30](https://github.com/frenki1004/Menzory/pull/30) |
| Izrada i refaktoriranje Use Case dijagrama prema logičkom horizontalnom toku (rezervacije i donacije) | LT | 18 | PR [#27](https://github.com/frenki1004/Menzory/pull/27), PlantUML izvori `docs/puml/3-*.puml` |
| Razrada pomoćnih UC dijagrama, usklađivanje nefunkcijskih zahtjeva i priprema osnovnih automatiziranih ispitivanja | EK | 18 | PR [#22](https://github.com/frenki1004/Menzory/pull/22), `tests/health.test.js`, `tests/offer-validation.test.js`, Issue [#14](https://github.com/frenki1004/Menzory/issues/14) |

Koristite aktivnosti specifične za projekt umjesto obaveznog retka za svako poglavlje dokumentacije ili svaki UML dijagram. Tim treba dosljedno bilježiti sate i izbjegavati dvostruko brojanje zajedničkog rada; reprezentativni rezultat objašnjava što je prijavljeni trud proizveo. Sati su samoprijavljena procjena uloženog rada, a ne mjera kvalitete niti zamjena za pregled koda i artefakata.

<details>
<summary><strong>Primjer aktivnosti i rezultata rada</strong></summary>

**Primjer — CrisisMap:** Tablica razlikuje implementaciju, integraciju i dokumentaciju te svaku aktivnost povezuje s rezultatom.

| Aktivnost ili rezultat | Član | Prijavljeni sati | Reprezentativni rezultat ili poveznica |
| --- | --- | --- | --- |
| Ručni unos položaja na karti | AK | 8 | Zadatak #21; promjena klijentskog dijela. |
| Provjera valjanosti i trajna pohrana prijave | LM | 10 | Zadatak #23; promjena pozadinskog sustava i ispitivanje. |
| Integracija klijenta i API-ja te javno postavljanje | EP | 7 | Zadatak #25; konfiguracija u `render.yaml` i `dist/` |
| Obrazac uporabe za podnošenje prijave i provjera odbijenog dopuštenja | NK | 5 | Završene izmjene UC-002 i ispitivanje ST-03. |

**Trud i rezultat:** Završni stupac omogućuje raspravu o doprinosu bez tretiranja velikog broja sati kao dokaza isporuke. Tim može prijaviti stvarno dugotrajan, još neriješen problem integracije kao obavljen rad i iskreno opisati njegov ishod.

</details>

## A.4 Pregled promjena u repozitoriju

**Cilj:** Prikazati kada su promjene napravljene u repozitoriju i tko ih je napravio, uz napomenu da sam broj zapisa promjena ne mjeri kvalitetu doprinosa.

**Prikaz aktivnosti repozitorija:** Aktivnost tima i povijest promjena dostupni su na javnom GitHub repozitoriju u prikazu [GitHub Contributors](https://github.com/frenki1004/Menzory/graphs/contributors) te na popisu zatvorenih [Pull Requestova](https://github.com/frenki1004/Menzory/pulls?q=is%3Apr+is%3Aclosed). Prikaz obuhvaća rad od formiranja repozitorija u projektnom tjednu 2 (16. 10. 2026.) do pripreme prve predaje M1 u projektnom tjednu 6–7 (studeni 2026.).

Kroz repozitorij se vidi kontinuiran i raspodijeljen doprinos svih članova:
- Borna Mužina Momčilović i Lovro Blagić vodili su iterativno oblikovanje zahtjeva i kriterija prihvaćanja (`docs/zahtjevi`, `docs/funkcijski-zahtjevi`, `docs/analiza-dopune`),
- Luka Taslak i Enzo Kutić radili su na modeliranju i pročišćavanju obrazaca uporabe (`docs/zahtjevi-i-dijagrami`, `docs/uc-dijagrami`),
- David Kokorović postavio je arhitektonske odluke, ER model baze i dijagram razreda (`docs/arhitektura-i-oblikovanje`),
- Fabijan Pitlović implementirao je početni kostur aplikacije, domensku logiku ponuda i rezervacija te izvoz M1 PDF-a (`feat/nextjs-skeleton`, `feat/domain-offers-reservations`, `docs/m1-setup-and-pdf`),
- Frane Andrić koordinirao je rad, upravljao spajanjem grana, usklađivanjem sa smjernicama asistentice i organizacijom projekta.

## A.5 Ključni inženjerski izazovi i rješenja

**Cilj:** Dokumentirati stvarne tehničke i organizacijske prepreke s kojima se tim suočio, poduzete korektivne inženjerske korake te konačni ishod. Odaberite konkretne izazove umjesto općenite pohvale timskog rada.

| Izazov | Poduzeta radnja | Ishod ili preostalo ograničenje |
| --- | --- | --- |
| **Složenost Use Case dijagrama i povratne informacije:** Početni dijagrami sadržavali su previše pomoćnih uvjeta (npr. provjera članarine kao zaseban UC oblačić) i ukrižanih linija, što je otežavalo preglednost logičkog toka sustava. | Prema napucima asistentice s konzultacija 5. 11., sporedni uvjeti preseljeni su u specifikaciju toka (3.2). Dijagrami su razdvojeni u dva horizontalna toka s lijeva na desno: proces rezervacije kupca s grananjem na preuzimanje i otkazivanje (`3-2`), te tokovi objave ponuda i donacija (`3-3`), dok je opći dijagram (`3-1`) sveden isključivo na 7 ključnih UC-ova. | Dobiveni su pregledni dijagrami bez ukrižanih linija koji jasno pokazuju redoslijed koraka i uloge aktera, u potpunosti usklađeni sa zahtjevima kolegija. |
| **Format funkcijskih zahtjeva i kriterija prihvaćanja:** Početna razrada u odjeljku 2.1 sadržavala je preopširne opise polja baze podataka i detaljne tehničke validacije unutar samih zahtjeva. | Standardiziran je format: kratki jedinstveni opis oblika „Sustav omogućuje...”, a kriteriji prihvaćanja svedeni na numerirani slijed osnovnih koraka nužnih za uspješno izvršavanje funkcije. Tehničke pretpostavke i otvorena pitanja izdvojeni su u zasebne tablice 2.4. | Zahtjevi F-001 do F-020 postali su jednoznačni, sažeti i izravno provjerljivi, što olakšava izradu testnih slučajeva i sljedivost prema obrascima uporabe. |
| **Odabir arhitekture i pojednostavljenje postavljanja (deployment):** Početna struktura repozitorija predviđala je odvojeni Express backend i React frontend (`backend/` i `frontend/`), što bi zahtijevalo koordinaciju dva odvojena procesa, dvostruke CI/CD cjevovode i složenije upravljanje sesijama za OAuth 2.0. | Tim je donio odluku (ADR-01) o prijelazu na monolitni full-stack Next.js 15 (App Router) s TypeScriptom, Prismom i PostgreSQL-om (Neon). Autentifikacija je povjerena Auth.js-u (NextAuth). | Znatno je smanjena kompleksnost repozitorija, omogućeno je jednostavno dijeljenje tipova podataka i jedinstven proces javnog postavljanja na Vercel uz automatski CI prolaz. |

<details>
<summary><strong>Rješavanje nesklada formata lokacije</strong></summary>

**Primjer — CrisisMap:**

| Izazov | Poduzeta radnja | Ishod ili preostalo ograničenje |
| --- | --- | --- |
| Odabrani položaj na karti prikazivao se u klijentu, ali podnesena prijava nije zadržavala koordinate. | AK i EP usporedile su zahtjev preglednika s poljima lokacije koje očekuje API; AK je uskladila format zahtjeva, a LM je dodao provjeru valjanosti lokacije. | Nova prijava u ovom se scenariju može dohvatiti sa spremljenim položajem; tim povezuje odgovarajuću promjenu integracije i provjeru. |

**Problem, odgovor i ishod:** Svaki se dio može provjeriti u projektu. Rečenica poput „imali smo poteškoće s integracijom i riješili ih timskim radom” ne bi čitatelju rekla što nije radilo ni kako je rješenje promijenjeno.

</details>

---

>**Završna provjera:** Sastanci navode smislene ishode i odgovorne osobe; plan odražava namjeravani rad; tablica uloženog rada i generirani prikaz repozitorija odnose na ovaj vidljivi projekt; konkretni izazovi povezani su s radnjama i njihovim rezultatima.
