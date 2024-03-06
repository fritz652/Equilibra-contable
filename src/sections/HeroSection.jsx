import hero from "../assets/hero-image.jpg";
import logohero from "../assets/logo-hero.svg";
import { Typography } from "@material-tailwind/react";
const HeroSection = () => {
  return (
    <div id="inicio" className="h-screen grid grid-rows-2">
      <div className="relative" style={{ height: "75vh" }}>
        <img
          src={hero}
          className="w-full h-full absolute inset-0 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-center">
            <img
              className="h-auto max-w-full md:max-w-1/2 lg:max-w-1/3"
              src={logohero}
            />
          </div>
        </div>
      </div>
      <div className="h-1/4 bg-white flex justify-center items-center">
        <Typography variant="lead" className="py-20 px-10 text-center text-2xl">
          Somos un equipo de contadoras profesionales, que acompaña y asesora a
          emprendedores, empresas y profesionales que buscan el crecimiento
          equilibrado de sus proyectos y la tranquilidad impositiva durante el
          proceso.
        </Typography>
      </div>
      <hr className="border-darkGreen max-w-md sm:max-w-[90%] mx-auto mb-5 border" />
    </div>
  );
};

export default HeroSection;
