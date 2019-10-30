import React from "react";
import "../AboutMe/AboutMe.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import Story from "../Story/Story.component";

const AboutMe = () => (
  <div className="aboutme">
    <div className="aboutme__content">
      <h1 className="aboutme__title">About Me</h1>
      <p className="aboutme__message">
        ----- Here are some of the personal information about me. I hope you
        will find me interesting. -----
      </p>
      <div className="aboutme__container">
        <div className="aboutme__accordion__panel menu">
          <li className="aboutme_accordion__list item" id="aboutme">
            <span className="aboutme_accordion_circle"></span>
            <a href="#aboutme" className="aboutme__accordion__button btn">
              My Story
              <div className="aboutme__accordion__content smenu">
                <Story />
              </div>
            </a>
          </li>
          <span className="aboutme_accordion_circle"></span>
          <li className="aboutme_accordion__list" id="skills">
            <a href="#skills" className="aboutme__accordion__button">
              Skills
              <div className="aboutme__accordion__content"></div>
            </a>
          </li>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
