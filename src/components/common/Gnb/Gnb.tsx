import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { GnbCss } from "./GnbCss";
import { Link } from "react-router-dom";
import type { GnbDataType } from "./data/GnbData";
import { GnbData } from "./data/GnbData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper";
import { Button } from "utils/repeat";
type Props = {};

const Gnb = () => {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const slideTo = (i: number) => {
    swiperRef.slideTo(i - 1, 300);
  };

  const navigateNext = () => {
    swiperRef.slideNext();
  };

  const navigatePrev = () => {
    swiperRef.slidePrev();
  };

  return (
    <>
      <GnbCss>
        <div className="workWrap">
          <div className="work">
            <span>작 업 물</span>
          </div>
          <Button>
            <button className="swiper-button-prev" onClick={navigatePrev}>
              Prev
            </button>
          </Button>
          <Swiper
            pagination={{
              type: "fraction",
            }}
            keyboard={true}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination, Keyboard]}
            centeredSlides={true}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            onSwiper={setSwiperRef}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
          </Swiper>
          <Button>
            <button className="swiper-button-next" onClick={navigateNext}>
              Next
            </button>
          </Button>
          <p className="swiperButton">
            {GnbData.map((v, i) => {
              return (
                <Button key={i}>
                  <button
                    onClick={() => {
                      slideTo(v.id);
                    }}
                  >
                    {v.name}
                  </button>
                </Button>
              );
            })}
          </p>
        </div>
      </GnbCss>
    </>
  );
};

export default Gnb;
