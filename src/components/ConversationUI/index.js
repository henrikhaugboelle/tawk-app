import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import Styled from 'styled-components/native'

const Container = Styled.View`
  height: 100%;
  background: ${props => props.theme.colors.white};
`

export default ({ children }) => (
  <KeyboardAvoidingView behavior="padding">
    <Container>
      {children}
      </Container>
  </KeyboardAvoidingView>
)