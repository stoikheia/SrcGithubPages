// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "stoikheia's website",
  tagline: "stoikheia is a developer in japan",
  url: "https://stoikheia.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "stoikheia", // Usually your GitHub org/user name.
  projectName: "stoikheia.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        label: 'English',
      },
      jp: {
        label: '日本語',
      },
    },
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').PluginOptions} */
      ({
        id: 'tools',
        path: 'tools',
        routeBasePath: 'tools',
        sidebarPath: require.resolve('./sidebarTools.js'),
      })
    ]
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebarDocs.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      //announcementBar: {
      //  id: 'notice',
      //  content:
      //    'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //  backgroundColor: '#FD6CFB',
      //  textColor: '#091E42',
      //  isCloseable: false,
      //},
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: "Stoikheia's Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          //{
          //  type: "doc",
          //  docId: "intro",
          //  position: "left",
          //  label: "Tutorial",
          //},
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/tools/list", label: "Tools", position: "left" },
          { type: 'localeDropdown', position: 'right' },
          {
            href: "https://github.com/stoikheia",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/3xv",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
