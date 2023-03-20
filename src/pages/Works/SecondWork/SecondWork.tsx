import Header from "components/common/Header/Header";
import React from "react";
export interface WorkProps {
  headerText: string;
  headerLink: string;
}
const SecondWork = ({ headerText, headerLink }: WorkProps) => {
  return (
    <div>
      <Header headerText={headerText} headerLink={headerLink} />
    </div>
  );
};

export default SecondWork;
