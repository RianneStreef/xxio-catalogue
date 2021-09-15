import React from "react";
import { graphql, Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import "../styles/index.css";

const indexPage = (props) => {
  let categories = props.data.allContentfulMenuItem.nodes;

  console.log(props.data.allContentfulMenuItem.nodes);

  const categoriesList = categories.map((category) => {
    return (
      <Link to={category.slug} key={category.id}>
        <h2>{category.categoryTitle}</h2>
        <img
          src={category.categoryImage.file.url}
          alt={category.categoryImageAlt}
        />
      </Link>
    );
  });

  return (
    <div className="categories-page">
      <StaticImage src="../images/logo.jpg" alt="Srixon Logo" />
      <div className="categories-list">{categoriesList}</div>
    </div>
  );
};

export const categoriesQuery = graphql`
  query MyQuery {
    allContentfulMenuItem {
      nodes {
        slug
        categoryImage {
          file {
            url
          }
        }
        categoryImageAlt
        categoryTitle
        id
      }
    }
  }
`;

export default indexPage;
