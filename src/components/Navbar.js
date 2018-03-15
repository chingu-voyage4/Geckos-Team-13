import React, { Component } from "react";
import "../navbar.css";

class Navbar extends Component {
  render() {
    return (
      <ul className="navbar blue-header">
        <span className="leftbar">
          <li><button className="boards"><i className="fab fa-trello" /> Boards</button></li>
          <span className="search">
            <li><input type="text" /></li>
            <i className="fas fa-search" />
          </span>
        </span>
        <li className="brand"><i className="fab fa-trello" /> Trello</li>
        <span className="rightbar">
          <li><button className="create"><i className="fas fa-plus" />

          </button></li>
          <li><button className="info"><i className="fas fa-info-circle" /></button></li>
          <li><button className="notifications"><i className="fas fa-bell" /></button></li>
          <li><button className="userbadge"><i className="fas fa-user" /></button></li>
        </span>
      </ul>

    );
  }
}

export default Navbar;
