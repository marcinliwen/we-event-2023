import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Sponsors = class extends React.Component {
  render() {
    return (
      <section id="sponsors" className="">
        <div className="container">
          <div className="flex flex-col md:flex-row my-12">
            <div className="">
              <h3 className="mb-4">EVENT SPONSORS:</h3>
              <ul className="md:flex">
                {/*    <li>
                <StaticImage
                  src="../img/sponsors/aboutwater.png"
                  placeholder="none"
                  alt="Aboutwater"
                  className="max-w-[200px] block mx-auto"
                />
              </li>
              <li>
                <StaticImage
                  src="../img/sponsors/activewhere.png"
                  placeholder="none"
                  alt="Activewhere"
                  className="max-w-[200px] block mx-auto"
                />
              </li>
              <li>
                <StaticImage
                  src="../img/sponsors/blupura.png"
                  placeholder="none"
                  alt="Blupura"
                  className="max-w-[200px] block mx-auto"
                />
              </li> */}
                <li>
                  <StaticImage
                    src="../img/sponsors/culligan.png"
                    placeholder="none"
                    alt="Culligan"
                    className="max-w-[200px] block mx-auto"
                  />
                </li>
                {/* <li>
                <StaticImage
                  src="../img/sponsors/greif.png"
                  placeholder="none"
                  alt="GREIF"
                  className="max-w-[200px] block mx-auto"
                />
              </li>
              <li>
                <StaticImage
                  src="../img/sponsors/h2odirect.png"
                  placeholder="none"
                  alt="H2O direct"
                  className="max-w-[200px] block mx-auto"
                />
              </li> */}
              </ul>
            </div>
            {/* <div>
              <h3 className="mb-4">WE Media Partner:</h3>
              <StaticImage
                src="../img/media/refreshment.png"
                placeholder="none"
                alt="Refreshment"
                className="max-w-[200px] block mx-auto"
              />
            </div> */}
          </div>
        </div>
      </section>
    );
  }
};
export default Sponsors;
