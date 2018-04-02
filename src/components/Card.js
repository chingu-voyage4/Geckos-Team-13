/* eslint-disable indent */
import React, { Component } from "react";
import Labels from "./Labels.js";
import Label from "./Label.js";

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = { cardAction: "closed", labels: [{ color: "#61BD4F", labelText: "Test" }]};
        this.toggleCardAction = this.toggleCardAction.bind(this);
        this.addCardLabel = this.addCardLabel.bind(this);
    }

    addCardLabel(e) {
        e.preventDefault();
        this.setState({
            labels: [...this.state.labels, { color: "blue", labelText: "Cats are great" }]});
    }

    toggleCardAction(e) {
        e.preventDefault();
        this.setState({cardAction: e.target.className});
    }

    render() {
        const cardLabels = this.state.labels.map((label) => (
            <Label key={label.color} color={label.color} labelText={label.labelText} width="40px" height="20px" className="card-label" />
        ));
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
                            <div className="label-list">
                            Labels
                            {cardLabels}
                            <button id="add-label" className="labelAction" onClick={this.toggleCardAction}>+</button>
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
                                <textarea placeholder="Write a comment..." />
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
                                <button className="labelAction" onClick={this.toggleCardAction}>
                                    <i className="fas fa-tag" />Labels
                                </button>
                                {this.state.cardAction === "labelAction" && <Labels toggleCardAction={this.toggleCardAction}/>}
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

export default Card;
