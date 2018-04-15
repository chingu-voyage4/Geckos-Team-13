import React, { Component } from "react";
import LabelButton from "./LabelButton.js";

class LabelEditMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            labels: [{ color: "#61BD4F", id: 1, active: false },
            { color: "#F2D600", id: 2, active: false },
            { color: "#FFAB4A", id: 3, active: false },
            { color: "#EB5A46", id: 4, active: false },
            { color: "#C377E0", id: 5, active: false },
            { color: "#0079BF", id: 6, active: false }]};
            this.setActive();
    }

    setActive() {
        const tempLabels = this.state.labels;
        // change this to set active label button to current COLOR
        tempLabels[this.props.currentLabelId-1].active = true;

        this.setState({ labels: tempLabels });
    }

    render() {

        const labelButtons = this.state.labels.map(label => (
            <LabelButton
                changeLabelColor = {this.props.changeLabelColor}
                labels = {this.props.labels}
                currentLabelId = {this.props.currentLabelId}
                // onClick={this.props.addCardLabel.bind(this, label.color, label.labelText)}
                key={label.color}
                labelText={label.labelText}
                color={label.color}
                active={label.active}
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
