import React from "react";
import "./HeroStyles.css";
import "./NavbarStyles.css";
import Navbar from "./Navbar";
import profileImage from "./images/prof.jpg";
import { TypeAnimation } from "react-type-animation";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from 'react-icons/fa';
const Hero = () => {
  return (
    <>
      <div className="container-hero">
        
          
    
        

        <div className="hero-content">

          {/* left side */}
          <div className="hero-text">

            <h1 className="autotype">
              <TypeAnimation
                sequence={[
                  'I_Am_A_Web_developer_',
                  1000,
                  'I_Am_A_Security_Researcher_',
                  1000,
                  'I_Am_A_Penetration_Tester_',
                  1000,
                  'I_Am_The_Expendable_',
                  1000,
                  'I_Am_Your_Company\'s_NightMare',
                  1000,
                ]}
                wrapper="span"
                speed={30}
                style={{ fontSize: "0.93em", display: "inline-block", color: "#9aff9a", }}
                repeat={Infinity}
              />
            </h1>

            <p>
              <span id="firstword">Hurtle_Geo </span> @ Your service, I
              Focused on discovering vulnerabilities, strengthening
              system security, and building secure web applications. Skilled in practical
              penetration testing, vulnerability analysis, and modern web development
              techniques. Dedicated to improving digital safety while creating efficient and
              reliable solutions.
            </p>

            <div className="links">
              <a href="https://x.com/home/@itzmrfantasy" target="_blank"><BsTwitterX size={40} className="icons" /></a>
              <a href=""><FaLinkedin size={40} className="icons" /></a>
              <a href="mailto:hurtlegeo@gmail.com" target="_blank"><AiOutlineMail size={40} className="icons" /></a>
              <a href="https://github.com/hurtle666" target="_blank" ><FaGithub size={40} className="icons"/> </a>
            </div>


          </div>

          {/* right side */}
          <div className="image-profile">
            <img src={profileImage} alt="Profile" className="profile-pic" />
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;
