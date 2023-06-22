import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";
import Bannerslider from "./Bannerslider";
/* import "./all.sass"; */
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import CookieConsent from "react-cookie-consent";

const TemplateWrapper = ({ children }) => {
  const [cookie, setCookie] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setCookie(true);
    }, 500);
  });
  //console.log(pageName)

  return (
    <div className="h-full grid grid-rows-layout">
      <Navbar />
      <main>{children}</main>
      <Sponsors />
      {/* <Bannerslider /> */}
      <Footer />
      <CookieConsent
        disableStyles={true}
        location="none"
        containerClasses={` ${
          cookie ? "bottom-8" : "bottom-[-100%]"
        } z-1000 ease-in-out duration-300 delay-500 fixed bottom-4 left-4 right-4  md:w-[450px] md:left-8 md:right-auto bg-white text-blue p-5 flex flex-col items-end shadow-xl`}
        buttonClasses="bg-blue text-white py-2 px-6  ml-auto mt-8"
      >
        This website uses cookies to enhance the user experience. Check{" "}
        <a
          href="/private-policy-we.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-pink"
        >
          PRIVACY POLICY
        </a>
      </CookieConsent>
    </div>
  );
};

export default TemplateWrapper;
