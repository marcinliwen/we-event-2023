import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PageSubtitle from "../components/PageSubtitle";
import { StaticImage } from "gatsby-plugin-image";
import StandTemplate from "../data/standtemplate.json";
import { SEO } from "../components/Seo";
import TopBanner from "../components/TopBanner";

export const TradeFairTemplate = ({ title, tradefair, fees }) => {
  const fullStands = StandTemplate.filter((item) => item.name.length > 0).sort(
    (a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
  );
  const emptyStands = StandTemplate.filter(
    (item) => item.name.length === 0
  ).sort((a, b) => a.id - b.id);
  const allStands = fullStands.concat(emptyStands);
  return (
    <div>
      <PageTitle title={title} />
      <TopBanner />
      <div className="container">
        <div className="my-8">
          <a
            href="/EXHIBITOR_BROCHURE_VIENNA_2023.pdf"
            className="py-3 px-4 bg-green text-white block mx-auto mb-12 hover:bg-greenhover ease-in-out duration-300 w-max"
            target="_blank"
            rel="noreferrer"
          >
            Download Exhibitor Brochure pdf
          </a>
        </div>
        {/* <h3 className="font-bold mt-8  mb-6 text-2xl text-center">
          Don’t miss the next Watercoolers Europe annula event. Book now in your
          calendar.
        </h3>
        <p className="text-base text-center p-6 md:px-0">
          {tradefair.description}
        </p> */}
        <div className="py-8 md:px-0">
          <h3 className="font-bold my-4 text-2xl">Floor Plan</h3>
          <StaticImage
            src="../img/floor_plan_stage.png"
            placeholder="none"
            alt="Floor plan"
          />
        </div>
        {allStands && (
          <div className="plan-nr  mb-8">
            <ul className=" md:columns-2 gap-0 list">
              {allStands.map((item, index, list) => {
                //console.log(list.length / 2);
                //console.log(index);
                return (
                  <li
                    key={item.stand}
                    className={`
              flex w-full 
              ${
                Math.floor(list.length / 2) === index
                  ? "md:break-after-column"
                  : ""
              }
              `}
                  >
                    <span className="w-[108px]">{item.stand}</span>
                    <span className="block text-left  flex-1 uppercase">
                      {item.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {/*   <div className="plan-nr md:grid grid-cols-2 gap-8 mb-12">
          <div className="grid grid-cols-[108px_1fr] list">
            <span className="first">S21</span><span className="first">ACTIVEWHERE TECNOLOGIAS DE INFORMAÇÃO LDA</span>
            <span className="">S04</span><span>ACUVA Technologies</span>
            <span className="">S08</span><span>AQUISENSE TECHNOLOGIES</span>        
            <span className="">S15</span><span>ASE PACKAGING SOLUTIONS GMBH</span>
            <span className="">S19</span><span>BARDI</span>
            <span className="">S29</span><span>BLACKHAWK MOLDING, CO., INC.</span>
            <span className="">S17/22</span><span>BLUPURA SRL</span>
            <span className="">S26</span><span>CANALETAS S.A.</span>
            <span className="">S24/25</span><span>COSMETAL SRL</span>
            <span className="">S16</span><span>CRYSTAL MOUNTAIN</span>
            <span className="">S09</span><span>GREIF POLAND SP. Z O.O.</span>            
            <span className="">S32</span><span >GWS R&D</span>
            <span className="">S28</span><span>H2O DIRECT LIMITED</span>
            <span >S13</span><span >HODMETER</span>
            <span className="last">S20</span><span className="last" >KLARAN BY CRYSTAL IS</span>
          </div>
          <div className="grid grid-cols-[108px_1fr] list">
         
            <span className="first">S12</span><span className="first" >KTLC EUROPE LTD</span>
            <span >S07</span><span >MARCO BEVERAGE SYSTEMS</span>
            <span className="">S31</span><span>MIW WATER COOLER EXPERTS</span>
            <span className="">S05/10</span><span>OASIS WATER FRIENDLY SOLUTIONS</span>
            <span className="">S14</span><span>OP SARL</span>
            <span className="">S18</span><span>PALLETCO LLC</span>
            <span className="">S23</span><span>PETAINER</span>
            <span className="">S02</span><span>PITKIT LTD</span>
            <span className="">S11</span><span>POLYMER SOLUTIONS INTERNATIONAL INC.</span>
            <span>S33</span><span>SC CONTEC PARK SRL</span>
            <span className="">S03</span><span>SIAPI</span>
            <span className="">S06</span><span>SILGAN CLOSURES</span>
            <span className="">S27</span><span>S.P IMPORT COMPANY</span>
            <span className="">S13</span><span>VIKI PLAST</span>
            <span className="">S01</span><span>WATNEXT INDUSTRIES SRL</span>
            <span className="">S30</span><span>ZERICA SRL</span>
          </div>
        </div> */}
      </div>
      <PageSubtitle title="Stand Fees" />
      <section>
        <div className="container">
          <h3 className="font-bold mt-4 text-2xl">Stand Fees</h3>
          <p className="font-extrabold mb-8">VAT CAN BE ADDED IF APPLICABLE</p>

          <div className="prices-container uppercase font-bold grid grid-cols-5 mb-12">
            <div className="py-4 px-6  row-span-2 border-t-4 border-l-4 text-pink  border-blue bg-bggray flex items-center">
              MEMBER STATUS
            </div>
            <div className="py-4 px-6 bg-bgblue col-span-2 uppercase text-center border-x-4 border-t-4 border-blue">
              Early bird <br />
              (IF BOOKED BEFORE SEPTEMBER 30<sup>TH</sup>)
            </div>
            <div className="py-4 px-6 bg-bggray col-span-2 uppercase text-center  border-t-4 border-r-4 border-blue">
              standard <br />
              (FROM OCTOBER 1<sup>ST</sup>)
            </div>

            <div className="py-4 px-6 bg-bgblue  uppercase text-center border-t-4 border-x-4  border-blue">
              9m2
            </div>
            <div className="py-4 px-6 bg-bgblue  uppercase text-center border-t-4 border-r-4 border-blue">
              12m2
            </div>
            <div className="py-4 px-6 bg-bgblue  uppercase text-center border-t-4 border-r-4 border-blue">
              9m2
            </div>
            <div className="py-4 px-6 bg-bgblue uppercase text-center border-t-4 border-r-4 border-blue">
              12m2
            </div>
            <div className="text-pink py-4 px-6 bg-bggray border-l-4 border-t-4 border-blue text-sm">
              INTERNATIONAL SUPPLIER MEMBERS
            </div>
            <div className="text-gray py-4 px-6 bg-bgblue border-x-4 border-t-4 border-blue flex items-center justify-center">
              € 3 440
            </div>
            <div className="text-gray py-4 px-6 bg-bgblue border-r-4 border-t-4 border-blue flex items-center justify-center">
              € 4 590
            </div>
            <div className="text-gray py-4 px-6 bg-bggray border-r-4 border-t-4 border-blue flex items-center justify-center">
              € 4 060
            </div>
            <div className="text-gray py-4 px-6 bg-bggray  border-t-4 border-r-4 border-blue flex items-center justify-center">
              € 5 415
            </div>
            <div className="text-pink py-4 px-6 bg-bggray border-l-4 border-t-4 border-blue text-sm">
              NATIONAL ASSOCIATION MEMBERS
            </div>
            <div className="text-gray py-4 px-6 bg-bgblue border-x-4 border-t-4 border-blue flex items-center justify-center">
              € 3 840
            </div>
            <div className="text-gray py-4 px-6 bg-bgblue border-r-4 border-t-4 border-blue flex items-center justify-center">
              € 5 120
            </div>
            <div className="text-gray py-4 px-6 bg-bggray border-r-4 border-t-4 border-blue flex items-center justify-center">
              € 4 540
            </div>
            <div className="text-gray py-4 px-6 bg-bggray border-t-4 border-r-4 border-blue flex items-center justify-center">
              € 6 060
            </div>
            <div className="text-pink py-4 px-6 bg-bggray border-l-4 border-y-4 border-blue text-sm">
              NON-WE MEMBERS
            </div>
            <div className="text-gray py-4 px-6 bg-bgblue border-x-4 border-y-4 border-blue flex items-center justify-center">
              € 4 220
            </div>
            <div className="text-gray py-4 px-6 bg-bgblue border-r-4 border-y-4 border-blue flex items-center justify-center">
              € 6 530
            </div>
            <div className="text-gray py-4 px-6 bg-bggray border-r-4 border-y-4 border-blue flex items-center justify-center">
              € 4 980
            </div>
            <div className="text-gray py-4 px-6 bg-bggray border-r-4 border-y-4 border-blue flex items-center justify-center">
              € 6 640
            </div>
          </div>
          <div className="  mb-12">
            <h3 className="font-bold my-4 text-2xl">Price includes:</h3>
            <ul className="list-disc text-sm pl-6 mb-4">
              <li>
                space only stand to be dressed individually by the exhibitors
              </li>
              <li>power supply (3 sockets – 220 V)</li>
              <li>
                one night accommodation (single room with breakfast) on 26
                October 2023 at the InterContinental Vienna Hotel
              </li>
              <li>listing in the Fair Catalogue</li>
            </ul>
            <h3 className="font-bold my-4 text-2xl">Payment deadlines:</h3>
            <p className="">
              Deposit payment within 14 days of stand reservation/application
              form. Balance payment by <strong>31 August 2023</strong>
            </p>
          </div>
        </div>
      </section>

      <PageSubtitle title="Stand Application Form" />
      <section className="">
        <div className="container">
          <h3 className="font-bold my-4 text-2xl text-center">
            All stands have been reserved
          </h3>
        </div>
      </section>
      <section className="form-cover py-12">
        <div className="container">
          <div className="">
            <h3 className="font-bold my-4 text-2xl">
              To reserve a stand, please:
            </h3>
            <ul className="list-disc pl-6">
              <li>
                Complete this reservation form, indicating your preferred
                location
              </li>
              <li>
                Send a NON-REFUNDABLE pre-payment of € 1,700 (bank transfer with
                ALL bank charges to be paid by the Payer).
              </li>
            </ul>
            <p className="font-bold">
              Note: No reservation will be accepted WITHOUT the pre-payment.
            </p>
            <p className="pt-8">
              Exhibition stands will be allocated on a ‘first-come first-served’
              basis subject to space availability. Full payment is due by
              <strong> 31 August 2023</strong>. Cancellation after that date
              will entail 100% of the stand price plus VAT being due and
              payable.
            </p>
          </div>
          <div id="registration-form" className="my-8 ">
            <h3 className="font-bold my-4 text-2xl text-center">
              COMPANY DETAILS
            </h3>
            <form
              name="stand_application_form"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
              action="/contact/thanks/"
            >
              <input type="hidden" name="bot-field" />
              <input
                type="hidden"
                name="form-name"
                value="stand_application_form"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <label className="flex flex-col">
                  <span>
                    Company name <span className="text-red-600">*</span>
                  </span>
                  <input type="text" name="company_name" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    VAT No{" "}
                    <span className="text-red-600">
                      * (mandatory only for EU countries){" "}
                    </span>
                  </span>
                  <input type="text" name="vat" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    Contact person <span className="text-red-600">*</span>
                  </span>
                  <input type="text" name="contact_person" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    Street address <span className="text-red-600">*</span>{" "}
                  </span>
                  <input type="text" name="address" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    Post Code <span className="text-red-600">*</span>{" "}
                  </span>
                  <input type="text" name="post_code" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    City <span className="text-red-600">*</span>
                  </span>{" "}
                  <input type="text" name="city" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    Region/State <span className="text-red-600">*</span>
                  </span>
                  <input type="text" name="region_state" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    Country <span className="text-red-600">*</span>
                  </span>{" "}
                  <input type="text" name="countrey" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    Tel. <span className="text-red-600">*</span>
                  </span>{" "}
                  <input type="tel" name="tel" required />
                </label>
                <label className="flex flex-col">
                  Fax <input type="tel" name="fax" />
                </label>
                <label className="flex flex-col">
                  <span>
                    E-mail (Direct) <span className="text-red-600">*</span>
                  </span>{" "}
                  <input type="email" name="email" required />
                </label>
                <label className="flex flex-col">
                  Website <input type="text" name="website" />
                </label>
                <label className="custom-select-wrapper">
                  <span className="mr-2">
                    PREFFERED STAND NO.:<span className="text-red-600">*</span>
                  </span>
                  {/*  <input type="text" name="stand-no" required /> */}
                  <div className="custom-select">
                    <select name="stand-no" required>
                      {/* <option value="S09 12m2">S09 9m&sup2;</option> */}
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-down-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </div>
                </label>
                {/* <label className="custom-select-wrapper">
                  <span className="mr-2">AVAILABLE EXHIBITION STANDS:<span className="text-red-600">*</span></span>
                  <div className="custom-select">
                  <select name="standsize">
                    <option value="9 m2 table top">9 m&sup2; table top</option>

                    <option  value="12 m2 table top">12 m&sup2; table top</option>

      
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
</svg>
</div>
                </label> */}
              </div>
              <div>
                <h3 className="font-bold my-4 text-2xl">
                  Exhibition regulations
                </h3>
                <p className="">
                  <strong>
                    WE regulations are designed to ensure that all stand
                    exhibits comply with current legislation.
                  </strong>
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Water displayed and dispensed must have been bottled in
                    compliance with WE regulations. Bottlers who exhibit must
                    have current approved licences and permits.
                  </li>
                  <li>
                    Electrical, mechanical or hydraulic equipment must have the
                    appropriate and valid safety and conformity certificates.
                  </li>
                  <li>
                    Materials used with food products must comply with the
                    relevant European Directives for use in contact with food.
                  </li>
                  <li>
                    Water coolers and dispensers exhibited are required to have
                    been tested according to the WE sanitary protocols.
                  </li>
                  <li>
                    Certificates of Compliance to WE approved standards must be
                    available for inspection prior to the opening of the event.
                  </li>
                </ul>
              </div>
              <div className="my-12">
                <p className="">
                  Please refer any queries concerning the above requirements to
                  the exhibition organiser:
                  <a
                    rel="noreferrer"
                    href="mailto:office@ideamarketing.pl"
                    className="ml-1"
                  >
                    office@ideamarketing.pl
                  </a>
                </p>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="accept_terms_and_conditions"
                    value="yes"
                    required
                  />
                  <span className="ml-2">
                    I hereby accept the{" "}
                    <a
                      rel="noreferrer"
                      href="/EXHIBITION_TERMS_&_CONDITION_VIENNA_2023.pdf"
                      className="text-pink"
                      target="_blank"
                    >
                      Exhibition Terms and Conditions
                    </a>{" "}
                    <span className="text-red-600">*</span>.{" "}
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="bg-green hover:bg-greenhover py-4 px-8 text-white mx-auto my-4 block text-2xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

TradeFairTemplate.propTypes = {
  title: PropTypes.string,
  tradefair: PropTypes.object,
  fees: PropTypes.object,
};

const TradeFair = ({ location, data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout
      location={location.pathname}
      pageName={data.markdownRemark.frontmatter.title}
    >
      <TradeFairTemplate
        title={frontmatter.title}
        tradefair={frontmatter.tradefair}
        fees={frontmatter.fees}
      />
    </Layout>
  );
};

TradeFair.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TradeFair;

export const pageQuery = graphql`
  query TradeFairTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "trade-fair" } }) {
      frontmatter {
        title
        tradefair {
          description
          image
        }
        fees {
          image
        }
      }
    }
  }
`;
export const Head = () => (
  <SEO location={"/trade-fair"} pageName={"Trade Fair"} />
);
