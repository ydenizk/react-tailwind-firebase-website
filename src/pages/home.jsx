import React from 'react';


import Hedaer from "./../components/hedaer";
import Ads from "./../components/ads";
import Regions from "./../components/regions";
import Mail from "./../components/mail"


export default function Home() {

  

  return (
    <div className="bg-neutral-100 pb-4">
      
      <Hedaer />
      <Ads />
      <Regions />
      <Mail />
     
    </div>
  );
 
  
}
