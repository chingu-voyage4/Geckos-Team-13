import React, { Component } from "react";

class LabelEditButton extends Component {

    render() {
        return (
            <button className="edit-button" onClick={this.props.toggleLabelEdit}>
                <i className="fas fa-pencil-alt"></i>
                </button>
        );
    }
}

export default LabelEditButton;