import React, { Component } from "react";
import "../styles/style.css";
import NavbarTop from "./NavbarTop.js";
import NavbarBottom from "./NavbarBottom.js";
import Board from "./Board";
import Card from "./Card";
import { connect } from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "#8E6F44",
            backgroundImage: "",
            cardPopupOpen: false
        };

        this.changeBackground = this.changeBackground.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.openPopup = this.openPopup.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.setSubRef = this.setSubRef.bind(this);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
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
            this.setState({ cardPopupOpen: false });
        }

        if (this.wrapperRef && !this.subRef && !cardSelected) {
            this.setState({ cardPopupOpen: false });
        }
    }

    openPopup(id, listId, position) {
        this.setState({ cardPopupOpen: true, cardSelected: { id, listId, position } });
    }

    changeBackground(e) {
        e.preventDefault();
        this.setState({ backgroundImage: e.target.id });
    }

    changeColor(e) {
        e.preventDefault();
        this.setState({ backgroundImage: "" });
        if (e.target.className === "color-button green") {
            this.setState({ color: "#519839" });
        } else if (e.target.className === "color-button brown") {
            this.setState({ color: "#8E6F44" });
        } else if (e.target.className === "color-button red") {
            this.setState({ color: "#B04632" });
        } else if (e.target.className === "color-button orange") {
            this.setState({ color: "#D29034" });
        } else if (e.target.className === "color-button purple") {
            this.setState({ color: "#89609E" });
        } else if (e.target.className === "color-button pink") {
            this.setState({ color: "#CD5A91" });
        }
    }

    render() {
        let showCardPopUp = null;
        if (this.state.cardPopupOpen === true) {
            const listId = this.props.cards[this.state.cardSelected.id].listId;
            const cards = this.props.lists[listId].cards;
            const position = cards.indexOf(this.state.cardSelected.id);

            showCardPopUp = (
                <Card
                    cardId={this.state.cardSelected.id}
                    listId={listId}
                    setWrapperRef={this.setWrapperRef}
                    position={position}
                    setSubRef={this.setSubRef}
                    menuNode={this.subRef}
                    archived={false}
                />
            );
        }
        return (
            <div
                className="App"
                style={{
                    backgroundColor: this.state.color,
                    backgroundImage: `url(${this.state.backgroundImage})`
                }}
            >
                <NavbarTop />
                <NavbarBottom
                    changeBackground={this.changeBackground}
                    changeColor={this.changeColor}
                    color={this.state.color}
                />
                <Board openPopup={this.openPopup} />
                {showCardPopUp}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards,
        lists: state.lists,
        archivedCardArr: state.archivedCards,
        listArrayReducer: state.listArrayReducer
    };
}

export default connect(mapStateToProps, null)(App);
