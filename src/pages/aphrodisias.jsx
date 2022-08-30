import React from 'react'
import Share from "./../components/share";

import aphro from "./../assets/aphrodisias/aphro.jpg";
import mid1 from "./../assets/aphrodisias/aphro-440-492.jpg";
import mid2 from "./../assets/aphrodisias/aphro-440-492.jpeg";
import big1 from "./../assets/aphrodisias/aphro-592-360.jpeg";
import big2 from "./../assets/aphrodisias/aphro-2-592-360.jpeg";
import big3 from "./../assets/aphrodisias/aphro-3-592-360.jpg";


export default function  Aphrodisias() {
  return (
    <div className="w-full bg-neutral-100">
      <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-16 pb-10 ">
        <div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    bg-neutral-100     ">
          <img
            src={aphro}
            alt="nature-2"
            className="object-cover w-288 max-h-145 h-145 brightness-75 opacity-100 "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <h2 className="font-roboto font-medium text-white text-3xl mb-2 tracking-wider">
              No <span className="font-roboto font-medium">02</span>
            </h2>
            <p className=" font-roboto font-bold text-white text-4xl  whitespace-nowrap mb-6 tracking-wide ">
              HOME OF APHRODITE
            </p>
            <p className="uppercase text-white font-mono text-lg tracking-wide">
              The beauty of APHRODISIAS
            </p>
          </div>
        </div>
      </header>

      <div className="  flex justify-center align-center bg-neutral-100 relative my-24">
        <div className="max-w-4xl  w-full ">
          {/* .................... */}
          <div className="text-center mb-20 ">
            <h2 className="mb-6 text-2xl tracking-widest font-semibold ">
              HOME OF APHRODITE
            </h2>
            <div className="w-24 bg-black h-0.5 my-0 mx-auto"></div>
          </div>

          {/* .................... */}

          <div className="  w-full p-0 text-black grid grid-cols-6 gap-2">
            <div className="w-full  col-span-4 ">
              <h4 className="tracking-wider font-bold text-lg mb-1 opacity-80">
                No02
              </h4>
              <p className=" tracking-wider font-light text-base font-noto mb-6 leading-7">
                Aphrodisias,was a small Roman Hellenistic city in the historic
                Caria cultural region of western Anatolia, Turkey. It is located
                near the modern village of Geyre, about 100 km (62 mi)
                east/inland from the coast of the Aegean Sea, and 230 km (140
                mi) southeast of İzmir.
              </p>
              <p className="tracking-wider font-light text-base font-noto mb-6 leading-7">
                The city shared a close interest in the goddess Aphrodite with
                Sulla, Julius Caesar and the emperor Augustus, Aphrodisias came
                to have a close relationship with Rome. It obtained a privileged
                ‘tax-free’ political status from the Roman senate, and developed
                a strong artistic, sculptural tradition during the Imperial
                Period. Many elaborately decorated structures were erected
                during the period of Roman rule, all made from the local marble.
              </p>
              <p className="tracking-wider font-light text-base font-noto mb-6 leading-7">
                The city had notable schools for sculpture, as well as
                philosophy, remaining a centre of paganism until the end of the
                5th century. It was destroyed by earthquake in the early 7th
                century, and never recovered its former prosperity, being
                reduced to a small fortified settlement on the site of the
                ancient theatre.Around the same time, it was also renamed to
                Stauropolis to remove pagan connotations, but already by the 8th
                century it was known as Caria after the region, which later gave
                rise to its modern Turkish name, Geyre.Another key aspect of
                Aphrodisias was its cosmopolitan social structure (Greek, Roman,
                Carian, pagan, Jewish, Christian) that is abundantly articulated
                in the site’s 2,000 surviving inscriptions.
              </p>
              <div className="w-224 h-123 grid grid-cols-2 gap-2 mb-6">
                <div className="w-110 h-123 ">
                  <img src={mid1} alt="object-cover w-110 h-123 " />
                </div>
                <div className="w-110 h-123 ">
                  <img src={mid2} alt="object-cover w-110 h-123 " />
                </div>
              </div>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                Ancient buildings and Temple of Aphrodite
              </h2>

              <p className="tracking-wider font-light text-base font-noto mb-6 leading-7">
                The Cult of Aphrodite was the most important cult of
                Aphrodisias. The sanctuary at Aphrodisias had a distinctive cult
                statue of Aphrodite which defined the city’s identity. The
                Aphrodite of Aphrodisias combined aspects of a local Anatolian,
                archaic fertility goddess with those of the Hellenic Aphrodite,
                goddess of love and beauty. This identifying image has been
                found from Anatolia across the Mediterranean, from the city of
                Rome to the Levant. The importance of the Aphrodite of
                Aphrodisias continued well beyond official imperial acceptance
                of Christianity; the Temple did not become a church until c. AD
                500.
              </p>
              <p className="tracking-wider font-light text-base font-noto mb-6 leading-7">
                The Bouleuterion (council house), or Odeon, is centered on the
                north side of the North Agora. As it stands today, it consists
                of a semicircular auditorium fronted by a shallow stage
                structure about 46 m wide. The lower part of the auditorium
                survives intact, with nine rows of marble seats divided into
                five wedges by radial stairways. The seating of the upper part,
                amounting to an additional twelve rows, has collapsed together
                with its supporting vaults. The plan is an extremely open one,
                with numerous entrances at ground level and several stairways
                giving access to the upper rows of seats. A system of massive
                parallel buttresses shows that the building was originally
                vaulted. The auditorium would have been lighted by a series of
                tall, arched windows in the curved outer wall. Seating capacity
                can be estimated at about 1,750.
              </p>
              <div className="w-148 h-83 mb-6">
                <img src={big2} alt="object-cover w-72 max-h-72 " />
              </div>
              <p className="tracking-wider font-light text-base font-noto mb-6 leading-7">
                The stadium was used for athletic events until the theatre was
                badly damaged by a 7th-century earthquake, requiring part of the
                stadium to be converted for events previously staged in the
                theatre. The stadium measures approximately 270 m by 60 m (200
                ft). With 30 rows of seats on each side, and around each end, it
                would have had a maximum capacity for around 30,000 spectators.
                The track measures approximately 225 m (738 ft) by 30 m (98 ft).
                As the stadium is considerably larger and structurally more
                extensive than even the Stadium of Delphi; it is probably one of
                the best preserved structures of its kind in the Mediterranean.
              </p>

              <div className="w-148 h-83 ">
                <img src={big1} alt="object-cover w-72 max-h-72 " />
              </div>

              <p className="tracking-wider font-light text-base font-noto mb-6 leading-7">
                The first formal excavations were undertaken in 1904–5, by a
                French railroad engineer, Paul Augustin Gaudin. Some of the
                architectural finds (mostly friezes, pilasters and capitals) he
                discovered at the site are now in the British Museum.The most
                recent, ongoing excavations were begun under the aegis of New
                York University in 1962 and are currently ongoing.
              </p>
              <div className="w-148 h-83 mb-6">
                <img src={big3} alt="object-cover w-72 max-h-72 " />
              </div>
              <h2 className="mb-1  uppercase text-lg tracking-widest font-semibold">
                How to get Aphrodisias Ancient City?
              </h2>

              <p className="tracking-wider font-light text-base font-noto mb-6 leading-7">
                Afrodisias is located inland in the Southern Aegean region of
                Turkey,about 30 km west of Denizli,2 hours away from Ephesus and
                2,5 hours from Pamukkale.The nearby village is named Geyre, less
                than 10 km south of Karacasu.The easiest option is use a dolmush
                (shared van) from Pamukkale for 30-40 TL.The dolmushes leave
                Pamukkale at 9:30 am and return around 3:30 pm. This gives you
                three hours at the ruins, which is sufficient.If you have a car
                with you, it is quite easy to get to Aphrodisias. If you follow
                the signboards on Nazilli road, you can easily find the Aphrodisias Ancient
                City.
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
                    href=""
                    target="_blank"
                  >
                    Google Maps
                  </a>
                </p>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Unesco Word Heritage List -
                  <span className="text-black opacity-90">Yes</span>
                </p>
                <p className="font-medium text-base font-garamond tracking-wider text-gray-500">
                  Read More -
                  <a
                    className="text-black opacity-90 font-medium text-base font-garamond tracking-wider underline ml-2"
                    href="https://whc.unesco.org/en/tentativelists/5829/"
                    target="_blank"
                  >
                    Unesco
                  </a>
                </p>

                <a
                  className="text-black font-medium text-base font-garamond tracking-wider underline ml-24"
                  href="https://en.wikipedia.org/wiki/Sardis"
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