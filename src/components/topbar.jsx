import React, { useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaUniversity } from "react-icons/fa";
import { Link } from "react-router-dom";
import { db } from "./../firebase-config";

import { collection, getDocs } from "firebase/firestore";

const Topbar = () => {
  const ref1 = useRef();
  const [viso1, setViso1] = useState(false);

  useEffect(() => {
    const drop1 = (e) => {
      if (viso1 && ref1.current && !ref1.current.contains(e.target)) {
        setViso1(false);
      }
    };

    /* if (viso1) {
    setTimeout(() => {
      setViso1(!viso1);
    }, 3000);
  } */

    document.addEventListener("mousedown", drop1);
    return () => {
      document.removeEventListener("mousedown", drop1);
    };
  }, [viso1]);

  /* firebase get data and search filter area */

  const [places, setPlaces] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [overlay, setOverLay] = useState(true);

const handleFilterChange=(e)=>{

  const serachWord=e.target.value
  const newFilter=places.filter((pl)=>{

    return pl.place.toUpperCase().includes(serachWord.toUpperCase())
  })
  setFilteredData(newFilter)

}
//...............

  const placesCollectionRef = collection(db, "places");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(placesCollectionRef);
      setPlaces(data .docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

//............



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
                  className=" mx-2 font-extralight font-dosis  text-gray-700 hover:text-gray-900 transition-all"
                >
                  Regions
                </Link>
              </li>

              <li ref={ref1} className="relative ">
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
                        Sardis
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
                        Laodiceia
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
                        Troy
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
                      <FaUniversity className="mr-1  text-amber-400" />
                      <Link
                        to="/apollon"
                        className="text-sm tracking-wide hover:text-amber-400 transition-all"
                      >
                        Hamaxitus
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
            <div
              className={
                overlay
                  ? ""
                  : "flex justify-center  text-black fixed w-full h-full z-50 left-0 top-0 overflow-x-hidden bg-neutral-300 opacity-90"
              }
              /* className=" flex justify-center  text-black fixed w-full h-full z-50 left-0 top-0 overflow-x-hidden bg-white opacity-80" */
            >
              {!overlay && (
                <div className="mt-20 w-2/4 absolute text-center py-4">
                  <div className="flex  my-0 mx-auto w-full mb-4 pt-4 border-b border-black ">
                    <div className="text-black bg-neutral-300 pr-2 h-16 text-center pt-5">
                      <FaSearch className=" pl-2 text-2xl text-neutral-600" />
                    </div>
                    <input
                      type="text"
                      className="w-3/4 h-16 text-xl  font-bold tracking-wide text-neutral-600 outline-none bg-neutral-300"
                      placeholder="Find a place"
                      onChange={handleFilterChange}
                    />
                  </div>
                  {filteredData.length > 0 && (
                    <div className="absolute w-full mt-2 flex flex-col text-left  shadow-lg text-xl h-28 overflow-hidden overflow-y-auto">
                      {filteredData.map((pla) => {
                        const { place, id } = pla;
                        return (
                          <>
                            <Link
                              to={`/${place}`}
                              key={id}
                              onClick={() => setOverLay(!overlay)}
                              className=" uppercase py-1 px-2 w-full font-normal text-neutral-700 bg-neutral-300 font-roboto hover:bg-gray-400 transition duration-200 text-sm tracking-wider"
                            >
                              {place}
                            </Link>
                          </>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/*   <button className="mr-2 cursor-pointer ">
                <FaSearch className="text-gray-800" />
              </button> */}
              <button
                className={
                  overlay
                    ? "text-gray-800"
                    : "absolute cursor-pointer text-neutral-800  font-bold text-xl top-4 right-8 "
                }
                /*  className="absolute cursor-pointer text-black font-bold text-xl top-4 right-4 " */
                onClick={() => setOverLay((n) => !n)}
              >
                {overlay ? <FaSearch className="text-gray-800" /> : "X"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
