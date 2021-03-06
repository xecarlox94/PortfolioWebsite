const active_env =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${active_env}`,
})

module.exports = {
  siteMetadata: {
    title: `Jose Fernandes`,
    description: `Jose Fernandes portfolio website.`,
    author: `Jose Fernandes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/res/icons/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/components/utils/typography`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
