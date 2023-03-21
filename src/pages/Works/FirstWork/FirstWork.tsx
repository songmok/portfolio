import React from "react";
import Header from "components/common/Header/Header";
import { FirstWorkCss } from "./FirstWorkCss";
import sutabucks from "assets/video/sutabucks.mp4";
export interface WorkProps {
  headerText: string;
  headerLink: string;
}

const FirstWork = ({ headerText, headerLink }: WorkProps) => {
  return (
    <>
      <Header headerText={headerText} headerLink={headerLink} />
      <FirstWorkCss>
        <div className="c1">
          <video src={sutabucks} className="video" autoPlay></video>
        </div>
        <div className="c2">
          <ul>
            <li>
              <span>프로젝트 제목 :</span>
              <span>SUTABUCKS</span>
            </li>
          </ul>
        </div>
      </FirstWorkCss>
    </>
  );
};

export default FirstWork;
