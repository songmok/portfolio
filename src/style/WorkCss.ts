import styled from "@emotion/styled";
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
      height: 65%;
      background-color: skyblue;
    }
  }
  .c2 {
    width: 50%;
    height: calc(100vh - 100px);
    position: relative;
    display: flex;
    ul {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 85%;
      height: 65%;
      background-color: blue;
      padding: 50px;
      li {
      }
    }
  }
`;
