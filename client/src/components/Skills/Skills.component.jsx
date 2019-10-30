import React from "react";
import "../Skills/Skills.styles.scss";
import apollo from "../../assets/apollo.png";
import figma from "../../assets/figma.png";
import bootstrap from "../../assets/bootstrap.png";
import css from "../../assets/css.png";
import datastudio from "../../assets/datastudio.png";
import express from "../../assets/express.png";
import github from "../../assets/github.png";
import graphql from "../../assets/graphql.png";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import jquery from "../../assets/jquery.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
import node from "../../assets/node.png";
import postgresql from "../../assets/postgresql.png";
import postman from "../../assets/postman.png";
import python from "../../assets/python.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import sublime from "../../assets/sublime.png";
import tableau from "../../assets/tableau.png";
import trello from "../../assets/trello.png";
import vscode from "../../assets/vscode.png";
import anaconda from "../../assets/anaconda.png";

const skills = {
  frontendSkills: [
    html,
    css,
    javascript,
    react,
    redux,
    jquery,
    bootstrap,
    graphql
  ],
  backendSkills: [
    node,
    express,
    apollo,
    graphql,
    mysql,
    mongodb,
    postgresql,
    python
  ],
  otherTools: [
    github,
    vscode,
    sublime,
    figma,
    postman,
    trello,
    datastudio,
    tableau,
    anaconda
  ]
};

const Skills = () => (
  <div className="aboutme__skills__container">
    <div className="aboutme__skills__area">
      <div>
        <h1 className="aboutme_skills_title">Frontend</h1>
        <div className="aboutme__skills__image">
          {skills.frontendSkills.map((value, index) => (
            <img
              key={index}
              src={value}
              alt=""
              className="aboutme__skills__image__greyscale"
            />
          ))}
        </div>
      </div>
    </div>
    <div className="aboutme__skills__area">
      <div>
        <h1 className="aboutme_skills_title">Backend</h1>
        <div className="aboutme__skills__image">
          {skills.backendSkills.map((value, index) => (
            <img
              key={index}
              src={value}
              alt=""
              className="aboutme__skills__image__greyscale"
            />
          ))}
        </div>
      </div>
    </div>
    <div className="aboutme__skills__area">
      <div className="">
        <h1 className="aboutme_skills_title">Other tools</h1>
        <div className="aboutme__skills__image">
          {skills.otherTools.map((value, index) => (
            <img
              key={index}
              src={value}
              alt=""
              className="aboutme__skills__image__greyscale"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
