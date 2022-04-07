require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `chicky`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_DELIVERY_API,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
  ],
}
