import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Keyboard } from "swiper/modules";
import { cardsData } from "../../data/CardsData";
import Cards from "../card/Cards";
import "./Carousel.css";
import { useEffect, useState } from "react";

function CarouselCards() {
  const duplicatedCards = [
    ...cardsData,
    ...cardsData,
    ...cardsData,
    ...cardsData,
  ];
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="swiper_container_wrapper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={isSmallScreen ? "auto" : 4}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 80,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Keyboard]}
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
                link={card.linkWpp}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CarouselCards;
