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
            cardPopUpOpen: false
        };

        this.showCards = this.showCards.bind(this);
        this.openCardPopUp = this.openCardPopUp.bind(this);
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

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.setSubRef = this.setSubRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.openCardPopUp = this.openCardPopUp.bind(this);
        this.showCards = this.showCards.bind(this);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    setWrapperRef(node) {
        console.log(node);
        this.wrapperRef = node;
        console.log("why", this.wrapperRef);
    }

    setSubRef(node) {
        this.subRef = node;
    }

    handleClickOutside(event) {
        const cardSelected = this.wrapperRef && this.wrapperRef.contains(event.target);
        const subMenuSelected = this.subRef && this.subRef.contains(event.target);
        console.log("stuck", this.wrapperRef);

        if (this.wrapperRef && this.subRef && !subMenuSelected && !cardSelected) {
            console.log("firing first");
            this.setState({ quickEditOpen: false, cardPopUpOpen: false });
        }

        if (this.wrapperRef && !this.subRef && !cardSelected) {
            console.log("firing second");
            this.setState({ quickEditOpen: false, cardPopUpOpen: false });
        }
    }

    openCardPopUp(item) {
        console.log("firing openCardPopUp");
        this.setState({ popup: item, cardPopUpOpen: true });
    }

    showCards() {
        return this.props.archivedCards.map(item => {
            return (
                <li
                    key={item.cardId}
                    className="list-card"
                    onClick={() => this.openCardPopUp(item)}
                >
                    <div className="list-card-title">{this.props.cards[item.cardId].title}</div>
                    <span style={{ color: "grey", fontSize: 11, paddingLeft: 5, paddingRight: 5 }}>
                        <i style={{ fontSize: 11 }} className="fas fa-archive" />Archived
                    </span>
                    <button className="card-list__move-list-link">Send To Board</button>
                    <button className="card-list__move-list-link">Delete</button>
                </li>
            );
        });
    }
    render() {
        if (this.state.popup) {
            console.log(this.state.popup);
            const cardId = this.state.popup.cardId;
            const listId = this.state.popup.listId;
            const position = this.state.popup.position;
            return (
                <Card
                    cardId={cardId}
                    listId={listId}
                    position={position}
                    archived={true}
                    setWrapperRef={this.setWrapperRef}
                    position={this.props.position}
                    setSubRef={this.setSubRef}
                />
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
                            <img src="../close-round.png" alt="close" />
                        </span>
                    </div>
                    <ul style={{ padding: 0 }}>{this.showCards()}</ul>
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
