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
        if (e.target.className === "change-background") {
            this.setState({ menu: "backgroundMenu", menuTitle: "Change Background" });
        } else if (e.target.className === "more-menu") {
            this.setState({ menu: "moreMenu", menuTitle: "More" });
        }
    }
    render() {
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
                    <li className="more-menu">
                        <i className="fas fa-archive" />Archived Items
                    </li>
                </div>
            </div>
        );
    }
}
