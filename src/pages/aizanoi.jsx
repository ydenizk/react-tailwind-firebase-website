import React from "react";
import Share from "./../components/share";

import banner from "./../assets/aizanoi/banner.jpg";
import big from "./../assets/aizanoi/592-360.jpg";
import big1 from "./../assets/aizanoi/592x360.jpg";
import big2 from "./../assets/aizanoi/592-332.jpg";

export default function Aizanoi() {
  return (
    <div className="w-full bg-neutral-100 md:mt-20 ">
      <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-16 pb-8 ">
        <div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    bg-neutral-100     ">
          <img
            src={banner}
            alt="nature-2"
            className="object-cover w-288 max-h-145 h-145  "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <h2 className="font-roboto font-medium text-white text-3xl mb-2 tracking-wider md:text-xl xs:text-base">
              No <span className="font-roboto font-medium">01</span>
            </h2>
            <p
              className=" font-roboto font-bold text-white text-4xl whitespace-nowrap mb-6 tracking-wide md:text-2xl sm:text-xl 
            sm:whitespace-normal xs:text-base"
            >
              HOME OF THE BEST PRESERVED ZEUS TEMPLE
            </p>
            <p className="uppercase text-white font-mono text-xl tracking-wide md:text-lg whitespace-nowrap xs:text-sm">
              The beauty of AIZANOI
            </p>
          </div>
        </div>
      </header>

      <div className="  flex justify-center align-center bg-neutral-100 relative my-24">
        <div className="max-w-4xl  w-full ">
          {/* .................... */}
          <div className="text-center mb-20 px-2 ">
            <h2 className="mb-6 text-2xl tracking-widest font-semibold uppercase  md:text-lg">
              One of the first stock exchange markets of the world was
              established in Aizanoi
            </h2>
            <div className="w-24 bg-black h-0.5 my-0 mx-auto"></div>
          </div>

          {/* .................... */}

          <div className="  w-full p-0 text-black grid grid-cols-6 gap-2 px-2">
            <div className="w-full  col-span-4 ">
              <h4 className="tracking-wider font-bold text-lg mb-1 opacity-80">
                No01
              </h4>
              <p className=" tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                The Aizanoi ancient city is located in the inner Western
                Anatolia , 48 km Southwest of the Kütahya Province, and within
                the boundaries of the Çavdarhisar district.Although this city is
                one of the greatest historical monuments in Turkey, it doesn’t
                well-known enough by the people.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Aizanoi was the capital of Aizanitis, who belonged to Phrigia.
                There was less information about Pre-Roman period for Aizanoi.
                It is said that the early settlement in the region dates back to
                the second millennium BC. During the excavations carried out
                around the Zeus Temple, settlement layers dated to the third
                millennium were unearthed.In the Hellenistic era, this area was
                ruled by the Bergama and Bithynia. During the 2nd and 3rd
                centuries BC, under the rule of the Roman Empire Arizona became
                a rich region with its production of grains, wool and wine.
                Starting from the 1st century BC Aizanoi started to transform to
                city from town. .
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                After the 7th century, Aezani fell into decline. Later, in
                Seljuk times, the temple hill was converted into a citadel
                (Turkish: hisar) by Çavdar Tatars, after which the recent
                settlement of Çavdarhisar is named.After the Byzantine Seljuk
                Principality, Çavdar Tatars used this is as a military base and
                fort around the 13th century. From that date, the area is called
                Çavdarhisar. The ruins of Aezani/Aizanoi were noted by European
                travellers in 1824. Survey work in the 1830s and 1840s was
                followed by systematic excavation conducted by the German
                Archaeological Institute from 1926, resumed in 1970, and still
                ongoing
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                Ancient buildings and Zeus temple
              </h2>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Aizanoi is one of the most significant cities of the Roman
                Period with the Zeus Temple, the Complex of Stadium-Theatre and
                the Macellum. The structure of the Temple which is one of the
                best preserved Zeus Temples in the world. The Temple of Zeus,
                situated upon a hill, was the city's main sanctuary.The distance
                between the columns and the walls of the inner rooms is twice as
                much as the distance between the columns; that means the
                building is a pseudodipteros. Since the space surrounded by the
                columns in the temple is marble-covered, the Zeus Temple in
                Aizanoi is unique in the pseudodipteros plan.The magnificent
                Temple of Zeus contributed much to the city's prominence in
                antiquity and it is among the rarest ancient buildings in
                Anatolia which have survived till today by preserving its
                original form.
              </p>
              <div className="w-148 h-90  mb-4">
                <img src={big} alt="object-cover w-148 h-90  brightness-50 " />
              </div>
              <div className="w-148 h-90  mb-4">
                <img src={big1} alt="object-cover w-148 h-90  brightness-50 " />
              </div>

              <p className="tracking-wider font-light  font-roboto  text-lg my-8 leading-7">
                The Complex of Stadium-Theatre is located in the north part of
                the city and was one of the most intensive development
                activities in the city during the Roman Period. The stadium with
                a capacity of 13500 people and the theatre with the capacity of
                20.000 people were constructed adjacently and as such it is
                unique in the ancient world.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7"></p>
              <div className="w-148 h-83  mb-8">
                <img src={big2} alt="object-cover w-148 h-83 brightness-75 " />
              </div>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                First STOCK EXCHANGE MARKET and Inflation
              </h2>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                One of the first stock exchange markets of the world was
                established in Aizanoi. The Macellum (Round Building) is dated
                to the midst of the 2nd century AD., probably serving as a food
                market. Inscriptions on the walls of this building show the
                prices of all goods sold in the markets of the Imperial that
                were controlled by an edict issued in 301 A.D. by the Roman
                Emperor Diocletianus in order to fight the inflation in that
                period. The inscriptions survived till today and can be read
                completely at present. It can be understood that Aizanoi was a
                cradle of trade with such as the most significant inscription.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                How to get Aizanoi Ancient City?
              </h2>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Aizanoi is only accessible with local buses or car from the
                Kutahya. As Çavdarhisar is a bit out of the way, and the Aizanoi
                ruins a bit scattered, a car is a great way to explore Aizanoi.
                Çavdarhisar sits along the D240 highway, 55 kilometers south of
                Kütahya city.If you’re coming to Aizanoi from Istanbul,you can
                take the intercity buses to Kutahya bus terminal and take a
                local minubues or hire a car to go to the Çavdarhisar.
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
                    href="https://goo.gl/maps/Qw3yub5phQxN2aRP7"
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
                    href="https://muze.gov.tr/s3/MysFileLibrary/kutahya-Aizonai_eng%20pdf%20baskıya-2e7481b5-a202-4662-962e-b17032d803af.pdf"
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
                    href="https://whc.unesco.org/en/tentativelists/5724/"
                    target="_blank"
                  >
                    Unesco
                  </a>
                </p>

                <a
                  className="text-black font-medium text-base font-garamond tracking-wider underline ml-24"
                  href="https://en.wikipedia.org/wiki/Aizanoi"
                  target="_blank"
                >
                  Wikipedia
                </a>
              </div>

              <Share />
            </div>
          </div>

          {/* .................... */}
        </div>
      </div>

      {/* .................... */}
    </div>
  );
}
