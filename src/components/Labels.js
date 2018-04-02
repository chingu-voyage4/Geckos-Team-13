import React, { Component } from "react";
import "./labels.css";
import LabelEditMenu from "./LabelEditMenu.js";
import Label from "./Label.js";

class Labels extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLabelEdit: false, title: "Labels", labels: [{ color: "#61BD4F", labelText: "Test" }, { color: "#F2D600", labelText: "" },
            { color: "#FFAB4A", labelText: "" }, { color: "#EB5A46", labelText: "" }, { color: "#C377E0", labelText: "" },
            { color: "#0079BF", labelText: "" }]};
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
                <Label key={label.color} width="250px" height="20px" color={label.color}
                    addCardLabel={this.props.addCardLabel.bind(this, label.color)}
                    labelText={label.labelText} toggleLabelEdit={this.toggleLabelEdit}/>
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