import React from "react";
import { graphql, Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import "../styles/index.css";

const indexPage = (props) => {
  // let categories = props.data.allContentfulMenuItem.nodes;
  // console.log(props.data.allContentfulMenuItem.nodes.slug);
  // const categoriesList = categories.map((category) => {
  //   return (
  //     <Link to={category.slug} key={category.nodes.id}>
  //       <h2>{category.nodes.categoryTitle}</h2>
  //       <img
  //         src={category.nodes.categoryImage.file.url}
  //         alt={category.node.categoryImageAlt}
  //       />
  //     </Link>
  //   );
  // });
  // return (
  //   <div className="categories-page">
  //     <StaticImage src="../images/logo.jpg" alt="Srixon Logo" />
  //     <div className="categories-list">{categoriesList}</div>
  //   </div>
  // );

  <div>Hello</div>;
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
