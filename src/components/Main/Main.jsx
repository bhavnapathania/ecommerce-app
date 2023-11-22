import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import ProductSection from "../ProductSection/ProductSection";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <Navbar />
      <Slider />
      <NavigateButtons />
      <ProductSection />
      <Footer username={"Bhavna Pathania"} />
    </>
  );
}

export default Main;
