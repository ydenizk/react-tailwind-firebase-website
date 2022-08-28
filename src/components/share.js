import React from 'react'
import { RWebShare } from "react-web-share";
import { IoLogoRss } from "react-icons/io";

export default function Share() {
  return (
    <div className="mt-4  mb-12 ">
      <IoLogoRss className="tracking-wider font-semibold  opacity-80 " />
      <RWebShare
        data={{
          text: "Here is the Aizanoi... ",
          url: "www.google.com",
          title: "Aizanoi",
        }}
      >
        <button className="tracking-wider font-semibold  text-neutral-800 hover:text-amber-500 transition-all ">
          SHARE
        </button>
      </RWebShare>
    </div>
  );
}