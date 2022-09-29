import React from "react";
import Share from "./../components/share";

import banner from "./../assets/pergamon/banner.jpg";
import big from "./../assets/pergamon/592-360.jpg";
import big1 from "./../assets/pergamon/592--360.jpg";
import big2 from "./../assets/pergamon/592*360.jpg";
import big3 from "./../assets/pergamon/592-332.jpg";

export default function Pergamon() {
  return (
    <div className="w-full bg-neutral-100 ">
      <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-16 pb-10 ">
        <div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    bg-neutral-100     ">
          <img
            src={banner}
            alt="nature-2"
            className="object-cover w-288 max-h-145 h-145  "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <h2 className="font-roboto font-medium text-white text-3xl mb-2 tracking-wider">
              No <span className="font-roboto font-medium">16</span>
            </h2>
            <p className="uppercase font-roboto font-bold text-white text-4xl   whitespace-nowrap mb-6 tracking-wide ">
              HOME OF the pergamon kingdom
            </p>
            <p className="uppercase text-white font-mono text-lg tracking-wide">
              The beauty of pergamon
            </p>
          </div>
        </div>
      </header>

      <div className="  flex justify-center align-center bg-neutral-100 relative my-24">
        <div className="max-w-4xl  w-full ">
          {/* .................... */}
          <div className="text-center mb-20 ">
            <h2 className="uppercase mb-6 text-2xl tracking-widest font-semibold ">
              UNIQUE CULTURE, healing sanctuary and one of the most important
              libraries in the ancient world.
            </h2>
            <div className="w-24 bg-black h-0.5 my-0 mx-auto"></div>
          </div>

          {/* .................... */}

          <div className="  w-full p-0 text-black grid grid-cols-6 gap-2 px-2">
            <div className="w-full  col-span-4 ">
              <h4 className="tracking-wider font-bold text-lg mb-1 opacity-80">
                No16
              </h4>
              <p className=" tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Pergamon or Pergamum was a rich and powerful ancient Greek city
                in the northwest of Asia Minor. It is located 26 kilometres from
                the modern coastline of the Aegean Sea on and northwest of the
                modern city of Bergama, Turkey.The acropolis of Pergamon was the
                capital of the Hellenistic Attalid dynasty, a major centre of
                learning in the ancient world. Monumental temples, theatres,
                stoa or porticoes, gymnasium, altar and library were set into
                the sloping terrain surrounded by an extensive city wall. As the
                Attalid capital, Pergamon was the protector of cities in the
                Hellenistic Period. It had political and artistic power and
                built up a very intense relationship with its contemporary
                civilisations.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                history of pergamon
              </h2>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Settlement of Pergamon can be detected as far back as the
                Archaic period, thanks to modest archaeological finds,
                especially fragments of pottery imported from the west,
                particularly eastern Greece and Corinth, which date to the late
                8th century BC.After the city was passed to the Romans in 133
                BC, Pergamon became a metropolis and was the capital of the
                Roman Province of Asia during the Roman imperial period. The
                Romans maintained the already existing structures of the
                Hellenistic Period while adding new functions as a cultural and
                imperial cult centre of the empire. Consequently, during the
                Roman Period, many important structures were built or further
                developed, including the Asclepion Sanctuary, a well-known
                healing centre whose sacred spring still flows; the Roman
                Theatre; one of the largest Roman amphitheatres; a great
                aqueduct; the Trajan Temple and the Serapeum.In the middle of
                the 2nd century, Pergamon was one of the largest cities in the
                province, and had around 200,000 inhabitants.
              </p>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-5 leading-7">
                During the Byzantine Period due to the relocation of the trade
                roads and political centres from the Aegean Region to northwest
                Anatolia, especially to İstanbul (Constantinople), Pergamon was
                transformed from a major Hellenistic and Roman centre into a
                middle-sized town, and continued its cultural-religious
                importance as home to one of the Seven Churches of Asia.
                Pergamon now preserves and presents this transformation.After
                the arrival of the Ottomans, Pergamon experienced one more
                cultural adjustment, which is especially evident on the Bakırçay
                Plain. The Ottomans provided the city with all necessary urban
                structures, such as mosques, baths, bridges, khans, bedestens
                (covered bazaars), arastas (Ottoman markets) and water systems
                overlaying the Roman and Byzantine settlement layers.
              </p>
              <div className="w-148 h-90  mb-4">
                <img src={big} alt="object-cover w-148 h-90 " />
              </div>
              <div className="w-148 h-90  mb-4">
                <img src={big1} alt="object-cover w-148 h-90 " />
              </div>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Pergamon is associated with important people, schools, ideas and
                traditions concerning art, architecture, planning, religion and
                science. The Pergamon sculpture school contributed the ‘Pergamon
                style’.The Kybele Cult represents a continual tradition and
                belief in Anatolia.The authenticity of the Serapis Temple and
                sanctuary and its subsequent uses is expressed through the form
                and design, materials and substance of the archaeological
                remains.Pergamon is a good example of a city that expanded in a
                planned and controlled manner.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                Ancient buildings,library and pergamon altar
              </h2>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                The Attalids made the city of Pergamum one of the most important
                and beautiful of all Greek cities in the Hellenistic Age; it is
                one of the most outstanding examples of city planning in that
                period. They built a library excelled only by that at
                Alexandria. The kings after Attalus I collected many works of
                art from Greece to adorn the city’s temples and courtyards,
                supplementing the many works of sculpture, painting, and
                decoration commissioned from resident artists.The most famous
                structure from the city is the monumental altar, which was
                probably dedicated to Zeus and Athena. Its monuments included a
                theatre; the temple to Athena Nicephorus; and the great altar of
                Zeus with its richly decorated frieze, a masterpiece of
                Hellenistic art. A part of the altar and its surviving reliefs,
                restored and mounted, now stands in the Pergamon Museum in
                Berlin.
              </p>
              <div className="w-148 h-90  mb-4">
                <img src={big2} alt="object-cover w-148 h-90 " />
              </div>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                The well-preserved Theatre of Pergamon dates from the
                Hellenistic period and had space for around 10,000 people.
                Additional theatres were built in the Roman period, one in the
                Roman new city and the other in the sanctuary of Asclepius.On
                the highest point of the citadel is the Temple for Trajan and
                Zeus Philios.Pergamon's oldest temple is a sanctuary of Athena
                from the 4th century BC. It was a north-facing Doric peripteros
                temple with six columns on the short side and ten on the long
                side and a cella divided into two rooms.
              </p>

              <div className="w-148 h-83  mb-4">
                <img src={big3} alt="object-cover w-148 h-83 " />
              </div>

              <p className="tracking-wider font-light  font-roboto  text-lg my-4 leading-7">
                The Library of Pergamon was the second largest in the ancient
                Greek world after the Library of Alexandria, containing at least
                200,000 scrolls. The location of the library building is not
                certain. Since the 19th century excavations, it has generally
                been identified with an annex of the northern stoa of the
                sanctuary of Athena in the Upper Citadel, which was built by
                Eumenes II. Inscriptions in the gymnasium which mention a
                library might indicate, however, that the building was located
                in that area.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                how to get pergamon ancient city?
              </h2>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Pergamon is located in Bergama town of Izmir province(108 kms
                away) and it is pretty easy to go with a car or public
                transportation.
              </p>
            </div>

            <div className="w-full   col-span-2">
              <div className="w-full bg-neutral-100  ">
                <h5 className="  tracking-wider font-semibold opacity-80">
                  CREDITS
                </h5>
                <p className="font-normal text-sm font-garamond tracking-wider text-gray-500">
                  Text - <span className="text-black opacity-90">YDenizK</span>
                </p>
                <p className="font-normal text-sm font-garamond tracking-wider text-gray-500">
                  Photographs -
                  <span className="text-black opacity-90 font-medium text-sm font-garamond ">
                    YDenizK
                  </span>
                </p>
                <h5 className="  tracking-wider font-semibold mt-6 opacity-80">
                  INFO
                </h5>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Search on Map -
                  <a
                    className="text-black opacity-90 underline font-medium text-medium font-garamond tracking-wider"
                    href="https://goo.gl/maps/cMNXdtWjrNh9SeJh8"
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
                  <span className="text-black opacity-90 text-base font-medium  font-garamond  ">
                    Yes
                  </span>
                </p>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Brochure -
                  <a
                    href="https://muze.gov.tr/s3/MysFileLibrary/2f9eef40-9c35-49dc-8100-051b251c90af.pdf"
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
                    href="https://whc.unesco.org/en/list/1457/"
                    target="_blank"
                  >
                    Unesco
                  </a>
                </p>

                <a
                  className="text-black font-medium text-sm font-garamond tracking-wider underline ml-24"
                  href="https://en.wikipedia.org/wiki/Pergamon"
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
