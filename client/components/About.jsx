import React from "react";
import Navbar, { items } from "./Navbar";

const About = () => {
  const containerStyle = {
    paddingLeft: "25px",
    paddingRight: "25px",
  };
  return (
    <div style={containerStyle}>
      <div>
        <Navbar items={items} />
      </div>
      <h1>About Us</h1>
      <p >
      At Vektor, our mission is to empower individuals to take control of their health by providing accessible and intuitive tools for monitoring diabetic sugar levels and blood pressure. We strive to enhance the quality of life for our users by promoting proactive health management through technology. Our commitment lies in delivering a seamless, personalized experience that fosters informed decision-making and encourages healthier lifestyle choices. Vektor is driven by the belief that everyone deserves the tools and knowledge to lead a healthier, happier life, and we are dedicated to making that vision a reality through innovation, accuracy, and user-centric design.
      </p>
      <p>
        For more information, please contact us at our{" "}
        <a href="http://localhost:8080/contact">contact</a> page.
      </p>
    </div>
  );
};

export default About;
