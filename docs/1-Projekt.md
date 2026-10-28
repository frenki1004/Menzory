# 1. Opseg projekta

## 1.1 Problem i cilj projekta

Trgovine, pekarnice i slastičarnice svakodnevno bacaju hranu koja je još uvijek sigurna za konzumaciju, jer je ne uspiju prodati do kraja dana ili joj se bliži rok upotrebe. Istodobno građani i humanitarne organizacije nemaju jednostavan način da saznaju gdje i kada takva hrana postoji.

**SpasiZalogaj** je web aplikacija u kojoj prodajna mjesta objavljuju višak hrane (pojedinačne proizvode i pakete iznenađenja) po sniženoj cijeni ili kao donaciju, a kupci ga pronalaze na karti, rezerviraju, plaćaju i preuzimaju uz jedinstveni kod. Humanitarne organizacije mogu zatražiti hranu koja je namijenjena isključivo donaciji. Platforma također služi za organizaciju akcija prikupljanja hrane.

**Cilj projekta** je omogućiti da se višak hrane iz prodajnih mjesta preraspodijeli građanima i humanitarnim organizacijama umjesto da se baci, uz jednostavan i provjerljiv postupak rezervacije i preuzimanja.

**Očekivana korist:** prodajno mjesto dio viška proda ili donira umjesto da ga baci, kupac jeftinije dolazi do hrane, a humanitarna organizacija ima jedno mjesto za pronalazak donacija. Ne tvrdimo izmjerene učinke (npr. postotak smanjenja otpada); takve tvrdnje nisu dio projekta.

## 1.2 Ciljani korisnici i dionici

| Skupina korisnika ili dionika | Potreba ili interes relevantan za ovaj projekt |
| --- | --- |
| Kupac (građanin) | Brzo pronaći dostupnu hranu u blizini po povoljnoj cijeni, rezervirati je i sigurno preuzeti u zadanom terminu. |
| Prodajno mjesto (trgovina, pekarnica, slastičarnica) | Objaviti višak hrane i pakete iznenađenja, pratiti rezervacije i potvrditi preuzimanje bez dodatnog posla za zaposlenike. Plaća članarinu za korištenje platforme. |
| Zaposlenik prodajnog mjesta | Na blagajni ili pultu brzo provjeriti kod kupca i potvrditi preuzimanje, po mogućnosti s mobitela. |
| Humanitarna organizacija | Pronaći ponude namijenjene donaciji, zatražiti određenu količinu i organizirati akcije prikupljanja hrane. |
| Administrator sustava | Odobravati nove profile (posebno humanitarnih organizacija), određivati cijene članarina i uklanjati neprimjeren sadržaj. |
| Vanjski servisi (OAuth pružatelj, servis za plaćanje, kartografska usluga) | Ne koriste aplikaciju kao osobe, ali sudjeluju u prijavi, plaćanju i prikazu lokacija; njihova dostupnost ograničava rad sustava. |

## 1.3 Granice projekta

**Uključeno:**
- prijava putem vanjskog OAuth 2.0 / OpenID Connect pružatelja i odabir uloge (kupac, prodajno mjesto, humanitarna organizacija)
- javni profili prodajnih mjesta i humanitarnih organizacija
- objava pojedinačnih ponuda i paketa iznenađenja, uključujući ponude samo za donaciju
- pretraživanje i filtriranje ponuda te prikaz prodajnih mjesta na karti s udaljenošću od korisnika
- rezervacija s plaćanjem putem vanjskog servisa, jedinstveni kod za preuzimanje, otkazivanje i potvrda preuzimanja
- zahtjevi humanitarnih organizacija za donacijske ponude i njihovo odobravanje
- ocjene i komentari nakon preuzimanja, članarine prodajnih mjesta, administracija

Prioriteti pojedinih funkcionalnosti (visok, srednji, nizak) navedeni su u [analizi zahtjeva](2-Analiza-zahtjeva.md). Funkcionalnosti visokog prioriteta čine osnovnu vrijednost sustava i realiziraju se prve.

**Izvan opsega ili odgođeno:**
- dostava hrane: kupac i humanitarna organizacija uvijek sami preuzimaju hranu u prodajnom mjestu
- izvorne mobilne aplikacije (Android, iOS): sustav je responzivna web aplikacija
- provjera kvalitete i sigurnosti hrane: za ispravnost proizvoda odgovara prodajno mjesto
- stvarna naplata u produkciji: plaćanja se razvijaju i demonstriraju u testnom (sandbox) okruženju vanjskog servisa
- akcije prikupljanja hrane i pretplate na obavijesti imaju srednji prioritet i realiziraju se nakon osnovnog toka rezervacije

**Vanjske ovisnosti:**
- vanjski pružatelj identiteta (OAuth 2.0 / OpenID Connect) za registraciju i prijavu
- vanjski servis za plaćanje (PayPal ili kartice) za članarine i rezervacije
- kartografska usluga za prikaz lokacija prodajnih mjesta i udaljenosti

## 1.4 Postojeći pristupi i opravdanost projekta

Danas prodajna mjesta višak hrane najčešće snižavaju na samoj polici pred kraj dana, što kupac vidi samo ako je slučajno u trgovini, ili hranu dogovorno predaju pojedinoj humanitarnoj organizaciji. Postoje i komercijalne aplikacije za prodaju viška hrane po sniženoj cijeni, poput Too Good To Go (https://www.toogoodtogo.com), koje se usredotočuju na prodaju paketa kupcima. SpasiZalogaj u jednom sustavu povezuje prodaju viška kupcima s doniranjem humanitarnim organizacijama i organizacijom akcija prikupljanja hrane, što je potreba opisana u projektnom zadatku.

---

> **Završna provjera:** opis problema, cilj, korisnici i dionici, granice opsega i postojeći pristupi usklađeni su s projektnim zadatkom G07 (SpasiZalogaj) i s [analizom zahtjeva](2-Analiza-zahtjeva.md).
