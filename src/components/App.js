import React, { Component } from "react";
import "../styles/style.css";
import NavbarTop from "./NavbarTop.js";
import NavbarBottom from "./NavbarBottom.js";
import Board from "./Board";
import QuickEditMenu from "./QuickEditCard";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavbarTop />
                <NavbarBottom />
                <Board />
                <QuickEditMenu />
            </div>
        );
    }
}

export default App;
