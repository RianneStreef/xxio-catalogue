import React, { useEffect } from "react";

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

export default IndexPage;
