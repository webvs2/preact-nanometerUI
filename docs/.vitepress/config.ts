import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "Docs", link: "/docs/index" },
      { text: "Components", link: "/components/index" },
    ],

    //     sidebar: [
    // '/Docs/':{

    // },

    //       {
    //         text: 'Examples',
    //         items: [
    //           { text: 'Markdown Examples', link: '/markdown-examples' },
    //           { text: 'Runtime API Examples', link: '/api-examples' }
    //         ]
    //       }
    //     ],
    sidebar: {
      "/": [
        { text: "Markdown Examples", link: "/markdown-examples" },
        { text: "Runtime API Examples", link: "/api-examples" },
      ],

      "/docs/": [
        {
          text: "Docs",
          items: [
            {
              text: "botton",
              link: "/docs/button",
            },
          ],
        },
      ],
      "/components/": [
        {
          // text: "Components",
          items: [
            {
              text: "botton",
              link: "/components/button",
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/webvs2/preact-nanometerUI" },
    ],
  },
});
