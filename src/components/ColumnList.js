import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      outComponentSelected: true,
      listTitle: "The Gecko-13s first list"
    }

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.cancelExpansion = this.cancelExpansion.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    console.log(node)
    this.wrapperRef = node
  }

  handleClickOutside(event) {
    // this.wrapperRef (the react component)
    // event.target (element clicked)
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ outComponentSelected: true })
    }
  }

  handleClick(event) {
    console.log(this.state.listTitle)
    this.setState({ outComponentSelected: false })
  }

  cancelExpansion(event) {
    console.log(this.state.outComponentSelected)
    this.setState({ outComponentSelected: true })
  }

  render() {
    return (
      <div className='list__container'>
        {this.props.children}
        <div className='list__header'>
          <div className='list__header-title'>
            <input type="text" />
          </div>
        </div>
        <div className='card-container'>
          <ul className='cards'>
            <li className='card-preview'>Card component 1</li>
            <li className='card-preview'>Card component 2</li>
            <li className='card-preview'>Card component 3</li>
          </ul>
        </div>
        <form ref={this.setWrapperRef} className='list__add-cards-full' style={{ display: this.state.outComponentSelected ? 'none' : 'block' }}>
          <textarea name="card-title" id="" cols="30" rows="10"></textarea>
          <button className='btn--add'>ADD</button>
          <button onClick={this.cancelExpansion} className='btn--cancel'>X</button>
        </form>
        <button onClick={this.handleClick} className="list__add-cards-short" style={{ display: this.state.outComponentSelected ? 'block' : 'none' }}>Add a card...</button>
      </div>
    )
  }
}
