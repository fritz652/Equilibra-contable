/* import { useState } from "react"; */
import "./App.css";
import { StickyNavbar } from "./componentes/navbar/Navbar";
import ServiciosSection from "./sections/ServiciosSection";
import FooterSection from "./sections/FooterSection";
import ButtonWspSection from "./sections/ButtonWspSection/ButtonWspSection";
import NosotrasSection from "./sections/NosotrasSection";
import { Form } from "./componentes/form/Form";
import Formulario from "./componentes/form/Fromulario";
import BannerSuscripcion from "./componentes/banner/Banner";

function App() {
  return (
    <div className="App">
      <BannerSuscripcion />
      <StickyNavbar />
      <ServiciosSection />
      <Formulario />
      <NosotrasSection />
      <ButtonWspSection />
      <FooterSection />
    </div>
  );
}
export default App;
