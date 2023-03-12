import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import subscribe from "../img/subscribe.svg";
import xmark from "../img/xmark.svg";

class MailChimpForm extends React.Component {
  constructor() {
    super();
    this.state = { email: "", result: null, isOpen: false };
  }
  _handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email);
    this.setState({ result: result });
  };

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleTogglePopup = (event) => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className="newsletter-container">
        <button
          onClick={this.handleTogglePopup}
          className="flex items-start text-blue"
          rel="noopener noreferrer"
        >
          <img
            src={subscribe}
            alt="Newsletter"
            style={{ width: "24px" }}
            className="mr-2 "
          />
          Newsletter
        </button>

        <div className={`popup-wrapper ${this.state.isOpen ? "is-open" : ""}`}>
          <div className="popup-body">
            <div className="popup-close" onClick={this.handleTogglePopup}>
              <img
                src={xmark}
                style={{ width: "18px", marginLeft: "auto", cursor: "pointer" }}
              />
            </div>
            <h3 className="font-bold mt-4 mb-12 text-2xl">
              Stay up to date, <br /> subscribe to the newsletter!
            </h3>
            <form onSubmit={this._handleSubmit}>
              <div className="flex flex-col gap-4">
                <label className="flex flex-col">
                  <span>
                    E-mail <span className="text-red-600">*</span>
                  </span>
                  <input
                    type="email"
                    required
                    onChange={this.handleChange}
                    className=""
                  />
                </label>
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
                          href="/private-policy-we.pdf"
                          className="text-pink"
                          target="_blank"
                          rel="noreferrer"
                        >
                          PRIVACY POLICY
                        </a>{" "}
                        <span className="text-red-600">*</span>.{" "}
                      </span>
                    </label>
                <button
                  className="py-3 px-4 bg-green text-white block hover:bg-greenhover ease-in-out duration-300 "
                  type="submit"
                >
                  Subscribe!
                </button>
              </div>
            </form>
            {this.state.result &&
              (this.state.result.result === "error" ? (
                <span className="alert">
                  You are already subscribing to our newsletter.
                </span>
              ) : (
                <span className="alert">
                  Thank you, from today you are subscribing to our newsletter.
                </span>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MailChimpForm;
