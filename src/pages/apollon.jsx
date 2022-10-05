import React from "react";
import Share from "./../components/share";

import apollon from "./../assets/apollon/Apollon.jpeg";
import small1 from "./../assets/apollon/apol-1-290x290.jpeg";
import small2 from "./../assets/apollon/apol-290x290.jpeg";
import big from "./../assets/apollon/592-664.jpeg";
import { Helmet } from "react-helmet-async";

export default function Apollon() {
  return (
    <div className="w-full bg-neutral-100 md:mt-20 ">
      <Helmet>
        <title> Appollo Smintheus </title>
        <meta
          name="description"
          content=" Home of the temple of Apollo Smintheion"
        />
        <link rel="canonical" href="/apollon" />
      </Helmet>
      <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-16 pb-10 ">
        <div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    bg-neutral-100     ">
          <img
            src={apollon}
            alt="nature-2"
            className="object-cover w-288 max-h-145 h-145  "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <h2 className="font-roboto font-medium text-white text-3xl mb-2 tracking-wider md:text-xl xs:text-lg">
              No <span className="font-roboto font-medium">03</span>
            </h2>
            <p className=" font-roboto font-bold text-white text-4xl   mb-6 tracking-wide lg:text-2xl  sm:text-xl  xs:text-lg">
              HOME OF THE TEMPLE OF APOLLO SMINTHEION
            </p>
            <p className="uppercase text-white font-mono text-lg tracking-wide md:text-base whitespace-nowrap">
              The beauty of Appollo Smintheus
            </p>
          </div>
        </div>
      </header>

      <div className="  flex justify-center align-center bg-neutral-100 relative my-24">
        <div className="max-w-4xl  w-full ">
          {/* .................... */}
          <div className="text-center mb-20 px-2 ">
            <h2 className="mb-6 text-2xl tracking-widest font-semibold uppercase md:text-lg">
              cult centers of Troas in ancient times
            </h2>
            <div className="w-24 bg-black h-0.5 my-0 mx-auto"></div>
          </div>

          {/* .................... */}

          <div className="  w-full p-0 text-black grid grid-cols-6 gap-2 px-2">
            <div className="w-full  col-span-4 ">
              <h4 className="tracking-wider font-bold text-lg mb-1 opacity-80">
                No03
              </h4>
              <p className=" tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Hamaxitus(or better known name as Appollo Smintheus) has been
                located on a rise called Beşiktepe near the village of Gülpınar
                in the Ayvacık district of Çanakkale Province, Turkey.The city's
                name derives from (hamaxa) meaning 'wagon', hence the adjective
                (hamaxitos), 'traversed by wagons', 'carriage-road',
                'high-road'.Hamaxitus was an ancient Greek city in the
                south-west of the Troas region of Anatolia which was considered
                to mark the boundary between the Troas and Aeolia.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                All foundation myths about Hamaxitus in Classical Antiquity were
                related to the foundation of the nearby temple of Apollo
                Smintheus. Hamaxitus is believed to have first been settled by
                Mytilenaeans in the 8th or 7th centuries BC; however,
                insufficient excavation has been done at the site to prove this
                definitively.Following the defeat of Athens at the end of the
                Peloponnesian War in 403 BC, Hamaxitus enjoyed a brief period of
                freedom from outside interference. In 399 BC it was forcibly
                re-incorporated into the Persian Empire before being freed once
                more by the Spartan Dercylidas in 398 BC.Hamaxitus was also
                enriched by its excellent harbour in this period. The Smintheum
                continued to appear on Roman and early mediaeval itineraries
                such as the Tabula Peutingeriana (4th or 5th century) and the
                Ravenna Cosmography (7th or 8th century). It is therefore likely
                that the port at Beşiktepe was still used by pilgrims, even if
                the settlement of Hamaxitus had long since declined.
              </p>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                The settlement at Hamaxitus appears to have survived at least
                until the early Roman period following its synoecism with
                Alexandreia Troas (the city had been renamed from Antigoneia
                Troas following the death of Antigonus at the Battle of Ipsus in
                301 BC). The fame of Apollo Smintheus only increased following
                the synoecism, which rebuilt the temple, created a new festival
                in the god's honour, and featured Apollo Smintheus on its coins
                until the mid-3rd century AD.The sacred road connects the
                Sanctuary of Apollo Smintheus to the town of Alexandria Troas,
                35 kilometers north.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                The temple was first made known to the world of archaeology by
                Jean Baptista Le Chevalier in 1785 when he saw some remains of
                the temple as he was traveling from Lectum-Babakale to
                Alexandria Troas. In 1853 English Admiral R.N. Spratt visited
                the site as he was working on the cartography of the environs.
                He recognized that building as the sacred place of Apollon in
                the ionic order. According to an inscription he announced the
                temple as relating to the cult of Smintheus-mouse
              </p>

              <div className="w-148 h-83 ">
                <img src={big} alt="object-cover w-148 max-h-166 " />
              </div>

              <p className="tracking-wider font-light  font-roboto  text-lg my-4 leading-7">
                The Temple of Apollonn Smintheus also attacks attention with its
                architectural design and style as well as embossings from
                Homer's Iliad Epic for the Hellenistic period. The temple, which
                was constructed in Ion style in 150 B.C, is the only remaining
                example in northwest Anatolia and Troas region today.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                How to get hamaxitus Ancient City?
              </h2>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Hamaxitus(or as commonly used Apollonn Smintheus ) is located in
                Gürpınar village, 1 hour from Troia and 1.5 hours away from
                Çanakkale.As the location is far from the main roads,only public
                transport option is to take the regular dolmushes from Çanakkale
                to Gürpınar.However the best option is to have or hire a car and
                follow the signs that starts just after the exit of Çannakkale
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
                    href="https://goo.gl/maps/k84B39WWsJbrXWv18"
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
                  Read More -
                  <a
                    className="text-black opacity-90 font-medium text-base font-garamond tracking-wider underline ml-2"
                    href="https://en.wikipedia.org/wiki/Hamaxitus"
                    target="_blank"
                  >
                    Wikipedia
                  </a>
                </p>
              </div>
              <Share />

              <div className="w-72 h-72 mt-16 mb-4 ">
                <img src={small1} alt="object-cover w-72 max-h-72 " />
              </div>
              <div className="w-72 h-72 ">
                <img src={small2} alt="object-cover w-72 max-h-72 " />
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
