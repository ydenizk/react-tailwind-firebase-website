import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaUniversity } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = (/* { scrollRef } */) => {
  const ref1 = useRef();
  const [viso1, setViso1] = useState(false);
  useEffect(() => {
    const drop1 = (e) => {
      if (viso1 && ref1.current && !ref1.current.contains(e.target)) {
        setViso1(false);
      }
    };

if (viso1) {
    setTimeout(() => {
      setViso1(!viso1);
    }, 3000);
  }


    document.addEventListener("mousedown", drop1);
    return () => {
      document.removeEventListener("mousedown", drop1);
    };
  }, [viso1]);

  

/*   const scrollClick = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }; */

  return (
    <>
      <div className="bg-neutral-200  m-0 p-0 shadow fixed top-0 w-full  z-50">
        <div
          className="w-full h-16 bg-neutral-200 flex justify-between 
 items-center px-2.5 max-w-6xl my-0 mx-auto  "
        >
          <div>
            <h1 className="font-roboto tracking-wide font-bold text-3xl">
              Ancient Turkey
            </h1>
          </div>
          <div>
            <ul className="flex items-center justify-center ">
              <li className="relative">
                <Link
                  to="/"
                  className=" mx-2  font-extralight font-dosis text-gray-700  hover:text-gray-900 transition-all"
                >
                  Home
                </Link>
              </li>

              <li className="relative transition-all">
                <Link
                  to="/regios"
                  /*   onClick={scrollClick} */
                  className=" mx-2 font-extralight font-dosis  text-gray-700 hover:text-gray-900 transition-all"
                >
                  Regions
                </Link>
              </li>

              <li ref={ref1} className="relative">
                <Link
                  to="./destinations"
                  className=" mx-2 font-extralight font-dosis text-gray-700 hover:text-gray-900 transition-all"
                  onClick={() => setViso1((y) => !y)}
                 
                >
                  Destinations
                </Link>
                {viso1 && (
                  <ul className=" uppercase text-base absolute top-8   z-20  h-166  w-96 border border-gray-200 bg-white grid grid-cols-3 gap-2 mt-4  p-2 font-medium ">
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/sardes"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Sardes
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/ephesus"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Ephesus
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/miletus"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Miletus
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/priene"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Priene
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/didyma"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Didyma
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/laodikeia"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Laodikeia
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/hierapolis"
                        className="text-xs tracking-wide hover:text-amber-400 transition-all"
                      >
                        Hierapolis
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-xl text-amber-400" />
                      <Link
                        to="/aphrodisias"
                        className="text-xs hover:text-amber-400 transition-all"
                      >
                        Aphrodisias
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/knidos"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Knidos
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/kaunos"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Kaunos
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/letoon"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Letoon
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/xanthos"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Xanthos
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/patara"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Patara
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/myra"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Myra
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/troia"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Troia
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/aspendos"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Aspendos
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/perga"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Perga
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/assos"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Assos
                      </Link>
                    </li>
               {/*      <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/olympos"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Olympos
                      </Link>
                    </li> */}
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-xl text-amber-400" />
                      <Link
                        to="/sagalassos"
                        className="text-xs tracking-wide hover:text-amber-400 transition-all"
                      >
                        Sagalassos
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/tlos"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Tlos
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/aizanoi"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Aizanoi
                      </Link>
                    </li>
                    <li className="p-2 flex">
                      <FaUniversity className="mr-1 text-amber-400" />
                      <Link
                        to="/pergamon"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Pergamon
                      </Link>
                    </li>
                    <li className="p-2  flex">
                      <FaUniversity className="mr-1 text-2xl text-amber-400" />
                      <Link
                        to="/apollon"
                        className="text-xs tracking-wide hover:text-amber-400 transition-all"
                      >
                        Apollon Smintheus
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <Link
                  to="/about"
                  className=" mx-2  font-extralight font-dosis text-gray-700  hover:text-gray-900 transition-all"
                >
                  About
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/contact"
                  className=" mx-2 font-extralight font-dosis text-gray-700  hover:text-gray-900 transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <button className="mr-2">
                <FaSearch className="text-gray-800" />
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
