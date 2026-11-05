# 2. Analiza zahtjeva

**Cilj:** Iz odobrenog opsega projekta izvesti prepoznatljive, prioritetizirane i provjerljive zahtjeve. Zahtjevi se mogu mijenjati; pri završnoj predaji moraju odražavati dogovorenu aplikaciju.

## 2.1 Funkcijski zahtjevi

**Cilj:** Navesti što aplikacija mora omogućiti korisnicima, odakle pojedina mogućnost proizlazi i koji se opažljivi rezultat smatra prihvaćanjem.

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| F-001 | Sustav omogućuje prijavu preko OAuth 2.0 pružatelja i odabir uloge pri prvoj prijavi: kupac, prodajno mjesto ili humanitarna organizacija. | Visok | Odobreni zadatak | Bez odabira uloge nema nastavka; nakon odjave zaštićene stranice traže prijavu. |
| F-002 | Sustav omogućuje administratoru odobravanje ili odbijanje profila humanitarne organizacije. | Visok | Odobreni zadatak | Neodobrena organizacija ne vidi donacije. |
| F-003 | Sustav omogućuje prodajnom mjestu i humanitarnoj organizaciji uređivanje javnog profila (naziv, adresa, kontakt, radno vrijeme, logo; organizaciji i područje djelovanja). | Visok | Odobreni zadatak | Profil prikazuje podatke, aktivne ponude, prosječnu ocjenu i komentare. |
| F-004 | Sustav omogućuje prodajnom mjestu plaćanje mjesečne ili godišnje članarine (PayPal ili kartica) i objavu ponuda samo uz aktivnu članarinu. | Visok | Odobreni zadatak | Nakon plaćanja vidi se datum isteka; obavijest 7 dana prije; nakon isteka nema objave. |
| F-005 | Sustav omogućuje administratoru određivanje cijena mjesečne i godišnje članarine. | Visok | Odobreni zadatak | Nova cijena vrijedi od sljedećeg plaćanja. |
| F-006 | Sustav omogućuje prodajnom mjestu objavu proizvoda (naziv, kategorija, količina, redovna i snižena cijena, rok upotrebe, vrijeme preuzimanja, fotografija) i njegovo označavanje kao donacije. | Visok | Odobreni zadatak | Ne sprema se bez obaveznih polja ni sa sniženom cijenom ≥ redovne; donaciju vide samo organizacije. |
| F-007 | Sustav omogućuje prodajnom mjestu objavu paketa iznenađenja (opis sadržaja, ukupna vrijednost, cijena, broj paketa, interval preuzimanja). | Visok | Odobreni zadatak | Ne sprema se ako cijena nije manja od vrijednosti; prikazuje se broj dostupnih paketa. |
| F-008 | Sustav omogućuje prodajnom mjestu uređivanje i povlačenje ponuda te ih automatski skida nakon isteka vremena preuzimanja ili kad se rasprodaju. | Visok | Odobreni zadatak | Povučena, istekla ili rasprodana ponuda nije vidljiva ni rezervabilna. |
| F-009 | Sustav omogućuje kupcu pretragu ponuda na popisu i karti te filtriranje po kategoriji, udaljenosti, cijeni i vremenu preuzimanja. | Visok | Odobreni zadatak | Prikazuju se samo ponude koje zadovoljavaju sve filtre, s udaljenošću u km. |
| F-010 | Sustav omogućuje kupcu rezervaciju ponuda i plaćanje PayPalom ili karticom te mu izdaje kod za preuzimanje (tekst i QR). | Visok | Odobreni zadatak | Nema rezervacije iznad dostupnog ni bez uspješnog plaćanja. |
| F-011 | Sustav omogućuje kupcu otkazivanje rezervacije najkasnije 1 h prije kraja preuzimanja, uz povrat novca. | Visok | Odobreni zadatak | Otkazivanje vraća količinu; kasnije od 1 h prije kraja nije moguće. |
| F-012 | Sustav omogućuje zaposleniku prodajnog mjesta potvrdu preuzimanja skeniranjem ili unosom koda. | Visok | Odobreni zadatak | Ispravan kod → „preuzeto”; neispravan ili iskorišten se odbija; nakon roka „nepreuzeto”. |
| F-013 | Sustav omogućuje kupcu pregled svojih rezervacija, a prodajnom mjestu pregled rezervacija svojih ponuda. | Srednji | Odobreni zadatak | Korisnik vidi samo svoje rezervacije sa statusom. |
| F-014 | Sustav omogućuje kupcu ocjenjivanje (1–5) i komentiranje prodajnog mjesta nakon preuzimanja, a prodajnom mjestu odgovor na komentar. | Srednji | Odobreni zadatak | Jedna ocjena po preuzetoj rezervaciji; prosjek se odmah ažurira. |
| F-015 | Sustav omogućuje humanitarnoj organizaciji pregled donacija i slanje zahtjeva za određenu količinu. | Visok | Odobreni zadatak | Zahtjev iznad dostupnog se odbija; novi zahtjev je „na čekanju”. |
| F-016 | Sustav omogućuje prodajnom mjestu odobravanje ili odbijanje zahtjeva za donaciju i obavještava organizaciju o odluci. | Visok | Odobreni zadatak | Odobrenje rezervira količinu i izdaje kod; odbijanje je ostavlja dostupnom. |
| F-017 | Sustav omogućuje prodajnom mjestu i humanitarnoj organizaciji kreiranje akcije prikupljanja hrane (naziv, opis, lokacija, trajanje, potrebni proizvodi). | Srednji | Odobreni zadatak | Akcija je vidljiva do završetka. |
| F-018 | Sustav omogućuje kupcu prijavu na akciju uz navođenje planirane donacije, a organizatoru evidentiranje zaprimljenih donacija. | Srednji | Odobreni zadatak | Organizator vidi sudionike, planirane i zaprimljene donacije. |
| F-019 | Sustav omogućuje kupcu pretplatu na nove ponude odabranih prodajnih mjesta ili kategorija. | Srednji | Odobreni zadatak | Obavijest dobivaju samo pretplatnici. |
| F-020 | Sustav omogućuje administratoru blokiranje i brisanje računa, uklanjanje neprimjerenog sadržaja i uređivanje kategorija hrane. | Srednji | Odobreni zadatak | Blokirani se ne može prijaviti; uklonjeni sadržaj nije vidljiv; nova kategorija odmah dostupna. |

## 2.2 Nefunkcijski zahtjevi

**Cilj:** Odrediti važna svojstva kvalitete i uvjete rada odobrene aplikacije na način koji tim može razumno provjeriti.

| ID | Opis | Prioritet | Izvor | Način provjere |
| --- | --- | --- | --- | --- |
| NF-01 | Sustav podržava najmanje 100 istovremenih korisnika uz vrijeme odziva ispod 2 s. | Visok | Procjena tima | Mjerenje: test opterećenja sa 100 simuliranih korisnika. |
| NF-02 | Pretraga ponuda vraća rezultate za manje od 2 s uz do 1000 aktivnih ponuda. | Srednji | Procjena tima | Mjerenje: vrijeme odziva pretrage nad 1000 oglednih ponuda. |
| NF-03 | Ključni tijekovi rade na mobitelu širine zaslona 360 px. | Visok | Procjena tima | Pregled: ključni tijekovi izvršeni na mobitelu. |

## 2.3 Dionici i akteri

**Cilj:** Utvrditi uloge koje utječu na zahtjeve i razlikovati dionike od aktera koji komuniciraju s aplikacijom.

| ID uloge ili aktera | Odnos prema sustavu | Relevantni zahtjevi |
| --- | --- | --- |
| A-01 Kupac | Primarni akter: pretražuje ponude, rezervira i plaća, preuzima, ocjenjuje, sudjeluje u akcijama. | F-001, F-009 – F-011, F-013, F-014, F-017 – F-019 |
| A-02 Prodajno mjesto | Primarni akter: plaća članarinu, objavljuje ponude i donacije, upravlja rezervacijama i zahtjevima. | F-001, F-003, F-004, F-006 – F-008, F-012 – F-014, F-016 – F-019 |
| A-03 Zaposlenik prodajnog mjesta | Primarni akter: potvrđuje preuzimanje kodom (koristi račun prodajnog mjesta). | F-012, NF-03 |
| A-04 Humanitarna organizacija | Primarni akter: pregledava donacijske ponude, šalje zahtjeve, organizira akcije. | F-001 – F-003, F-015 – F-018 |
| A-05 Administrator | Primarni akter: odobrava profile, upravlja računima, sadržajem, kategorijama i cijenama članarina. | F-002, F-005, F-020 |
| A-06 OAuth pružatelj identiteta | Vanjski sustav: autentificira korisnike. | F-001, C-01 |
| A-07 Servis za plaćanje | Vanjski sustav: obrađuje plaćanje članarina i rezervacija. | F-004, F-010, F-011 |
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

