export default {
  mode: "universal",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  loading: { color: "black" },

  css: [],

  plugins: [],

  buildModules: [],

  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios", "@nuxtjs/apollo"],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "http://localhost:4000/" //link to your graphql backend.
      }
    }
  },
  axios: {},

  build: {
    extend(config, ctx) {}
  }
};
