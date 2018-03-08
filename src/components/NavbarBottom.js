import React, { Component } from 'react'

class NavbarBottom extends Component {
  render () {
    return (

      <ul className='nav-two'>
        <span className='leftbar'>
          <li><button>Board Name</button></li>
          <li><button className='star'><i className='far fa-star' /></button></li>
          <li><button>Team</button></li>
          <li><button>Privacy</button></li>
        </span>
        <span className='rightbar'>
          <li><button>... Show Menu</button></li>
        </span>
      </ul>

    )
  }
}

export default NavbarBottom
