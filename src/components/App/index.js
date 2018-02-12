import React, { Component } from 'react'

import { Switch, Route } from 'router/index'

import Home from 'shared/components/Home'
import Conversation from 'shared/components/Conversation'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:slug" component={Conversation} />
      </Switch>
    )
  }
}

export default App