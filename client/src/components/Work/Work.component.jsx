import React from "react";
import "../Work/Work.styles.scss";

const Work = () => (
  <div className="aboutme__work__container">
    <div className="aboutme__work__jobsummary">
      <h1 className="aboutme__work__title">Job Summary</h1>
      <p>
        My first professional work on development was during in my internship.
        It only takes a small portion of our internship time since the original
        position I am hired for was Junior Desktop Engineer. We are asked to
        develop an Inventory System for the IT department computer assets. The
        application built with HTML,CSS,JS and jQuery on the front while PHP and
        MySQL on backend.
      </p>
      <p>Achievements/Task</p>
      <ul>
        <li>
          - Responsible for developing the frontend of the web application.
        </li>
        <li>
          - Used Bootstrap for developing the user interface and responsiveness
          of the web application.
        </li>
        <li>- Computer Setup and Troubleshooting.</li>
        <li>- Resolving Ticket Issues.</li>
        <li>- Network Monitoring and Troubleshooting.</li>
      </ul>
    </div>
    <div className="aboutme__work__timeline">
      <h1>Job Timeline</h1>
    </div>
  </div>
);

export default Work;
