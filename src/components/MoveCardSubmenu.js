import React, { Component } from "react";
import "../styles/listmenucard.css";

class MoveCardSubmenu extends Component {
    render() {
        const placeholderBoard = "Placeholder Board";
        return (
            <div className="list-menu-buttons list-menu-buttons-card">
                <button className="moveBtn">
                    <span className="btnLabel">Board</span>
                    {placeholderBoard}
                </button>
                <div className="bottom-row-container">
                    <button className="moveBtn moveBtn-left">
                        <span className="btnLabel">Position</span>3
                    </button>
                    <button className="moveBtn moveBtn-right">
                        <span className="btnLabel">Position</span>3
                    </button>
                </div>
                <button className="confirm-button">Move</button>
            </div>
        );
    }
}

export default MoveCardSubmenu;
