import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import {
  EffectCoverflow,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { cardsData } from "../../data/CardsData";
import Cards from "../card/Cards";
import "./Carousel.css";

function CarouselCards() {
  const duplicatedCards = [
    ...cardsData,
    ...cardsData,
    ...cardsData,
    ...cardsData,
  ];
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={4} // Mostrar 5 tarjetas en total
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Mousewheel, Keyboard]}
      mousewheel={true}
      keyboard={true}
      className="swiper_container"
    >
      {duplicatedCards.map((card, index) => {
        return (
          <SwiperSlide key={index}>
            <Cards
              title={card.title}
              description={card.description}
              img={card.img}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default CarouselCards;
