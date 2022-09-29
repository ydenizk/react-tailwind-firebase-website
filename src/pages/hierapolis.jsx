import React from "react";
import Share from "./../components/share";

import banner from "./../assets/hierapolis/banner.jpg";
import big from "./../assets/hierapolis/592-360.jpg";
import big1 from "./../assets/hierapolis/592*360.jpg";
import big2 from "./../assets/hierapolis/592--360.jpg";
import sideSmall from "./../assets/hierapolis/288-288.jpg";

export default function Hierapolis() {
  return (
    <div className="w-full bg-neutral-100 ">
      <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-16 pb-10 ">
        <div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    bg-neutral-100     ">
          <img
            src={banner}
            alt="nature-2"
            className="object-cover w-288 max-h-145 h-145  opacity-90 "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <h2 className="font-roboto font-medium text-white text-3xl mb-2 tracking-wider">
              No <span className="font-roboto font-medium">08</span>
            </h2>
            <p className="uppercase font-roboto font-bold text-white text-4xl    whitespace-nowrap mb-6 tracking-wide ">
              HOME OF hot springs and healing
            </p>
            <p className="uppercase text-white font-mono text-lg tracking-wide">
              The beauty of hierapolis
            </p>
          </div>
        </div>
      </header>

      <div className="  flex justify-center align-center bg-neutral-100 relative my-24 ">
        <div className="max-w-4xl  w-full ">
          {/* .................... */}
          <div className="text-center mb-20 ">
            <h2 className="uppercase mb-6 text-2xl tracking-widest font-semibold ">
              The combination of striking natural formations and the development
              of a complex system of canals
            </h2>
            <div className="w-24 bg-black h-0.5 my-0 mx-auto"></div>
          </div>

          {/* .................... */}

          <div className="  w-full p-0 text-black grid grid-cols-6 gap-2 px-2">
            <div className="w-full  col-span-4 ">
              <h4 className="tracking-wider font-bold text-lg mb-1 opacity-80">
                No08
              </h4>
              <p className=" tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Hierapolis, modern Pamukkale, ancient Phrygian city in
                southwestern Turkey, about 6 miles (10 km) north of the ruins of
                Laodicea,is located on hot springs in classical Phrygia in
                southwestern Anatolia,adjacent to the modern Turkish cities of
                Pamukkale and Denizli.The hot springs have been used as a spa
                since at least the 2nd century BC, with many patrons retiring or
                dying there as evidenced by the large necropolis filled with
                tombs, most famously that of Marcus Aurelius Ammianos, which
                bears a relief depicting the earliest known example of a crank
                and rod mechanism, and the Tomb of Philip the Apostle. It was
                added as a UNESCO World Heritage Site in 1988.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                The Phrygians built a temple on the site probably in the first
                half of the 7th century BC.Hierapolis was founded as a thermal
                spa early in the 2nd century BC within the sphere of the
                Seleucid Empire.In 133 BC, Hierapolis thus became part of the
                Roman province of Asia. In AD 17, during the rule of the emperor
                Tiberius, a major earthquake destroyed the city. Through the
                influence of the Christian apostle Paul, a church was founded
                here while he was at Ephesus.The Christian apostle Philip spent
                the last years of his life here. The town's Martyrium was
                alleged to have been built upon the spot where Philip was
                crucified in AD 80. The Agora In the year 60, during the rule of
                Nero, an even more severe earthquake left the city completely in
                ruins. Afterwards, the city was rebuilt in the Roman style with
                imperial financial support. It was during this period that the
                city attained its present form.
              </p>
              <div className="w-148 h-90  mb-4">
                <img src={big} alt="object-cover w-148 h-90 " />
              </div>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Hierapolis was first excavated by the German archaeologist Carl
                Humann during June and July 1887. His excavation notes were
                published in his 1889 book Altertümer von Hierapolis. His
                excavations were rather general and included a number of
                drilling holes. He would gain fame for his later discovery of
                the Pergamon Altar, which was reconstructed in the Pergamon
                Museum in Berlin.After the large white limestone formations of
                the hot springs became famous again in the 20th century, it was
                turned into a tourist attraction named "Cotton Castle"
                (Pamukkale). The ancient city was rediscovered by travellers,
                but also partially destroyed by new hotels that were built
                there. These buildings have been removed in recent years;
                however, the hot water pool of one hotel was retained, and (for
                a fee) it is possible to swim amongst ancient stone
                remains.Excavations began in earnest in 1957 when Italian
                scientists, led by Paolo Verzone, began working on the site. The
                Hierapolis city ruins, apart from the partially restored theatre
                of Hierapolis, required some imagination, but the sense of
                history, as you walk through the ruined roads is also palpable.
                The ruins are much quieter than the much more visited hot
                Springs and terraces of Pamukkale
              </p>

              <div className="w-148 h-90  mb-4">
                <img src={big1} alt="object-cover w-148 h-90 " />
              </div>

              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                Necropolis and other ancient buildings
              </h2>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Necropolis is one of the best preserved in Turkey. Most of about
                the 1,200 tombs were constructed with local varieties of
                limestone, though marble has been used, as well. Most tombs date
                from the late Hellenic period, but there are also a considerable
                number from the Roman and early Christian periods. People who
                came for medical treatment to Hierapolis in ancient times and
                the native people of the city buried their dead in tombs of
                several types according to their traditions and socio-economic
                status.There are many architectural grave monuments in
                Hierapolis and they show different architectural techniques.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                A temple was raised to Apollo Lairbenos, the town's principal
                god during the late Hellenistic period.New temple was
                reconstructed in the 3rd century in Roman fashion, recycling the
                stone blocks from the older temple. The reconstruction had a
                smaller area and now only its marble floor remains.
              </p>
              <div className="w-148 h-90  mb-4">
                <img src={big2} alt="object-cover w-148 h-90 " />
              </div>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                The Theatre was probably constructed under the reign of Hadrian
                after the earthquake of 60 AD.Sculptural reliefs, displaying
                mythological subjects, were placed on the different storeys,
                while dedicatory inscriptions ran along the entablatures.An
                earthquake in Hierapolis in the 7th century caused the collapse
                of the entire building as well as the ultimate abandonment of
                the city. Since the 18th century, the monument's striking ruins
                have become a recurrent theme in European travellers’
                descriptions and engravings.The wall behind the scene was
                decorated with three rows of columns one behind another. The
                columns on the front row do not have grooves and stood on
                octagonal bases.The theatre has been the object of important
                restorations between 2004 and 2014.
              </p>

              <p className="tracking-wider font-light  font-roboto  text-lg my-4 leading-7">
                The great baths were centred upon the natural thermal pools and
                were one of the biggest buildings of Hierapolis.Especially in
                the period of the Roman Empire, Hierapolis and its site were a
                health centre. In those years, thousands of people used to come
                to the baths, of which there are more than fifteen, and they
                found their remedy in those baths.The Archaeology Museum has
                been located in the great baths since 1984. The museum also
                includes artifacts from Laodiceia, Colossae, Tripolis, Attuda
                and other towns of the Lycos (Çürüksu) valley.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                How to get Hierapolis Ancient City?
              </h2>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-4 leading-7">
                Hierapolis is located near (18km ) the Denizli province . The
                easiest way to get to Pamukkale is to arrive from Denizli bus
                station.If you arrive from elsewhere in Turkey by road you will
                most probably arrive at the terminal at the top of the bus
                station.The shuttles that go to Pamukkale from Denizli leave
                regularly.
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
                    href="https://goo.gl/maps/mhYHKiKHik5STdH76"
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
                    href="https://muze.gov.tr/s3/MysFileLibrary/61716d72-c67b-4f37-9379-af553a8f27cd.pdf"
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
                    href="https://whc.unesco.org/en/list/485/"
                    target="_blank"
                  >
                    Unesco
                  </a>
                </p>

                <a
                  className="text-black font-medium text-base font-garamond tracking-wider underline ml-24"
                  href="https://en.wikipedia.org/wiki/Hierapolis"
                  target="_blank"
                >
                  Wikipedia
                </a>
              </div>
              <Share />
              <div className="w-72 h-72 mt-16 mb-4 ">
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
