import React from "react";
import { Link, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faHome } from "@fortawesome/free-solid-svg-icons";

import ballMatrix from "../images/Golf-Ball-MATRIX-v3.jpg";

import Layout from "../components/Layout";

import "../styles/categories.css";

const CategoryPage = (props) => {
  console.log(props.params);

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
          {/* <div className="padding">
            {category.categoryUnderTitle ? (
              <h2>{category.categoryUnderTitle}</h2>
            ) : null}
            {category.categoryIntroText ? (
              <p className="category-intro-text">
                {category.categoryIntroText}
              </p>
            ) : null}
          </div> */}
        </div>
      );
    });

  const productList = products
    .filter((product) => product.productCategory === slug)
    .map((product) => {
      return (
        <Link
          to={`/${product.productName}`}
          key={product.id}
          className="product-listing"
        >
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
        <Link to="/">
          <FontAwesomeIcon
            className="navigation"
            icon={faChevronLeft}
            size="2x"
          />
        </Link>
        <p> {categoryTitle}</p>
        <Link to="/">
          <FontAwesomeIcon className="navigation" icon={faHome} size="2x" />
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
