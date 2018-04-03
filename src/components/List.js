import React, { Component } from "react";
import ListMenu from "./ListMenu.js";
import { connect } from "react-redux";
import * as actions from "../actions";
import CardPreview from "./CardPreview";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            outComponentSelected: true,
            listTitle: this.props.listDetails.title,
            titleSelected: true,
            inputOpen: false,
            cardTitle: "",
            menuDisplay: false
        };

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.cancelExpansion = this.cancelExpansion.bind(this);
        this.addCardTitle = this.addCardTitle.bind(this);
        this.confirmAddCard = this.confirmAddCard.bind(this);
        this.changeListTitle = this.changeListTitle.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.divClicked = this.divClicked.bind(this);
        this.enterTitle = this.enterTitle.bind(this);
        this.handleClickOutsideTitle = this.handleClickOutsideTitle.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("mousedown", this.handleClickOutsideTitle);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
        document.removeEventListener("mousedown", this.handleClickOutsideTitle);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ outComponentSelected: true });
        }
    }

    handleClickOutsideTitle(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ inputOpen: false });
        }
    }

    handleClick() {
        this.setState({ outComponentSelected: false });
    }

    cancelExpansion() {
        this.setState({
            outComponentSelected: true,
            cardTitle: ""
        });
    }

    addCardTitle(event) {
        this.setState({ cardTitle: event.target.value });
    }

    confirmAddCard(event) {
        event.preventDefault();

        if (this.state.cardTitle) {
            const uniq = Date.now();
            const position = Object.keys(this.props.cards).length;
            const cardId = `card${uniq + position}`;
            const title = this.state.cardTitle;
            const description = "";
            const members = [];
            const labels = [];
            const dueDate = "";
            const comments = [];
            const listId = this.props.listId;

            this.props.addCard(
                cardId,
                position,
                title,
                description,
                members,
                labels,
                dueDate,
                comments,
                listId
            );
            this.setState({ cardTitle: "" });
        }
    }

    handleKeyPress(event) {
        if (event.key === "Enter") {
            this.confirmAddCard(event);
        }
    }

    enterTitle(event) {
        if (event.key === "Enter") {
            this.setState({ inputOpen: false });
        }
    }

    changeListTitle(event) {
        event.preventDefault();
        this.setState({ listTitle: event.target.value });
        this.props.editListTitle(event.target.value, this.props.listId);
    }

    renderCardList() {
        const allCardsInThisList = this.props.allLists[this.props.listId].cards;
        if (allCardsInThisList) {
            return allCardsInThisList.map((cardId, index) => {
                const card = this.props.cards[cardId];
                return (
                    <CardPreview
                        key={cardId}
                        Id={cardId}
                        listId={this.props.listId}
                        title={card.title}
                        position={index}
                    />
                );
            });
        }
    }

    divClicked() {
        this.setState({ inputOpen: true });
    }

    renderTitle() {
        if (this.state.inputOpen) {
            return (
                <input
                    onKeyPress={this.enterTitle}
                    ref={this.setWrapperRef}
                    className="list-title__edit--input"
                    onChange={this.changeListTitle}
                    value={this.state.listTitle}
                    type="text"
                />
            );
        } else {
            return (
                <div onClick={this.divClicked} className="list-title__edit">
                    {this.state.listTitle}
                </div>
            );
        }
    }

    toggleMenu() {
        if (this.state.menuDisplay === false) {
            this.setState({ menuDisplay: true });
        } else {
            this.setState({ menuDisplay: false });
        }
    }

    render() {
        return (
            <div className="list__container">
                {this.props.children}
                <div className="list__header">
                    <div className="list__header-title">{this.renderTitle()}</div>
                    <span className="openListMenu" onClick={this.toggleMenu}>
                        <button className="expandMenu">
                            <i className="fas fa-ellipsis-h" />
                        </button>
                    </span>
                    {this.state.menuDisplay && (
                        <ListMenu
                            toggleMenu={this.toggleMenu}
                            listId={this.props.listId}
                            position={this.props.position}
                        />
                    )}
                </div>
                <div className="card-container">
                    <ul className="cards">{this.renderCardList()}</ul>
                </div>
                <form
                    onSubmit={this.confirmAddCard}
                    ref={this.setWrapperRef}
                    onKeyPress={this.handleKeyPress}
                    className="list__add-cards-full"
                    style={{
                        display: this.state.outComponentSelected ? "none" : "block"
                    }}
                >
                    <div className="form-container">
                        <textarea
                            className="form-card-description"
                            value={this.state.cardTitle}
                            onChange={this.addCardTitle}
                        />
                        <div className="form-btn-container">
                            <button type="submit" className="btn--add">
                                Add
                            </button>
                            <button className="btn--cancel">
                                <img
                                    src="../close-round.png"
                                    className="cancel"
                                    onClick={this.cancelExpansion}
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                </form>
                <button
                    onClick={this.handleClick}
                    className="list__add-cards-short"
                    style={{
                        display: this.state.outComponentSelected ? "block" : "none"
                    }}
                >
                    Add a card...
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allLists: state.lists,
        cards: state.cards
    };
}

export default connect(mapStateToProps, actions)(List);
