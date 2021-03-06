export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Slipstream',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'msapplication-TileColor', content: '#da532c'},
      {name: 'theme-color', content: '#ffffff'}
    ],
    link: [
      {rel: 'icon', type: 'image/png', sizes: "32x32", href: '/assets/img/favicon/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: "16x16", href: '/assets/img/favicon/favicon-16x16.png'},
      {rel: 'manifest', type: 'image/png', sizes: "16x16", href: '/assets/img/favicon/site.webmanifest'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/img/favicon/apple-touch-icon.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/img/favicon/apple-touch-icon.png'},
      {rel: 'mask-icon', color: '#5bbad5', href: '/assets/img/favicon/safari-pinned-tab.svg'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  }
}
