import React from "react";
import { graphql, Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";
import headerDemoDay from "../images/Header-Demoday.jpeg";
import download from "../images/icon-download-v2.png";

import Layout from "../components/Layout";

import "../styles/index.css";

const IndexPage = (props) => {
  console.log("script running");

  let deferredPrompt;
  const addBtn = document.getElementById("add-button");
  const saveMsg = document.getElementById("save-message");

  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = "block";

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

    if (addBtn.style.display === "block") {
      saveMsg.style.display = "none";
    }
  });

  let categories = props.data.allContentfulMenuItem.nodes;

  const categoriesList = categories.map((category) => {
    return (
      <Link to={category.slug} key={category.id} className="category-list-link">
        <h2 className="category-list-title">{category.categoryTitle}</h2>
        <img
          className="category-list-image"
          src={category.categoryImage.file.url}
          alt={category.categoryImageAlt}
        />
      </Link>
    );
  });

  return (
    <>
      <div className="categories-page">
        <StaticImage
          src="../images/logo.jpg"
          alt="Srixon Logo"
          className="header-logo"
        />
        <div className="categories-list">
          {categoriesList}
          <Link to="/demo-day" className="category-list-link">
            <h2 className="category-list-title">Demo Day</h2>
            <img
              src={headerDemoDay}
              alt="Srixon Demo Days"
              className="category-list-image"
            />
          </Link>
        </div>
      </div>
      <div class="download">
        <p class="save-message" id="save-message">
          <i>Don't forget to save the Srixon EU Catalogue on you home screen</i>
        </p>

        <div class="add-button" id="add-button">
          <img src={download} alt="add app to home screen" />
        </div>
      </div>
      <p class="copyright">
        ©️ 2021 Sumitomo Rubber Industries, Ltd. ALL RIGHTS Reserved.
      </p>
    </>
  );
};

export const categoriesQuery = graphql`
  query categoriesQuery {
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
      }
    }
  }
`;

IndexPage.Layout = Layout;
export default IndexPage;
