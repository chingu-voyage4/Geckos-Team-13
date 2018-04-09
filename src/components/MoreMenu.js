import React, { Component } from "react";
import ArchiveMenu from "./ArchiveMenu";

export default class MoreMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: "main",
            menuTitle: this.props.menuTitle
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
        if (e.target.className === "archive") {
            this.setState({ menu: "archiveMenu", menuTitle: "Archive" });
        }
    }
    render() {
        if (this.state.menu === "main") {
            return (
                <div className="board-menu">
                    <div className="board-menu-title">
                        <span className="back" onClick={this.props.showMainMenu}>
                            <i className="fas fa-arrow-left" />
                        </span>
                        <h3>{this.props.menuTitle}</h3>
                        <span className="close" onClick={this.props.toggleBoardMenu}>
                            <img src="../close-round.png" alt="close" />
                        </span>
                    </div>
                    <div className="board-options">
                        <li>
                            <i className="fas fa-cog" />Settings
                        </li>
                        <li>
                            <i className="fas fa-tag" />Labels
                        </li>
                        <li>
                            <i className="far fa-folder-open" />Collections
                        </li>
                        <li className="archive" onClick={this.showSubmenu}>
                            <i className="fas fa-archive" />Archived Items
                        </li>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    {this.state.menu === "archiveMenu" && (
                        <ArchiveMenu
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
