# Implementation Plan — Tailwind CSS v3 Migration

Migrate the React portfolio application from Vanilla CSS components to Tailwind CSS v3 utility classes, using PostCSS configuration.

## Proposed Changes

We will keep custom structural rules (like custom scrollbar, cursor follow, and scroll progress width) in `src/index.css` but rewrite all layout, colors, grids, typography, flexboxes, margins, paddings, and hover effects inside the React components to use Tailwind CSS utility classes.

### Configuration Setup

#### [MODIFY] [package.json](file:///c:/Users/mom%20dad/Downloads/protfolio/package.json)
- Add `tailwindcss`, `postcss`, and `autoprefixer` to `devDependencies`.

#### [NEW] [tailwind.config.js](file:///c:/Users/mom%20dad/Downloads/protfolio/tailwind.config.js)
- Configure content paths to scan `index.html` and `src/**/*.{js,ts,jsx,tsx}`.
- Extend tailwind colors and font families to match the custom portfolio styleguide (bg, bg2, bg3, surface, surface2, border, border2, text, muted, accent, accent2, accent3, green, pink, Syne font, DM Sans font).

#### [NEW] [postcss.config.js](file:///c:/Users/mom%20dad/Downloads/protfolio/postcss.config.js)
- Enable `tailwindcss` and `autoprefixer` plugins.

### Component Styling Updates

#### [MODIFY] [index.css](file:///c:/Users/mom%20dad/Downloads/protfolio/src/index.css)
- Add `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`.
- Remove component-specific classes that can be represented in Tailwind.
- Retain only custom non-Tailwind features (e.g. scrollbar, custom cursor, canvas particles container absolute styling, scroll progress, keyframes for pulse/fadeUp/scrollAnim).

#### [MODIFY] [Navbar.jsx](file:///c:/Users/mom%20dad/Downloads/protfolio/src/components/Navbar.jsx)
- Apply Tailwind navigation bar styles (backdrop-blur, border-b, fixed positioning, typography, etc.).

#### [MODIFY] [Hero.jsx](file:///c:/Users/mom%20dad/Downloads/protfolio/src/components/Hero.jsx)
- Apply Tailwind utility classes for Hero structure, flex-centering, text sizes, actions button styling, and socials listing.

#### [MODIFY] [About.jsx](file:///c:/Users/mom%20dad/Downloads/protfolio/src/components/About.jsx)
- Refactor the grid layout, stats card items, custom bio gradient typography, and tags list to Tailwind CSS classes.

#### [MODIFY] [Skills.jsx](file:///c:/Users/mom%20dad/Downloads/protfolio/src/components/Skills.jsx)
- Apply Tailwind grid layout for Bento Grid layout, custom category panels, and skill pills.

#### [MODIFY] [Experience.jsx](file:///c:/Users/mom%20dad/Downloads/protfolio/src/components/Experience.jsx)
- Style timeline container, left indicators line, timeline items, dots, tags, and dates.

#### [MODIFY] [Projects.jsx](file:///c:/Users/mom%20dad/Downloads/protfolio/src/components/Projects.jsx)
- Map grids, custom cards, emoji headers, tech stacks, live links, and featured cards using Tailwind CSS.

#### [MODIFY] [GithubActivity.jsx](file:///c:/Users/mom%20dad/Downloads/protfolio/src/components/GithubActivity.jsx)
- Refactor language bars and github contributions squares grid to Tailwind classes.

#### [MODIFY] [Contact.jsx](file:///c:/Users/mom%20dad/Downloads/protfolio/src/components/Contact.jsx)
- Style form controls, inputs, layout, and contact handles.

#### [MODIFY] [Footer.jsx](file:///c:/Users/mom%20dad/Downloads/protfolio/src/components/Footer.jsx)
- Apply basic spacing and copyright text styling using Tailwind.

## Next Steps

1. Approve this plan.
2. We will write the config files and update package.json.
3. You will run `npm install` in your terminal to download Tailwind packages.
4. We will migrate each component's styles to Tailwind.
