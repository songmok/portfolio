import React from "react";
import Header from "components/common/Header/Header";
import sutabucks from "assets/video/sutabucks.mp4";
import { WorkCss } from "style/WorkCss";
import WorkLayOut from "../WorkLayOut";

const FirstWork = () => {
  return (
    <>
      <WorkLayOut
        headerText="SUTABUCK"
        headerLink="sutabucks"
        video={sutabucks}
        project="SUTABUCKS"
      />
    </>
  );
};

export default FirstWork;
