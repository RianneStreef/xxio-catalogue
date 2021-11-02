import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

import { Slide } from "react-slideshow-image";

import "../styles/product.css";
import "react-slideshow-image/dist/styles.css";

import home from "../images/home.png";
import back from "../images/back.png";

const ProductPage = (props) => {
  console.log(props);

  let products = props.data.allContentfulProduct.nodes;
  let slug = props.params.slug;

  const productTitle = products
    .filter((product) => product.slug === `/${slug}`)
    .map((product) => {
      console.log(product);
      return (
        <div key={product.id}>
          <h1 className="product-title">{product.productName}</h1>
        </div>
      );
    });

  const productInfo = products
    .filter((product) => product.slug === `/${slug}`)
    .map((product) => {
      const slideImages = product.headerImgs.map((headerImg) => {
        return { url: headerImg.file.url };
      });

      return (
        <div key={product.id}>
          <div className="slide-container">
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <div
                    style={{
                      backgroundImage: `url(${slideImage.url})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      height: "20vh",
                    }}
                  />
                </div>
              ))}
            </Slide>
          </div>
          <h2>{product.productName}</h2>
          {product.productUndertitle && <h3>{product.productUndertitle}</h3>}
          {product.productIntro && <p>{product.productIntro.productIntro}</p>}
          {product.techTitle1 && (
            <div>
              <h4>Technology</h4>
              <img src={product.techImg1.file.url} />
              <h5>{product.techTitle1}</h5>
              <p>{product.techDescription1.techDescription1}</p>
            </div>
          )}
          {product.techTitle2 && (
            <div>
              <img src={product.techImg2.file.url} />
              <h5>{product.techTitle2}</h5>
              <p>{product.techDescription2.techDescription2}</p>
            </div>
          )}
          {product.techTitle3 && (
            <div>
              <img src={product.techImg3.file.url} />
              <h5>{product.techTitle3}</h5>
              <p>{product.techDescription3.techDescription3}</p>
            </div>
          )}
          {product.specs && (
            <div>
              <h4>{`Srixon ${product.productName} specs`}</h4>
              <img src={product.specs.file.url} className="specs-img" />
            </div>
          )}
          {product.colors && (
            <div>
              <h4>Available colors</h4>
              <p>{product.colors}</p>
            </div>
          )}
          {product.euro && (
            <>
              <h4>{`Srixon ${product.productName} price`}</h4>
              <p>
                {product.euro} &euro; / {product.swiss} CHF / {product.kroner}{" "}
                SEK / {product.pound} &#163;
              </p>
            </>
          )}
          {product.availableWhen && <p>In store in {product.availableWhen}</p>}
        </div>
      );
    });

  return (
    <>
      <div className="category-title">
        <Link to="/" className="nav-link">
          <img src={back} className="nav-icon-back" />
        </Link>
        <div> {productTitle}</div>
        <Link to="/" className="nav-link">
          <img src={home} className="nav-icon-home" />{" "}
        </Link>
      </div>

      <div className="padding">{productInfo}</div>
    </>
  );
};

export const productQuery = graphql`
  query productQuery {
    allContentfulProduct {
      nodes {
        categorySlug
        id
        productCategory
        productImage {
          file {
            url
          }
        }
        productIntro {
          productIntro
        }
        productName
        productUndertitle
        slug
        techDescription1 {
          techDescription1
        }
        techTitle1
        techImg1 {
          file {
            url
          }
        }
        techDescription2 {
          techDescription2
        }
        techTitle2
        techImg2 {
          file {
            url
          }
        }
        techDescription3 {
          techDescription3
        }
        techTitle3
        techImg3 {
          file {
            url
          }
        }
        techDescription4 {
          techDescription4
        }
        techTitle4
        techImg4 {
          file {
            url
          }
        }
        new
        specs {
          file {
            url
          }
        }
        colors
        euro
        kroner
        swiss
        pound
        headerImgs {
          file {
            url
          }
        }
        availableWhen
      }
    }
  }
`;

ProductPage.Layout = Layout;
export default ProductPage;
