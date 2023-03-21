import React from "react";
import Header from "components/common/Header/Header";
import { WorkCss } from "style/WorkCss";
export interface WorkProps {
  headerText: string;
  headerLink: string;
  project: string;
  video?: string;
}

const WorkLayOut = ({ headerText, headerLink, project, video }: WorkProps) => {
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
          </ul>
        </div>
      </WorkCss>
    </>
  );
};

export default WorkLayOut;
