import styled from "@emotion/styled";
import { mainCol_1 } from "utils/color";
import { headertitle } from "utils/font";
export const HeaderCss = styled.div`
  position: relative;
  .headerWrap {
    width: 100%;
    height: 100px;
    padding: 30px 0;
    padding-left: 40px;
    display: flex;
    align-items: center;
    > ul {
      display: flex;
      align-items: center;
      height: 60px;
      > li {
        height: 100%;
        > a {
          text-align: center;
          line-height: 60px;
          > h1 {
          }
        }
      }
    }
  }
`;
