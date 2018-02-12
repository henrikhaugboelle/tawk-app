import React from 'react'
import Styled from 'styled-components/native'
import { lighten, transparentize } from 'polished'

import FormattedTimestamp from 'shared/components/FormattedTimestamp'
import AnimalIcon from 'components/AnimalIcon'

const Container = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${props => props.theme.radius};

  ${props => props.self && `
    flex-direction: row-reverse;
  `}
`

const Circle = Styled.View`
  background: ${props => transparentize(0.25, props.color)};
  border-radius: 30px;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;

  ${props => props.self && `
    margin-left: 7.5px;
  `}

  ${props => !props.self && `
    margin-right: 7.5px;
  `}
`

const Info = Styled.View`
  ${props => props.self && `
    align-items: flex-end;
  `}
`

const Label = Styled.Text`
  background-color: transparent;
  color: ${props => lighten(0.2, props.theme.colors.text)};
  font-size: 12px;
`

const Timestamp = Styled.Text`
  background-color: transparent;
  color: ${props => lighten(0.4, props.theme.colors.text)};
  font-size: 12px;
  font-style: italic;
`

export default ({ user, message, self }) => (
  <Container color={user.identity.color} self={self}>
    <Circle color={user.identity.color} self={self}>
      <AnimalIcon
        size={20}
        color={user.identity.color}
        animal={user.identity.animal}
      />
    </Circle>
    <Info self={self}>
      <Label>{user.displayName}</Label>
      <FormattedTimestamp timestamp={message.timestamp} component={Timestamp} />
    </Info>
  </Container>
)
