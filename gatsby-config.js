module.exports = {
  siteMetadata: {
    title: 'Unholy Alliances',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Unholly Alliances',
        short_name: 'starter',
        start_url: '/',
        background_color: 'black',
        theme_color: '#4d4d4d',
        display: 'minimal-ui',
        icon: 'src/images/favIcon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}