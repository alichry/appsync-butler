// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

function injectTypeDocSidebar(items) {
  return items.map((item) => {
    if (item.link?.id === 'api/index') {
      return {
        ...item,
        items: require('./docs/api/typedoc-sidebar.cjs'),
      };
    }
    return item;
  });
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AppSync Butler',
  tagline: 'Focus on writing resolvers with ease.',
  url: 'https://alichry.github.io',
  baseUrl: '/appsync-butler/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  //favicon: 'img/favicon.ico',
  organizationName: 'alichry', // Usually your GitHub org/user name.
  projectName: 'appsync-butler', // Usually your repo name.
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        entryPoints: [
          '../packages/core',
          '../packages/sst',
        ],
        entryPointStrategy: 'packages',
        packageOptions: {
          entryPoints: ["lib/index.ts"],
          readme: "none",
        },
        //tsconfig: '../packages/core/tsconfig.json',
        //watch: process.env.TYPEDOC_WATCH,
        sidebar: {
          fullNames: false
        }
      },
    ],
    // [
    //   'docusaurus-plugin-typedoc',
    //   // Plugin / TypeDoc options
    //   {
    //     id: 'core',
    //     entryPoints: [
    //       '../packages/core/lib/index.ts',
    //     ],
    //     tsconfig: '../packages/core/tsconfig.json',
    //     out: 'core-api',
    //     watch: process.env.TYPEDOC_WATCH,
    //     sidebar: {
    //       categoryLabel: '@appsync-butler/core'
    //     }
    //   },
    // ],
    // [
    //   'docusaurus-plugin-typedoc',
    //   // Plugin / TypeDoc options
    //   {
    //     id: 'sst',
    //     entryPoints: [
    //       '../packages/sst/lib/index.ts',
    //     ],
    //     tsconfig: '../packages/sst/tsconfig.json',
    //     out: 'sst-api',
    //     watch: process.env.TYPEDOC_WATCH,
    //     sidebar: {
    //       categoryLabel: '@appsync-butler/sst'
    //     }
    //   },
    // ]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          //sidebarPath: require.resolve('./sidebars.js'),
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            return injectTypeDocSidebar(
              await defaultSidebarItemsGenerator(args),
            );
          },
          editUrl: 'https://github.com/alichry/appsync-butler/edit/master/website/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AppSync Butler',
        //logo: {
          //alt: 'AppSync Butler',
          //src: 'img/butler2.svg',
        //},
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/alichry/appsync-butler',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Quick start',
                to: '/docs/getting-started/installation',
              },
              {
                label: 'API',
                to: '/docs/api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/appsync-butler',
              },
              {
                label: 'Gitter',
                href: 'https://gitter.im/appsync-butler/community',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/alichry',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/alichry/appsync-butler',
          //     },
          //   ],
          // },
        ],
        //copyright: ` `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
