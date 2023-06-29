import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { StaticImage } from "gatsby-plugin-image";
import { SEO } from "../components/Seo";
import TopBanner from "../components/TopBanner";

export const VenueAccommodationTemplate = ({ title, venue, gallery }) => {
  return (
    <div>
      <TopBanner />
      <PageTitle title={title} />

      <section id="venue-info">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:py-12 md:px-0">
          <div>
            <div>
              <h3 className="font-bold mb-6 text-2xl">{venue.title}</h3>
              <p className="font-bold mb-2">
                WE 2023 Conference and Trade Show will take place in Vienna in
                the InterContinental hotel. The location has many benefits:
              </p>
              <ul className="list-disc text-sm pl-6 mb-4">
                <li>
                  moments away from the world renowned Vienna State Opera and
                  stylish shopping on pedestrianized Kaerntner Strasse
                </li>
                <li>
                  comfortable, modern hotel accommodation, with luxurious
                  bedding, marble bathrooms
                </li>
                <li>
                  unbeatable access to the city's finest dining, cultural and
                  historic attractions
                </li>
                <li>in-house dining options</li>
                <li>beautiful view of Vienna city</li>
                <li>day spa</li>
                <li>conference center</li>
              </ul>

              <p className="font-bold mb-2">
                Price of single room with breakfast: 209 € (VAT included)
              </p>
              <p className="font-bold mb-4">
                Price of double room with breakfast: 239 € (VAT included)
              </p>
            </div>

            <div>
              <p>
                <strong>InterContinental Vienna</strong>
                <br /> Johannesgasse 28 <br />
                1030 Wien, Austria
                <br />
                t: +43 1 711220
              </p>
              <a
                rel="noreferrer"
                className="my-2 block font-bold hover:text-blue ease-in-out duration-300"
                href="https://www.ihg.com/intercontinental/hotels/gb/en/vienna/vieha/hoteldetail"
                target="_blank"
              >
                Hotel information
              </a>
            </div>
          </div>
          <div>
            <PreviewCompatibleImage
              imageInfo={{
                image: venue.image,
                alt: venue.title,
              }}
            />
            <div className="h-8"></div>
            <StaticImage
              src="../img/hotel_vienna.png"
              placeholder="none"
              alt="Vienna Hotel"
            />
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-8 md:py-12 md:px-0">
          <div>
            <h3 className="font-bold mb-1">Transportation:</h3>
            <ul className="text-sm list-disc pl-5">
              <li>Vienna International Airport (VIE)</li>
              <li>Estimated taxi Cost : 40 EUR</li>
              <li>Estimated time by taxi : 25 min.</li>
              <li>Train charge (one way): 11 EUR</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-1">Train Station</h3>
            <ul className="text-sm list-disc pl-5">
              <li>Hauptbahnhof Wien</li>
              <li>
                Cross Wiedner Guertel into Prinz-Eugen-Strasse. At
                Schwarzenbergplatz turn right into Heumarkt where you will find
                the hotels garage.
              </li>
              <li>Estimated distance to the hotel: 2.49 MI/ 4 KM</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-1">Subway</h3>
            <ul className="text-sm list-disc pl-5">
              <li>Stadtpark</li>
              <li>The subway station is located opposite the hotel.</li>
              <li>Estimated distance to the hotel: 0.06 MI/ 0.1 KM</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-blue text-white text-center py-8">
        <div className="container">
          <h2 className="text-4xl">
            <a
              rel="noreferrer"
              className="hover:underline ease-in-out duration-300"
              href="https://book.passkey.com/event/50458667/owner/7754432/home"
              target="_blank"
            >
              Book now
            </a>
          </h2>
        </div>
      </section>
      {/*  <section><div className="container">
        <a className="py-3 px-4 bg-green text-white block hover:bg-greenhover ease-in-out duration-300 text-center my-12 w-32 mx-auto" href="https://book.passkey.com/event/50458667/owner/7754432/home" target="_blank">Book now</a>
        </div></section> */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:py-12 md:px-0">
        {gallery.map((item, index) => (
          <PreviewCompatibleImage
            key={index}
            imageInfo={{
              image: item.image,
            }}
          />
        ))}
      </div>
    </div>
  );
};

VenueAccommodationTemplate.propTypes = {
  title: PropTypes.string,
  venue: PropTypes.object,
  gallery: PropTypes.array,
};

const VenueAccommodation = ({ location, data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout
      location={location.pathname}
      pageName={data.markdownRemark.frontmatter.title}
    >
      <VenueAccommodationTemplate
        title={frontmatter.title}
        venue={frontmatter.venue}
        gallery={frontmatter.gallery}
      />
    </Layout>
  );
};

VenueAccommodation.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default VenueAccommodation;

export const pageQuery = graphql`
  query VenueAccommodationTemplate {
    markdownRemark(
      frontmatter: { templateKey: { eq: "venue-and-accommodation" } }
    ) {
      frontmatter {
        title
        venue {
          title
          body
          image
        }
        gallery {
          image
        }
      }
    }
  }
`;
export const Head = () => (
  <SEO
    location={"/venue-and-accommodation"}
    pageName={"Venue and Accommodation"}
  />
);
