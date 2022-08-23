import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaUniversity } from "react-icons/fa";

const Topbar = ({ scrollRef }) => {
  const ref1 = useRef();
  const [viso1, setViso1] = useState(false);
  useEffect(() => {
    const drop1 = (e) => {
      if (viso1 && ref1.current && !ref1.current.contains(e.target)) {
        setViso1(false);
      }
    };
    document.addEventListener("mousedown", drop1);
    return () => {
      document.removeEventListener("mousedown", drop1);
    };
  }, [viso1]);

  const scrollClick = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="w-full h-16 bg-neutral-200 flex justify-between 
 items-center px-2.5 max-w-6xl my-0 mx-auto "
      >
        <div>
          <h1 className="font-roboto tracking-wide font-bold text-3xl">
            Ancient Turkey
          </h1>
        </div>
        <div>
          <ul className="flex items-center justify-center ">
            <li className="relative transition-all">
              <button
                onClick={scrollClick}
                className=" mx-2 font-extralight font-dosis  text-gray-700 hover:text-gray-900 transition-all"
              >
                Regions
              </button>
            </li>

            <li ref={ref1} className="relative">
              {" "}
              <button
                className=" mx-2 font-extralight font-dosis text-gray-700 hover:text-gray-900 transition-all"
                onClick={() => setViso1((y) => !y)}
              >
                Destinations
              </button>
              {viso1 && (
                <ul className=" uppercase text-base absolute top-8 z-20  h-166  w-96 border border-gray-200 bg-white grid grid-cols-3 gap-2  m-4 p-2 font-medium ">
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Sardes
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Ephesus
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Miletus
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Priene
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Didyma
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Laodikeia
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-xs tracking-wide hover:text-amber-400 transition-all"
                    >
                      Hierapolis
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-xl text-amber-400" />
                    <a
                      href=""
                      className="text-xs hover:text-amber-400 transition-all"
                    >
                      Aphrodisias
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Knidos
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Kaunos
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Letoon
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Xanthos
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Patara
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Myra
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      {" "}
                      roia
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Aspendos
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Perga
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Assos
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Olympos
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-xl text-amber-400" />
                    <a
                      href=""
                      className="text-xs tracking-wide hover:text-amber-400 transition-all"
                    >
                      Sagalassos
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Tlos
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Aizanoi
                    </a>
                  </li>
                  <li className="p-2 flex">
                    <FaUniversity className="mr-1 text-amber-400" />
                    <a
                      href=""
                      className="text-sm tracking-wide hover:text-amber-400 transition-all"
                    >
                      Pergamon
                    </a>
                  </li>
                  <li className="p-2  flex">
                    <FaUniversity className="mr-1 text-2xl text-amber-400" />
                    <a
                      href=""
                      className="text-xs tracking-wide hover:text-amber-400 transition-all"
                    >
                      Apollon Smintheus
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative">
              <button className=" mx-2  font-extralight font-dosis text-gray-700 hover:text-gray-900 transition-all">
                About
              </button>
            </li>
            <li className="relative">
              <button className=" mx-2 font-extralight font-dosis text-gray-700 hover:text-gray-900 transition-all">
                Contact
              </button>
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
    </>
  );
};

export default Topbar;
