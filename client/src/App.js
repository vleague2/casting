import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import DancerCard from "./Components/DancerCard";
import data from "./dancers.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dancers: data
    }
  };

  render() {
    return (
      <div>
        <Sidebar>
          {this.state.dancers.map(dancer => (
            <DancerCard
              num={dancer.num}
              key={dancer.num}
              name={dancer.name}
              bg={dancer.bgColor}
              />
          ))}
        </Sidebar>
      </div>
    );
  }
}

export default App;



// bg colors
// in no dances: pass in nothing
// in 1 dance: green lighten-4
// in 2 dances: orange lighten-4
// in 3 dances (max): red lighten-3