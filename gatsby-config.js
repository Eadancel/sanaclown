module.exports = {
  siteMetadata: {
    title: 'Sanaclown. Payasos de Hospital',
  },
  plugins: [{
              resolve: `gatsby-plugin-typography`,
              options: {
                pathToConfigModule: `src/utils/typography.js`,
              },
            },

            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `img`,
                path: `${__dirname}/src/res/`,
              }
            },
            'gatsby-plugin-sharp',
            'gatsby-transformer-sharp',
            'gatsby-plugin-react-helmet',
            'gatsby-plugin-styled-components',
],

};
