import React, { Component } from "react";
import LabelEditButton from "./LabelEditButton.js";

class Label extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const style = {backgroundColor: this.props.color,
            width: this.props.width, height: this.props.height};
        return (
                <div className="label" id={this.props.color} style={style}
                addCardLabel={this.props.addCardLabel}
                onClick={this.props.addCardLabel}>{this.props.labelText}</div>
        );
    }
}

export default Label;
