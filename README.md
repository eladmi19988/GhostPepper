# GhostPepper

**GhostPepper** is a personal digital entertainment hub bringing your media library, music, games, personal files, and browser-style tools into one interactive and accessible experience.

> **Current status:** The initial React + TypeScript application shell is now in the repository. It includes responsive navigation, a 14-language selector, Hebrew default with RTL support for Hebrew and Arabic, and starter accessibility controls. Authentication, uploads, playback, database, and external integrations are not connected yet.

## Repository

- GitHub: https://github.com/eladmi19988/GhostPepper
- Remote: https://github.com/eladmi19988/GhostPepper.git
- Main branch: `main`

## Technology and hosting direction

| Area | Technology |
| --- | --- |
| Frontend | React + TypeScript + Vite |
| Hosting target | Cloudflare Workers static assets |
| Database target | Cloudflare D1 (not connected yet) |
| File storage target | Cloudflare R2 (not connected yet) |
| Initial URL | Cloudflare `workers.dev` |
| Environments | Preview and Production |

**Isolation requirement:** This project is independent. Do not connect it to, deploy it through, or modify any existing Vercel project. No Vercel account/project was accessed or changed as part of this work. Do not connect unrelated Supabase, Neon, or other projects. No paid service or upgrade without explicit approval.

## Languages, responsive design, and accessibility

The language selector currently includes 14 languages: Hebrew (default), English, Arabic, Russian, French, Spanish, German, Italian, Portuguese, Turkish, Chinese, Japanese, Korean, and Hindi.

- Hebrew and Arabic use RTL; other languages use LTR.
- Hebrew, English, and French currently have starter UI translations. Other language choices are listed and use English fallback text until their translations are completed.
- Language selection updates the page language and direction without reloading.
- Responsive layouts are included for desktop, tablet, and mobile.
- Accessibility foundations include a skip link, keyboard-visible focus, semantic landmarks, accessible labels, status announcements, high-contrast option, larger text option, and reduced-motion option.
- Target: WCAG 2.2 AA. A formal accessibility audit is still required.

## Getting started

### Requirements

- Node.js LTS (Node 20 or newer recommended)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/eladmi19988/GhostPepper.git
cd GhostPepper
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the local development server

```bash
npm run dev
```

Vite prints a local address (normally `http://localhost:5173`). Open that address in your browser.

### 4. Run tests

```bash
npm test
```

### 5. Create a production build locally

```bash
npm run build
```

The generated static site is written to `dist/`.

### 6. Cloudflare deployment (not performed yet)

After creating and configuring the dedicated Cloudflare project and authenticating Wrangler:

```bash
npx wrangler deploy --env preview
```

Production deployment must happen only after Preview verification and explicit approval:

```bash
npx wrangler deploy --env production
```

No Cloudflare account resources, D1 database, R2 bucket, or deployment have been created by this scaffold commit.

## Project structure

```
.
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── wrangler.toml
├── tests/
│   └── setup.ts
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── lib/
    │   ├── i18n.ts
    │   └── i18n.test.ts
    └── styles/
        └── global.css
```

## Planned product modules

- **Core:** accounts, roles, profiles, settings, localization.
- **Library:** personal collections and metadata.
- **Media:** playback, subtitles, and progress tracking.
- **Games:** game catalog and supported launch workflows.
- **Storage:** secure uploads and storage-provider adapters.
- **Integrations:** official Spotify, YouTube, and other authorized services.
- **Payments:** orders, subscriptions, payment adapters, and webhooks.
- **VPN:** provider abstraction and admin-reviewed activation requests; resale requires written authorization.
- **AI:** discovery and recommendations.
- **Browser:** tabs, bookmarks, history, and search. A full native desktop browser may require a separate desktop client.
- **Admin:** user management, operational settings, and audit logs.

External integrations should remain behind adapters and feature flags until credentials, permissions, and provider approvals are available. Never commit secrets, API keys, passwords, or tokens. Use local environment files (excluded from Git) and Cloudflare secrets.

## Development roadmap

1. Expand the application shell and complete translations.
2. Add authentication and account management.
3. Build library metadata and secure uploads with D1/R2.
4. Add media playback, subtitles, and progress.
5. Add games and authorized music/video integrations.
6. Build admin functions, payments, and VPN request workflow.
7. Add AI discovery and browser-style features.
8. Verify Preview, accessibility, security, and responsive behavior before Production.

## Current status

- [x] GitHub repository and initial documentation.
- [x] React + TypeScript + Vite scaffold.
- [x] Responsive initial application shell.
- [x] Language selector and RTL/LTR foundation.
- [x] Starter accessibility controls and localization tests.
- [ ] Complete translations for all 14 languages.
- [ ] Dependency installation and automated test/build verification.
- [ ] Authentication, D1, and R2.
- [ ] Cloudflare Preview deployment.
- [ ] Production release (approval required).

---

GhostPepper is developed as an independent project. Unrelated repositories, Vercel projects, accounts, and production systems are out of scope.
