import React from 'react'
import Button from '../../components/buttons'
import { LoginContainer, ContentContainer } from '../../components/containers'
import  Label  from '../../components/Labels'
import Icons from '../../components/Icons'
import IconLOGO from '../../assets/Images/logo-nave.png'
import { useHistory } from 'react-router-dom'
import Forms from '../../components/forms'

function Login () {
    const history = useHistory();
    const handleClick = () => history.push('/home');
  
  return (
    <ContentContainer>
      <LoginContainer>
        <Icons login src={IconLOGO}/> 
          <Label labellogin>E-mail    
            <Forms placeholder="E-mail" type='email' login></Forms>
          </Label>      
          <Label labellogin>Senha
            <Forms placeholder="Senha" type='password' login></Forms>
          </Label>
        <Button login type="button" onClick={handleClick}>Entrar</Button>
      </LoginContainer>
    </ContentContainer>
  )
}


export default Login
