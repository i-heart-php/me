module.exports = {
  pathPrefix: "/me",
  siteMetadata: {
    siteTitle: `Mike Vardy | Full Stack Dev | Ontario, Canada`,
    siteTitleAlt: `Mike Vardy | Full Stack Dev | Ontario, Canada`,
    siteHeadline: `Mike Vardy | Full Stack Dev | Ontario, Canada`,
    siteUrl: `https://i-heart-php.github.io/`,
    siteDescription: `Full Stack Developer with 9+ years experience with a strong ability produce affordable high-quality, user-friendly, scalable, bug-free software all on-time and on-budget.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@i-heart-php`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
}
