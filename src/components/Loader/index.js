import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import Styled, { withTheme } from 'styled-components/native'

const Container = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

class Loader extends Component {
  render() {
    const { size, variant, theme } = this.props

    return (
      <Container>
        <ActivityIndicator
          size={size || 'large'}
          color={theme.colors[variant || 'primary']} 
        />
      </Container>
    )
  }
}

export default withTheme(Loader)