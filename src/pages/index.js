import React from "react";
import { graphql, Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";
import headerDemoDay from "../images/Header-Demoday.jpeg";

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
    <div className="categories-page">
      <StaticImage src="../images/logo.jpg" alt="Srixon Logo" />
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

export default IndexPage;
