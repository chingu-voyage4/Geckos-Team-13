import React, { Component } from "react";
import "../styles/style.css";

class ListMenu extends React.Component {
    render() {
        return (
            <div className="list-menu">
                <div className="list-menu-title"><p>List Actions</p><span className="close">X</span>
                </div>
                <div className="list-menu-options"><ul>
                    <a href="#"><li>Add Card...</li></a>
                    <a href="#"><li>Copy List...</li></a>
                    <a href="#"><li>Move List...</li></a>
                    <a href="#"><li className="follow">Follow</li></a>
                    <a href="#"><li className="sort">Sort By...</li></a>
                    <a href="#"> <li>Move All Cards in This List...</li></a>
                    <a href="#"><li className="archive-cards">Archive All Cards in This List...</li></a>
                    <a href="#"><li>Archive This List</li></a>
                </ul>

                </div>
            </div>
        );
    }
}