import React from "react";
import BackgroundMenu from "./BackgroundMenu.js";

class BoardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menu: "main",
                       menuTitle: "Menu"};

        this.showSubmenu = this.showSubmenu.bind(this);
        this.showMainMenu = this.showMainMenu.bind(this);
    }

    showMainMenu(e) {
        e.preventDefault();
        this.setState({menu: "main", menuTitle: "Menu"});
    }

    showSubmenu(e) {
        e.preventDefault();
        if (e.target.className === "change-background") {
            this.setState({menu: "backgroundMenu", menuTitle: "Change Background"});
        }
    }

    render() {
        if (this.state.menu === "main") {
        return (
            <div className="board-menu">
                <div className="board-menu-title"><h3>{this.state.menuTitle}</h3>
                <span className="close" onClick={this.props.toggleBoardMenu}>
                <img src="images/close-round.png" alt="close" />
                </span></div>
                <div className = "board-members">
                <span className = "board-member">PP</span>
                    <button className="invite"><i className="fas fa-user-plus"></i>
                    Invite...</button>
                </div>
                <div className = "board-options">
                    <li className = "change-background" onClick={this.showSubmenu}>
                    <span className = "current-color" style={{backgroundColor: this.props.color}}>
                    </span>Change Background</li>
                    <li><i className="fas fa-filter"></i>Filter Cards</li>
                    <li><i className="fas fa-rocket"></i>Power-Ups</li>
                    <li><i className="far fa-sticky-note"></i>Stickers</li>
                    <li><i className="fas fa-ellipsis-h"></i>More</li>
                </div>
                <div className = "board-activity">
                    <li><i className="fas fa-list-ul"></i>Activity</li>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                { this.state.menu === "backgroundMenu" &&
                <BackgroundMenu toggleBoardMenu={this.props.toggleBoardMenu}
                showMainMenu={this.showMainMenu}
                menu={this.state.menu} menuTitle={this.state.menuTitle}
                changeColor={this.props.changeColor}
                changeBackground={this.props.changeBackground} /> }
            </div>
            );
    }
    }
}

export default BoardMenu;