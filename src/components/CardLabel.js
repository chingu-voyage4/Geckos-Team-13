import React, { Component } from "react";

class CardLabel extends Component {
    constructor(props) {
        super(props);
        this.state = { active: this.props.active };
    }

    render() {
        const style = {
            backgroundColor: this.props.color,
            width: this.props.width, height: this.props.height
        };
            return (
                <div className="label" id={this.props.id} style={style}>{this.props.labelText}</div>
            );
    }

}
export default CardLabel;