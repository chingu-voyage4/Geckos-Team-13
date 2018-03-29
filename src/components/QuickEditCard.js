import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class QuickEditCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardTitle: this.props.title
        };

        this.changeCardTitle = this.changeCardTitle.bind(this);
        this.submitTitleChange = this.submitTitleChange.bind(this);
    }

    changeCardTitle(event) {
        this.setState({
            cardTitle: event.target.value
        });
    }

    submitTitleChange() {
        this.props.editCardTitle(this.state.cardTitle, this.props.cardId);
        this.setState({
            cardTitle: ""
        });
        this.props.closeQuickEdit();
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

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, actions)(QuickEditCard);
