import React from 'react'
import styled from 'styled-components'


const LARGE = 'large'
const MEDIUMLARGE = 'mediumlarge'
const MEDIUM = 'medium'
const SMALL = 'small'

const Label = ({ ...props }) => {
    return <LabelStyled {...props}></LabelStyled>
  }


const LabelStyled = styled.label`
    height: 18px;
    margin-top:${(props) => props.marginTop};
    font-weight:${(props) => props.fontWeight};
    font-family: 'Montserrat', sans-serif;
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
    line-height:${(props) => props.lineHeight};
    text-align: ${(props) => props.textAlign};   
`

export default Label;