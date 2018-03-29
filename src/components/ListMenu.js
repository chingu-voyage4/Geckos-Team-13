import React from "react";
import "../styles/style.css";
import SortBySubmenu from "./SortBySubmenu.js";
import ArchiveAllSubmenu from "./ArchiveAllSubmenu.js";
import MoveListSubmenu from "./MoveListSubmenu.js";

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

    render() {
        if (this.state.menu === "main") {
            return (
                <div className="list-menu">
                    <div className="list-menu-title">
                        <p>{this.state.listTitle}</p>
                        <span className="close" onClick={this.props.toggleMenu}>
                            <img src="../close-round.png" alt="close" />
                        </span>
                    </div>
                    <div className="list-menu-options">
                        <ul>
                            <li>Add Card...</li>
                            <li>Copy List...</li>
                            <li className="move-list" onClick={this.showSubmenu}>
                                Move List...
                            </li>
                            <li className="follow" onClick={this.toggleFollow}>
                                {this.state.follow ? "Unfollow" : "Follow"}
                            </li>
                            <li className="sort" onClick={this.showSubmenu}>
                                Sort By...
                            </li>
                            <li>Move All Cards in This List...</li>
                            <li className="archive-cards" onClick={this.showSubmenu}>
                                Archive All Cards in This List...
                            </li>
                            <li>Archive This List</li>
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
                    {this.state.menu === "archiveAllMenu" && <ArchiveAllSubmenu />}
                    {this.state.menu === "moveListMenu" && <MoveListSubmenu />}
                </div>
            );
        }
    }
}

export default ListMenu;
