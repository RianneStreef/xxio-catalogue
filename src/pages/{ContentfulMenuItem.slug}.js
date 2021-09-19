import React from "react";
import { graphql } from "gatsby";

import ballMatrix from "../images/Golf-Ball-MATRIX-v3.jpg";

import Layout from "../components/Layout";

import "../styles/categories.css";

const CategoryPage = (props) => {
  console.log(props.params);

  let categories = props.data.allContentfulMenuItem.nodes;
  let products = props.data.allContentfulProduct.nodes;
  let slug = props.params.slug;

  console.log("slug");
  console.log(slug);

  console.log("category");
  console.log(props.data.allContentfulMenuItem.nodes[0].category);

  const categoryInfo = categories
    .filter((category) => category.category === slug)
    .map((category) => {
      return (
        <div key={category.id}>
          <img
            src={category.categoryImage.file.url}
            alt={category.categoryImageAlt}
          />
          <h2>{category.categoryTitle}</h2>
          <h3>{category.categoryUnderTitle}</h3>
          <p>{category.categoryIntroText.categoryIntroText}</p>
        </div>
      );
    });

  const productList = products
    .filter((product) => product.productCategory === slug)
    .map((product) => {
      return (
        <div key={product.id} className="product-listing">
          <img
            className="product-list-image"
            src={product.productImage.file.url}
            alt={product.productImageAlt}
          />
          <h4 className="product-list-title">{product.productName}</h4>
          {product.new ? <p className="new">new!</p> : null}

          {productList}
        </div>
      );
    });

  return (
    <>
      <div></div>
      <div>{categoryInfo}</div>
      <div className="product-list">
        {slug === "balls" ? (
          <div className="product-listing">
            <img
              className="product-list-image"
              src={ballMatrix}
              alt="Srixon Golf Ball Matrix"
            />
            <h4 className="product-list-title">Srixon Golf Ball Matrix</h4>
          </div>
        ) : null}

        {productList}
      </div>
    </>
  );
};

export const categoryQuery = graphql`
  query categoryQuery {
    allContentfulMenuItem {
      nodes {
        id
        slug
        category
        categoryImageAlt
        categoryTitle
        categoryImage {
          file {
            url
          }
        }
        categoryUnderTitle
        categoryIntroText {
          categoryIntroText
        }
      }
    }

    allContentfulProduct {
      nodes {
        id
        new
        productCategory
        productName
        categorySlug
        productImage {
          file {
            url
          }
        }
      }
    }
  }
`;

CategoryPage.Layout = Layout;
export default CategoryPage;
