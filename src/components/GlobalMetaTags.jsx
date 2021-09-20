import React, { memo } from "react";
import Helmet from "react-helmet";

/* This should load on every page so that no matter on which page the user lands,
 * we fetch the manifest.json file
 */
export const GlobalMetaTags = memo(() => (
  <Helmet>
    <link rel="manifest" href="/manifest.webmanifest.json" />
    <meta name="theme-color" content="#e30613" />
  </Helmet>
));

GlobalMetaTags.displayName = "GlobalMetaTags";
