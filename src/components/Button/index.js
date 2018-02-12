import React from 'react'
import Styled from 'styled-components/native'
import { lighten, darken } from 'polished'

import Loader from 'components/Loader'

const Button = Styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.radius};
  border: 0;
  padding: 15px 30px;
  align-items: center;
  justify-content: center;
  margin: 0 5px;

  ${props => props.disabled && `
    opacity: 0.5;
  `}
`
const HideableLoader = Styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;

  ${props => props.hide && `
    opacity: 0;
  `}
`

const HideableText = Styled.Text`
  background-color: transparent;
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  line-height: 16px;
  
  ${props => props.hide && `
    opacity: 0;
  `}
`

export default ({ loading, label, onClick, ...props }) => (
  <Button onPress={onClick} {...props}>
    <HideableLoader hide={!loading}>
      <Loader variant="white" size="small" />
    </HideableLoader>

    <HideableText hide={loading}>
      {label}
    </HideableText>
  </Button>
)
