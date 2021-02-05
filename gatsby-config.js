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
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: "/me",
        background_color: "#fffff",
        display: "standalone",
        icon: "src/img/favicon-32x32.png", // This path is relative to the root of the site.
        icons: [
          {
            src: `src/img/mstile-150x150.png`,
            sizes: `150x150`,
            type: `image/png`,
          },
          {
            src: `src/img/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/img/android-chrome-384x384`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ], // Add or remove icon sizes as desired
      }
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
