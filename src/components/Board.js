import React, { Component } from "react";
import List from "./List";

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listName: "",
            expandForm: false
        };

        // this.createList = this.createList.bind(this)
        this.changeListTitle = this.changeListTitle.bind(this);
        this.cancelExpansion = this.cancelExpansion.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
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

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ expandForm: false });
        }
    }

    changeListTitle(event) {
        this.setState({ listName: event.target.value });
    }

    cancelExpansion() {
        this.setState({
            listName: "",
            expandForm: false
        });
    }

    handleClick() {
        this.setState({ expandForm: true });
    }

    render() {
        return (
            <div className="board__container">
                <div className="board__list-container">
                    <List />
                </div>
                <div className="board__button-container" >
                    <button className="board__button-addList"
                        onClick={this.handleClick.bind(this)}
                        style={{ display: this.state.expandForm ? "none" : "block" }}
                    > Add List...</button>
                </div>
                <form
                    ref={this.setWrapperRef}
                    className="board__add-list-full"
                    style={{ display: this.state.expandForm ? "block" : "none" }}
                >
                    <div className="form-container">
                        <textarea className="form-card-description"
                            value={this.state.listName}
                            onChange={this.changeListTitle}
                            onKeyPress={this.handleKeyPress}
                        />
                        <div className="form-btn-container">
                            <button type="submit" className="btn--add">Add</button>
                            <button className="btn--cancel">
                                <img src="../close-round.png" className="cancel" alt="" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
