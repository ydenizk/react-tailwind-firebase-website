import React from "react";

import Hedaer from "./../components/hedaer";
import Ads from "./../components/ads";
import Regions from "./../components/regions";
import Mail from "./../components/mail";
import Harita from "./../components/harita"


import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div className="bg-neutral-100 pb-4 ">
      <Helmet>
        <title>Ancient Asia Minor</title>
        <meta name="description" content="Ancient Sites and Cities of Turkey" />
        <link rel="canonical" href="/home" />
      </Helmet>

      <Hedaer />
      <Ads />
      <Regions />
      <Mail />
      <Harita />
    </div>
  );
}
