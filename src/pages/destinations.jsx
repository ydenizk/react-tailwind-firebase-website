import React from 'react'
import Hedaer from "./../components/hedaer";
import Ads from "./../components/ads";
import Regions from "./../components/regions";
import Mail from "./../components/mail";


export default function destinations() {
  return (
    <div className="bg-neutral-100">
      <Hedaer />
      <Ads />
      <Regions /* ref={scrollRef} */ />
      <Mail />
    </div>
  );
}
