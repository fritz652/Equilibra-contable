import { useState } from "react";
import "./App.css";
import { StickyNavbar } from "./Components/navbar/Navbar";
import ServiciosSection from "./sections/ServiciosSection";
import NosotraSection from "./sections/NosotraSection";
import { Form } from "./Components/form/Form";

function App() {
  return (
    <div className="App">
      <StickyNavbar />
      <ServiciosSection />
      <Form />
    </div>
  );
}
export default App;
