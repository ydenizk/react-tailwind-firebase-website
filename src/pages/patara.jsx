import React from "react";
import Share from "./../components/share";

import banner from "./../assets/patara/banner.jpg";
import big from "./../assets/patara/592-288.jpg";
import big1 from "./../assets/patara/592-360.jpg";
import big2 from "./../assets/patara/592-444.jpg";
import side from "./../assets/patara/288-492.jpg";

export default function Patara() {
  return (
    <div className="w-full bg-neutral-100 md:mt-20">
      <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-16 pb-10 ">
        <div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    bg-neutral-100     ">
          <img
            src={banner}
            alt="nature-2"
            className="object-cover w-288 max-h-145 h-145  "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <h2 className="font-roboto font-medium text-white text-3xl mb-2 tracking-wider">
              No <span className="font-roboto font-medium">14</span>
            </h2>
            <p className="uppercase font-roboto font-bold text-white text-2xl  md:text-base whitespace-nowrap mb-1 tracking-wide ">
              HOME OF one of the most powerful cities of the Lycian league
            </p>
            <p className="uppercase font-roboto font-bold text-white text-2xl md:text-base  whitespace-nowrap mb-6 tracking-wide ">
              league and the birhplace of gof apollo
            </p>
            <p className="uppercase text-white font-mono text-lg tracking-wide">
              The beauty of patara
            </p>
          </div>
        </div>
      </header>

      <div className="  flex justify-center align-center bg-neutral-100 relative my-24">
        <div className="max-w-4xl  w-full ">
          {/* .................... */}
          <div className="text-center mb-20 ">
            <h2 className="uppercase mb-6 text-2xl tracking-widest font-semibold ">
              Lighthouse of patara is believed to the oldest one in the world
              and was built in 60 AD.
            </h2>
            <div className="w-24 bg-black h-0.5 my-0 mx-auto"></div>
          </div>

          {/* .................... */}

          <div className="  w-full p-0 text-black grid grid-cols-6 gap-2 px-2">
            <div className="w-full  col-span-4 ">
              <h4 className="tracking-wider font-bold text-lg mb-1 opacity-80">
                No14
              </h4>
              <p className=" tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Patara was an ancient and flourishing maritime and commercial
                city, capital of Lycia, on the south-west coast of Turkey near
                the modern small town of Gelemiş,Kalkan in Antalya Province.t is
                the birthplace of Saint Nicholas in 270 AD, who lived most of
                his life in the nearby town of Myra (Demre).
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                In myth, Patara was said to have been founded by Patarus a son
                of Apollo. Ancient writers mentioned Patara as one of the
                principal cities of Lycia. It was Lycia's primary seaport, and a
                leading city of the Lycian League, having 3 votes, the
                maximum.The city, with the rest of Lycia, surrendered to
                Alexander the Great in 333 BC.In this period the first city
                walls were built. Strabo informs us that Ptolemy Philadelphus of
                Egypt, who enlarged the city, gave it the name of Arsinoë after
                Arsinoe II of Egypt.Patara.Antiochus III captured Patara in 196
                BC and it became the capital of Lycia. The Lycian League was
                formally established in 176 BC.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                In the 5th century AD the city was reduced in size through the
                construction of a strong fortification wall adjoining the
                Bouleuterion using stone from the nearby structures.he city
                remained of some importance during the Byzantine Empire as a
                way-point for trade and pilgrims. After the Seljuk Sultanate of
                Rum acquisition in 1211 the city declined and appears to have
                been deserted by 1340.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                Ancient buildings
              </h2>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-5 leading-7">
                The theatre was rebuilt under Antoninus Pius in 147 AD after an
                earthquake;its diameter is 265 feet, and held about 6000
                spectators.The Bouleuterion or prytaneion is well-preserved and
                has been further restored. It was the capital's assembly hall of
                the Lycian League and overlooked the theatre the Agora in the
                East.The main street connected the inner harbour to the Agora
                and is one of the widest and best-preserved streets in Lycia.
                Both sides of the street are lined with Ionic-order colonnades,
                with granite columns on the east and marble columns on the west.
              </p>
              <div className="w-148 h-90  mb-6">
                <img src={big1} alt="object-cover w-148 h-90 " />
              </div>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                The lighthouse stood at the entrance to the major naval and
                trading port of Lycia, which had an outer and an inner harbour.
                It was built in 60 AD during the reign of Nero, according to an
                inscription, and is one of the oldest surviving.The site of the
                oracle and temple of Apollo have not been found.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Sadly, it is getting harder for these tribesmen to do business.
                Camel trading has declined in recent years; whereas 30,000
                animals might have changed hands at Pushkar in decades past,
                5,000 is the present norm. Moreover, the majority of camels at
                Pushkar are now sold for meat, a transaction that herdsmen would
                have once considered disgraceful. But with pastureland getting
                scarce and their profession waning in prestige, they have little
                choice.The harbour is still apparent but it is a swamp, choked
                up with sand and bushes.
              </p>
              <div className="w-148 h-72  mb-6">
                <img src={big} alt="object-cover w-148 h-72 " />
              </div>
              <div className="w-148 h-111  mb-6">
                <img src={big2} alt="object-cover w-148 h-111 " />
              </div>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                In 1836 the French archaeologist Charles Texier explored the
                site followed by Charles Fellows in 1838.In 1993 the Stadiasmus
                Patarensis was unearthed, a monumental Roman pillar on which is
                inscribed in Greek a dedication to Claudius and an official
                announcement of roads being built by the governor, Quintus
                Veranius Nepos, in the province of Lycia et Pamphylia, giving
                place names and distances, essentially a monumental public
                itinerarium.The pillar is on display in the garden of the
                Antalya Museum.The site is currently being excavated each year
                by a team of Turkish archaeologists.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                How to get patara Ancient City?
              </h2>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Patara is located about 475km west of Antalya province, 45km
                west of Kaş and 20km west of Kalkan. You can reach Patara by
                car, bus or taxi on D-400. Minibuses(dolmushes) from Kalkan or
                Kaş will take you at Ovaköy and you can take a 3.5km taxi drive
                to the village of Gelemiş, or Patara.
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
                    href="https://goo.gl/maps/3E2KWEKA2WZHEBNXA"
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
                    href="https://muze.gov.tr/s3/MysFileLibrary/Antalya%20patara%20ören%20yeri_ENG-6b3008c1-5b63-435f-8af7-567c267c7ae5.pdf"
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
                    href="https://en.wikipedia.org/wiki/Sardis"
                    target="_blank"
                  >
                    Wikipedia
                  </a>
                </p>
              </div>
              <Share />

              <div className="w-72 h-123 mt-16 ">
                <img src={side} alt="object-cover w-72 h-123 " />
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
