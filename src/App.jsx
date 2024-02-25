/* import { useState } from "react"; */
import "./App.css";
import { StickyNavbar } from "./Components/Navbar";
import ServiciosSection from "./sections/ServiciosSection";
import FooterSection from "./sections/FooterSection";
import ButtonWspSection from "./sections/ButtonWspSection/ButtonWspSection";



function App() {
  return (
    <div className="App">
      <StickyNavbar />
      <ServiciosSection />
      <FooterSection/>
      <ButtonWspSection/>
      
    </div>
  );
}
export default App;
