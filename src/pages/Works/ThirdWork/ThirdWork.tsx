import Header from "components/common/Header/Header";
import React from "react";
export interface WorkProps {
  headerText: string;
  headerLink: string;
}

const ThirdWork = ({ headerText, headerLink }: WorkProps) => {
  return (
    <>
      <Header headerText={headerText} headerLink={headerLink} />
    </>
  );
};

export default ThirdWork;
