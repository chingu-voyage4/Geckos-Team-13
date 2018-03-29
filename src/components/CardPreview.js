import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuickEditCard from "./QuickEditCard";
import Card from "./Card";
import "../styles/cardpreview.css";

export default class extends Component {
    constructor(props) {
        super(props);

        state: {
            cardPopUpOpen: false;
        }

        this.openCard = this.openCard.bind(this);
    }

    openCard() {
        this.setState({
            cardPopUpOpen: true
        });
    }

    render() {
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
