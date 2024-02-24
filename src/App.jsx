/* import { useState } from "react"; */
import "./App.css";
import { StickyNavbar } from "./Components/Navbar";
import ServiciosSection from "./sections/ServiciosSection";
import FooterSection from "./sections/FooterSection";

function App() {
  return (
    <div className="App">
      <StickyNavbar />
      <ServiciosSection />
      <FooterSection/>
    </div>
  );
}
export default App;
