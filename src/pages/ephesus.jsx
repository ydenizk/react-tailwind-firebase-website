import React from "react";
import Share from "./../components/share";

import banner from "./../assets/ephesus/banner.jpg";
import big from "./../assets/ephesus/592-360.jpeg";
import big1 from "./../assets/ephesus/592-212.jpg";
import big2 from "./../assets/ephesus/592-444.jpeg";
import sideBig from "./../assets/ephesus/288-492.jpg";
import sideSmall from "./../assets/ephesus/290-290.jpg";
import sideSmall1 from "./../assets/ephesus/290x290.jpg";

export default function Ephesus() {
  return (
    <div className="w-full bg-neutral-100 md:mt-20">
      <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-16 pb-6 ">
        <div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    bg-neutral-100     ">
          <img
            src={banner}
            alt="nature-2"
            className="object-cover w-288 max-h-145 h-145  opacity-100 "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <h2 className="font-roboto font-medium text-orange-50 text-3xl mb-2 tracking-wider md:text-xl sm:text-lg xs:text-base">
              No <span className="font-roboto font-medium">07</span>
            </h2>
            <p className="uppercase font-roboto font-bold text-orange-50 text-3xl  mb-6 tracking-wide md:text-xl sm:text-lg xs:text-base ">
              HOME OF one of the Seven Wonders of the Ancient World
            </p>
            <p className="uppercase text-orange-50 font-mono text-lg tracking-wide whitespace-nowrap md:text-base xs:text-sm ">
              The beauty of ephesus
            </p>
          </div>
        </div>
      </header>

      <div className="  flex justify-center align-center bg-neutral-100 relative my-24">
        <div className="max-w-4xl  w-full ">
          {/* .................... */}
          <div className="text-center mb-20 px-2 ">
            <h2 className="uppercase mb-6 text-2xl tracking-widest font-semibold md:text-lg ">
              outstanding example of a Roman port city, with sea channel and
              harbour basin.
            </h2>
            <div className="w-24 bg-black h-0.5 my-0 mx-auto"></div>
          </div>

          {/* .................... */}

          <div className="  w-full p-0 text-black grid grid-cols-6 gap-2 px-2">
            <div className="w-full  col-span-4 ">
              <h4 className="tracking-wider font-bold text-lg mb-1 opacity-80">
                No07
              </h4>
              <p className=" tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Ephesus,on the cost of Ionia, is the most important Greek city
                in Ionian Asia Minor, the ruins of which lie near the modern
                village of Selƈuk of İzmir province in western Turkey.The city
                was famous in its day for the nearby Temple of Artemis
                (completed around 550 BC), which has been designated one of the
                Seven Wonders of the Ancient World. Its many monumental
                buildings included the Library of Celsus and a theatre capable
                of holding 24,000 spectators.Today, the ruins of Ephesus are a
                favourite international and local tourist attraction, being
                accessible from Adnan Menderes Airport and from the resort town
                Kuşadası. In 2015, the ruins were designated a UNESCO World
                Heritage Site.
              </p>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                In Roman times it was situated on the northern slopes of the
                hills Coressus and Pion and south of the Cayster (Küçükmenderes)
                River, the silt from which has since formed a fertile plain but
                has caused the coastline to move ever farther west. The Temple
                of Artemis, or Diana, to which Ephesus owed much of its fame and
                which seems to mark the site of the classical Greek city, was
                probably on the seaboard when it was founded (about 600 BCE),
                one mile east by northeast of Pion (modern Panayir Daǧ). In
                Roman times a sea channel was maintained with difficulty to a
                harbour well west of Pion. By late Byzantine times this channel
                had become useless, and the coast by the mid-20th century was
                three miles farther west.Ephesus commanded the west end of one
                great trade route into Asia, that along the Cayster valley, and
                had easy access to the other two, along the Hermus (Gediz) and
                the Maeander (Büyükmenderes) rivers.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                History
              </h2>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Humans had begun inhabiting the area surrounding Ephesus by the
                Neolithic Age (about 6000 BC), as shown by evidence from
                excavations at the nearby höyük (artificial mounds known as
                tells) of Arvalya and Cukurici.When Alexander the Great defeated
                the Persian forces at the Battle of Granicus in 334 BC, the
                Greek cities of Asia Minor were liberated.After the defeat of
                Antiochus the Great, king of Syria, by the Romans in 189 BCE,
                Ephesus was handed over by the conquerors to the king of
                Pergamum.Ephesus, as part of the kingdom of Pergamon, became a
                subject of the Roman Republic in 129 BC after the revolt of
                Eumenes III was suppressed. Stone carving of the goddess Nike
                The city felt Roman influence at once; taxes rose considerably,
                and the treasures of the city were systematically
                plundered.Ephesus remained subject to Rome, except for a brief
                time beginning in 88 BCE, .Mark Antony was welcomed by Ephesus
                for periods when he was proconsul and in 33 BC with Cleopatra
                when he gathered his fleet of 800 ships before the battle of
                Actium with Octavius.
              </p>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-5 leading-7">
                Ephesus became under Augustus the first city of the Roman
                province of Asia.The triumphal arch of 3 BCE and the aqueduct of
                4–14 CE initiated that long series of public buildings,
                ornamental and useful, that make Ephesus the most-impressive
                example in Greek lands of a city of imperial times.The city was
                partially destroyed by an earthquake in 614.The importance of
                the city as a commercial centre declined as the harbour was
                slowly silted up by the river despite repeated dredging during
                the city's history.Today, the harbour is 5 kilometres inland).
                The loss of its harbour caused Ephesus to lose its access to the
                Aegean Sea, which was important for trade. People started
                leaving the lowland of the city for the surrounding hills. The
                ruins of the temples were used as building blocks for new homes.
                Marble sculptures were ground to powder to make lime for
                plaster.
              </p>
              <div className="w-148 h-90  mb-6">
                <img src={big} alt="object-cover w-148 h-90 " />
              </div>

              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Ephesians were incorporated as vassals into the Ottoman Empire
                for the first time in 1390.After a period of unrest, the region
                was again incorporated into the Ottoman Empire in 1425. Ephesus
                was completely abandoned by the 15th century. The Preaching of
                Saint Paul at Ephesus, Eustache Le Sueur, 1649 Ephesus was an
                important centre for Early Christianity from the AD 50s.From AD
                52–54, the apostle Paul lived in Ephesus, working with the
                congregation and apparently organizing missionary activity into
                the hinterlands.Ephesus is believed to be the city of the Seven
                Sleepers, who were persecuted by the Roman emperor Decius
                because of their Christianity, and they slept in a cave for
                three centuries, outlasting their persecution. They are
                considered saints by Catholics and Orthodox Christians and whose
                story is also mentioned in the Qur'an.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                main sites,Temple of Artemis and Libvrary of Celsus
              </h2>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Ephesus is one of the largest Roman archaeological sites in the
                eastern Mediterranean. The visible ruins still give some idea of
                the city's original splendour, and the names associated with the
                ruins are evocative of its former life. The theatre dominates
                the view down Harbour Street, which leads to the silted-up
                harbour.
              </p>
              <div className="w-148 h-53  mb-6">
                <img src={big1} alt="object-cover w-148 h-53 " />
              </div>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                The Temple of Artemis, one of the Seven Wonders of the Ancient
                World,is a magnificent structure took 120 years to build but is
                now represented only by one inconspicuous column, revealed
                during an archaeological excavation by the British Museum in the
                1870s.Some fragments of the frieze (which are insufficient to
                suggest the form of the original) and other small finds were
                removed – some to London and some to the İstanbul Archaeology
                Museums. The great temple was built by Croesus, king of Lydia,
                about 550 BCE and was rebuilt after being burned by a madman
                named Herostratus in 356 BCE. The Artemesium was famous not only
                for its great size, over 350 by 180 feet (about 110 by 55
                metres), but also for the magnificent works of art that adorned
                it.The temple was destroyed by invading Goths in 262 CE and was
                never rebuilt. Little remains of the temple (though there are
                many fragments, especially of sculptured columns, in the British
                Museum). Excavation has revealed traces of both Croesus’s and
                the 4th-century temple and of three earlier smaller ones.
              </p>

              <div className="w-148 h-111  mb-6">
                <img src={big2} alt="object-cover w-148 h-111 " />
              </div>

              <p className="tracking-wider font-light  font-roboto  text-lg my-4 leading-7">
                The library is considered an architectural marvel, and is one of
                the only remaining examples of a library from the Roman Empire.
                The Library of Celsus was the third-largest library in the Roman
                world behind only Alexandria and Pergamum, believed to have held
                around twelve thousand scrolls.The interior of the library and
                its contents were destroyed in a fire that resulted either from
                an earthquake or a Gothic invasion in 262 A.D. . It lay in ruins
                for centuries until the façade was re-erected by archaeologists
                between 1970 and 1978.The design of the library, with its
                ornate, balanced façade, reflects the influence of Greek style
                on Roman architecture, which reached its height in the second
                century.
              </p>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                How to get Ephesus Ancient City?
              </h2>
              <p className="tracking-wider font-light  font-roboto  text-lg mb-6 leading-7">
                Ephesus,15 minutes away from Selçuk,1 hours away from İzmir
                province,is located in a pretty central area. You can get to
                Ephesus Ancient City by dolmushes from Selcuk bus station.You
                can also take a taxi from Selcuk or Kusadasi to Ephesus which
                can cost higher. If you are coming from Izmir Adnan Menderes
                airport, you can take the TCDD train or Izban train from Izmir
                Airport to Selcuk city center. The train station is directly in
                front of the airport.
              </p>
            </div>

            <div className="w-full   col-span-2">
              <div className="w-full bg-neutral-100  ">
                <h5 className="  tracking-wider font-semibold opacity-80">
                  CREDITS
                </h5>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Text - <span className="text-black opacity-90">Wikipedia , YDenizK ,Unesco</span>
                </p>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Photographs -
                  <span className="text-black opacity-90">YDenizK , Unesco</span>
                </p>
                <h5 className="  tracking-wider font-semibold mt-6 opacity-80">
                  INFO
                </h5>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Search on Map -
                  <a
                    className="text-black opacity-90 underline font-medium text-base font-garamond tracking-wider"
                    href="https://goo.gl/maps/5opuSXzhYuV5WuTz5"
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
                  Read More -
                  <a
                    className="text-black opacity-90 font-medium text-base font-garamond tracking-wider underline ml-2"
                    href="https://whc.unesco.org/en/list/1018/"
                    target="_blank"
                  >
                    Unesco
                  </a>
                </p>

                <a
                  className="text-black font-medium text-base font-garamond tracking-wider underline ml-24"
                  href="https://en.wikipedia.org/wiki/Ephesus"
                  target="_blank"
                >
                  Wikipedia
                </a>
                <br />
                <a
                  className="text-black font-medium text-base font-garamond tracking-wider underline ml-24"
                  href="https://www.britannica.com/place/Ephesus"
                  target="_blank"
                >
                  Britannica
                </a>
              </div>
              <Share />

              <div className="w-72 h-123 mt-16 mb-8 ">
                <img src={sideBig} alt="object-cover w-72 h-123 " />
              </div>

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
