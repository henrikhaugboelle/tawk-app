import React from 'react'
import Styled from 'styled-components/native'

const Button = Styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
`

const Lines = Styled.View`
  transform: rotate(45deg);
`

const LineA = Styled.View`
  width: 2px;
  height: 13px;
  background: ${props => props.theme.colors.primary};
`

const LineB = Styled.View`
  width: 15px;
  height: 2px;
  background: ${props => props.theme.colors.primary};
`

export default ({ onClick }) => (
  <Button onPress={onClick}>
    <Lines>
      <LineA />
      <LineB />
    </Lines>
  </Button>
)
