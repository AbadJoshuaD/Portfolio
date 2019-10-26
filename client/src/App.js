import React from "react";
import "./App.css";
import "typeface-roboto-condensed";
import Navbar from "./components/Navbar/Navbar.component";
import Home from "./components/Home/Home.component";
import Projects from "./components/Projects/Projects.component";

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
      </React.Fragment>
    );
  }
}

export default App;
