import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogsContainer from './HogsContainer'
import hogs from "../porkers_data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        {/* I've chosen to put state in the HogsContainer since there's no reason to elevate it all the way to app */}
        {/* if later something like the Nav needed to know about state, we would put it up here instead */}
        <HogsContainer hogs={hogs} />
      </div>
    );
  }
}

export default App;
