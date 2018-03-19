import React, { Component } from "react";
import "../styles/style.css";
import NavbarTop from "./NavbarTop.js";
import NavbarBottom from "./NavbarBottom.js";
import Board from "./Board";
import ListMenu from "./ListMenu.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavbarTop />
                <NavbarBottom />
                <ListMenu />
                <Board />
            </div>
        );
    }
}

export default App;
