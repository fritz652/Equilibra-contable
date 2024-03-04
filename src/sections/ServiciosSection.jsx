import CarouselCards from "../Components/carousel/CarouselCards";
import { Typography } from "@material-tailwind/react";

const ServiciosSection = () => {
  return (
    <section className="mt-16" id="servicios">
      <Typography
        variant="h3"
        className="text-center text-darkBlue text-4xl mb-6"
      >
        SERVICIOS
      </Typography>
      <CarouselCards />
    </section>
  );
};

export default ServiciosSection;
