import styled from 'styled-components'
import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {Context} from '../../context/authContext'

import Icons from '../Icons'
import IconLOGO from '../../assets/Images/logo-nave.png'
import Button from '../buttons'

const HeaderComponent = styled.header`
height:85px;
width: 100%;
background: white;
display: flex;
align-items: center;
justify-content: space-between;
    @media (max-width: 540px) {
        height:55px;
    }    
`

function Header() {

    const { handleLogout } = useContext(Context);

        return(
            <HeaderComponent>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <Icons header src={IconLOGO}/>
                </Link>
                    <Button header onClick={handleLogout}>Sair</Button>
            </HeaderComponent>
        )
}
export default Header;