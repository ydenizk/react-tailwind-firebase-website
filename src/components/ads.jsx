import React, {  useState } from 'react'
import {FaAngleDoubleDown,FaRegClone} from "react-icons/fa"


import nat2 from "./../assets/nat-2.jpg"
import nat4 from "./../assets/nat-4.jpg"
import nat5 from "./../assets/nat-5.jpg"
import nat6 from "./../assets/nat-6.jpg"
import nat7 from "./../assets/nat-7.jpg"

export default function Ads({showp,setShowP}) {


//
//apollon sm,intheon
//tlos

  return (
<main className="my-8 flex justify-center align-center text-center bg-neutral-100 ">
<div className=" max-w-6xl  border-t-2 border-t-black pt-4">

<div className="mt-6 text-center">
    <h2 className="mb-2">Featured Places</h2>
    <button className="text-center w-full "> 
        <FaAngleDoubleDown className="my-0 mx-auto" />  
  </ button>
  
  <div>
      <div className="grid  grid-cols-3 gap-6 my-4 mt-12">
          <div className="w-91 h-53 relative"  >
              {/* <div className="absolute text-white w-full  pt-4 text-center top-12  z-10 hover:translate-y-4 transition duration-700 ease-in-out "> */}
                  <h3 className=" absolute text-xl uppercase font-medium  top-16  text-center w-full text-white z-10">Troia</h3>
                  <p className=" absolute text-2xl uppercase font-bold whitespace-nowrap tracking-wide top-24 w-full text-white z-10 font-roboto">Camel Herders of</p>
                  <p className=" absolute text-2xl uppercase font-bold   tracking-wide top-32 w-full text-white z-10 font-roboto">Gallipoli</p>
                 
              
           
           <FaRegClone className=" text-right  absolute bottom-4 right-4 text-white text-xl z-10 "  />
              <img  src={nat5} alt="nat5" className=" w-91 h-53 object-cover opacity-70 hover:opacity-100   transition-all  duration-500 ease-in-out" />
              </div>

          <div className="w-91 h-53 relative">
             
                  <h3 className="absolute text-xl uppercase font-medium top-16  text-center w-full text-white z-10">Troia</h3>
                  <p className="absolute  text-2xl uppercase font-bold whitespace-nowrap tracking-wide top-24 w-full text-white z-10 font-roboto">Camel Herders of</p>
                  <p className="absolute  text-2xl uppercase font-bold  mb-2 tracking-wide top-32 w-full text-white z-10 font-roboto">Gallipoli</p>
                 
              
               <FaRegClone className=" text-right  absolute bottom-4 right-4 text-slate-500 text-xl z-10  " />
              <img src={nat2} alt="nat2"className="w-91 h-53 object-cover opacity-70 hover:opacity-100   transition-all  duration-500 ease-in-out"  /></div>

          <div className="w-91 h-53 relative">
               <h3 className="absolute text-xl uppercase font-medium top-16  text-center w-full text-white z-10">Troia</h3>
                  <p className="absolute  text-2xl uppercase font-bold whitespace-nowrap tracking-wide top-24 w-full text-white z-10 font-roboto">Camel Herders of</p>
                  <p className="absolute  text-2xl uppercase font-bold  mb-2 tracking-wide top-32 w-full text-white z-10 font-roboto">Gallipoli</p>
                 
               <FaRegClone className=" text-right right-4  absolute bottom-4 text-white text-xl z-10" />
              <img src={nat4} alt="nat4" className="w-91 h-53 object-cover 
              opacity-70 hover:opacity-100   transition-all  duration-500 ease-in-out" /></div>
         
          <div className="col-span-2 row-span-2 w-190 h-137 relative">
                  
                  <h3 className="text-2xl uppercase font-medium absolute w-full text-center top-40 text-white z-10">Troia</h3>
                  <p className="absolute w-full text-center text-3xl uppercase font-bold whitespace-nowrap tracking-wide top-48 text-white z-10 font-roboto">Camel Herders of Gallipoli</p>
              
             
               <FaRegClone className=" text-right right-4  absolute bottom-4 text-white text-xl z-10 " />
              <img src={nat7} alt="nat7" className="w-190 h-137 object-cover opacity-70 hover:opacity-100   transition-all  duration-500 ease-in-out "/></div>
          <div className="w-91 h-53 relative">
                 <h3 className="absolute text-xl uppercase font-medium top-16  text-center w-full text-white z-10">Troia</h3>
                  <p className="absolute  text-2xl uppercase font-bold whitespace-nowrap tracking-wide top-24 w-full text-white z-10 font-roboto">Camel Herders of</p>
                  <p className="absolute  text-2xl uppercase font-bold  mb-2 tracking-wide top-32 w-full text-white z-10 font-roboto">Gallipoli</p>
                 
               <FaRegClone className=" text-right right-4  absolute bottom-4 text-white text-xl z-10" />
              <img src={nat5} alt="nat5" className="w-91 h-53 object-cover opacity-70 hover:opacity-100   transition-all  duration-500 ease-in-out" /></div>
          <div className="w-91 h-53 relative">
                 <h3 className="absolute text-xl uppercase font-medium top-16  text-center w-full text-white z-10">Troia</h3>
                  <p className="absolute  text-2xl uppercase font-bold whitespace-nowrap tracking-wide top-24 w-full text-white z-10 font-roboto">Camel Herders of</p>
                  <p className="absolute  text-2xl uppercase font-bold  mb-2 tracking-wide top-32 w-full text-white z-10 font-roboto">Gallipoli</p>
                 
               <FaRegClone className=" text-right right-4  absolute bottom-4 text-white text-xl z-10" />
              <img src={nat6} alt="nat6"className="w-91 h-53 object-cover opacity-70 hover:opacity-100   transition-all  duration-500 ease-in-out"  /></div>
  
        
      </div>
  </div>
</div>

</div>

</main>
  )
}
