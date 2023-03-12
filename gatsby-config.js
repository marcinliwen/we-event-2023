/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Watercooler Europe",
    description:
      "Watercooler Europe - Conference and Fair, 25-27 October 2023, Vienna, Austria.",
    siteUrl: "https://we-event.eu",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/img/logo.png",
        name: "Watercoolers Europ - Conference & Trade Fair",
        short_name: "Watercoolers Europ",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#006aac",
        display: "standalone",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },

    `gatsby-transformer-remark`,
    "gatsby-plugin-netlify",
  ],
};
