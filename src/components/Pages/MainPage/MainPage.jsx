import React from "react";
import Home from "../../sections/Home/Home";
import FeatureProjects from "../../sections/FeatureProjects/FeatureProjects";
import AboutMe from "../../sections/AboutMe/AboutMe";
import Blog from "../../sections/Blog/Blog";
import Contact from "../../sections/Contact/Contact";
import Footer from "../../sections/Footer/Footer";

function MainPage() {
  return (
    <>
      <Home />
      <FeatureProjects />
      <AboutMe />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default MainPage;
