import React from 'react'
import Styled from 'styled-components/native'

const Container = Styled.View`
  margin: 0 0 2.5px 0;
`

const Bubble = Styled.View`
  background: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.radius};
  padding: 10px;
`

const Text = Styled.Text`
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  font-size: 14px;
`

const Triangle = Styled.View`
  position: relative;
  top: -1px;
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-width: 0;
  border-left-width: 6px;
  border-right-width: 6px;
  border-top-width: 7px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: ${props => props.theme.colors.lightGray};

  ${props => !props.self && `
    left: 9px;
  `}

  ${props => props.self && `
    right: 9px;
    align-self: flex-end;
  `}
`

export default ({ message, self }) => (
  <Container>
    <Bubble>
      <Text>{message}</Text>
    </Bubble>
    <Triangle self={self} />
  </Container>
)
