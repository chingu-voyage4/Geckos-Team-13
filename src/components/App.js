import React, { Component } from "react";
import "../styles/style.css";
import NavbarTop from "./NavbarTop.js";
import NavbarBottom from "./NavbarBottom.js";
import Board from "./Board";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "#0079bf", backgroundImage: "" };
        this.changeBackground = this.changeBackground.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    changeBackground(e) {
        e.preventDefault();
        this.setState({ backgroundImage: e.target.id });
    }

    changeColor(e) {
        e.preventDefault();
        this.setState({backgroundImage: ""});
        if (e.target.className === "color-button green") {
            this.setState({ color: "#519839"});
        } else if (e.target.className === "color-button blue") {
            this.setState({color: "#0079bf"});
        } else if (e.target.className === "color-button red") {
            this.setState({ color: "#B04632"});
        } else if (e.target.className === "color-button orange") {
            this.setState({ color: "#D29034"});
        } else if (e.target.className === "color-button purple") {
            this.setState({ color: "#89609E"});
        } else if (e.target.className === "color-button pink") {
            this.setState({ color: "#CD5A91"});
        }
    }

    render() {
        return (
            <div className="App" style={{ backgroundColor: this.state.color,
                 backgroundImage: `url(${this.state.backgroundImage})`}}>
                <NavbarTop />
                <NavbarBottom changeBackground={this.changeBackground}
                changeColor={this.changeColor} color={this.state.color}/>
                <Board />
            </div>
        );
    }
}

export default App;
