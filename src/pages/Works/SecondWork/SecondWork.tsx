import Header from "components/common/Header/Header";
import ggobook from "assets/video/ggobook.mp4";
import React from "react";
import WorkLayOut from "../WorkLayOut";

const SecondWork = () => {
  return (
    <>
      <WorkLayOut
        headerText="GGOBOOK"
        headerLink="ggobook"
        video={ggobook}
        project="GGOBOOK"
      />
    </>
  );
};

export default SecondWork;
