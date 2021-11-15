require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "srixon-catalogue",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Srixon EU & Uk Catalogue",
        short_name: "Srixon",
        start_url: "/",
        background_color: "#e30613",
        theme_color: "#3367D6",
        display: "fullscreen",
        // orientation: `portrait`,
        icon: "./src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ["/*"],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_TOKEN,
        spaceId: process.env.GATSBY_CONTENTFUL_ID,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",

    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.jsx`),
      },
    },
  ],
};
