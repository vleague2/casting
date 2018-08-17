import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import DancerCard from "./Components/DancerCard";

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar>
          <DancerCard/>
        </Sidebar>
      </div>
    );
  }
}

export default App;
