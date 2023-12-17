import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame2 from "./pages/Frame2";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import EVENT1 from "./pages/EVENT1";
import EVENT2 from "./pages/EVENT2";
import LandingPage from "./pages/LandingPage";
import Frame3 from "./pages/Frame3";
import Frame11 from "./pages/Frame11";
import Frame111 from "./pages/Frame111";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-14498":
        title = "";
        metaDescription = "";
        break;
      case "/frame-14497":
        title = "";
        metaDescription = "";
        break;
      case "/event":
        title = "";
        metaDescription = "";
        break;
      case "/event1":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/frame-14492":
        title = "";
        metaDescription = "";
        break;
      case "/frame-14128":
        title = "";
        metaDescription = "";
        break;
      case "/frame-14127":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame2 />} />
      <Route path="/frame-14498" element={<Frame />} />
      <Route path="/frame-14497" element={<Frame1 />} />
      <Route path="/event" element={<EVENT1 />} />
      <Route path="/event1" element={<EVENT2 />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/frame-14492" element={<Frame3 />} />
      <Route path="/frame-14128" element={<Frame11 />} />
      <Route path="/frame-14127" element={<Frame111 />} />
    </Routes>
  );
}
export default App;
