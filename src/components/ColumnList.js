import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      outComponentSelected: true,
      listTitle: 'The Gecko-13s first list',
      cardName: '',
      cardTitles: ['card1', 'card2']
    }

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.cancelExpansion = this.cancelExpansion.bind(this)
    this.addCardTitle = this.addCardTitle.bind(this)
    this.confirmAddCard = this.confirmAddCard.bind(this)
    this.changeListTitle = this.changeListTitle.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
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
    this.setState({
      outComponentSelected: true,
      cardName: ''
    })
  }

  addCardTitle(event) {
    this.setState({ cardName: event.target.value })
  }

  confirmAddCard(event) {
    event.preventDefault()
    if (this.state.cardName) {
      this.setState({
        cardTitles: [...this.state.cardTitles, this.state.cardName],
        cardName: '',
        outComponentSelected: true
      })
    }
  }

  handleKeyPress(event) {
    console.log(event.key)
    if (event.key == 'Enter') {
      this.confirmAddCard(event)
    }
  }

  changeListTitle(event) {
    this.setState({ listTitle: event.target.value })
  }

  renderCardList() {
    return (
      this.state.cardTitles.map(title => {
        return <li key={title} className='card-preview'>{title}</li>
      })
    )
  }

  render() {
    return (
      <div className='list__container'>
        {this.props.children}
        <div className='list__header'>
          <div className='list__header-title'>
            <input onChange={this.changeListTitle} value={this.state.listTitle} type='text' />
          </div>
        </div>
        <div className='card-container'>
          <ul className='cards'>
            {this.renderCardList()}
          </ul>
        </div>
        <form
          onSubmit={this.confirmAddCard}
          ref={this.setWrapperRef}
          className='list__add-cards-full'
          style={{ display: this.state.outComponentSelected ? 'none' : 'inline-block' }}
        >
          <textarea value={this.state.cardName} onChange={this.addCardTitle} onKeyPress={this.handleKeyPress} cols='30' rows='10' />
          <button type="submit" className='btn--add'>ADD</button>
          <button onClick={this.cancelExpansion} className='btn--cancel'>X</button>
        </form>
        <button onClick={this.handleClick} className='list__add-cards-short' style={{ display: this.state.outComponentSelected ? 'block' : 'none' }}>Add a card...</button>
      </div>
    )
  }
}
