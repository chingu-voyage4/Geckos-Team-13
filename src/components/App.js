import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar.js'
import NavbarTwo from './NavbarTwo.js'
import List from './List'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <NavbarTwo />
        <List />
      </div>
    )
  }
}

export default App
