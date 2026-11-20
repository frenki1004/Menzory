# 5. Ispitivanje

## 5.1 Pristup ispitivanju

Poslovna pravila koja ne ovise o bazi podataka ispituju se automatski i izdvojeno: validacija ponude (`offer.service.ts`), generiranje i provjera koda za preuzimanje (`pickup-code.ts`) te pravila rezervacije i otkazivanja (`reservation-rules.ts`). Jedinična ispitivanja pisana su za ugrađeni Node.js test runner (`tests/*.test.js`), pokreću se naredbom `npm test` i automatski se izvode u CI-ju (GitHub Actions) pri svakom pushu i pull requestu.

Glavni korisnički tokovi (prijava, pregled ponuda, rezervacija, potvrda preuzimanja) i nefunkcijski zahtjevi koji se odnose na postavljenu aplikaciju (HTTPS, dostupnost) provjeravaju se ručno na javnoj adresi aplikacije, https://spasizalogaj.vercel.app.

Automatizirana ispitivanja u pregledniku (Selenium) još nisu izrađena (vidi 5.4).

## 5.2 Ispitni slučajevi

### Jedinična ispitivanja

| ID ispitnog slučaja | Scenarij ispitivanja | Ulazni podaci | Očekivani rezultat | Stvarni rezultat | Ishod | Koraci ispitivanja |
| --- | --- | --- | --- | --- | --- | --- |
| UT-01 | Validacija ponude: ispravna ponuda (F-006) | Ponuda sa svim podacima; donacijska ponuda s cijenom 0 | Ponuda je prihvaćena | Kao očekivano | Prošlo | `npm test` – `tests/offer-validation.test.js` |
| UT-02 | Validacija ponude: neispravni podaci (F-006) | Prazan naziv; snižena cijena veća od redovne; vrijeme preuzimanja u prošlosti | Ponuda je odbijena | Kao očekivano | Prošlo | `npm test` – `tests/offer-validation.test.js` |
| UT-03 | Generiranje koda za preuzimanje (F-012, NF-04) | Više uzastopnih generiranja | Kod ima 6 znakova iz sigurne abecede; uzastopni kodovi se razlikuju | Kao očekivano | Prošlo | `npm test` – `tests/pickup-code.test.js` |
| UT-04 | Sažetak i provjera koda za preuzimanje (F-012, NF-04) | Isti kod dvaput; ispravan i pogrešan kod | Sažetak (SHA-256) je uvijek isti za isti kod; ispravan kod prolazi provjeru, pogrešan ne | Kao očekivano | Prošlo | `npm test` – `tests/pickup-code.test.js` |
| UT-05 | Količina rezervacije (F-010) | 1, 5; 0; −1; 1,5; NaN, beskonačnost | Prihvaćaju se samo pozitivni cijeli brojevi | Kao očekivano | Prošlo | `npm test` – `tests/reservation-rules.test.js` |
| UT-06 | Dostupnost ponude za rezervaciju (F-010) | Aktivna ponuda s dovoljnom količinom; cijela preostala količina; količina veća od dostupne; ponuda koja nije aktivna | Rezervacija je dopuštena samo za aktivnu ponudu s dovoljnom količinom | Kao očekivano | Prošlo | `npm test` – `tests/reservation-rules.test.js` |
| UT-07 | Rok otkazivanja: najkasnije 1 h prije isteka (F-011) | Više od 60 min do isteka; točno 60 min (granica); manje od 60 min; nakon isteka | Otkazivanje je dopušteno samo ako je ostalo 60 min ili više | Kao očekivano | Prošlo | `npm test` – `tests/reservation-rules.test.js` |
| UT-08 | Izračun ukupnog iznosa rezervacije (F-010) | Cijena × količina; decimalne cijene; donacija s cijenom 0 | Iznos je točan na cent; za donaciju je 0 | Kao očekivano | Prošlo | `npm test` – `tests/reservation-rules.test.js` |

### Ručna ispitivanja sustava

| ID ispitnog slučaja | Scenarij ispitivanja | Ulazni podaci | Očekivani rezultat | Stvarni rezultat | Ishod | Koraci ispitivanja |
| --- | --- | --- | --- | --- | --- | --- |
| ST-01 | Prijava Google računom (F-001) | Postojeći Google račun člana tima | Korisnik se vraća u aplikaciju prijavljen, a u zaglavlju se prikazuje njegov račun | Kao očekivano | Prošlo | 1. Otvoriti javnu adresu.<br>2. Odabrati prijavu i Google račun.<br>3. Provjeriti da je korisnik prijavljen. |
| ST-02 | Pregled aktivnih ponuda (F-009) | Demo podaci iz seeda | Prikazuju se aktivne ponude demo prodajnih mjesta | Prikazano je 6 demo ponuda obaju prodajnih mjesta | Prošlo | 1. Otvoriti `/ponude`.<br>2. Provjeriti popis ponuda. |
| ST-03 | Pregled detalja ponude (F-009) | Jedna demo ponuda | Prikazuju se naziv, cijena, količina i vrijeme preuzimanja | Naziv, cijene i rezervacija prikazani su ispravno; vrijeme preuzimanja prikazano je kao 16:00 – 19:00 umjesto 17:00 – 20:00 (vidi 5.4) | Nije prošlo | 1. Na `/ponude` otvoriti jednu ponudu.<br>2. Provjeriti prikazane podatke. |
| ST-04 | Rezervacija ponude s kodom za preuzimanje (F-010) | Prijavljeni kupac, demo ponuda, količina 1 | Rezervacija je potvrđena, a kod za preuzimanje vidljiv je u „Moje rezervacije” | Rezervacija ima status „Potvrđena”, iznos 3,50 € i šesteroznakovni kod za preuzimanje | Prošlo | 1. Prijaviti se kao kupac.<br>2. Otvoriti ponudu i rezervirati količinu 1.<br>3. Otvoriti „Moje rezervacije” i provjeriti kod. |
| ST-05 | Potvrda preuzimanja kodom (F-012) | Račun prodajnog mjesta, kod iz ST-04 | Rezervacija prelazi u status „preuzeto” | – | Nije pokrenuto | 1. Prijaviti se računom prodajnog mjesta.<br>2. Otvoriti stranicu za preuzimanje i unijeti kod.<br>3. Provjeriti potvrdu preuzimanja. |
| ST-06 | Preusmjeravanje na HTTPS (NF-01) | Zahtjev na `http://spasizalogaj.vercel.app/` | Odgovor preusmjerava na `https://` adresu | Odgovor 308 s preusmjeravanjem na `https://spasizalogaj.vercel.app/` | Prošlo | `curl -I http://spasizalogaj.vercel.app/` |
| ST-07 | Provjera ispravnosti aplikacije (NF-07) | Zahtjev na `/api/health` javne aplikacije | Uspješan odgovor sa statusom `ok` | `{"status":"ok","app":"SpasiZalogaj","environment":"production",…}` | Prošlo | `curl https://spasizalogaj.vercel.app/api/health` |
