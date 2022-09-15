import React, { useRef } from "react";

import Topbar from "./components/topbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

import Home from "./pages/home";
import Regios from "./pages/regios";
import Contact from "./pages/contact";
import About from "./pages/about";

import Aizanoi from "./pages/aizanoi";
import Aphrodisias from "./pages/aphrodisias";
import Apollon from "./pages/apollon";
import Aspendos from "./pages/aspendos";
import Assos from "./pages/assos";
import Didyma from "./pages/didyma";
import Ephesus from "./pages/ephesus";
import Hierapolis from "./pages/hierapolis";
import Kaunos from "./pages/kaunos";
import Knidos from "./pages/knidos";
import Laodikeia from "./pages/laodikeia";
import Miletus from "./pages/miletus";
import Myra from "./pages/myra";
/* import Olympos from "./pages/olympos"; */
import Patara from "./pages/patara";
import Perga from "./pages/perga";
import Pergamon from "./pages/pergamon";
import Priene from "./pages/priene";
import Sagalassos from "./pages/sagalassos";
import Sardes from "./pages/sardes";
import Tlos from "./pages/tlos";
import Troy from "./pages/troy";
import Xanthos from "./pages/xanthos";
import { clear } from "@testing-library/user-event/dist/clear";

//bu yapı sayfa degidimlerinde yeni sayfada top u gösterir.
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}; 
/* deneme */

function App() {



  return (
    <Router>
      <Wrapper>
        <Topbar />

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/regios" element={<Regios />} />

          <Route path="/destinations" element={<Home />} />

          <Route path="/ephesus" element={<Ephesus />} />
          <Route path="/sardes" element={<Sardes />} />
          <Route path="/miletus" element={<Miletus />} />
          <Route path="/aphrodisias" element={<Aphrodisias />} />
          <Route path="/aizanoi" element={<Aizanoi />} />
          <Route path="/apollon" element={<Apollon />} />
          <Route path="/aspendos" element={<Aspendos />} />
          <Route path="/assos" element={<Assos />} />
          <Route path="/didyma" element={<Didyma />} />
          <Route path="/Hierapolis" element={<Hierapolis />} />
          <Route path="/Kaunos" element={<Kaunos />} />
          <Route path="/Knidos" element={<Knidos />} />
          <Route path="/laodikeia" element={<Laodikeia />} />
          <Route path="/myra" element={<Myra />} />
          {/*  <Route path="/olympos" element={<Olympos />} /> */}
          <Route path="/patara" element={<Patara />} />
          <Route path="/perga" element={<Perga />} />
          <Route path="/pergamon" element={<Pergamon />} />
          <Route path="/priene" element={<Priene />} />
          <Route path="/sagalassos" element={<Sagalassos />} />
          <Route path="/tlos" element={<Tlos />} />
          <Route path="/troy" element={<Troy />} />
          <Route path="/xanthos" element={<Xanthos />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
