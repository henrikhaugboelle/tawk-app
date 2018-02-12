import React from 'react'
import Styled from 'styled-components/native'
import { transparentize } from 'polished'

import View from 'components/View'
import Line from 'components/Line'

const WriterUI = Styled.View`
  padding: 20px;
`

export default ({ children }) => (
  <View>
    <Line />
    <WriterUI>{children}</WriterUI>
  </View>
)
