import React, { Component } from "react";
import "../styles/style.css";
import NavbarTop from "./NavbarTop.js";
import NavbarBottom from "./NavbarBottom.js";
import Board from "./Board";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavbarTop />
        <NavbarBottom />
        <Board />
      </div>
    );
  }
}

export default App;