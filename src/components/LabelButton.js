import React, { Component } from "react";

class LabelButton extends Component {

    render() {
        const style = {backgroundColor: this.props.color};
        return (
        <button className="label-button" style={style}
        onClick={this.props.addCardLabel.bind(this, this.props.color, this.props.labelText)}>
        </button>
        );
    }
}

export default LabelButton;