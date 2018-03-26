import React from "react";

class ColorMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "menu-body">
            <button className = "color-button blue"></button>
            <button className = "color-button orange"></button>
            <button className = "color-button green"></button>
            <button className = "color-button red"></button>
            </div>
        );
    }
}

export default ColorMenu;