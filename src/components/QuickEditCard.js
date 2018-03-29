import React, { Component } from "react";

class QuickEditCard extends Component {
    render() {
        return (
            <div className="quick-edit__screen">
                <div
                    className="quick-edit__container"
                    style={this.props.style}
                    ref={this.props.setWrapperRef}
                >
                    <div className="text-button-container">
                        <textarea className="quick-edit__text-box" />
                        <button className="btn--add">Save</button>
                    </div>
                    <ul className="quick-edit__menu">
                        <li className="menu-item">
                            <a className="menu-button">
                                <i class="fas fa-tag" /> Edit Labels
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">
                                {" "}
                                <i class="far fa-user" /> Change Members
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">
                                {" "}
                                <i class="fas fa-arrow-right" /> Move
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">
                                {" "}
                                <i class="far fa-copy" /> Copy
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">
                                {" "}
                                <i class="far fa-calendar-alt" /> Change Due Date
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">
                                <i class="fas fa-archive" /> Archive
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuickEditCard;
