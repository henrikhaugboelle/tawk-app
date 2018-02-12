import React, { Component } from 'react'
import Styled from 'styled-components/native'

import SpeechBubble from 'components/SpeechBubble'
import Avatar from 'components/Avatar'

const Message = Styled.View`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.self ? 'flex-end' : 'flex-start')};

  ${props => props.self && `
    padding-left: 40px;
  `}

  ${props => !props.self && `
    padding-right: 40px;
  `}

  ${props => props.first && `
    padding-top: 20px;
  `}

  ${props => props.last && `
    padding-bottom: 20px;
  `}
`

export default class extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { user, message, first, last } = this.props

    return (
      <Message self={message.user._id === user._id} first={first} last={last}>
        <SpeechBubble message={message.message} self={message.user._id === user._id} />
        <Avatar user={message.user} message={message} self={message.user._id === user._id} />
      </Message>
    )
  }
}