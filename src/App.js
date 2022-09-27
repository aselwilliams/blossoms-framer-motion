import React from "react";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Home />
      <Services />
      <Portfolio />
      <Blog />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
