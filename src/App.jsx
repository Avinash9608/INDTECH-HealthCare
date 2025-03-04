import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/slick.css";
import "./assets/css/responsive.css";
import "./assets/css/construction/jquery.localizationTool.css";
import "./App.css";

// import "./assets/css/style2.css";
import "./assets/css/swiper-bundle.min.css";

import "./assets/css/intlTelInput.css";
import "./assets/css/sScrollBar.css";
import "./assets/css/slick-theme.css";
// import "./assets/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HeroBanner from "./Components/HeroBanner/HeroBanner";

import Insight from "./Components/Insights/Insights";
import FAQs from "./Components/FaQ/Faq";
import Testimonial from "./Components/TestimonialSection/TestimonialSection";

import Glimpse from "./Components/Glimpse/Glimpse.jsx";

import HealthcareAppDevelopment from "./Components/HealthCareAppDev/HealthCareAppDev.jsx";
import LetDiscuss from "./Components/LetDiscuss/LetDiscuss.jsx";
import HealthcareBenefits from "./Components/HealthCareBenifit/HealthCareBenifit.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <HeroBanner />
      <HealthcareAppDevelopment />
      <LetDiscuss />
      <HealthcareBenefits />
      <Glimpse />
      <Insight />
      <FAQs />
      <Testimonial />
      <Footer />
    </Router>
  );
}

export default App;
