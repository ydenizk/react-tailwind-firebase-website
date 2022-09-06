import React, { useState } from "react";
import { FaAngleDoubleDown, FaRegClone } from "react-icons/fa";
import { Link } from "react-router-dom";

import ads1 from "./../assets/ads-1.jpg";
import ads2 from "./../assets/ads-2.jpg";
import ads3 from "./../assets/ads-3.jpg";
import ads4 from "./../assets/ads-4.jpg";
import ads5 from "./../assets/ads-5.jpg";
import adsBig from "./../assets/ads-big.jpg";

export default function Ads({ showp, setShowP }) {
  return (
    <main className="my-8 mt-28 flex justify-center align-center text-center bg-neutral-100 md:mt-36 ">
      <div className=" max-w-6xl pt-4  ">
        <div className="mt-6 text-center">
          <h2 className="mb-2 font-roboto ">Featured Places</h2>
          <button className="text-center w-full ">
            <FaAngleDoubleDown className="my-0 mx-auto " />
          </button>

          <div>
            <div className="grid  grid-cols-3 gap-5 my-4 mt-12 md:grid-cols-1 md:px-1">
              <div className="w-91 h-53 relative md:hidden">
                {/* <div className="absolute text-white w-full  pt-4 text-center top-12  z-10 hover:translate-y-4 transition duration-700 ease-in-out "> */}
                <h3 className=" absolute text-xl uppercase font-medium  top-16  text-center w-full text-white z-5 lg:top-12">
                  Troy
                </h3>
                <p className=" absolute text-xl uppercase font-bold whitespace-nowrap tracking-wide top-24 lg:top-20 w-full text-white z-5 font-roboto lg:text-lg">
                  one of the most famous
                </p>
                <p className=" absolute text-xl uppercase font-bold   tracking-wide top-32 lg:top-28 w-full text-white z-5 font-roboto lg:text-lg">
                  ancient site
                </p>
                <Link to="/didyma" className="z-50 absolute bottom-4 right-4">
                  <FaRegClone className=" text-right   text-neutral-200 text-xl z-5  hover:text-orange-200  transition  duration-200" />
                </Link>
                <img src={ads1} className=" w-91 h-53 object-cover z-5  " />

                <div className="w-91 h-53 absolute top-0 left-0  bg-slate-100 w-full h-full opacity-10  hover:opacity-0 transition-all duration-200  "></div>
              </div>

              <div className="w-91 h-53 relative">
                <h3 className="absolute text-xl uppercase font-medium top-16  text-center w-full text-white z-5 lg:top-12">
                  aizanoi
                </h3>
                <p className="absolute  text-xl uppercase font-bold whitespace-nowrap tracking-wide top-24 lg:top-20 w-full text-white z-5 font-roboto lg:text-lg">
                  first stock exchange
                </p>
                <p className="absolute  text-xl uppercase font-bold  mb-2 tracking-wide top-32 lg:top-28  w-full text-white z-5 font-roboto lg:text-lg">
                  market of the world
                </p>
                <Link
                  to="/aizanoi"
                  className="z-50 absolute bottom-4 right-4 md:right-44"
                >
                  <FaRegClone className=" text-right   text-neutral-200 text-xl z-5  hover:text-orange-200  transition  " />
                </Link>

                <img
                  src={ads2}
                  alt="nat2"
                  className="w-91 h-53 object-cover md:my-0 md:mx-auto "
                />
                <div className="w-91 h-53 absolute top-0 left-0  bg-slate-100 w-full h-full opacity-10  hover:opacity-0  transition-all  duration-200 "></div>
              </div>

              <div className="w-91 h-53 relative md:hidden ">
                <h3 className="absolute text-xl uppercase font-medium top-16  text-center w-full text-white z-5 lg:top-12">
                  myra
                </h3>
                <p className="absolute  text-xl uppercase font-bold whitespace-nowrap tracking-wide top-24 lg:top-20 w-full text-white z-5 font-roboto lg:text-lg">
                  important lycian city
                </p>
                <p className="absolute  text-xl uppercase font-bold  mb-2 tracking-wide top-32 lg:top-28  w-full text-white z-5 font-roboto lg:text-lg">
                  visited by st.paul
                </p>

                <Link to="/myra" className="z-50 absolute bottom-4 right-4">
                  <FaRegClone className=" text-right   text-neutral-200 text-xl z-5 hover:text-orange-200  transition  duration-200  " />
                </Link>
                <img
                  src={ads3}
                  alt="nat4"
                  className="w-91 h-53 object-cover 
                  "
                />
                <div className="w-91 h-53 absolute top-0 left-0  bg-slate-100 w-full h-full opacity-10  hover:opacity-0  transition-all  duration-200 "></div>
              </div>

              <div className="col-span-2 row-span-2 w-190 h-112 relative">
                <h3 className="text-2xl uppercase font-medium absolute w-full text-center top-40 text-white z-5">
                  perga
                </h3>
                <p className="absolute w-full text-center text-2xl uppercase font-bold whitespace-nowrap tracking-wide top-48 text-white z-5 font-roboto ">
                  A LARGE GREEK-ROMAN CITY THAT HAS A GREAT
                </p>
                <p className="absolute w-full text-center text-2xl uppercase font-bold whitespace-nowrap tracking-wide top-56 text-white z-5 font-roboto ">
                  LEVEL IN URBAN PLANNING
                </p>

                <Link to="/perga" className="z-50 absolute bottom-4 right-4">
                  <FaRegClone className=" text-right   text-neutral-200 text-xl z-5  hover:text-orange-200  transition  duration-200 " />
                </Link>
                <img src={adsBig} className="w-190 h-112 object-cover  " />
                <div className="w-190 h-112 absolute top-0 left-0  bg-slate-100 w-full h-full opacity-10  hover:opacity-0  transition-all  duration-200 "></div>
              </div>

              <div className="w-91 h-53 relative md:hidden">
                <h3 className="absolute text-xl uppercase font-medium top-16  text-center w-full text-white z-5 lg:top-12">
                  hierapolis
                </h3>
                <p className="absolute  text-xl uppercase font-bold whitespace-nowrap tracking-wide top-24 lg:top-20 w-full text-white z-5 font-roboto lg:text-lg">
                  hot springs and
                </p>
                <p className="absolute  text-xl uppercase font-bold  mb-2 tracking-wide top-32 lg:top-28  w-full text-white z-5 font-roboto lg:text-lg">
                  LYCIA
                </p>

                <Link
                  to="/hierapolis"
                  className="z-50 absolute bottom-4 right-4"
                >
                  <FaRegClone className=" text-right   text-neutral-200 text-xl z-5  hover:text-orange-200  transition  duration-200 " />
                </Link>
                <img
                  src={ads4}
                  alt="nat5"
                  className="w-91 h-53 object-cover "
                />
                <div className="w-91 h-53 absolute top-0 left-0  bg-slate-100 w-full h-full opacity-10  hover:opacity-0  transition-all  duration-300 "></div>
              </div>
              <div className="w-91 h-53 relative md:hidden">
                <h3 className="absolute text-xl uppercase font-medium top-16  text-center w-full text-white z-5 lg:top-12">
                  tlos
                </h3>
                <p className="absolute  text-xl uppercase font-bold whitespace-nowrap tracking-wide top-24 lg:top-20 w-full text-white z-5 font-roboto lg:text-lg">
                  gLAMOROUS METROPOLIS
                </p>
                <p className="absolute  text-xl uppercase font-bold  mb-2 tracking-wide top-32 lg:top-28  w-full text-white z-5 font-roboto lg:text-lg">
                  OF LYCIans
                </p>

                <Link to="/patara" className="z-50 absolute bottom-4 right-4">
                  <FaRegClone className=" text-right   text-neutral-200 text-xl z-50  hover:text-orange-200  transition  duration-200  " />
                </Link>
                <img
                  src={ads5}
                  alt="nat6"
                  className="w-91 h-53 object-cover "
                />
                <div className="w-91 h-53 absolute top-0 left-0  bg-slate-100 w-full h-full opacity-10  hover:opacity-0  transition-all  duration-200 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
