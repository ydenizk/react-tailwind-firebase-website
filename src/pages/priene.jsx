import React from "react";
import Share from "./../components/share";

import banner from "./../assets/priene/banner.jpg";
import big from "./../assets/priene/592-360.jpg";
import big1 from "./../assets/priene/592*360.jpg";
import big2 from "./../assets/priene/592--360.jpeg";
import sideSmall from "./../assets/priene/288-288.jpg";
import sideSmall1 from "./../assets/priene/288*288.jpg";

export default function Priene() {
  return (
    <div className="w-full bg-neutral-100 md:mt-20 ">
      <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-16 pb-8 ">
        <div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    bg-neutral-100     ">
          <img
            src={banner}
            alt="nature-2"
            className="object-cover w-288 max-h-145 h-145 brightness-75  "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <h2 className="font-roboto font-medium text-white text-3xl mb-2 tracking-wider md:text-xl">
              No <span className="font-roboto font-medium">17</span>
            </h2>
            <p
              className="uppercase font-roboto font-bold text-white text-3xl   whitespace-nowrap mb-6 tracking-wide lg:text-2xl md:text-lg 
            sm:whitespace-normal xs:text-base  "
            >
              HOME OF high-quality Hellenistic art and architecture
            </p>
            <p className="uppercase text-white font-mono text-lg tracking-wide md:text-base whitespace-nowrap">
              The beauty of priene
            </p>
          </div>
        </div>
      </header>

      <div className="  flex justify-center align-center bg-neutral-100 relative my-24">
        <div className="max-w-4xl  w-full ">
          {/* .................... */}
          <div className="text-center mb-20 ">
            <h2 className="uppercase mb-6 text-2xl tracking-widest font-semibold md:text-lg ">
              a port city situated at the mouth of the Maeander(Menderes)
            </h2>
            <div className="w-24 bg-black h-0.5 my-0 mx-auto"></div>
          </div>

          {/* .................... */}

          <div className="  w-full p-0 text-black grid grid-cols-6 gap-2 px-2">
            <div className="w-full  col-span-4 ">
              <h4 className="tracking-wider font-bold text-lg mb-1 opacity-80">
                No17
              </h4>
              <p className=" tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Priene was an ancient Greek city of Ionia (and member of the
                Ionian League) located 6 kilometres (3.7 mi) north of what was
                then the course of the Maeander River (now called the Büyük
                Menderes or "Big Maeander"). It was also 25 kilometres (16 mi)
                from ancient Miletus.The city was built on the sea coast,
                overlooking the former Latmian Gulf of the Aegean. It was
                developed on steep slopes and terraces extending from sea level
                to a height of 380 metres (1,250 ft) above sea level at the top
                of the escarpment.Its well-preserved remains are a major source
                of information about ancient Greek town planning.
              </p>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Priene is known to have been the site of high-quality
                Hellenistic art and architecture. The city's original position
                on Mount Mycale has never been discovered; however, it is
                believed that it was on a peninsula with two harbours. Priene
                never held a great deal of political importance due to the
                city's relatively limited size, as it is believed around four to
                five thousand inhabitants occupied the region.The city was
                arranged into four districts, firstly the political district,
                which consisted of the bouleuterion and the prytaneion; the
                cultural district containing the theatre; the commercial, where
                the agora was located; and finally the religious district, which
                contained sanctuaries dedicated to Zeus, Demeter and, most
                importantly, the Temple of Athena.
              </p>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-5 leading-7">
                The city visible on the slopes and escarpment of Mycale was
                constructed according to plan entirely during the 4th century
                BCE. The original Priene had been a port city situated at the
                then mouth of the Maeander(Menderes) River. This location caused
                insuperable environmental difficulties, due to slow aggradation
                of the riverbed and progradation in the direction of the Aegean
                Sea.
              </p>
              <div className="w-148 h-90  mb-6">
                <img src={big} alt="object-cover w-148 h-90 " />
              </div>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                The Greek city (there may have been unknown habitations of other
                ethnicities, as at Miletus) was founded by a colony from the
                ancient Greek city of Thebes in the vicinity of ancient Aneon at
                about 1000 BCE.By the 8th century BC Priene was a member of the
                Ionian League, whose central shrine, the Panionion, lay within
                the city’s territory.While Miletus apparently still had an open
                port then, according to recent geoarchaeological research,
                Priene had already lost the port and open connection to the sea
                in about the 1st century BCE.Today Miletus is many miles from
                the sea. Priene stands at the edge of a fertile plain, now a
                checkerboard of privately owned fields. A Greek village remained
                after the population decline. After the 12th century CE, more
                Turkish people moved into the area. In the 13th century CE
                Priene was known as "Sampson".The area remained under Byzantine
                control until the late 13th century.By 1923, whatever Greek
                population remained was expelled in the population exchange
                between Greece and Turkey following World War I.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                Ancient buildings
              </h2>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                The city’s remains lie on successive terraces that rise from a
                plain to a steep hill upon which stands the Temple of Athena
                Polias. Priene is laid out on a grid plan, with 6 main streets
                running east-west and 15 streets crossing at right angles, all
                being evenly spaced. The town was thereby divided into about 80
                blocks, or insulae, each averaging 46 by 34 m. In the centre of
                the town stand not only the Temple of Athena but an agora, a
                stoa, an assembly hall, and a theatre with well-preserved stage
                buildings. A gymnasium and stadium are in the lowest section.
                The private houses typically consisted of a rectangular
                courtyard enclosed by living quarters and storerooms and opening
                to the south onto the street by way of a small vestibule.
              </p>
              <div className="w-148 h-90  mb-6">
                <img src={big1} alt="object-cover w-148 h-90 " />
              </div>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                The ruins, which fell on the successive terraces where they were
                built, were the object of investigatory missions sent out by the
                English Society of Dilettanti in 1765 and 1868. They were
                excavated by Theodor Wiegand (1895–1899) for the Berlin Museum.
              </p>

              <div className="w-148 h-90  mb-6">
                <img src={big2} alt="object-cover w-148 h-90 " />
              </div>

              <p className="tracking-wider font-light  font-roboto  text-lg my-4 leading-7">
                Priene was a wealthy city, as the plenitude of fine urban homes
                in marble and the private dedications of public buildings
                suggests. In addition, historical references to the interest of
                Mausolus and Alexander the Great indicate its standing. One
                third of the houses had indoor toilets, a rarity in this
                society.Typically cities had public banks of outdoor seats, side
                by side, an arrangement for which the flowing robes of the
                ancients were suitably functional. Indoor plumbing requires more
                extensive water supply and sewage systems.The source of Ionian
                wealth was maritime activity; Ionia had a reputation among the
                other Greeks for being luxurious. The intellectuals, such as
                Heraclitus, often railed against their practices.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                How to get priene Ancient City?
              </h2>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Priene is located on the town of Güllübahçe,15 km way from
                Didim,34 km south of Kuşadası and 54 km south of Selçuk and
                Ephesus by way of Söke.
              </p>
            </div>

            <div className="w-full   col-span-2">
              <div className="w-full bg-neutral-100  ">
                <h5 className="  tracking-wider font-semibold opacity-80">
                  CREDITS
                </h5>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Text -{" "}
                  <span className="text-black opacity-90">
                    YDenizK , WikiPedia
                  </span>
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
                    href="https://goo.gl/maps/mm5e5vFEmAagJLZh7"
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
                    href="https://muze.gov.tr/s3/MysFileLibrary/Aydın%20Priene%20Ören%20Yeri-Eng-aab9bb41-6149-4f16-bc29-dcabc99a7994.pdf"
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
                    href="https://en.wikipedia.org/wiki/Priene"
                    target="_blank"
                  >
                    Wikipedia
                  </a>
                </p>
              </div>
              <Share />

              <div className="w-72 h-72 mt-20 mb-4 ">
                <img src={sideSmall} alt="object-cover w-72 h-72 " />
              </div>

              <div className="w-72 h-72  mb-4 ">
                <img src={sideSmall1} alt="object-cover  w-72 h-72 " />
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
