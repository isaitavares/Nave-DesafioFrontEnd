import React, { useContext } from 'react'
import { Redirect }  from 'react-router-dom';
import Button from '../../components/buttons'
import { LoginContainer, ContentContainer } from '../../components/containers'
import  Label  from '../../components/Labels'
import Icons from '../../components/Icons'
import IconLOGO from '../../assets/Images/logo-nave.png'
import Forms from '../../components/forms'
import { Context } from '../../context/authContext'

function Login () {

    const { handleLogin, authenticated } = useContext(Context)
    const Logindata = useContext(Context);

    if (authenticated) {
      return <Redirect to="/home"/>
  }
  
  return (
    <ContentContainer>
      <LoginContainer>
        <form>
          <Icons login src={IconLOGO}/> 
            <Label labellogin>E-mail    
              <Forms placeholder="E-mail"
              type='email'
              value={ Logindata.email }
              onChange={e => Logindata.setEmail(e.target.value)}
              login
              autoComplete="username"/>
            </Label>      
            <Label labellogin>Senha
              <Forms placeholder="Senha"
              type='password'
              value={ Logindata.password }
              onChange={e => Logindata.setPassword(e.target.value)}
              login
              autoComplete="current-password"/>
            </Label>
          <Button login onClick={handleLogin}>Entrar</Button>
        </form>
      </LoginContainer>
    </ContentContainer>
  )
}


export default Login
