# 2. Analiza zahtjeva

**Cilj:** Iz odobrenog opsega projekta izvesti prepoznatljive, prioritetizirane i provjerljive zahtjeve. Zahtjevi se mogu mijenjati; pri završnoj predaji moraju odražavati dogovorenu aplikaciju.

## 2.1 Funkcijski zahtjevi

**Cilj:** Navesti što aplikacija mora omogućiti korisnicima, odakle pojedina mogućnost proizlazi i koji se opažljivi rezultat smatra prihvaćanjem.

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| F-001 | Korisnik se registrira i prijavljuje preko vanjskog OAuth 2.0 pružatelja. | Visok | Odobreni zadatak | Korisnik se prijavljuje preko OAuth pružatelja i dobiva pristup funkcijama svoje uloge; odustajanjem od prijave te funkcije ostaju nedostupne. |
| F-002 | Pri registraciji korisnik odabire ulogu: kupac, prodajno mjesto ili humanitarna organizacija. | Visok | Odobreni zadatak | Pri prvoj prijavi korisnik mora odabrati jednu od tri uloge; nakon odabira prikazuje mu se sučelje te uloge. |
| F-003 | Profil humanitarne organizacije postaje aktivan tek nakon odobrenja administratora. | Visok | Odobreni zadatak | Nova humanitarna organizacija ima status „na čekanju” i ne vidi donacijske ponude dok je administrator ne odobri. |
| F-004 | Prodajno mjesto može objavljivati ponude tek s aktivnom (plaćenom) članarinom. | Visok | Odobreni zadatak | Prodajno mjesto bez aktivne članarine ne može objaviti ponudu i dobiva uputu za plaćanje; nakon plaćanja objava je moguća. Vidi P-01. |
| F-005 | Korisnik se može odjaviti i urediti osnovne podatke svog profila. | Srednji | Odobreni zadatak | Nakon odjave zaštićene funkcije nisu dostupne; spremljene izmjene profila odmah su vidljive. |
| F-006 | Prodajno mjesto ima javni profil: naziv, vrsta objekta, adresa, kontakt, radno vrijeme, fotografija ili logo, popis trenutno dostupnih ponuda. | Visok | Odobreni zadatak | Javni profil prikazuje sve navedene podatke i samo ponude koje su trenutno dostupne. |
| F-007 | Humanitarna organizacija ima javni profil: naziv, kontakt podaci, područje djelovanja. | Visok | Odobreni zadatak | Javni profil organizacije prikazuje naziv, kontakt podatke i područje djelovanja. |
| F-008 | Javni profil prodajnog mjesta prikazuje prosječnu ocjenu i komentare. | Srednji | Odobreni zadatak | Profil prikazuje prosječnu ocjenu i popis komentara; nova ocjena mijenja prikazani prosjek. |
| F-009 | Prodajno mjesto plaća mjesečnu ili godišnju članarinu putem PayPala ili kartice preko vanjskog servisa. | Visok | Odobreni zadatak | Nakon uspješnog plaćanja u sandbox okruženju prodajno mjesto ima aktivnu članarinu s prikazanim datumom isteka. |
| F-010 | Administrator određuje i mijenja cijene mjesečne i godišnje članarine. | Visok | Odobreni zadatak | Nova cijena prikazuje se pri sljedećem plaćanju; već plaćene članarine ostaju nepromijenjene. |
| F-011 | Sustav prati trajanje članarine i obavještava prodajno mjesto prije isteka. | Srednji | Odobreni zadatak | Prodajno mjesto dobiva obavijest prije isteka članarine; nakon isteka članarina više nije aktivna. Vidi P-02. |
| F-012 | Prodajno mjesto objavljuje proizvod: naziv, kategorija, količina, redovna cijena, snižena cijena **ili** oznaka donacije, rok upotrebe, krajnje vrijeme preuzimanja, fotografije (neobavezno). | Visok | Odobreni zadatak | Ponuda se ne može spremiti bez obaveznih polja; snižena cijena mora biti manja od redovne; objavljena ponuda vidljiva je u pretrazi. |
| F-013 | Prodajno mjesto objavljuje paket iznenađenja: približna vrsta sadržaja, ukupna vrijednost, prodajna cijena, broj paketa, interval preuzimanja, fotografije (neobavezno). | Visok | Odobreni zadatak | Objavljeni paket prikazuje se u pretrazi s brojem dostupnih paketa i intervalom preuzimanja. |
| F-014 | Prodajno mjesto proizvod može označiti kao „samo za donaciju”; takav proizvod vide samo humanitarne organizacije. | Visok | Odobreni zadatak | Donacijsku ponudu vidi aktivna humanitarna organizacija; kupac je ne vidi u pretrazi ni na profilu prodajnog mjesta. |
| F-015 | Prodajno mjesto uređuje i povlači svoje ponude. | Visok | Odobreni zadatak | Izmjene su odmah vidljive; povučena ponuda više se ne prikazuje i ne može se rezervirati. |
| F-016 | Sustav automatski skida ponudu kad istekne vrijeme preuzimanja ili dostupna količina padne na 0. | Visok | Odobreni zadatak | Nakon isteka vremena preuzimanja ili rezervacije posljednjeg komada ponuda se više ne prikazuje u pretrazi. |
| F-017 | Kupac pretražuje i filtrira ponude prema kategoriji, lokaciji (udaljenosti), cijeni i vremenu preuzimanja. | Visok | Odobreni zadatak | Rezultati sadrže samo ponude koje zadovoljavaju sve odabrane filtre. |
| F-018 | Lokacije prodajnih mjesta i udaljenost od korisnika prikazuju se vanjskom kartografskom uslugom. | Visok | Odobreni zadatak | Karta prikazuje oznake prodajnih mjesta; uz rezultat je prikazana udaljenost od korisnikove lokacije. |
| F-019 | Kupac otvara detalje ponude i profil prodajnog mjesta. | Visok | Odobreni zadatak | Odabirom ponude otvaraju se njezini detalji s poveznicom na profil prodajnog mjesta. |
| F-020 | Kupac rezervira jedan ili više dostupnih proizvoda ili paketa, uz odabranu količinu. | Visok | Odobreni zadatak | Kupac ne može rezervirati količinu veću od dostupne; rezervacija sadrži odabrane stavke i količine. Vidi P-03. |
| F-021 | Kupac plaća rezervaciju PayPalom ili karticom preko vanjskog servisa. | Visok | Odobreni zadatak | Plaćanje se uspješno izvršava u sandbox okruženju; neuspjelo plaćanje prikazuje poruku i ne potvrđuje rezervaciju. |
| F-022 | Nakon uspješnog plaćanja sustav smanjuje dostupnu količinu, izdaje potvrdu i jedinstveni kod za preuzimanje (tekst i QR). | Visok | Odobreni zadatak | Nakon plaćanja kupac vidi potvrdu s kodom u tekstualnom i QR obliku, a dostupna količina smanjena je za rezerviranu. |
| F-023 | Kupac otkazuje rezervaciju najkasnije 1 sat prije isteka predviđenog vremena preuzimanja; količina se vraća u ponudu. | Visok | Odobreni zadatak | Otkazivanje do 1 h prije isteka preuzimanja vraća količinu u ponudu; nakon toga otkazivanje nije moguće. Vidi P-04. |
| F-024 | Zaposlenik prodajnog mjesta potvrđuje preuzimanje unosom ili skeniranjem koda. | Visok | Odobreni zadatak | Ispravan kod označava rezervaciju preuzetom; neispravan ili već iskorišten kod sustav odbija. |
| F-025 | Kupac pregledava svoje aktivne i prošle rezervacije. | Srednji | Odobreni zadatak | Kupac vidi svoje rezervacije podijeljene na aktivne i prošle, uz status svake. |
| F-026 | Prodajno mjesto pregledava rezervacije za svoje ponude. | Srednji | Odobreni zadatak | Prodajno mjesto vidi rezervacije samo za vlastite ponude, uz njihov status. |
| F-027 | Sustav rezervaciju koja nije preuzeta u roku označava kao nepreuzetu. | Srednji | Odobreni zadatak | Nakon isteka vremena preuzimanja nepreuzeta rezervacija dobiva status „nepreuzeto”. Vidi P-05. |
| F-028 | Nakon potvrđenog preuzimanja kupac može ocijeniti prodajno mjesto i ostaviti komentar. | Srednji | Odobreni zadatak | Ocjenjivanje je moguće samo nakon potvrđenog preuzimanja i samo jednom po rezervaciji. |
| F-029 | Prodajno mjesto odgovara na komentare. | Srednji | Odobreni zadatak | Odgovor prodajnog mjesta prikazuje se uz komentar na javnom profilu. |
| F-030 | Aktivna humanitarna organizacija pregledava donacijske ponude. | Visok | Odobreni zadatak | Aktivna organizacija vidi popis dostupnih donacijskih ponuda; organizacija na čekanju ih ne vidi. |
| F-031 | Humanitarna organizacija šalje zahtjev za preuzimanje određene količine donacijske ponude. | Visok | Odobreni zadatak | Zahtjev s količinom do dostupne vidljiv je prodajnom mjestu i organizaciji sa statusom „na čekanju”. |
| F-032 | Prodajno mjesto odobrava ili odbija zahtjev; organizacija dobiva obavijest. | Visok | Odobreni zadatak | Nakon odluke prodajnog mjesta organizacija dobiva obavijest, a zahtjev ima status „odobren” ili „odbijen”. |
| F-033 | Odobreni zahtjev rezervira količinu i ima način potvrde preuzimanja. | Srednji | Odobreni zadatak | Odobrena količina oduzima se od dostupne; preuzimanje se potvrđuje kao u F-024. Vidi P-06. |
| F-034 | Prodajno mjesto ili humanitarna organizacija kreira akciju: naziv, opis, lokacija, datum početka i završetka, popis potrebnih vrsta proizvoda. | Srednji | Odobreni zadatak | Akcija sa svim obaveznim podacima prikazuje se u popisu akcija. |
| F-035 | Kupac se prijavljuje na akciju i označava proizvode koje planira donirati. | Srednji | Odobreni zadatak | Organizator vidi prijavljenog kupca i proizvode koje planira donirati. |
| F-036 | Organizator akcije evidentira stvarno zaprimljenu donaciju. | Srednji | Odobreni zadatak | Evidentirana donacija prikazuje se u pregledu akcije uz sudionika. |
| F-037 | Korisnici pregledavaju aktivne i nadolazeće akcije. | Srednji | Odobreni zadatak | Popis prikazuje samo akcije čiji datum završetka nije prošao. |
| F-038 | Korisnik se pretplaćuje i odjavljuje s obavijesti o novim ponudama odabranih prodajnih mjesta ili kategorija hrane. | Srednji | Odobreni zadatak | Korisnik dodaje i uklanja pretplate; trenutačne pretplate vidljive su u postavkama. |
| F-039 | Sustav šalje obavijest pretplatnicima kad se objavi odgovarajuća ponuda. | Srednji | Odobreni zadatak | Nakon objave ponude koja odgovara pretplati pretplatnik dobiva obavijest; korisnik bez te pretplate ne dobiva. Vidi P-07. |
| F-040 | Administrator odobrava ili odbija nove profile. | Visok | Odobreni zadatak | Profil na čekanju vidljiv je administratoru; odobreni profil postaje aktivan, a odbijeni ne. Vidi P-08. |
| F-041 | Administrator pregledava, blokira i briše korisničke račune. | Srednji | Odobreni zadatak | Blokirani korisnik ne može se prijaviti; obrisani račun više se ne prikazuje. |
| F-042 | Administrator uklanja neprimjeren sadržaj (ponude, komentare, akcije). | Srednji | Odobreni zadatak | Uklonjeni sadržaj više nije vidljiv korisnicima. |
| F-043 | Administrator upravlja popisom kategorija hrane. | Nizak | Odobreni zadatak | Dodana kategorija dostupna je pri objavi ponude i u filtru pretrage. Vidi P-09. |
| F-044 | Kupac sprema prodajna mjesta u popis omiljenih. | Nizak | Prijedlog tima | Kupac dodaje i uklanja prodajno mjesto s popisa omiljenih i vidi taj popis. |
| F-045 | Kupac sortira rezultate pretrage prema udaljenosti, cijeni ili vremenu isteka preuzimanja. | Nizak | Prijedlog tima | Rezultati su poredani prema odabranom kriteriju. |
| F-046 | Prodajno mjesto uz proizvod navodi alergene, a kupac prema njima filtrira. | Nizak | Prijedlog tima | Uz filtar za određeni alergen ne prikazuju se ponude koje ga sadrže. |
| F-047 | Sustav kupca podsjeća na nepreuzetu rezervaciju 1 sat prije isteka preuzimanja. | Nizak | Prijedlog tima | Kupac s nepreuzetom rezervacijom dobiva podsjetnik 1 h prije isteka preuzimanja. |
| F-048 | Prodajno mjesto ponovno objavljuje raniju ponudu kao predložak. | Nizak | Prijedlog tima | Odabirom ranije ponude otvara se obrazac popunjen njezinim podacima. |
| F-049 | Prodajno mjesto pregledava osnovnu statistiku: prodane, donirane i nepreuzete ponude. | Nizak | Prijedlog tima | Statistika prikazuje broj prodanih, doniranih i nepreuzetih ponuda prodajnog mjesta. |
| F-050 | Korisnik prijavljuje neprimjeren komentar ili ponudu administratoru. | Nizak | Prijedlog tima | Prijavljeni sadržaj pojavljuje se u administratorskom pregledu prijava. |

## 2.2 Nefunkcijski zahtjevi

**Cilj:** Odrediti važna svojstva kvalitete i uvjete rada odobrene aplikacije na način koji tim može razumno provjeriti.

| ID | Opis | Prioritet | Izvor | Način provjere |
| --- | --- | --- | --- | --- |
| NF-01 | Sva komunikacija ide preko HTTPS-a; autentifikacija isključivo preko OAuth 2.0. | Visok | Odobreni zadatak | Pregled konfiguracije: HTTP zahtjev preusmjerava se na HTTPS; ne postoji prijava lozinkom. |
| NF-02 | Sustav ne pohranjuje podatke platnih kartica; plaćanje obavlja vanjski servis. | Visok | Odobreni zadatak | Pregled sheme baze i tijeka plaćanja: nijedna tablica ne sadrži podatke kartice. |
| NF-03 | Pristup funkcijama kontrolira se prema ulogama; korisnik vidi i mijenja samo podatke za koje ima ovlasti. | Visok | Procjena tima | Testni scenarij: zahtjev prema tuđim podacima ili administratorskoj funkciji bez ovlasti sustav odbija. |
| NF-04 | Kod za preuzimanje je jedinstven, nepredvidiv i vrijedi samo za jedno preuzimanje. | Visok | Procjena tima | Testni scenarij: ponovna uporaba koda je odbijena; pregled koda: kod se generira kriptografski sigurnim generatorom. |
| NF-05 | Osobni podaci obrađuju se u skladu s GDPR-om; lokacija korisnika koristi se samo uz njegovo dopuštenje. | Srednji | GDPR | Testni scenarij: bez dopuštenja za lokaciju pretraga radi uz ručno unesenu lokaciju; pregled prikupljanih osobnih podataka. |
| NF-06 | Istovremene rezervacije ne smiju prodati više od dostupne količine (transakcije ili zaključavanje). | Visok | Procjena tima | Testni scenarij: istovremena rezervacija posljednjeg komada iz dvaju klijenata; uspijeva samo jedna. |
| NF-07 | Rezervacija se potvrđuje tek nakon uspješnog plaćanja; neuspjelo plaćanje ne zauzima količinu trajno. | Visok | Procjena tima | Testni scenarij: odbijeno plaćanje u sandboxu vraća količinu u ponudu. |
| NF-08 | Pretraga ponuda vraća rezultate za manje od 2 s uz do 1000 aktivnih ponuda. | Srednji | Procjena tima | Mjerenje: izmjeriti vrijeme odziva pretrage nad 1000 oglednih ponuda. Vidi P-10. |
| NF-09 | Sučelje je responzivno i upotrebljivo na mobitelu (zaposlenik skenira kod kamerom). | Visok | Procjena tima | Pregled: ključni tijekovi izvršeni na mobitelu, uključujući skeniranje QR koda kamerom. |
| NF-10 | Sučelje je na hrvatskom jeziku; vremena se prikazuju u zoni Europe/Zagreb, cijene u eurima. | Srednji | Procjena tima | Pregled reprezentativnih zaslona: tekstovi, vremena i cijene u zadanom obliku. |
| NF-11 | Sustav je dostupan javno putem interneta; ciljna dostupnost 99 % tijekom demonstracije. | Visok | Procjena tima | Pregled: aplikacija je dostupna na javnoj adresi; dostupnost se prati tijekom razdoblja demonstracije. Vidi P-10. |
| NF-12 | Ispadi vanjskih servisa (plaćanje, karte, e-mail) prikazuju jasnu poruku i ne ruše aplikaciju. | Srednji | Procjena tima | Testni scenarij: simulirati nedostupnost svakog vanjskog servisa i provjeriti poruku i rad ostatka aplikacije. |
| NF-13 | Kod je u Git repozitoriju, uz README s uputama za pokretanje i automatizirane testove ključnih funkcija. | Srednji | Pravila kolegija | Pregled repozitorija: aplikacija se pokreće prema README-u, a automatizirani testovi prolaze. |
| NF-14 | Plaćanja se razvijaju i testiraju u sandbox okruženju vanjskog servisa. | Visok | Procjena tima | Pregled konfiguracije: razvojno i testno okruženje koriste sandbox ključeve servisa za plaćanje. |

## 2.3 Dionici i akteri

**Cilj:** Utvrditi uloge koje utječu na zahtjeve i razlikovati dionike od aktera koji komuniciraju s aplikacijom.

| ID uloge ili aktera | Odnos prema sustavu | Relevantni zahtjevi |
| --- | --- | --- |
| A-01 Kupac | Primarni akter: pretražuje ponude, rezervira i plaća, preuzima, ocjenjuje, sudjeluje u akcijama. | F-001, F-002, F-005, F-017 – F-023, F-025, F-028, F-035, F-037 – F-039, F-044 – F-047, F-050 |
| A-02 Prodajno mjesto | Primarni akter: plaća članarinu, objavljuje ponude i donacije, upravlja rezervacijama i zahtjevima. | F-002, F-004 – F-006, F-009, F-011 – F-016, F-026, F-029, F-032, F-034, F-036, F-048, F-049 |
| A-03 Zaposlenik prodajnog mjesta | Primarni akter: potvrđuje preuzimanje kodom (koristi račun prodajnog mjesta). | F-024, NF-09 |
| A-04 Humanitarna organizacija | Primarni akter: pregledava donacijske ponude, šalje zahtjeve, organizira akcije. | F-002, F-003, F-007, F-030 – F-034, F-036, F-037 |
| A-05 Administrator | Primarni akter: odobrava profile, upravlja računima, sadržajem, kategorijama i cijenama članarina. | F-003, F-010, F-040 – F-043, F-050 |
| A-06 OAuth pružatelj identiteta | Vanjski sustav: autentificira korisnike. | F-001, NF-01 |
| A-07 Servis za plaćanje | Vanjski sustav: obrađuje plaćanje članarina i rezervacija. | F-009, F-021, NF-02, NF-07, NF-14 |
| A-08 Kartografska usluga | Vanjski sustav: prikazuje lokacije i udaljenosti. | F-018 |
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
| P-01 | Članarine | Je li aktivna članarina uvjet za objavu ponuda i što se događa s ponudama nakon isteka? | Bez aktivne članarine nije moguće objaviti novu ponudu. | F-004, F-011 |
| P-02 | Članarine | Koliko ranije i kojim kanalom obavijestiti prodajno mjesto o isteku članarine? | Obavijest unutar aplikacije 7 dana prije isteka. | F-011 |
| P-03 | Rezervacije i plaćanje | Može li jedna rezervacija sadržavati ponude više prodajnih mjesta? | Jedna rezervacija odnosi se na jedno prodajno mjesto, uz više stavki. | F-020 |
| P-04 | Rezervacije i plaćanje | Vrijedi li rok otkazivanja od 1 h i vraća li se novac pri otkazivanju? | Rok je 1 h, uz puni povrat preko servisa za plaćanje. | F-023 |
| P-05 | Rezervacije i plaćanje | Što se događa s plaćenim iznosom nepreuzete rezervacije? | Nema povrata novca, a količina se ne vraća u ponudu. | F-027 |
| P-06 | Donacije | Kako se potvrđuje preuzimanje donacije? | Istim kodom za preuzimanje kao kod rezervacija. | F-024, F-033 |
| P-07 | Obavijesti | Kojim kanalom se šalju obavijesti pretplatnicima? | E-poštom. | F-039 |
| P-08 | Administracija | Koje uloge trebaju odobrenje administratora? | Samo humanitarne organizacije; prodajno mjesto aktivira se plaćanjem članarine. | F-003, F-040 |
| P-09 | Administracija | Je li popis kategorija hrane fiksan ili ga uređuje administrator? | Administrator uređuje unaprijed definiran početni popis. | F-043 |
| P-10 | Nefunkcijski zahtjevi | Jesu li prihvatljive brojčane vrijednosti 2 s za pretragu uz 1000 ponuda i 99 % dostupnosti? | Vrijednosti su prijedlog tima. | NF-08, NF-11 |

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

