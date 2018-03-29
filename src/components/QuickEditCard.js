import React, { Component } from "react";

class QuickEditCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardTitle: ""
        };

        this.changeCardTitle = this.changeCardTitle.bind(this);
    }

    changeCardTitle(event) {
        this.setState({
            cardTitle: event.target.value
        });
    }

    render() {
        return (
            <div className="quick-edit__screen">
                <div
                    className="quick-edit__container"
                    style={this.props.style}
                    ref={this.props.setWrapperRef}
                >
                    <div className="text-button-container">
                        <textarea
                            className="quick-edit__text-box"
                            value={this.state.cardTitle}
                            onChange={this.changeCardTitle}
                        />
                        <button className="btn--add">Save</button>
                    </div>
                    <ul className="quick-edit__menu">
                        <li className="menu-item">
                            <a className="menu-button">
                                <i className="fas fa-tag" /> Edit Labels
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">
                                {" "}
                                <i className="far fa-user" /> Change Members
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">
                                {" "}
                                <i className="fas fa-arrow-right" /> Move
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">
                                {" "}
                                <i className="far fa-copy" /> Copy
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">
                                {" "}
                                <i className="far fa-calendar-alt" /> Change Due Date
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-button">
                                <i className="fas fa-archive" /> Archive
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuickEditCard;
