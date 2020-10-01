import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import LoginButton from '../../components/Buttons'
import { LoginContainer, ContentContainer } from '../../components/Containers'
import LoginForm from '../../components/Forms'
import  LabelLogin  from '../../components/Labels'
import LogoNave from '../../components/Icons'
import IconLOGO from '../../assets/logo-nave.png'

function login () {
  return (
    <ContentContainer>
      <LoginContainer>
        <LogoNave src={IconLOGO}/> 
          <LabelLogin> E-mail    
            <LoginForm placeholder="E-mail" type='email'></LoginForm>
          </LabelLogin>      
          <LabelLogin> Senha
            <LoginForm placeholder="Senha" type='password'></LoginForm>
          </LabelLogin>
        <LoginButton>Entrar</LoginButton>
      </LoginContainer>
    </ContentContainer>
  )
}
export default login
