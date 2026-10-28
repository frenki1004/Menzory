# 2. Analiza zahtjeva

**Cilj:** Iz odobrenog opsega projekta izvesti prepoznatljive, prioritetizirane i provjerljive zahtjeve. Zahtjevi se mogu mijenjati; pri završnoj predaji moraju odražavati dogovorenu aplikaciju. Izvori, odluke i poveznice u primjerima kolegija nastavni su scenariji, a ne projektni zapisi.

<details>
<summary><strong>Održavanje zahtjeva ažurnima</strong></summary>

Primjeri koriste temu projekta CrisisMap. Neki namjerno sadrže korisne nedostatke za raspravu. Izvori, odluke i poveznice na provjere u tim primjerima **nastavni su scenariji**, a ne zapisi rada stvarnog studentskog tima. Zamijenite ih zahtjevima i dokazima svojeg odobrenog projekta. Značajne promjene zabilježite u odjeljku 2.5.

</details>

## 2.1 Funkcijski zahtjevi

**Cilj:** Navesti što aplikacija mora omogućiti korisnicima, odakle pojedina mogućnost proizlazi i koji se opažljivi rezultat smatra prihvaćanjem.

Prioritet: **Visok** (nužno za osnovnu vrijednost), **Srednji**, **Nizak**. Zahtjevi označeni s ❓ ovise o otvorenim pitanjima koja tim još treba razjasniti.

### 2.1.1 Registracija, prijava i uloge

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| FZ-01 | Korisnik se registrira i prijavljuje preko vanjskog OAuth 2.0 pružatelja. | Visok | Odobreni zadatak |  |
| FZ-02 | Pri registraciji korisnik odabire ulogu: kupac, prodajno mjesto ili humanitarna organizacija. | Visok | Odobreni zadatak |  |
| FZ-03 | Profil humanitarne organizacije postaje aktivan tek nakon odobrenja administratora. | Visok | Odobreni zadatak |  |
| FZ-04 | Prodajno mjesto može objavljivati ponude tek s aktivnom (plaćenom) članarinom. ❓ | Visok | Odobreni zadatak |  |
| FZ-05 | Korisnik se može odjaviti i urediti osnovne podatke svog profila. | Srednji | Odobreni zadatak |  |

### 2.1.2 Profili

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| FZ-06 | Prodajno mjesto ima javni profil: naziv, vrsta objekta, adresa, kontakt, radno vrijeme, fotografija ili logo, popis trenutno dostupnih ponuda. | Visok | Odobreni zadatak |  |
| FZ-07 | Humanitarna organizacija ima javni profil: naziv, kontakt podaci, područje djelovanja. | Visok | Odobreni zadatak |  |
| FZ-08 | Javni profil prodajnog mjesta prikazuje prosječnu ocjenu i komentare. | Srednji | Odobreni zadatak |  |

### 2.1.3 Članarine

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| FZ-09 | Prodajno mjesto plaća mjesečnu ili godišnju članarinu putem PayPala ili kartice preko vanjskog servisa. | Visok | Odobreni zadatak |  |
| FZ-10 | Administrator određuje i mijenja cijene mjesečne i godišnje članarine. | Visok | Odobreni zadatak |  |
| FZ-11 | Sustav prati trajanje članarine i obavještava prodajno mjesto prije isteka. ❓ | Srednji | Odobreni zadatak |  |

### 2.1.4 Ponude

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| FZ-12 | Prodajno mjesto objavljuje proizvod: naziv, kategorija, količina, redovna cijena, snižena cijena **ili** oznaka donacije, rok upotrebe, krajnje vrijeme preuzimanja, fotografije (neobavezno). | Visok | Odobreni zadatak |  |
| FZ-13 | Prodajno mjesto objavljuje paket iznenađenja: približna vrsta sadržaja, ukupna vrijednost, prodajna cijena, broj paketa, interval preuzimanja, fotografije (neobavezno). | Visok | Odobreni zadatak |  |
| FZ-14 | Prodajno mjesto proizvod može označiti kao „samo za donaciju“; takav proizvod vide samo humanitarne organizacije. | Visok | Odobreni zadatak |  |
| FZ-15 | Prodajno mjesto uređuje i povlači svoje ponude. | Visok | Odobreni zadatak |  |
| FZ-16 | Sustav automatski skida ponudu kad istekne vrijeme preuzimanja ili dostupna količina padne na 0. | Visok | Odobreni zadatak |  |

### 2.1.5 Pretraživanje i karta

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| FZ-17 | Kupac pretražuje i filtrira ponude prema kategoriji, lokaciji (udaljenosti), cijeni i vremenu preuzimanja. | Visok | Odobreni zadatak |  |
| FZ-18 | Lokacije prodajnih mjesta i udaljenost od korisnika prikazuju se vanjskom kartografskom uslugom. | Visok | Odobreni zadatak |  |
| FZ-19 | Kupac otvara detalje ponude i profil prodajnog mjesta. | Visok | Odobreni zadatak |  |

### 2.1.6 Rezervacija, plaćanje i preuzimanje

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| FZ-20 | Kupac rezervira jedan ili više dostupnih proizvoda ili paketa, uz odabranu količinu. ❓ | Visok | Odobreni zadatak |  |
| FZ-21 | Kupac plaća rezervaciju PayPalom ili karticom preko vanjskog servisa. | Visok | Odobreni zadatak |  |
| FZ-22 | Nakon uspješnog plaćanja sustav smanjuje dostupnu količinu, izdaje potvrdu i jedinstveni kod za preuzimanje (tekst i QR). | Visok | Odobreni zadatak |  |
| FZ-23 | Kupac otkazuje rezervaciju najkasnije 1 sat prije isteka predviđenog vremena preuzimanja; količina se vraća u ponudu. ❓ | Visok | Odobreni zadatak |  |
| FZ-24 | Zaposlenik prodajnog mjesta potvrđuje preuzimanje unosom ili skeniranjem koda. | Visok | Odobreni zadatak |  |
| FZ-25 | Kupac pregledava svoje aktivne i prošle rezervacije. | Srednji | Odobreni zadatak |  |
| FZ-26 | Prodajno mjesto pregledava rezervacije za svoje ponude. | Srednji | Odobreni zadatak |  |
| FZ-27 | Sustav rezervaciju koja nije preuzeta u roku označava kao nepreuzetu. ❓ | Srednji | Odobreni zadatak |  |

### 2.1.7 Ocjene i komentari

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| FZ-28 | Nakon potvrđenog preuzimanja kupac može ocijeniti prodajno mjesto i ostaviti komentar. | Srednji | Odobreni zadatak |  |
| FZ-29 | Prodajno mjesto odgovara na komentare. | Srednji | Odobreni zadatak |  |

### 2.1.8 Donacije humanitarnim organizacijama

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| FZ-30 | Aktivna humanitarna organizacija pregledava donacijske ponude. | Visok | Odobreni zadatak |  |
| FZ-31 | Humanitarna organizacija šalje zahtjev za preuzimanje određene količine donacijske ponude. | Visok | Odobreni zadatak |  |
| FZ-32 | Prodajno mjesto odobrava ili odbija zahtjev; organizacija dobiva obavijest. | Visok | Odobreni zadatak |  |
| FZ-33 | Odobreni zahtjev rezervira količinu i ima način potvrde preuzimanja. ❓ | Srednji | Odobreni zadatak |  |

### 2.1.9 Akcije prikupljanja hrane

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| FZ-34 | Prodajno mjesto ili humanitarna organizacija kreira akciju: naziv, opis, lokacija, datum početka i završetka, popis potrebnih vrsta proizvoda. | Srednji | Odobreni zadatak |  |
| FZ-35 | Kupac se prijavljuje na akciju i označava proizvode koje planira donirati. | Srednji | Odobreni zadatak |  |
| FZ-36 | Organizator akcije evidentira stvarno zaprimljenu donaciju. | Srednji | Odobreni zadatak |  |
| FZ-37 | Korisnici pregledavaju aktivne i nadolazeće akcije. | Srednji | Odobreni zadatak |  |

### 2.1.10 Pretplate i obavijesti

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| FZ-38 | Korisnik se pretplaćuje i odjavljuje s obavijesti o novim ponudama odabranih prodajnih mjesta ili kategorija hrane. | Srednji | Odobreni zadatak |  |
| FZ-39 | Sustav šalje obavijest pretplatnicima kad se objavi odgovarajuća ponuda. ❓ kanal | Srednji | Odobreni zadatak |  |

### 2.1.11 Administracija

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| FZ-40 | Administrator odobrava ili odbija nove profile. ❓ koje uloge | Visok | Odobreni zadatak |  |
| FZ-41 | Administrator pregledava, blokira i briše korisničke račune. | Srednji | Odobreni zadatak |  |
| FZ-42 | Administrator uklanja neprimjeren sadržaj (ponude, komentare, akcije). | Srednji | Odobreni zadatak |  |
| FZ-43 | Administrator upravlja popisom kategorija hrane. ❓ | Nizak | Odobreni zadatak |  |

### 2.1.12 Dodatne funkcionalnosti (nizak prioritet)

Ovi zahtjevi nisu izričito navedeni u zadatku, ali povećavaju vrijednost sustava. Implementiraju se ako ostane vremena.

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| FZ-44 | Kupac sprema prodajna mjesta u popis omiljenih. | Nizak | Prijedlog tima |  |
| FZ-45 | Kupac sortira rezultate pretrage prema udaljenosti, cijeni ili vremenu isteka preuzimanja. | Nizak | Prijedlog tima |  |
| FZ-46 | Prodajno mjesto uz proizvod navodi alergene, a kupac prema njima filtrira. | Nizak | Prijedlog tima |  |
| FZ-47 | Sustav kupca podsjeća na nepreuzetu rezervaciju 1 sat prije isteka preuzimanja. | Nizak | Prijedlog tima |  |
| FZ-48 | Prodajno mjesto ponovno objavljuje raniju ponudu kao predložak. | Nizak | Prijedlog tima |  |
| FZ-49 | Prodajno mjesto pregledava osnovnu statistiku: prodane, donirane i nepreuzete ponude. | Nizak | Prijedlog tima |  |
| FZ-50 | Korisnik prijavljuje neprimjeren komentar ili ponudu administratoru. | Nizak | Prijedlog tima |  |

<details>
<summary><strong>Izvori zahtjeva i kriteriji prihvaćanja</strong></summary>

Svaki zahtjev treba imati stabilan ID. **Izvor označava odakle zahtjev potječe**, primjerice iz odobrenog projektnog zadatka, zahtjeva dionika ili povratne informacije koja je promijenila zahtjev. Opišite opažljivo ponašanje umjesto naziva zaslona ili programskog okvira. U cijeloj dokumentaciji koristite istu ljestvicu prioriteta. Složenu korisničku interakciju objasnite u odgovarajućem obrascu uporabe umjesto kopiranja cijelog tijeka u ovu tablicu.

**Primjer — funkcijski zahtjevi za aplikaciju CrisisMap:**

Kategorije izvora pokazuju različite načine na koje zahtjev može nastati.

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| F-001 | Sustav omogućuje korisniku registraciju računa pomoću adrese e-pošte. | Visok | Zahtjev dionika | Korisnik se može registrirati adresom e-pošte, primiti poruku za potvrdu i aktivirati račun slijedeći poveznicu. |
| F-002 | Sustav omogućuje oporavak lozinke putem e-pošte. | Srednji | Zahtjev dionika | Korisnik može zatražiti ponovno postavljanje lozinke, primiti poveznicu i uspješno postaviti novu lozinku. |
| F-003 | Sustav prikazuje popis dostupnih resursa povezanih s kriznim događajima. | Visok | Postojeći sustav | Korisnik može pregledati ažurirani popis resursa relevantnih za vrstu kriznog događaja, lokaciju i raspoloživost. |
| F-004 | Sustav omogućuje korisnicima podnošenje prijave kriznog događaja s lokacijom. | Visok | Dokument sa zahtjevima | Korisnik može podnijeti prijavu s vrstom kriznog događaja, razinom ozbiljnosti i lokacijom te dobiti potvrdu o zaprimanju. Ako odbije pristup geolokaciji preglednika, može lokaciju odabrati ručno.|
| F-005 | Sustav šalje korisnicima obavijesti o relevantnim promjenama u njihovoj blizini. | Visok | Povratna informacija korisnika | Korisnici dobivaju obavijest unutar jedne minute od relevantne promjene za njihovu lokaciju. |
| F-006 | Sustav prikazuje dostupne resurse prema lokaciji. | Visok | Analiza dokumentacije | Prikazuje se ažurirani popis resursa prilagođen vrsti kriznog događaja, lokaciji i raspoloživosti. |
| F-007 | Sustav prikazuje prijave kriznih događaja s lokacijom kao oznake na karti. | Visok | Odobreni zadatak | Prijava s valjanom lokacijom prikazuje se kao oznaka na karti; odabirom oznake korisnik može otvoriti pripadajuću prijavu. |
| F-008 | Sustav omogućuje moderatoru odobravanje ili odbijanje podnesenih prijava. | Visok | Zahtjev dionika | Moderator može odobriti ili odbiti prijavu koja čeka pregled; korisnik bez moderatorskih ovlasti ne može izvršiti te radnje. |

**Kriteriji prihvaćanja i podrijetlo zahtjeva:** Primjer prikazuje registraciju, oporavak lozinke, resurse, prijavu kriznog događaja i obavijesti te nekoliko vrsta izvora i opažljivih kriterija. Istodobno otvara korisna pitanja: opisuju li F-003 i F-006 istu funkcionalnost resursa? Je li obećanje od jedne minute u F-005 dogovoreno i moguće ispitati? Treba li aplikaciji koja koristi isključivo OAuth uopće F-001 i F-002? Retke koristite kao materijal za analizu; u svojem projektu navedite vlastite zahtjeve. U stvarnom projektu stupac Izvor bilježi odakle su doista potekli njegovi zahtjevi.

**Primjer prilagodbe kada odobreni zadatak koristi OAuth i kartu:** Umjesto kopiranja registracije e-poštom i oporavka lozinke formulirajte relevantni zahtjev za prijavu, primjerice: „F-001: Korisnici se prijavljuju putem odobrenog OAuth pružatelja identiteta; uspješna prijava omogućuje radnje rezervirane za prijavljene korisnike, a odustajanje od prijave ostavlja te radnje nedostupnima.” Zaseban zahtjev za kartu može glasiti: „F-007 : Prijave s lokacijom prikazuju se kao oznake na karti; odabirom oznake otvara se pripadajuća prijava.” Izvor treba biti stvarni odobreni zadatak ili dogovoreni zahtjev dionika. Ova je prilagodba zamjena za neodgovarajuće retke, a ne dodatna tablica koju svaki tim mora ispuniti.

Za složenu interakciju kratak scenarij *Given / When / Then* može pojasniti kriterij. Primjerice: *Given* prijava bez lokacije, *when* građanin je podnese, *then* sustav objašnjava da lokacija nedostaje i ne pohranjuje prijavu. Nemojte jednostavan kriterij ponavljati i u prozi i u Gherkinu niti pisati Gherkin za svaki zahtjev.

</details>


## 2.2 Nefunkcijski zahtjevi

**Cilj:** Odrediti važna svojstva kvalitete i uvjete rada odobrene aplikacije na način koji tim može razumno provjeriti.

Brojčane vrijednosti su prijedlozi tima i treba ih potvrditi.

| ID | Kategorija | Opis | Prioritet | Izvor | Način provjere |
| --- | --- | --- | --- | --- | --- |
| NFZ-01 | Sigurnost | Sva komunikacija ide preko HTTPS-a; autentifikacija isključivo preko OAuth 2.0. |  |  |  |
| NFZ-02 | Sigurnost | Sustav ne pohranjuje podatke platnih kartica; plaćanje obavlja vanjski servis. |  |  |  |
| NFZ-03 | Sigurnost | Pristup funkcijama kontrolira se prema ulogama; korisnik vidi i mijenja samo podatke za koje ima ovlasti. |  |  |  |
| NFZ-04 | Sigurnost | Kod za preuzimanje je jedinstven, nepredvidiv i vrijedi samo za jedno preuzimanje. |  |  |  |
| NFZ-05 | Privatnost | Osobni podaci obrađuju se u skladu s GDPR-om; lokacija korisnika koristi se samo uz njegovo dopuštenje. |  |  |  |
| NFZ-06 | Konzistentnost | Istovremene rezervacije ne smiju prodati više od dostupne količine (transakcije ili zaključavanje). |  |  |  |
| NFZ-07 | Konzistentnost | Rezervacija se potvrđuje tek nakon uspješnog plaćanja; neuspjelo plaćanje ne zauzima količinu trajno. |  |  |  |
| NFZ-08 | Performanse | Pretraga ponuda vraća rezultate za manje od 2 s uz do 1000 aktivnih ponuda. |  |  |  |
| NFZ-09 | Upotrebljivost | Sučelje je responzivno i upotrebljivo na mobitelu (zaposlenik skenira kod kamerom). |  |  |  |
| NFZ-10 | Upotrebljivost | Sučelje je na hrvatskom jeziku; vremena se prikazuju u zoni Europe/Zagreb, cijene u eurima. |  |  |  |
| NFZ-11 | Dostupnost | Sustav je dostupan javno putem interneta; ciljna dostupnost 99 % tijekom demonstracije. |  |  |  |
| NFZ-12 | Pouzdanost | Ispadi vanjskih servisa (plaćanje, karte, e-mail) prikazuju jasnu poruku i ne ruše aplikaciju. |  |  |  |
| NFZ-13 | Održavanje | Kod je u Git repozitoriju, uz README s uputama za pokretanje i automatizirane testove ključnih funkcija. |  |  |  |
| NFZ-14 | Testabilnost | Plaćanja se razvijaju i testiraju u sandbox okruženju vanjskog servisa. |  |  |  |

<details>
<summary><strong>Nefunkcijski zahtjevi za analizu</strong></summary>

Relevantna svojstva mogu se odnositi na uporabljivost, pristupačnost, sigurnost, performanse ili pouzdanost. Odaberite svojstva specifična za projekt i opišite kako ih je moguće provjeriti. Zahtjev navodi što se očekuje; stvarna opažanja i dokazi pripadaju rezultatima ispitivanja, a ne drugom stupcu s rezultatima u ovoj tablici.

**Primjer — nefunkcijski zahtjevi za aplikaciju CrisisMap:**

| ID | Opis | Prioritet | Izvor |
| --- | --- | --- | --- |
| NF-1.1 | Sustav mora podržati 1.000 istodobnih korisnika uz vrijeme odziva kraće od 1 s. | Visok | SLA | Opteretiti sustav zadanim brojem istodobnih korisnika i izmjeriti vrijeme odziva. |
| NF-1.2 | Svi osjetljivi podaci moraju biti šifrirani algoritmom AES-256. | Visok | Sigurnosna politika | Pregledati način pohrane i konfiguraciju šifriranja za podatke na koje se zahtjev odnosi. |
| NF-1.3 | Korisničko sučelje mora podržavati engleski i španjolski jezik. | Srednji | Povratna informacija dionika | Pregledati reprezentativne korisničke tijekove u oba jezika. |
| NF-1.4 | Dostupnost sustava mora iznositi najmanje 99,5 % mjesečno. | Visok | SLA | Izračunati mjesečnu dostupnost iz zapisa sustava za nadzor, ako takvi podaci postoje.|
| NF-3.1.7 | Sustav treba imati odgovarajuću dokumentaciju. | Visok | Pravila dokumentiranja | Pregledati zahtijevane dokumentaciju prema obavezama.|
| NF-3.1.7.1 | Kod sustava treba biti dokumentiran prema „Code Conventions for the Java Programming Language”. | Visok | Pravila dokumentiranja | Pregledati kod. |
| NF-3.1.7.2 | Sustav treba biti opisan projektnim dokumentom/SRS-om. | Visok | Pravila dokumentiranja | Pregledati strukturu dokumenta  |
| NF-3.1.7.3 | Sustav treba imati „Operativni priručnik” koji opisuje pravilnu uporabu. | Visok | Pravila dokumentiranja | Pregledati postoji li priručnik i mogu li se prema njemu izvršiti opisane radnje. |
| NF-3.1.7.4 | Sustav treba imati „Plan implementacije” za pravilno postavljanje. | Visok | Smjernice za postavljanje | Pregledati odgovara li opisani postupak stvarnom postupku postavljanja.|

**Provjerljivost i opseg:** Primjer uvodi performanse, sigurnost, lokalizaciju, dostupnost i dokumentaciju, uključujući hijerarhijski ID zahtjeva. Navedeni izvori primjeri su podrijetla zahtjeva, a ne dokaz da za studentski projekt stvarno postoji SLA ili sigurnosna politika. Vrijednosti poput 1.000 korisnika, 99,5 % mjesečne dostupnosti i AES-256 moraju imati odobren izvor i izvediv način provjere prije nego što postanu zahtjevi tima. Skup zahtjeva o dokumentaciji ilustrira razlaganje zahtjeva, ali zahtjevi za izradu *ove dokumentacije kolegija* u pravilu pripadaju uputama zadatka, a ne zahtjevima kvalitete web-aplikacije.

**Primjer prilagodbe:** Ako je pristupačnost zahtjevana za  projekt, projektno specifičan zahtjev može glasiti: „NF-01: Sve obavezne radnje u obrascu za podnošenje prijave moguće je izvršiti samo tipkovnicom, uz vidljiv fokus na aktivnoj kontroli.” Provjera: navigirati kroz obrazac bez pokazivačkog uređaja, odabrati ili unijeti lokaciju, poslati prijavu i provjeriti može li se pročitati rezultat. To je provjerljivo svojstvo kvalitete, a ne dodatna funkcionalnost koju svaki projekt mora implementirati.

</details>

## 2.3 Dionici i akteri

**Cilj:** Utvrditi uloge koje utječu na zahtjeve i razlikovati dionike od aktera koji komuniciraju s aplikacijom.

| ID uloge ili aktera | Odnos prema sustavu | Relevantni zahtjevi |
| --- | --- | --- |
|  |  |  |

<details>
<summary><strong>Akteri i povezani zahtjevi</strong></summary>

**Primjer — akteri aplikacije CrisisMap:**

| ID aktera | Uloga | Obuhvaćeni funkcijski zahtjevi |
| --- | --- | --- |
| A-01 | Koordinator pomoći | F-003: Pregled resursa; F-004: Podnošenje prijave kriznog događaja. |
| A-02 | Građanin | F-001: Izrada računa; F-005: Primanje obavijesti. |
| A-03 | Administrator sustava | NF-1.2: Provođenje sigurnosnih pravila; upravljanje korisnicima. |
| A-04 | Posjetitelj | F-007: Pregled prijava na karti. |
| A-05 | Moderator | F-008: Odobravanje ili odbijanje prijava. |

**Odgovornosti aktera:** Uloga aktera treba biti povezana s interakcijom, a ne samo s nazivom. Provjerite podnosi li koordinator pomoći u odobrenom zadatku doista prijave kriznih događaja. Poveznica administratora s NF-1.2 navodi sigurnosni aspekt, ali sama po sebi ne opisuje obrazac uporabe; navedite stvarnu radnju administratora ili izostavite ulogu ako je nema. Nastavnici zainteresirani za rezultat mogu biti dionici, a da nisu akteri aplikacije. Tablica je polazište za razmišljanje, a ne potvrđen opis ovlasti u CrisisMapu.

</details>

---

## 2.4 Ograničenja i pretpostavke

**Cilj:** Zabilježiti projektno specifične granice i pretpostavke koje utječu na zahtjeve ili oblikovanje, zajedno s njihovim izvorom i praktičnom posljedicom. Ovo je njihovo mjerodavno mjesto u dokumentaciji.

| ID | Tip | Opis ograničenja ili pretpostavke | Izvor | Inženjerska posljedica / Provjera |
| --- | --- | --- | --- | --- |
| C-01 | Ograničenje | [Fiksni tehnički ili procesni uvjet] | [Zadatak / Pravila] | [Utjecaj na arhitekturu i oblikovanje] |
| AS-01 | Pretpostavka | [Očekivani uvjet, npr. o podacima ili okolini] | [Procjena tima] | [Kako i kada će se provjeriti valjanost] |
|  |  |  |  |  |
<details>
<summary><strong>Ograničenja nasuprot pretpostavkama</strong></summary>

Ograničenje je uvjet koji tim mora poštovati; pretpostavka je uvjet na koji se tim oslanja i koji treba ponovno provjeravati.

**Primjer — projektni kontekst CrisisMapa:**

| ID | Ograničenje ili pretpostavka | Izvor | Posljedica ili način provjere |
| --- | --- | --- | --- |
| C-01 | Odobreni zadatak zahtijeva OAuth prijavu u sustav za uređivanje vlastitih prijava korisnika. | Odobreni zadatak  | Zaštićeno uređivanje projektirati oko odabranog pružatelja identiteta; provjeriti autorizirane i neautorizirane zahtjeve. |
| AS-01 | Prijave koje se prikazuju na karti imaju uporabive koordinate. | Pretpostavka o podacima  | Pregledati ogledne i uvezene prijave; planirati prikaz prijava bez valjanih koordinata. |

**Ograničenje nasuprot pretpostavci:** C-01 navodi obvezujuću odluku i njezin arhitekturni učinak; AS-01 je moguće provjeriti i može se pokazati netočnim. Nemojte kopirati C-01 ako OAuth nije dio stvarnog odobrenog zadatka. Projektni odgovor objasnite u arhitekturi bez prepisivanja ove tablice.

</details>

---

## 2.5 Značajne promjene zahtjeva

**Cilj:** Sačuvati razlog promjena koje mijenjaju dogovoreni opseg, prioritet ili kriterije prihvaćanja, uz istodobno održavanje prethodnih zahtjeva ažurnima.

| Datum | ID zahtjeva | Promjena i razlog | Dogovoreno s / dokaz |
| --- | --- | --- | --- |
|  |  |  |  |

<details>
<summary><strong>Primjer značajne promjene</strong></summary>

**Primjer scenarija — odluka tijekom pregleda CrisisMapa:**

| Datum | ID zahtjeva | Promjena i razlog | Dogovoreno s / dokaz |
| --- | --- | --- | --- |
| [Datum pregleda] | F-004, NF-01 | Dodati ručni odabir lokacije kada korisnik odbije geolokaciju preglednika; bez toga građanin ne može podnijeti prijavu kriznog događaja s lokacijom. | [Poveznica na stvarnu bilješku pregleda ili zadatak tima] |

**Razlog promjene:** Zapis navodi zahvaćene stavke i objašnjava razlog iz perspektive korisnika, a zatim upućuje na dokaz odluke.  Nakon stvarne odluke ažurirajte trenutačne zahtjeve; stilska izmjena teksta ne zahtijeva zapis u dnevniku promjena. Trenutačni red zadataka držite u alatu za praćenje zadataka.

</details>

---

## 2.6 Sljedivost zahtjeva

**Cilj:** Osigurati dvosmjernu sljedivost — povezati zahtjeve s opisanim ponašanjem, dijelovima sustava koji ih ostvaruju te ispitivanjem ili drugom provjerom. 

| ID zahtjeva | Obrazac uporabe / modul | Arhitekturna realizacija | Ispitivanje ili provjera |
| --- | --- | --- | --- |
| F-001 | [UC-001] | [Komponenta, modul ili drugo mjesto realizacije] | [ST-01, CT-01 ili druga provjera] |
|  |  |  |  |

<details>
<summary><strong>Sljedivost zahtjeva do obrazaca uporabe i ispitivanja</strong></summary>

**Primjer — poveznice zahtjeva CrisisMapa:**

| ID zahtjeva | Obrazac uporabe / ponašanje | Arhitekturna realizacija | Ispitivanje / provjera |
| --- | --- | --- | --- |
| F-004 | UC-002 Podnošenje prijave kriznog događaja | Web-klijent; API za prijave; usluga za prijave | ST-01 Valjano podnošenje prijave; ST-02 Nedostaje obavezna lokacija; ST-03 Dopuštenje geolokacije odbijeno |
| F-005 | Odabir primatelja obavijesti | Proces za obavijesti | CT-06 Primatelji obavijesti; potpuna dostava obavijesti nije pokrivena ovom provjerom |

**Pokrivenost i dokazi:** CT-06 provjerava odabir primatelja za F-005, ali sam po sebi ne dokazuje da je obavijest stvarno dostavljena; ako projekt zahtijeva potpunu dostavu od početka do kraja, za taj dio treba postojati zasebna provjera. Svaki redak pokazuje gdje je zahtjev opisan kao ponašanje, gdje je ostvaren u sustavu i gdje se nalazi dokaz njegove provjere. Zahtjev ne mora imati zaseban obrazac uporabe ako ne opisuje korisničku interakciju; tada navedite relevantno ponašanje, arhitekturni element ili drugi prikladan način realizacije. U svojem projektu koristite stvarne nazive komponenata, modula i provjera iz dokumentacije i implementacije. Nedostajuću poveznicu ostavite praznom ili označite kao *na čekanju* uz kratak razlog. Stvarni rezultati ispitivanja bilježe se uz ispitne slučajeve; ova tablica pokazuje gdje ih pronaći.

</details>

---

## 2.7 Pregled zahtjeva

**Cilj:** Zabilježiti važne povratne informacije o zahtjevima i odluke koje iz njih proizlaze na dvije formalne kontrolne točke projekta, u 7. i 14. tjednu.

| Kontrolna točka | Povratna informacija ili nalaz | Odluka o zahtjevu ili opsegu |
| --- | --- | --- |
| Iteracija 1 | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |
| Demo 2  | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |
| Završni pregled | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |

<details>
<summary><strong>Odluke o zahtjevima nakon pregleda</strong></summary>

**Primjer scenarija — pregled zahtjeva CrisisMapa:**

| Kontrolna točka | Povratna informacija ili nalaz | Odluka o zahtjevu ili opsegu |
| --- | --- | --- |
| Iteracija 1 | Demonstracija pokazuje da odbijanje pristupa lokaciji preglednika onemogućuje podnošenje prijave. | Dogovoriti ručni odabir lokacije; ažurirati F-004 i primjer NF-01 te razlog zabilježiti u odjeljku 2.5. |

**Odluka povezana s povratnom informacijom:** Zapis povezuje opaženo ponašanje s konkretnom promjenom zahtjeva i izbjegava zapisnik cijelog sastanka. Zapišite samo stvarne povratne informacije i odluke za kontrolne točke. Konzultacije u nekom drugom tjednu ne stvaraju dodatnu obaveznu predaju.

</details>

---

>**Završna provjera:** Zahtjevi su aktualni, provjerljivi i povezani. Svaki važan zahtjev moguće je pratiti od njegova opisa i ponašanja preko mjesta realizacije u sustavu do odgovarajućeg ispitivanja ili druge provjere. Poveznice koriste stvarne identifikatore i nazive iz projektne dokumentacije.

