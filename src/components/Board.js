import React, { Component } from "react";
import List from "./List";
import { connect } from "react-redux";
import * as actions from "../actions";

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listName: "",
            expandForm: false
        };

        this.createList = this.createList.bind(this);
        this.renderLists = this.renderLists.bind(this);
        this.changeListTitle = this.changeListTitle.bind(this);
        this.cancelExpansion = this.cancelExpansion.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
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

    handleKeyPress(event) {
        if (event.key === "Enter") {
            this.createList(event);
        }
    }

    createList(event) {
        event.preventDefault();
        this.setState({ expandForm: false });

        if (this.state.listName) {
            const position = Object.keys(this.props.allLists).length;
            const uniq = Date.now();
            const listId = `list${uniq}`;
            const title = this.state.listName;
            const cards = [];
            this.props.addList(listId, title, cards, position);
            this.setState({ listName: "" });
        }
    }

    renderLists() {
        if (this.props.listArray) {
            return this.props.listArray.map((listId, index) => {
                const list = this.props.allLists[listId];
                return <List key={listId} listDetails={list} listId={listId} position={index} />;
            });
        }
    }

    render() {
        return (
            <div className="board__container">
                <div className="board__list-container">{this.renderLists()}</div>
                <div className="board__button-container">
                    <button
                        className="board__button-addList"
                        onClick={this.handleClick.bind(this)}
                        style={{
                            display: this.state.expandForm ? "none" : "block"
                        }}
                    >
                        {" "}
                        Add List...
                    </button>
                </div>
                <form
                    onSubmit={this.createList}
                    ref={this.setWrapperRef}
                    className="board__add-list-full"
                    style={{
                        display: this.state.expandForm ? "block" : "none"
                    }}
                >
                    <div className="form-container">
                        <textarea
                            className="form-card-description"
                            value={this.state.listName}
                            onChange={this.changeListTitle}
                            onKeyPress={this.handleKeyPress}
                        />
                        <div className="form-btn-container">
                            <button type="submit" className="btn--add">
                                Add
                            </button>
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

function mapStateToProps(state) {
    return {
        allLists: state.lists,
        listArray: state.listArray
    };
}
export default connect(mapStateToProps, actions)(Board);
