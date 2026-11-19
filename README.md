# Souhardya Bose — Arcade Portfolio

A complete Next.js portfolio redesign inspired by CBGO’s retro arcade art direction, with manga framing and actual Sakuga VFX interactions.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production validation: `npm run build`; serve the build with `npm start`.

## Design

Deep purple backgrounds, turquoise and pink accents, Pixelify Sans headings, Bricolage Grotesque body text, hard offset shadows, CRT scanlines, halftone photography, manga impact lettering and tactile controls. Fonts are self-hosted. Responsive layouts include a phone navigation menu. Reduced-motion preferences disable decorative CSS animation; Sakuga handles its own reduced-motion effects.

## Pages and content

- `/`: profile, impact, filterable projects, all six Techfluence editions, event galleries, experience, skills, meeting photos, community stories and contact.
- `/experience`: complete timeline, education, achievements, appointment document and program photography.
- `/research` and `/patents`: searchable records.
- `/content`: talks and filterable lessons.
- `/hire`: collaboration areas and contact.

Primary content stays in `app/lib/data.js`. Existing patent, paper and lesson records are preserved in `app/lib/archive-data.js`. The new components live in `app/components/arcade/`; the visual system is in `app/globals.css`.

The original repo contains unverified placeholder records, missing viewing links, generic social URLs and inconsistent counts. The new interface labels unavailable documents/lessons instead of presenting `#` as a working link. Verify research records, publication metadata, patent details, counts, and real social profile URLs before public release. Original source components and assets remain available in the repository.

## Anime interactions

Installed through the requested shadcn CLI:

```sh
npx shadcn@latest add finktheartist/sakuga-vfx/button finktheartist/sakuga-vfx/tabs finktheartist/sakuga-vfx/toast
```

The real custom elements are loaded from `public/sakuga-vfx/`, with palette overrides and CSS parts matching the arcade design. Buttons produce manga impact reactions; project tabs animate selection; successful email copying triggers a toast. No simulated form submission or booking is used: contact links open email, and the copy control uses the browser clipboard.

## Credits

- Art-direction reference: https://www.cbgo.in/
- Sakuga VFX by finktheartist: https://github.com/finktheartist/sakuga-vfx — MIT; license bundled in `public/sakuga-vfx/LICENSE`.
- Pixelify Sans and Bricolage Grotesque — SIL Open Font License; licenses bundled in `public/fonts/`.
- Photography and portfolio content from the original My-Website repository.

Source repository: https://github.com/VeerVaibhav/Bose-portfolio. The website has not been deployed.

## Legacy chatbot

The previous browser-side chatbot is retired. The server endpoint requires `OPENROUTER_API_KEY` in the deployment environment and returns 503 when it is not configured. No API credentials are committed. This repository begins with a clean snapshot because the source history contained exposed credentials.
