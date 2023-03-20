import React from "react";
import Header from "components/common/Header/Header";
import { FirstWorkCss } from "./FirstWorkCss";

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
          <div className="video">여기에 영상</div>
        </div>
        <div className="c2">
          <li>
            <span>프로젝트 제목 :</span>
            <span>SUTABUCKS</span>
          </li>
        </div>
      </FirstWorkCss>
    </>
  );
};

export default FirstWork;
