import React from 'react'

import Share from "./../components/share";
import { Helmet } from "react-helmet-async";

import nysa from "./../assets/nysa/nysa.jpg";
import big from "./../assets/nysa/592x360.jpg";
import side1 from "./../assets/nysa/290x360.jpg";
import side2 from "./../assets/nysa/290-360.jpg";



export default function Nysa() {

  return (
    <div className="w-full bg-neutral-100 md:mt-20  ">
      <Helmet>
        <title>Nysa</title>
        <meta name="description" content="  Home of Dionysus,the god of wine" />
        <link rel="canonical" href="/nysa" />
      </Helmet>

      <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-16 pb-8 xs:pb-2   xs:w-screen">
        <div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    bg-neutral-100     ">
          <img
            src={nysa}
            alt="nature-2"
            className="object-cover w-288 max-h-145 h-145 "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <h2 className="font-roboto font-medium text-gray-200 text-3xl mb-2 tracking-wider md:text-base">
              No <span className="font-roboto font-medium">20</span>
            </h2>
            <p
              className=" font-roboto font-bold text-gray-200 text-3xl uppercase  whitespace-nowrap mb-6 tracking-wide 
            md:text-2xl sm:whitespace-normal sm:text-xl  xs:text-base "
            >
              HOME OF Dionysus,the god of wine
            </p>
            <p className="uppercase text-gray-500   font-mono text-lg tracking-wide md:text-base xs:text-sm whitespace-nowrap">
              The beauty of NYSA
            </p>
          </div>
        </div>
      </header>

      <div className="  flex justify-center align-center bg-neutral-100 relative my-24">
        <div className="max-w-4xl  w-full ">
          {/* .................... */}
          <div className="text-center mb-20 px-2 ">
            <h2 className="mb-6 text-2xl tracking-widest font-semibold uppercase md:text-lg xs:text-base ">
              famous city especially in the field of education and Strabo was
              educated in this city
            </h2>
            <div className="w-24 bg-black h-0.5 my-0 mx-auto"></div>
          </div>

          {/* .................... */}

          <div className="  w-full p-0 text-black grid grid-cols-6 gap-2 px-2">
            <div className="w-full  col-span-4 ">
              <h4 className="tracking-wider font-bold text-lg mb-1 opacity-80">
                No02
              </h4>
              <p className=" tracking-wider font-light  font-roboto  text-lg mb-6 leading-7 xs:text-base">
                Nysa was an ancient city and bishopric of Asia Minor, whose
                remains are in the Sultanhisar district of Aydın Province of
                Turkey, 50 kilometres east of the Ionian city of Ephesus.Nysa is
                an important city of the ancient Caria and then Lydia but under
                the Roman Empire it was within the province of Asia, which had
                Ephesus for capital, and the bishop of Nysa was thus a suffragan
                of the metropolitan see of Ephesus.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7 xs:text-base">
                In Greek mythology, Dionysus, the god of wine was born or raised
                in Nysa or Nyssa, a name that was consequently given to many
                towns in all parts of the world associated with cultivation of
                grapes.The name "Nysa" is mentioned in Homer's Iliad.The town
                derived its name of Nysa from Nysa, one of the wives of
                Antiochus I Soter, who reigned from 281 to 261 BC and founded
                the city on the site of an earlier town called Athymbra.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7 xs:text-base">
                A bridge connects the city, which was established as two cities.
                Theater, Gymnasion, agora, tunnel etc. structures are available.
                Additions were made to the buildings during the Roman period.
                The city reached an important point in the cultural field,
                especially when it was under the rule of the Roman Empire.
                Buildings, streets and squares established on both sides of a
                very steep strait were supported by vaulted infrastructures.
                Nysa was a famous city especially in the field of education in
                ancient times and Strabo was educated in this city. The ruins of
                the Gymnasion and library in the ancient city constitute these
                educational buildings in Nysa.
              </p>
              <div className="w-148 h-90 mb-6 ">
                <img src={big} alt="object-cover w-148 max-h-90 " />
              </div>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7 xs:text-base">
                There are important ruins on the site from the Hellenistic,
                Roman, and Byzantine periods.The well-preserved theatre, built
                during the Roman Imperial period, is famous for its friezes
                depicting the life of Dionysus, god of the grape harvest,
                winemaking and wine. Today, no remains of the Hellenistic city
                wall surrounding Nysa are found. However, traces of city walls
                from the Byzantine period can be seen in places.The best
                preserved structure of Nysa is the Bouleuterion. This structure
                was described as Strabo Gerontikon (council of elders).
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7 xs:text-base">
                Nysa was ruled by the Hellenistic Seleucid Empire, the Roman
                Empire, its continuation the Byzantine Empire, and by the Turks,
                until its final abandonment after being sacked by Tamerlane in
                1402. The coins of Nysa are very numerous, and exhibit a series
                of Roman emperors from Augustus to Gallienus.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                How to get Nysa Ancient City?
              </h2>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7 xs:text-base">
                Nysa, is 30 km away from Aydin city on the Aydin– Denizli
                highway at Sultanhisar District.It is 3 km northwest of
                Sultanhisar.The shuttles that go to Sultanhisar from Aydın leave
                regularly everyday.
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
                    YDenizK , Wikipedia
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
                    href="https://goo.gl/maps/V2qqQGmcb6nHB7nq8"
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
                    href="https://muze.gov.tr/s3/MysFileLibrary/Aydın%20Nysa%20Ören%20Yeri-67f823d9-d0d9-4469-a709-b299a09177cd.pdf"
                    className="text-black opacity-90 underline"
                    target="_blank"
                  >
                    Check out or Download
                  </a>
                </p>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Read More -
                  <a
                    className="text-black font-medium text-base font-garamond tracking-wider underline w"
                    href="https://en.wikipedia.org/wiki/Nysa_on_the_Maeander"
                    target="_blank"
                  >
                    Wikipedia
                  </a>
                </p>
              </div>
              <Share />

              <div className="w-72 h-90 mt-16 mb-6 ">
                <img src={side1} alt="object-cover w-72 h-123 " />
              </div>
              <div className="w-72 h-90 mt-2 mb-8 ">
                <img src={side2} alt="object-cover w-72 h-123 " />
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
