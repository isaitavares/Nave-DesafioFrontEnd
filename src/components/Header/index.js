import styled from 'styled-components'
import React,{useContext} from 'react'
import {Link} from 'react-router-dom'

import {Context} from '../../context/authContext'
import {Icons,Button} from '../'
import IconLOGO from '../../assets/Images/logo-nave.png'

function Header() {

    const { handleLogout } = useContext(Context);

        return(
            <HeaderComponent>
                <Link to='/home' style={{ textDecoration: 'none', display: 'flex', justifyContent: 'flex-start' }}>
                    <Icons header src={IconLOGO}/>
                </Link>
                    <Button header onClick={handleLogout}>Sair</Button>
            </HeaderComponent>
        )
}

const HeaderComponent = styled.header`
height:85px;
width: 100%;
background: white;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 70px;
    @media (max-width: 540px) {
        height:55px;
    }    
`

export default Header;