import React from 'react'
import Styled from 'styled-components/native'

import sprite from 'shared/components/AnimalIcon/icons.png'
import map from 'shared/components/AnimalIcon/map'

const Container = Styled.View`
  position: relative;
  width: ${props => props.size || 20}px;
  height: ${props => props.size || 20}px;
  overflow: hidden;
  border: 0px solid rgba(0, 0, 0, 0);
`

const Image = Styled.Image.attrs({
  resizeMode: 'cover',
  source: sprite
})`
  position: absolute;
  top: -${props => map[props.animal][1] * 100}%;
  left: -${props => map[props.animal][0] * 100}%;
  width: 400%;
  height: 500%;
  overflow: hidden;
`

export default (props) => (
  <Container {...props}>
    <Image {...props} />
  </Container>
)