import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import FirstWork from "pages/Works/FirstWork/FirstWork";
import SecondWork from "pages/Works/SecondWork/SecondWork";
import ThirdWork from "pages/Works/ThirdWork/ThirdWork";
import Footer from "components/common/Footer/Footer";
import Header from "components/common/Header/Header";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route
            path="/sutabucks"
            element={
              <FirstWork headerText={"SUTABUCKS"} headerLink={"/sutabucks"} />
            }
          />
          <Route
            path="/ggobook"
            element={
              <SecondWork headerText={"GGOBOOK"} headerLink={"/GGOBOOK"} />
            }
          />
          <Route
            path="/methedu"
            element={
              <ThirdWork headerText={"METHEDU"} headerLink={"/methedu"} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
