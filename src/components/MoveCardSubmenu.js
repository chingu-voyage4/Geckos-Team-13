import React, { Component } from "react";
import "../styles/listmenucard.css";
import { connect } from "react-redux";
import * as actions from "../actions";
import range from "lodash/range";

class MoveCardSubmenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: this.props.position,
            selectOpen: false,
            oldpos: null,
            selectedList: this.props.listId,
            previousList: null,
            positions: null
        };

        this.renderPositions = this.renderPositions.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.positionChange = this.positionChange.bind(this);
        this.handleListChange = this.handleListChange.bind(this);
        this.submitActions = this.submitActions.bind(this);
    }

    handleChange(event) {
        const pos = parseInt(event.target.value);
        const oldpos = this.state.position;
        this.setState({ position: pos, oldpos });
    }

    handleListChange(event) {
        const current = event.target.value;
        const previous = this.state.selectedList;
        const lengthSelectedList = this.props.lists[event.target.value].cards.length;
        if (event.target.value !== this.props.listId) {
            this.setState({ positions: lengthSelectedList, position: lengthSelectedList });
        } else if (event.target.value === this.props.listId) {
            this.setState({ position: this.props.position });
        }
        this.setState({ selectedList: current, previousList: previous });
    }

    listChange() {
        if (this.state.previousList) {
            const lengthSelectedList = this.props.lists[this.state.selectedList].cards.length;
            this.setState({ positions: lengthSelectedList, position: lengthSelectedList });

            const { cardId, listId } = this.props;
            const { selectedList, previousList, position } = this.state;

            this.props.moveCardToNewList(cardId, listId, selectedList, previousList, position);

            this.props.close();
        }
    }

    positionChange() {
        if (this.state.oldpos >= 0) {
            const { cardId, listId } = this.props;
            const { position, oldpos } = this.state;

            this.props.moveCard(oldpos, cardId, listId, position);
        }
        console.log("called should appear below this!");
        this.props.close();
    }

    submitActions() {
        if (this.props.cards[this.props.cardId].archived === true) {
            this.props.updateArchived(
                this.props.cardId,
                this.state.selectedList,
                this.state.position,
                this.state.oldpos
            );
            this.props.close();
            return;
        }
        if (this.props.listId !== this.state.selectedList) {
            this.listChange();
        } else if (this.props.listId === this.state.selectedList) {
            this.positionChange();
        }
    }

    renderPositions() {
        const cardArr = this.props.lists[this.state.selectedList].cards;
        if (this.state.selectedList !== this.props.listId) {
            return range(this.state.positions + 1).map(i => {
                return (
                    <option key={i} value={i}>
                        {i}
                    </option>
                );
            });
        } else {
            return cardArr.map((id, index) => {
                return (
                    <option key={id} value={index}>
                        {index}
                    </option>
                );
            });
        }
    }

    renderListOptions() {
        return this.props.listArray.map(id => {
            return (
                <option key={id} value={id}>
                    {this.props.lists[id].title}
                </option>
            );
        });
    }

    render() {
        const selection = this.props.lists[this.state.selectedList].title;
        return (
            <div
                className="list-menu-buttons list-menu-buttons-card"
                style={this.props.style}
                ref={this.props.setSubRef}
            >
                <button className="moveBtn">
                    <span className="btnLabel">Board</span>
                    Board Name
                </button>
                <div className="bottom-row-container ">
                    <button className="moveBtn left bottom">
                        <span className="btnLabel">List</span>
                        {selection}
                        <select
                            className="position-select"
                            onChange={this.handleListChange}
                            value={this.state.selectedList}
                        >
                            {this.renderListOptions()}
                        </select>
                    </button>
                    <button className="moveBtn right bottom">
                        <span className="btnLabel">
                            Position{" "}
                            <select
                                className="position-select"
                                value={this.state.position}
                                onChange={this.handleChange}
                            >
                                {this.renderPositions()}
                            </select>
                        </span>
                        {this.state.position}
                    </button>
                </div>
                <button onClick={this.submitActions} id="confirm-button">
                    Move
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards,
        lists: state.lists,
        listArray: state.listArray,
        archivedCards: state.archivedCards
    };
}

export default connect(mapStateToProps, actions)(MoveCardSubmenu);
