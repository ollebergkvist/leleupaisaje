require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://leleupaisaje.com',
    title: 'Leleu Paisaje',
    description: 'Sustainable landscape architect',
    image:
      'https://gersom.nl/static/c6a7c58c9414fedce81adbc1072da3e2/1b4be/twitter-og-image.jpg',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      __key: 'images',
    },
  ],
};
