import React, { Component } from "react";

class LabelButton extends Component {
    constructor(props) {
        super(props);

        this.state = { active: this.props.active};
    }

    render() {
        const style = {backgroundColor: this.props.color};
        return (
        <button className="label-button" style={style} id={this.props.id}
        onClick = {this.props.changeLabelColor}
        // onClick={this.props.addCardLabel.bind(this, this.props.color, this.props.labelText)}
            >{this.state.active && <i className="fas fa-check" />}
        </button>
        );
    }
}

export default LabelButton;