import React, { Component } from "react";
import LabelEditButton from "./LabelEditButton.js";

class Label extends Component {

    constructor(props) {
        super(props);
        this.state = {color: this.props.color, labelText: this.props.labelText};
    }

    render() {
        const style = {backgroundColor: this.state.color};
        return (
            <div>
            <div className="label" id={this.state.color} style={style}>{this.state.labelText}</div>
            <LabelEditButton toggleLabelEdit={this.props.toggleLabelEdit} />
                </div>
        );
    }
}

export default Label;
