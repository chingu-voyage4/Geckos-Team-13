import React from "react";
import "./boardmenu.css";

class BoardMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="board-menu">
                <div className="board-menu-title"><h3>Menu</h3><span className="close" onClick={this.props.toggleBoardMenu}>
                <img src="../close-round.png" alt="close" />
                </span></div>
                <div className = "board-members">
                <span className = "board-member">PP</span>
                    <button className="invite"><i className="fas fa-user-plus"></i>Invite...</button>
                </div>
                <div className = "board-options">
                    <li>Change Background</li>
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
    }
}

export default BoardMenu;