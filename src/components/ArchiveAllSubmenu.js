import React, { Component } from "react";

class ArchiveAllSubmenu extends React.Component {
    render() {
        return (
            <div className="list-menu-text">
                <p>This will remove all the cards in this list from the board.
                To view archived cards and bring them back to the board, click "Menu" >
                "Archived Items."</p>
                <button className="archive-all danger-button">Archive All</button>
            </div>
        );
    }
}

export default ArchiveAllSubmenu;