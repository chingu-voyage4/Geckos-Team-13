import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class MoveAllCardsSubmenu extends Component {
    constructor(props) {
        super(props);

        this.renderLists = this.renderLists.bind(this);
        this.test = this.test.bind(this);
    }

    test(list) {
        this.props.moveAllCards(this.props.listId, list);
        this.props.closeMoveAllSub();
    }

    renderLists() {
        const lists = this.props.lists;
        console.log(lists);
        return this.props.listArr.map(list => {
            return (
                <li
                    onClick={() => {
                        this.test(list);
                    }}
                    key={list}
                >
                    {lists[list].title}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>{this.renderLists()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        lists: state.lists,
        listArr: state.listArray
    };
}

export default connect(mapStateToProps, actions)(MoveAllCardsSubmenu);
