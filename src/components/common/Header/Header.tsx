import React from "react";
import { Link } from "react-router-dom";
import Gnb from "../Gnb/Gnb";
import { HeaderCss } from "./HeaderCss";

export type HeaderTopProps = {
  headerText: "";
  headerLink: "";
};
const Header = ({ headerText, headerLink }: HeaderTopProps) => {
  return (
    <>
      <HeaderCss>
        <div className="headerWrap main">
          <ul>
            <li>
              <Link to="/">
                <h1>PORTFOLIO</h1>
              </Link>
            </li>
            <li>
              <Link to={headerLink}>
                <h1>{headerText}</h1>
              </Link>
            </li>
          </ul>
        </div>
      </HeaderCss>
      <Gnb />
    </>
  );
};

export default Header;
