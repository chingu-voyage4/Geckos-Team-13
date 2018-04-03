import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class MoveListSubmenu extends Component {
    //needs listId & position to be passed down from list.
    constructor(props) {
        super(props);

        this.state = {
            selectOpen: false,
            position: this.props.position,
            oldpos: null
        };

        this.positionChange = this.positionChange.bind(this);
    }

    positionChange() {
        if (this.state.oldpos >= 0) {
            const newPosition = this.state.position;
            const oldpos = this.state.oldpos;

            this.props.moveList(this.props.listId, newPosition, oldpos);
            //close everything
        }
        //close everything
    }

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
