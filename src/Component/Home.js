import React from "react";
import BannerBackground from "C:/Users/amith/Documents/React/internship/techtune_motors/src/Assets/home-banner-background.png";
import BannerImage from "C:/Users/amith/Documents/React/internship/techtune_motors/src/Assets/home_banner_image.jpeg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Where Quality Meets Service
          </h1>
          <p className="primary-text">
          At TechTune Motors, we're not just a garage; we're your trusted partner in keeping your vehicle running smoothly.
           With years of experience and a passion for all things automotive,
            we're here to provide top-notch services tailored to your needs.
          </p>
          <button className="secondary-button">
            Book Appointment Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;