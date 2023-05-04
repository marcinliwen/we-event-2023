import React from "react";
import { useSiteMetadata } from "../hooks/SiteMetadata";
import { withPrefix } from "gatsby";

export const SEO = ({ pageName, location }) => {
  const { title, description } = useSiteMetadata();
  const descriptionPage = pageName
    ? pageName + " - " + description
    : description;

  return (
    <>
      <html lang="en" />
      <title>{location === "/" ? title : pageName}</title>
      <meta name="description" content={descriptionPage} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${withPrefix("/")}img/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix("/")}img/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix("/")}img/favicon-16x16.png`}
        sizes="16x16"
      />

      <link
        rel="mask-icon"
        href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
        color="#ff4400"
      />
      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="/" />
      <meta
        property="og:image"
        content={`${withPrefix("/")}img/og-image.png`}
      />
      {location === "/" ? (
        <meta
          name="google-site-verification"
          content="N-z9nPeiyyPvUuS2J22ueYkq4ZhGGOTEBHjNGWQWxtk"
        />
      ) : (
        ""
      )}
      {location === "/contact/thanks" ? (
        <meta name="robots" content="noindex" />
      ) : (
        ""
      )}
    </>
  );
};
