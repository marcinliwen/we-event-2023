import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import { SEO } from "../components/Seo";
import TopBanner from "../components/TopBanner";

export const AquaAwardsTemplate = ({ title }) => {
  return (
    <div>
      <TopBanner />
      <PageTitle title={title} />

      <section>
        <div className="container">
          <div className="py-16 is-side">
            <div className="cart md:flex mb-16 md:mb-20 separator">
              <div className="md:basis-1/2 ">
                <StaticImage
                  src="../img/aa-logo.png"
                  placeholder="none"
                  alt="Aqua Awards Logo"
                />
              </div>
              <div className="md:basis-1/2 flex flex-col justify-center	">
                <h3 className="font-bold mb-8 mt-4 text-2xl text-pink">
                  AQUA AWARDS
                </h3>
                <p className="text-base mb-8">
                  The Aqua Awards Ceremony, held at the annual Watercoolers
                  Europe Conference and Fair, is a tradition extending back over
                  20 years. It recognises excellence in the water dispenser
                  industry in marketing, innovation and public relations, as
                  well as products and programmes which enhance sustainability
                </p>
                {/*             <a href="/Aqua_Awards_Brochure_2022.pdf" className="py-3 px-4 bg-green text-white block hover:bg-greenhover ease-in-out duration-300 w-max" target="_blank" rel="noreferrer">Aqua Awards Brochure download pdf</a>
                 */}{" "}
              </div>
            </div>
            <div className="cart mb-16 md:mb-20 ">
              <h3 className="font-bold mb-8 mt-4 text-2xl text-pink text-center">
                WHO CAN ENTER?
              </h3>
              <p className="text-base mb-8">
                Full members of WE, either directly or through their National
                Association - <b>THERE IS NO ENTRY FEE! </b>
                There are 5 categories – one of them could be your company’s
                ticket to a treasured WE Aqua Award.
              </p>
            </div>
            <div className="flex flex-wrap md:block md:columns-5 gap-6 mb-16 md:mb-20">
              <div className="e-item flex flex-col w-[45%] md:w-[100%]">
                <StaticImage
                  className="shadow-md rounded-[1rem]"
                  src="../img/WE-enter/best-website.png"
                  placeholder="none"
                  alt="Aqua Awards Logo"
                />
                <h5 className="font-bold text-center mt-6 w-[122px] mx-auto">
                  Best Website
                </h5>
              </div>
              <div className="e-item flex flex-col w-[45%] md:w-[100%]">
                <StaticImage
                  className="shadow-md rounded-[1rem]"
                  src="../img/WE-enter/innovation.png"
                  placeholder="none"
                  alt="Aqua Awards Logo"
                />
                <h5 className="font-bold text-center mt-6 w-[122px] mx-auto">
                  Best Product Innovation
                </h5>
              </div>
              <div className="e-item flex flex-col w-[45%] md:w-[100%]">
                <StaticImage
                  className="shadow-md rounded-[1rem]"
                  src="../img/WE-enter/hydration.png"
                  placeholder="none"
                  alt="Aqua Awards Logo"
                />
                <h5 className="font-bold text-center mt-6 w-[122px] mx-auto">
                  Best Promotion of Health & Hydration
                </h5>
              </div>
              <div className="e-item flex flex-col w-[45%] md:w-[100%]">
                <StaticImage
                  className="shadow-md rounded-[1rem]"
                  src="../img/WE-enter/green.png"
                  placeholder="none"
                  alt="Aqua Awards Logo"
                />
                <h5 className="font-bold text-center mt-6 w-[122px] mx-auto">
                  Best Environmental Practice/Green Initiative
                </h5>
              </div>
              <div className="e-item flex flex-col w-[45%] md:w-[100%]">
                <StaticImage
                  className="shadow-md rounded-[1rem]"
                  src="../img/WE-enter/brainand.png"
                  placeholder="none"
                  alt="Aqua Awards Logo"
                />
                <h5 className="font-bold text-center mt-6 w-[94px] mx-auto">
                  Marketing Campaign
                </h5>
              </div>
            </div>

            <div className="mb-16 md:mb-20 separator">
              <p className="text-base mb-8">
                This could be your year! Have a look at the award categories and
                see where you can best present your company’s work, services,
                products, campaigns, marketing initiatives - or all of them.
                This is your opportunity to present your company to an audience
                of experts and colleagues in the industry.
              </p>
            </div>
            <div className="mb-16 md:mb-20">
              <h3 className="font-bold mb-8 mt-4 text-2xl text-pink text-center">
                WE ARE LOOKING FOR:
              </h3>
              <ul className="list-disc	pl-8">
                <li>Dynamic and forward thinking initiatives</li>
                <li>Marketing that promotes the industry as a whole</li>
                <li>A clear message</li>
                <li>
                  Effective use of colour and images to attract and hold the
                  customer’s interest
                </li>
                <li>The relevance of the nomination to its stated objective</li>
              </ul>
            </div>
            <div className="mb-16 md:mb-20">
              <h3 className="font-bold mb-8 mt-4 text-2xl text-pink text-center">
                HOW TO ENTER?
              </h3>
              <p className="text-base mb-8">
                Please complete the form below and ensure that each nomination
                is sent with the appropriate attachments.{" "}
                <b>Submit the application form before 6th October 2023</b>
              </p>
            </div>
            <div className="mb-16 md:mb-20 separator">
              <a
                href="javascript:void(
        window.open(
          'https://form.jotform.com/221161365793053',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    "
                className="bg-green hover:bg-greenhover py-4 px-8 text-white mx-auto my-20 block text-2xl text-center w-max"
              >
                Application Form
              </a>
            </div>
            <div className="mb-16 md:mb-20">
              <h3 className="font-bold mb-8 mt-4 text-2xl text-pink text-center">
                BENEFITS FOR APPLICANTS & WINNERS
              </h3>
              <StaticImage
                src="../img/gala-dinner.png"
                placeholder="none"
                alt="Gala Dinner"
                className=""
              />
              <p className="text-base my-8">
                The Aqua Awards is an excellent way to promote your brand to the
                event’s visitors and the wider audience online. Check out the
                fantastic package for winners and applicants.
              </p>
            </div>
            <div className="mb-16 md:mb-20 separator">
              <div className="md:flex md:justify-between">
                <div className="benefit-item max-w-[250px] mx-auto md:mx-0">
                  <StaticImage
                    src="../img/benefits/benefit_1.png"
                    placeholder="none"
                    alt=""
                    className=""
                  />
                  <h3 className="font-bold mb-8 mt-4 text-lg">
                    STATUETTE & CERTIFICATES WILL BE GIVEN TO THE WINNERS
                  </h3>
                </div>
                <div className="benefit-item max-w-[250px] mx-auto md:mx-0">
                  <StaticImage
                    src="../img/benefits/benefit_2.png"
                    placeholder="none"
                    alt=""
                    className=""
                  />
                  <h3 className="font-bold mb-8 mt-4 text-lg">
                    INTERVIEW WITH THE WINNERS WILL BE PUBLISHED ON THE
                    WATERCOOLERS EUROPE WEBSITE AND IN THE MONTHLY NEWSLETTER
                  </h3>
                </div>
                <div className="benefit-item max-w-[250px] mx-auto  md:mx-0">
                  <StaticImage
                    src="../img/benefits/benefit_3.png"
                    placeholder="none"
                    alt=""
                    className=""
                  />
                  <h3 className="font-bold mb-8 mt-4 text-lg">
                    THE WINNING PRESENTATIONS WILL BE SHOWN DURING THE AQUA
                    AWARDS CEREMONY AT THE GALA DINNER
                  </h3>
                </div>
              </div>
            </div>
            <div className="mb-16 md:mb-20 separator">
              <div className="flex flex-wrap md:flex-nowrap">
                <StaticImage
                  src="../img/jury.png"
                  placeholder="none"
                  alt="Jury"
                  className="max-w-[250px] mx-auto md:mx-0"
                />
                <div className="md:ml-4 flex flex-col justify-center			">
                  <h3 className="font-bold mb-8 mt-4 text-2xl text-pink text-center md:text-left">
                    JURY
                  </h3>
                  <p>
                    There is an international jury that consists of
                    representatives nominated by WE and National Associations.
                  </p>
                  {/*  <p>
                    The winners will be chosen from the votes from the jury
                    appointed by WE (75%) and National Associations (25%).
                  </p> */}
                </div>
              </div>
            </div>
            <div className="mb-16 md:mb-20 separator">
              <h3 className="font-bold mb-8 mt-4 text-2xl text-pink text-center">
                CRITERIA FOR JUDGING:
              </h3>
              <div>
                <div className="cat-item flex-col md:flex-row gap-4 flex md:gap-12 mb-12 md:mb-6">
                  <StaticImage
                    src="../img/aa-criteria/website.png"
                    placeholder="none"
                    alt="BEST WEBSITE"
                    className="shadow-md rounded-[1rem] max-w-[162px]"
                  />
                  <div>
                    <h4 className="font-bold">BEST WEBSITE</h4>
                    <ul className="list-disc	pl-[18px]">
                      <li>Effective navigation</li>
                      <li>Relevant content</li>
                      <li>Performance and speed</li>
                      <li>Attractive and appealing design</li>
                      <li>Inclusion of WE/National Association logo</li>
                      <li>
                        Promotion of the watercooler industry if appropriate
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cat-item flex-col md:flex-row gap-4 flex md:gap-12 mb-12 md:mb-6">
                  <StaticImage
                    src="../img/aa-criteria/innovation.png"
                    placeholder="none"
                    alt="BEST PRODUCT INNOVATION"
                    className="shadow-md rounded-[1rem] max-w-[162px]"
                  />
                  <div>
                    <h4 className="font-bold">BEST PRODUCT INNOVATION</h4>
                    <ul className="list-disc	pl-[18px]">
                      <li>
                        Innovative technology within the standards of the
                        industry
                      </li>
                      <li>Stands out from the crowd</li>
                      <li>A recognised benefit to the user</li>
                      <li>
                        Promotion of the watercooler industry if appropriate
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cat-item flex-col md:flex-row gap-4 flex md:gap-12 mb-12 md:mb-6">
                  <StaticImage
                    src="../img/aa-criteria/health.png"
                    placeholder="none"
                    alt="BEST PROMOTION OF HEALTH & HYDRATION"
                    className="shadow-md rounded-[1rem] max-w-[162px]"
                  />
                  <div>
                    <h4 className="font-bold">
                      BEST PROMOTION OF HEALTH & HYDRATION
                    </h4>
                    <ul className="list-disc	pl-[18px]">
                      <li>Immediate positive impact on target audience</li>
                      <li>Relevance to audience</li>
                      <li>Lasting impression on audience of key message</li>
                      <li>Promotion of the watercooler industry</li>
                      <li>Inclusion of the WE/National Association logo</li>
                      <li>Attractive and appealing design</li>
                    </ul>
                  </div>
                </div>
                <div className="cat-item flex-col md:flex-row gap-4 flex md:gap-12 mb-12 md:mb-6">
                  <StaticImage
                    src="../img/aa-criteria/green.png"
                    placeholder="none"
                    alt="BEST ENVIRONMENTAL PRACTICE/GREEN INITIATIVE"
                    className="shadow-md rounded-[1rem] max-w-[162px]"
                  />
                  <div>
                    <h4 className="font-bold">
                      BEST ENVIRONMENTAL PRACTICE/GREEN INITIATIVE
                    </h4>
                    <ul className="list-disc	pl-[18px]">
                      <li>
                        Total commitment to the benefit of the environment
                      </li>
                      <li>Immediate impact on target audience</li>
                      <li>
                        Lasting impression on target audience to continue this
                        initiative
                      </li>
                      <li>Promotion of the watercooler industry</li>
                      <li>Inclusion of the WE/National Association logo</li>
                      <li>Attractive and appealing design</li>
                    </ul>
                  </div>
                </div>
                <div className="cat-item flex-col md:flex-row gap-4 flex md:gap-12 mb-12 md:mb-6">
                  <StaticImage
                    src="../img/aa-criteria/campaign.png"
                    placeholder="none"
                    alt="BEST MARKETING CAMPAIGN"
                    className="shadow-md rounded-[1rem] max-w-[162px]"
                  />
                  <div>
                    <h4 className="font-bold">BEST MARKETING CAMPAIGN</h4>
                    <ul className="list-disc	pl-[18px]">
                      <li>Easily understood campaign message</li>
                      <li>
                        Immediate positive impact on target audience – to
                        inform/persuade/remind customers of campaign message
                      </li>
                      <li>
                        Lasting impression on target audience of this message
                      </li>
                      <li>Promotion of the watercooler industry</li>
                      <li>Inclusion of the WE/National Association logo</li>
                      <li>Attractive and appealing design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex mb-16 md:mb-20 ">
              <div className="md:basis-1/2 flex flex-col justify-center	">
                <h3 className="font-bold mb-8 mt-4 text-2xl text-pink">
                  GALA DINNER
                </h3>
                <p className="text-base mb-8">
                  WE Aqua Awards winners will be announced at the Gala Dinner to
                  be held on{" "}
                  <span className="text-blue font-bold">
                    26th October 2023.
                  </span>{" "}
                </p>
                <p>
                  Each category winner will have their presentation shown to the
                  assembled audience of colleagues and business partners.
                </p>
              </div>
              <div className="md:basis-1/2  md:p-4">
                <StaticImage
                  src="../img/gala_hall.png"
                  placeholder="none"
                  alt="Gala Hall"
                />
                {/*  <p className="font-bold">SUD LISBOA</p> */}
              </div>
            </div>
            {/*   <div className="flex flex-col md:flex-row mb-16 md:mb-20 ">
              <div className="md:basis-1/2  md:p-4 show-img order-1">
                <StaticImage
                  src="../img/show-1.png"
                  placeholder="none"
                  alt="AMAZING SHOW"
                  className="show-1 mb-8 max-w-[300px] md:max-w-[400px]"
                />
                <StaticImage
                  src="../img/show-2.png"
                  placeholder="none"
                  alt="AMAZING SHOW"
                  className="show-2 max-w-[300px] md:max-w-[400px]"
                />
                <StaticImage
                  src="../img/bilet.png"
                  placeholder="none"
                  alt="AMAZING SHOW"
                  className="show-3 max-w-[300px] md:max-w-[400px]"
                />
              </div>
              <div className="md:basis-1/2 flex flex-col justify-center	md:order-2">
                <div className="flex mb-8">
                  <h3 className="font-bold  text-2xl text-pink self-end">
                    AMAZING SHOW
                  </h3>
                  <StaticImage
                    src="../img/aa-logo.png"
                    placeholder="none"
                    alt="Aqua Awards Logo"
                    className="max-w-[180px] ml-auto"
                  />
                </div>

                <p className="text-base mb-8">
                  The Aqua Awards ceremony wouldn’t be complete without its
                  highlight - a fabulous show! This year our guests will be
                  taken on an amazing journey through Portuguese history and its
                  most spectacular discoveries.
                </p>
                <p className="text-base mb-8">
                  Vasco da Gama will take you for an impressive performance
                  inspired by the sea and oceans. You will travel accompanied by
                  the rolling of African drums, witnessing the joyful Brasilian
                  Samba and Capoeira with a colourful Bollywood dance and with
                  Portuguese nostalgic Fado music.{" "}
                </p>
                <p className="text-base mb-8">
                  The journey will come to a close in the world of French
                  cabaret and the famous Moulin Rouge chic. You will experience
                  the legendary Cancan and many other unforgettable moments full
                  of emotions and surprises.
                </p>
              </div>
            </div> */}
            {/*  <div className="border-t-2 border-bggray pt-8">
              <h3 className="font-bold mb-8 mt-4 text-2xl md:text-center">
                Fantastic benefits waiting for winners
              </h3>
              <p className="mb-8 md:text-center">
                The Aqua Awards is an excellent way to promote your brand to the
                event’s visitors and the wider audience online. Winning
                presentations will be shown during the Aqua Awards ceremony at
                the gala dinner and statuette & certificate will be given to the
                winners. Interview with the winners will be published on the
                Watercoolers Europe website and in the monthly newsletter.
              </p>
              <div className="benefits-container">
                <div className="benefits-item">
                  <StaticImage
                    src="../img/icons/award.png"
                    placeholder="none"
                  />
                  <p>Statuette</p>
                </div>
                <div className="benefits-item">
                  <StaticImage
                    src="../img/icons/certificate.png"
                    placeholder="none"
                  />
                  <p>Certificate</p>
                </div>
                <div className="benefits-item">
                  <StaticImage
                    src="../img/icons/presentation.png"
                    placeholder="none"
                  />
                  <p>Presentation</p>
                </div>
                <div className="benefits-item">
                  <StaticImage
                    src="../img/icons/interview.png"
                    placeholder="none"
                  />
                  <p>Interview</p>
                </div>
                <div className="benefits-item">
                  <StaticImage
                    src="../img/icons/publications.png"
                    placeholder="none"
                  />
                  <p>Publications</p>
                </div>
              </div>
            </div> */}
            {/* {info &&
                info.map((item) => (
                  <div key={item.title} className="cart md:flex mb-16 md:mb-20 ">
                    <div className="md:basis-1/2 px-8">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: item.image,
                          alt: item.title,
                        }}
                      />
                    </div>
                    <div className="md:basis-1/2 flex flex-col justify-center	px-8">
                      <h3 className="font-bold mb-8 mt-4 text-2xl">
                        {item.title}
                      </h3>
                      <p className="text-base mb-8">{item.description}</p>
                    </div>
                  </div>
                ))} */}
          </div>
        </div>
      </section>
      {/*     <section className="bg-bggray py-20">
        <div className="container">
          <h3 className="font-bold mb-8 mt-4 text-2xl md:text-center">
            If you believe you have a great product or the highest level of
            service don’t hesitate. Submit your application and a prestigious
            aqua award can be yours!
          </h3>
          <h4 className="font-bold  md:text-center">How to enter?</h4>
          <p className="md:text-center mb-8">
            Just complete the Aqua Awards entry and submit it online.
          </p>
          <h4 className="font-bold  md:text-center">There are 5 categories</h4>
          <p className="md:text-center">
            Any of which could gain your company the coveted WE Aqua Awards.
          </p>
          <p className="md:text-center mb-8">
            The winners will be chosen by the Jury appointed by WE (75%) and
            National Associations (25%).
          </p>
          <h4 className="font-bold text-center uppercase text-2xl mb-4">
            Criteria for judging
          </h4>
          <div className="category-container">
            <div className="category-item mb-4 md:mb-0 p-6 bg-white">
              <StaticImage
                className="mb-2"
                src="../img/icons/website.png"
                placeholder="none"
              />
              <h3 className="font-bold h-16 text-xl">Best website</h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Effective navigation</li>
                <li>Relevant content</li>
                <li>Performance and speed</li>
                <li>Attractive and appealing design</li>
                <li>Inclusion of WE/National Association logo</li>
                <li>Promotion of the watercooler industry if appropriate</li>
              </ul>
            </div>
            <div className="category-item mb-4  md:mb-0 p-6 bg-white">
              <StaticImage
                className="mb-2"
                src="../img/icons/rocket.png"
                placeholder="none"
              />
              <h3 className="font-bold h-16 text-xl">
                Best product innovation
              </h3>
              <ul className="list-disc pl-6 text-sm">
                <li>
                  Innovative technology within the standards of the industry
                </li>
                <li>Stands out from the crowd</li>
                <li>A recognised benefit to the user</li>
              </ul>
            </div>
            <div className="category-item mb-4  md:mb-0 p-6 bg-white">
              <StaticImage
                className="mb-2"
                src="../img/icons/recycle-sign.png"
                placeholder="none"
              />
              <h3 className="font-bold h-16 text-xl">
                Best environmental practice / green initiative
              </h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Immediate positive impact on target audience</li>
                <li>Relevance to audience</li>
                <li>Lasting impression on audience of key message</li>
                <li>Promotion of the watercooler industry</li>
                <li>Include of the WE/National Association logo</li>
                <li>Attractive and appealing design</li>
              </ul>
            </div>
            <div className="category-item mb-4  md:mb-0 p-6 bg-white">
              <StaticImage
                className="mb-2"
                src="../img/icons/drop.png"
                placeholder="none"
              />
              <h3 className="font-bold h-16 text-xl">
                Best promotion of health & hydration
              </h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Total commitment to the benefit of the environment</li>
                <li>Immediate impact on target audience</li>
                <li>
                  Lasting impression on target audience to continue this
                  initiative
                </li>
                <li>Promotion of the watercooler industry</li>
                <li>Attractive and appealing design</li>
              </ul>
            </div>
            <div className="category-item mb-4 md:mb-0 p-6 bg-white">
              <StaticImage
                className="mb-2"
                src="../img/icons/ads.png"
                placeholder="none"
              />
              <h3 className="font-bold h-16 text-xl">
                Best marketing campaign
              </h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Easily understood campaign message</li>
                <li>
                  Immediate positive impact on target audience - to
                  inform/persuade/remind customers of campaign message
                </li>
                <li>Lasting impression on target audience of this message</li>
                <li>Promotion of the watercooler industry</li>
                <li>Inclusion of the WE/National Association logo</li>
                <li>Attractive and appealing design</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      {/*  <PageSubtitle title="Aqua Awards Application Form" /> */}

      {/*    <section>
        <div className="container">
          <div id="registration-form" className="my-8">
            <form
              name="aqua_awards_form"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="bot-field" />
              <input
                type="hidden"
                name="form-name"
                value="aqua_awards_form"
              />
              <h3 className="font-bold mt-12 mb-4 text-2xl">
                COMPANY DETAILS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <label className="flex flex-col md:col-span-2">
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
                  <span>
                    E-mail (Direct) <span className="text-red-600">*</span>
                  </span>{" "}
                  <input type="email" name="email" required />
                </label>
                <label className="flex flex-col">
                  Website <input type="text" name="website" />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mt-12 mb-4 md:min-h-[128px] lg:min-h-[100px] text-2xl">
                  PLEASE INDICATE YOUR COMPANY’S CATEGORY AND TO WHICH
                  ASSOCIATION YOU BELONG
                </h3>
              
              <div className="grid grid-cols-1 gap-8">
                <label>
                <input type="checkbox" name="bottler" />
                  <span className="ml-2">BOTTLER</span>
                 
                </label>
                <label>
                <input type="checkbox" name="distributor" />
                  <span className="ml-2">DISTRIBUTOR</span>
                 
                </label>
                <label>
                <input
                    type="checkbox"
                    name="industry_supplier_manufacturer"
                  />
                  <span className="ml-2">INDUSTRY SUPPLIER/MANUFACTURER</span>
                 
                </label>
                <label>
                <input type="checkbox" name="direct_we_member" />
                  <span className="ml-2">DIRECT WE MEMBER</span>
                  
                </label>
                <label className="flex flex-col">
                  <span className="ml-2">
                    NATIONAL ASSOCIATION MEMBER, PLEASE SPECIFY:
                  </span>
                  <textarea name="national_association_member"></textarea>
                </label>
              </div>
              </div>
              <div>
                <h3 className="font-bold mt-12 mb-4 md:min-h-[128px] lg:min-h-[100px] text-2xl">
                PLEASE INDICATE BELOW THE CATEGORIES YOU ARE ENTERING
                </h3>
              
              <div className="grid grid-cols-1 gap-8">
                <label>
                <input type="checkbox" name="best_website" />
                  <span className="ml-2">BEST WEBSITE</span>
                  
                </label>
                <label>
                <input type="checkbox" name="best_product_innovation" />
                  <span className="ml-2">BEST PRODUCT INNOVATION</span>
                  
                </label>
                <label>
                <input
                    type="checkbox"
                    name="best_promotion_health_hydration"
                  />
                  <span className="ml-2">BEST PROMOTION OF HEALTH & HYDRATION</span>
                  
                </label>
                <label>
                <input type="checkbox" name="best_environmental_practice" />
                  <span className="ml-2">BEST ENVIRONMENTAL PRACTICE/GREEN INITIATIVE</span>
                
                </label>
                <label>
                <input type="checkbox" name="best_marketing_campaign" />
                  <span className="ml-2">BEST MARKETING CAMPAIGN</span>
                  
                </label>
              </div>
              </div>
              </div>
              <div className="my-12 bg-bluelight py-8 px-8 md:px-20">
                <h3 className="font-bold mt-12 mb-4 text-2xl">PLEASE INDICATE BELOW THE MATERIALS YOU ARE ATTACHING</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12">
                  <div className="md:col-span-2">PRESENTATION</div>
                  <label>
                    <input type="checkbox" name="powerpoint" />
                    <span className="ml-2">POWERPOINT</span>
                   </label>
                   <label>
                    <input type="checkbox" name="keynote" />
                    <span className="ml-2">KEYNOTE</span>
                   </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12">
                  <div className="md:col-span-2">MOVIE AND SOUND FILES</div>
                  <label className="flex items-center">
                    <input type="checkbox" name="mp4_file" />
                    <span className="ml-2">MP4 FILE</span>
                   </label>
                   <label className="flex items-center">                   
                    <span className="mr-2 w-[160px] block">NUMBER OF MP4 FILES</span>
                    <input type="number" name="mp4_file_num" className="w-[58px] py-0 px-2" />
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="mp3_file_2"  />
                    <span className="ml-2">MP3 FILE</span>
                   </label>
                   <label className="flex items-center">                   
                    <span className="mr-2 w-[160px]">NUMBER OF MP3 FILES</span>
                    <input type="number" name="mp3_file_num_2" className="w-[58px] py-0 px-2" />
                   </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12">
                  <div className="md:col-span-2">PHOTOS</div>
                  <label className="flex items-center">
                    <input type="checkbox" name="jpg_file" />
                    <span className="ml-2">JPG FILE</span>
                   </label>
                   <label className="flex items-center">                   
                    <span className="mr-2 w-[160px]">NUMBER OF JPG FILES</span>
                    <input type="number" name="jpg_file_num" className="w-[58px] py-0 px-2"/>
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="png_file" />
                    <span className="ml-2">PNG FILE</span>
                   </label>
                   <label className="flex items-center">                   
                    <span className="mr-2 w-[160px]">NUMBER OF PNG FILES</span>
                    <input type="number" name="mp3_file_num_" className="w-[58px] py-0 px-2" />
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="gif_file" />
                    <span className="ml-2">GIF FILE</span>
                   </label>
                   <label className="flex items-center">                   
                    <span className="mr-2 w-[160px]">NUMBER OF GIF FILES</span>
                    <input type="number" name="gif_file_num_" className="w-[58px] py-0 px-2"/>
                   </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12">
                  <div className="md:col-span-2">LOGO</div>
                  <label className="flex items-center">
                    <input type="checkbox" name="company_logo" />
                    <span className="ml-2">COMPANY LOGO (.EPS OR .AI)</span>
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="product_logo" />
                    <span className="ml-2">PRODUCT LOGO (.EPS OR .AI)</span>
                   </label>
                   
                </div>
                <div className="grid grid-cols-1 gap-2 mb-12">
                <div className="">STATEMENT</div>
                <label className="flex items-center">
                    <input type="checkbox" name="statement_best_website" />
                    <span className="ml-2">OBJECTIVE STATEMENT FOR CATEGORY: BEST WEBSITE</span>
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="statement_best_product_innovation" />
                    <span className="ml-2">OBJECTIVE STATEMENT FOR CATEGORY: BEST PRODUCT INNOVATION</span>
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="statement_best_promotion_health_hudration" />
                    <span className="ml-2">OBJECTIVE STATEMENT FOR CATEGORY: BEST PROMOTION OF HEALTH & HYDRATION</span>
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="statement_best_environmental" />
                    <span className="ml-2">OBJECTIVE STATEMENT FOR CATEGORY: BEST ENVIRONMENTAL PRACTICE/GREEN INITIATIVE</span>
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="statement_best_markeing" />
                    <span className="ml-2">OBJECTIVE STATEMENT FOR CATEGORY: BEST MARKETING CAMPAIGN</span>
                   </label>
                </div>
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
                      href="/private-policy-we.pdf"
                      className="text-pink"
                      target="_blank"
                    >
                      Privacy Policy
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
      </section> */}
    </div>
  );
};

AquaAwardsTemplate.propTypes = {
  title: PropTypes.string,
  info: PropTypes.object,
};
const AquaAwards = ({ location, data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout
      location={location.pathname}
      pageName={data.markdownRemark.frontmatter.title}
    >
      <AquaAwardsTemplate title={frontmatter.title} info={frontmatter.info} />
    </Layout>
  );
};

AquaAwards.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AquaAwards;

export const pageQuery = graphql`
  query AquaAwardsTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "aqua-awards-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
export const Head = () => (
  <SEO location={"/aqua-awards"} pageName={"Aqua Awards"} />
);
