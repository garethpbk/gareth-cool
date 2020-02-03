module.exports = {
  siteMetadata: {
    title: `garethbk`,
    description: `Here's my cool website!`,
    author: `@garethpbk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gareth-cool-website`,
        short_name: `gareth-cool`,
        start_url: `/`,
        background_color: `#0E6BA8`,
        theme_color: `#0E6BA8`,
        display: `minimal-ui`,
        icon: `static/assets/cottingly.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
