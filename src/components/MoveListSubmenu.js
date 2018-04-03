import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class MoveListSubmenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectOpen: false,
            position: this.props.position,
            oldpos: null
        };

        this.positionChange = this.positionChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const pos = parseInt(event.target.value);
        const oldpos = this.state.position;
        this.setState({ position: pos, oldpos });
    }

    positionChange() {
        if (this.state.oldpos >= 0) {
            const newPosition = this.state.position;
            const oldpos = this.state.oldpos;

            this.props.moveList(this.props.listId, newPosition, oldpos);
            this.props.closeMoveSub();
        }
        this.props.closeMoveSub();
    }

    renderPositions() {
        const listArr = this.props.listArray;
        return listArr.map((id, index) => {
            return (
                <option key={id} value={index}>
                    {index}
                </option>
            );
        });
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
                    <span className="btnLabel">
                        Position{" "}
                        <select
                            className="position-select__full"
                            onChange={this.handleChange}
                            value={this.state.position}
                        >
                            {this.renderPositions()}
                        </select>
                    </span>
                    {this.state.position}
                </button>

                <button className="confirm-button" onClick={this.positionChange}>
                    Move
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { listArray: state.listArray };
}

export default connect(mapStateToProps, actions)(MoveListSubmenu);
