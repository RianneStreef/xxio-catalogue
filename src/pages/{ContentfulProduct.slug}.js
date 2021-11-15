import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

import { Slide } from "react-slideshow-image";

import "../styles/product.css";
import "react-slideshow-image/dist/styles.css";

import home from "../images/home.png";
import back from "../images/back.png";

const ProductPage = (props) => {
  let products = props.data.allContentfulProduct.nodes;
  let slug = props.params.slug;

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
                        height: "20vh",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <h2>{product.productName}</h2>
          {product.productUndertitle && <h3>{product.productUndertitle}</h3>}
          {product.productIntro && <p>{product.productIntro.productIntro}</p>}
          {product.techTitle1 && (
            <div className="tech-description">
              <h4>Technology</h4>
              {product.techImg1 && (
                <img src={product.techImg1.file.url} className="tech-img" />
              )}
              <h5>{product.techTitle1}</h5>
              <p>{product.techDescription1.techDescription1}</p>
            </div>
          )}
          {product.techTitle2 && (
            <div className="tech-description">
              {product.techImg2 && (
                <img src={product.techImg2.file.url} className="tech-img" />
              )}
              <h5>{product.techTitle2}</h5>
              <p>{product.techDescription2.techDescription2}</p>
            </div>
          )}
          {product.techTitle3 && (
            <div className="tech-description">
              {product.techImg3 && (
                <img src={product.techImg3.file.url} className="tech-img" />
              )}
              <h5>{product.techTitle3}</h5>
              <p>{product.techDescription3.techDescription3}</p>
            </div>
          )}
          {product.techTitle4 && (
            <div className="tech-description">
              {product.techImg4 && (
                <img src={product.techImg4.file.url} className="tech-img" />
              )}
              <h5>{product.techTitle4}</h5>
              <p>{product.techDescription4.techDescription4}</p>
            </div>
          )}
          {product.techTitle5 && (
            <div className="tech-description">
              {product.techImg5 && (
                <img src={product.techImg5.file.url} className="tech-img" />
              )}
              <h5>{product.techTitle5}</h5>
              <p>{product.techDescription5.techDescription5}</p>
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
              {product.price1title == null ? (
                <h4>{`Srixon ${product.productName} price`}</h4>
              ) : (
                <h4>{`Srixon ${product.price1title} price`}</h4>
              )}

              <p>
                {product.euro.toFixed(2)} &euro; / {product.swiss.toFixed(2)}{" "}
                CHF / {product.kroner.toFixed(2)} SEK /{" "}
                {product.pound.toFixed(2)} &#163;
              </p>
            </>
          )}
          {product.euro2 && (
            <>
              {product.price2title == null ? (
                <h4>{`Srixon ${product.productName} price`}</h4>
              ) : (
                <h4>{`Srixon ${product.price2title} price`}</h4>
              )}

              <p>
                {product.euro2.toFixed(2)} &euro; / {product.swiss2.toFixed(2)}{" "}
                CHF / {product.kroner2.toFixed(2)} SEK /{" "}
                {product.pound2.toFixed(2)} &#163;
              </p>
            </>
          )}
          {product.euro3 && (
            <>
              {product.price3title == null ? (
                <h4>{`Srixon ${product.productName} price`}</h4>
              ) : (
                <h4>{`Srixon ${product.price3title} price`}</h4>
              )}

              <p>
                {product.euro3.toFixed(2)} &euro; / {product.swiss3.toFixed(2)}{" "}
                CHF / {product.kroner3.toFixed(2)} SEK /{" "}
                {product.pound3.toFixed(2)} &#163;
              </p>
            </>
          )}
          {product.euro4 && (
            <>
              {product.price4title == null ? (
                <h4>{`Srixon ${product.productName} price`}</h4>
              ) : (
                <h4>{`Srixon ${product.price4title} price`}</h4>
              )}

              <p>
                {product.euro4.toFixed(2)} &euro; / {product.swiss4.toFixed(2)}{" "}
                CHF / {product.kroner4.toFixed(2)} SEK /{" "}
                {product.pound4.toFixed(2)} &#163;
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
    allContentfulProduct(sort: { fields: index }) {
      nodes {
        productName
        productIntro {
          productIntro
        }
        availableWhen
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
        techDescription1 {
          techDescription1
        }
        techDescription2 {
          techDescription2
        }
        techDescription3 {
          techDescription3
        }
        techDescription4 {
          techDescription4
        }
        techDescription5 {
          techDescription5
        }
        techDescription6 {
          techDescription6
        }
        techImg1 {
          file {
            url
          }
        }
        techImg2 {
          file {
            url
          }
        }
        techImg3 {
          file {
            url
          }
        }
        techImg4 {
          file {
            url
          }
        }
        techImg5 {
          file {
            url
          }
        }
        techTitle1
        techTitle2
        techTitle3
        techTitle4
        techTitle5
        techTitle6
      }
    }
  }
`;

ProductPage.Layout = Layout;
export default ProductPage;
