import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import LoginButton from '../components/buttons/Buttons'
import LoginContainer from '../components/containers/LoginContainer'
import ContentContainer from '../components/containers/ContentContainer'
import { LoginForm1,LoginForm2 } from '../components/forms/LoginForms'

function login () {
  return (
    <ContentContainer>
      <LoginContainer>
        <LoginForm1 />
        <LoginForm2 />
        <LoginButton>Entrar</LoginButton>
      </LoginContainer>
    </ContentContainer>
  )
}
export default login
