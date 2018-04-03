import React, { Component } from "react";
import "../styles/listmenucard.css";
import { connect } from "react-redux";
import * as actions from "../actions";

class MoveCardSubmenu extends Component {
    render() {
        const card = this.props.cards[this.props.cardId];
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
                        <span className="btnLabel">Position</span>3
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
