# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Terminal Generator is a React + Redux web app that lets users visually configure a Windows Terminal profile and generates the corresponding JSON snippet to paste into their `settings.json`. It is live at https://terminal-generator.netlify.app/.

## Project Layout

The active project lives in `new/` (Vite + React 19 + MUI v6). The original CRA project in `src/` is kept for reference but is not actively developed.

## Environment Setup

Copy `new/.env.example` to `new/.env` and fill in your Google Fonts API key:
```
VITE_GOOGLE_API_KEY=<your key>
```

The app uses `VITE_` prefix as required by Vite for env vars exposed to the browser (accessed via `import.meta.env.VITE_*`).

## Commands

### New project (`new/` — Vite, React 19)
```bash
cd new
npm run dev      # dev server at http://localhost:5173
npm run build    # production build
npm run preview  # preview production build
npm test         # run Vitest tests
npm run eslint   # auto-fix JS/JSX via eslint --fix
```

### Legacy project (root — CRA, React 16, do not use for new work)
```bash
yarn start        # dev server
yarn build        # production build (test with: serve -s build)
yarn test         # run tests (watches by default)
yarn lint:fix     # auto-fix SCSS via sass-lint-auto-fix
yarn eslint       # auto-fix JS/JSX via eslint --fix
```

Always branch from `dev`, not `main`.

## Architecture

### Data flow

Settings changes flow one-way: **Settings panel → Redux action → `terminalReducer` → `Terminal` (live preview) + `ResultCard` (JSON output)**.

The `ResultCard` generates output by diffing `terminalReducer` state against `defaultValueReducer` state — only properties that differ from defaults are included in the generated JSON. This is the core output-generation mechanic in `new/src/components/ResultCard.jsx`.

### Redux store (`new/src/redux/`)

Four reducers combined in `reducers/index.js`:

| Reducer | Purpose |
|---|---|
| `terminalReducer` | All Windows Terminal profile properties (font, colors, padding, cursor, etc.) |
| `defaultValueReducer` | Same shape as `terminalReducer` but with "empty/default" values — used to strip unchanged settings from output |
| `filterReducer` | UI navigation (active settings tab index) + Google Fonts API data (font faces, weights, font object) |
| `settingsReducer` | App-level settings like background image URL |

Actions are plain objects in `new/src/redux/actions/index.js` — no RTK slices, just `@reduxjs/toolkit` store config with RTK v2 `configureStore` (thunk middleware included automatically).

Padding is stored as a comma-separated string `"top, right, bottom, left"` (e.g. `"8, 8, 8, 8"`) and parsed with the `PAD_DIR` helper enum in `new/src/helpers/PaddingDir.js`.

### Component structure

```
App
├── GlobalHeader
├── Terminal              ← live preview, reads from terminalReducer + settingsReducer
│   └── TerminalHeader
├── SettingsWrapper       ← tab navigation + section router
│   ├── Filter            ← tab bar, sets filterReducer.filterIndex
│   └── [active section]  ← one of: GeneralSettings, Background, Padding,
│                            ColorSettings, KeyboardSettings, ScrollSettings
└── ResultCard            ← collapsible output panel with copy button
    ├── BasicSettingsTemplate   ← JSON snippet (changed props only)
    └── AdvanceSettingsTemplate ← full settings.json context
```

Settings sections live in `new/src/components/Settings/`. Reusable inputs are in `new/src/components/Input/` (Checkbox, ColorWheel, Dropdown, SliderInput, GoogleFontsDropdown, AddImage, GifSelector).

`SliderInput` uses `@mui/material/Slider` (MUI v6). The `onChange` handler receives `(event, value)` — the value is the second argument.

### API

`new/src/api/GetGoogleFonts.js` is a thunk that fetches the Google Fonts list on app mount and dispatches `setFontFaces` into `filterReducer`. Env var: `import.meta.env.VITE_GOOGLE_API_KEY`.

### Styling

SCSS files live in `new/src/style/` (global settings like variables, typography, animations) and `new/src/style/components/` (per-component). Component `.scss` files are imported in `App.scss`. Dart Sass (`sass` package) is used — `node-sass` is no longer a dependency.

## Code Style

ESLint enforces: 2-space indent, single quotes, semicolons, Unix line endings. Run `npm run eslint` (from `new/`) before committing JS changes. All component files use `.jsx` extension in `new/src/`.
