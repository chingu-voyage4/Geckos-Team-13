import React, { Component } from "react";
import LabelEditButton from "./LabelEditButton.js";

class Label extends Component {
    constructor(props) {
        super(props);

        this.state = { active: this.props.active };
        this.toggleActive = this.toggleActive.bind(this);
    }

    toggleActive(e) {
        e.preventDefault();

        if (this.state.active === true) {
            this.setState({ active: false });
            this.props.removeCardLabel();
            console.log("State was true");
        } else {
            this.setState({ active: true });
            this.props.addCardLabel(e);
            console.log("State was false");
        }

        this.props.toggleActiveLabels(this.props.id);
    }

    render() {
        const style = {
            backgroundColor: this.props.color,
            width: this.props.width,
            height: this.props.height
        };
        return (
            <div
                className="label"
                id={this.props.color}
                style={style}
                addCardLabel={this.props.addCardLabel}
                onClick={this.toggleActive}
            >
                {this.props.labelText}
                {this.state.active && <i className="fas fa-check" />}
            </div>
        );
    }
}

export default Label;
