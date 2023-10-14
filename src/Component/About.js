import React from "react";
import AboutBackground from "C:/Users/amith/Documents/React/internship/techtune_motors/src/Assets/about-background.png";
import AboutBackgroundImage from "C:/Users/amith/Documents/React/internship/techtune_motors/src/Assets/about.jpeg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Techtune Motors: Driving Innovation in Motion
        </h1>
        <p className="primary-text">
        TechTune Motors is a leading auto maintenance and repair shop here in Bangalore. We are a one-stop shop for all the maintenance and servicing requirements of your vehicles.The brand and type of your vehicle is not a problem at all for us, as we are experts in the maintenance of any kind of vehicle. 
        </p>
        <p className="primary-text">
        Our workforce consists of skilled, professional and highly qualified group of people, who want nothing more than to meet your expectations.These men have the technical. knowhow and offer customized service.Besides excellent communication skills, they also have very good listening skills to understand exactly what you want done on your vehicle."
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          
        </div>
      </div>
    </div>
  );
};

export default About;