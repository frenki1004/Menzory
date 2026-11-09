# 2. Analiza zahtjeva

**Cilj:** Iz odobrenog opsega projekta izvesti prepoznatljive, prioritetizirane i provjerljive zahtjeve. Zahtjevi se mogu mijenjati; pri završnoj predaji moraju odražavati dogovorenu aplikaciju.

## 2.1 Funkcijski zahtjevi

**Cilj:** Navesti što aplikacija mora omogućiti korisnicima, odakle pojedina mogućnost proizlazi i koji se opažljivi rezultat smatra prihvaćanjem.

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| F-001 | Sustav omogućuje prijavu. | Visok | Odobreni zadatak | 1. Korisnik se prijavljuje preko OAuth 2.0 pružatelja.<br>2. Pri prvoj prijavi odabire ulogu: kupac, prodajno mjesto ili humanitarna organizacija.<br>3. Nakon prijave korisnik dolazi na početnu stranicu svoje uloge. |
| F-002 | Sustav omogućuje odobravanje humanitarne organizacije. | Visok | Odobreni zadatak | 1. Humanitarna organizacija nakon prijave ima status „na čekanju”.<br>2. Administrator pregledava profil organizacije i odobrava ga ili odbija.<br>3. Odobrena organizacija dobiva pristup donacijama. |
| F-003 | Sustav omogućuje uređivanje javnog profila. | Visok | Odobreni zadatak | 1. Prodajno mjesto ili humanitarna organizacija otvara uređivanje profila.<br>2. Unosi naziv, adresu, kontakt, radno vrijeme i logo; organizacija i područje djelovanja.<br>3. Nakon spremanja javni profil prikazuje nove podatke. |
| F-004 | Sustav omogućuje određivanje cijena članarine. | Visok | Odobreni zadatak | 1. Administrator otvara postavke članarine.<br>2. Unosi cijenu mjesečne i godišnje članarine.<br>3. Nova cijena primjenjuje se na sljedeće plaćanje. |
| F-005 | Sustav omogućuje plaćanje članarine. | Visok | Odobreni zadatak | 1. Prodajno mjesto odabire mjesečnu ili godišnju članarinu.<br>2. Plaća PayPalom ili karticom preko vanjskog servisa.<br>3. Nakon uspješnog plaćanja članarina je aktivna do datuma isteka i prodajno mjesto može objavljivati ponude. |
| F-006 | Sustav omogućuje objavu proizvoda. | Visok | Odobreni zadatak | 1. Prodajno mjesto s aktivnom članarinom otvara objavu proizvoda.<br>2. Unosi naziv, kategoriju, količinu, redovnu i sniženu cijenu ili označava proizvod kao donaciju, rok upotrebe, vrijeme preuzimanja i fotografiju.<br>3. Nakon spremanja proizvod je vidljiv kupcima, a donacija samo humanitarnim organizacijama. |
| F-007 | Sustav omogućuje objavu paketa iznenađenja. | Visok | Odobreni zadatak | 1. Prodajno mjesto s aktivnom članarinom otvara objavu paketa iznenađenja.<br>2. Unosi približnu vrstu sadržaja, ukupnu vrijednost, prodajnu cijenu, broj paketa i interval preuzimanja.<br>3. Nakon spremanja paket je vidljiv kupcima s brojem dostupnih paketa, bez točnog sadržaja. |
| F-008 | Sustav omogućuje upravljanje ponudama. | Visok | Odobreni zadatak | 1. Prodajno mjesto otvara popis svojih aktivnih ponuda.<br>2. Uređuje podatke ponude ili je povlači.<br>3. Povučena, istekla ili rasprodana ponuda više nije vidljiva kupcima i ne može se rezervirati. |
| F-009 | Sustav omogućuje pretragu ponuda. | Visok | Odobreni zadatak | 1. Kupac otvara pretragu i vidi aktivne ponude na popisu i na karti.<br>2. Filtrira ponude po kategoriji, lokaciji, cijeni i vremenu preuzimanja.<br>3. Uz svako prodajno mjesto vidi njegovu lokaciju na karti i udaljenost od sebe. |
| F-010 | Sustav omogućuje rezervaciju ponude. | Visok | Odobreni zadatak | 1. Kupac odabire jedan ili više proizvoda ili paketa i potvrđuje rezervaciju.<br>2. Plaća PayPalom ili karticom preko vanjskog servisa.<br>3. Nakon uspješnog plaćanja dobiva potvrdu i jedinstveni kod za preuzimanje. |
| F-011 | Sustav omogućuje otkazivanje rezervacije. | Visok | Odobreni zadatak | 1. Kupac otvara svoju rezervaciju i odabire otkazivanje.<br>2. Otkazivanje je moguće najkasnije 1 h prije kraja vremena preuzimanja.<br>3. Otkazana rezervacija vraća količinu u ponudu. |
| F-012 | Sustav omogućuje potvrdu preuzimanja. | Visok | Odobreni zadatak | 1. Kupac u prodajnom mjestu pokazuje kod za preuzimanje.<br>2. Zaposlenik prodajnog mjesta skenira ili unosi kod.<br>3. Ispravan kod označava rezervaciju kao preuzetu i više se ne može iskoristiti. |
| F-013 | Sustav omogućuje pregled rezervacija. | Srednji | Odobreni zadatak | 1. Kupac otvara popis svojih rezervacija.<br>2. Prodajno mjesto otvara popis rezervacija svojih ponuda.<br>3. Uz svaku rezervaciju vidi se njezin status. |
| F-014 | Sustav omogućuje ocjenjivanje prodajnog mjesta. | Srednji | Odobreni zadatak | 1. Nakon preuzimanja kupac ocjenjuje prodajno mjesto i može ostaviti komentar.<br>2. Ocjena i komentar prikazuju se na javnom profilu prodajnog mjesta.<br>3. Prodajno mjesto može odgovoriti na komentar. |
| F-015 | Sustav omogućuje zahtjev za donaciju. | Visok | Odobreni zadatak | 1. Odobrena humanitarna organizacija pregledava ponude označene kao donacija.<br>2. Odabire ponudu i šalje zahtjev za određenu količinu.<br>3. Zahtjev je „na čekanju” dok o njemu ne odluči prodajno mjesto. |
| F-016 | Sustav omogućuje odlučivanje o zahtjevu za donaciju. | Visok | Odobreni zadatak | 1. Prodajno mjesto otvara zahtjev humanitarne organizacije.<br>2. Odobrava ga ili odbija.<br>3. Organizacija dobiva obavijest o odluci, a odobrena količina rezervira se za nju. |
| F-017 | Sustav omogućuje kreiranje akcije prikupljanja hrane. | Srednji | Odobreni zadatak | 1. Prodajno mjesto ili humanitarna organizacija otvara kreiranje akcije.<br>2. Unosi naziv, opis, lokaciju, početak i kraj akcije te potrebne vrste proizvoda.<br>3. Nakon spremanja akcija je vidljiva kupcima do završetka. |
| F-018 | Sustav omogućuje sudjelovanje u akciji prikupljanja hrane. | Srednji | Odobreni zadatak | 1. Kupac se prijavljuje na akciju.<br>2. Označava proizvode koje planira donirati.<br>3. Organizator akcije evidentira stvarno zaprimljene donacije. |
| F-019 | Sustav omogućuje pretplatu na obavijesti. | Srednji | Odobreni zadatak | 1. Kupac odabire prodajna mjesta ili kategorije hrane i pretplaćuje se.<br>2. Kad se objavi nova odgovarajuća ponuda, sustav mu šalje obavijest. |
| F-020 | Sustav omogućuje administraciju korisnika i sadržaja. | Srednji | Odobreni zadatak | 1. Administrator pregledava korisničke račune i objavljeni sadržaj.<br>2. Može blokirati ili obrisati račun i ukloniti neprimjeren sadržaj.<br>3. Uređuje popis kategorija hrane. |

## 2.2 Nefunkcijski zahtjevi

**Cilj:** Odrediti važna svojstva kvalitete i uvjete rada odobrene aplikacije na način koji tim može razumno provjeriti.

| ID | Opis | Prioritet | Izvor | Način provjere |
| --- | --- | --- | --- | --- |
| NF-01 | Komunikacija između korisnika i sustava je sigurna. | Visok | Procjena tima | Pregled konfiguracije: sva komunikacija ide preko HTTPS-a, a HTTP zahtjevi preusmjeravaju se na HTTPS. |
| NF-02 | Korisnik nema pristup informacijama i funkcijama koje ne bi smio imati (npr. uvid u financijske podatke, tuđe rezervacije ili administraciju). | Visok | Procjena tima | Testni scenarij: zahtjev prema tuđim podacima ili administratorskoj funkciji bez ovlasti sustav odbija. |
| NF-03 | Sustav ne pohranjuje osjetljive podatke o sredstvima plaćanja. | Visok | Procjena tima | Pregled baze i koda: nijedna tablica ne sadrži podatke platnih kartica. |
| NF-04 | Kod za preuzimanje je jedinstven, nepredvidiv i jednokratan. | Visok | Procjena tima | Testni scenarij: ponovna uporaba koda je odbijena; pregled koda potvrđuje siguran način generiranja. |
| NF-05 | Sustav sprječava dvostruku rezervaciju iste ponude. | Visok | Procjena tima | Testni scenariji: istovremena rezervacija posljednjeg komada iz dvaju klijenata (uspijeva samo jedna); neuspjelo plaćanje vraća količinu u ponudu. |
| NF-06 | Sustav je dovoljno responzivan pri pretrazi ponuda. | Srednji | Procjena tima | Mjerenje: vrijeme odziva pretrage nad 1000 oglednih ponuda iznosi manje od 2 s. Vidi P-10. |
| NF-07 | Aplikacija je prilagođena za korištenje na mobitelu. | Visok | Procjena tima | Pregled: glavne funkcionalnosti isprobane na mobitelu. |

## 2.3 Dionici i akteri

**Cilj:** Utvrditi uloge koje utječu na zahtjeve i razlikovati dionike od aktera koji komuniciraju s aplikacijom.

| ID uloge ili aktera | Odnos prema sustavu | Relevantni zahtjevi |
| --- | --- | --- |
| A-01 Kupac | Primarni akter: pretražuje ponude, rezervira i plaća, preuzima, ocjenjuje, sudjeluje u akcijama. | F-001, F-009 – F-011, F-013, F-014, F-017 – F-019 |
| A-02 Prodajno mjesto | Primarni akter: plaća članarinu, objavljuje ponude i donacije, upravlja rezervacijama i zahtjevima. | F-001, F-003, F-005, F-006 – F-008, F-012 – F-014, F-016 – F-019 |
| A-03 Zaposlenik prodajnog mjesta | Primarni akter: potvrđuje preuzimanje kodom (koristi račun prodajnog mjesta). | F-012, NF-07 |
| A-04 Humanitarna organizacija | Primarni akter: pregledava donacijske ponude, šalje zahtjeve, organizira akcije. | F-001 – F-003, F-015 – F-018 |
| A-05 Administrator | Primarni akter: odobrava profile, upravlja računima, sadržajem, kategorijama i cijenama članarina. | F-002, F-004, F-020 |
| A-06 OAuth pružatelj identiteta | Vanjski sustav: autentificira korisnike. | F-001, C-01 |
| A-07 Servis za plaćanje | Vanjski sustav: obrađuje plaćanje članarina i rezervacija. | F-005, F-010, F-011, NF-03, NF-05 |
| A-08 Kartografska usluga | Vanjski sustav: prikazuje lokacije i udaljenosti. | F-009 |
| D-01 Nastavnici i asistent kolegija | Dionik, nije akter: odobravaju opseg zadatka i pregledavaju rezultat. | Svi zahtjevi s izvorom „Odobreni zadatak” |
| D-02 Razvojni tim | Dionik, nije akter: razvija, ispituje i održava sustav te uz dogovor s asistenticom odlučuje o tehnologijama i arhitekturi. | Svi zahtjevi s izvorom „Procjena tima” |

---

## 2.4 Ograničenja i pretpostavke

**Cilj:** Zabilježiti projektno specifične granice i pretpostavke koje utječu na zahtjeve ili oblikovanje, zajedno s njihovim izvorom i praktičnom posljedicom. Ovo je njihovo mjerodavno mjesto u dokumentaciji.

| ID | Tip | Opis ograničenja ili pretpostavke | Izvor | Inženjerska posljedica / Provjera |
| --- | --- | --- | --- | --- |
| C-01 | Ograničenje | Autentifikacija se obavlja isključivo preko vanjskog OAuth 2.0 pružatelja. | Odobreni zadatak | Sustav ne pohranjuje lozinke; uloga korisnika vodi se u vlastitoj bazi uz OAuth identitet. |
| C-02 | Ograničenje | Plaćanje (PayPal ili kartica) obavlja vanjski servis. | Odobreni zadatak | Integracija sa servisom za plaćanje i obrada njegovih povratnih poziva; podaci kartice ne prolaze kroz sustav. |
| C-03 | Ograničenje | Lokacije i udaljenosti prikazuju se vanjskom kartografskom uslugom. | Odobreni zadatak | Integracija s kartografskom uslugom; prodajna mjesta moraju imati koordinate. |
| AS-01 | Pretpostavka | Prodajna mjesta imaju stvarnu adresu koja se može pretvoriti u koordinate i prikazati na karti. | Pretpostavka o podacima | Provjeriti pri unosu adrese u profil (F-003) i na oglednim podacima; planirati prikaz prodajnog mjesta bez valjanih koordinata. |
| AS-02 | Pretpostavka | Korisnici imaju račun kod podržanog OAuth pružatelja. | Procjena tima | Provjeriti pri odabiru pružatelja identiteta; bez takvog računa prijava nije moguća (C-01). |
| AS-03 | Pretpostavka | Zaposlenik prodajnog mjesta koristi račun prodajnog mjesta na mobitelu s kamerom. | Procjena tima | Provjeriti skeniranje koda na mobitelu (NF-07); ako kamera nije dostupna, kod se unosi ručno (UC-04, 2a). |
| AS-04 | Pretpostavka | Servis za plaćanje nudi testno (sandbox) okruženje za razvoj i demonstraciju. | Procjena tima | Provjeriti pri odabiru servisa za plaćanje; razvoj i testiranje koriste sandbox. |

### Otvorena pitanja

Pitanja koja tim treba razjasniti s asistentom. Dok se ne razriješe, tim radi prema navedenoj radnoj pretpostavci.

| ID | Tema | Pitanje | Radna pretpostavka | Povezani zahtjevi |
| --- | --- | --- | --- | --- |
| P-01 | Članarine | Što se događa s aktivnim ponudama kada prodajnom mjestu istekne članarina? | Postojeće ponude ostaju aktivne do svog roka preuzimanja, a nove se ne mogu objaviti. | F-005, F-006 |
| P-02 | Članarine | Koliko ranije i kojim kanalom obavijestiti prodajno mjesto o isteku članarine? | Obavijest unutar aplikacije 7 dana prije isteka. | F-005 |
| P-03 | Rezervacije i plaćanje | Može li jedna rezervacija sadržavati ponude više prodajnih mjesta? | Jedna rezervacija odnosi se na jedno prodajno mjesto, uz više stavki. | F-010 |
| P-04 | Rezervacije i plaćanje | Vrijedi li rok otkazivanja od 1 h i vraća li se novac pri otkazivanju? | Rok je 1 h, uz puni povrat preko servisa za plaćanje. | F-011 |
| P-05 | Rezervacije i plaćanje | Što se događa s plaćenim iznosom nepreuzete rezervacije? | Nema povrata novca, a količina se ne vraća u ponudu. | F-012 |
| P-06 | Donacije | Kako se potvrđuje preuzimanje donacije? | Istim kodom za preuzimanje kao kod rezervacija. | F-012, F-016 |
| P-07 | Obavijesti | Kojim kanalom se šalju obavijesti pretplatnicima? | E-poštom. | F-019 |
| P-08 | Administracija | Koje uloge trebaju odobrenje administratora? | Samo humanitarne organizacije; prodajno mjesto aktivira se plaćanjem članarine. | F-002 |
| P-09 | Administracija | Je li popis kategorija hrane fiksan ili ga uređuje administrator? | Administrator uređuje unaprijed definiran početni popis. | F-020 |
| P-10 | Nefunkcijski zahtjevi | Jesu li prihvatljive brojčane vrijednosti 2 s za pretragu uz 1000 ponuda? | Vrijednosti su prijedlog tima. | NF-06 |

---

## 2.5 Značajne promjene zahtjeva

**Cilj:** Sačuvati razlog promjena koje mijenjaju dogovoreni opseg, prioritet ili kriterije prihvaćanja, uz istodobno održavanje prethodnih zahtjeva ažurnima.

| Datum | ID zahtjeva | Promjena i razlog | Dogovoreno s / dokaz |
| --- | --- | --- | --- |
| 4. 11. 2026. | F-001 – F-020, NF | Nakon povratne informacije na M0 (29. 10. 2026.) funkcijski zahtjevi smanjeni s 50 na 20 spajanjem povezanih i uklanjanjem prijedloga niskog prioriteta; nefunkcijski s 14 na 10; opisi preoblikovani u oblik „Sustav omogućuje …”. | Asistentica, M0 29. 10. 2026.; PR #22, PR #23 |
| 5. 11. 2026. | F-001 – F-020 | Funkcijski zahtjevi preoblikovani u kraći oblik („Sustav omogućuje …” i numerirani kriteriji prihvaćanja); F-004 i F-005 zamijenili su mjesta. | Asistentica, sastanak 5. 11. 2026.; PR #24 |
| 5. 11. 2026. | NF-01 – NF-07 | Nefunkcijski zahtjevi pročišćeni: uklonjeno ono što je već u ograničenjima, pravila kolegija i neprovjerljive tvrdnje. | Asistentica, sastanak 5. 11. 2026.; PR #24 |

---

## 2.6 Sljedivost zahtjeva

**Cilj:** Osigurati dvosmjernu sljedivost — povezati zahtjeve s opisanim ponašanjem, dijelovima sustava koji ih ostvaruju te ispitivanjem ili drugom provjerom. 

| ID zahtjeva | Obrazac uporabe / modul | Arhitekturna realizacija | Ispitivanje ili provjera |
| --- | --- | --- | --- |
| F-001 | UC-01 | na čekanju | na čekanju |
| F-002 | UC-01, UC-07 | na čekanju | na čekanju |
| F-003 | na čekanju | na čekanju | na čekanju |
| F-004 | na čekanju | na čekanju | na čekanju |
| F-005 | UC-02 | na čekanju | na čekanju |
| F-006 | UC-02, UC-06 | na čekanju | na čekanju |
| F-007 | UC-02 | na čekanju | na čekanju |
| F-008 | na čekanju | na čekanju | na čekanju |
| F-009 | UC-03 | na čekanju | na čekanju |
| F-010 | UC-03 | na čekanju | na čekanju |
| F-011 | UC-05 | na čekanju | na čekanju |
| F-012 | UC-04 | na čekanju | na čekanju |
| F-013 | UC-05 | na čekanju | na čekanju |
| F-014 | na čekanju | na čekanju | na čekanju |
| F-015 | UC-06 | na čekanju | na čekanju |
| F-016 | UC-06 | na čekanju | na čekanju |
| F-017 | na čekanju | na čekanju | na čekanju |
| F-018 | na čekanju | na čekanju | na čekanju |
| F-019 | na čekanju | na čekanju | na čekanju |
| F-020 | na čekanju | na čekanju | na čekanju |

---

## 2.7 Pregled zahtjeva

**Cilj:** Zabilježiti važne povratne informacije o zahtjevima i odluke koje iz njih proizlaze na dvije formalne kontrolne točke projekta, u 7. i 14. tjednu.

| Kontrolna točka | Povratna informacija ili nalaz | Odluka o zahtjevu ili opsegu |
| --- | --- | --- |
| Iteracija 1 (M1, 7. tjedan) | na čekanju | na čekanju |
| Demo 2 | na čekanju | na čekanju |
| Završni pregled | na čekanju | na čekanju |

---

>**Završna provjera:** Zahtjevi su aktualni, provjerljivi i povezani. Svaki važan zahtjev moguće je pratiti od njegova opisa i ponašanja preko mjesta realizacije u sustavu do odgovarajućeg ispitivanja ili druge provjere. Poveznice koriste stvarne identifikatore i nazive iz projektne dokumentacije.

