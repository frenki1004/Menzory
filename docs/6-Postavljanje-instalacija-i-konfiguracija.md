# 6. Postavljanje, instalacija i konfiguracija

**Cilj:** Detaljno dokumentirati topologiju izvođenja, postupak lokalne instalacije i konfiguracije iz izvornog koda te način javnog postavljanja i administracije sustava **SpasiZalogaj**. [README](../README.md) navodi javnu adresu i sažeti postupak lokalnog pokretanja; ova stranica donosi potpun inženjerski postupak koji osigurava točnu ponovljivost na drugom računalu.

---

## 6.1 Prikaz razmještaja

**Cilj:** Prikazati okruženja izvođenja, raspodijeljene dijelove programa, spremište podataka i relevantne vanjske usluge. Njihovu komunikaciju i mrežne protokole prikazuje UML dijagram razmještaja u nastavku. Dok dijagram komponenata iz Poglavlja 4 prikazuje logičke odgovornosti, dijagram razmještaja pokazuje gdje se izvršni artefakti fizički ili virtualno izvode.

**Dijagram razmještaja:** ![UML dijagram razmještaja sustava SpasiZalogaj](./assets/diagrams/6-1-spasizalogaj-deployment-DD.svg)  
**Slika 6.1. UML dijagram razmještaja sustava SpasiZalogaj**  
**PlantUML izvor:** [6-1-spasizalogaj-deployment-DD.puml](./puml/6-1-spasizalogaj-deployment-DD.puml)  
**Javno dostupna aplikacija:** [README](../README.md#postavljanje-i-pokretanje)

### Analiza razmještaja i mrežnih protokola

1. **Korisnički uređaj (`<<device>>`):**
   - Krajnji korisnik (građanin, predstavnik prodajnog mjesta, volonter ili administrator) pristupa aplikaciji putem modernog web-preglednika (Google Chrome, Mozilla Firefox, Safari, Edge).
   - Korisničko sučelje izgrađeno je u tehnologijama React 19, Tailwind CSS i HTML5, optimizirano za stolna računala i mobilne uređaje (odzivni dizajn, NF-06).
   - Preglednik komunicira s poslužiteljem isključivo putem šifriranog protokola **HTTPS (TLS 1.3, port 443)**.
   - Prikaz geografskih lokacija trgovina i ponuda na karti dohvaća pločice izravno s vanjskog kartografskog servisa (OpenStreetMap / Leaflet) preko sigurnog HTTPS protokola.

2. **Poslužiteljska platforma u oblaku (`<<cloud / execution environment>>`):**
   - Cjelokupna fullstack aplikacija izvodi se unutar Node.js izvršnog okruženja (verzija 20.x LTS) na platformi Vercel / serverless edge runtime.
   - **Next.js 15 App Router:** Objedinjuje poslužiteljsko renderiranje (SSR), React Server Components (RSC), klijentske interaktivne komponente, poslužiteljske akcije (Server Actions) i programske API rute.
   - **Auth.js v5 modul:** Upravlja stanjem autentifikacije, provjerom JSON Web Tokena (JWT) ili sesijskih zapisa u bazi, te zaštitom ruta i administratorskih ovlasti.
   - **Prisma ORM klijent:** Upravlja komunikacijom s bazom podataka, pripremljenim upitima i atomičnim transakcijama preko konekcijskog bazena (engl. *connection pool*).

3. **Upravljani poslužitelj baze podataka (`<<device / Neon>>`):**
   - Relacijska baza podataka **PostgreSQL 15+** smještena je na upravljanoj platformi u oblaku (Neon serverless PostgreSQL, regija `eu-central-1`).
   - Baza čuva svih 15 relacijskih entiteta definiranih shemom (`User`, `Account`, `Session`, `Store`, `Offer`, `Reservation`, `Subscription`, `PickupLog` i dr.).
   - Veza s poslužiteljem uspostavlja se isključivo preko zaštićenog PostgreSQL protokola uz obaveznu TLS enkripciju (`sslmode=require`) na portu 5432. Bazi se nikada ne pristupa izravno iz klijentskog preglednika.

4. **Vanjske usluge (`<<third-party>>`):**
   - **Google Identity Provider (OAuth 2.0 / OpenID Connect):** Eksternalizirana prijava korisnika. Poslužiteljski dio razmjenjuje autorizacijski kod za tokene putem HTTPS REST API poziva prema `accounts.google.com`.
   - **OpenStreetMap / CartoDB pločice:** Isporuka kartografskih slojeva klijentskom sučelju.

---

## 6.2 Lokalna instalacija i konfiguracija

**Cilj:** Omogućiti novom članu tima ili ocjenjivaču da iz čiste radne kopije repozitorija instalira i lokalno pokrene cijeli programski sustav, uključujući bazu podataka i domenske funkcionalnosti.

### 1. Preduvjeti i preuzimanje izvornog koda

Za lokalno pokretanje i razvoj potrebni su:
- **Node.js:** verzija `20.x` LTS ili novija (provjera s `node -v`).
- **npm:** upravitelj paketa verzije `10.x` ili noviji (provjera s `npm -v`).
- **Git:** za verzioniranje i kloniranje repozitorija.
- **PostgreSQL:** lokalna instalacija (PostgreSQL 15+) ili vanjska instanca na Neon/Supabase platformi.

Klonirajte repozitorij i postavite se u korijenski direktorij:

```bash
git clone https://github.com/frenki1004/Menzory.git
cd Menzory
```

Sve razvojne naredbe pokreću se iz korijena repozitorija.

### 2. Ovisnosti i konfiguracijske varijable

Instalirajte sve potrebne ovisnosti definirane u `package.json`:

```bash
npm install
```

Pripremite lokalnu konfiguracijsku datoteku kopiranjem priloženog predloška:

```bash
cp .env.example .env
```

Uredite datoteku `.env` prema sljedećim smjernicama:

| Varijabla | Opis | Primjer vrijednosti / Izvor |
| --- | --- | --- |
| `DATABASE_URL` | PostgreSQL veza s bazom (lokalna ili Neon) | `postgresql://postgres:postgres@localhost:5432/spasizalogaj_dev` |
| `AUTH_SECRET` | Kriptografski ključ za potpisivanje kolačića i sesija | Generira se naredbom: `openssl rand -base64 33` |
| `AUTH_GOOGLE_ID` | OAuth 2.0 Client ID za Google prijavu | Google Cloud Console -> Credentials |
| `AUTH_GOOGLE_SECRET` | OAuth 2.0 Client Secret | Google Cloud Console -> Credentials |
| `NEXTAUTH_URL` | Osnovna adresa aplikacije za Auth.js povratne pozive | `http://localhost:3000` |
| `NEXT_PUBLIC_APP_URL` | Javni URL dostupan klijentskom dijelu | `http://localhost:3000` |

*Upozorenje o sigurnosti:* Datoteka `.env` nalazi se u `.gitignore` i nikada se ne smije uključiti u repozitorij. Tajne ključeve i lozinke čuvajte u strogo ograničenim datotekama (način rada `0600`).

### 3. Inicijalizacija baze podataka i migracije

Ako koristite lokalni PostgreSQL poslužitelj, stvorite bazu podataka:

```bash
createdb spasizalogaj_dev
```

Generirajte Prisma klijent i sinkronizirajte shemu s bazom podataka:

```bash
# Generiranje tipiziranog Prisma klijenta (src/lib/prisma.ts)
npx prisma generate

# Sinkronizacija sheme iz prisma/schema.prisma u bazu podataka
npx prisma db push
```

Naredba `npx prisma db push` osigurava da se svih 15 entiteta (uključujući indekse, strane ključeve i enumeracije `OfferStatus`, `ReservationStatus`, `Role`) stvori u ciljnoj bazi bez ručnog pisanja SQL skripti.

### 4. Pokretanje razvojnog poslužitelja

Pokrenite lokalni razvojni poslužitelj:

```bash
npm run dev
```

Poslužitelj se pokreće na adresi: `http://localhost:3000`

### 5. Provjera rada sustava (Verifikacija)

Nakon pokretanja potvrdite ispravnost sustava kroz sljedeće korake:

1. **Provjera zdravlja poslužitelja (API Health Check):**
   U pregledniku ili terminalu pošaljite zahtjev:
   ```bash
   curl -i http://localhost:3000/api/health
   ```
   Očekivani odgovor je HTTP status `200 OK` s tijelom:
   ```json
   {"status":"ok","timestamp":"...","uptime":...}
   ```

2. **Početna stranica i navigacija:**
   Otvorite `http://localhost:3000` u pregledniku. Provjerite prikaz responzivnog zaglavlja, navigacije i opcija prijave.

3. **Domenski tijek ponuda i rezervacija (M1):**
   - Otvorite `http://localhost:3000/ponude` za pregled popisa aktivnih paketa i ponuda hrane.
   - Posjetite `http://localhost:3000/prodajno-mjesto/nova-ponuda` za unos nove ponude (naziv, opis, redovna i snižena cijena, količina, vrijeme preuzimanja).
   - Posjetite `http://localhost:3000/prodajno-mjesto/preuzimanje` za unos 6-znakovnog koda za preuzimanje i provjeru njegove kriptografske valjanosti (NF-04).

4. **Izvođenje automatiziranih ispitivanja:**
   U zasebnom terminalu pokrenite cjelokupni skup jediničnih ispitivanja:
   ```bash
   npm test
   ```
   Provjerava se:
   - Kriptografsko generiranje, SHA-256 sažimanje i vremenski sigurna usporedba kodova (`tests/pickup-code.test.js`).
   - Validacija unosa ponuda, cijena i količina (`tests/offer-validation.test.js`).
   - Sva ispitivanja moraju završiti sa statusom `PASS`.

---

## 6.3 Javno postavljanje i administracija

**Cilj:** Dokumentirati korake za ponovljivo postavljanje cjelovitog programskog sustava na produkcijsku infrastrukturu u oblaku, uključujući bazu podataka i automatiziranu isporuku.

| **Podsustav** | **Infrastruktura i izvor koda** | **Naredbe izgradnje i pokretanja** | **Konfiguracijske varijable** |
| --- | --- | --- | --- |
| **Fullstack aplikacija** | Vercel (regija Frankfurt / `fra1`), grana `main` | Izgradnja: `npm run build`<br>Izlaz: `.next` | `DATABASE_URL`, `AUTH_SECRET`, `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `NEXTAUTH_URL` |
| **Baza podataka** | Neon Serverless PostgreSQL (`eu-central-1`) | Automatizirano putem `prisma db push` / `prisma migrate deploy` | `DATABASE_URL` (zaštićena TLS veza s konekcijskim bazenom) |
| **Vanjska autentifikacija** | Google Cloud Console (OAuth 2.0) | Upravljana vanjska usluga | Preusmjeravanje: `https://<app-domain>/api/auth/callback/google` |

### Kontinuirana integracija i isporuka (CI/CD)

Projekt koristi automatizirani CI cjevovod na platformi **GitHub Actions** definiran u `.github/workflows/ci.yml`:
1. **Trigger:** Svaki *push* ili otvaranje *pull requesta* prema grani `main`.
2. **Koraci provjere:**
   - Čista instalacija ovisnosti (`npm ci`).
   - Generiranje tipiziranog ORM klijenta (`npx prisma generate`).
   - Izvođenje automatiziranih jediničnih i integracijskih testova (`npm test`).
   - Provjera produkcijske izgradnje cijele aplikacije (`npm run build`).
3. **Povezivanje s Vercelom:** Nakon uspješnog spajanja PR-a u granu `main`, Vercel automatski preuzima najnoviji kod, provodi izgradnju i postavlja novu produkcijsku verziju bez prekida rada sustava (engl. *zero-downtime deployment*).

### Pristup i administracija

- **Nadzor i zapisi pogrešaka (Logs):** Ovlašteni članovi tima pristupaju poslužiteljskim zapisima u stvarnom vremenu kroz Vercel Dashboard (kartica *Logs & Analytics*). Zapisi bilježe HTTP statuse, vrijeme odziva i neobrađene iznimke.
- **Upravljanje bazom podataka:** Stanje tablica, indeksi i podaci prate se putem Neon konzole i lokalnog alata Prisma Studio (`npx prisma studio`), koji pruža vizualno sučelje za sigurno pregledavanje podataka tijekom razvoja.
- **Postupak ažuriranja:** Svaka izmjena prolazi kroz recenziju koda (*Pull Request*), provjeru u GitHub Actions cjevovodu te se tek nakon odobrenja spaja u `main`.

---

>**Završna provjera:** Upute za lokalno pokretanje omogućuju podizanje cjelokupnog sustava iz čiste kopije repozitorija bez neprenosivih lokalnih staza. Dijagram razmještaja prikazuje samo stvarno produkcijsko okruženje, njegove čvorove i protokole. Poveznica na javnu aplikaciju provjerena je i usklađena s `README.md`. Administracijske upute opisuju mogućnosti koje tim stvarno pruža. Nijedna datoteka dokumentacije ne sadrži stvarne pristupne podatke, privatne tokene ili lozinke.
