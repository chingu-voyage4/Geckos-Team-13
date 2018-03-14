import React, { Component } from 'react';
import '../styles/App.css';
import NavbarTop from './NavbarTop.js';
import NavbarBottom from './NavbarBottom.js';
import List from './List';
import Card from './Card';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <NavbarTop />
                <NavbarBottom />
                <List />
                <Card />
            </div>
        );
    }
}

export default App;