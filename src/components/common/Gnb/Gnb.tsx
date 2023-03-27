import React, { useRef, useState } from "react";
// fonntawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { GnbCss } from "./GnbCss";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Keyboard } from "swiper";
import { Button } from "../../../utils/repeat";
import { GnbData } from "../../../assets/data/GnbData";
import pullpage1 from "../../../assets/images/project/pullpage1.png";
export interface toggle {
  showGnb: boolean;
}

const Gnb = ({ showGnb }: toggle) => {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const slideTo = (i: number) => {
    swiperRef.slideTo(i - 1, 300);
  };

  const navigateNext = () => {
    swiperRef.slideNext();
  };

  const navigatePrev = () => {
    swiperRef.slidePrev();
  };
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <>
      <GnbCss>
        <div className={`workWrap${showGnb ? " show wow fadeIn" : ""}`}>
          <div className="work">
            <span>작 업 물</span>
          </div>
          <button
            className="swiper-button-prev arrowBtn"
            onClick={navigatePrev}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
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
            onSlideChange={handleSlideChange}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to="/sutabucks">
                <img src={pullpage1} alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/ggobook">꼬북</Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/methedu">metaedu</Link>
            </SwiperSlide>
            <SwiperSlide>추가</SwiperSlide>
            <SwiperSlide>추가</SwiperSlide>
            <SwiperSlide>추가</SwiperSlide>
            <SwiperSlide>추가</SwiperSlide>
          </Swiper>
          <button
            className="swiper-button-next arrowBtn"
            onClick={navigateNext}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
          <p className="swiperButton">
            {GnbData.map((v, i) => {
              return (
                <Button key={i}>
                  <button
                    className={`${activeIndex === i ? "active" : ""}`}
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
