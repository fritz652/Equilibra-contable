import { useState } from "react";
import "./App.css";
import { StickyNavbar } from "./Components/Navbar";
import ServiciosSection from "./sections/ServiciosSection";
import NosotraSection from "./sections/NosotraSection";

function App() {
  return (
    <div className="App">
      {/* <StickyNavbar />
      <ServiciosSection /> */}
      <NosotraSection />
    </div>
  );
}
export default App;
