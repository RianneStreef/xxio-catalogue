import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faHome } from "@fortawesome/free-solid-svg-icons";

const ProductPage = (props) => {
  console.log(props);

  let products = props.data.allContentfulProduct.nodes;
  let slug = props.params.slug;

  const productTitle = products
    .filter((product) => product.slug === `/${slug}`)
    .map((product) => {
      return (
        <div key={product.id}>
          <h1>{product.productName}</h1>
        </div>
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
        <div> {productTitle}</div>
        <Link to="/">
          <FontAwesomeIcon className="navigation" icon={faHome} size="2x" />
        </Link>
      </div>

      <div className="padding">
        <p>product info</p>
      </div>
    </>
  );
};

export const productQuery = graphql`
  query productQuery {
    allContentfulProduct {
      nodes {
        slug
        id
        productCategory
        productImage {
          file {
            url
          }
        }
        productName
        new
      }
    }
  }
`;

ProductPage.Layout = Layout;
export default ProductPage;
