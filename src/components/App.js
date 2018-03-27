import React, { Component } from "react";
import "../styles/style.css";
import NavbarTop from "./NavbarTop.js";
import NavbarBottom from "./NavbarBottom.js";
import Board from "./Board";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { color: "#0079bf", navbarColor: "#0067A3"};
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(e) {
        e.preventDefault();
        if (e.target.className === "color-button green") {
            this.setState({ color: "#519839", navbarColor: "#458131"});
        } else if (e.target.className === "color-button blue") {
            this.setState({color: "#0079bf", navbarColor: "#0067a3"});
        } else if (e.target.className === "color-button red") {
            this.setState({ color: "#B04632", navbarColor: "#963C2B"});
        } else if (e.target.className === "color-button orange") {
            this.setState({ color: "#D29034", navbarColor: "#B37B2C"});
        }
    }

    render() {
        return (
            <div className="App" style={{backgroundColor: this.state.color}}>
                <NavbarTop color={this.state.navbarColor} />
                <NavbarBottom changeColor={this.changeColor}/>
                <Board />
            </div>
        );
    }
}

export default App;
