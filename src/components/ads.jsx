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
    <main className="my-8 mt-28 flex justify-center align-center text-center bg-neutral-100  ">
      <div className=" max-w-6xl pt-4  ">
        <div className="mt-6 text-center">
          <h2 className="mb-2 font-roboto ">Featured Places</h2>
          <button className="text-center w-full ">
            <FaAngleDoubleDown className="my-0 mx-auto " />
          </button>

          <div>
            <div className="grid  grid-cols-3 gap-5 my-4 mt-12 px-4 md:grid-cols-2  ">
              <div className="w-91 h-53 relative ">
                {/* <div className="absolute text-white w-full  pt-4 text-center top-12  z-10 hover:translate-y-4 transition duration-700 ease-in-out "> */}
                <h3 className=" absolute text-xl uppercase font-medium tracking-wider top-16 lg:top-10 sm:top-4 text-center w-full text-neutral-100  z-5 ">
                  Troy
                </h3>
                <p
                  className=" absolute text-xl uppercase font-bold whitespace-nowrap tracking-wide top-24  w-full text-neutral-100 
                z-5 font-roboto lg:top-16 lg:text-lg sm:top-12 sm:text-sm xs:hidden"
                >
                  one of the most famous
                </p>
                <p
                  className=" absolute text-xl uppercase font-bold   tracking-wide top-32  lg:top-24 sm:top-16 w-full text-neutral-100  z-5 font-roboto 
                lg:text-lg sm:text-sm xs:hidden"
                >
                  ancient site
                </p>
                <Link to="/didyma" className="z-50 absolute bottom-4 right-4">
                  <FaRegClone className=" text-right   text-neutral-200 text-xl z-5  hover:text-orange-200  transition  duration-200" />
                </Link>
                <img src={ads1} className=" w-91 h-53 object-cover z-5  " />

                <div className=" h-53 absolute top-0 left-0  w-full h-full bg-gray-900  opacity-10 hover:opacity-30  transition-opacity duration-300 ease "></div>
              </div>

              <div className="w-91 h-53 relative">
                <h3 className="absolute text-xl uppercase tracking-wider font-medium top-16 lg:top-10 sm:top-4  text-center w-full text-neutral-100 z-5 ">
                  aizanoi
                </h3>
                <p
                  className="absolute  text-xl uppercase font-bold whitespace-nowrap tracking-wide top-24  w-full text-neutral-100 
                  z-5 font-roboto lg:top-16 lg:text-lg sm:top-12 sm:text-sm xs:hidden"
                >
                  first stock exchange
                </p>
                <p
                  className="absolute  text-xl uppercase font-bold  mb-2 tracking-wide top-32   w-full text-neutral-100 z-5 font-roboto 
                lg:top-24 lg:text-lg sm:top-16 sm:text-sm xs:hidden"
                >
                  market of the world
                </p>
                <Link to="/aizanoi" className="z-50 absolute bottom-4 right-4 ">
                  <FaRegClone className=" text-right   text-neutral-200 text-xl z-5  hover:text-orange-200  transition  " />
                </Link>

                <img
                  src={ads2}
                  alt="nat2"
                  className="w-91 h-53 object-cover  "
                />
                <div className="w-full h-53 absolute top-0 left-0  h-full bg-gray-900  opacity-10 hover:opacity-30   transition-opacity duration-300 ease "></div>
              </div>

              <div className="w-91 h-53 relative md:hidden ">
                <h3 className="absolute text-xl uppercase tracking-wider font-medium top-16 lg:top-10  text-center w-full text-neutral-100  z-5 ">
                  myra
                </h3>
                <p
                  className="absolute  text-xl uppercase font-bold whitespace-nowrap tracking-wide top-24  w-full text-neutral-100 
                 z-5 font-roboto lg:top-16 lg:text-lg"
                >
                  important lycian city
                </p>
                <p className="absolute  text-xl uppercase font-bold  mb-2 tracking-wide top-32   w-full text-neutral-100  z-5 font-roboto lg:top-24 lg:text-lg">
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
                <div className="w-full h-53 absolute top-0 left-0    h-full bg-gray-900  opacity-10 hover:opacity-30   transition-opacity duration-300 ease "></div>
              </div>

              <div className="col-span-2 row-span-2 w-190 h-112 relative">
                <h3 className="text-2xl uppercase tracking-wider font-medium absolute w-full text-center top-40 text-neutral-100 z-5 lg:top-32 sm:top-24">
                  perga
                </h3>
                <p
                  className="absolute w-full text-center text-2xl uppercase font-bold whitespace-nowrap tracking-wide top-48 text-neutral-100 
                z-5 font-roboto lg:top-40 lg:text-xl sm:top-32 sm:text-base xs:hidden"
                >
                  A LARGE GREEK-ROMAN CITY THAT HAS A GREAT
                </p>
                <p
                  className="absolute w-full text-center text-2xl uppercase font-bold whitespace-nowrap tracking-wide top-56 text-neutral-100 
                z-5 font-roboto lg:top-48 lg:text-xl sm:top-36 sm:text-base xs:hidden"
                >
                  LEVEL IN URBAN PLANNING
                </p>

                <Link to="/perga" className="z-50 absolute bottom-4 right-4">
                  <FaRegClone className=" text-right   text-neutral-200 text-xl z-5  hover:text-orange-200  transition  duration-200 " />
                </Link>
                <img src={adsBig} className="w-190 h-112 object-cover  " />
                <div className="w-190 h-112 absolute top-0 left-0  w-full h-full bg-gray-900  opacity-10 hover:opacity-30   transition-opacity duration-300 ease "></div>
              </div>

              <div className="w-91 h-53 relative ">
                <h3 className="absolute text-xl uppercase tracking-wider font-medium top-16 lg:top-10 sm:top-4 text-center w-full text-neutral-100  z-5 ">
                  hierapolis
                </h3>
                <p
                  className="absolute  text-xl uppercase font-bold whitespace-nowrap tracking-wide top-24  w-full text-neutral-100  
                z-5 font-roboto lg:top-16 lg:text-lg sm:top-12 sm:text-sm xs:hidden"
                >
                  hot springs and
                </p>
                <p
                  className="absolute  text-xl uppercase font-bold  mb-2 tracking-wide top-32   w-full text-neutral-100  z-5 font-roboto 
                lg:top-24 lg:text-lg sm:top-16 sm:text-sm xs:hidden"
                >
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
                <div className="w-full h-53 absolute top-0 left-0    h-full bg-gray-900  opacity-10 hover:opacity-30   transition-opacity duration-300 ease "></div>
              </div>
              <div className="w-91 h-53 relative ">
                <h3 className=" absolute text-xl uppercase  tracking-wider font-medium top-16 lg:top-10 sm:top-4 text-center w-full text-neutral-100  z-5 ">
                  tlos
                </h3>
                <p
                  className="absolute  text-xl uppercase font-bold whitespace-nowrap tracking-wide top-24  w-full text-neutral-100  
                z-5 font-roboto lg:top-16 lg:text-lg sm:top-12 sm:text-sm xs:hidden"
                >
                  gLAMOROUS METROPOLIS
                </p>
                <p
                  className="absolute  text-xl uppercase font-bold  mb-2 tracking-wide top-32   w-full text-neutral-100  z-5 font-roboto lg:top-24 
                lg:text-lg sm:top-16 sm:text-sm xs:hidden"
                >
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
                <div className=" h-53 absolute top-0 left-0  w-full h-full bg-gray-900  opacity-10 hover:opacity-30   transition-opacity duration-300 ease "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
