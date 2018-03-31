import React, { Component } from "react";
import Labels from "./Labels.js";

class QuickEditCard extends Component {
    render() {
        return (
            <div className="quick-edit__screen">
                <div className="quick-edit__container">
                    <div className="text-button-container">
                        <textarea className="quick-edit__text-box" />
                        <button className="btn--add">Save</button>
                    </div>
                    <ul className="quick-edit__menu">
                        <li className="menu-item">
                            <a className="menu-button">Edit Labels</a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">Change Members</a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">Move</a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">Copy</a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">Change Due Date</a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">Archive</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuickEditCard;
