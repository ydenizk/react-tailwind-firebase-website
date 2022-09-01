import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

export default function footer() {




  return (
    <footer className="bg-neutral-200 flex justify-center align-center ">
      <div className="max-w-6xl grid  grid-cols-2 bg-neutral-200 p-4">
        <div className="tracking-wider font-light text-xs font-roboto grid grid-rows-2 py-2">
          <p className="w-1/2 py-4 border-b border-neutral-400 tracking-wide leading-5 text-sm  ">
            ANCIENT Turkey is an independent media company championing outdoor
            lifestyle, environmental stewardship and regenerative living. We
            encourage people to connect with the natural world in meaningful
            ways so they may become active stewards of our planet.
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
                in Ancient Turkey, we'd love to hear from you. Please email{" "}
                <span className="font-medium opacity-70 tracking-wide leading-5">
                  ydkurt@yahoo.com
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="  py-2 p-4 ">
          <div className="grid grid-cols-3 h-3/4 place-content-center ">
            <div>
              <h3 className="text-sm font-roboto">TOP PLACES</h3>
              <ul className="list-none">
                <li>
                  <a
                    href=""
                    className="font-light text-sm font-roboto  hover:text-amber-900 transition-all"
                  >
                    Pergamon
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-light text-sm font-roboto  hover:text-amber-900  transition-all"
                  >
                    Milet
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-light text-sm font-roboto  hover:text-amber-900  transition-all"
                  >
                    Perga
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-light text-sm font-roboto    transition-all"
                  >
                    Ephesus
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-roboto">EXPLORE</h3>
              <ul>
                <li>
                  <a
                    href=""
                    className="font-light text-sm font-roboto hover:text-amber-900  transition-all"
                  >
                    Regions
                  </a>
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
                  <a
                    href=""
                    className="font-light text-sm font-roboto hover:text-amber-900  transition-all"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-roboto">ABOUT US</h3>
              <ul>
                <li>
                  <a
                    href=""
                    className="font-light text-sm font-roboto hover:text-amber-900  transition-all"
                  >
                    About
                  </a>
                </li>
                <li className="font-light text-sm font-roboto hover:text-amber-900   transition-all">
                  <a
                    href=""
                    className="font-light text-sm font-roboto hover:text-amber-900   transition-all"
                  >
                    {" "}
                    Twitter
                  </a>
                </li>
                <li className="font-light text-sm font-roboto hover:text-amber-900   transition-all">
                  <a
                    href=""
                    className="font-light text-sm font-roboto hover:text-amber-900   transition-all"
                  >
                    Privacy & Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-base flex justify-end align-center ">
            <h4 className="font-light text-xs font-roboto  pt-20 mr-2">
              Design & Build by Ydenizk{" "}
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
