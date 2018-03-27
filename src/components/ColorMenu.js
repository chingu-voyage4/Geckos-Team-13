import React from "react";

class ColorMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "menu-body">
            <button className = "color-button blue" onClick={this.props.changeColor}></button>
                <button className="color-button orange" onClick={this.props.changeColor}></button>
            <button className = "color-button green" onClick={this.props.changeColor}></button>
                <button className="color-button red" onClick={this.props.changeColor}></button>
            </div>
        );
    }
}

export default ColorMenu;