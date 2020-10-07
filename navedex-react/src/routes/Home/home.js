import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import { ContentContainer, HomeContainer, PageTitleContainer, NaversContainer } from '../../components/Containers'
// eslint-disable-next-line
import { HRContainer } from '../../components/Containers'
import Icons from '../../components/Icons'
import IconLOGO from '../../assets/Images/logo-nave.png'
import Header from '../../components/Header'
import Button from '../../components/Buttons'
import Text from '../../components/Texts'
import NaverCard from '../../components/Cards'
import { Link } from 'react-router-dom' 
 

function Home () {
  return (
<HomeContainer>
  <Header>
    <Link to='/home' style={{ textDecoration: 'none' }}>
      <Icons header src={IconLOGO}/>
    </Link>
      <Button header>Sair</Button>
  </Header>
  <PageTitleContainer>
    <Text>Navers</Text>
    <Link to='/adicionarnaver' style={{ textDecoration: 'none' }}>
    <Button titlehome>Adicionar Naver</Button>
    </Link> 
  </PageTitleContainer>
    <ContentContainer home>
      <NaversContainer>
        <NaverCard />
      </NaversContainer>               
    </ContentContainer>
</HomeContainer>
  )
}
export default Home
