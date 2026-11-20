# SpasiZalogaj — Projektna dokumentacija

**Kolegij:** [Programsko inženjerstvo](https://www.fer.unizg.hr/predmet/proinz), Fakultet elektrotehnike i računarstva Sveučilišta u Zagrebu  
**Akademska godina:** 2026./2027.  
**Tim:** G07 (tim Menzory)  
**Nastavnik:** Vlado Sruk  
**Asistentica:** Iva Sović

## Pregled projekta

**Cilj:** SpasiZalogaj je platforma koja povezuje prodajna mjesta s viškom hrane, kupce koji žele povoljnije obroke i humanitarne organizacije kako bi se smanjilo nepotrebno bacanje jestive hrane.

**Aplikacija i osnovno postavljanje:** [README repozitorija](../README.md#quick-start)  
**Javno dostupna aplikacija:** pogledajte [README – Postavljanje](../README.md#deployment)

## Članovi tima i uloge

Ažurirani popis članova, njihovih GitHub profila i glavnih uloga ili doprinosa nalazi se u [README-u repozitorija](../README.md#team-members).

## Kazalo dokumentacije

| Stranica | Svrha |
| --- | --- |
| [1. Opseg projekta](1-Projekt.md) | Problem, cilj i granice projekta |
| [2. Analiza zahtjeva](2-Analiza-zahtjeva.md) | Zahtjevi, ograničenja i sljedivost |
| [3. Obrasci uporabe](3-Obrasci-uporabe.md) | Akteri i reprezentativne interakcije korisnika |
| [4. Arhitektura i oblikovanje](4-Arhitektura-i-oblikovanje.md) | Glavne odluke oblikovanja, struktura, podaci i ponašanje |
| [5. Ispitivanje](5-Ispitivanje.md) | Pristup ispitivanju, stvarni rezultati i poznati nedostaci |
| [6. Postavljanje, instalacija i konfiguracija](6-Postavljanje-instalacija-i-konfiguracija.md) | Lokalna instalacija, konfiguracija, javno postavljanje i administracija |
| [7. Zaključak i budući rad](7-Zakljucak-i-buduci-rad.md) | Zaključak i moguća daljnja poboljšanja |
| [A. Pregled aktivnosti grupe](A-Pregled-aktivnosti-grupe.md) | Aktivnosti tima, doprinosi i izazovi |

## Ključne točke projekta

| Kontrolna točka | Demonstracija | Video |
| --- | --- | --- |
| Iteracija 1 | [spasizalogaj.vercel.app](https://spasizalogaj.vercel.app) | — |
| Završni pregled | na čekanju | na čekanju |

Dokumentacija se kontinuirano ažurira kako se aplikacija razvija.

## Organizacija projekta i razvojni proces

**Način rada:** Rad u iteracijama prema kontrolnim točkama kolegija; svaki zadatak ima Issue, radi se na zasebnoj grani i spaja kroz pull request uz pregled drugog člana tima.  
**Praćenje trenutačnih zadataka i nedostataka:** [GitHub Issues](https://github.com/frenki1004/Menzory/issues)

## Pravila dokumentacije

Dokumentacija se sastoji od međusobno povezanih Markdown stranica. Obavezni UML dijagrami izrađuju se u PlantUML-u (`docs/puml/`), a čitljive SVG slike iz njih generira GitHub Action.

## Akademski integritet, ponašanje i licenciranje

README repozitorija sadrži projektnu [izjavu o uporabi umjetne inteligencije](../README.md#ai-usage), [informacije o kodeksu ponašanja i podršci](../README.md#code-of-conduct-and-support) te [status licence ili ponovne uporabe](../README.md#license). Pristupni podaci i druge tajne nikada se ne objavljuju u dokumentaciji niti dijele u običnim porukama.

## Izjava o uporabi umjetne inteligencije

<!-- UPUTA: Ovo je detaljan zapis uporabe umjetne inteligencije; README sadrži kratak sažetak i poveznicu na ovaj odjeljak. Unesite samo ono što se stvarno dogodilo i uklonite neupotrijebljene retke. Ako nije korišten nijedan alat generativne umjetne inteligencije, zamijenite cijeli odjeljak jednom rečenicom koja to jasno navodi. Svaki redak mora upućivati na stranicu, datoteku, zahtjev za uključivanje promjena (PR) ili zadatak. Nikada ne unosite pristupne podatke, osobne podatke ni tuđi zaštićeni sadržaj u alate umjetne inteligencije. -->

Kratak sažetak: [README – Uporaba umjetne inteligencije](../README.md#ai-usage). Ovaj odjeljak bilježi koji su alati korišteni, za koju dokumentaciju ili kod te kako je tim provjerio rezultat. Slijedi FER-ova [pravila o primjerenoj uporabi umjetne inteligencije](https://www.fer.unizg.hr/_download/repository/Policy%20on%20the%20appropriate%20use%20of%20artificial%20intelligence%20at%20the%20faculty%20of%20electrical%20engineering%20and%20computing%5B1%5D.pdf).

### Korišteni alati

| Alat | Inačica ili model | Koristio/la | Glavna svrha |
| --- | --- | --- | --- |
| Claude (Anthropic) | Claude | Fabijan Pitlović | Pomoć pri planiranju zadataka (GitHub Issues), strukturiranju dokumentacije i izradi nacrta PlantUML dijagrama |
| Claude (Anthropic), Claude Code | Claude | Lovro Blagić | Oblikovanje i jezično uređivanje dokumentacije, nacrti specifikacija i ispitnih slučajeva, ispravci UML dijagrama |
| OpenAI Codex | – | David Kokorović | Učenje arhitekture i UML modeliranja, nacrti dokumentacije i dijagrama |
| OpenAI Codex, OpenCode | – | Enzo Kutić | Učenje frontend tehnologija, projektiranje ispitivanja i izrada dijagrama |
| Claude (Anthropic) | Claude | Luka Taslak | Učenje, izrada UML dijagrama i povezivanje s bazom podataka |
| Claude Code (Anthropic) | Claude Opus | Frane Andrić | Dorada zahtjeva i dijagrama obrazaca uporabe, evidencija aktivnosti, konfiguracija baze podataka i priprema PDF-a predaje |
| Claude Code (Anthropic) | Claude Opus | Borna Mužina Momčilović | Nacrti dokumentacije i koda, provjera usklađenosti s uputama kolegija, rad s Gitom i pull requestovima |

### Opseg doprinosa umjetne inteligencije

| Stranica, datoteka ili artefakt | Vrsta pomoći | Što je alat proizveo | Što je tim zadao i promijenio | Lokacija |
| --- | --- | --- | --- | --- |
| GitHub Issues #1–#17, milestones M0 i M1 | Planiranje zadataka | Prijedlog popisa zadataka prema planu rada kolegija | Fabijan je odabrao zadatke, skratio opise i dodijelio zadatke za M0; ostale zadatke preuzimaju članovi tima | [Issues](https://github.com/frenki1004/Menzory/issues) |
| 1. Opseg projekta | Strukturiranje i jezično uređivanje | Nacrt odjeljaka 1.1 do 1.4 prema zadatku G07 | Opseg i granice uskladio je Fabijan s projektnim zadatkom i zahtjevima tima | `docs/1-Projekt.md` |
| 3. Obrasci uporabe, UC-01 do UC-07 | Izrada nacrta | Nacrt glavnih i alternativnih tokova te izvor dijagrama | Odabir obrazaca, veza sa zahtjevima (FZ, autor Lovro) i pregled tokova: Fabijan | `docs/3-Obrasci-uporabe.md`, `docs/puml/3-1-spasizalogaj-system-UC.puml` |

Stranice i artefakti koji nisu navedeni iznad izrađeni su bez pomoći generativne umjetne inteligencije.

### Provjera generiranog sadržaja

| Provjera | Kako je provedena | Dokaz |
| --- | --- | --- |
| Usklađenost sa zadatkom | Obrasci uporabe i opseg uspoređeni su s tekstom zadatka G07 | Zadatak G07 (Iva Sović) |
| Dosljednost sa zahtjevima | Svaki obrazac uporabe poziva se samo na postojeće FZ oznake iz analize zahtjeva | `docs/2-Analiza-zahtjeva.md`, `docs/3-Obrasci-uporabe.md` |
| Izvori dijagrama | PlantUML izvor iscrtan je i pregledan | `.puml` datoteka i izrađena slika |
| Povjerljivi sadržaj | U alat nisu uneseni pristupni podaci ni osobni podaci | – |

### Pogreške pronađene u izlazu umjetne inteligencije

| Problem | Kako je pronađen | Rješenje |
| --- | --- | --- |
| Nisu utvrđene | – | – |

### Otvoreno pitanje za asistenticu

Uporabu alata umjetne inteligencije pri planiranju zadataka (GitHub Issues) i strukturiranju dokumentacije provjerit ćemo s asistenticom kako bismo bili sigurni da je u skladu s pravilima kolegija. Ovaj odjeljak ažurirat ćemo prema njezinu odgovoru.
