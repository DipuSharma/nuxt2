export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  css: ["@/assets/css/tailwind.css"],
  buildModules: ["@nuxt/postcss8"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  head: {
    title: "nuxt2",
    htmlAttrs: {
      lang: "en",
    },
    // script: [
    //   {
    //     src: "https://www.google.com/recaptcha/api.js?render=6LfTpaQqAAAAAHo7ax_C_K4OkIopH75t2IsQNtgY",
    //     async: true,
    //     defer: true,
    //   },
    // ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  plugins: ["~/plugins/disableBackButton.client.js"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  env: {
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
  },
  // plugins: [{ src: "~/plugins/recaptcha.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
};
