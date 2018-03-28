import React from "react";

class MoveListSubmenu extends React.Component {
    render() {
        const placeholderBoard = "Placeholder Board";
        return (
            <div className="list-menu-buttons">
                <button className="moveBtn">
                    <span className="btnLabel">Board</span>{placeholderBoard}</button>
                <button className="moveBtn"><span className="btnLabel">Position</span>3</button>
                <button className="confirm-button">Move</button>
            </div>
        );
    }
}

export default MoveListSubmenu;