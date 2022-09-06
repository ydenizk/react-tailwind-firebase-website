import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral-200 flex justify-center align-center ">
      <div className="max-w-6xl grid  grid-cols-2 bg-neutral-200 p-4">
        <div className="tracking-wider font-light text-xs font-roboto grid grid-rows-2 ">
          <p className="w-1/2 py-4 border-b border-neutral-400 tracking-wide leading-5 text-sm  ">
            ANCIENT Asia Minor is an independent individual initiative to
            promote ancient sites and cities of various civilizations that lived
            in Asia Minor throughout centuries.You can find basic and clear
            information about most of the top places including brief
            history,location and options how to visit. As Asia Minor is one of
            the oldest residental land in the world,it is the home of various
            civilizations.For this reason,we keep adding new spots regularly.
          </p>
          <div className="grid grid-rows-2">
            <div className="w-1/2 border-b border-neutral-400">
              <h3 className="font-medium mb-2 tracking-wide leading-5">
                General Enquiries
              </h3>
              <p className="tracking-wide leading-5">
                We’d love to hear from you, just email us at{" "}
                <span className="font-medium opacity-70 tracking-wide leading-5">
                  ydkurt@yahoo.com
                </span>
              </p>
            </div>

            <div className="py-2 w-1/2 tracking-wide leading-5">
              <h3 className="font-medium mb-2 tracking-wide leading-5 ">
                Advertise with us
              </h3>
              <p className="tracking-wide leading-5">
                If you are interested in partnering, sponsoring or advertising
                in Ancient Asia minor, we'd love to hear from you. Please email{" "}
                <span className="font-medium opacity-70 tracking-wide leading-5">
                  ydkurt@yahoo.com
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="  p-2 ">
          <div className="grid grid-cols-3 h-3/4 place-content-center ">
            <div>
              <h3 className="text-sm font-roboto">TOP PLACES</h3>
              <ul className="list-none">
                <li>
                  <Link
                    to="/pergamon"
                    className="font-light text-sm font-roboto  hover:text-amber-900 transition-all"
                  >
                    Pergamon
                  </Link>
                </li>
                <li>
                  <Link
                    to="/miletus"
                    className="font-light text-sm font-roboto  hover:text-amber-900  transition-all"
                  >
                    Miletus
                  </Link>
                </li>
                <li>
                  <Link
                    to="/perga"
                    className="font-light text-sm font-roboto  hover:text-amber-900  transition-all"
                  >
                    Perga
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ephesus"
                    className="font-light text-sm font-roboto    transition-all"
                  >
                    Ephesus
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-roboto">EXPLORE</h3>
              <ul>
                <li>
                  <Link
                    to="/regios"
                    className="font-light text-sm font-roboto hover:text-amber-900  transition-all"
                  >
                    Regions
                  </Link>
                </li>
                <li>
                  <a
                    href=""
                    className="font-light text-sm font-roboto hover:text-amber-900  transition-all"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="font-light text-sm font-roboto hover:text-amber-900  transition-all"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-roboto">ABOUT US</h3>
              <ul>
                <li>
                  <Link
                    to="/about"
                    className="font-light text-sm font-roboto hover:text-amber-900  transition-all"
                  >
                    About
                  </Link>
                </li>
                <li className="font-light text-sm font-roboto hover:text-amber-900   transition-all">
                  <a
                    href="https://twitter.com/home?lang=en"
                    target="_blank"
                    className="font-light text-sm font-roboto hover:text-amber-900   transition-all"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-base flex justify-end align-center pt-2 ">
            <h4 className="font-light text-xs font-roboto  pt-20 mr-2">
              Design & Build by Y.DenizK
            </h4>

            <h4 className="font-light text-xs font-roboto pt-20 ml-4 mr-12">
              2022 Ancient Turkey
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
