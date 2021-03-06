import React, { Component } from "react";

class NavbarTop extends Component {
    render() {
        return (
            <ul className="navbar nav-list">
                <span className="leftbar">
                    <li>
                        <button className="boards"><i className="fab fa-trello" /> Boards</button>
                    </li>
                    <span className="search">
                        <li><input type="text" /></li>
                        <i className="fas fa-search" />
                    </span>
                </span>
                <li className="brand">
                    <img src="images/marshmallow.png" alt="marshmallow logo" /> Marshmallow
                </li>
                <span className="rightbar">
                    <li>
                        <button className="create"><i className="fas fa-plus" /></button>
                    </li>
                    <li>
                        <button className="info"><i className="fas fa-info-circle" /></button>
                    </li>
                    <li>
                        <button className="notifications"><i className="fas fa-bell" /></button>
                    </li>
                    <li>
                        <button className="userbadge"><i className="fas fa-user" /></button>
                    </li>
                </span>
            </ul>
        );
    }
}

export default NavbarTop;