import styled from "@emotion/styled";
import { mainCol_1, mainCol_2 } from "utils/color";
export const GnbCss = styled.div`
  .workWrap {
    width: 100%;
    height: 450px;
    ${mainCol_2}
    justify-content: center;
    .work {
      width: 100%;
      height: 70px;
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
      width: 50%;
      height: 300px;
      overflow: hidden;
      .swiper-slide {
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
          span {
            display: block;
          }
        }
      }
    }
    .prev {
      width: 100px;
      height: 100px;
      background-color: #fff;
    }
  }
`;
