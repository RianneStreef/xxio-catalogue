import React from "react";
import { Link, graphql } from "gatsby";
import home from "../images/home.png";
import back from "../images/back.png";

import ballMatrix from "../images/Golf-Ball-MATRIX-v3.jpg";

import Layout from "../components/Layout";

import "../styles/categories.css";

const CategoryPage = (props) => {
  console.log(props);

  let categories = props.data.allContentfulMenuItem.nodes;
  let products = props.data.allContentfulProduct.nodes;
  let slug = props.params.slug;

  const categoryTitle = categories
    .filter((category) => category.category === slug)
    .map((category) => {
      return (
        <div key={category.id}>
          <h1>{category.categoryTitle}</h1>
        </div>
      );
    });

  const categoryInfo = categories
    .filter((category) => category.category === slug)
    .map((category) => {
      return (
        <div key={category.id}>
          <img
            className="category-info-image"
            src={category.categoryImage.file.url}
            alt={category.categoryImageAlt}
          />
          <div className="padding">
            {category.categoryUnderTitle ? (
              <h2>{category.categoryUnderTitle}</h2>
            ) : null}
            {category.categoryIntroText ? (
              <p className="category-intro-text">
                {category.categoryIntroText.categoryIntroText}
              </p>
            ) : null}
          </div>
        </div>
      );
    });

  const productList = products
    .filter((product) => product.productCategory === slug)
    .map((product) => {
      return (
        <Link to={product.slug} key={product.id} className="product-listing">
          <img
            className="product-list-image"
            src={product.productImage.file.url}
            alt={product.productImageAlt}
          />

          <p className="product-list-title">{product.productName}</p>
          {product.new ? <p className="new">new!</p> : null}
        </Link>
      );
    });

  return (
    <>
      <div className="category-title">
        <Link to="/" className="nav-link">
          <img src={back} className="nav-icon-back" />
        </Link>
        <div> {categoryTitle}</div>
        <Link to="/" className="nav-link">
          <img src={home} className="nav-icon-home" />{" "}
        </Link>
      </div>

      <div>{categoryInfo}</div>
      <div className="padding">
        <div className="product-list">
          {slug === "balls" ? (
            <div className="product-listing">
              <img
                className="product-list-image"
                src={ballMatrix}
                alt="Srixon Golf Ball Matrix"
              />
              <p className="product-list-title">Srixon Golf Ball Matrix</p>
            </div>
          ) : null}

          {productList}
        </div>
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

    allContentfulProduct(sort: { fields: index }) {
      nodes {
        id
        index
        new
        productCategory
        productName
        slug
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
