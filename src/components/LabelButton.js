import React, { Component } from "react";

class LabelButton extends Component {
    render() {
        const style = {backgroundColor: this.props.color};
        return (
        <button className="label-button" style={style}></button>
        );
    }
}

export default LabelButton;