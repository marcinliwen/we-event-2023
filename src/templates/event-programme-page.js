import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PageSubtitle from "../components/PageSubtitle";
import Fee from "../components/Fee";
import { SEO } from "../components/Seo";
import TopBanner from "../components/TopBanner";

export const EventProgrammeTemplate = ({ title }) => {
  return (
    <div>
      <PageTitle title={title} />
      <TopBanner />
      {/*  <section>
        <div className="container">
          <div className="md:flex my-16 md:my-20">
            <div className="md:basis-1/2 px-8">
              <PreviewCompatibleImage
                imageInfo={{
                  image: event.image_conf,
                  alt: title,
                }}
              />
            </div>
            <div className="md:basis-1/2 px-8">
              <PreviewCompatibleImage
                imageInfo={{
                  image: event.image_work,
                  alt: title,
                }}
              />
            </div>
          </div>
        </div>
      </section> */}

      <section id="programm" className="bg-bggray py-12 mb-12">
        <div className="container">
          <div className="mb-12">
            {/*           <a href="/PROGRAMME_BROCHURE.pdf" className="py-3 px-4 bg-green text-white block mx-auto mb-12 hover:bg-greenhover ease-in-out duration-300 w-max" target="_blank" rel="noreferrer">Download Event Programme pdf</a>
             */}
            <h3 className="font-bold text-3xl text-blue mb-4">
              TUESDAY 24 OCTOBER 2023
            </h3>
            {/* <p className="mb-4">During the City Tour we will be visiting some of Lisbon’s prime attractions, such as: Avenida da Liberdade,
Baixa Pombalina or Belém as well as Mosteiro do Jeronimos.</p> */}
            <div className="grid grid-cols-[80px_1fr] gap-y-2 mb-8">
              <span>15:00</span>
              <span>EXECO meeting</span>
              <span>20:00</span>
              <span>Dinner</span>
            </div>
            <h3 className="font-bold text-3xl text-blue mb-4">
              WEDNESDAY 25 OCTOBER 2023
            </h3>
            <div className="grid grid-cols-[80px_1fr] gap-y-2 mb-8">
              <span>10:00</span>
              <span>Committee meetings</span>
              <span>15:45</span>
              <span>Pick up from the InterContinental hotel</span>
              <span>16:00</span>
              <span>City Tour</span>
              <span>20:00</span>
              <span>
                Dinner at the local restaurant for the city tour participants
              </span>
              <span>22:00</span>
              <span>Return to the InterContinental hotel</span>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="font-bold text-3xl text-blue mb-4">
              THURSDAY 26 OCTOBER 2023
            </h3>
            <h4 className="text-pink uppercase mb-4 text-xl">CONFERENCE</h4>
            <div className="grid grid-cols-[80px_1fr] gap-y-2 mb-8">
              <span className="w-12">09:00</span>
              <span>Registration & refreshments</span>
              <span>09:30</span>
              <span>Welcome</span>

              <span>09:40</span>
              <span>Presentations - part 1</span>
              <span>10:50 </span>
              <span>Hydration & refreshment break</span>
              <span>11:20</span>
              <span>Presentations - part 2</span>
              <span>13:00</span>
              <span>Lunch</span>
            </div>

            <h4 className="text-pink uppercase mb-4 text-xl">
              WORKSHOPS SESSIONS
            </h4>
            <div className="grid grid-cols-[80px_1fr] gap-y-2 mb-8">
              <span>14:00</span>
              <span>Presentations – part 1</span>

              <span>15:00</span>
              <span>Hydration & refreshment break </span>

              <span>15:30</span>
              <span>Presentations – part 2</span>
              <span>16:00</span>
              <span>
                <b>FINISH</b>
              </span>
            </div>
            {/*  <h4 className="text-pink uppercase mb-4 text-xl">
              WORKSHOPS – SESSION 2 -
              <span className="normal-case">Technical & Sustainability</span>
            </h4>
            <div className="grid grid-cols-[80px_1fr] gap-y-2 mb-8">
              <span>14:00</span>
              <span>
                <strong>
                How to use your system and data to prepare for the future: 
                </strong>
                <em> Francisco dos Santos, Activewhere</em>
              </span>
              <span>14:40</span>
              <span>
                <strong>
                Hygienic management of water dispensers: lessons learnt during the Covid-19 pandemic:

                </strong>
                <em>Alex Mezquida, Eden Springs and Antonio Borrell, Laboratorio Dr. Oliver Rodés</em>
                
              </span>
              <span>15:10</span>
              <span>Hydration and refreshment break</span>
              <span>15:30</span>
              <span> <b>Sustainable Hydration: How to introduce bottle filling stations and other solutions to your portfolio:</b><em> Mark Cross, MIW Water Cooler Experts</em>
</span>
              <span>16:00</span>
              <span><b>FINISH</b></span>
            </div> */}
            <h4 className="text-pink uppercase mb-4 text-xl">
              GALA DINNER & AQUA AWARDS
            </h4>
            <div className="grid grid-cols-[80px_1fr] gap-y-2 mb-8">
              <span>19:00</span>
              <span>
                Transfer from the InterContinental hotel to the Gala Dinner
                Venue
              </span>
              <span>19:30</span>
              <span>
                <b>Gala Dinner with Aqua Awards</b> including pre-dinner drinks
                reception, 4 course meal with wine and entertainment
              </span>
              <span>01:00</span>
              <span>Return to the InterContinental hotel</span>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="font-bold text-3xl text-blue mb-4">
              FRIDAY 27 OCTOBER 2023
            </h3>
            <div className="grid grid-cols-[80px_1fr] gap-y-2 mb-8">
              <span>09:00</span>
              <span>Open</span>
              <span></span>
              <span>
                The coffee breaks & buffet lunch will be served for exhibitors
                and visitors
              </span>
              <span>16:00</span>
              <span>
                <b>FINISH</b>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="plan-content">
            <div className="cart md:flex mb-16 md:mb-20  md:gap-8">
              <div className="md:basis-1/2 ">
                <StaticImage src="../img/programm/city_tour.png" alt="Vienna" />
              </div>
              <div className="md:basis-1/2 flex flex-col justify-center	">
                <h3 className="font-bold mb-4 mt-4 text-2xl">
                  25 October - City Tour
                </h3>
                <p className="text-base mb-2 ">
                  Vienna is considered one of the most beautiful cities in the
                  world and is just waiting to be explored by you!{" "}
                </p>
                <p className="mb-2">
                  Join our amazing city tour and discover one of the most
                  spectacular cities in the world and its breathtaking
                  monuments.
                </p>
                <p>
                  In the evening, together with the other tour participants, you
                  can enjoy a dinner in one of the finest local restaurant.
                </p>
              </div>
            </div>
            <div className="cart md:flex mb-16 md:mb-20  md:gap-8 ">
              <div className="md:basis-1/2 ">
                <StaticImage
                  src="../img/programm/conference.png"
                  alt="Conference programm"
                />
              </div>
              <div className="md:basis-1/2 flex flex-col justify-center	">
                <h3 className="font-bold mb-4 mt-4 text-2xl">
                  26 October- Conference
                </h3>
                <p className="text-base mb-2 ">
                  Take part in the high-quality conference programme that will
                  give you insights benefitting your everyday work.
                </p>
                <p className="mb-2">
                  Hear leading international experts present new research and
                  trends in an intensive programme of lectures.
                </p>
              </div>
            </div>
            <div className="cart md:flex mb-16 md:mb-20  md:gap-8">
              <div className="md:basis-1/2 ">
                <StaticImage
                  src="../img/programm/workshops.png"
                  alt="workshops"
                  placeholder="none"
                />
              </div>
              <div className="md:basis-1/2 flex flex-col justify-center	">
                <h3 className="font-bold mb-4 mt-4 text-2xl">
                  26 October - Workshops
                </h3>
                <p className="text-base mb-2 ">
                  Workshops will help you grow and improve your business.
                </p>
                <p className="text-base mb-2 ">
                  Here you will gain practical knowledge from the most
                  experienced experts in our industry.
                </p>
              </div>
            </div>
            <div className="cart md:flex mb-16 md:mb-20  md:gap-8">
              <div className="md:basis-1/2">
                <StaticImage
                  src="../img/programm/gala_dinner.png"
                  alt="Sud Lisboa"
                  placeholder="none"
                />
              </div>
              <div className="md:basis-1/2 flex flex-col justify-center">
                <h3 className="font-bold mb-4 mt-4 text-2xl">
                  26 October - Aqua Awards & Gala Dinner
                </h3>
                <p className="text-base mb-2 ">
                  Don’t miss the highlight moment of the WE event.
                </p>
                <p className="text-base mb-2 ">
                  Cement relationships at Europe’s premier gala dinner. Bring
                  your partner to share in the excitement.
                </p>
                <p className="text-base mb-2 ">
                  The winners of the Aqua Awards competition will be announced
                  at the Gala Dinner.
                </p>
                <p className="text-base mb-2 ">
                  This year, on the occasion of WE's 30th anniversary, you will
                  be able to taste the finer side of Vienna life: from
                  sophisticated reception, exclusive dinner to the high-powered
                  show.
                </p>
                <p className="text-base mb-2 ">
                  <b>DRESS CODE:</b> semi formal, festive attire
                </p>
              </div>
            </div>
            <div className="cart md:flex mb-16 md:mb-20  md:gap-8">
              <div className="md:basis-1/2 ">
                <StaticImage
                  src="../img/programm/trade-fair.png"
                  placeholder="none"
                  alt="Trade fair Programm"
                />
              </div>
              <div className="md:basis-1/2 flex flex-col justify-center	">
                <h3 className="font-bold mb-4 mt-4 text-2xl">
                  27 October - Trade Fair
                </h3>
                <p className="text-base mb-2 ">
                  WE International Trade Fair is a great opportunity to meet in
                  person with your customers and business partners, show your
                  products and services to a targeted, industry specific,
                  Europe-wide audience.
                </p>
                <p className="text-base mb-2 ">
                  Strengthen your business relationship and reach out to new
                  partners and contact.
                </p>
              </div>
            </div>
            {/* {eventList &&
              eventList.map((item) => (
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
      <PageSubtitle title="Registration Fees" />
      <Fee />
      {/*   <PageSubtitle title="Presentations & Speakers" /> */}
      {/*   <section>
        <div className="container">
          <div className="py-16">
            <h2 className="text-pink uppercase text-3xl mb-4">
              Conference speakers
            </h2>
            <div className="speacer-person md:flex mb-16 person-separator">
              <div className="md:basis-48  mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Terence-Mauri.jpg" placeholder="none" alt="Terence Mauri"/>
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Terence Mauri
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                  Author <em>How To Win In The Age of Disruption</em>
                  </span>
                  
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold md:flex">
                  <span className="mr-2">Presentation: </span>{" "}
                  <span className="uppercase">
                  Lead from the future: Growth, opportunity and resilience in the 21st Century Watercooler Industry 
                  </span>
                </p>
                <p className="text-blue mb-4">How do leaders harness disruption as a tailwind for learning, growth and reimagination?
Industry disruption, new technologies, and agile business models are opening up high
-potential opportunities for new market creation and growth and yet 3/4 leaders struggle
to outpace the forces of disruption. New contexts demand new mindsets and brave new
questions. What are the new leadership mindsets to lead from the future in spite of our
current success? Terence Mauri will guide delegates on the journey to reimagine and sustain
a growth-led, adaptive and resilient future.</p>
                <p className="">
                Terence Mauri is the founder of Hack Future Lab, a global management think tank that helps
leaders to turn headwinds and uncertainty into bold action. Terence is a visiting Professor
at IE Business School in Madrid and Massachusetts Institute of Technology and has been
described as ‘an outspoken and influential thinker on the future of work and leadership’ by
Thinkers50. His new book ‘The 3D Leader: take your leadership to the next dimension’ has
been described as a ‘powerful call to action for leaders to navigate economic headwinds’.
                </p>
              </div>
            </div>
            <div className="speacer-person md:flex mb-16 person-separator">
              <div className="md:basis-48  mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Richard.png" placeholder="none" alt="Richard Hall"/>
                <div className=" md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Richard Hall
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    Chairman Zenith Global
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold mb-2 md:flex">
                  <span className="mr-2">Presentation:</span>{" "}
                  <span className="uppercase">
                  LATEST EUROPEAN MARKET AND INDUSTRY DEVELOPMENTS AND OUTLOOK
                  </span>
                </p>
                <p className="text-blue mb-4">
                Statistics and insights for bottled and mains-fed water dispensers as well as integrated
tap systems in East and West Europe to give a full overview for future business planning.
Delegates will receive a copy of a special WE member summary report at the conference.
                </p>
                <p className="mb-2">
                Richard Hall is an acknowledged expert on the international food and drinks sector, chairing
and speaking at numerous industry conferences. In 1991 he formed Zenith as a specialist
business consultancy for the food and drink industries. The company now has more than
1000 clients in over 50 countries. He also chairs FoodBev Media, which he founded in 2000.
Its team publishes three business journals, including “Refreshment”, and manages the
foodbev.com website.
                </p>
              </div>
            </div>
            <div className="speacer-person md:flex mb-16 person-separator">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Bill-Bruce.png" placeholder="none" alt=" Bill Bruce"/>
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Bill Bruce
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    Senior Consultant Bill Bruce Communications
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold mb-2 md:flex">
                  <span className="mr-2">Presentation:</span>{" "}
                  <span className="uppercase">SUSTAINABLE FUTURE</span>
                </p>
                <p className="mb-4 text-blue">
                Bill Bruce considers a ‘Sustainable future’ for the European water cooler industry, looking at:
the need for a circular economy; the language we use when talking about ‘green’; carbon
footprints and carbon neutrality; the realities of the environmental sustainability landscape;
the effects of European legislation consumer opinion; and what the future holds…
                </p>
                <p className="mb-2">
                Bill Bruce has a long history of working in the watercooler sector, having been the editor of
Europe’s first dedicated sector magazine: H20 Europe (over 20 years ago), and more recent
sector publications such as The Point, Cooler Innovation, Cooler Plus and Refreshment.
Bill left FoodBev in 2016 and now runs his own PR, communications and marketing
consultancy, specialising in clients in the food and beverage, and food packaging industries.
With 40 years’ experience, Bill Bruce is an all-rounder who started his career as a graphic
designer, before moving into marketing, PR and journalism. For the past 25 years his main
focus has been the food and beverage industry with a particular interest in packaging and
environmental sustainability
                </p>
                
              </div>
            </div>
            
            <div className="speacer-person md:flex mb-16 ">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Goncalo-Tremoceiro.png" placeholder="none" alt="Gonçalo Tremoceiro"/>
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Gonçalo Tremoceiro
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    General Manager for Culligan Portugal and Iberian Director
                    at Acquajet
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
              <p className="text-blue font-bold mb-2 md:flex">
                  <span className="mr-2">Presentation:</span>
                  <span className="uppercase">
                  THE 21ST CENTURY WATERCOOLER INDUSTRY – REALITY AND TRENDS
                  </span>
                </p>
                <p className="text-blue mb-4">
                How is the watercooler industry adapting to the technologies of other industries and what are
the trends? How are Acquajet and Fonte Viva managing their businesses with the support of
technology?
                </p>
                <p>Executive Board Member | General Manager for Culligan Portugal and Iberian Director at
Acquajet. Fonte Viva General Manager from 2010 to 2021. B2B Commercial Manager at
Nespresso Portugal from 2008 to 2010. Sales & Marketing Manager at Grupo Sumol (Pepsi
bottler) from 2002 to 2008. Brand Manager at L’Oréal Portugal from 1999 to 2002</p>
                
              </div>
            </div>
            <div className="speacer-person md:flex mb-16">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Miguel-Ribeiro-Ferreira.png" placeholder="none" alt="Miguel Ribeiro Ferreira"/>
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Miguel Ribeiro Ferreira
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    Culligan Iberia M&A Advisor
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p>Culligan Iberia M&A Advisor. Pioneer in the Watercooler business in Portugal and Spain
Founding partner of Bebágua (Portugal) in 1996. Chairman of Acquajet (Spain) from 2000
to 2021 and Fonte Viva (Portugal) from 2005 to 2021. Business Angel and Investor in
various fields of activity, namely in the areas of Real Estate development, Start-Ups of various
activities, industry; Participates in various social responsibility projects.</p>
                
              </div>
            </div>

           
            <h2 className="text-pink uppercase text-3xl mb-4">
              Workshops speakers
            </h2>
            <p className="text-blue font-bold mb-4 text-xl">
              SESSION 1 - Business Strategy
            </p>
            <div className="speacer-person md:flex mb-16 person-separator">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Peter-Hogervorst.png" placeholder="none" alt="Peter Hogervorst"/>
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Peter Hogervorst
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    Managing Director, Dolphin Water
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold md:flex">
                  <span className="mr-2">Presentation:</span>
                  <span className="uppercase">
                  AIR PURIFIERS; AN ADDITION TO YOUR WATER DISPENSER BUSINESS
                  </span>
                </p>
                <p className="text-blue mb-2">Indoor air quality is affected by many factors and activities. The presence of several people in
poorly ventilated indoor rooms quickly leads to ‚stale air’ Air purifiers offer a simple, effective
and inexpensive solution to significantly improve indoor air quality. This will lead to more
concentrated and fitter employees and fewer problems with respiratory problems such as
asthma and allergies. The business model is comparable to the water cooler business model.
Air cleaners only need a power socket, can be sold or rented, and filter change.</p>
                <p className="mb-2">Peter Hogervorst has spent all his working life in bottling. Starting at Heineken in 1987 and
moving to the 5 Gallon industry with Dolphin in 2000, he has experience in bottling beer, soft
drinks and, of course, water. In 2007 he completed the acquisition of Dolphin Production in
Mierlo, Netherlands. In 2012 he acquired Porla Brunn, Sweden. In 2015 the German branch
was founded in a joint venture with family owned Teamblue resulting in Teamblue Dolphin with
more than 100 years of experience in the watercooler industry, especially in bottling. In 2021
the former Kalimba spring in Lanaken, Belgium was acquired and Dolphin Bottling Belgium was
founded. Every year around 100 million litres of water are filled by the group for more than 50
distributors in 9 countries from the North Cape to the Alps. In 2020 Teamblue Dolphin started
with the sale of Air Cleaners in Germany, the Netherlands and Belgium resulting in over 1500
installations.</p>
              </div>
            </div>
            <div className="speacer-person md:flex mb-16 person-separator">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Nick-Swan.png" alt="Nick Swan"/> 
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Nick Swan
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    Managing Director, Love Water
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold  mb-2 smd:flex">
                  <span className="mr-2">Presentation:</span>
                  <span className="uppercase">
                    The Home Water Dispenser Market – Lessons learnt from around
                    the world
                  </span>
                </p>
                <ul className="list-disc mb-4 pl-6 text-blue">
                  <li>
                    Brief recap on Middle East, USA and UK experience in this
                    industry.
                  </li>
                  <li>Love Water and the UK Home market</li>
                  <li>The advantages of having a Home customer base</li>
                  <li>Choosing your ideal customer profile</li>
                  <li>Choosing your Product Range</li>
                  <li>Rent or Sell? – That is the question</li>
                  <li>Home Service Contracts</li>
                  <li>Minimising bad debts</li>
                  <li>Sanitising Home dispensers</li>
                  <li>Delivery Schedules and Service Levels</li>
                  <li>Customer communication</li>
                  <li>Marketing – What works and what doesn’t.</li>
                  <li>Efficiency Stats and Customer Turnover</li>
                  <li>Impact from the Pandemic</li>
                  <li>The future</li>
                </ul>
                <p className="">
                  Nick entered the water dispenser industry in 1985 when he
                  joined Ionics/Aquacool in a sales and marketing role to help
                  build a new business supplying homes and businesses in Bahrain
                  with water dispensers. This was followed by managing their
                  operation in Jeddah, Saudi Arabia, and eventually working in
                  the US running their Baltimore operation.
                </p>
                <p className="">
                  When Nick decided to head back to the UK, it was in the early
                  days of the industry there in 1990. He joined a small London
                  business called Aquaporte as Sales & Marketing Director. This
                  business was eventually sold, and in 1996 Nick started a
                  London watercooler business called Office Refreshments Ltd.
                  This was sold in 2004, and after a few years Nick re-entered
                  the industry starting Love Water.
                </p>
                <p className="">
                  Love Water was originally geared towards building a home
                  customer base but over time this has expanded into B2B, but
                  the home customers still retain over 25% of the business
                  income.
                </p>
                <p className="mb-2">
                  Nick will give you an insightful view of his experience in the
                  home water dispenser business in the Middle East, the USA and
                  in England. He will give his views on the dos and don’ts, and
                  why in today’s Hybrid workforce, there has never been a better
                  time to market to this sector.
                </p>
              </div>
            </div>
            <div className="speacer-person md:flex mb-16 person-separator">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Debora-Screpanti.png"  alt="Debora Screpanti"/> 
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                  Debora Screpanti
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                  Marketing Managera, <br/>Blupura
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold md:flex">
                  <span className="mr-2">Presentation:</span>
                  <span className="uppercase">IOT (INTERNET OF THINGS) TECHNOLOGY IN THE WATERCOOLER
INDUSTRY: OPPORTUNITIES, TRENDS AND INNOVATIONS</span>
                </p>
                <p className="text-blue mb-4">More and more companies are looking for innovative solutions to optimize their service and offer
to their customers real time assistance in the most sustainable way: is the IoT their future?
This presentation covers the advantages for customers and for service companies, in terms of
opportunities, savings and image.</p>
                <p className="mb-2">Blupura is an Italian manufacturing company of mains-fed water dispensers. With a Masters
Degree in International Economics and Business, Debora joined Blupura in 2013. She is now
one of the most longstanding employees of Blupura and has actively contributed to its development; one of the major players of the water dispenser industry.</p>
              </div>
            </div>
            <p className="text-blue font-bold mb-4 text-xl">
              SESSION 2 - TECHNICAL & SUSTAINABILITY
            </p>
            
            <div className="speacer-person md:flex mb-16 person-separator">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/MarkCross.png"  alt="Mark Cross"/> 
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Mark Cross
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    Managing Director, MIW Water Cooler Experts
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold md:flex">
                  <span className="mr-2">Presentation:</span>
                  <span className="uppercase">Sustainable Hydration: How to introduce bottle filling stations and other solutions to your portfolio.</span>
                </p>
                <p className="text-blue mb-4">We have long since known that single-use plastic bottles have had a huge impact on our environment and a major contributor to the 380 million metric tonnes of plastic produced annually.  But could there be a way to encourage reuse with a refill revolution?  Hydration Solution expert, Mark Cross, talks through some examples of ingenious bottle filling products and initiatives, showing that small changes businesses are making to reach their sustainability goals can have a huge impact.</p>
                <p className="mb-2">Mark is incredibly enthusiastic about the water dispenser industry.  He has over 20 years commercial experience in the UK water dispenser market, starting with Aquacool and Angel Springs, now with Waterlogic.    Having worked in field sales, key account management, inside sales, digital, CRM, PPC and SEO he now heads up Waterlogic UK sales and marketing and is Managing Director of MIW Water Cooler Experts.  </p>
              </div>
            </div>
            <div className="speacer-person md:flex mb-16 person-separator">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/FranciscoDosSantos.png" placeholder="none" alt="Francisco dos Santos"/>
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Francisco dos Santos
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                  Co-Founder and Managing
Director, Activewhere
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold md:flex">
                  <span className="mr-2">Presentation:</span>
                  <span className="uppercase">
                  HOW TO USE YOUR IT SYSTEM AND DATA TO PREPARE FOR THE FUTURE
                  </span>
                </p>
                <p className="text-blue mb-4">Whatever your plan is for the future: be it growing your business, improving processes or
even preparing to sell sometime in the future, the quality and clarity of your data is vital and
will make a huge difference.
Sometimes, you need to hire experts to cleanse data and your processes. Other times your
team needs to capture the right information, at the right time, ensuring information is up to
date and helpful; allowing your team and business to be ready for the next level.
It doesn’t matter if you know your business by heart, if your systems don’t allow you to sell
your story</p>
<p className="mb-2">Francisco is Co-founder and Managing Director of Activewhere since 1998. He has managed
project after project, analyzing and coordinating the development and the implementation
of thousands of ideas, from hundreds of people, from many world regions, all of them
operating in the Water industry. Looking into the data and business processes of customers
and prospects to find ways to take advantage of the historical data and the culture of the
organisations, converting the software implementation projects into change and improvement.
Activewhere has worked with some of the most important players in the world in the Water
Industry, in more than thirty countries. Activewhere and their customers have liaised and
worked closely to achieve the best results for the future.</p>
              </div>
            </div>
            <div className="speacer-person md:flex mb-16">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Alex-Mezquida.png" alt="Alex Mezquida" />
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Alex Mezquida
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    Group Quality Director <br />
                    Eden Springs
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold md:flex">
                  <span className="mr-2">Presentation:</span>
                  <span className="uppercase">
                  HYGIENIC MANAGEMENT OF WATER DISPENSERS DURING COVID-19 PANDEMIC
                  </span>
                </p>
                <p className="text-blue mb-4">The recent pandemic had a far-reaching global effect on the population and business. This
workshop will provide a theoretical and practical overview of Covid-19 in Watercooler Industry.
Toni will give a general overview focusing on the virus characteristics and what is needed to
implement precautionary measures.
Alex will share some practical experiences implementing measures in different countries in
Europe during the pandemic. He will share how the virus can evolve and how these experiences
may be useful for any similar situation in the future. This will include work carried out by
Watercoolers Europe to prevent a watercooler ban in some markets during the pandemic.</p>
<p className="mb-2">Alex is based in Barcelona, Spain. He has extensive experience in food and water quality
systems. In March 2020, at the beginning of the pandemic in Spain, he was nominated
President of Eden Continental Europe Covid-19 Crisis Committee, working closely with Primo
Global Covid-19 Crisis team. He was in charge of the creation and implementation of
all Eden-Primo Covid19 Continental Europe Anti-covid procedures to protect Eden Springs
associates and customers against the virus.
Alex serves as writer or co-writer of different Audit Quality Checklists, Technical Manuals,
Sanitation Validation Protocols for different local and European associations. He has been
Vice-Chair of a number of Standards Committees for local and European Associations.
Currently he is Chair of the WE Standards & Technical Committee and a co-opted WE Board
member since April 2010.
Alex holds University degrees in Pharmacy and Food Science & Technology from the
University of Barcelona (Spain) and a PDD Executive Education from IESE Business School
University of Navarra (Spain) and MRPharmS UK from 1998 to 2001.
Prior to joining Eden Springs – Primo Water Europe as a Group Quality Director, he worked for
14 years with Oliver Rodés Laboratory, Barcelona (Spain) where he had many roles: Bottled
Water & Spas Manager, Quality Manager, Training and Audit Manager, R&D Project Manager,
Product Development Director and Management Committee Member. After that he joined NSF
as Technical Director for 2 years providing auditing services for beverage, water contact and
food and dietary supplements programmes. </p>
              </div>
            </div>
            <div className="speacer-person md:flex mb-16">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Antonio-Borrell.png"  alt="Dr. Antonio Borrell"/> 
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                  Dr. Antonio Borrell
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                  Scientific & Innovation
Director
Laboratorio Dr Oliver
Rodés
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
               <p className="mb-2">Toni has a degree and PhD in Pharmacy, Masters in Technology & Science Food.
He has been working for Laboratorio Dr. Oliver Rodés as a Bottled Water Manager since 2001.
Toni is a Member of the Quality & Regulatory Committee of Natural Mineral Waters Europe,
he is Deputy Chair of the WE Standards & Technical Committee and a member of the WE
Education & Audit Committee. He has given various lectures about water at meetings and
congresses. He has participated in research projects as a main researcher in relation to
bottled water and packaging, and he has published several scientific papers. He has
participated in many interviews on the radio and TV related bottled water.</p>
              </div>
            </div>
            
           
            
          </div>
        </div>
      </section> */}
    </div>
  );
};

EventProgrammeTemplate.propTypes = {
  title: PropTypes.string,
  event: PropTypes.object,
  eventList: PropTypes.array,
  conference: PropTypes.array,
  workshops: PropTypes.array,
};

const EventProgramme = ({ location, data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout
      location={location.pathname}
      pageName={data.markdownRemark.frontmatter.title}
    >
      <EventProgrammeTemplate
        title={frontmatter.title}
        event={frontmatter.event}
        eventList={frontmatter.eventList}
        conference={frontmatter.conference}
        workshops={frontmatter.workshops}
      />
    </Layout>
  );
};

EventProgramme.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default EventProgramme;

export const pageQuery = graphql`
  query EventProgrammeTemplate {
    markdownRemark(
      frontmatter: { templateKey: { eq: "event-programme-page" } }
    ) {
      frontmatter {
        title
        event {
          image_conf
          image_work
        }
        eventList {
          image
          title
          description
        }
        conference {
          image
          name
          role
          resume
          title
          description
        }
        workshops {
          image
          name
          role
          resume
          title
          description
        }
      }
    }
  }
`;
export const Head = () => (
  <SEO location={"/event-programm"} pageName={"Event Programm"} />
);
