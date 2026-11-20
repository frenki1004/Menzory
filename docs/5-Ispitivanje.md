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
