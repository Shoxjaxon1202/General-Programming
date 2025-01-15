import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { useEffect } from "react";
import HowItWorks from "./Pages/HowItWorks";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Undefined from "./Pages/Undefined";
import InstantScrollFix from "./Pages/InstantScrollFix";
import BlogFeed from "./Pages/BlogFeed";
import MasterPaython from "./UI/MasterPaython";
import ServicesItem1 from "./UI/ServicesItem1";
import ServicesItem2 from "./UI/ServicesItem2";
import ServicesItem3 from "./UI/ServicesItem3";

function App() {
  return (
    <div className="app">
      <Navbar />
      <InstantScrollFix />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/blog-feed" element={<BlogFeed />} />
          <Route path="/mastering-python-basics" element={<MasterPaython />} />
          <Route path="*" element={<Undefined />} />
          <Route path="/services1" element={<ServicesItem1/>} />
          <Route path="/services2" element={<ServicesItem2/>} />
          <Route path="/services3" element={<ServicesItem3/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
