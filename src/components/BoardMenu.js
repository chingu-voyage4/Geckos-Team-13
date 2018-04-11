import React from "react";
import BackgroundMenu from "./BackgroundMenu.js";
import MoreMenu from "./MoreMenu";

class BoardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: "main",
            menuTitle: "Menu"
        };

        this.showSubmenu = this.showSubmenu.bind(this);
        this.showMainMenu = this.showMainMenu.bind(this);
    }

    showMainMenu(e) {
        e.preventDefault();
        this.setState({ menu: "main", menuTitle: "Menu" });
    }

    showSubmenu(e) {
        e.preventDefault();
        if (e.target.className === "change-background") {
            this.setState({ menu: "backgroundMenu", menuTitle: "Change Background" });
        } else if (e.target.className === "more-menu") {
            this.setState({ menu: "moreMenu", menuTitle: "More" });
        }
    }

    render() {
        if (this.state.menu === "main") {
            return (
                <div className="board-menu">
                    <div className="board-menu-title">
                        <h3>{this.state.menuTitle}</h3>
                        <span className="close" onClick={this.props.toggleBoardMenu}>
                            <img src="../close-round.png" alt="close" />
                        </span>
                    </div>
                    <div className="board-members">
                        <span className="board-member">PP</span>
                        <button className="invite">
                            <i className="fas fa-user-plus" />
                            Invite...
                        </button>
                    </div>
                    <div className="board-options">
                        <li className="change-background" onClick={this.showSubmenu}>
                            <span
                                className="current-color"
                                style={{ backgroundColor: this.props.color }}
                            />Change Background
                        </li>
                        <li>
                            <i className="fas fa-filter" />Filter Cards
                        </li>
                        <li>
                            <i className="fas fa-rocket" />Power-Ups
                        </li>
                        <li>
                            <i className="far fa-sticky-note" />Stickers
                        </li>
                        <li className="more-menu" onClick={this.showSubmenu}>
                            <i className="fas fa-ellipsis-h" />More
                        </li>
                    </div>
                    <div className="board-activity">
                        <li>
                            <i className="fas fa-list-ul" />Activity
                        </li>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    {this.state.menu === "backgroundMenu" && (
                        <BackgroundMenu
                            toggleBoardMenu={this.props.toggleBoardMenu}
                            showMainMenu={this.showMainMenu}
                            menu={this.state.menu}
                            menuTitle={this.state.menuTitle}
                            changeColor={this.props.changeColor}
                            changeBackground={this.props.changeBackground}
                        />
                    )}
                    {this.state.menu === "moreMenu" && (
                        <MoreMenu
                            toggleBoardMenu={this.props.toggleBoardMenu}
                            showMainMenu={this.showMainMenu}
                            menuTitle={this.state.menuTitle}
                        />
                    )}
                </div>
            );
        }
    }
}

export default BoardMenu;
