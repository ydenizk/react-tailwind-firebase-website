import React from "react";

import banner from "./../assets/assos/banner.jpg";
import big from "./../assets/assos/592--444.jpeg";
import big1 from "./../assets/assos/592-444.JPG";
import side from "./../assets/assos/side-big.jpg";
import Share from "./../components/share";
import { Helmet } from "react-helmet-async";

export default function Assos() {
  return (
    <div className="w-full bg-neutral-100 md:mt-20 ">
      <Helmet>
        <title>Assos</title>
        <meta name="description" content=" Home of Aristotle" />
        <link rel="canonical" href="/assos" />
      </Helmet>

      <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-16 pb-10 ">
        <div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    bg-neutral-100     ">
          <img
            src={banner}
            alt="nature-2"
            className="object-cover w-288 max-h-145 h-145  opacity-90 "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center  ">
            <h2 className="font-roboto font-medium text-white text-3xl mb-2 tracking-wider md:text-xl xs:text-base">
              No <span className="font-roboto font-medium">05</span>
            </h2>
            <p className="uppercase font-roboto font-bold text-white text-4xl  whitespace-nowrap mb-6 tracking-wide md:text-2xl  xs:text-xl">
              HOME OF Aristotle
            </p>
            <p className="uppercase text-white font-mono text-lg tracking-wide md:text-base xs:text-sm">
              The beauty of Assos
            </p>
          </div>
        </div>
      </header>

      <div className="  flex justify-center align-center bg-neutral-100 relative my-24">
        <div className="max-w-4xl  w-full ">
          {/* .................... */}
          <div className="text-center mb-20 mx-2">
            <h2 className="mb-6 text-2xl tracking-widest font-semibold uppercase md:text-lg">
              Temple of Goddess Athena, the protector of Assos Ancient city
            </h2>
            <div className="w-24 bg-black h-0.5 my-0 mx-auto"></div>
          </div>

          {/* .................... */}

          <div className="  w-full p-0 text-black grid grid-cols-6 gap-2 px-2">
            <div className="w-full  col-span-4 ">
              <h4 className="tracking-wider font-bold text-lg mb-1 opacity-80">
                No05
              </h4>
              <p className=" tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Assos,ancient Greek city of Troas,located on the coast of what
                is now northwestern Turkey, with the island of Lesbos lying
                about 7 miles (11 km) offshore to the south. During Pliny the
                Elder's time the city also bore the name Apollonia.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                The city was founded from 1000 to 900 BC by Aeolian colonists
                from Lesbos, who specifically are said to have come from
                Methymna. Assus came under the rule of the Persians and later of
                the Athenian empire. It fell to Alexander the Great and
                subsequently was ruled by the Macedonian general Lysimachus, the
                kings of Pergamum, and Rome.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                St. Paul also visited the city during his third missionary
                journey through Asia Minor, which was between 53-57 AD, on his
                way to Lesbos. From this period onwards, Assos shrunk to a small
                village, as it has remained ever since. Ruins around Assos
                continue to be excavated.In the early 1900s an attempt was made
                to move the contents of the Temple of Athena. Much of the art
                has been moved to museums like the Louvre. The art found
                includes pictures both of mythical creatures and heraldic
                events.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                The most striking structure in the acropolis is the Temple of
                Athena in the part of the inner castle during the Byzantine
                period. Only 5-6 columns have survived from this structure,
                which should have had 36 columns. It is in the Doric style,
                which does not have much detail on the architectural texture and
                is generally used to be seen in the Greece.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                The theatre, which was located on the south of the agora on a
                slope overlooking the Aegean Sea, was built on a stepped terrace
                formed by cutting the surrounding conglomerate rock. The
                building, which is dated to the end of the 4rd century BC, is a
                typical Hellenic theatre with a horseshoe-shaped plan. The
                results of new research in Assos provide evidence for the
                formation of a confident Polis in the decades after the end of
                the Persian rule by Alexander the Great and his victory at
                Granicus in 334 BC.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                a Platonic school of Aristotle
              </h2>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Assos is the city where the great philosopher Aristotle taught
                philosophy and wrote some of his books. Its importance in the
                history of philosophy as well as for its natural beauty and
                unspoiled authenthic Aegean culture.The establishment of a
                philosophy school by students of Plato, who also briefly ruled
                the city and the Temple of Athena, the only example of a Doric
                temple in Archaic Anatolia, the unique cityscape, its
                topography, layout and preservation make this Greek city unique
                among its counterparts.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Aristotle and the members of his group carried out observations
                in Assos, particularly in zoology and biology. Aristotle
                probably began his work “Politics” in Assos as well as “On
                Kingship” which is now lost. He began to develop a philosophy
                different from that of Plato who had said “kings should become
                philosophers or philosophers should become kings”.
              </p>

              <div className="w-148 h-111  mb-6">
                <img src={big} alt="object-cover w-148 max-h-111 " />
              </div>
              <div className="w-148 h-111  mb-6">
                <img src={big1} alt="object-cover w-148 max-h-111 " />
              </div>

              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                How to get Assos Ancient City?
              </h2>

              <p className="tracking-wider font-light text-base font-noto my-4 leading-7">
                Assos is situated 87 km south of Canakkale on a volcanic
                headland with magnificent views over the Aegean and island of
                Lesbos.Also it is 1 hour away from the Troia ancient site.As
                Assos has also an authentic small port at sea level and is
                nearby the some local summer touristic places,it is easy to
                reach by public transport from Ayvacık or Çanakkale
                province.Also it is highly recommended to visit Assos by car in
                order to feel the authenticity of region completeley.
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
                    href="https://goo.gl/maps/Mkfcv5gENmDoR4uM9"
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
                    href="https://muze.gov.tr/s3/MysFileLibrary/Çanakkale%20Assos%20Ören%20Yeri-99657c0d-6f80-4e58-8897-b191b315ca7b.pdf"
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
                    href="https://www.britannica.com/place/Assus"
                    target="_blank"
                  >
                    Britannica
                  </a>
                </p>

                <a
                  className="text-black font-medium text-base font-garamond tracking-wider underline ml-24"
                  href="https://en.wikipedia.org/wiki/Assos"
                  target="_blank"
                >
                  Wikipedia
                </a>
              </div>
              <Share />

              <div className="w-72 h-123 mt-16 mb-6 ">
                <img src={side} alt="object-cover w-72 max-h-123 " />
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
