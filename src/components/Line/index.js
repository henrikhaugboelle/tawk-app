import Styled from 'styled-components/native'
import { transparentize } from 'polished'

export default Styled.View`
  background: ${props => transparentize(0.9, props.theme.colors.black)};
  height: 1px;
`
