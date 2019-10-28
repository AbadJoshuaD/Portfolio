import React from "react";
import "./App.css";
import "typeface-roboto-condensed";
import Navbar from "./components/Navbar/Navbar.component";
import Home from "./components/Home/Home.component";
import Projects from "./components/Projects/Projects.component";
import AboutMe from "./components/AboutMe/AboutMe.component";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Home />
        <Projects />
        <AboutMe />
      </React.Fragment>
    );
  }
}

export default App;
