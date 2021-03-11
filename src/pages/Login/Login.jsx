import React, { useContext } from 'react'
import { Redirect }  from 'react-router-dom';

import 
{Row,
Button,
Label,
Icons,
Input,
LoginContainer,
ContentContainer} from '../../components'
import IconLOGO from '../../assets/Images/logo-nave.png'
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
            <Label fontWeight="600" fontSize="small">E-mail    
              <Input placeholder="E-mail"
              type='email'
              value={ Logindata.email }
              onChange={e => Logindata.setEmail(e.target.value)}
              login
              autoComplete="username"/>
            </Label>
            <Row height="32px"/>      
            <Label fontWeight="600" fontSize="small" marginTop={32}>Senha
              <Input placeholder="Senha"
              type='password'
              value={ Logindata.password }
              onChange={e => Logindata.setPassword(e.target.value)}
              login
              autoComplete="current-password"/>
            </Label>
          <Button
          mt="32px"
          color="white"
          bg="black"
          width={1}
          height="40px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={handleLogin}>Entrar</Button>
        </form>
      </LoginContainer>
    </ContentContainer>
  )
}


export default Login
