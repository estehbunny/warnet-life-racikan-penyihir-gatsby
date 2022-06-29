module.exports = {
  siteMetadata: {
    title: `Warnet Life - Racikan Penyihir`,
    siteUrl: `https://estehbunny.github.io/warnet-life-racikan-penyihir-gatsby`
  },
  pathPrefix: '/warnet-life-racikan-penyihir-gatsby',
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Warnet Life - Racikan Penyihir`,
        short_name: `Warnet Life - Racikan Penyihir`,
        start_url: `/`,
        background_color: `#4c3957`,
        theme_color: `#50485b`,
        display: `standalone`,
        icon: `src/favicons/favicon.png`,
        icons: [
          {
            src: `src/favicons/favicon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/favicons/favicon-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ]
      }
    },
    'gatsby-plugin-offline'
  ]
}
