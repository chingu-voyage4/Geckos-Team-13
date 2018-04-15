import React, { Component } from "react";

class LabelButton extends Component {

    render() {
        const style = {backgroundColor: this.props.color};
        const labels = this.props.labels;
        return (
        <button className="label-button" style={style} id={this.props.id}
                onClick={() => this.props.changeLabelColor(this.props.color, labels, this.props.currentLabelId)}>
                {this.props.active && <i className="fas fa-check" />}
        </button>
        );
    }
}

export default LabelButton;