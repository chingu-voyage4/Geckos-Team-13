import React, { Component } from "react";

class LabelEditMenu extends Component {
    render() {
        const labels = ["#61BD4F", "#F2D600", "#FFAB4A", "#EB5A46", "#C377E0", "#0079BF"];
        const labelButtons = labels.map((label) => <button key={label} color={label} className="label-button"></button>);

        return (
            <div className="label-edit-menu">
            <p>Select a Color</p>
            { labelButtons }
            </div>
        );
    }
}

export default LabelEditMenu;