import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"; // Make sure path is correct

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

const App: React.FC = () => {
  return (
    <>
      <Navbar /> {/* Navbar will show on all pages */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <Footer /> {/* Footer will show on all pages */}
    </>
  );
};

export default App;
