import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import LoginButton from '../../components/buttons/Buttons'
import LoginContainer from '../../components/containers/LoginContainer'
import ContentContainer from '../../components/containers/ContentContainer'
import { LoginForm1, LoginForm2 } from '../../components/Forms/LoginForms'
import { LabelEmail, LabelSenha } from '../../components/Labels/Labels'
import LogoNave from '../../components/Icons/Icons'
import IconLOGO from '../../assets/logo-nave.png'

function login () {
  return (
    <ContentContainer>
      <LoginContainer>
        <LogoNave src={IconLOGO}/> 
          <LabelEmail> E-mail    
            <LoginForm1 placeholder="E-mail" type='email'></LoginForm1>
          </LabelEmail>      
          <LabelSenha> Senha
            <LoginForm2 placeholder="Senha" type='password'></LoginForm2>
          </LabelSenha>
        <LoginButton>Entrar</LoginButton>
      </LoginContainer>
    </ContentContainer>
  )
}
export default login
