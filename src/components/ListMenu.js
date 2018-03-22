import React, { Component } from "react";
import "../styles/style.css";

class ListMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            follow: false,
            menu: "main"
        };
        this.showMainMenu = this.showMainMenu.bind(this);
        this.showSubmenu = this.showSubmenu.bind(this);
        this.toggleFollow = this.toggleFollow.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.renderMenu = this.renderMenu.bind(this);
    }

    showMainMenu(e) {
        e.preventDefault();
        this.setState({menu: "main"});
    }

    showSubmenu(e) {
        e.preventDefault();
        if (e.target.className === "move-list") {
            this.setState({menu: "moveListMenu"});
        } else if (e.target.className === "sort") {
            this.setState({menu: "sortMenu"});
        } else if (e.target.className === "archive-cards") {
            this.setState({menu: "archiveAllMenu"});
        }
    }

    toggleFollow(e) {
        e.preventDefault();
        if (this.state.follow === false) {
            this.setState({follow: true});
        } else {
            this.setState({follow: false});
        }
    }

    closeMenu(e) {
        e.preventDefault();
        this.setState({menu: "none"});
    }

    renderMenu() {
        if (this.state.menu === "main") {
            return (
                <div className="list-menu">
                    <div className="list-menu-title"><p>List Actions</p>
                        <span className="close" onClick={this.closeMenu}>
                            <img src="../close-round.png" alt="close" /></span>
                    </div>
                    <div className="list-menu-options">
                        <ul>
                            <li>Add Card...</li>
                            <li>Copy List...</li>
                            <li className="move-list" onClick={this.showSubmenu}>Move List...</li>
                            <li className="follow" onClick={this.toggleFollow}>
                                {this.state.follow ? "Unfollow" : "Follow"}</li>
                            <li className="sort" onClick={this.showSubmenu}>Sort By...</li>
                            <li>Move All Cards in This List...</li>
                            <li className="archive-cards" onClick={this.showSubmenu}>
                                Archive All Cards in This List...</li>
                            <li>Archive This List</li>
                        </ul>
                    </div>
                </div>
            );
        } else if (this.state.menu === "sortMenu") {
            // "Sort By" List submenu
            return (
                <div className="list-menu">
                    <div className="list-menu-title"><span className="back" onClick={this.showMainMenu}>
                        <i className="fas fa-arrow-left"></i></span><p>Sort List</p>
                        <span className="close" onClick={this.closeMenu}>
                            <img src="../close-round.png" alt="close" /></span>
                    </div>
                    <div className="list-menu-options"><ul>
                        <li>Date Created (Newest First)</li>
                        <li>Date Created (Oldest First)</li>
                    </ul></div>
                </div>
            );
        } else if (this.state.menu === "archiveAllMenu") {
            // Archive all Cards List Submenu
            return (
                <div className="list-menu">
                    <div className="list-menu-title">
                        <span className="back" onClick={this.showMainMenu}>
                            <i className="fas fa-arrow-left"></i></span>
                        <p>Archive All Cards in this List?</p>
                        <span className="close" onClick={this.closeMenu}>
                            <img src="../close-round.png" alt="close" /></span></div>
                    <div className="list-menu-text">
                        <p>This will remove all the cards in this list from the board.
                        To view archived cards and bring them back to the board, click "Menu" >
                "Archived Items."</p>
                        <button className="archive-all danger-button">Archive All</button>
                    </div>
                </div>
            );
        } else if (this.state.menu === "moveListMenu") {

            const placeholderBoard = "Placeholder Board";

            return (
                <div className="list-menu">
                    <div className="list-menu-title">
                        <span className="back" onClick={this.showMainMenu}>
                            <i className="fas fa-arrow-left"></i></span><p>Move List</p>
                        <span className="close" onClick={this.closeMenu}>
                            <img src="../close-round.png" alt="close" /></span></div>
                    <div className="list-menu-buttons">
                        <button className="moveBtn">
                            <span className="btnLabel">Board</span>{placeholderBoard}</button>
                        <button className="moveBtn"><span className="btnLabel">Position</span>3</button>
                        <button className="confirm-button">Move</button>
                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }

    }

    render() {

        return (
            <div>
            {this.renderMenu()}
            </div>
        );

    }
}

export default ListMenu;