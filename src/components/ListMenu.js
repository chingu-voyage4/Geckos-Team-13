import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/style.css";
import * as actions from "../actions";
import SortBySubmenu from "./SortBySubmenu.js";
import ArchiveAllSubmenu from "./ArchiveAllSubmenu.js";
import MoveListSubmenu from "./MoveListSubmenu.js";
import MoveAllCardsSubmenu from "./MoveAllCardsSubmenu";
import CopyListSubmenu from "./CopyListSubmenu";

class ListMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            follow: false,
            menu: "main",
            listTitle: "List Actions"
        };
        this.showMainMenu = this.showMainMenu.bind(this);
        this.showSubmenu = this.showSubmenu.bind(this);
        this.toggleFollow = this.toggleFollow.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.archiveList = this.archiveList.bind(this);
        this.archiveAllCards = this.archiveAllCards.bind(this);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.toggleMenu();
        }
    }

    showMainMenu(e) {
        e.preventDefault();
        this.setState({ menu: "main", listTitle: "List Actions" });
    }

    showSubmenu(e) {
        e.preventDefault();
        if (e.target.className === "move-list") {
            this.setState({ menu: "moveListMenu" });
        } else if (e.target.className === "sort") {
            this.setState({ menu: "sortMenu", listTitle: "Sort List" });
        } else if (e.target.className === "archive-cards") {
            this.setState({ menu: "archiveAllMenu", listTitle: "Archive All Cards in this List?" });
        } else if (e.target.className === "move-all-cards") {
            this.setState({ menu: "moveAllCards", listTitle: "Move All Cards in List" });
        } else if (e.target.className === "copy-list") {
            this.setState({ menu: "copyList", listTitle: "Copy List" });
        }
    }

    toggleFollow(e) {
        e.preventDefault();
        if (this.state.follow === false) {
            this.setState({ follow: true });
        } else {
            this.setState({ follow: false });
        }
    }

    archiveList() {
        this.props.archiveList(this.props.listId, this.props.position);
    }

    archiveAllCards() {
        const cardArr = this.props.lists[this.props.listId].cards;
        const cardArrWithPositions = cardArr.map((item, index) => {
            return {
                cardId: item,
                position: index,
                archived: true,
                listId: this.props.listId
            };
        });
        this.props.archiveAllCardsInList(cardArrWithPositions, this.props.listId);
        this.props.toggleMenu();
    }

    render() {
        if (this.state.menu === "main") {
            return (
                <div className="list-menu" ref={this.setWrapperRef}>
                    <div className="list-menu-title">
                        <p>{this.state.listTitle}</p>
                        <span className="close" onClick={this.props.toggleMenu}>
                            <img src="../close-round.png" alt="close" />
                        </span>
                    </div>
                    <div className="list-menu-options">
                        <ul>
                            <li>Add Card...</li>
                            <li className="copy-list" onClick={this.showSubmenu}>
                                Copy List...
                            </li>
                            <li className="move-list" onClick={this.showSubmenu}>
                                Move List...
                            </li>
                            <li className="follow" onClick={this.toggleFollow}>
                                {this.state.follow ? "Unfollow" : "Follow"}
                            </li>
                            <li className="sort" onClick={this.showSubmenu}>
                                Sort By...
                            </li>
                            <li className="move-all-cards" onClick={this.showSubmenu}>
                                Move All Cards in This List...
                            </li>
                            <li className="archive-cards" onClick={this.showSubmenu}>
                                Archive All Cards in This List...
                            </li>
                            <li onClick={this.archiveList}>Archive This List</li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="list-menu">
                    <div className="list-menu-title">
                        <span className="back" onClick={this.showMainMenu}>
                            <i className="fas fa-arrow-left" />
                        </span>
                        <p>{this.state.listTitle}</p>
                        <span className="close" onClick={this.props.toggleMenu}>
                            <img src="../close-round.png" alt="close" />
                        </span>
                    </div>
                    {this.state.menu === "sortMenu" && <SortBySubmenu />}
                    {this.state.menu === "archiveAllMenu" && (
                        <ArchiveAllSubmenu archiveAll={this.archiveAllCards} />
                    )}
                    {this.state.menu === "moveListMenu" && (
                        <MoveListSubmenu
                            position={this.props.position}
                            listId={this.props.listId}
                            closeMoveSub={this.props.toggleMenu}
                        />
                    )}
                    {this.state.menu === "moveAllCards" && (
                        <MoveAllCardsSubmenu
                            position={this.props.position}
                            listId={this.props.listId}
                            closeMoveAllSub={this.props.toggleMenu}
                        />
                    )}
                    {this.state.menu === "copyList" && (
                        <CopyListSubmenu
                            position={this.props.position}
                            listId={this.props.listId}
                            closeCopyListSub={this.props.toggleMenu}
                        />
                    )}
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        archived: state.archive,
        lists: state.lists
    };
}

export default connect(mapStateToProps, actions)(ListMenu);
