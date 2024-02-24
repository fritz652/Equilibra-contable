import CarouselCards from "../Components/carousel/CarouselCards";
import { Typography } from "@material-tailwind/react";

const ServiciosSection = () => {
  return (
    <div className="mt-12">
      <Typography
        variant="h3"
        className="text-center text-darkBlue text-4xl mb-3"
      >
        SERVICIOS
      </Typography>
      <CarouselCards />
    </div>
  );
};

export default ServiciosSection;
