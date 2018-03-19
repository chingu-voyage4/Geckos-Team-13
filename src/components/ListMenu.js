import React, { Component } from "react";
import "../styles/style.css";
import "../styles/listmenu.css";

class ListMenu extends React.Component {
    constructor(props) {
        super(props);
        this.toggleFollow = this.toggleFollow.bind(this);
        this.state = {follow: false};
    }

    toggleFollow(e) {
        e.preventDefault();
        if (this.state.follow === false) {
            this.setState({follow: true});
        } else {
            this.setState({follow: false});
        }
    }

    render() {
        return (
            <div className="list-menu">
                <div className="list-menu-title"><p>List Actions</p>
                <span className="close"><img src="../close-round.png" alt="close" /></span>
                </div>
                <div className="list-menu-options"><ul>
                    <a href="#"><li>Add Card...</li></a>
                    <a href="#"><li>Copy List...</li></a>
                    <a href="#"><li>Move List...</li></a>
                    <a href="#"><li className="follow" onClick={this.toggleFollow}>{this.state.follow ? "Unfollow" : "Follow"}</li></a>
                    <a href="#"><li className="sort">Sort By...</li></a>
                    <a href="#"> <li>Move All Cards in This List...</li></a>
                    <a href="#">
                    <li className="archive-cards">Archive All Cards in This List...</li></a>
                    <a href="#"><li>Archive This List</li></a>
                </ul>

                </div>
            </div>
        );
    }
}

export default ListMenu;