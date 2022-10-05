import React from "react";
import Mail from "./../components/mail";
import img1 from "./../assets/priene/288-288.jpg";
import img2 from "./../assets/perga/288-288.jpg";
import img5 from "./../assets/didyma/288-288.jpg";
import img6 from "./../assets/troia/288-444.jpg";
import img7 from "./../assets/laodikeia/592-360.jpg";
import img8 from "./../assets/sagalassos/592-360.jpg";

import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <div className="bg-neutral-100 flex justify-center align-center my-16 mt-32  ">
        <Helmet>
          <title>About</title>
          <meta
            name="description"
            content="About Ancient Asia Minor"
          />
          <link rel="canonical" href="/about" />
        </Helmet>

        <div className="max-w-6xl  w-full p-0 bg-neutral-100 ">
          <h1 className="mt-24 mb-36 w-full font-garamond text-4xl tracking-wide text-center px-4 md:text-3xl xs:text-2xl   ">
            Ancient Asia Minor is an independent individual initiative to
            promote ancient sites and cities of various civilizations that lived
            in Asia Minor throughout centuries.Remembering most of these
            civilizations such as Troy,Ancient Greek,Lycia,Roman Empire are by
            all means the core of modern world and civilization,we believe that
            we still need many things to learn from most of these unique
            civilizations based on the way of living,social
            hierarchy,architecture etc.
          </h1>

          <div className="w-full h-96 relative mb-72">
            <img
              src={img1}
              alt=""
              className="absolute  left-96 translate-x-24 -top-8 z-10"
            />
            <img src={img2} alt="" className="absolute left-96 -bottom-48 " />

            <img src={img5} alt="" className="absolute z-10 rotate-6" />
            <img src={img6} alt="" className="absolute right-0 z-10" />
            <img
              src={img7}
              alt=""
              className="absolute right-12 top-24 rotate-12 z-0"
            />
            <img
              src={img8}
              alt=""
              className="absolute left-8 top-24 -rotate-12 z-0"
            />
          </div>
        </div>
      </div>
      <Mail />
    </>
  );
}
