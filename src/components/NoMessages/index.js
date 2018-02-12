import Styled from 'styled-components/native'
import { transparentize } from 'polished'

export default Styled.Text`
  padding: 50px 0;
  text-align: center;
  font-size: 14px;
  font-style: italic;
  color: ${props => transparentize(0.5, props.theme.colors.text)};
`
