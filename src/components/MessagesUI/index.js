import React, { Component } from 'react'
import Styled from 'styled-components/native'

import Message from 'components/Message'
import NoMessages from 'components/NoMessages'

const List = Styled.FlatList.attrs({
  contentContainerStyle: {
    justifyContent: 'flex-end',
    flexGrow: 1
  }
})`
  flex: 1;
`

export default class extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.list.scrollToEnd({ animated: false })
    }, 50)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.messages.length !== prevProps.messages.length) {
      setTimeout(() => {
        this.list.scrollToEnd()
      }, 50)
    }
  }

  render() {
    const { user, messages } = this.props

    return (
      <List
        data={messages}
        keyExtractor={(item) => item._id}
        innerRef={(e) => { this.list = e }}
        renderItem={({ item, index }) => (
          <Message
            user={user}
            message={item}
            first={index === 0}
            last={index === messages.length - 1}
          />
        )}
        ListEmptyComponent={() => <NoMessages>No recent messages ...</NoMessages>}
      />
    )
  }
}