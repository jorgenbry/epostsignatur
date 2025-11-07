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

## Teknologi

- Next.js 14
- React 18
- TypeScript
- Vercel for hosting

