import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Card from "./Card";

class ArchiveMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            card: true,
            list: false,
            popup: null,
            cardPopUpOpen: false,
            toggleCard: true
        };

        this.showCards = this.showCards.bind(this);
        this.openCardPopUp = this.openCardPopUp.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.setSubRef = this.setSubRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.openCardPopUp = this.openCardPopUp.bind(this);
        this.showCards = this.showCards.bind(this);
        this.sendToBoard = this.sendToBoard.bind(this);
        this.sendListToBoard = this.sendListToBoard.bind(this);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        this.recalculateOffset();
    }

    recalculateOffset() {
        var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();

        this.setState({
            top: rect.top,
            left: rect.left,
            width: rect.width
        });
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    setSubRef(node) {
        this.subRef = node;
    }

    handleClickOutside(event) {
        const cardSelected = this.wrapperRef && this.wrapperRef.contains(event.target);
        const subMenuSelected = this.subRef && this.subRef.contains(event.target);

        if (this.wrapperRef && this.subRef && !subMenuSelected && !cardSelected) {
            this.setState({ quickEditOpen: false, cardPopUpOpen: false });
        }
        if (this.wrapperRef && !this.subRef && !cardSelected) {
            this.setState({ cardPopUpOpen: false });
        }
    }

    // toggleCardOpen() {
    //     this.setState;
    // }

    openCardPopUp(item) {
        this.setState({ popup: item, cardPopUpOpen: true });
    }

    sendToBoard(item) {
        const archived = false;
        this.props.restoreCard(item.cardId, item.position, item.listId, archived);
    }

    sendListToBoard(item) {
        console.log("wat, wat", item);
        this.props.restoreList(item.listId, item.position);
    }

    showCards() {
        return this.props.archivedCards.map(item => {
            return (
                <li key={item.cardId} className="list-card">
                    <div className="list-card-title" onClick={() => this.openCardPopUp(item)}>
                        {this.props.cards[item.cardId].title}
                    </div>
                    <span style={{ color: "grey", fontSize: 11, paddingLeft: 5, paddingRight: 5 }}>
                        <i style={{ fontSize: 11 }} className="fas fa-archive" />Archived
                    </span>
                    <button
                        className="card-list__move-list-link"
                        onClick={() => this.sendToBoard(item)}
                    >
                        Send To Board
                    </button>
                    <button className="card-list__move-list-link">Delete</button>
                </li>
            );
        });
    }

    showLists() {
        return this.props.archivedLists.map(item => {
            return (
                <li key={item.listId}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginLeft: 5
                        }}
                    >
                        <span>
                            <p>{this.props.lists[item.listId].title}</p>
                        </span>

                        <button id="send-to-board-btn" onClick={() => this.sendListToBoard(item)}>
                            Send To Board
                        </button>
                    </div>
                </li>
            );
        });
    }

    render() {
        let showCard = null;
        if (this.state.popup) {
            const cardId = this.state.popup.cardId;
            const listId = this.state.popup.listId;
            const position = this.state.popup.position;

            const cardOpened = this.state.cardPopUpOpen;
            if (cardOpened) {
                showCard = (
                    <Card
                        cardId={cardId}
                        listId={listId}
                        position={position}
                        archived={true}
                        setWrapperRef={this.setWrapperRef}
                        setSubRef={this.setSubRef}
                    />
                );
            }
        }

        let noCards = null;
        if (this.props.archivedCards.length <= 0) {
            noCards = (
                <div className="no-cards">
                    <p style={{ paddingTop: 15, paddingBottom: 15 }}>No archived cards</p>
                </div>
            );
        }

        let noLists = null;
        if (this.props.archivedLists.length <= 0) {
            noLists = (
                <div className="no-cards">
                    <p style={{ paddingTop: 15, paddingBottom: 15 }}>No archived lists</p>
                </div>
            );
        }

        if (this.state.toggleCard === true) {
            return (
                <div className="board-menu">
                    <div className="board-menu-title">
                        <span className="back" onClick={this.props.showMainMenu}>
                            <i className="fas fa-arrow-left" />
                        </span>
                        <h3>{this.props.menuTitle}</h3>
                        <span className="close" onClick={this.props.toggleBoardMenu}>
                            <img src="images/close-round.png" alt="close" />
                        </span>
                    </div>
                    <button
                        style={{ marginTop: 15, marginBottom: 15 }}
                        className="card-list__move-list-link"
                        onClick={() => this.setState({ toggleCard: false })}
                    >
                        Switch To Lists
                    </button>
                    <ul style={{ padding: 0 }}>{this.showCards()}</ul>
                    {noCards}
                    {showCard}
                </div>
            );
        } else {
            return (
                <div className="board-menu">
                    <div className="board-menu-title">
                        <span className="back" onClick={this.props.showMainMenu}>
                            <i className="fas fa-arrow-left" />
                        </span>
                        <h3>{this.props.menuTitle}</h3>
                        <span className="close" onClick={this.props.toggleBoardMenu}>
                            <img src="images/close-round.png" alt="close" />
                        </span>
                    </div>
                    <button
                        style={{
                            marginTop: 15,
                            marginBottom: 15
                        }}
                        className="card-list__move-list-link"
                        onClick={() => this.setState({ toggleCard: true })}
                    >
                        Switch To Cards
                    </button>
                    <ul style={{ padding: 0 }}>{this.showLists()}</ul>
                    {noLists}
                    {showCard}
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards,
        lists: state.lists,
        archivedLists: state.archivedLists,
        archivedCards: state.archivedCards
    };
}

export default connect(mapStateToProps, actions)(ArchiveMenu);
