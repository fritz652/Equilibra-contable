import { useState } from "react";
import "./App.css";
import { StickyNavbar } from "./Components/Navbar";
import ServiciosSection from "./sections/ServiciosSection";

function App() {
  return (
    <div className="App">
      <StickyNavbar />
      <ServiciosSection />
    </div>
  );
}
export default App;
