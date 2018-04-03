import React, { Component } from "react";
import "../styles/listmenucard.css";
import { connect } from "react-redux";
import * as actions from "../actions";

class MoveCardSubmenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: this.props.position,
            selectOpen: false,
            oldpos: null
        };

        this.renderPositions = this.renderPositions.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const pos = parseInt(event.target.value);
        const oldpos = this.state.position;
        this.setState({ position: pos, oldpos });
    }

    renderPositions() {
        const cardArr = this.props.lists[this.props.listId].cards;

        return cardArr.map((id, index) => {
            return (
                <option key={id} value={index}>
                    {index}
                </option>
            );
        });
    }

    render() {
        //const card = this.props.cards[this.props.cardId];
        const list = this.props.lists[this.props.listId];
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
                        {list.title}
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
                    </button>
                </div>
                <button className="confirm-button">Move</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards,
        lists: state.lists
    };
}

export default connect(mapStateToProps, actions)(MoveCardSubmenu);
