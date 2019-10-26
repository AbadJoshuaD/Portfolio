import React from "react";
import "../Home/Home.styles.scss";

const Home = () => (
  <div className="home">
    <div className="home__content">
      <h1 className="home__greetings">Hi there! I am Josh</h1>
      <p className="home__message">
        Welcome to my website, I am an aspiring fullstack developer. I am
        completely hook on learning software development from front to back. I
        am still in the process of grinding to solidify my fundamental skills
        and understanding of technologies in web development. Although it was
        challenging, the journey itself was fun and fruitful of learnings. That
        is why devoted myself to continous improvement and life long learning in
        the field of software development.
      </p>
      <a href="#" className="home__btn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="home__btn-text">Check out my projects</span>
      </a>
      <a href="#" className="home__btn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="home__btn-text">Know more about me</span>
      </a>
    </div>
  </div>
);

export default Home;
