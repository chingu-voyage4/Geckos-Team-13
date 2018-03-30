import React, { Component } from "react";
import "./labels.css";

import Label from "./Label.js";

class Labels extends Component {
    render() {

        const labels = ["#61BD4F", "#F2D600", "#FFAB4A", "#EB5A46", "#C377E0", "#0079BF"];
        const labelDivs = labels.map((label) => (
            <div className="label-edit" key={label}>
                <Label key={label} color={label} /><button className="edit-button" key={label}><i className="fas fa-pencil-alt"></i></button>
            </div>
        ));
        return (
            <div className = "label-menu">
                <div className="label-menu-title">Labels<span className="close">
                    <img src="../close-round.png" alt="close" />
                </span>
            </div>
            <div className = "label-list">
            { labelDivs }
            <a href="#create-label">Create a new label</a>
            </div>
            </div>
        );
    }
}

export default Labels;