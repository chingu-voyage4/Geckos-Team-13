import React, { Component } from "react";
import LabelButton from "./LabelButton.js";

class LabelEditMenu extends Component {
    render() {
        const labels = [
            { color: "#61BD4F", labelText: "Test", active: false },
            { color: "#F2D600", labelText: "", active: false },
            { color: "#FFAB4A", labelText: "", active: false },
            { color: "#EB5A46", labelText: "", active: false },
            { color: "#C377E0", labelText: "", active: false },
            { color: "#0079BF", labelText: "", active: false }
        ];
        const labelButtons = labels.map(label => (
            <LabelButton
                addCardLabel={this.props.addCardLabel}
                onClick={this.props.addCardLabel.bind(this, label.color, label.labelText)}
                key={label.color}
                labelText={label.labelText}
                color={label.color}
            />
        ));

        return (
            <div className="label-edit-menu">
                Name
                <input type="text" className="label-name-field" name="label-name" />
                <div className="label-button-area">
                    <p>Select a Color</p>
                    {labelButtons}
                </div>
                <button className="mini-confirm-button">Save</button>
                <button className="mini-danger-button">Delete</button>
            </div>
        );
    }
}

export default LabelEditMenu;
