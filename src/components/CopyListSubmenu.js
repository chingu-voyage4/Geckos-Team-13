import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CopyListSubmenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listTitle: this.props.lists[this.props.listId].title
        };

        this.changeCardTitle = this.changeCardTitle.bind(this);
        this.submitTitleChange = this.submitTitleChange.bind(this);
    }

    changeCardTitle(event) {
        event.preventDefault();
        this.setState({ listTitle: event.target.value });
    }

    submitTitleChange() {
        if (this.state.listTitle) {
            const newPosition = this.props.listArr.indexOf(this.props.listId) + 1;
            const position = this.props.listArr.length;
            const uniq = Date.now();
            const listId = `list${uniq}`;
            const title = this.state.listTitle;
            const cards = this.props.lists[this.props.listId].cards;
            this.props.addList(listId, title, cards, position);
            this.props.moveList(listId, newPosition, position);
            this.props.closeCopyListSub();
        }
    }

    render() {
        return (
            <div className="text-button-container">
                <textarea
                    className="quick-edit__text-box"
                    value={this.state.listTitle}
                    onChange={this.changeCardTitle}
                />
                <button className="btn--add" onClick={this.submitTitleChange}>
                    Create List
                </button>
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

export default connect(mapStateToProps, actions)(CopyListSubmenu);
