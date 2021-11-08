import React, { useEffect } from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  useEffect(() => {
    setTimeout(function () {
      window.location.href = "./categories";
    }, 1000);
  });
  return (
    <div className="loading-page">
      <div class="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
