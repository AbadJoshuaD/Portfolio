import React from "react";
import "../Projects/Projects.styles.scss";
import project1 from "../../assets/project_img1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => (
  <div className="projects">
    <div className="projects__content">
      <h1 className="projects__title">Projects</h1>
      <p className="projects__message">
        ----- Here are the projects that I have develop during my journey of
        learning web development. -----
      </p>
      <div className="projects__container">
        <div className="project__card">
          <div className="project__card__content">
            <h1 className="project__number">01</h1>
            <img src={project1} alt="" className="project__img" />
            <div className="project__links">
              <a
                href="https://badcrwn-clothing.herokuapp.com/"
                className="project__link demo"
              >
                <FontAwesomeIcon
                  className="project__link__icon"
                  icon={faDesktop}
                />
                Live Demo
              </a>
              <a
                href="https://github.com/AbadJoshuaD/crwn-clothing"
                className="project__link code"
              >
                <FontAwesomeIcon
                  className="project__link__icon"
                  icon={faGithub}
                />
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="project__content">
          <h1 className="project__title">E-commerce:Crwn Clothing</h1>
          <p className="project__description">
            This project allows user to shop commercial clothing items in
            different categories such as hats, jackets, sneakers, womens and
            mens. I have also integrated a dummy stripe payout on the checkout
            section of the application. I am still planning to scale this
            project and add additional features in the future.
          </p>
          <p className="project__techstack__title">Tech Stack</p>
          <div className="project__techstack__content">
            <p className="proect__techstack__item react">React</p>
            <p className="proect__techstack__item Redux">Redux</p>
            <p className="proect__techstack__item Firestore">Firestore</p>
            <p className="proect__techstack__item Node">Node</p>
            <p className="proect__techstack__item Express">Express</p>
          </div>
          <p className="project__technologies__title">Things I have learned</p>
        </div>
      </div>
      <div className="projects__container">
        <div className="project__content">
          <h1 className="project__title">E-commerce:Crwn Clothing</h1>
          <p className="project__description">
            This project allows user to shop commercial clothing items in
            different categories such as hats, jackets, sneakers, womens and
            mens. I have also integrated a dummy stripe payout on the checkout
            section of the application. I am still planning to scale this
            project and add additional features in the future.
          </p>
          <p className="project__techstack__title">Tech Stack</p>
          <div className="project__techstack__content">
            <p className="proect__techstack__item react">React</p>
            <p className="proect__techstack__item Redux">Redux</p>
            <p className="proect__techstack__item Firestore">Firestore</p>
            <p className="proect__techstack__item Node">Node</p>
            <p className="proect__techstack__item Express">Express</p>
          </div>
          <p className="project__technologies__title">Things I have learned</p>
        </div>
        <div className="project__card">
          <div className="project__card__content">
            <h1 className="project__number">02</h1>
            <img src={project1} alt="" className="project__img" />
            <div className="project__links">
              <a
                href="https://badcrwn-clothing.herokuapp.com/"
                className="project__link demo"
              >
                <FontAwesomeIcon
                  className="project__link__icon"
                  icon={faDesktop}
                />
                Live Demo
              </a>
              <a
                href="https://github.com/AbadJoshuaD/crwn-clothing"
                className="project__link code"
              >
                <FontAwesomeIcon
                  className="project__link__icon"
                  icon={faGithub}
                />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projects__container">
        <div className="project__card">
          <div className="project__card__content">
            <h1 className="project__number">03</h1>
            <img src={project1} alt="" className="project__img" />
            <div className="project__links">
              <a
                href="https://badcrwn-clothing.herokuapp.com/"
                className="project__link demo"
              >
                <FontAwesomeIcon
                  className="project__link__icon"
                  icon={faDesktop}
                />
                Live Demo
              </a>
              <a
                href="https://github.com/AbadJoshuaD/crwn-clothing"
                className="project__link code"
              >
                <FontAwesomeIcon
                  className="project__link__icon"
                  icon={faGithub}
                />
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="project__content">
          <h1 className="project__title">E-commerce:Crwn Clothing</h1>
          <p className="project__description">
            This project allows user to shop commercial clothing items in
            different categories such as hats, jackets, sneakers, womens and
            mens. I have also integrated a dummy stripe payout on the checkout
            section of the application. I am still planning to scale this
            project and add additional features in the future.
          </p>
          <p className="project__techstack__title">Tech Stack</p>
          <div className="project__techstack__content">
            <p className="proect__techstack__item react">React</p>
            <p className="proect__techstack__item Redux">Redux</p>
            <p className="proect__techstack__item Firestore">Firestore</p>
            <p className="proect__techstack__item Node">Node</p>
            <p className="proect__techstack__item Express">Express</p>
          </div>
          <p className="project__technologies__title">Things I have learned</p>
        </div>
      </div>
      <div className="projects__container">
        <div className="project__content">
          <h1 className="project__title">E-commerce:Crwn Clothing</h1>
          <p className="project__description">
            This project allows user to shop commercial clothing items in
            different categories such as hats, jackets, sneakers, womens and
            mens. I have also integrated a dummy stripe payout on the checkout
            section of the application. I am still planning to scale this
            project and add additional features in the future.
          </p>
          <p className="project__techstack__title">Tech Stack</p>
          <div className="project__techstack__content">
            <p className="proect__techstack__item react">React</p>
            <p className="proect__techstack__item Redux">Redux</p>
            <p className="proect__techstack__item Firestore">Firestore</p>
            <p className="proect__techstack__item Node">Node</p>
            <p className="proect__techstack__item Express">Express</p>
          </div>
          <p className="project__technologies__title">Things I have learned</p>
        </div>
        <div className="project__card">
          <div className="project__card__content">
            <h1 className="project__number">04</h1>
            <img src={project1} alt="" className="project__img" />
            <div className="project__links">
              <a
                href="https://badcrwn-clothing.herokuapp.com/"
                className="project__link demo"
              >
                <FontAwesomeIcon
                  className="project__link__icon"
                  icon={faDesktop}
                />
                Live Demo
              </a>
              <a
                href="https://github.com/AbadJoshuaD/crwn-clothing"
                className="project__link code"
              >
                <FontAwesomeIcon
                  className="project__link__icon"
                  icon={faGithub}
                />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
