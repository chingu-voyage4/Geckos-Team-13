import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuickEditCard from "./QuickEditCard";
import Card from "./Card";
import "../styles/cardpreview.css";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quickEditOpen: false,
            cardPopUpOpen: false
        };

        this.openCard = this.openCard.bind(this);
        this.closeQuickEdit = this.closeQuickEdit.bind(this);
        this.openQuickEdit = this.openQuickEdit.bind(this);
    }

    openCard() {
        this.setState({
            cardPopUpOpen: true
        });
    }

    openQuickEdit(event) {
        this.recalculateOffset();
        this.setState({
            quickEditOpen: true
        });
    }

    closeQuickEdit() {
        this.setState({
            quickEditOpen: false
        });
    }

    render() {
        let showCard = null;
        const cardOpened = this.state.cardPopUpOpen;
        if (cardOpened) {
            showCard = (
                <Card
                    cardId={this.props.Id}
                    listId={this.props.listId}
                    closeQuickEdit={this.closeQuickEdit}
                    setWrapperRef={this.setWrapperRef}
                    position={this.props.position}
                />
            );
        }

        const isOpened = this.state.quickEditOpen;
        let showMenu = null;
        if (isOpened) {
            showMenu = (
                <QuickEditCard
                    cardId={this.props.Id}
                    listId={this.props.listId}
                    style={style}
                    title={this.props.title}
                    position={this.props.position}
                    setWrapperRef={this.setWrapperRef}
                    closeQuickEdit={this.closeQuickEdit}
                    recalculateOffset={this.recalculateOffset}
                />
            );
        }

        return (
            <li className="card-preview">
                <div onClick={this.openCard} className="card-preview__text">
                    {this.props.title}
                </div>
                <button className="quick-edit-popout" onClick={this.openQuickEdit.bind(this)}>
                    <i className="fas fa-pencil-alt quick-edit-popout" />
                </button>
            </li>
        );
    }
}
