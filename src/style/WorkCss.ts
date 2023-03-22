import styled from "@emotion/styled";
import {
  defaltFontSize,
  middleFontSize,
  minFontSize,
  nanoFontSize,
  standFontSize,
} from "utils/font";
export const WorkCss = styled.section`
  position: relative;
  display: flex;
  .c1 {
    width: 50%;
    height: calc(100vh - 100px);
    position: relative;
    display: flex;
    .video {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 85%;
    }
  }
  .c2 {
    width: 50%;
    height: calc(100vh - 100px);
    position: relative;
    display: flex;
    > ul {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 85%;
      height: 65%;
      padding: 50px;
      > li {
        padding-bottom: 30px;
        display: flex;
        align-items: center;
        .projectHeader {
          font-size: ${middleFontSize};
          padding-right: 7px;
          & + span {
            font-size: ${middleFontSize};
            font-weight: bold;
            color: #285e55;
          }
          & + .mfText {
            font-size: ${defaltFontSize};
            line-height: 3rem;
            .ps {
              height: 0;
              display: block;
              text-align: right;
              font-size: ${standFontSize};
              color: #000 !important;
            }
          }
          & + .dayz {
            display: inline-block;
            font-size: ${defaltFontSize};
            > span {
            }
          }
        }
        > ul {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-items: center;
          > li {
            display: grid;
            grid-template-columns: repeat(1fr);
            justify-items: center;
            margin-bottom: 20px;
            img {
              display: block;
              height: 50px;
              margin-bottom: 10px;
            }
            span {
              font-size: 1.3rem;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
`;
