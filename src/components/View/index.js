import Styled from 'styled-components/native'

export default Styled.View`
  ${props => props.width && `
    width: ${props.width};
  `}
`
