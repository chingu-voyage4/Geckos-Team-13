import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class MoveListSubmenu extends Component {
    render() {
        const placeholderBoard = "Placeholder Board";
        return (
            <div className="list-menu-buttons">
                <button className="moveBtn">
                    <span className="btnLabel">Board</span>
                    {placeholderBoard}
                </button>
                <button className="moveBtn">
                    <span className="btnLabel">Position</span>3
                </button>
                <button className="confirm-button">Move</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { listArray: state.listArray };
}

export default connect(mapStateToProps, actions)(MoveListSubmenu);
