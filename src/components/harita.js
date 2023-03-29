import React from 'react'

export default function harita() {
  return (
    <div className="my-8  flex justify-center align-center text-center bg-neutral-100 -mb-4 ">
      <div className="max-w-6xl pt-12 w-full border-slate-500 border-t-2 ">
        <iframe
          src="https://my.atlistmaps.com/map/8a96dfdc-8e06-445f-a256-41d4878166ac?share=true"
          allow="geolocation 'self' https://my.atlistmaps.com"
          width="100%"
          height="400px"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
