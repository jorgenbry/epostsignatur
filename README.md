# E-postsignatur Generator

En webapplikasjon for å generere e-postsignaturer for Kagge forlag og andre klienter.

## Funksjoner

- **Input-panel**: Felt for navn, stilling, e-post og telefonnummer
- **Live forhåndsvisning**: Se signaturen din i sanntid
- **Kopier HTML**: Enkel kopiering av HTML-koden
- **Active Directory-kompatibel**: Bruker variabler som `%%DisplayName%%`, `%%Title%%`, etc.
- **Enkel tabell-layout**: 3 rader - navn/stilling, logo, kontaktinfo

## Installasjon

1. Installer avhengigheter:
```bash
npm install
```

2. Kjør utviklingsserver:
```bash
npm run dev
```

3. Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

## Deployment til Vercel

1. Push koden til en Git-repository (GitHub, GitLab, etc.)

2. Gå til [Vercel](https://vercel.com) og logg inn

3. Klikk "New Project" og importer repositoryet ditt

4. Vercel vil automatisk oppdage Next.js og konfigurere bygget

5. Etter deployment, oppdater logo-URLen i `lib/signature-generator.ts` med din faktiske Vercel-domain

## Logo

Last opp logoen din til `/public/logo/kagge-logo.png` (eller endre stien i konfigurasjonen). Logo-URLen vil være tilgjengelig som `https://your-domain.vercel.app/logo/kagge-logo.png` etter deployment.

## Tilpasse for nye klienter

For å legge til en ny klient:

1. Legg til konfigurasjon i `CLIENT_CONFIG` i `lib/signature-generator.ts`:
```typescript
const CLIENT_CONFIG = {
  kagge: { ... },
  nyKlient: {
    logoUrl: 'https://your-domain.vercel.app/logo/ny-klient-logo.png',
    logoAlt: 'Ny klient logo',
    logoWidth: 150,
  },
};
```

2. Last opp logoen til `/public/logo/ny-klient-logo.png`

3. Oppdater `page.tsx` for å bruke riktig klient (eller legg til en klientvelger)

## Template-variabler

Templaten bruker Active Directory-kompatible variabler:
- `%%DisplayName%%` - Navn
- `%%Title%%` - Stilling
- `%%Email%%` - E-postadresse
- `%%PhoneNumber%%` - Telefonnummer

## Outlook-bildeblokering (Image Blocking)

Outlook blokkerer eksterne bilder som standard for sikkerhet. Dette betyr at mottakere kan måtte klikke "Klikk for å se bilder" for å se logoen i signaturen.

### Løsninger (best til dårligst):

#### 1. **Host bilder på firmaets eget domene (Anbefalt)**
Det beste alternativet er å hoste logoene på firmaets eget domene (f.eks. `kagge.no`). Dette gjør at Outlook stoler mer på bildene.

**Steg:**
1. Last opp logoene til firmaets webserver eller CDN (f.eks. `static.kagge.no/logo/kagge-logo.png`)
2. Oppdater `trustedLogoUrl` i `lib/signature-generator.ts`:
   ```typescript
   kagge: {
     // ... other config
     trustedLogoUrl: 'https://static.kagge.no/logo/kagge-logo.png',
   }
   ```

#### 2. **Konfigurer Exchange/Outlook til å tillate bilder**
IT-avdelingen kan konfigurere Exchange Server eller Microsoft 365 til å tillate bilder fra et spesifikt domene:

**For Exchange Server:**
- Konfigurer Exchange Content Filter for å tillate bilder fra domenet

**For Microsoft 365:**
- I Exchange Admin Center, gå til Protection → Content Filter
- Legg til domenet (f.eks. `epostsignatur.vercel.app`) i tillatelsesliste

**For Outlook-brukere:**
- Hver bruker kan legge til avsenderen i "Trygge avsendere" i Outlook
- Dette er ikke ideelt da det krever handling fra hver bruker

#### 3. **Bruk en CDN som er mer pålitelig**
Noen CDN-tjenester har bedre rykte hos e-postklienter, men dette er fortsatt ikke like godt som firmaets eget domene.

### Hva er gjort i koden?

Koden har nå:
- ✅ Eksplisitte `width` og `height`-attributter (viktig for Outlook)
- ✅ `border="0"` attributt
- ✅ Optimaliserte CSS-stiler for Outlook
- ✅ Støtte for `trustedLogoUrl` som prioriteres over vanlig `logoUrl`

### Notat om Base64
Base64-kodede bilder bør **ikke** brukes, da de ofte blokkeres av moderne e-postklienter av sikkerhetshensyn.

## Teknologi

- Next.js 14
- React 18
- TypeScript
- Vercel for hosting

