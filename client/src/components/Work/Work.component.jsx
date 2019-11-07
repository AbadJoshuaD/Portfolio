import React from "react";
import "../Work/Work.styles.scss";
import WorkTimeline from "../WorkTimeline/WorkTimeline.component";

const Work = () => (
  <div className="aboutme__work__container">
    <div className="aboutme__work__jobsummary">
      <h1 className="aboutme__work__title">Job Summary</h1>
      <p className="aboutme__work__summary">
        My first professional work on development was during in my internship.
        It only takes a small portion of our internship time since the original
        position I am hired for was Junior Desktop Engineer. We are asked to
        develop an Inventory System for the IT department computer assets. The
        application built with HTML,CSS,JS and jQuery on the front while PHP and
        MySQL on backend.
      </p>
    </div>
    <div className="aboutme__work__timeline">
      <h1>Job Timeline</h1>
      <WorkTimeline />
    </div>
  </div>
);

export default Work;
