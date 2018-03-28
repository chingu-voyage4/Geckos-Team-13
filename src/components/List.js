import React, { Component } from "react";
import ListMenu from "./ListMenu.js";
import { connect } from "react-redux";
import * as actions from "../actions";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      outComponentSelected: true,
      listTitle: "",
      titleSelected: true,
      inputOpen: false,
      cardName: "",
      cardTitles: [],
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
      cardName: ""
    });
  }

  addCardTitle(event) {
    this.setState({ cardName: event.target.value });
  }

  confirmAddCard(event) {
    event.preventDefault();
    if (this.state.cardName) {
      this.setState({
        cardTitles: [...this.state.cardTitles, this.state.cardName],
        cardName: "",
        outComponentSelected: true
      });
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
  }

  renderCardList() {
    return this.state.cardTitles.map(title => {
      return (
        <li key={title} className="card-preview">
          {title}
        </li>
      );
    });
  }

  divClicked() {
    console.log("here");
    this.setState({ inputOpen: true });
  }

  showMenu() {
    if (this.state.inputOpen) {
      return <ListMenu />;
    }
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
          {this.state.menuDisplay && <ListMenu toggleMenu={this.toggleMenu} />}
        </div>
        <div className="card-container">
          <ul className="cards">{this.renderCardList()}</ul>
        </div>
        <form
          onSubmit={this.confirmAddCard}
          ref={this.setWrapperRef}
          className="list__add-cards-full"
          style={{
            display: this.state.outComponentSelected ? "none" : "block"
          }}
        >
          <div className="form-container">
            <textarea
              value={this.state.cardName}
              onChange={this.addCardTitle}
              onKeyPress={this.handleKeyPress}
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

export default List;
