import React, { Component } from "react";
import LabelButton from "./LabelButton.js";

class LabelEditMenu extends Component {
    render() {
        const labels = this.props.labels;

        const labelButtons = labels.map(label => (
            <LabelButton
               // addCardLabel={this.props.addCardLabel}
                changeLabelColor = {this.props.changeLabelColor}
                // onClick={this.props.addCardLabel.bind(this, label.color, label.labelText)}
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
