import React, { Component } from "react";
import BoardMenu from "./BoardMenu.js";

class NavbarBottom extends Component {
    constructor(props) {
        super(props);

        this.state = { boardMenuDisplay: false };
        this.toggleBoardMenu = this.toggleBoardMenu.bind(this);
    }

    toggleBoardMenu() {
        if (this.state.boardMenuDisplay) {
            this.setState({boardMenuDisplay: false});
        } else {
            this.setState({boardMenuDisplay: true});
        }
    }

    render() {
        return (
            <ul className='nav-two nav-list'>
                <span className='leftbar'>
                    <li><button>Board Name</button></li>
                    <li><button className='star'><i className='far fa-star' /></button></li>
                    <li><button>Team</button></li>
                    <li><button>Privacy</button></li>
                </span>
                <span className='rightbar'>
                    <li><button onClick={this.toggleBoardMenu}>... Show Menu</button></li>
                </span>
                {this.state.boardMenuDisplay && <BoardMenu toggleBoardMenu={this.toggleBoardMenu} />}
            </ul>
        );
    }
}

export default NavbarBottom;