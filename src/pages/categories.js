import React, { useEffect } from "react";
import { graphql, Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";
import headerDemoDay from "../images/Header-Demoday.jpeg";
import download from "../images/icon-download-v2.png";

import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

import "../styles/index.css";

const CategoriesPage = (props) => {
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      console.log("script running");

      let deferredPrompt;
      const addBtn = document.querySelector(".add-button");
      const saveMsg = document.getElementById("save-message");
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      addBtn.style.display = "flex";

      addBtn.addEventListener("click", (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = "none";
        saveMsg.style.display = "none";

        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
          } else {
            console.log("User dismissed the A2HS prompt");
          }
          deferredPrompt = null;
        });
      });

      if (addBtn.style.display == "flex") {
        saveMsg.style.display = "none";
      }
    });
  });

  let categories = props.data.allContentfulMenuItem.nodes;

  const categoriesList = categories.map((category) => {
    return (
      <Link
        to={category.slug}
        key={category.id}
        className="category-list-link"
        style={{
          backgroundImage: `url(${category.categoryImage.file.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h2 className="category-list-title">{category.categoryTitle}</h2>
      </Link>
    );
  });

  return (
    <>
      <div className="categories-page">
        <Helmet>
          <title>Srixon EU & UK Catalogue</title>
        </Helmet>
        <StaticImage
          src="../images/logo.jpg"
          alt="Srixon Logo"
          className="header-logo"
        />
        <div className="categories-list">
          {categoriesList}
          <Link
            to="/demo-day"
            className="category-list-link"
            style={{
              backgroundImage: `url(${headerDemoDay})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h2 className="category-list-title">Demo Day</h2>
          </Link>
        </div>
      </div>
      <div className="download">
        <p className="save-message" id="save-message">
          <i>Don't forget to save the Srixon EU Catalogue on you home screen</i>
        </p>

        <div className="add-button" id="add-button">
          <img src={download} alt="add app to home screen" />
        </div>
      </div>
      <p className="copyright">
        ©️ 2021 Sumitomo Rubber Industries, Ltd. ALL RIGHTS Reserved.
      </p>
    </>
  );
};

export const categoriesQuery = graphql`
  query categoriesQuery {
    allContentfulMenuItem(sort: { fields: index }) {
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
      }
    }
  }
`;

CategoriesPage.Layout = Layout;
export default CategoriesPage;
