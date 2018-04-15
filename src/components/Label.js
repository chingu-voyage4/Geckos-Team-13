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
        } else {
            this.setState({ active: true });
            this.props.addCardLabel(e);
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
            <div>
            <div
                className="label"
                id={this.props.id}
                style={style}
                addCardLabel={this.props.addCardLabel}
                onClick={this.toggleActive}
            >
                {this.props.labelText}
                {this.state.active && <i className="fas fa-check" />}
            </div>
                <LabelEditButton toggleLabelEdit={() => this.props.toggleLabelEdit(this.props.id)} id={this.props.id} />
            </div>
        );
    }
}

export default Label;
