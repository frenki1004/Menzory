# SpasiZalogaj

Platforma za povezivanje prodajnih mjesta s viškom hrane, kupaca koji žele povoljnije obroke i humanitarnih organizacija.

**Projekt na kolegiju:** Ovu je aplikaciju razvio studentski tim Menzory (G07) u sklopu kolegija [Programsko inženjerstvo](https://www.fer.unizg.hr/predmet/proinz) na Fakultetu elektrotehnike i računarstva Sveučilišta u Zagrebu (FER).

## Opis aplikacije

SpasiZalogaj rješava problem bacanja hrane omogućavanjem prodajnim mjestima (pekare, restorani, trgovine) da viškove hrane ponude kupcima po sniženim cijenama ili ih doniraju humanitarnim organizacijama. Kupci putem interaktivnog sučelja pronalaze i rezerviraju ponude te ih preuzimaju uz jedinstveni sigurnosni kod.

**Ključne funkcionalnosti:**
- **Pregled i pretraga ponuda (FZ-17):** Prikaz pojedinačnih proizvoda i paketa iznenađenja s lokacijom, popustom i vremenom preuzimanja.
- **Objava ponuda (FZ-12, UC-02):** Prodajna mjesta unose detalje viška hrane, redovnu i sniženu cijenu te opciju besplatne donacije.
- **Atomska rezervacija (FZ-20, UC-03):** Kupac rezervira hranu, a sustav atomski umanjuje dostupnu količinu (NF-05).
- **Verifikacija koda za preuzimanje (FZ-22, UC-04):** Kriptografski siguran jednokratni kod (SHA-256 sažetak u bazi) koji djelatnik provjerava pri preuzimanju.
- **Prijava putem OAuth 2.0 / OIDC (FZ-01, ADR-03):** Prijava putem Google računa uz dodjelu uloga (Kupac, Prodajno mjesto, Humanitarna organizacija).

Za potpuni opseg, zahtjeve, oblikovanje i dokaze ispitivanja pogledajte [projektnu dokumentaciju](docs/Home.md).

<a id="deployment"></a>
## Postavljanje (engl. deployment)

- **Javno dostupna aplikacija:** Uskoro na Vercelu (postavljanje u tijeku za M1).
- **Isprobajte:** Pregledajte aktivne ponude na `/ponude` ili isprobajte verifikaciju koda na `/prodajno-mjesto/preuzimanje`.
- **Demonstracija:** Za prijavu se koristi vanjski Google račun (Auth.js); za testiranje javnih ruta nije potrebna prijava.
- **Ograničenja:** U fazi M1 podaci o plaćanju koriste se u simuliranom načinu (mock provider).

<a id="quick-start"></a>
## Brzi početak / instalacija

**Preduvjeti:**
- Node.js (v20 ili noviji)
- npm (v10 ili noviji)
- PostgreSQL baza podataka (npr. besplatna instanca na [Neon.tech](https://neon.tech))

```bash
# 1. Kloniranje repozitorija
git clone https://github.com/frenki1004/Menzory.git
cd Menzory

# 2. Instalacija ovisnosti
npm install

# 3. Konfiguracija okruženja
cp .env.example .env
# Uredite .env i unesite DATABASE_URL te AUTH_SECRET

# 4. Generiranje Prisma klijenta
npx prisma generate

# 5. Pokretanje testova
npm test

# 6. Pokretanje razvojnog poslužitelja
npm run dev
```

Aplikacija je dostupna na adresi: `http://localhost:3000`

<a id="tehnologije"></a>
## Tehnologije

| Tehnologija ili alat | Uloga u ovom projektu | Razlog uporabe ili važno ograničenje |
| --- | --- | --- |
| **Next.js 15 (App Router)** | Full-stack okvir za web sučelje i poslužiteljske rute (ADR-01) | Jedinstvena aplikacija u TypeScriptu olakšava razvoj i postavljanje na Vercel. |
| **PostgreSQL (Neon)** | Primarna relacijska baza podataka (ADR-02) | Čuva relacije između ponuda, rezervacija i korisnika uz podršku za ACID transakcije (NF-05). |
| **Prisma ORM** | Upravljanje shemom baze, migracije i tipizirani upiti | Automatsko generiranje tipova i dosljedno mapiranje 15 entiteta iz ER dijagrama. |
| **Auth.js (v5)** | Autentifikacija korisnika putem Google OAuth 2.0 / OIDC (ADR-03) | Sigurna prijava bez pohrane korisničkih lozinki; uloge se provjeravaju u bazi (NF-02). |
| **Tailwind CSS** | Oblikovanje korisničkog sučelja | Brza izrada responzivnog i pristupačnog sučelja za sve uloge. |

<a id="team-members"></a>
## Članovi tima (Menzory, G07)

| Član | Uloga i doprinos |
| --- | --- |
| **Frane Andrić** | Voditelj tima, arhitektura, analiza zahtjeva, koordinacija repozitorija |
| **Fabijan Pitlović** | Full-stack kostur (Next.js/Prisma/Auth.js), domenski servisi ponuda i rezervacija, CI pipeline |
| **David Kokorović** | Arhitektura sustava, UML modeliranje, PlantUML dijagrami |
| **Borna Mužina** | Analiza nefunkcijskih zahtjeva, dokumentacija, ispitivanje |
| **Enzo Kutić** | Obrasci uporabe, analiza dionika, dokumentacija |
| **Lovro Blagić** | Obrasci uporabe, UC dijagrami, specifikacija tokova |

<a id="ai-usage"></a>
## Uporaba umjetne inteligencije [![AI Usage: Disclosed](https://img.shields.io/badge/AI%20Usage-Disclosed-blue.svg)](https://www.fer.unizg.hr/_download/repository/Policy%20on%20the%20appropriate%20use%20of%20artificial%20intelligence%20at%20the%20faculty%20of%20electrical%20engineering%20and%20computing%5B1%5D.pdf)

Ovaj projekt slijedi FER-ova [pravila o primjerenoj uporabi umjetne inteligencije](https://www.fer.unizg.hr/_download/repository/Policy%20on%20the%20appropriate%20use%20of%20artificial%20intelligence%20at%20the%20faculty%20of%20electrical%20engineering%20and%20computing%5B1%5D.pdf).

**Izjava:** Alati umjetne inteligencije (Gemini, Claude) korišteni su kao pomoć pri jezičnom i formatnom oblikovanju dokumentacije, generiranju kostura koda i provjeri rubnih slučajeva testova. Sve arhitekturne odluke, zahtjeve, relacijski model podataka i poslovna pravila osmislio je i neovisno verificirao studentski tim.

<a id="code-of-conduct-and-support"></a>
## Kodeks ponašanja i podrška [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

Od članova tima očekuje se pridržavanje **Kodeksa ponašanja studenata** Fakulteta elektrotehnike i računarstva Sveučilišta u Zagrebu, pravila timskog rada na kolegiju i [Etičkog kodeksa IEEE-a](https://www.ieee.org/about/corporate/governance/p7-8.html).

---

Struktura dokumentacije prilagođena je predlošku kolegija Programsko inženjerstvo FER-a autora [Vlade Sruka](https://www.fer.unizg.hr/vlado.sruk), licenciranom pod [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Aplikaciju i njezin sadržaj izradio je studentski tim Menzory.
