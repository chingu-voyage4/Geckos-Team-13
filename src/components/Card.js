/* eslint-disable indent */
import React, { Component } from 'react'
import '../static/css/card.css'

export default class extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }
  render () {
    return (
      <div className='BackgroundBox'>
        <div className='OuterCardBox'>
          <div className='TitleOuter'>
              <div className='TitleBox'>
                  <i className="fab fa-trello"></i>
                  <div className='CardTitle'>Availability</div>
              </div>
            <div className='CardList'>in list Team Member Information</div>
          </div>
          <div className='MainContent'>
            <div className='MainInfo'>
                <div className='CardMemberList'>Members
                    <div>
                        <i className="fas fa-user-circle"></i>
                        <i class="fas fa-plus-square"></i>
                    </div>
                </div>
                <div className='CardDescription'>
                    <p>Description</p>
                    <a href=''>Edit</a>
                    <div className='Editable'>
                        <textarea> Please note your availability in the comments below.</textarea>
                        <div className='DescriptionButtons'>
                            <button>Save</button>
                            <button>X</button>
                            <div className='FormattingHelp'>
                                <a href=''>Formatting Help</a>
                            </div>
                        </div>
                    </div>
                </div>
              <div className='CommentBox'>
                <div className='AddLabel'>
                    <i className="far fa-comment"></i>
                    <h3>Add Comment</h3>
                </div>
                <textarea placeholder='Write a comment...' />
                <div className='CommentButtons'>
                    <a href=""><i className="fas fa-paperclip"></i></a>
                    <a href=""><i className="fas fa-at"></i></a>
                    <a href=""><i className="fas fa-smile"></i></a>
                    <a href=""><i className="fab fa-trello"></i></a>
                </div>
                <button>Save</button>
              </div>
              <div className='ActivityBox'>
                <div className='ActivityLabel'>
                    <i className="far fa-list-alt"></i>
                    <h3>Activity</h3>
                    <a href=''>Show Details</a>
                </div>
                <div className='Activities'>
                    <i className="fas fa-user-circle"></i>
                  <div className='UserActivity'>
                    <p className='UserName'>Faraz Ahmad</p>
                    <div className='CardUserComment'>First comment wooooh!</div>
                    <div className='CardUserCommentDate'>Feb 12 at 7:56 PM</div>
                    <a href=''>Edit</a>
                    <a href=''>Reply</a>
                    <a href=''>Delete</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='InnerButtonBox'>
              <div className='AddBox'>
                <button><i className="fas fa-user"></i>Members</button>
                <button><i className="fas fa-tag"></i>Labels</button>
                <button><i className="fas fa-check-square"></i>Checklist</button>
                <button><i className="fas fa-clock"></i>Due Date</button>
                <button><i className="fas fa-paperclip"></i>Attachment</button>
              </div>
              <div className='PowerUpBox'>
                <button><i className="fab fa-github"></i><p>Github</p></button>
              </div>
              <div className='ActionBox'>
                <button><i className="fas fa-arrow-right"></i>Move</button>
                <button><i className="fas fa-copy"></i>Copy</button>
                <button><i className="fas fa-eye"></i>Subscribe</button>
                <button><i className="fas fa-archive"></i>Archive</button>
              </div>
              <div className='ShareandMore'>
                <a href=''>Share and more...</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
