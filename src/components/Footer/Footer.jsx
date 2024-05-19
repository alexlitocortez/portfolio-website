import React from "react";
import "./Footer.css";
import { AiOutlineMail } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-icon-container">
        <a href="mailto:alexlitocortez@gmail.com" target="_blank">
          <AiOutlineMail className="footer-icon" />
        </a>
        <a href="https://github.com/alexlitocortez" target="_blank">
          <FiGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/amcortez92/" target="_blank">
          <AiOutlineLinkedin className="footer-icon" />
        </a>
      </div>
      <div>
        <h5>Alex Cortez ©2024</h5>
      </div>
    </div>
  );
}

export default Footer;
