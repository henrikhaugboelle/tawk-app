import React from 'react'
import Styled from 'styled-components/native'

import View from 'components/View'
import Line from 'components/Line'

const HeaderUI = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-top: 60px;
`

export default ({ children }) => (
  <View>
    <HeaderUI>{children}</HeaderUI>
    <Line />
  </View>
)
