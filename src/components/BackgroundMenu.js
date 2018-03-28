import React from "react";
import ColorMenu from "./ColorMenu.js";

class BackgroundMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {background: "none"};
        this.showBackgroundMenu = this.showBackgroundMenu.bind(this);
    }

    showBackgroundMenu(e) {
        e.preventDefault();
        if (e.target.className === "color-menu-element" || e.target.className === "color-menu") {
            this.setState({background: "colors"});
        } else if (e.target.className === "fas fa-arrow-left back") {
            this.setState({background: "none"});
        }
    }

    render() {
        if (this.state.background === "none") {
        return (
            <div className="board-menu">
                <div className="board-menu-title"><span className="back"
                    onClick={this.props.showMainMenu}>
                    <i className="fas fa-arrow-left"></i></span><h3>{this.props.menuTitle}</h3>
                    <span className="close" onClick={this.props.toggleBoardMenu}>
                        <img src="../close-round.png" alt="close" /></span>
                </div>
            <div className = "menu-body">
                <div className="color-menu" onClick={this.showBackgroundMenu}>
                <img src="../colors.jpg" alt="Colors" className="color-menu-element"/>
            <p className="color-menu-element">Colors</p>
            </div>
                <div className="photo-menu"><img src="../photos.jpg" alt="Photos" />
            <p>Photos</p>
            </div>
            </div>
            </div>
        );
    } else if (this.state.background === "colors") {
        return (
            <ColorMenu menuTitle="Colors" showBackgroundMenu={this.showBackgroundMenu} showMainMenu={this.props.showMainMenu} toggleBoardMenu={this.props.toggleBoardMenu} changeColor={this.props.changeColor} />
        );
    }
    }
}

export default BackgroundMenu;