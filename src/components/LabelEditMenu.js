import React, { Component } from "react";
import LabelButton from "./LabelButton.js";

class LabelEditMenu extends Component {
    render() {
        const labels = [{ color: "#61BD4F", labelText: "Test" }, { color: "#F2D600", labelText: "" },
        { color: "#FFAB4A", labelText: "" }, { color: "#EB5A46", labelText: "" }, { color: "#C377E0", labelText: "" },
        { color: "#0079BF", labelText: "" }];
        const labelButtons = labels.map((label) => <LabelButton addCardLabel={this.props.addCardLabel}
        onClick={this.props.addCardLabel.bind(this, label.color)} key={label.color} color={label.color} />);

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