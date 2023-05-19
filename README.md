# Vue Designer Nuxt Tailwind CSS - Quick start template

This is a starter template that pre-includes the [Pinegrow Nuxt Module](https://www.npmjs.com/package/@pinegrow/nuxt-module) and other goodies for Vue Designer.

## Vue Designer

A desktop drag-and-drop editor for Vue apps supporting Mac, Windows and Linux by [Pinegrow](https://pinegrow.com/).

It let's you visually design 🎨 your Vue single file components and boosts your productivity and your creativity while building your component-based Vue apps.

It smartly integrates with your ⚡️ [Vite](https://vitejs.dev/) based CLI, and provides an amazing deverloper experience with it's powerful visual controls and features.

Clean code, No lock-in 😃

## Try it now!

### 1. Clone to local

[Create a repo from this template on GitHub](https://github.com/pinegrow/pg-nuxt-tailwindcss/generate).

(or)

If you prefer to do it manually with the cleaner git history

```bash
npx giget@latest gh:pinegrow/pg-nuxt-tailwindcss my-nuxt-tailwindcss-app #project-name
cd my-nuxt-tailwindcss-app
npm install #or use pnpm
```

## 2. Open in Vue Designer

Open your project in Vue Designer, and follow the instructions displayed in the Config Panel (that should pop-out automatically). Config Panel ⚙️ displays the key packages and the various links to their individual ecosystem and community.

## Usage

### Start your development server

```bash
npm run dev
```

### Build

```bash
npm run build # SPA SSR
npm run generate # SPA SSG (full-static)
```

And you will see the generated file in `dist` that's ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your app will be live in a minute.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Pre-packed

### Meta Framework (Vue-based)

- [Nuxt](https://nuxt.com/) - The Intuitive Vue Framework
  - 👉 Follow the Nuxt docs for the amazing list of [features](https://nuxt.com/docs/getting-started/introduction)

### UI Frameworks

- [Tailwind CSS](https://tailwindcss.com/docs/guides/nuxtjs#3) - The amazing utility-first CSS framework.

### Filed-based CMS (markdown)

- [Nuxt Content](https://github.com/nuxt/content) - file-based CMS for powered by Markdown & Vue components. Note: This page is a markdown file 🗒

### Icons

- [Nuxt Icon](https://github.com/nuxt-modules/icon) - use over 100,000 open-source [Iconify](https://iconify.design/) icons.

### Modules/Plugins

- [Pinegrow Nuxt Module](https://www.npmjs.com/package/@pinegrow/nuxt-module) - enables you to live-design your Vue single-file-components visually in Vue Designer.

- [Pinegrow Tailwind CSS Plugin](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) - via Design Panel, enables visual controls customization (automatic) and theme customization (optional).

### Devtools

- [Nuxt Devtools](https://devtools.nuxtjs.org) - Enhance your DX (developer experience) with an amazing set of in-app features.

- [Vue Devtools](https://devtools.vuejs.org/guide/installation.html#standalone) - Official devtools that can be used as a standalone app alongside Vue Designer. It's configured as a Nuxt plugin (only during development).

### Deployment

- [Netlify](https://www.netlify.com/) - zero-config deployment

### VS Code Extensions

- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://vuejs.org/guide/scaling-up/sfc.html)
- [ESLint](https://eslint.org) with [@nuxt/eslint-config](https://github.com/nuxt/eslint-config) - opinionated not-so-strict set of linting rules.
- [Prettier](https://prettier.io) with [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - format without conflicting with eslint rules.

## Community

- [Pinegrow Vue Designer](https://forum.pinegrow.com/)
