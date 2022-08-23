import React from 'react'
import image from "./../assets/banner-2.jpg"


export default function hedaer() {




  return (
<header className=" flex justify-center align-center border-slate-500 border-t-2  bg-neutral-100 " >

<div className="w-288 h-145 max-h-145 mx-6   relative  pt-6    max-w-6xl w-full bg-neutral-100 " >
    <img src={image} alt="nature-2" className="object-cover w-288 max-h-145 h-145 brightness-50 opacity-90 " />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
        <h2  className="font-roboto font-medium text-white text-4xl mb-2 tracking-wider">No <span className="font-roboto font-medium">17</span>  </h2>
<p className=" font-roboto font-bold text-white text-5xl  whitespace-nowrap mb-6 tracking-wide " >ANCIENT SITES IN TURKEY</p>
<p className="uppercase text-white font-mono text-xl tracking-wide">The beauty of ASPENDOS </p>
    </div>

</div>


</header>
  )
}
