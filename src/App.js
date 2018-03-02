import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar.js';
import NavbarTwo from './navbarTwo.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <NavbarTwo />
            </div>
        );
    }
}

export default App;
