import React from "react";
import { GlobalMetaTags } from "./GlobalMetaTags";

import "../styles/global.css";

const Layout = ({ children }) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      // props to drill
    })
  );
  return (
    <div className="layout">
      <GlobalMetaTags />
      <section className="content">{childrenWithProps}</section>
    </div>
  );
};

export default Layout;
