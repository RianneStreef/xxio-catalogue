import React from "react";
import { Link, graphql } from "gatsby";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";

import { Slide } from "react-slideshow-image";

import "../styles/product.css";
import "react-slideshow-image/dist/styles.css";

import home from "../images/home.png";
import back from "../images/back.png";

const ProductPage = (props) => {
  let products = props.data.allContentfulProduct.nodes;
  let slug = props.params.slug;

  console.log(products);

  const productTitle = products
    .filter((product) => product.slug === `/${slug}`)
    .map((product) => {
      return (
        <div key={product.id}>
          <h1 className="product-title">{product.productName}</h1>
        </div>
      );
    });

  const productInfo = products
    .filter((product) => product.slug === `/${slug}`)
    .map((product) => {
      function currencyFormat(price) {
        console.log("formatting currency");
        return price
          .toFixed(2)
          .replace(".", ",")
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }
      const slideImages = product.headerImgs.map((headerImg) => {
        return { url: headerImg.file.url };
      });

      return (
        <div key={product.id}>
          <div className="slide-container">
            {slideImages.length > 1 ? (
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
            ) : (
              <div>
                {slideImages.map((slideImage, index) => (
                  <div className="each-slide" key={index}>
                    <div
                      style={{
                        backgroundImage: `url(${slideImage.url})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        height: "30vh",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* <h2>{product.productName}</h2> */}
          {product.productUndertitle && <h3>{product.productUndertitle}</h3>}
          {product.productIntro && (
            <ReactMarkdown className="product-intro">
              {product.productIntro.productIntro}
            </ReactMarkdown>
          )}
          {product.techTitle1 && (
            <div className="tech-description">
              <h3>Technology</h3>
              {product.techImg1 && (
                <img src={product.techImg1.file.url} className="tech-img" />
              )}
              <h5>{product.techTitle1}</h5>
              <p>{product.techText1.techText1}</p>
            </div>
          )}

          {product.specs && (
            <div>
              <h3>{`XXIO ${product.productName} specs`}</h3>
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
              {product.price1title == null ? (
                <h3>{`XXIO ${product.productName} price`}</h3>
              ) : (
                <h3>{`XXIO ${product.price1title} price`}</h3>
              )}

              <p>
                {currencyFormat(product.euro)} &euro;/{" "}
                {currencyFormat(product.swiss)} CHF /{" "}
                {currencyFormat(product.kroner)} SEK /{" "}
                {currencyFormat(product.pound)} &#163;
              </p>
            </>
          )}
          {product.euro2 && (
            <>
              {product.price2title == null ? (
                <h3>{`XXIO ${product.productName} price`}</h3>
              ) : (
                <h3>{`XXIO${product.price2title} price`}</h3>
              )}

              <p>
                {currencyFormat(product.euro2)} &euro;/{" "}
                {currencyFormat(product.swiss2)} CHF /{" "}
                {currencyFormat(product.kroner2)} SEK /{" "}
                {currencyFormat(product.pound2)} &#163;
              </p>
            </>
          )}
          {product.euro3 && (
            <>
              {product.price3title == null ? (
                <h3>{`XXIO ${product.productName} price`}</h3>
              ) : (
                <h3>{`XXIO ${product.price3title} price`}</h3>
              )}

              <p>
                {currencyFormat(product.euro3)} &euro;/{" "}
                {currencyFormat(product.swiss3)} CHF /{" "}
                {currencyFormat(product.kroner3)} SEK /{" "}
                {currencyFormat(product.pound3)} &#163;
              </p>
            </>
          )}
          {product.euro4 && (
            <>
              {product.price4title == null ? (
                <h3>{`XXIO ${product.productName} price`}</h3>
              ) : (
                <h3>{`XXIO ${product.price4title} price`}</h3>
              )}

              <p>
                {currencyFormat(product.euro4)} &euro;/{" "}
                {currencyFormat(product.swiss4)} CHF /{" "}
                {currencyFormat(product.kroner4)} SEK /{" "}
                {currencyFormat(product.pound4)} &#163;
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
        <a href="javascript:history.back()" className="nav-link">
          <img src={back} className="nav-icon-back" />
        </a>
        <div> {productTitle}</div>
        <Link to="/categories" className="nav-link">
          <img src={home} className="nav-icon-home" />{" "}
        </Link>
      </div>

      <div className="padding">{productInfo}</div>
    </>
  );
};

export const productQuery = graphql`
  query productQuery {
    allContentfulProduct(sort: { fields: index }) {
      nodes {
        productName
        productIntro {
          productIntro
        }
        new
        categorySlug
        colors
        euro
        euro2
        euro3
        euro4
        headerImgs {
          file {
            url
          }
        }
        id
        index
        kroner
        kroner2
        kroner3
        kroner4
        new
        pound
        pound2
        pound3
        pound4
        price1title
        price2title
        price3title
        price4title
        productImage {
          file {
            url
          }
        }
        productUndertitle
        slug
        specs {
          file {
            url
          }
        }
        swiss
        swiss2
        swiss3
        swiss4

        techImg1 {
          file {
            url
          }
        }

        techText1 {
          techText1
        }
      }
    }
  }
`;

ProductPage.Layout = Layout;
export default ProductPage;
