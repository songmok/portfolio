import React from "react";
import Header from "components/common/Header/Header";
import react from "assets/images/stacks/react.png";
import hjc from "assets/images/stacks/htmljscss.png";
import figma from "assets/images/stacks/figma.png";
import redux from "assets/images/stacks/redux.png";
import cssinjs from "assets/images/stacks/styled-component.png";
import scss from "assets/images/stacks/scss.png";

import { WorkCss } from "style/WorkCss";
export interface WorkProps {
  headerText: string;
  headerLink: string;
  video?: string;
  project: string;
  mainFuntion: string;
  ps?: string;
  startDate: string;
  endDate: string;
}

const WorkLayOut = (props: WorkProps) => {
  const {
    headerText,
    headerLink,
    project,
    video,
    mainFuntion,
    ps,
    startDate,
    endDate,
  } = props;
  return (
    <>
      <Header headerText={headerText} headerLink={headerLink} />
      <WorkCss>
        <div className="c1">
          <video src={video} className="video" autoPlay muted></video>
        </div>
        <div className="c2">
          <ul>
            <li>
              <span className="projectHeader">프로젝트 제목 -</span>
              <span>{project}</span>
            </li>
            <li>
              <span className="projectHeader">주요 기능 -</span>
              <span className="mfText">
                {mainFuntion}
                <b className="ps">{ps}</b>
              </span>
            </li>
            <li>
              <span className="projectHeader">프로젝트 기간 -</span>
              <div className="dayz">
                <span>{startDate}</span>
                <span> ~ </span>
                <span>{endDate}</span>
              </div>
            </li>
            <li>
              <span className="projectHeader">사용 기술 -</span>
              <ul className="stacks">
                {project === "SUTABUCKS" ? (
                  <>
                    <li>
                      <img src={hjc} alt="" />
                      <span>HTML/CSS/JS</span>
                    </li>
                    <li>
                      <img src={cssinjs} alt="" />
                      <span>STYLED-COMPONENTS</span>
                    </li>
                    <li>
                      <img src={react} alt="" />
                      <span>REACT</span>
                    </li>
                    <li>
                      <img src={redux} alt="" />
                      <span>REDUX</span>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </li>
            <li>
              <span className="projectHeader">협업 툴 -</span>
              <ul className="teamwork">
                {project === "SUTABUCKS" ? (
                  <>
                    <li>
                      <img src={hjc} alt="" />
                      <span>HTML/CSS/JS</span>
                    </li>
                    <li>
                      <img src={cssinjs} alt="" />
                      <span>STYLED-COMPONENTS</span>
                    </li>
                    <li>
                      <img src={react} alt="" />
                      <span>REACT</span>
                    </li>
                    <li>
                      <img src={redux} alt="" />
                      <span>REDUX</span>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </li>
          </ul>
        </div>
      </WorkCss>
    </>
  );
};

export default WorkLayOut;
