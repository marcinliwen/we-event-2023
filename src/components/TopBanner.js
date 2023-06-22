import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const TopBanner = () => {
  return (
    <div className="container my-auto">
      <StaticImage
        src="../img/home-banner-2023.png"
        placeholder="none"
        alt="conference"
      />
    </div>
  );
};
export default TopBanner;
