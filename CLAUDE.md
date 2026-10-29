# Epostsignatur

Smuss Studios generator for e-postsignaturer til klienter. Brukeren fyller inn navn, stilling, e-post og telefon, ser en live forhåndsvisning og kopierer HTML-en inn i e-postklienten (Outlook, Apple Mail, iOS osv.).

- Next.js 14 (app router), React 18, TypeScript, SCSS-moduler. Ingen tester.
- Hostes på Vercel fra `main` i `github.com/jorgenbry/epostsignatur` – push til `main` = deploy.
- Prod-domene: `https://signatur.smuss.studio`. Hver klient har sin egen side: `/kagge`, `/nektar`, `/litteraturhuset`, `/gjessing`, `/nasjonalbiblioteket`, `/demo`.
- Kjør lokalt: `npm run dev` → http://localhost:3000/<klient>. Sjekk med `npm run lint` og `npm run build`.
- Brukeren (Jørgen) er designer, ikke utvikler: forklar på norsk, enkelt, og gjør endringene i stedet for å beskrive dem.

## Struktur

- `lib/signature-generator.ts` – kjernen.
  - `CLIENT_CONFIG`: per klient logo-URL, `trustedLogoUrl`, logostørrelse, farger, fontstørrelser, avdelinger, LinkedIn, egendefinert lenke.
  - `CLIENT_TEMPLATES`: hvilke maler hver klient har (flere maler = nedtrekksmeny i UI-et).
  - `getSignatureHTML` fyller inn data; `getTemplateWithVariables` gir AD-versjonen med variabler.
- `templates/<klient>-template.ts` – ren HTML i en template-string, eksporterer `<navn>Template` og `<navn>TemplateMeta` (`id`, `title`).
- `app/<klient>/page.tsx` – side som rendrer `<SignatureGenerator client="..." placeholders={...} />`. Placeholdere (f.eks. telefonformat) settes her per klient.
- `components/SignatureGenerator.tsx` – skjema, forhåndsvisning og kopier-knapp.
- `public/logo/` – logoer som serveres fra `signatur.smuss.studio/logo/...`. `public/fonts/` – STK Bureau Sans for selve appen.

## Plassholdere i malene

- `{{LOGO_URL}}`, `{{LOGO_ALT}}`, `{{LOGO_WIDTH}}`, `{{LOGO_HEIGHT}}`, `{{TEXT_COLOR}}`, `{{LINK_COLOR}}`, `{{NAME_FONT_SIZE}}`, `{{BODY_FONT_SIZE}}`, `{{DEPARTMENT_ROW}}` – fylles fra `CLIENT_CONFIG`.
- `%%DisplayName%%`, `%%Title%%`, `%%Email%%`, `%%PhoneNumber%%`, `%%Department%%`, `%%LinkedIn%%`, `%%CustomLink%%` – Active Directory-stil, fylles med brukerens input.
- `trustedLogoUrl` (logo på klientens eget domene) brukes foran `logoUrl` når den finnes.
- `logoWidth`/`logoHeight` kommer fra klientkonfigen og gjelder alle maler for klienten. Vil en mal ha en annen størrelse eller logo, hardkodes det i malen (slik Nektar Happy Ending og Nektar Import gjør med egne logo-URL-er).
- E-post og telefon får innsatt zero-width spaces (`breakEmailPattern`/`breakPhonePattern`) så Apple Mail ikke gjør dem om til blå auto-lenker.

## Ny klient

1. Lag `templates/<klient>-template.ts` (kopier en eksisterende).
2. Legg til klienten i `CLIENT_CONFIG` og `CLIENT_TEMPLATES` i `lib/signature-generator.ts`, med import av malen.
3. Lag `app/<klient>/page.tsx` med norske placeholdere (telefon: `+47 123 45 678`).
4. Legg logoen i `public/logo/`, helst også på klientens eget domene som `trustedLogoUrl`.

Ny mal for eksisterende klient (f.eks. en avdeling): ny fil i `templates/` + legg den til i klientens liste i `CLIENT_TEMPLATES`.

## Lærdom om e-postklienter

- Bare tabell-layout og inline CSS. Ingen `<button>`, ingen eksterne stilark.
- Logo-`<img>`: `role="presentation"`, eksplisitt `width`/`height` både som attributter og i style, `border="0"`, `display: block`. Logoen skal være omtrent 2× visningsstørrelsen for skarphet; filstørrelse har lite å si.
- Outlook understreker og omfarger lenker. Sett `color: … !important`, `text-decoration: none !important` og `mso-color-alt` både på `<a>` og på en indre `<span>`.
- Knapper (Litteraturhuset): «bulletproof button» – VML `<v:roundrect>` i `<!--[if mso]>` for Outlook + stylet `<span>` for alle andre klienter.
- Det finnes ingen HTML-triks som omgår «klikk for å vise bilder» når organisasjonen blokkerer bilder. Det som hjelper: logo på avsenderens eget domene, og SPF/DKIM/DMARC i orden.
- Gamle Outlook for Windows skriver om mye av HTML-en ved innliming. Den eneste robuste løsningen er en signatur satt sentralt av IT (Exchange/M365-admin, Exclaimer, CodeTwo).
- Uten `font-size` i malen arver signaturen e-postklientens standardstørrelse. Det ble prøvd på Litteraturhuset og reversert – klientene bruker faste størrelser.

## Kjent problem: domenet blokkeres (mars 2026)

`signatur.smuss.studio` ble blokkert som «phishing» av GlobalConnect (SafeSurf) og Telenor (DNS-filter, sertifikat `dns-error.telenor.net`), mens Vercel-URL-en virket. Det skyldes domeneomdømme hos leverandørene, ikke koden eller Vercel-sertifikatet. Løsningen er å be leverandørene om allowlisting / å melde fra om falsk positiv. Plausible-analytics ble fjernet fra `app/layout.tsx` som test (commit `908dd68`). Kallet `window.plausible` i `SignatureGenerator.tsx` er beskyttet og gjør ingenting uten scriptet. Sjekk med Jørgen om Plausible skal tilbake.
