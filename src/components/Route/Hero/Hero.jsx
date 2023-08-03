import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Background from "./2880x600.jpeg";
import cosmetics from "./2880x601.jpeg";
import homebanner from "./2880x602.png";

const Hero = () => {
  return (
        <Swiper 
        modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    className={`relative h-[100px] sm:h-[150px] md:h-[300px] lg:h-[400px] 2xl:h-[500px] bg-contain w-full bg-no-repeat ${styles.noramlFlex}`}
    >
      <SwiperSlide>
      <div
      className={`relative min-h-[200px] 800px:min-h-[600px] bg-contain w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url("+ Background +")"
      }}
    >

    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div
      className={`relative min-h-[200px] 800px:min-h-[600px] bg-contain w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url("+ homebanner +")"
      }}
    >

    </div>
      </SwiperSlide>
     
      <SwiperSlide>
            <div
      className={`relative min-h-[200px] 800px:min-h-[600px] bg-contain w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url("+ cosmetics +")"
      }}
    >

    </div>
    </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
