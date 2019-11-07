import React from "react";
import "../WorkTimeline/WorkTimeline.styles.scss";

const WorkTimeline = () => (
  <div className="timeline">
    <ul>
      <li>
        <div className="content selected-job">
          <h3 className="">Junior Desktop Engineer/ Web Developer</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="time">
          <p className="month-year">Dec 2017 - Jan 2018</p>
        </div>
      </li>
      <li>
        <div className="content">
          <h3 className="">Data Scientist/Engineer</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="time">
          <p className="month-year">July 2018 - July 2019</p>
        </div>
      </li>
    </ul>
  </div>
);

export default WorkTimeline;
