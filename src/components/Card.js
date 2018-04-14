import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import moment from "moment";
import MoveCardSubmenu from "./MoveCardSubmenu";

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: {},
            commentText: "",
            showMoveCardTop: false,
            showMoveCardBottom: false,
            showArchiveBanner: this.props.cards[this.props.cardId].archived,
            cardDescription: this.props.cards[this.props.cardId].description,
            descriptionVisible: false,
            inputOpen: false,
            cardTitle: this.props.cards[this.props.cardId].title,
            listId: this.props.cards[this.props.cardId].listId
        };

        this.addComment = this.addComment.bind(this);
        this.typeComment = this.typeComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.openMoveSubFromTop = this.openMoveSubFromTop.bind(this);
        this.openMoveSubFromBottom = this.openMoveSubFromBottom.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.sendToBoard = this.sendToBoard.bind(this);
        this.archiveCard = this.archiveCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.openDescription = this.openDescription.bind(this);
        this.confirmCardDescription = this.confirmCardDescription.bind(this);
        this.changeCardDecription = this.changeCardDecription.bind(this);
        this.expandDescription = this.expandDescription.bind(this);
        this.saveDescription = this.saveDescription.bind(this);
        this.cancelExpansion = this.cancelExpansion.bind(this);
        this.enterTitle = this.enterTitle.bind(this);
        this.changeCardTitle = this.changeCardTitle.bind(this);
        this.divClicked = this.divClicked.bind(this);
        this.renderTitle = this.renderTitle.bind(this);
        this.setInputRef = this.setInputRef.bind(this);
        this.handleClickOutsideInput = this.handleClickOutsideInput.bind(this);
        this.closeMoveSub = this.closeMoveSub.bind(this);
        this.setSubRef = this.setSubRef.bind(this);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("mousedown", this.handleClickOutsideInput);
        if (this.props.archived === true) {
            this.setState({ showArchiveBanner: true });
        }
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("mousedown", this.handleClickOutsideInput);
    }

    setSubRef(node) {
        this.subref = node;
    }

    handleClickOutside(event) {
        if (this.subref && !this.subref.contains(event.target)) {
            this.setState({ showMoveCardTop: false, showMoveCardBottom: false });
        }
    }

    handleClickOutsideInput(event) {
        if (this.inputRef && !this.inputRef.contains(event.target)) {
            this.setState({ inputOpen: false });
        }
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

    archiveCard() {
        this.setState({ showArchiveBanner: true });
        const archivedCard = {
            cardId: this.props.cardId,
            position: this.props.position,
            archived: true,
            listId: this.props.cards[this.props.cardId].listId
            // listId: this.props.listId
        };

        this.props.archiveCard(archivedCard);
    }

    confirmCardDescription(event) {
        event.preventDefault();
        this.props.editCardDescription(this.state.cardDescription, this.props.cardId);
    }

    changeCardDecription(event) {
        event.preventDefault();
        this.setState({ cardDescription: event.target.value });
    }

    expandDescription() {
        this.setState({ descriptionVisible: true });
    }

    cancelExpansion() {
        this.setState({ descriptionVisible: false });
    }

    saveDescription(event) {
        this.confirmCardDescription(event);
        this.setState({ descriptionVisible: false });
    }

    sendToBoard() {
        this.setState({ showArchiveBanner: false });
        const archivedCardArr = this.props.archivedCardArr;
        const card = archivedCardArr.filter(item => item.cardId === this.props.cardId);
        const pos = card[0].position;
        const listId = card[0].listId;
        const archived = false;

        this.props.restoreCard(this.props.cardId, pos, listId, archived);
    }

    deleteCard() {
        console.log("fill this in ");
    }

    enterTitle(event) {
        if (event.key === "Enter") {
            this.setState({ inputOpen: false });
        }
    }

    changeCardTitle(event) {
        event.preventDefault();
        this.setState({ cardTitle: event.target.value });
        this.props.editCardTitle(event.target.value, this.props.cardId);
    }

    divClicked() {
        this.setState({ inputOpen: true });
    }

    setInputRef(node) {
        this.inputRef = node;
    }

    renderTitle() {
        if (this.state.inputOpen) {
            return (
                <input
                    onKeyPress={this.enterTitle}
                    ref={this.setInputRef}
                    className="list-title__edit--input"
                    onChange={this.changeCardTitle}
                    value={this.state.cardTitle}
                    type="text"
                    style={{ width: 600 }}
                />
            );
        } else {
            return (
                <div
                    onClick={this.divClicked}
                    className="list-title__edit"
                    style={{ fontSize: 18 }}
                >
                    {this.state.cardTitle}
                </div>
            );
        }
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
                            onClick={() => {
                                if (
                                    window.confirm("Are you sure you want to delete this comment?")
                                ) {
                                    this.deleteComment(id);
                                }
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            );
        });
    }

    openMoveSubFromTop() {
        this.setState({ showMoveCardTop: true, showMoveCardBottom: false });
    }

    openMoveSubFromBottom() {
        this.setState({ showMoveCardTop: false, showMoveCardBottom: true });
    }

    closeMoveSub() {
        this.setState({ showMoveCardTop: false, showMoveCardBottom: false });
    }

    openDescription() {
        if (this.state.descriptionVisible) {
            return (
                <form
                    className="CommentBox"
                    ref={this.setWrapperRef}
                    onSubmit={this.confirmCardDescription}
                >
                    <textarea
                        value={this.state.cardDescription}
                        onChange={this.changeCardDecription}
                        onKeyPress={this.handleKeyPress}
                    />
                    <div className="card-btn-container">
                        <button type="submit" onClick={this.saveDescription} className="btn--add">
                            Save
                        </button>
                        <button className="btn--cancel" style={{ backgroundColor: "transparent" }}>
                            <img
                                src="images/close-round.png"
                                className="cancel"
                                onClick={this.cancelExpansion}
                                alt=""
                            />
                        </button>
                    </div>
                </form>
            );
        } else {
            if (this.state.cardDescription) {
                return (
                    <div className="card-edit__description">
                        <div className="card-edit__text">
                            {this.props.cards[this.props.cardId].description}
                        </div>
                        <div className="u-gutter" onClick={this.expandDescription}>
                            <i className="fas fa-align-left" />
                            <a className="card__edit-description--btn">Edit Description</a>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="card-edit__description">
                        <div className="u-gutter" onClick={this.expandDescription}>
                            <i className="fas fa-align-left" />
                            <a className="card__edit-description--btn">Edit Description</a>
                        </div>
                    </div>
                );
            }
        }
    }

    render() {
        const card = this.props.cards[this.props.cardId];
        const theListId = this.props.cards[this.props.cardId].listId;

        let showMenuTop = null;
        const moveCardOpenedTop = this.state.showMoveCardTop;
        const moveCardOpenedBottom = this.state.showMoveCardBottom;

        const archivedCardObj = this.props.archivedCardArr.filter(
            item => item.cardId === this.props.cardId
        );

        console.log(this.props.archivedCardArr, "A");
        console.log(this.props.cards, "B=c");
        console.log(this.props.listId, "c=B");

        let listTitle = null;
        if (this.props.cards[this.props.cardId].archived === true) {
            listTitle = this.props.lists[archivedCardObj[0].listId].title;
            console.log(listTitle, "this was filterd from the array.");
        } else {
            listTitle = this.props.lists[card.listId].title;
        }

        if (moveCardOpenedTop) {
            showMenuTop = (
                <MoveCardSubmenu
                    setSubRef={this.setSubRef}
                    cardId={this.props.cardId}
                    listId={theListId}
                    position={this.props.position}
                    close={this.closeMoveSub}
                />
            );
        }
        let showMenuBottom = null;
        if (moveCardOpenedBottom) {
            showMenuBottom = (
                <MoveCardSubmenu
                    setSubRef={this.setSubRef}
                    cardId={this.props.cardId}
                    listId={theListId}
                    position={this.props.position}
                    close={this.closeMoveSub}
                />
            );
        }

        return (
            <div className="outer-container">
                <div className="BackgroundBox">
                    <div className="OuterCardBox" ref={this.props.setWrapperRef}>
                        <div
                            className="archived-border"
                            style={{ display: this.state.showArchiveBanner ? "flex" : "none" }}
                        >
                            {" "}
                            <i
                                className="fas fa-archive archived-header-icon"
                                style={{
                                    fontSize: 15,
                                    marginRight: 15
                                }}
                            />{" "}
                            <span style={{ color: "black" }}>This card is archived</span>
                        </div>
                        <div className="TitleOuter">
                            <img src="images/marshmallow-toasted.png" />
                            <div className="TitleBox">
                                <span className="CardTitle" style={{ fontSize: 18 }}>
                                    {this.renderTitle()}
                                </span>
                            </div>
                            <div className="CardList">
                                <p>
                                    in list
                                    <span> </span>
                                    <button
                                        onClick={this.openMoveSubFromTop}
                                        className="card-list__move-list-link"
                                    >
                                        {listTitle}
                                    </button>
                                </p>
                                {showMenuTop}
                            </div>
                        </div>
                        <div className="MainContent">
                            <div className="MainInfo">
                                <div className="CardMemberList">
                                    <p> Members</p>
                                    <div>
                                        <i className="fas fa-user-circle" />
                                        <i className="fas fa-plus-square" />
                                    </div>
                                </div>

                                <div className="CardDescription">{this.openDescription()}</div>

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
                                <button onClick={this.openMoveSubFromBottom}>
                                    <i className="fas fa-arrow-right" />Move
                                </button>
                                {showMenuBottom}
                                <button disabled>
                                    <i className="fas fa-copy" />Copy
                                </button>
                                <button disabled>
                                    <i className="fas fa-eye" />Subscribe
                                </button>
                                <button
                                    style={{
                                        display: this.state.showArchiveBanner ? "none" : "flex"
                                    }}
                                    onClick={this.archiveCard}
                                >
                                    <i className="fas fa-archive" />Archive
                                </button>
                                <button
                                    style={{
                                        display: this.state.showArchiveBanner ? "flex" : "none"
                                    }}
                                    onClick={this.sendToBoard}
                                >
                                    <i className="fas fa-undo-alt" />Send to Board
                                </button>
                                <button
                                    style={{
                                        backgroundColor: "red",
                                        display: this.state.showArchiveBanner ? "flex" : "none"
                                    }}
                                    className="danger-button"
                                    onClick={this.deleteCard}
                                >
                                    <i
                                        className="fas fa-minus"
                                        style={{
                                            marginTop: 5,
                                            color: "white"
                                        }}
                                    />
                                    Delete
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
        lists: state.lists,
        archivedCardArr: state.archivedCards
    };
}

export default connect(mapStateToProps, actions)(Card);
