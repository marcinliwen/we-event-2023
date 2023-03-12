import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { SEO } from "../components/seo";

// eslint-disable-next-line
export const IndexPageTemplate = ({ image, category }) => {
  //console.log(category)
  return (
    <div>
      <div className="container my-auto">
        <PreviewCompatibleImage
          imageInfo={{
            image: image,
            alt: "conference",
          }}
        />
      </div>
      <section className="">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:py-12 ">
          {category.map((item) => (
            <div className="flex flex-col" key={item.title}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: item.image,
                  alt: item.title,
                }}
              />
              <h3 className="font-bold my-4 text-2xl">{item.title}</h3>
              <div className="text-base mb-8 text-justify">
                {item.description}
              </div>
              <Link
                to={item.link}
                className="mt-auto py-3 px-4 bg-green hover:bg-greenhover text-white block w-max ml-auto ease-in-out duration-300"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  category: PropTypes.array,
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ location, data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location.pathname}>
      <IndexPageTemplate
        image={frontmatter.image}
        category={frontmatter.category}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image
        category {
          title
          description
          link
          image
        }
      }
    }
  }
`;

export const Head = () => <SEO location={"/"} pageName={"Home"} />;
