import React from "react";
import web from "../Images/img2.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
