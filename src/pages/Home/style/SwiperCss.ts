import styled from "@emotion/styled";
import { mainCol_2 } from "utils/color";
import { minFontSize } from "utils/font";
export const SwiperCss = styled.div`
  position: relative;
  background-color: #92e0eb;
  padding-top: 100px;
  .work {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    span {
      position: relative;
      font-size: 3.3rem;
      color: #333;
      font-weight: bold;
      z-index: 6;
      &::after {
        content: "";
        width: 100%;
        height: 10px;
        background-color: #fff;
        position: absolute;
        bottom: 0px;
        right: -5px;
        z-index: -1;
      }
    }
  }
  .swiper {
    width: 27.7%;
    height: 300px;
    overflow: hidden;
    .swiper-slide {
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        video {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
  .swiperButton {
    position: relative;
    margin: 0px auto;
    width: 40%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    > div {
      button {
        width: 100px;
        ${minFontSize}
        display: block;
      }
    }
  }
  .arrowBtn {
    position: absolute;
    top: 57%;
    background-color: transparent;
    border: none;
    outline: none;
    color: black;
    font-size: 6rem;
    transition: font-size 0.2s ease-out;
    &:hover {
      color: white;
      font-size: 7rem;
    }
    &::after {
      content: "";
    }
  }
  .swiper-button-next {
    right: 30%;
  }
  .swiper-button-prev {
    left: 30%;
  }
`;
