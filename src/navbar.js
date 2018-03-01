import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <ul className = "navbar">
                <span className = "leftbar">
                    <li><button className="boards"><i class="fab fa-trello"></i> Boards</button></li>
                    <span className="search">
                        <li><input type="text"></input></li>
                        <i class="fas fa-search"></i>
                    </span>
                </span>
                <li className="brand"><i class="fab fa-trello"></i> Trello</li>
                <span className = "rightbar">
                    <li><button className="create"><i class="fas fa-plus"></i>

                    </button></li>
                    <li><button className="info"><i class="fas fa-info-circle"></i></button></li>
                    <li><button className="notifications"><i class="fas fa-bell"></i></button></li>
                    <li><button className="userbadge"><i class="fas fa-user"></i></button></li>
                </span>
            </ul>
            
        );
    }
}

export default Navbar;