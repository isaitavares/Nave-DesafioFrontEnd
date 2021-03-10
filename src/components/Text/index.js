import React from 'react'
import styled from 'styled-components'

const LARGE = 'large'
const MEDIUMLARGE = 'mediumlarge'
const MEDIUM = 'medium'
const SMALL = 'small'

const Text = ({ ...props }) => {
  return <TextStyled {...props}></TextStyled>
}

const TextStyled = styled.p`
  display: flex;
  align-items: center;
  color: #212121;
  font-family: 'Montserrat', sans-serif;
  line-height: ${(props) => props.lineHeight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};

  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case LARGE:
        return '40px'
      case MEDIUMLARGE:
        return '24px'
      case MEDIUM:
        return '16px'
      case SMALL:
        return '14px'
      default:
    }
  }};

  font-weight: ${({ fontWeight }) => {
    switch (fontWeight) {
      case LARGE:
        return '600'
      case MEDIUM:
        return '400'
      case SMALL:
        return '300'
      default:
    }
  }};
`

export default Text