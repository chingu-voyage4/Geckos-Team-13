import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import moment from "moment";
import MoveCardSubmenu from "./MoveCardSubmenu";

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            top: "",
            left: "",
            width: "",
            comment: {},
            commentText: "",
            showMoveCard: false
        };

        this.addComment = this.addComment.bind(this);
        this.typeComment = this.typeComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.openMoveSub = this.openMoveSub.bind(this);
        this.recalculateOffset = this.recalculateOffset.bind(this);
        this.setButtonRef = this.setButtonRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        this.recalculateOffset();
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    setButtonRef(node) {
        this.buttonRef = node;
    }

    handleClickOutside(event) {
        this.subref = this.props.menuNode;
        if (this.subref && !this.subref.contains(event.target)) {
            this.setState({ showMoveCard: false });
        }
    }

    recalculateOffset() {
        var rect = ReactDOM.findDOMNode(this.buttonRef).getBoundingClientRect();
        this.setState({
            top: rect.top,
            left: rect.left,
            width: rect.width
        });
    }

    addComment(event) {
        event.preventDefault();
        if (this.state.commentText) {
            this.props.addComment(this.state.comment, this.props.cardId);
            this.setState({
                commentText: ""
            });
        }
    }

    typeComment(event) {
        const time = moment().format("MMMM Do YYYY, h:mm:ss a");
        const text = event.target.value;
        const commentId = `comment${Date.now()}`;
        this.setState({ comment: { time, text, commentId }, commentText: text });
    }

    deleteComment(commentId) {
        this.props.deleteComment(commentId, this.props.cardId);
    }

    renderCommments() {
        const commentArray = this.props.cards[this.props.cardId].comments;
        return commentArray.map(comment => {
            const id = comment.commentId;
            return (
                <li key={id} className="UserActivity">
                    <div className="card-edit__user">
                        <i className="fas fa-user-circle" />
                        <p className="card-edit__user-name">User Name</p>
                    </div>
                    <div className="card-edit__comment-text">{comment.text}</div>
                    <div className="card-edit__date-options-container">
                        <div className="card-edit__comment-date">{comment.time}</div>
                        <a>Edit</a>
                        <button
                            className="card-edit__delete-comment-btn"
                            onClick={() => this.deleteComment(id)}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            );
        });
    }

    openMoveSub() {
        this.recalculateOffset();
        this.setState({ showMoveCard: true });
    }

    closeMoveSub() {
        this.setState({ showMoveCard: false });
    }

    render() {
        const card = this.props.cards[this.props.cardId];
        const list = this.props.lists[this.props.listId];

        const style = { top: this.state.top + 30, left: this.state.left };

        let showMoveCard = null;
        const moveCardOpened = this.state.showMoveCard;
        if (moveCardOpened) {
            showMoveCard = (
                <MoveCardSubmenu
                    style={style}
                    cardId={this.props.cardId}
                    listId={this.props.listId}
                    setSubRef={this.props.setSubRef}
                />
            );
        }

        return (
<<<<<<< HEAD
            <div className="BackgroundBox">
                <div className="OuterCardBox" ref={this.props.setWrapperRef}>
                    <div className="TitleOuter">
                        <div className="TitleBox">
                            <img src = "../marshmallow-toasted.png" />
                            <span className="CardTitle">Availability</span>
=======
            <div className="outer-container">
                <div className="BackgroundBox">
                    <div className="OuterCardBox" ref={this.props.setWrapperRef}>
                        <div className="TitleOuter">
                            <div className="TitleBox">
                                <i className="fab fa-trello" />
                                <div className="CardTitle">{card.title}</div>
                            </div>
                            <div className="CardList">
                                <p>
                                    in list
                                    <span> </span>
                                    <button
                                        ref={this.setButtonRef}
                                        onClick={this.openMoveSub}
                                        className="card-list__move-list-link"
                                    >
                                        {list.title}
                                    </button>
                                </p>
                            </div>
>>>>>>> develop
                        </div>
                        <div className="MainContent">
                            <div className="MainInfo">
                                <div className="CardMemberList">
                                    Members
                                    <div>
                                        <i className="fas fa-user-circle" />
                                        <i className="fas fa-plus-square" />
                                    </div>
                                </div>
<<<<<<< HEAD
                            </div>
                            <div className="CardDescription">
                                <i className="fas fa-align-right"></i>
                                <h3>Description</h3>
                                <div className="Editable">
                                    <textarea>
                                        Please note your availability in the comments below.
                                    </textarea>
                                    <div className="DescriptionButtons">
                                        <button>Save</button>
                                        <button>X</button>
=======
                                <div className="CardDescription">
                                    <p>Description</p>
                                    <a href="">Edit</a>
                                    <div className="Editable">
                                        <textarea>
                                            Please note your availability in the comments below.
                                        </textarea>
                                        <div className="DescriptionButtons">
                                            <button>Save</button>
                                            <button>X</button>
                                            <div className="FormattingHelp">
                                                <a href="">Formatting Help</a>
                                            </div>
                                        </div>
>>>>>>> develop
                                    </div>
                                </div>

<<<<<<< HEAD
                            <div className="CommentBox">
                                <div className="AddComment">
                                    <i className="far fa-comment" />
                                    <h3>Add Comment</h3>
                                </div>
                                <textarea
                                    value={this.state.commentText}
                                    onChange={this.typeComment}
                                    placeholder="Write a comment..."
                                />
                                <div className="CommentButtons">
                                    <a href="">
                                        <i className="fas fa-paperclip" />
                                    </a>
                                    <a href="">
                                        <i className="fas fa-at" />
                                    </a>
                                    <a href="">
                                        <i className="fas fa-smile" />
                                    </a>
=======
                                <div className="CommentBox">
                                    <div className="AddLabel">
                                        <i className="far fa-comment" />
                                        <h3>Add Comment</h3>
                                    </div>
                                    <textarea
                                        value={this.state.commentText}
                                        onChange={this.typeComment}
                                        placeholder="Write a comment..."
                                    />
                                    <button
                                        className="btn__comment-save--light"
                                        onClick={this.addComment}
                                    >
                                        Save
                                    </button>
                                    <div className="CommentButtons">
                                        <a href="">
                                            <i className="fas fa-paperclip" />
                                        </a>
                                        <a href="">
                                            <i className="fas fa-at" />
                                        </a>
                                        <a href="">
                                            <i className="fas fa-smile" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-trello" />
                                        </a>
                                    </div>
                                </div>
                                <div className="ActivityBox">
                                    <div className="ActivityLabel">
                                        <i className="far fa-list-alt" />
                                        <h3>Activity</h3>
                                        <a href="">Show Details</a>
                                    </div>
                                    <div className="comment-container">
                                        <div className="Activities">
                                            <ul className="card-edit__comment-list">
                                                {this.renderCommments()}
                                            </ul>
                                        </div>
                                    </div>
>>>>>>> develop
                                </div>
                                <button
                                    className="btn__comment-save--light"
                                    onClick={this.addComment}
                                >
                                    Save
                                </button>
                            </div>
                            <div className="InnerButtonBox">
                                <div className="AddBox">
                                    <button>
                                        <i className="fas fa-user" />Members
                                    </button>
                                    <button>
                                        <i className="fas fa-tag" />Labels
                                    </button>
                                    <button>
                                        <i className="fas fa-check-square" />Checklist
                                    </button>
                                    <button>
                                        <i className="fas fa-clock" />Due Date
                                    </button>
                                    <button>
                                        <i className="fas fa-paperclip" />Attachment
                                    </button>
                                </div>
                                <div className="ActionBox">
                                    <button>
                                        <i className="fas fa-arrow-right" />Move
                                    </button>
                                    <button>
                                        <i className="fas fa-copy" />Copy
                                    </button>
                                    <button>
                                        <i className="fas fa-eye" />Subscribe
                                    </button>
                                    <button>
                                        <i className="fas fa-archive" />Archive
                                    </button>
                                </div>
                                <div className="ShareandMore">
                                    <a href="">Share and more...</a>
                                </div>
<<<<<<< HEAD
                            </div>
                        </div>

                        <div className="InnerButtonBox">
                            <div className="AddBox">
                                <button disabled>
                                    <i className="fas fa-user" />Members
                                </button>
                                <button>
                                    <i className="fas fa-tag" />Labels
                                </button>
                                <button disabled>
                                    <i className="fas fa-check-square" />Checklist
                                </button>
                                <button disabled>
                                    <i className="fas fa-clock" />Due Date
                                </button>
                                <button disabled>
                                    <i className="fas fa-paperclip" />Attachment
                                </button>
                            </div>
                            <div className="ActionBox">
                                <button disabled>
                                    <i className="fas fa-arrow-right" />Move
                                </button>
                                <button disabled>
                                    <i className="fas fa-copy" />Copy
                                </button>
                                <button disabled>
                                    <i className="fas fa-eye" />Subscribe
                                </button>
                                <button disabled>
                                    <i className="fas fa-archive" />Archive
                                </button>
                            </div>
                            <div className="ShareandMore">
                                <a href="">Share and more...</a>
=======
>>>>>>> develop
                            </div>
                        </div>
                    </div>
                </div>
                {showMoveCard}
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

export default connect(mapStateToProps, actions)(Card);
