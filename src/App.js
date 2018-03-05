import React, { Component } from 'react';
import './App.css';
import NavbarTop from './navbarTop.js';
import NavbarBottom from './navbarBottom.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavbarTop />
                <NavbarBottom />
            </div>
        );
    }
}

export default App;
