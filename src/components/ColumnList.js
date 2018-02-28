import React, { Component } from 'react'

export default class extends Component {
  render () {
    return (
      <div className='list__container'>
        <div className='list__header'>
          <div className='list__header-title'>Do we have hot reloading?</div>
          <div className='card-container'>
            <ul className='cards'>
              <li className='card-preview' />
              <li className='card-preview' />
              <li className='card-preview' />
            </ul>
          </div>
          <div className='list__add-cards'>
            <button className='btn--add'>ADD</button>
            <a href='' className='btn--cancel'>
              X
            </a>
          </div>
        </div>
      </div>
    )
  }
}
