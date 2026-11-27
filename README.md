# GhostPepper

**GhostPepper** is a personal digital entertainment hub designed to bring a media library, music integrations, game library, personal files, and browser-style tools into one interactive and accessible experience.

> **Project status:** Initial documentation and repository setup. The application source code, dependency manifest, and Cloudflare configuration have not been added yet. The development commands below distinguish what works now from what will become available after the application scaffold is committed.

## Repository

- **GitHub repository:** https://github.com/eladmi19988/GhostPepper
- **Git remote:** https://github.com/eladmi19988/GhostPepper.git
- **Primary branch:** `main`

## Product scope

The planned platform includes:

- Personal library for movies, videos, audio, documents, and images.
- Media playback, subtitle support where available, and playback progress.
- Official Spotify and YouTube integrations, subject to their APIs, OAuth rules, and platform restrictions.
- Personal game library and launch shortcuts, subject to the capabilities of the target device.
- Browser-style tabs, search, bookmarks, history, and downloads.
- User registration, sign-in, password recovery, profiles, and account settings.
- In-app communication and notifications.
- Memberships, payments, and subscription management.
- Administration dashboard, user management, settings, and audit records.
- AI-assisted discovery and recommendations.
- Optional VPN offering only after the provider grants the required written reseller/partner authorization.

A browser-based application cannot provide every capability of a native desktop browser or directly launch arbitrary local games. Those capabilities may require a separately developed desktop application.

## Planned technology and hosting

The approved initial hosting direction is:

| Area | Planned technology |
| --- | --- |
| Source control | GitHub |
| Application hosting | Cloudflare Workers |
| Database | Cloudflare D1 |
| Media and file storage | Cloudflare R2 |
| Initial public address | Cloudflare `workers.dev` subdomain |
| Environments | Separate Preview and Production |

No custom domain is required for the initial stage. Do not connect this project to unrelated existing Vercel, Supabase, Neon, or other projects.

## Languages, responsive design, and accessibility

The initial language plan includes 14 languages:

- Hebrew (default)
- English
- Arabic
- Russian
- French
- Spanish
- German
- Italian
- Portuguese
- Turkish
- Chinese
- Japanese
- Korean
- Hindi

The interface will support instant language switching, right-to-left (RTL) layouts for Hebrew and Arabic, and left-to-right (LTR) layouts for other languages.

Accessibility target: **WCAG 2.2 AA**. Planned requirements include keyboard operation, visible focus, semantic structure and accessible labels, screen-reader support, sufficient contrast, text resizing, reduced motion, and clear form feedback.

The interface will be designed for desktop, mobile, tablet, and smart-TV-sized screens, with touch, pointer, keyboard, and remote-friendly interaction considered where applicable.

## Getting started

### Requirements

For the current repository-only stage:

- Git
- A GitHub account with access to this repository

For the planned application development and deployment stages, the expected tools are:

- Node.js (LTS) and npm
- A code editor
- A Cloudflare account for Workers, D1, and R2 deployment
- Wrangler CLI for Cloudflare development and deployment

Exact Node.js versions, package scripts, and Wrangler commands will be documented after the application scaffold and configuration files are added. They are intentionally not guessed here.

### 1. Clone the repository

Open a terminal and run:

```bash
git clone https://github.com/eladmi19988/GhostPepper.git
cd GhostPepper
```

### 2. Check the repository

```bash
git status
git branch
```

At this initial stage, the repository contains project documentation only. There is not yet an application to install or run, so `npm install` and `npm run dev` are not available until the source scaffold and `package.json` are committed.

### 3. Keep your local copy up to date

```bash
git pull origin main
```

### 4. Save and publish your changes

After editing or adding project files:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

Never commit API keys, passwords, access tokens, private certificates, or other secrets. Use local environment files (excluded from Git) and Cloudflare secrets for sensitive configuration.

## Connecting an existing local folder to GitHub

Repository URL:

```text
https://github.com/eladmi19988/GhostPepper.git
```

Choose **one** of the following methods according to the state of your local folder.

### Option A — First-time Git setup

Use this when the folder is not yet a Git repository:

```bash
echo "# GhostPepper" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/eladmi19988/GhostPepper.git
git push -u origin main
```

If you have already created the README locally, do not append the heading again; use the existing file and continue from `git init`.

### Option B — Git is already initialized and has a commit

Use this when the local folder is already a Git repository and contains at least one commit:

```bash
git remote add origin https://github.com/eladmi19988/GhostPepper.git
git branch -M main
git push -u origin main
```

If a remote named `origin` already exists, inspect it instead of adding it again:

```bash
git remote -v
```

If needed, update the existing remote:

```bash
git remote set-url origin https://github.com/eladmi19988/GhostPepper.git
```

**Important:** Options A and B are alternatives, not consecutive steps. If Git reports that the remote contains commits you do not have locally, stop and inspect the repository history before attempting to push. Do not force-push over existing work.

## Security and integration principles

- Keep secrets out of source code and Git history.
- Use environment variables for local development and Cloudflare secrets for deployed environments.
- Keep Preview and Production separated.
- Use official APIs and approved OAuth flows for third-party services.
- Do not bypass subscription, DRM, licensing, or platform restrictions.
- Do not enable paid services or upgrades without explicit approval.
- VPN resale, subscription provisioning, and branded sales require written authorization from the provider; an affiliate relationship alone is not sufficient.
- Store large media files in object storage rather than in the relational database.

## Planned architecture

The application is intended to be modular, with clear boundaries between:

- **Core:** accounts, roles, profiles, settings, and localization.
- **Library:** personal collections, metadata, and organization.
- **Media:** playback, subtitles, and progress tracking.
- **Games:** game catalog and supported launch workflows.
- **Storage:** uploads, access control, and storage-provider adapters.
- **Integrations:** Spotify, YouTube, and other authorized services.
- **Payments:** orders, subscriptions, payment-provider adapters, and webhooks.
- **VPN:** provider abstraction and admin-reviewed activation requests.
- **AI:** search, discovery, and recommendation services.
- **Browser:** tabs, bookmarks, history, and search experience.
- **Admin:** user management, operational settings, and audit logs.

Integrations should be implemented behind adapters and feature flags so they can remain disabled until credentials, permissions, and provider approvals are available.

## Development roadmap

1. Create the application scaffold and establish the project structure.
2. Build the responsive application shell and navigation.
3. Implement language switching, RTL/LTR behavior, and accessibility foundations.
4. Add authentication and account settings.
5. Add the library, media, games, and storage modules.
6. Add the admin dashboard and integration configuration.
7. Connect Cloudflare D1, R2, and Workers.
8. Test in Preview before any Production release.
9. Add payment and external provider integrations only after their requirements and permissions are confirmed.

## Current status

- [x] GitHub repository created by the project owner.
- [x] Initial project documentation added.
- [ ] Application source scaffold.
- [ ] Automated tests and accessibility checks.
- [ ] Cloudflare Preview environment.
- [ ] Cloudflare Production deployment.

---

GhostPepper is being developed as an independent project. Changes to unrelated repositories, accounts, or production systems are out of scope.
