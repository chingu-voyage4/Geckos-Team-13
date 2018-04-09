import React, { Component } from "react";
import "./labels.css";
import LabelEditMenu from "./LabelEditMenu.js";
import Label from "./Label.js";
import LabelEditButton from "./LabelEditButton.js";

class Labels extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLabelEdit: false, title: "Labels", labels: [{ color: "#61BD4F", labelText: "Test", active: false },
            { color: "#F2D600", labelText: "", active: false },
            { color: "#FFAB4A", labelText: "", active: false }, { color: "#EB5A46", labelText: "", active: false },
            { color: "#C377E0", labelText: "", active: false }, { color: "#0079BF", labelText: "", active: false }]};
        this.toggleLabelEdit = this.toggleLabelEdit.bind(this);

    }

    toggleLabelEdit(e) {
        e.preventDefault();
        if (this.state.showLabelEdit) {
            this.setState({ showLabelEdit: false });
        } else {
            this.setState({ showLabelEdit: true, title: "Change Label" });
        }

    }

    render() {
        const labelDivs = this.state.labels.map((label) => (
            <div className="label-edit" key={label.color}>
                <Label key={label.color} width="250px" height="20px" color={label.color} active={label.active}
                    addCardLabel={this.props.addCardLabel.bind(this, label.color, label.labelText)}
                        removeCardLabel={this.props.removeCardLabel.bind(this)}
                    labelText={label.labelText} toggleLabelEdit={this.toggleLabelEdit}/>
                <LabelEditButton toggleLabelEdit={this.toggleLabelEdit} />
            </div>
        ));
        return (
            <div className = "label-menu">
                <div className="label-menu-title">{ this.state.title }<span className="close" id="closed"
                onClick={this.props.toggleCardAction}>
                    <img src="../close-round.png" alt="close" />
                </span>
            </div>
                { !this.state.showLabelEdit &&
            <div className = "label-list">
            { labelDivs }
            <a href="#create-label">Create a new label</a>
            </div> }
                {this.state.showLabelEdit && < LabelEditMenu addCardLabel={this.props.addCardLabel} />}
            </div>
        );
    }
}

export default Labels;