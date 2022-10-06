import React from "react";
import Share from "../components/share";

import banner from "./../assets/troia/banner.jpg";
import big from "./../assets/troia/592-360.jpg";
import big1 from "./../assets/troia/592-444.jpg";
import big2 from "./../assets/troia/592*444.jpg";
import sideBig from "./../assets/troia/288-444.jpg";
import sideSmall from "./../assets/troia/288-288.jpg";
import sideSmall1 from "./../assets/troia/288--288.jpg";
import sideSmall2 from "./../assets/troia/288*288.jpg";
import sideSmall3 from "./../assets/troia/288**288.jpg";

import { Helmet } from "react-helmet-async";

export default function Troy() {
  return (
    <div className="w-full bg-neutral-100 md:mt-20 ">
      <Helmet>
        <title>Troy</title>
        <meta
          name="description"
          content="Home of one of the most famous ancient sites in history"
        />
        <link rel="canonical" href="/troy" />
      </Helmet>
      <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-16 xs:pb-2   xs:w-screen ">
        <div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    bg-neutral-100     ">
          <img
            src={banner}
            alt="nature-2"
            className="object-cover w-288 max-h-145 h-145  "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center  ">
            <h2 className="font-roboto font-medium text-white text-3xl mb-2 tracking-wider md:xl xs:text-base">
              No <span className="font-roboto font-medium">21</span>
            </h2>
            <p
              className="uppercase font-roboto font-bold text-white text-3xl   mb-1 tracking-wide  
            md:text-xl sm:text-lg xs:text-base"
            >
              HOME OF one of the most famous ancient sites in history
            </p>
          
            <p className="uppercase text-white font-mono text-lg whitespace-nowrap tracking-wide md:text-base xs:text-sm">
              The beauty of troy
            </p>
          </div>
        </div>
      </header>

      <div className="  flex justify-center align-center bg-neutral-100 relative my-24">
        <div className="max-w-4xl  w-full ">
          {/* .................... */}
          <div className="text-center mb-20  px-2">
            <h2 className="uppercase mb-6 text-2xl tracking-widest font-semibold md:text-lg ">
              not just one city,but nine,built one on top of the other:nine
              layers of diferent civilization
            </h2>
            <div className="w-24 bg-black h-0.5 my-0 mx-auto"></div>
          </div>

          {/* .................... */}

          <div className="  w-full p-0 text-black grid grid-cols-6 gap-2 px-2">
            <div className="w-full  col-span-4 ">
              <h4 className="tracking-wider font-bold text-lg mb-1 opacity-80">
                No21
              </h4>
              <p className=" tracking-wider font-light  font-roboto  text-lg mb-4 leading-7  xs:text-base">
                Troy was an ancient city located at Hisarlik in present-day
                Turkey, 30 kilometres south-west of Çanakkale,that holds an
                enduring place in both literature and archaeology.It is known as
                the setting for the Greek myth of the Trojan War.Troy, with its
                4,000 years of history, is one of the most famous archaeological
                sites in the world.
              </p>
              <div className="w-148 h-90  mb-4">
                <img src={big} alt="object-cover w-148 h-90 " />
              </div>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7  xs:text-base">
                In Ancient Greek literature, Troy is portrayed as a powerful
                kingdom of the Heroic Age, a mythic era when monsters roamed the
                earth and gods interacted directly with humans. The city was
                said to have ruled the Troad until the Trojan War led to its
                complete destruction at the hands of the Greeks.The story of its
                destruction was one of the cornerstones of Greek mythology and
                literature, featuring prominently in the Iliad and the Odyssey,
                as well as numerous other poems and plays. Its legacy played a
                large role in Greek society,
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7  xs:text-base">
                Until the late 19th century, scholars regarded the Trojan War as
                entirely legendary. However, starting in 1871, Heinrich
                Schliemann and Frank Calvert excavated the site of the classical
                era city, under whose ruins they found the remains of numerous
                earlier settlements. Several of these layers resemble literary
                depictions of Troy, leading some scholars to conclude that there
                is a kernel of truth to the legends. Subsequent excavations by
                others have added to the modern understanding of the site,
                though the exact relationship between myth and reality remains
                unclear.Research and excavations conducted in the Troia and
                Troas region reveal that the region has been inhabited for 8,000
                years. Throughout the centuries, Troy has acted as a cultural
                bridge between the Troas region and the Balkans, Anatolia, the
                Aegean and Black Sea regions through migration, occupation,
                trade and the transmission of knowledge.
              </p>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-5 leading-7  xs:text-base">
                24 excavation campaigns, spread over the past 140 years, have
                revealed many features from all the periods of occupation in the
                citadel and the lower town. These include 23 sections of the
                defensive walls around the citadel, eleven gates, a paved stone
                ramp, and the lower portions of five defensive bastions.he
                surrounding landscape contains many important archaeological and
                historical sites, including prehistoric settlements and
                cemeteries, Hellenistic burial mounds, monumental tumuli, Greek
                and Roman settlements, Roman and Ottoman bridges and numerous
                monuments of the Battle of Gallipoli at WV1.
              </p>
              <div className="w-148 h-111  mb-4">
                <img src={big1} alt="object-cover w-148 h-111 " />
              </div>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7  xs:text-base">
                The archaeological site of Troy is of immense significance in
                the understanding of the development of European civilization at
                a critical stage in its early development. It documents an
                uninterrupted settlement sequence over more than 3,000 years and
                bears witness to the succession of civilisations. The role of
                Troy is of particular importance in documenting the relations
                between Anatolia, the Aegean, and the Balkans, given its
                location at a point where the three cultures met.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7  xs:text-base">
                As for the doubs about the exact location of Troy,no other city
                has been found in this area that fits the size and
                description,that is why experts are confident these are the ruin
                of Troy.Homer describes the location of troy very clearlyn in
                The Ilıad.Also the city was right by the beach but it is totally
                solved now that the sea has retreated approx. 6 kms now.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7  xs:text-base">
                The Turkish government created the Historical National Park at
                Troy on September 30, 1996. It contains 136 square kilometres to
                include Troy and its vicinity, centered on Troy. The purpose of
                the park is to protect the historical sites and monuments within
                it, as well as the environment of the region.Public access to
                the ancient site is along the road from the vicinity of the
                museum in Tevfikiye to the east side of Hisarlik. Typically
                visitors come by bus, which disembarks its passengers into a
                large plaza ornamented with flowers and trees and some objects
                from the excavation.In 2018 the Troy Museum (Turkish Troya
                Müzesi) was opened at Tevfikiye village 800 metres east of the
                excavation.
              </p>

              <div className="w-148 h-111  mb-4">
                <img src={big2} alt="object-cover w-148 h-111 " />
              </div>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                How to get troy Ancient City?
              </h2>
              <p className="tracking-wider font-light  font-roboto  text-lg my-4 leading-7  xs:text-base">
                Troy is located 32 km away from Çanakkale(Dardanelles) province
                on the aegean cost of Turkey. As it is one of the top spots in
                region,there are plenty of options to come Troy by car,by direct
                minubuses or by plane to Çanakkale airport from outside of the
                region.
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
                    href="https://goo.gl/maps/HfhRqiDQm7W3LVJ98"
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
                  <span className="text-black opacity-90">Yes</span>
                </p>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Brochure -
                  <a
                    href="https://muze.gov.tr/s3/MysFileLibrary/Çanakkale%20Troya%20Ören%20Yeri-7518a4b2-5f6c-4554-a234-e1f8e06bbf76.pdf"
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
                    href="https://whc.unesco.org/en/list/849/"
                    target="_blank"
                  >
                    Unesco
                  </a>
                </p>

                <a
                  className="text-black font-medium text-base font-garamond tracking-wider underline ml-24"
                  href="https://en.wikipedia.org/wiki/Troy"
                  target="_blank"
                >
                  Wikipedia
                </a>
              </div>
              <Share />

              <div className="w-72 h-111 mt-16 mb-4 ">
                <img src={sideBig} alt="object-cover w-72 h-111 " />
              </div>

              <div className="w-72 h-72  mb-4 ">
                <img src={sideSmall} alt="object-cover w-72 h-72 " />
              </div>

              <div className="w-72 h-72  mb-4 ">
                <img src={sideSmall1} alt="object-cover  w-72 h-72 " />
              </div>
              <div className="w-72 h-72  mb-4 ">
                <img src={sideSmall2} alt="object-cover  w-72 h-72 " />
              </div>
              <div className="w-72 h-72  mb-4 ">
                <img src={sideSmall3} alt="object-cover  w-72 h-72 " />
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
