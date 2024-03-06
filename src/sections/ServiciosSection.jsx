import CarouselCards from "../componentes/carousel/CarouselCards";
import { Typography } from "@material-tailwind/react";

const ServiciosSection = () => {
  return (
    <section id="servicios" className="bg-white">
      <div className="mt-16">
        <Typography
          variant="h3"
          className="text-center text-darkBlue text-4xl mb-6"
        >
          SERVICIOS
        </Typography>
        <CarouselCards />
      </div>
    </section>
  );
};

export default ServiciosSection;
