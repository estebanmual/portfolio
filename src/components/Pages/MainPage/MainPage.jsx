import React from "react";
import Home from "../../sections/Home/Home";
import FeatureProjects from "../../sections/FeatureProjects/FeatureProjects";
import AboutMe from "../../sections/AboutMe/AboutMe";
import Blog from "../../sections/Blog/Blog";
import Contact from "../../sections/Contact/Contact";

function MainPage() {
  return (
    <>
      <Home />
      <FeatureProjects />
      <AboutMe />
      <Blog />
      <Contact />
    </>
  );
}

export default MainPage;
