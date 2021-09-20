import React from "react";
import { Helmet } from "react-helmet";

import "../styles/global.css";

const Layout = ({ children }) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      // props to drill
    })
  );
  return (
    <div className="layout">
      <Helmet>
        <title>Srixon EU & UK Catalogue</title>
        <link rel="manifest" href="../../manifest.webmanifest.json" />{" "}
      </Helmet>
      <section className="content">{childrenWithProps}</section>
    </div>
  );
};

export default Layout;
