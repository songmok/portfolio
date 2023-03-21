import React from "react";
import Header from "components/common/Header/Header";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faFigma,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { WorkCss } from "style/WorkCss";
export interface WorkProps {
  headerText: string;
  headerLink: string;
  video?: string;
  project: string;
  stacks?: {
    react: "string";
    typescript: "string";
    es6: "string";
    css3: "string";
    styledComponent: "string";
    emotion: "string";
    scss: "string";
    html5: "string";
    figma: "string";
  };
}

const WorkLayOut = (props: WorkProps) => {
  const { headerText, headerLink, project, stacks, video } = props;
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
              <span>프로젝트 제목 :</span>
              <span>{project}</span>
            </li>
            <li>
              <span>사용 기술 :</span>
              <span>
                <FontAwesomeIcon icon={faReact} /> React
                <FontAwesomeIcon icon={faCss3Alt} /> Emotion
                <FontAwesomeIcon icon={faFigma} /> Figma
              </span>
            </li>
            <li>
              <span>협업 툴 :</span>
              <span>SLACK / NOTION / FIGMA</span>
            </li>
          </ul>
        </div>
      </WorkCss>
    </>
  );
};

export default WorkLayOut;
