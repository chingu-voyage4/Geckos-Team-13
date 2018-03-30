import React, { Component } from "react";

class Label extends Component {

    render() {
        const style = {backgroundColor: this.props.color};
        return (
            <div className="label" style={style}></div>
        );
    }
}

export default Label;
