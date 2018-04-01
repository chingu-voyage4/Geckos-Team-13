import React, { Component } from "react";
import LabelButton from "./LabelButton.js";

class LabelEditMenu extends Component {
    render() {
        const labels = ["#61BD4F", "#F2D600", "#FFAB4A", "#EB5A46", "#C377E0", "#0079BF"];
        const labelButtons = labels.map((label) => <LabelButton key={label} color={label} />);

        return (
            <div className="label-edit-menu">
            Name
            <input type="text" className="label-name-field" name="label-name"></input>
            <div className="label-button-area">
            <p>Select a Color</p>
            { labelButtons }
            </div>
            <button className="mini-confirm-button">Save</button>
            <button className="mini-danger-button">Delete</button>
            </div>
        );
    }
}

export default LabelEditMenu;