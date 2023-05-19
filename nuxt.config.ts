//nuxt.config.js (or) nuxt.config.ts

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    // '@pinegrow/nuxt-module',
    // '@nuxthq/ui',
    'nuxt-icon',
    '@nuxt/devtools',
    '@nuxt/content',
  ],
  // pinegrow: {
  //   liveDesigner: {
  //     devtoolsKey: 'devtools',
  //     tailwindcss: {
  //       configPath: 'tailwind.config.ts',
  //       cssPath: '@/assets/css/tailwind.css',
  //     },
  //   },
  // },
  runtimeConfig: {
    public: {
      title: `Vue Designer`,
      description: 'Vue Designer Nuxt Tailwind CSS - Quick start template',
      author: 'Pinegrow',
      nav: [
        { text: 'Home', link: '/' },
        { text: `Quick Start`, link: '/quick-start' },
        { text: 'Subscribe', link: '/subscribe' },
      ],
    },
    app: {
      baseURL: '/',
    },
  },
  content: {
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: ['noopener'],
            test: (node: any) => /^https?:\/\//.test(node.properties.href),
          },
        ],
      ],
    },
    highlight: {
      theme: 'dracula-soft',
    },
  },
})
