import React, { Component } from 'react'
import Styled from 'styled-components/native'

const Errors = Styled.View``

const Error = Styled.Text`
  padding: 2.5px 5px;
  margin-top: 10px;
  font-size: 12px;
  line-height: 15px;
  background: ${props => props.theme.colors.danger};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius};
`

export default class extends Component {
  render() {
    const { errors = [] } = this.props

    if (errors.length === 0) {
      return null
    }

    return (
      <Errors>
        {errors.map(error => (
          <Error key={error}>
            {error}
          </Error>
        ))}
      </Errors>
    )
  }
}
