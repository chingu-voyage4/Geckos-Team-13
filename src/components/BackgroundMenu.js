import React from "react";
import ColorMenu from "./ColorMenu.js";
import PhotoMenu from "./PhotoMenu.js";

class BackgroundMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { background: "none" };
        this.showBackgroundMenu = this.showBackgroundMenu.bind(this);
    }

    showBackgroundMenu(e) {
        e.preventDefault();
        if (e.target.className === "color-menu-element" || e.target.className === "color-menu") {
            this.setState({ background: "colors" });
        } else if (e.target.className === "fas fa-arrow-left back") {
            this.setState({ background: "none" });
        } else if (
            e.target.className === "photo-menu" ||
            e.target.className === "photo-menu-element"
        ) {
            this.setState({ background: "photos" });
        }
    }

    render() {
        if (this.state.background === "none") {
            return (
                <div className="board-menu">
                    <div className="board-menu-title">
                        <span className="back" onClick={this.props.showMainMenu}>
                            <i className="fas fa-arrow-left" />
                        </span>
                        <h3>{this.props.menuTitle}</h3>
                        <span className="close" onClick={this.props.toggleBoardMenu}>
                            <img src="../close-round.png" alt="close" />
                        </span>
                    </div>
                    <div className="menu-body">
                        <div className="color-menu" onClick={this.showBackgroundMenu}>
                            <img src="../colors.jpg" alt="Colors" className="color-menu-element" />
                            <p className="color-menu-element">Colors</p>
                        </div>
                        <div className="photo-menu" onClick={this.showBackgroundMenu}>
                            <img src="../photos.jpg" alt="Photos" className="photo-menu-element" />
                            <p className="photo-menu-element">Photos</p>
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.background === "colors") {
            return (
                <ColorMenu
                    menuTitle="Colors"
                    showBackgroundMenu={this.showBackgroundMenu}
                    toggleBoardMenu={this.props.toggleBoardMenu}
                    changeColor={this.props.changeColor}
                />
            );
        } else if (this.state.background === "photos") {
            return (
                <PhotoMenu
                    menuTitle="Photos by Unsplash"
                    showBackgroundMenu={this.showBackgroundMenu}
                    toggleBoardMenu={this.props.toggleBoardMenu}
                    changeBackground={this.props.changeBackground}
                />
            );
        }
    }
}

export default BackgroundMenu;
