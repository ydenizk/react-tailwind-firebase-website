import React from "react";
import Share from "./../components/share";

import banner from "./../assets/perga/banner.jpg";
import big from "./../assets/perga/592-360.jpg";
import big1 from "./../assets/perga/592--360.jpg";
import big2 from "./../assets/perga/592*360.jpg";
import big3 from "./../assets/perga/592**360.jpg";
import sideBig from "./../assets/perga/288-444.jpg";
import sideBig1 from "./../assets/perga/288-444.jpg";
import sideSmall from "./../assets/perga/288-288.jpg";

export default function Perga() {
  return (
    <div className="w-full bg-neutral-100">
      <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-16 pb-10 ">
        <div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    bg-neutral-100     ">
          <img
            src={banner}
            alt="nature-2"
            className="object-cover w-288 max-h-145 h-145  "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <h2 className="font-roboto font-medium text-white text-3xl mb-2 tracking-wider">
              No <span className="font-roboto font-medium">15</span>
            </h2>
            <p className="uppercase font-roboto font-bold text-white text-3xl  whitespace-nowrap mb-6 tracking-wide ">
              HOME OF one of the largest ancient settleements
            </p>
            <p className="uppercase text-white font-mono text-lg tracking-wide">
              The beauty of perga
            </p>
          </div>
        </div>
      </header>

      <div className="  flex justify-center align-center bg-neutral-100 relative my-24">
        <div className="max-w-4xl  w-full ">
          {/* .................... */}
          <div className="text-center mb-20 ">
            <h2 className="uppercase mb-6 text-2xl tracking-widest font-semibold ">
              a large greek-roman city that has a great level in urban planning
            </h2>
            <div className="w-24 bg-black h-0.5 my-0 mx-auto"></div>
          </div>

          {/* .................... */}

          <div className="  w-full p-0 text-black grid grid-cols-6 gap-2">
            <div className="w-full  col-span-4 ">
              <h4 className="tracking-wider font-bold text-lg mb-1 opacity-80">
                No15
              </h4>
              <p className=" tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Perga or Perge was an ancient Greek city in Anatolia, once the
                capital of Pamphylia Secunda, now in Antalya Province on the
                southwestern Mediterranean coast of Turkey.It was a centre of
                native culture and was a seat of the worship of “Queen” Artemis,
                a purely Anatolian nature goddess.A unique and prominent feature
                for a Roman city was the long central water channel in the
                centre of the main street which contained a series of cascading
                pools and which would have been remarkable even today in a
                semi-arid area where summer temperatures reach over 30 deg. C.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Excavations in the original settlement on the acropolis date it
                to the early Bronze Age, 4000-3000 BC. Perge was later a
                Pamphylian Greek city, and came under successive rule by
                Persians, Athenians, and Persians again.Alexander the Great,
                after quitting Phaselis, occupied Perge with a part of his army
                in 334 BC.The region was conquered by the Romans in 188 BC.
                After 25 BC, the Romans built the Via Sebaste linking Pisidian
                Antioch in Galatia with Perge.Under the Romans from the 1st to
                the 3rd century AD the town became a magnificent city with many
                impressive buildings. It became one of the most beautiful towns
                in Anatolia, competing with Side for the status of most
                important town in Pamphylia.In the first half of the 4th
                century, during the reign of Constantine the Great (324-337),
                Perga became an important centre of Christianity, which soon
                became the official religion of the Roman Empire. The city
                retained its status as a Christian centre in the 5th and 6th
                centuries.Perga remained inhabited until the foundation of the
                Seljuk Empire in roughly 1000.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                St. Paul the Apostle and his, companion St. Barnabas, twice
                visited Perga as recorded in the biblical book, the Acts of the
                Apostles, during their first missionary journey, where they
                "preached the word
              </p>

              <div className="w-148 h-90  mb-4">
                <img src={big} alt="object-cover w-148 h-90 " />
              </div>
              <div className="w-148 h-90  mb-6">
                <img src={big1} alt="object-cover w-148 h-90 " />
              </div>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                Ancient buildings and excavations
              </h2>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Excavations started in 1946 and have uncovered many monumental
                buildings: a theatre, a stadium, palaestra, a temple of Artemis
                and two churches.The temple of Artemis was located outside the
                town.One of the most impressive monuments is the theatre which
                lies outside the walls near the stadium. It is larger than those
                of Myra and Patara.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Perge has been dubbed as “Turkey’s second Zeugma” for the
                alluring appearance of the mosaics that have been unearthed so
                far. In 2003 archaeologists discovered well-preserved Greek
                mosaics showing Oceanus and Medusa. In 2017 a mosaic depicting
                the sacrifice of Iphigenia was discovered.
              </p>

              <div className="w-148 h-90  mb-4">
                <img src={big2} alt="object-cover w-148 h-90 " />
              </div>
              <div className="w-148 h-90  mb-4">
                <img src={big3} alt="object-cover w-148 h-90 " />
              </div>

              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                How to get perga Ancient City?
              </h2>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Perge islocated 17 kms from the center of Antalya province.
                There are 2 ways to get here.If you prefer to take a bus from
                the center of Antalya, take bus number AC03 to the Aksu
                district. It takes about 1 hour to get to the site with this
                bus. By Private car, after arriving in Aksu following the
                "Perge" sign, continue on road in front of the Gendarmerie unit
                for 2km. It takes 20 mins to get to the site by car.
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
                    href="https://g.page/perge-antik-kenti?share"
                    target="_blank"
                  >
                    Google Maps
                  </a>
                </p>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  TR Museum Passcard -
                  <span className="text-black opacity-90">Valid</span>
                </p>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Unesco Word Heritage List -
                  <span className="text-black opacity-90">No</span>
                </p>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Brochure -
                  <a
                    href="https://muze.gov.tr/s3/MysFileLibrary/Antalya%20Perge%20Ören%20Yeri%20ENG-66bc8cdf-754c-4846-bab5-97d4f780d53e.pdf"
                    className="text-black opacity-90 underline"
                    target="_blank"
                  >
                    Check out or Download
                  </a>
                </p>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Read More -
                  <a
                    className="text-black font-medium text-base font-garamond tracking-wider underline "
                    href="https://en.wikipedia.org/wiki/Perga"
                    target="_blank"
                  >
                    Wikipedia
                  </a>
                </p>

               
              </div>
              <Share />

              <div className="w-72 h-111 mt-16 mb-4 ">
                <img src={sideBig} alt="object-cover w-72 h-111 " />
              </div>

              <div className="w-72 h-111 mb-4 ">
                <img src={sideBig1} alt="object-cover w-72 h-111 " />
              </div>

              <div className="w-72 h-72  mb-4 ">
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
