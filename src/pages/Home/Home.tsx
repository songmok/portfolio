import Visual from "components/Visual/Visual";
import About from "components/About/About";
import WorkList from "components/WorkList/WorkList";
import { HomeCss } from "./HomeCss";
import Header from "components/common/Header/Header";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <HomeCss>
        <Header headerText={""} headerLink={"/"} />
        <div className="box1"></div>
        <div className="box2"></div>
      </HomeCss>
    </>
  );
};

export default Home;
