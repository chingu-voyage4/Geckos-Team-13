import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import moment from "moment";

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: {},
            commentText: ""
        };

        this.addComment = this.addComment.bind(this);
        this.typeComment = this.typeComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
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

    render() {
        return (
            <div className="BackgroundBox">
                <div className="OuterCardBox" ref={this.props.setWrapperRef}>
                    <div className="TitleOuter">
                        <div className="TitleBox">
                            <img src = "../marshmallow-toasted.png" />
                            <span className="CardTitle">Availability</span>
                        </div>
                        <div className="CardList">in list Team Member Information</div>
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
                                    </div>
                                </div>
                            </div>

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
                                </div>
                                <button
                                    className="btn__comment-save--light"
                                    onClick={this.addComment}
                                >
                                    Save
                                </button>
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
                            </div>
                        </div>
                    </div>
                </div>
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
