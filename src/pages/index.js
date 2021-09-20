import React from "react";
import { graphql, Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";
import headerDemoDay from "../images/Header-Demoday.jpeg";
import download from "../images/icon-download-v2.png";

import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

import "../styles/index.css";

const IndexPage = (props) => {
  let categories = props.data.allContentfulMenuItem.nodes;

  const categoriesList = categories.map((category) => {
    return (
      <Link to={category.slug} key={category.id} className="category-list-link">
        <h2 className="category-list-title">{category.categoryTitle}</h2>
        <img
          className="category-list-image"
          src={category.categoryImage.file.url}
          alt={category.categoryImageAlt}
        />
      </Link>
    );
  });

  return (
    <>
      <div className="categories-page">
        <Helmet>
          <title>Srixon EU & UK Catalogue</title>
          <link rel="manifest" href="../../manifest.webmanifest.json" />{" "}
        </Helmet>
        <StaticImage
          src="../images/logo.jpg"
          alt="Srixon Logo"
          className="header-logo"
        />
        <div className="categories-list">
          {categoriesList}
          <Link to="/demo-day" className="category-list-link">
            <h2 className="category-list-title">Demo Day</h2>
            <img
              src={headerDemoDay}
              alt="Srixon Demo Days"
              className="category-list-image"
            />
          </Link>
        </div>
      </div>
      <div className="download">
        <p className="save-message" id="save-message">
          <i>Don't forget to save the Srixon EU Catalogue on you home screen</i>
        </p>

        <div className="add-button" id="add-button">
          <img src={download} alt="add app to home screen" />
        </div>
      </div>
      <p className="copyright">
        ©️ 2021 Sumitomo Rubber Industries, Ltd. ALL RIGHTS Reserved.
      </p>
    </>
  );
};

export const categoriesQuery = graphql`
  query categoriesQuery {
    allContentfulMenuItem {
      nodes {
        id
        slug
        categoryImageAlt
        categoryTitle
        categoryImage {
          file {
            url
          }
        }
      }
    }
  }
`;

IndexPage.Layout = Layout;
export default IndexPage;
