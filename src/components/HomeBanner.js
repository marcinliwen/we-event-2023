import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function HomeBanner(props) {
    const {
      img
    } = props;
  
    return (
      <React.Fragment>
          <div className="container my-auto">
          {img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
           
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        </div>
    </React.Fragment>
  );
}

HomeBanner.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};