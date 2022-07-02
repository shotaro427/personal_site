import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `personal-site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'GSP-uFuBq36DpnIcOcCaKHzw4RhYHNDAYatyhZOUKgs',
        spaceId: 'q04gcsm3bfo0',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    // {
    //   resolve: 'gatsby-plugin-prettier-eslint',
    //   options: {
    //     prettier: {
    //       patterns: [
    //         // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
    //         '**/*.{css,scss,less}',
    //         '**/*.{json,json5}',
    //         '**/*.{graphql}',
    //         '**/*.{md,mdx}',
    //         '**/*.{html}',
    //         '**/*.{yaml,yml}',
    //       ],
    //     },
    //     eslint: {
    //       patterns: '**/*.{js,jsx,ts,tsx}',
    //       customOptions: {
    //         fix: true,
    //         cache: true,
    //       },
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          src: 'src',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
    },
  ],
}

export default config
