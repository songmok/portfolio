import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import FirstWork from "pages/Works/FirstWork/FirstWork";
import SecondWork from "pages/Works/SecondWork/SecondWork";
import Footer from "components/common/Footer/Footer";
import Header from "components/common/Header/Header";
import ThirdWork from "pages/Works/ThirdWork/ThirdWork";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/sutabucks" element={<FirstWork />} />
          <Route path="/ggobook" element={<SecondWork />} />
          <Route path="/methedu" element={<ThirdWork />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
