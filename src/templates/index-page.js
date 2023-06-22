import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { SEO } from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";
import TopBanner from "../components/TopBanner";

// eslint-disable-next-line
export const IndexPageTemplate = ({ image, category }) => {
  //console.log(category)
  return (
    <div>
      <TopBanner />
      <div className="container py-12">
        <h2 className="text-center mb-8 text-4xl">
          WE Chair’s Welcome Address
        </h2>
        <div className="md:grid md:grid-cols-8 gap-8">
          <div className="col-span-5 prose prose-p:text-sm prose-p:mb-3 prose-p:mt-0 prose-h4:mt-0">
            <p>
              With great expectations and pleasure, Watercoolers Europe will
              celebrate its 30 th year anniversary in the beautiful city of
              Vienna, Austria.
            </p>
            <p>
              That is 30 years of promoting healthy hydration; 30 years of
              communication with legislators around Europe to support the
              Industry; 30 years of product innovation and development; and 30
              years of dedicated work to protect our members’ investments.
            </p>
            <p>
              I take this opportunity to thank both our past and present members
              who have created one of the safest, modern and exciting water
              dispenser markets in the world – here in Europe.
            </p>
            <p>
              As we see at every WE event, the development continues. The market
              potential for our Industry is still huge and the need for healthy
              hydration is becoming increasingly relevant in our lives.
            </p>
            <p>
              The event in Vienna promises to be a door opener for fresh
              business ideas and to make new valuable contacts.
            </p>
            <p>
              There will be a warm welcome to members of ICBWA (International
              Council of Bottled Water Associations) who will join us in Vienna,
              bringing valued expertise from other continents.
            </p>
            <p>
              And last, but not least, we have the annual WE Gala Dinner and
              Aqua Awards in the magnificent Palais Ferstel – a wonderful
              evening that nobody from our Industry should miss.
            </p>
            <p>I will be delighted to welcome you to Vienna.</p>

            <StaticImage src="../img/podpis.png" alt="M.Mariotti" width={180} />
            <h4 className="mb-0">Marzia Mariotti</h4>
            <h4>WE Chair</h4>
          </div>
          <div className="col-span-3">
            <StaticImage
              src="../img/m-mariotti.png"
              alt="M.Mariotti"
              class="w-full"
            />
          </div>
        </div>
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
