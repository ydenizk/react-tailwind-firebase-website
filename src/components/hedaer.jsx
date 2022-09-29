import React from "react";
import image1 from "./../assets/ban-1.jpg";
import image2 from "./../assets/ban-2.jpg";

export default function Hedaer() {
  return (
    <>
      <header
        className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 
      relative top-24 pb-6  border-b-2 border-slate-500 "
      >
        <div className="w-288 h-145 max-h-145 mx-4  max-w-6xl  pt-6   bg-neutral-100   ">
          <div className="grid grid-cols-2 gap-8     ">
            <div className="relative">
              <img
              
                src={image1}
                alt="nature-2"
                className=" w-145 max-h-145 h-145  object-cover"
              />
              <div className="text-black uppercase font-roboto tracking-wider text-xs font-light pt-1">
                assos
              </div>
            </div>
            <div className="w-145  h-145 relative  ">
              <img
                src={image2}
                alt="nature-2"
                className=" w-145 max-h-145 h-145  object-cover "
              />
              <div className="text-black uppercase font-roboto tracking-wider text-xs font-light pt-1 w-full text-right">
                ephesus
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <p className="uppercase text-orange-200  font-mono text-xl tracking-wide mb-6  ">
              The beauty of asıa mınor
            </p>
            <p
              className=" uppercase font-garamond font-semibold text-orange-200 text-5xl  
            whitespace-nowrap mb-1 tracking-wide  "
            >
              ANCIENT SITES and cities
            </p>
            <p
              className=" uppercase font-garamond font-semibold text-orange-200 text-5xl  
            whitespace-nowrap tracking-wide  "
            >
              of turkey
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
