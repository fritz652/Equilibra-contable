import { useState } from "react";
import "./App.css";
import { StickyNavbar } from "./Components/navbar/Navbar";
import ServiciosSection from "./sections/ServiciosSection";
import NosotrasSection from "./sections/NosotrasSection";
import { Form } from "./Components/form/Form";

function App() {
  return (
    <div className="App">
      <StickyNavbar />
      <ServiciosSection />
      <Form />
      <NosotrasSection />
    </div>
  );
}
export default App;
