import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import Styled from 'styled-components/native'

const Container = Styled.View`
  background: ${props => props.theme.colors.lightGray};
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Content = Styled.View`
  max-width: 100%;
  width: 320px;
`

export default ({ children }) => (
  <KeyboardAvoidingView behavior="padding">
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  </KeyboardAvoidingView>
)
