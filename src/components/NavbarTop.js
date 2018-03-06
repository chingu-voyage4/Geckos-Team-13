import React, { Component } from 'react';
import '../styles/navbarTop.css';

class NavbarTop extends Component {
    render() {
        return (
            <ul className="navbar blue-header">
                <span className="leftbar">
                    <li><button className="boards"><i className="fab fa-trello"></i> Boards</button></li>
                    <span className="search">
                        <li><input type="text"></input></li>
                        <i className="fas fa-search"></i>
                    </span>
                </span>
                <li className="brand"><i className="fab fa-trello"></i> Trello</li>
                <span className="rightbar">
                    <li><button className="create"><i className="fas fa-plus"></i>

                    </button></li>
                    <li><button className="info"><i className="fas fa-info-circle"></i></button></li>
                    <li><button className="notifications"><i className="fas fa-bell"></i></button></li>
                    <li><button className="userbadge"><i className="fas fa-user"></i></button></li>
                </span>
            </ul>

        );
    }
}

export default NavbarTop;