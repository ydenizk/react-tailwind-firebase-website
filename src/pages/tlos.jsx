import React from "react";
import Share from "./../components/share";

import banner from "./../assets/tlos/banner.jpg";
import big from "./../assets/tlos/592-360.jpg";
import big1 from "./../assets/tlos/592*360.jpg";
import big2 from "./../assets/tlos/592--360.jpg";
import sideSmall from "./../assets/tlos/288*288.jpg";

export default function Troia() {
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
              No <span className="font-roboto font-medium">21</span>
            </h2>
            <p className="uppercase  font-roboto font-bold text-white text-3xl md:text-2xl  whitespace-nowrap mb-6 tracking-wide ">
              HOME of the one of the largest and oldest lycian city
            </p>
            <p className="uppercase text-white font-mono text-lg tracking-wide">
              The beauty of tlos
            </p>
          </div>
        </div>
      </header>

      <div className="  flex justify-center align-center bg-neutral-100 relative my-24">
        <div className="max-w-4xl  w-full ">
          {/* .................... */}
          <div className="text-center mb-20 ">
            <h2 className=" uppercase mb-6 text-2xl tracking-widest font-semibold ">
              most glamorous metropolis of Lycian Union and a sports center of
              the Federation.
            </h2>
            <div className="w-24 bg-black h-0.5 my-0 mx-auto"></div>
          </div>

          {/* .................... */}

          <div className="  w-full p-0 text-black grid grid-cols-6 gap-2 px-2">
            <div className="w-full  col-span-4 ">
              <h4 className="tracking-wider font-bold text-lg mb-1 opacity-80">
                No21
              </h4>
              <p className=" tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Tlos was an ancient Lycian city near the modern town of
                Seydikemer in the Mugla Province of southern Turkey. It was one
                of the oldest and largest cities of Lycia.Tlos lies on the east
                side of the Xanthos valley atop a rocky outcrop that slopes up
                from a plateau from a modern village and ends on the west, north
                and northeast in almost perpendicular cliffs.
              </p>
              <div className="w-148 h-90  mb-6">
                <img src={big} alt="object-cover w-148 h-90 " />
              </div>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Archaeological remains from the city centre and at nearby sites
                (the caves at Girmeler and Tavabaşı) suggest that the foundation
                of the city started more than 4,000 years ago.Tlos seemingly
                became part of the Persian Empire and lost its independence when
                the Persians led by Harpagus invaded Lycia in 540 BC. It became
                prosperous during this period of Persian rule from the 5th to
                the late 4th century BC. Later, in the Hellenistic period, its
                importance is shown by being one of the six principal cities of
                the Lycian League to which in 168 BC Rome granted autonomy
                instead of dependence on Rhodes.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Regular excavations have been undertaken by an interdisciplinary
                team since 2005.The influence of many cultures upon Tlos has
                resulted in a patchwork of buildings dominated by an acropolis
                and fortress. In early Lycian times the city's settlement was
                likely concentrated on the southern and western slopes. Wide
                terraces with cisterns and the back walls of buildings carved
                from the rock are found there, as well as an agora, a theatre
                for plays and concerts, public Roman baths and the remains of an
                early Byzantine church.
              </p>

              <div className="w-148 h-90  mb-6">
                <img src={big1} alt="object-cover w-148 h-90 " />
              </div>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                At the foot of the hill is a stadium with seating capacity for
                2,500 people. It dates from the Hellenistic period with
                additions and alterations from the Roman period.There are two
                adjacent baths; the Great Bath is located on a slope southwest
                of the city centre and consists of three rooms following the
                plan of typical Lycian baths.The smaller public bath was
                probably first built in the early Roman period and comprises
                three rooms but does not have the plan of a typical Lycian
                baths.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Most famous Lycian tomb is the tomb of Bellerophon nestled at
                the bottom of the hill base. It is believed that this is the
                family tomb of Tlos royal dynasties and its genus comes from the
                mythical hero - Bellerophon. According to the legend Bellerophon
                to redeem himself was sent by the Lycian king Iobates to kill
                the fire-breathing monster Chimera that kept the whole district
                in fear.
              </p>

              <div className="w-148 h-90  mb-6">
                <img src={big2} alt="object-cover w-148 h-90 " />
              </div>

              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                How to get tlos Ancient City?
              </h2>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Tlos,42 km away from Fethiye town of Muğla province,is in a
                village called Yaka. You can find regular minubuses from fethiye
                to Yaka.You can reach to Tlos by private car in 30 minutes from
                Fethiye.
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
                    href="https://goo.gl/maps/oigtp6fuV9iuDCJ46"
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
                    href="https://muze.gov.tr/muze-detay?sectionId=TLO01&distId=MRK"
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
                    href="https://en.wikipedia.org/wiki/Tlos"
                    target="_blank"
                  >
                    Wikipedia
                  </a>
                </p>
              </div>
              <Share />

              <div className="w-72 h-72  mb-4 mt-16">
                <img src={sideSmall} alt="object-cover w-72 h-72 " />
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
