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
                name: `markdown-pages`,
                path: `${__dirname}/src/res/data`,
              }
            },
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `img`,
                path: `${__dirname}/src/res/`,
              }
            },
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `blog`,
                path: `${__dirname}/blog/`,
              }
            },
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `blog`,
                path: `${__dirname}/doctores/`,
              }
            },
            {
              resolve: 'gatsby-plugin-react-svg',
              options: {
                  include: `/src/res/icons/`,
              }
            },
            'gatsby-transformer-remark',
            'gatsby-plugin-sharp',
            'gatsby-transformer-sharp',
            'gatsby-plugin-react-helmet',
            'gatsby-plugin-styled-components',
            'gatsby-plugin-netlify-cms'
],

};
