import React from "react";
import Share from "./../components/share";

import banner from "./../assets/miletus/banner.jpg";
import big from "./../assets/miletus/592-360.jpg";
import big1 from "./../assets/miletus/592*288.jpg";
import big2 from "./../assets/miletus/592-288.jpg";
import sideSmall from "./../assets/miletus/280-280.jpg";

export default function Miletus() {
  return (
    <div className="w-full bg-neutral-100 md:mt-20">
      <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-16 pb-10 ">
        <div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    bg-neutral-100     ">
          <img
            src={banner}
            alt="nature-2"
            className="object-cover w-288 max-h-145 h-145   "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <h2 className="font-roboto font-medium text-white text-4xl mb-2 tracking-wider">
              No <span className="font-roboto font-medium">12</span>
            </h2>
            <p className="uppercase font-roboto font-bold text-white text-3xl md:text-2xl  whitespace-nowrap mb-6 tracking-wide ">
              home of the greatest and wealthiest Greek city
            </p>
            <p className="uppercase text-white font-mono text-xl tracking-wide">
              The beauty of miletus
            </p>
          </div>
        </div>
      </header>

      <div className="  flex justify-center align-center bg-neutral-100 relative my-24">
        <div className="max-w-4xl  w-full ">
          {/* .................... */}
          <div className="text-center mb-20 ">
            <h2 className="uppercase mb-6 text-2xl tracking-widest font-semibold ">
              the greatest Greek city in the east for 1400 years
            </h2>
            <div className="w-24 bg-black h-0.5 my-0 mx-auto"></div>
          </div>

          {/* .................... */}

          <div className="  w-full p-0 text-black grid grid-cols-6 gap-2 px-2">
            <div className="w-full  col-span-4 ">
              <h4 className="tracking-wider font-bold text-lg mb-1 opacity-80">
                No12
              </h4>
              <p className=" tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Miletus was an ancient Greek city on the western coast of
                Anatolia, near the mouth of the Maeander River in ancient
                Ionia.Its ruins are located near the modern village of Balat in
                Aydın Province, Turkey. Before 500 BC, Miletus was the greatest
                Greek city in the east for 1400 years, from about 700 BC to 700
                AD. It was the natural outlet for products from the interior of
                Anatolia and had a considerable wool trade with Sybaris, in
                southern Italy.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Recorded history at Miletus begins with the records of the
                Hittite Empire, and the Mycenaean records of Pylos and Knossos,
                in the Late Bronze Age. Miletus was a Mycenaean stronghold on
                the coast of Asia Minor from c. 1450 to 1100 BC.Homer mentions
                that during the time of the Trojan War, Miletus was an ally of
                Troy and was city of the Carians, under Nestor and Amphimachus.
                The city of Miletus became one of the twelve Ionian city-states
                of Asia Minor to form the Ionian League.By the 6th century BC,
                Miletus had earned a maritime empire with many colonies, but
                brushed up against powerful Lydia at home, and the tyrant
                Polycrates of its neighbor to the west, Samos.After an alliance
                with Rome, in 133 BC the city became part of the province of
                Asia.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Miletus benefited from Roman rule and most of the present
                monuments date to this period.In 262 new city walls were built.
                However the harbour was silting up and the economy was in
                decline. In 538 emperor Justinian rebuilt the walls but it had
                become a small town.Seljuk Turks conquered the city in the 14th
                century and used Miletus as a port to trade with Venice.In the
                15th century the Ottomans utilized the city as a harbour during
                their rule in Anatolia. As the harbour became silted up, the
                city was abandoned.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                In antiquity the city possessed a harbor at the southern entry
                of a large bay, on which two more of the traditional twelve
                Ionian cities stood: Priene and Myus. The harbor of Miletus was
                additionally protected by the nearby small island of Lade. Over
                the centuries the gulf silted up with alluvium carried by the
                Meander River. Priene and Myus had lost their harbors by the
                Roman era, and Miletus itself became an inland town in the early
                Christian era; all three were abandoned to ruin as their
                economies were strangled by the lack of access to the sea.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                Ancient buildings and Archaeological excavations
              </h2>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-5 leading-7">
                The first excavations in Miletus were conducted by the French
                archaeologist Olivier Rayet in 1873, followed by the German
                archaeologists Julius Hülsen and Theodor Wiegand between 1899
                and 1931. Excavations, however, were interrupted several times
                by wars and various other events. Carl Weickart excavated for a
                short season in 1938 and again between 1955 and 1957.One
                remarkable artifact recovered from the city during the first
                excavations of the 19th century, the Market Gate of Miletus, was
                transported piece by piece to Germany and reassembled. It is
                currently exhibited at the Pergamon Museum in Berlin.
              </p>
              <div className="w-148 h-90  mb-4">
                <img src={big} alt="object-cover w-148 h-90 " />
              </div>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                The streets of Miletus have a right-angle grid plan – the
                brainchild of local architect Hippodamus. Approaching the site
                from the car park, the Great Theatre dominates. Miletus'
                commercial and administrative centre from 700 BC to AD 700, the
                5000-seat Hellenistic theatre had majestic sea views. The Romans
                reconstructed it in the 1st century AD to seat 15,000
                spectators.
              </p>
              <div className="w-148 h-72  mb-4">
                <img src={big1} alt="object-cover w-148 h-72 " />
              </div>

              <div className="w-148 h-72  mb-4">
                <img src={big2} alt="object-cover w-148 h-72 " />
              </div>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                How to get miletus Ancient City?
              </h2>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Miletus Ancient City is located in Didim District of Aydın
                province. You can reach Miletus, which is about 22 km north of
                Didim center, by following the Didim Güllübahçe Road by private
                vehicle, as well as by minibus, midibus and taxi options that
                pass through Altinkum and the center of Didim.
              </p>
            </div>

            <div className="w-full   col-span-2">
              <div className="w-full bg-neutral-100  ">
                <h5 className="  tracking-wider font-semibold opacity-80">
                  CREDITS
                </h5>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Text - <span className="text-black opacity-90">YDenizK</span>
                </p>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Photographs -
                  <span className="text-black opacity-90">YDenizK</span>
                </p>
                <h5 className="  tracking-wider font-semibold mt-6 opacity-80">
                  INFO
                </h5>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Search on Map -
                  <a
                    className="text-black opacity-90 underline font-medium text-base font-garamond tracking-wider"
                    href="https://goo.gl/maps/qhRCCRMTxgzefKkg9"
                    target="_blank"
                  >
                    Google Maps
                  </a>
                </p>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Unesco Word Heritage List -
                  <span className="text-black opacity-90">No</span>
                </p>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Brochure -
                  <a
                    href="https://muze.gov.tr/s3/MysFileLibrary/Aydın%20Milet%20Ören%20Yeri-73d28c49-ee16-4b1e-84b0-57e0ad7b503e.pdf"
                    className="text-black opacity-90 underline"
                    target="_blank"
                  >
                    Check out or Download
                  </a>
                </p>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Read More -
                  <a
                    className="text-black opacity-90 font-medium text-base font-garamond tracking-wider underline ml-2"
                    href="https://www.britannica.com/biography/Histiaeus"
                    target="_blank"
                  >
                    Britannica
                  </a>
                </p>

                <a
                  className="text-black font-medium text-base font-garamond tracking-wider underline ml-24"
                  href="https://en.wikipedia.org/wiki/Miletus"
                  target="_blank"
                >
                  Wikipedia
                </a>
              </div>

              <Share />

              <div className="w-72 h-72  mb-4 mt-12 ">
                <img src={sideSmall} alt="object-cover  w-72 h-72 " />
              </div>
            </div>
          </div>

          {/* .................... */}
        </div>
      </div>

      {/* .................... */}
    </div>
  );
}
