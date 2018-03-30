import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: {},
            commentText: ""
        };

        this.addComment = this.addComment.bind(this);
        this.typeComment = this.typeComment.bind(this);
    }

    addComment(event) {
        event.preventDefault();
        this.props.addComment(this.state.comment, this.props.cardId);
        this.setState({
            commentText: ""
        });
    }

    typeComment(event) {
        const time = moment().format("MMMM Do YYYY, h:mm:ss a");
        const text = event.target.value;
        const commentId = `comment${Date.now()}`;
        this.setState({ comment: { time, text, commentId }, commentText: text });
    }

    render() {
        return (
            <div className="BackgroundBox">
                <div className="OuterCardBox" ref={this.props.setWrapperRef}>
                    <div className="TitleOuter">
                        <div className="TitleBox">
                            <i className="fab fa-trello" />
                            <div className="CardTitle">Availability</div>
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
                                </div>
                            </div>

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
                                <button>Save</button>
                            </div>
                            <div className="ActivityBox">
                                <div className="ActivityLabel">
                                    <i className="far fa-list-alt" />
                                    <h3>Activity</h3>
                                    <a href="">Show Details</a>
                                </div>
                                <div className="Activities">
                                    <i className="fas fa-user-circle" />
                                    <div className="UserActivity">
                                        <p className="UserName">Faraz Ahmad</p>
                                        <div className="CardUserComment">First comment wooooh!</div>
                                        <div className="CardUserCommentDate">Feb 12 at 7:56 PM</div>
                                        <a href="">Edit</a>
                                        <a href="">Reply</a>
                                        <a href="">Delete</a>
                                    </div>
                                </div>
                            </div>
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
