import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuickEditCard from "./QuickEditCard";
import Card from "./Card";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            top: "",
            left: "",
            width: "",
            quickEditOpen: false,
            cardPopUpOpen: false
        };

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.openCard = this.openCard.bind(this);
        this.closeQuickEdit = this.closeQuickEdit.bind(this);
        this.openQuickEdit = this.openQuickEdit.bind(this);
        this.recalculateOffset = this.recalculateOffset.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setSubRef = this.setSubRef.bind(this);
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
        console.log(rect);
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
            this.setState({ quickEditOpen: false, cardPopUpOpen: false });
        }
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
        const style = { top: this.state.top, left: this.state.left };

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
                    setSubRef={this.setSubRef}
                    menuNode={this.subRef}
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
                />
            );
        }

        return (
            <li className="card-preview">
                <div onClick={this.openCard} className="card-preview__text">
                    {this.props.title}
                </div>
                <button className="quick-edit-popout" onClick={this.openQuickEdit}>
                    <i className="fas fa-pencil-alt quick-edit-popout" />
                </button>
                {showMenu}
                {showCard}
            </li>
        );
    }
}
