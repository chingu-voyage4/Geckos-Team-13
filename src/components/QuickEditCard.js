import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import MoveCardSubmenu from "./MoveCardSubmenu";

class QuickEditCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardTitle: this.props.title,
            moveOpen: false
        };

        this.changeCardTitle = this.changeCardTitle.bind(this);
        this.submitTitleChange = this.submitTitleChange.bind(this);
        this.moveOpen = this.moveOpen.bind(this);
        this.moveClose = this.moveClose.bind(this);
        this.archiveCard = this.archiveCard.bind(this);
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

    moveOpen() {
        this.setState({ moveOpen: true });
    }

    moveClose() {
        this.setState({ moveOpen: false });
    }

    archiveCard() {
        const archivedCard = {
            cardId: this.props.cardId,
            position: this.props.position,
            archived: true,
            listId: this.props.listId
        };

        this.props.archiveCard(archivedCard);
        this.props.closeQuickEdit();
    }

    render() {
        let showMoveMenu = null;
        const moveOpened = this.state.moveOpen;
        if (moveOpened) {
            showMoveMenu = (
                <MoveCardSubmenu
                    cardId={this.props.cardId}
                    listId={this.props.listId}
                    position={this.props.position}
                    closeQuickEdit={this.props.closeQuickEdit}
                    style={{ top: 91, left: 15 }}
                    close={this.moveClose}
                />
            );
        }
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
                        <button className="btn--add" onClick={this.submitTitleChange}>
                            Save
                        </button>
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
                            <a className="menu-button" onClick={this.moveOpen}>
                                {" "}
                                <i className="fas fa-arrow-right" />
                                Move
                            </a>
                            {showMoveMenu}
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
                            <a className="menu-button" onClick={this.archiveCard}>
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
    return {
        cards: state.cards
    };
}

export default connect(mapStateToProps, actions)(QuickEditCard);
