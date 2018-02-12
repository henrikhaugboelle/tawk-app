import React from 'react'
import Styled from 'styled-components/native'

import Loader from 'components/Loader'

const Positioner = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export default ({ variant }) => (
  <Positioner>
    <Loader variant={variant} />
  </Positioner>
)
