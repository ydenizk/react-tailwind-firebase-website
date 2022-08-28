import React from "react";
import image1 from "./../assets/ban-1.jpg";
import image2 from "./../assets/ban-2.jpg";

export default function hedaer() {
  return (
    /*     <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-20 pb-10  border-b-2 border-slate-500 ">
      <div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    bg-neutral-100     ">
        <img
          src={image}
          alt="nature-2"
          className="object-cover w-288 max-h-145 h-145 brightness-50 opacity-90 "
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
          <h2 className="font-roboto font-medium text-white text-4xl mb-2 tracking-wider">
            No <span className="font-roboto font-medium">17</span>{" "}
          </h2>
          <p className=" font-roboto font-bold text-white text-5xl  whitespace-nowrap mb-6 tracking-wide ">
            ANCIENT SITES IN TURKEY
          </p>
          <p className="uppercase text-white font-mono text-xl tracking-wide">
            The beauty of ASPENDOS{" "}
          </p>
        </div>
      </div>
    </header> */
    <header className=" flex justify-center align-center  max-w-6xl  my-0 mx-auto bg-neutral-100 relative top-20 pb-10  border-b-2 border-slate-500 ">
      <div className="w-288 h-145 max-h-145 mx-6    pt-6    bg-neutral-100   ">
        <div className="grid grid-cols-2 gap-12 ">
          <div>
            <img
              className="w-145  h-145 "
              src={image1}
              alt="nature-2"
              className=" w-145 max-h-145 h-145  object-cover"
            />
          </div>
          <div className="w-145  h-145 ">
            <img
              src={image2}
              alt="nature-2"
              className=" w-145 max-h-145 h-145  object-cover "
            />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
       
          <p className=" font-roboto font-bold text-orange-200 text-5xl  whitespace-nowrap mb-6 tracking-wide ">
            ANCIENT SITES IN TURKEY
          </p>
          <p className="uppercase text-orange-200  font-mono text-xl tracking-wide">
            The beauty of ASPENDOS{" "}
          </p>
        </div>
      </div>
    </header>
  );
}
