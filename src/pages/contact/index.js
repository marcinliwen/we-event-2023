import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import phone from "../../img/phone.svg";
import subscribe from "../../img/subscribe.svg";
import location from "../../img/location.svg";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  /*  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/.netlify/functions/submission-created", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  }; */

  render() {
    return (
      <Layout pageName="Contact">
        <PageTitle title="Contact" />
        <section className="section py-12">
          <div className="container">
            <div className="content md:grid md:grid-cols-5">
              <div className="info pr-12 col-span-2 mb-16 md:mb-0">
                <h1 className="font-bold text-xl text-blue mb-4">
                  WATERCOOLERS EUROPE
                </h1>
                <div className="mb-12 text-sm">
                  <div className="mb-8 flex">
                    <img
                      src={phone}
                      alt="Newsletter"
                      style={{ width: "32px" }}
                      className="mr-4"
                    />
                    <div>
                      <p className="block text-lg">Phone</p>
                      <a rel="nofollow" href="tel:(+32) 2 880 20 34">
                        (+32) 2 880 20 34
                      </a>
                    </div>
                  </div>

                  <div className="mb-8 flex">
                    <img
                      src={subscribe}
                      alt="Newsletter"
                      style={{ width: "24px" }}
                      className="mr-4 "
                    />
                    <div>
                      <p className="block text-lg">Email</p>

                      <a
                        rel="nofollow"
                        href="mailto:info@watercoolerseurope.eu"
                      >
                        info@watercoolerseurope.eu
                      </a>
                    </div>
                  </div>
                  <div className="mb-8 flex">
                    <img
                      src={location}
                      alt="Newsletter"
                      style={{ width: "24px" }}
                      className="mr-4 "
                    />
                    <div>
                      <p className="block text-lg">Address</p>
                      <p>
                        1 Place des Barricades <br /> 1000 Brussels, Belgium
                      </p>
                    </div>
                  </div>
                  <div className="mb-8">
                    <a
                      rel="nofollow"
                      className="text-pink"
                      href="http://www.watercoolerseurope.eu"
                    >
                      www.watercoolerseurope.eu
                    </a>
                  </div>
                </div>
                <h1 className="font-bold text-xl text-blue ">
                  <span>IDEA &amp; MARKETING</span>
                </h1>
                <h2 className="font-bold text-md mb-4">
                  ORGANISER
                  <br />
                  FAIR OFFICE &amp; BOOKING
                </h2>
                <div className="text-sm">
                  <div className="mb-8 flex">
                    <img
                      src={phone}
                      alt="phone"
                      style={{ width: "32px" }}
                      className="mr-4"
                    />
                    <div>
                      <p className="block text-lg">Phone</p>
                      <a rel="nofollow" href="tel:+48 508 399 182">
                        +48 508 399 182
                      </a>
                    </div>
                  </div>
                  <div className="mb-8 flex">
                    <img
                      src={subscribe}
                      alt="emal"
                      style={{ width: "32px" }}
                      className="mr-4"
                    />
                    <div>
                      <p className="block text-lg">Email</p>
                      <a rel="nofollow" href="mailto:office@ideamarketing.pl">
                        office@ideamarketing.pl
                      </a>
                    </div>
                  </div>
                  <div className="mb-8 flex">
                    <img
                      src={location}
                      alt="address"
                      style={{ width: "32px" }}
                      className="mr-4"
                    />
                    <div>
                      <p className="block text-lg">Address</p>
                      <p>
                        ul. Jedności 118, <br />
                        05-506 Janczewice, Poland
                      </p>
                    </div>
                  </div>
                  {/* <div className="mb-8">
                    <a rel="nofollow"  className="text-pink" href="http://www.ideamarketing.pl">
                      www.ideamarketing.pl
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="col-span-3">
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                      <label className="label" htmlFor={"company_name"}>
                        Company name <span className="text-red-600">*</span>
                      </label>

                      <input
                        className="input"
                        type={"text"}
                        name={"company_name"}
                        onChange={this.handleChange}
                        id={"company_name"}
                        required={true}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="label" htmlFor={"contact_name"}>
                        Contact name <span className="text-red-600">*</span>
                      </label>

                      <input
                        className="input"
                        type={"text"}
                        name={"contact_name"}
                        onChange={this.handleChange}
                        id={"contact_name"}
                        required={true}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="label" htmlFor={"contact_position"}>
                        Contact position <span className="text-red-600">*</span>
                      </label>

                      <input
                        className="input"
                        type={"text"}
                        name={"contact_position"}
                        onChange={this.handleChange}
                        id={"contact_position"}
                        required={true}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="label" htmlFor={"email"}>
                        Email <span className="text-red-600">*</span>
                      </label>

                      <input
                        className="input"
                        type={"email"}
                        name={"email"}
                        onChange={this.handleChange}
                        id={"email"}
                        required={true}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="label" htmlFor={"phone_number"}>
                        Phone number <span className="text-red-600">*</span>
                      </label>

                      <input
                        className="input"
                        type={"text"}
                        name={"phone_number"}
                        onChange={this.handleChange}
                        id={"phone_number"}
                        required={true}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="label" htmlFor={"website"}>
                        Website <span className="text-red-600">*</span>
                      </label>

                      <input
                        className="input"
                        type={"text"}
                        name={"website"}
                        onChange={this.handleChange}
                        id={"website"}
                        required={true}
                      />
                    </div>
                    <div className="flex flex-col md:col-span-2">
                      <label className="label" htmlFor={"activity"}>
                        Activity <span className="text-red-600">*</span>
                      </label>

                      <select
                        name={"activity"}
                        onChange={this.handleChange}
                        id={"activity"}
                        required={true}
                      >
                        <option value="Bottler">Bottler</option>
                        <option value="Distributor">Distributor</option>
                        <option value="POU Operator">POU Operator</option>
                        <option value="Products and services supplier">
                          Products and services supplier
                        </option>
                      </select>
                    </div>
                    <div className="flex flex-col md:col-span-2">
                      <label className="label" htmlFor={"comments"}>
                        Comments
                      </label>

                      <textarea
                        className="textarea"
                        name={"comments"}
                        onChange={this.handleChange}
                        id={"comments"}
                        required={true}
                        cols="40"
                        rows="10"
                      />
                    </div>
                  </div>
                  <div className="my-12">
                    <label>
                      <input
                        type="checkbox"
                        name="accept_private_policy"
                        value="yes"
                        required
                      />
                      <span className="ml-2">
                        I hereby accept the{" "}
                        <a
                          rel="noreferrer"
                          href="/private-policy-we.pdf"
                          className="text-pink"
                          target="_blank"
                        >
                          PRIVACY POLICY
                        </a>{" "}
                        <span className="text-red-600">*</span>.{" "}
                      </span>
                    </label>
                  </div>

                  <button
                    className="bg-green hover:bg-greenhover py-4 px-8 text-white mx-auto my-4 block text-2xl w-full"
                    type="submit"
                  >
                    Submit information
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
