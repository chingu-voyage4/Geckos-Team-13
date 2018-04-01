import React, { Component } from "react";
import "./labels.css";
import LabelEditMenu from "./LabelEditMenu.js";
import Label from "./Label.js";
import LabelEditButton from "./LabelEditButton.js";

class Labels extends Component {

    constructor(props) {
        super(props);
        this.state = {showLabelEdit: false, title: "Labels"};
        this.toggleLabelEdit = this.toggleLabelEdit.bind(this);

    }

    toggleLabelEdit(e) {
        e.preventDefault();
        if (this.state.showLabelEdit) {
            this.setState({showLabelEdit: false});
        } else {
            this.setState({showLabelEdit: true, title: "Change Label"});
        }

    }
    render() {

        const labels = ["#61BD4F", "#F2D600", "#FFAB4A", "#EB5A46", "#C377E0", "#0079BF"];
        const labelDivs = labels.map((label) => (
            <div className="label-edit" key={label}>
                <Label key={label} color={label} /><LabelEditButton
                key={label} toggleLabelEdit={this.toggleLabelEdit} />
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
                {this.state.showLabelEdit && < LabelEditMenu />}
            </div>
        );
    }
}

export default Labels;