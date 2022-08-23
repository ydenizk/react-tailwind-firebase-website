
import React,{useRef} from "react";

import Topbar from "./components/topbar";
import Hedaer from "./components/hedaer"
import Ads from "./components/ads"
import Regions from "./components/regions";
import Email from "./components/mail"
import Footer from "./components/footer"

function App() {

  const scrollRef = useRef(null);

/* ; */




  return (
    <div className="bg-neutral-100">
      <Topbar scrollRef={scrollRef}  />
      <Hedaer />
      <Ads  />
      <Regions  ref={scrollRef} />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
