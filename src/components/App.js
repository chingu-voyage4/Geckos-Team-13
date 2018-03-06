import React, { Component } from 'react';
import '../styles/App.css';
import NavbarTop from './NavbarTop.js';
import NavbarBottom from './NavbarBottom.js';
import List from './List';


class App extends Component {
    render() {
        return (
            <div className="App">
                <NavbarTop />
                <NavbarBottom />
                <List />
            </div>
        );
    }
}

export default App
