import Visual from "components/Visual/Visual";
import About from "components/About/About";
import WorkList from "components/WorkList/WorkList";
import { HomeCss } from "./HomeCss";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <HomeCss>
        <Visual />
        <About />
        <WorkList />
      </HomeCss>
    </>
  );
};

export default Home;
