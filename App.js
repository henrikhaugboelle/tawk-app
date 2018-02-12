import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components/native'
import { NativeRouter } from 'react-router-native'

import App from 'components/App'

import theme from 'theme/index'
import constants from 'constants/index'

import configureApolloClient from './src/shared/network/index'

const apolloClient = configureApolloClient({ constants })

export default class extends Component {
  render() {
    return (
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ApolloProvider>
      </NativeRouter>
    )
  }
}
