# Walkthrough — Tailwind CSS v3 Migration

We have successfully migrated the React portfolio application from Vanilla CSS styles to Tailwind CSS v3 utility classes!

## What Was Accomplished

1. **Tailwind Configurations**:
   - Added `tailwindcss`, `postcss`, and `autoprefixer` to `package.json` devDependencies.
   - Created `postcss.config.js` to enable Tailwind compiler plugins.
   - Created `tailwind.config.js` with full content path scanning and custom design theme extensions (`bg`, `surface`, `borderCustom`, and custom typography variables).
2. **Refactored Stylesheet (`src/index.css`)**:
   - Injected `@tailwind` directives.
   - Retained only structural non-utility rules like custom scrollbars, cursor followers, scroll progress tracking, and keyframe animations.
3. **Migrated All Components to Tailwind**:
   - Replaced Vanilla CSS selectors with utility classes inside `Navbar.jsx`, `Hero.jsx`, `About.jsx`, `Skills.jsx`, `Experience.jsx`, `Projects.jsx`, `GithubActivity.jsx`, `Contact.jsx`, `Footer.jsx`, and `App.jsx`.
   - Utilized custom theme extensions (e.g. `bg-bg`, `text-textCustom`, `border-borderCustom`, `text-accentCustom2`, etc.) to match the exact aesthetic.

## How to Apply Changes and Start the App

Since new npm dependencies were added to `package.json`, please run the following commands in your terminal:

```bash
# 1. Download Tailwind, PostCSS, and Autoprefixer packages
npm install

# 2. Start (or restart) the development server
npm run dev
```

The application will hot-reload, and you will see the exact same premium dark portfolio design, now entirely driven by Tailwind CSS v3!
