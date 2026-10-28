# MAISON ÉCLAT

A cinematic fragrance concept boutique built with Next.js, TypeScript, Tailwind, GSAP ScrollTrigger, Motion, Lenis, React Three Fiber/Drei, and Zustand.

## Development

Use the existing checkout at `/workspace/maison-eclat`; cloud tasks are already isolated. No worktree is needed.

Node 24 and npm 11 were used for validation.

```sh
npm ci
npm run dev
```

The development server uses port 3000. Webpack is selected because Turbopack's CSS worker cannot bind its internal port in this environment. Local browser origins are explicitly allowed in next.config.ts.

```sh
npm run typecheck
npm run build
npm start
```

For browser integration tests, start the server first, then run `npm test`. The cloud machine has `/usr/bin/chromium`; on another machine adjust the executablePath in playwright.config.ts or install Playwright Chromium and remove that override. Tests cover variants, filters, persistent cart totals, demo checkout, 3D configuration, product routes, mobile overflow, reduced motion, and scroll behavior.

## What works

- Session-only, skippable intro and reduced-motion fallback.
- Editorial homepage, pointer response, reversible pinned storytelling, and smooth scrolling.
- Six products, collection filters/search/sort/favorites/quick view, product galleries, sizes and quantities.
- Real 3D atelier: four shapes and caps, three sizes, fragrance notes, glass and label colors, engraving, drag rotation, zoom, reset, and priced configurations.
- Persistent cart with separate variants and complete custom configuration records.
- Explicitly labeled demo checkout. No payment or shipping service; sample details remain in the browser and are not submitted anywhere.

## Assets and production boundaries

All bottle illustrations and 3D geometry are original procedural studies, not commissioned photorealistic renders. The same classic silhouette and label language recur throughout. The atelier offers additional shapes intentionally. The creation section uses illustrated studies rather than pretending to contain film or simulated production fluids. Ingredient photography, a final product model, cinematic manufacturing footage, and final brand assets are still required for the requested production visual quality. No third-party product photography is used. The bundled Liberation Serif font license is in public/FONT-LICENSE.txt.

The establishment date, Paris origin, craft claims, reviews, fragrances, delivery threshold and prices are illustrative concept content. Verify or replace them before a public launch. All reviews are labeled sample data. A real store also needs a backend, inventory, tax/shipping rules, payment integration, approved ingredient/allergen disclosures, and actual legal policies.

Cart state is stored in localStorage; introductory playback state in sessionStorage. No credentials or environment variables are needed. The WebGL scene is lazy loaded, uses bounded pixel ratio and local font files, and reports unavailable WebGL without blocking purchase configuration controls.
