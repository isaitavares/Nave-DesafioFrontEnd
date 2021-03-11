import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {Column,Row} from '../../components/Grid'
import Header from '../../components/Header'
import Text from '../../components/Text'
import NaverCards from '../../components/Cards'
import api from '../../services/api'
 
 

function Home () {

  const [navers, setNavers] = useState([])

  useEffect(() => {
    const fetchNavers = async () => {
      try {
        const { data } = await api.get('/navers')
        setNavers(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchNavers()
  }, [])

  return (
<HomeComponent alignItems='center' key={navers.id} >
  <HomeContentContainer>
    <Header />
    <NavbarContainer justifyContent="space-between" height='40px' width='1' mb='32px'>
      <Text fontSize="large" fontWeight="large">Navers</Text>
      <ButtonStyled
      to='/naver/adicionar'    
      >Adicionar Naver</ButtonStyled>
    </NavbarContainer>
      <NaversContainer display="grid" gridTemplateColumns='2.5fr 2.5fr 2.5fr 2.5fr' justifyItems='center'>
        <NaverCards/>
      </NaversContainer>          
    </HomeContentContainer>
</HomeComponent>
  )
}

const HomeComponent = styled(Column)`
  height:100%;
  width:100%;
`
const HomeContentContainer = styled(Column)`
  padding-bottom: 24px;
  padding-left:32px;
  padding-right:32px;
  height:100%;
  width:100%;
`
const NavbarContainer = styled(Row)`
  width:100%;
  box-sizing: border-box;
`
const NaversContainer = styled(Row)`
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 0.2fr;
  grid-gap: 1rem;
  flex-grow: 1;
`
const ButtonStyled = styled(Link)`
  color:white;
  background:black;
  width:176px;
  height:40px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-decoration:none;
`

export default Home
