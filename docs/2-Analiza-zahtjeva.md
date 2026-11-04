# 2. Analiza zahtjeva

**Cilj:** Iz odobrenog opsega projekta izvesti prepoznatljive, prioritetizirane i provjerljive zahtjeve. Zahtjevi se mogu mijenjati; pri završnoj predaji moraju odražavati dogovorenu aplikaciju.

## 2.1 Funkcijski zahtjevi

**Cilj:** Navesti što aplikacija mora omogućiti korisnicima, odakle pojedina mogućnost proizlazi i koji se opažljivi rezultat smatra prihvaćanjem.

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| F-001 | Sustav omogućuje prijavu preko OAuth 2.0 pružatelja i odabir uloge pri prvoj prijavi: kupac, prodajno mjesto ili humanitarna organizacija. | Visok | Odobreni zadatak | Novi korisnik ne može nastaviti bez odabira uloge; nakon odjave zaštićene stranice preusmjeravaju na prijavu. |
| F-002 | Sustav omogućuje administratoru odobravanje ili odbijanje profila humanitarne organizacije. | Visok | Odobreni zadatak | Organizacija ima status „na čekanju” i ne vidi donacije dok je administrator ne odobri. Vidi P-08. |
| F-003 | Sustav omogućuje prodajnom mjestu i humanitarnoj organizaciji uređivanje javnog profila (naziv, adresa, kontakt, radno vrijeme, logo; organizaciji i područje djelovanja). | Visok | Odobreni zadatak | Profil prodajnog mjesta prikazuje navedene podatke, aktivne ponude, prosječnu ocjenu i komentare. |
| F-004 | Sustav omogućuje prodajnom mjestu plaćanje mjesečne ili godišnje članarine (PayPal ili kartica) i objavu ponuda samo uz aktivnu članarinu. | Visok | Odobreni zadatak | Nakon plaćanja u sandboxu vidi se datum isteka; 7 dana prije isteka stiže obavijest; nakon isteka objava nije moguća. Vidi P-01, P-02. |
| F-005 | Sustav omogućuje administratoru određivanje cijena mjesečne i godišnje članarine. | Visok | Odobreni zadatak | Nova cijena vrijedi od sljedećeg plaćanja. |
| F-006 | Sustav omogućuje prodajnom mjestu objavu proizvoda (naziv, kategorija, količina, redovna i snižena cijena, rok upotrebe, vrijeme preuzimanja, fotografija) i njegovo označavanje kao donacije. | Visok | Odobreni zadatak | Ponuda se ne sprema bez obaveznih polja ili ako snižena cijena nije manja od redovne; donaciju vide samo humanitarne organizacije. |
| F-007 | Sustav omogućuje prodajnom mjestu objavu paketa iznenađenja (opis sadržaja, ukupna vrijednost, cijena, broj paketa, interval preuzimanja). | Visok | Odobreni zadatak | Paket se ne sprema ako cijena nije manja od ukupne vrijednosti; u pretrazi se prikazuje broj dostupnih paketa. |
| F-008 | Sustav omogućuje prodajnom mjestu uređivanje i povlačenje ponuda te ih automatski skida nakon isteka vremena preuzimanja ili kad se rasprodaju. | Visok | Odobreni zadatak | Povučena, istekla ili rasprodana ponuda ne prikazuje se i ne može se rezervirati. |
| F-009 | Sustav omogućuje kupcu pretragu ponuda na popisu i karti te filtriranje po kategoriji, udaljenosti, cijeni i vremenu preuzimanja. | Visok | Odobreni zadatak | Prikazuju se samo ponude koje zadovoljavaju sve filtre, uz udaljenost u km. |
| F-010 | Sustav omogućuje kupcu rezervaciju ponuda i plaćanje PayPalom ili karticom te mu izdaje kod za preuzimanje (tekst i QR). | Visok | Odobreni zadatak | Ne može se rezervirati više od dostupnog; nakon plaćanja količina se smanjuje; neuspjelo plaćanje ne stvara rezervaciju. Vidi P-03. |
| F-011 | Sustav omogućuje kupcu otkazivanje rezervacije najkasnije 1 h prije kraja preuzimanja, uz povrat novca. | Visok | Odobreni zadatak | Otkazivanje vraća količinu u ponudu; manje od 1 h prije kraja preuzimanja otkazivanje nije moguće. Vidi P-04. |
| F-012 | Sustav omogućuje zaposleniku prodajnog mjesta potvrdu preuzimanja skeniranjem ili unosom koda. | Visok | Odobreni zadatak | Ispravan kod označava rezervaciju „preuzeto”; neispravan ili iskorišten kod se odbija; nepreuzeta rezervacija nakon roka dobiva status „nepreuzeto”. Vidi P-05. |
| F-013 | Sustav omogućuje kupcu pregled svojih rezervacija, a prodajnom mjestu pregled rezervacija svojih ponuda. | Srednji | Odobreni zadatak | Svaki korisnik vidi samo svoje rezervacije, uz status. |
| F-014 | Sustav omogućuje kupcu ocjenjivanje (1–5) i komentiranje prodajnog mjesta nakon preuzimanja, a prodajnom mjestu odgovor na komentar. | Srednji | Odobreni zadatak | Ocjena je moguća samo nakon preuzimanja, jednom po rezervaciji; prosjek se odmah ažurira. |
| F-015 | Sustav omogućuje humanitarnoj organizaciji pregled donacija i slanje zahtjeva za određenu količinu. | Visok | Odobreni zadatak | Zahtjev za količinu veću od dostupne se ne sprema; spremljeni zahtjev ima status „na čekanju”. |
| F-016 | Sustav omogućuje prodajnom mjestu odobravanje ili odbijanje zahtjeva za donaciju i obavještava organizaciju o odluci. | Visok | Odobreni zadatak | Odobrenje rezervira količinu i izdaje kod za preuzimanje (kao F-012); odbijanje ostavlja količinu dostupnom. Vidi P-06. |
| F-017 | Sustav omogućuje prodajnom mjestu i humanitarnoj organizaciji kreiranje akcije prikupljanja hrane (naziv, opis, lokacija, trajanje, potrebni proizvodi). | Srednji | Odobreni zadatak | Akcija se prikazuje u popisu dok ne završi. |
| F-018 | Sustav omogućuje kupcu prijavu na akciju uz navođenje planirane donacije, a organizatoru evidentiranje zaprimljenih donacija. | Srednji | Odobreni zadatak | Organizator vidi sudionike te planirane i zaprimljene donacije. |
| F-019 | Sustav omogućuje kupcu pretplatu na nove ponude odabranih prodajnih mjesta ili kategorija. | Srednji | Odobreni zadatak | Pri objavi odgovarajuće ponude obavijest e-poštom dobivaju samo pretplatnici. Vidi P-07. |
| F-020 | Sustav omogućuje administratoru blokiranje i brisanje računa, uklanjanje neprimjerenog sadržaja i uređivanje kategorija hrane. | Srednji | Odobreni zadatak | Blokirani korisnik ne može se prijaviti; uklonjeni sadržaj nije vidljiv; nova kategorija odmah je dostupna. Vidi P-09. |

## 2.2 Nefunkcijski zahtjevi

**Cilj:** Odrediti važna svojstva kvalitete i uvjete rada odobrene aplikacije na način koji tim može razumno provjeriti.

| ID | Opis | Prioritet | Izvor | Način provjere |
| --- | --- | --- | --- | --- |
| NF-01 | Sva komunikacija ide preko HTTPS-a; autentifikacija je isključivo preko OAuth 2.0. | Visok | Odobreni zadatak | Pregled konfiguracije: HTTP zahtjev preusmjerava se na HTTPS; ne postoji prijava lozinkom. |
| NF-02 | Pristup funkcijama kontrolira se prema ulogama; korisnik vidi i mijenja samo podatke za koje ima ovlasti. | Visok | Procjena tima | Testni scenarij: zahtjev prema tuđim podacima ili administratorskoj funkciji bez ovlasti sustav odbija. |
| NF-03 | Plaćanje obavlja vanjski servis, sustav ne pohranjuje podatke platnih kartica, a razvoj i testiranje koriste sandbox okruženje. | Visok | Odobreni zadatak | Pregled sheme baze i konfiguracije: nijedna tablica ne sadrži podatke kartice; razvojno i testno okruženje koriste sandbox ključeve. |
| NF-04 | Kod za preuzimanje je jedinstven, nepredvidiv i vrijedi samo za jedno preuzimanje. | Visok | Procjena tima | Testni scenarij: ponovna uporaba koda je odbijena; pregled koda: kod se generira kriptografski sigurnim generatorom. |
| NF-05 | Osobni podaci obrađuju se u skladu s GDPR-om; lokacija korisnika koristi se samo uz njegovo dopuštenje. | Srednji | GDPR | Testni scenarij: bez dopuštenja za lokaciju pretraga radi uz ručno unesenu lokaciju; pregled prikupljanih osobnih podataka. |
| NF-06 | Dostupna količina ostaje dosljedna: istovremene rezervacije ne smiju prodati više od dostupnog, a neuspjelo plaćanje ne zauzima količinu trajno. | Visok | Procjena tima | Testni scenariji: istovremena rezervacija posljednjeg komada iz dvaju klijenata (uspijeva samo jedna); odbijeno plaćanje u sandboxu vraća količinu u ponudu. |
| NF-07 | Pretraga ponuda vraća rezultate za manje od 2 s uz do 1000 aktivnih ponuda. | Srednji | Procjena tima | Mjerenje: vrijeme odziva pretrage nad 1000 oglednih ponuda. Vidi P-10. |
| NF-08 | Sučelje je responzivno i upotrebljivo na mobitelu (zaposlenik skenira kod kamerom), na hrvatskom jeziku, s vremenima u zoni Europe/Zagreb i cijenama u eurima. | Visok | Procjena tima | Pregled: ključni tijekovi izvršeni na mobitelu, uključujući skeniranje QR koda; tekstovi, vremena i cijene u zadanom obliku. |
| NF-09 | Sustav je javno dostupan putem interneta (ciljno 99 % tijekom demonstracije), a ispadi vanjskih servisa (plaćanje, karte, e-pošta) prikazuju jasnu poruku i ne ruše aplikaciju. | Visok | Procjena tima | Pregled dostupnosti na javnoj adresi tijekom demonstracije; testni scenarij: simulirana nedostupnost svakog vanjskog servisa. Vidi P-10. |
| NF-10 | Kod je u Git repozitoriju, uz README s uputama za pokretanje i automatizirane testove ključnih funkcija. | Srednji | Pravila kolegija | Pregled repozitorija: aplikacija se pokreće prema README-u, a automatizirani testovi prolaze. |

## 2.3 Dionici i akteri

**Cilj:** Utvrditi uloge koje utječu na zahtjeve i razlikovati dionike od aktera koji komuniciraju s aplikacijom.

| ID uloge ili aktera | Odnos prema sustavu | Relevantni zahtjevi |
| --- | --- | --- |
| A-01 Kupac | Primarni akter: pretražuje ponude, rezervira i plaća, preuzima, ocjenjuje, sudjeluje u akcijama. | F-001, F-009 – F-011, F-013, F-014, F-017 – F-019 |
| A-02 Prodajno mjesto | Primarni akter: plaća članarinu, objavljuje ponude i donacije, upravlja rezervacijama i zahtjevima. | F-001, F-003, F-004, F-006 – F-008, F-012 – F-014, F-016 – F-019 |
| A-03 Zaposlenik prodajnog mjesta | Primarni akter: potvrđuje preuzimanje kodom (koristi račun prodajnog mjesta). | F-012, NF-08 |
| A-04 Humanitarna organizacija | Primarni akter: pregledava donacijske ponude, šalje zahtjeve, organizira akcije. | F-001 – F-003, F-015 – F-018 |
| A-05 Administrator | Primarni akter: odobrava profile, upravlja računima, sadržajem, kategorijama i cijenama članarina. | F-002, F-005, F-020 |
| A-06 OAuth pružatelj identiteta | Vanjski sustav: autentificira korisnike. | F-001, NF-01 |
| A-07 Servis za plaćanje | Vanjski sustav: obrađuje plaćanje članarina i rezervacija. | F-004, F-010, F-011, NF-03, NF-06 |
| A-08 Kartografska usluga | Vanjski sustav: prikazuje lokacije i udaljenosti. | F-009 |
| D-01 Nastavnici i asistent kolegija | Dionik, nije akter: odobravaju opseg zadatka i pregledavaju rezultat. | Svi zahtjevi s izvorom „Odobreni zadatak” |

---

## 2.4 Ograničenja i pretpostavke

**Cilj:** Zabilježiti projektno specifične granice i pretpostavke koje utječu na zahtjeve ili oblikovanje, zajedno s njihovim izvorom i praktičnom posljedicom. Ovo je njihovo mjerodavno mjesto u dokumentaciji.

| ID | Tip | Opis ograničenja ili pretpostavke | Izvor | Inženjerska posljedica / Provjera |
| --- | --- | --- | --- | --- |
| C-01 | Ograničenje | Autentifikacija se obavlja isključivo preko vanjskog OAuth 2.0 pružatelja. | Odobreni zadatak | Sustav ne pohranjuje lozinke; uloga korisnika vodi se u vlastitoj bazi uz OAuth identitet. |
| C-02 | Ograničenje | Plaćanje (PayPal ili kartica) obavlja vanjski servis. | Odobreni zadatak | Integracija sa servisom za plaćanje i obrada njegovih povratnih poziva; podaci kartice ne prolaze kroz sustav. |
| C-03 | Ograničenje | Lokacije i udaljenosti prikazuju se vanjskom kartografskom uslugom. | Odobreni zadatak | Integracija s kartografskom uslugom; prodajna mjesta moraju imati koordinate. |

### Otvorena pitanja

Pitanja koja tim treba razjasniti s asistentom. Dok se ne razriješe, tim radi prema navedenoj radnoj pretpostavci.

| ID | Tema | Pitanje | Radna pretpostavka | Povezani zahtjevi |
| --- | --- | --- | --- | --- |
| P-01 | Članarine | Je li aktivna članarina uvjet za objavu ponuda i što se događa s ponudama nakon isteka? | Bez aktivne članarine nije moguće objaviti novu ponudu. | F-004 |
| P-02 | Članarine | Koliko ranije i kojim kanalom obavijestiti prodajno mjesto o isteku članarine? | Obavijest unutar aplikacije 7 dana prije isteka. | F-004 |
| P-03 | Rezervacije i plaćanje | Može li jedna rezervacija sadržavati ponude više prodajnih mjesta? | Jedna rezervacija odnosi se na jedno prodajno mjesto, uz više stavki. | F-010 |
| P-04 | Rezervacije i plaćanje | Vrijedi li rok otkazivanja od 1 h i vraća li se novac pri otkazivanju? | Rok je 1 h, uz puni povrat preko servisa za plaćanje. | F-011 |
| P-05 | Rezervacije i plaćanje | Što se događa s plaćenim iznosom nepreuzete rezervacije? | Nema povrata novca, a količina se ne vraća u ponudu. | F-012 |
| P-06 | Donacije | Kako se potvrđuje preuzimanje donacije? | Istim kodom za preuzimanje kao kod rezervacija. | F-012, F-016 |
| P-07 | Obavijesti | Kojim kanalom se šalju obavijesti pretplatnicima? | E-poštom. | F-019 |
| P-08 | Administracija | Koje uloge trebaju odobrenje administratora? | Samo humanitarne organizacije; prodajno mjesto aktivira se plaćanjem članarine. | F-002 |
| P-09 | Administracija | Je li popis kategorija hrane fiksan ili ga uređuje administrator? | Administrator uređuje unaprijed definiran početni popis. | F-020 |
| P-10 | Nefunkcijski zahtjevi | Jesu li prihvatljive brojčane vrijednosti 2 s za pretragu uz 1000 ponuda i 99 % dostupnosti? | Vrijednosti su prijedlog tima. | NF-07, NF-09 |

---

## 2.5 Značajne promjene zahtjeva

**Cilj:** Sačuvati razlog promjena koje mijenjaju dogovoreni opseg, prioritet ili kriterije prihvaćanja, uz istodobno održavanje prethodnih zahtjeva ažurnima.

| Datum | ID zahtjeva | Promjena i razlog | Dogovoreno s / dokaz |
| --- | --- | --- | --- |
|  |  |  |  |

---

## 2.6 Sljedivost zahtjeva

**Cilj:** Osigurati dvosmjernu sljedivost — povezati zahtjeve s opisanim ponašanjem, dijelovima sustava koji ih ostvaruju te ispitivanjem ili drugom provjerom. 

| ID zahtjeva | Obrazac uporabe / modul | Arhitekturna realizacija | Ispitivanje ili provjera |
| --- | --- | --- | --- |
| F-001 | [UC-001] | [Komponenta, modul ili drugo mjesto realizacije] | [ST-01, CT-01 ili druga provjera] |
|  |  |  |  |

---

## 2.7 Pregled zahtjeva

**Cilj:** Zabilježiti važne povratne informacije o zahtjevima i odluke koje iz njih proizlaze na dvije formalne kontrolne točke projekta, u 7. i 14. tjednu.

| Kontrolna točka | Povratna informacija ili nalaz | Odluka o zahtjevu ili opsegu |
| --- | --- | --- |
| Iteracija 1 | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |
| Demo 2  | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |
| Završni pregled | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |

---

>**Završna provjera:** Zahtjevi su aktualni, provjerljivi i povezani. Svaki važan zahtjev moguće je pratiti od njegova opisa i ponašanja preko mjesta realizacije u sustavu do odgovarajućeg ispitivanja ili druge provjere. Poveznice koriste stvarne identifikatore i nazive iz projektne dokumentacije.

