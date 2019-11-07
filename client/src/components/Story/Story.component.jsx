import React from "react";
import "../Story/Story.styles.scss";
import profilepic from "../../assets/profile.png";

const Story = () => (
  <React.Fragment>
    <div className="aboutme__personalinfo_container">
      <div>
        <img src={profilepic} alt="" className="aboutme__profilepic" />
        <p className="aboutme__info">Joshua D. Abad</p>
        <p className="aboutme__info">Web Developer</p>
      </div>
      <div className="aboutme__personalinfo">
        <p className="aboutme__personalinfo__message">
          There are no fancy information about me. I am a normal guy sitting in
          front of his computer 12 to 14 hours a day. Browsing stuff and
          learning new things day after day. Upon entering to the work force
          after my graduation, I stumble upon choosing the career path I wanted
          to pursue. I have a lot of interest making me the guy who can do a lot
          of things but never specialize on a specific one. Jack of all trades
          they say, but lately I have an epiphany that I should narrow down my
          interest and be really good at it, so I did!.<br></br>
          <br></br> I choose software development since it allows me to still
          exhibit this kind personality. Which is why I am really aspiring to
          become a fullstack developer. Allowing me to get in touch with
          frontend and backend technologies at the same time. As of now I am
          still grinding my way to hone my skills and at the same time looking
          for home that would help me to develop and contribute my knowledge in
          the field of sofware development. I think that is the end for now,
          here is one my favourite quote to share with you.
        </p>
      </div>
    </div>
    <div className="aboutme__quote">
      <q className="aboutme__quote__message">
        I think it is possible for ordinary people choose to be extraordinary
      </q>
      <p className="aboutme__quote__author">- Elon Musk</p>
    </div>
  </React.Fragment>
);

export default Story;
