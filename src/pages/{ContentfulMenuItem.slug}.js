import React from "react";
import { Link, graphql } from "gatsby";
import home from "../images/home.png";
import back from "../images/back.png";

import Layout from "../components/Layout";
import "../styles/categories.css";

const CategoryPage = (props) => {
  let categories = props.data.allContentfulMenuItem.nodes;
  let accessoiresSubs = props.data.allContentfulAccessoiresSubCategory.nodes;
  let products = props.data.allContentfulProduct.nodes;
  let slug = props.params.slug;

  console.log("accessoiresSubs");
  console.log(accessoiresSubs);
  console.log(slug);

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

  const accessoiresSubsList = accessoiresSubs.map((accessoiresSub) => {
    return (
      <Link to={accessoiresSub.slug} key={accessoiresSub.id}>
        <div
          className="accessoires-sub"
          style={{
            backgroundImage: `url(${accessoiresSub.categoryImage.file.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2 className="category-list-title">
            {accessoiresSub.categoryTitle}
          </h2>
        </div>
      </Link>
    );
  });

  const productList = products
    .filter((product) => product.categorySlug === slug)
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
        <a href="javascript:history.back()" className="nav-link">
          <img src={back} className="nav-icon-back" />
        </a>
        <div> {categoryTitle}</div>
        <Link to="/categories" className="nav-link">
          <img src={home} className="nav-icon-home" />{" "}
        </Link>
      </div>

      {slug === "accessories" ? (
        <>
          <div>{accessoiresSubsList}</div>
        </>
      ) : (
        <>
          <div>{categoryInfo}</div>
          <div className="padding">
            <div className="product-list">{productList}</div>
          </div>
        </>
      )}
    </>
  );
};

export const categoryQuery = graphql`
  query categoryQuery {
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

        categoryIntroText {
          categoryIntroText
        }
      }
    }

    allContentfulAccessoiresSubCategory(sort: { fields: index }) {
      nodes {
        id
        category
        categoryImage {
          file {
            url
          }
        }
        categoryImageAlt
        categoryTitle
        slug
        index
      }
    }

    allContentfulProduct(sort: { fields: index }) {
      nodes {
        id
        index
        new
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
