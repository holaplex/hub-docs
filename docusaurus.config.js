// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const graphqlMarkdownConfig = require("./graphql-markdown.config");

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Holaplex Hub",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.holaplex.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Holaplex", // Usually your GitHub org/user name.
  projectName: "Hub", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [["@graphql-markdown/docusaurus", graphqlMarkdownConfig]],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false,

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: "img/holaplex-cover.png",
      navbar: {
        title: "Holaplex Hub",
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg'
        // },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs'
          // },
          {
            to: "/api",
            label: "API Reference",
            position: "left",
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: "https://github.com/holaplex",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          //  {
          //    title: "Docs",
          //    items: [
          //      {
          //        label: "Tutorial",
          //        to: "/docs/intro",
          //      },
          //    ],
          //  },
          {
            title: "Community",
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus'
              // },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/holaplex",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/holaplex",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog'
              // },
              {
                label: "GitHub",
                href: "https://github.com/holaplex",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Holaplex.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
