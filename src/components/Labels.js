import React, { Component } from "react";
import "./labels.css";
import LabelEditMenu from "./LabelEditMenu.js";
import Label from "./Label.js";
// import LabelEditButton from "./LabelEditButton.js";

class Labels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLabelEdit: false,
            title: "Labels",
            currentLabelId: 0,
            labels: [
                { color: "#61BD4F", labelText: "Test", id: 1, active: false },
                { color: "#F2D600", labelText: "", id: 2, active: false },
                { color: "#FFAB4A", labelText: "", id: 3, active: false },
                { color: "#EB5A46", labelText: "", id: 4, active: false },
                { color: "#C377E0", labelText: "", id: 5, active: false },
                { color: "#0079BF", labelText: "", id: 6, active: false }
            ]
        };
        this.toggleLabelEdit = this.toggleLabelEdit.bind(this);
        this.changeLabelColor = this.changeLabelColor.bind(this);
    }

    toggleLabelEdit(id) {
        if (this.state.showLabelEdit) {
            this.setState({ showLabelEdit: false });
        } else {
            this.setState({ showLabelEdit: true, title: "Change Label", currentLabelId: id });
        }
    }

    changeLabelColor(color, labels, currentLabel) {
        const editedLabels = labels;

        editedLabels[currentLabel - 1].color = color;
        this.setState({ labels: editedLabels });
    }

    render() {
        const labelDivs = this.state.labels.map(label => (
            <div className="label-edit" key={label.color}>
                <Label
                    key={label.color}
                    width="250px"
                    height="20px"
                    color={label.color}
                    id={label.id}
                    addCardLabel={this.props.addCardLabel.bind(
                        this,
                        label.color,
                        label.labelText,
                        label.id
                    )}
                    removeCardLabel={this.props.removeCardLabel}
                    labelText={label.labelText}
                    toggleLabelEdit={this.toggleLabelEdit}
                    toggleActiveLabels={this.props.toggleActiveLabels}
                />
            </div>
        ));
        return (
            <div className="label-menu">
                <div className="label-menu-title">
                    {this.state.showLabelEdit && <span className="back"><i className="fas fa-arrow-left" onClick={this.toggleLabelEdit} /></span>}
                    {this.state.title}
                    <span className="close" id="closed" onClick={this.props.toggleCardAction}>
                        <img src="images/close-round.png" alt="close" />
                    </span>
                </div>
                {!this.state.showLabelEdit && (
                    <div className="label-list">
                        {labelDivs}
                        <a href="#create-label">Create a new label</a>
                    </div>
                )}
                {this.state.showLabelEdit && (
                    <LabelEditMenu addCardLabel={this.props.addCardLabel} currentLabelId = {this.state.currentLabelId}
                    labels={this.state.labels} changeLabelColor={this.changeLabelColor} />
                )}
            </div>
        );
    }
}

export default Labels;
