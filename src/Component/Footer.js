import React from "react";
import Logo from "C:/Users/amith/Documents/React/internship/techtune_motors/src/Assets/home_banner_image_2.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          
        </div>
        <div className="footer-section-columns">
          <span>Address-#161,5th phase, Sachidananda Nagar, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098</span>
          <span>Mobile number-+9199802 21122</span>
          <span>techtunesmotors@gmail.com</span>
          
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;