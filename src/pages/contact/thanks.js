import React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { SEO } from "../../components/Seo";
// eslint-disable-next-line
export default (props) => {
  return (
    <Layout location={props.location.pathname}>
      <section className="section">
        <div className="container">
          <div className="my-20">
            <div className="text-center mb-4">
              <StaticImage
                src="../../img/confirm.png"
                placeholder="none"
                width="150px"
                height="150px"
              />
            </div>
            <div>
              <div>
                {/*  <p class="thank-you-icon" style="text-align: center;">
                <img
                  class="notActiveTyIcon"
                  style="display: none;"
                  src="https://cdn.jotfor.ms/img/Thankyou-iconV2.png?v=0.1"
                  alt=""
                  width="153"
                  height="156"
                />
              </p> */}
                <div style={{ textAlign: "center" }}>
                  <h1 className="font-bold text-5xl mb-8">Thank you!</h1>
                  <p style={{ textAlign: "center" }}>
                    We have received your message!
                  </p>
                  <Link
                    style={{
                      display: "block",
                      width: "max-content",
                      margin: "32px auto",
                      fontSize: "24px",
                      color: "#fff",
                      background: "#9dc017",
                      padding: "16px 24px",
                      textDecoration: "none",
                    }}
                    href="/"
                  >
                    Back to we-event.eu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <SEO location={"/contact/thanks"} pageName={"thank you"} />
);
