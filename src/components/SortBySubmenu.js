import React, { Component } from "react";

class SortBySubmenu extends React.Component {
    render() {
        return (
            <div className="list-menu-options"><ul>
                <li>Date Created (Newest First)</li>
                <li>Date Created (Oldest First)</li>
            </ul></div>
        );
    }
}

export default SortBySubmenu;