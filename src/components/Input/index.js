import React from 'react'
import Styled from 'styled-components/native'
import { darken, lighten } from 'polished'

const Input = Styled.TextInput.attrs({
  underlineColorAndroid: 'transparent'
})`
  flex: 1;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => darken(0.125, props.theme.colors.white)};
  border-radius: ${props => props.theme.radius};
  color: ${props => props.theme.colors.text};
  padding: 15px;
  font-size: 16px;
  margin: 0 5px;
`

export default ({ value, placeholder, returnKeyType, onSubmitEditing, innerRef, onChange }) => (
  <Input
    value={value}
    placeholder={placeholder}
    returnKeyType={returnKeyType}
    onSubmitEditing={onSubmitEditing}
    onChangeText={onChange}
    innerRef={innerRef}
  />
)