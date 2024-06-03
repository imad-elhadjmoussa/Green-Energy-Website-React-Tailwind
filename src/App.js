import { useRef, useState } from "react";
import { Hero } from "./pages/Hero/Hero";
import { Navbar } from "./pages/Navbar/Navbar";
import { About } from "./pages/About/About";
import { OurSolution } from "./pages/Solution/OurSolution";
import { Services } from "./pages/Services/Services";
import { Howitwork } from "./pages/How it work/Howitwork";
import { Dream } from "./pages/Dream/Dream";
import { Aboutsloution } from "./pages/About Solution/Aboutsloution";
import { AboutServices } from "./pages/Services/AboutServices";
import { Aboutsolution2 } from "./pages/About Solution/Aboutsolution2";
import { Contact } from "./pages/Contact/Contact";
import { Footer } from "./pages/Footer/Footer";

function App() {
  const [isOpen, setOpen] = useState(false);




  return (
    <div className="" >
      {
        isOpen &&
        <div className=" w-full h-full fixed bg-white z-30 opacity-[0.5] " >
        </div>
      }
      {/* Navbar */}
      <Navbar isOpen={isOpen} setOpen={setOpen} />
      {/* Hero section */}
      <div id="hero" >
        <Hero />
      </div>

      <div id="About" className=" md:mt-[200px] md:pt-[150px] sm:mt-[400px] sm:pt-[150px] mt-[720px] pt-[150px]   ">
        <About />
      </div>

      <div id="ourSolution" className=" mt-[100px] pt-[100px] ">
        <OurSolution  />
      </div>

      <div id="Services" className=" pt-[150px] ">
        <Services />
      </div>

      <div id="howItWorks" className=" pt-[150px] " >
        <Howitwork />
      </div>

      <div id="dream" className=" pt-[150px] ">
        <Dream />
      </div>

      <div id="aboutSolution" className=" pt-[150px] ">
        <Aboutsloution />
      </div>

      <div id="aboutServices" className=" pt-[150px] ">
        <AboutServices />
      </div>

      <div className="  pt-[150px] ">
        <Aboutsolution2 />
      </div>

      <div className=" pt-[150px] " id="Contact">
        <Contact />
      </div>
      <div id="Footer" className=" pt-[150px] " >
        <Footer />
      </div>
    </div>
  );
}

export default App;
