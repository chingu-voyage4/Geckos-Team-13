import React from "react";

class ColorMenu extends React.Component {

    render() {
        return (
            <div className="board-menu">
                <div className="board-menu-title"><span className= "back"
                    onClick={this.props.showBackgroundMenu}>
                    <i className="fas fa-arrow-left back"></i></span><h3>{this.props.menuTitle}</h3>
                    <span className="close" onClick={this.props.toggleBoardMenu}>
                        <img src="images/close-round.png" alt="close" /></span>
                </div>
            <div className = "menu-body">
                <button className = "color-button brown" onClick={this.props.changeColor}></button>
                <button className="color-button orange" onClick={this.props.changeColor}></button>
                <button className = "color-button green" onClick={this.props.changeColor}></button>
                <button className="color-button red" onClick={this.props.changeColor}></button>
                <button className="color-button purple" onClick={this.props.changeColor}></button>
                <button className="color-button pink" onClick={this.props.changeColor}></button>
            </div>
            </div>
        );
    }
}

export default ColorMenu;