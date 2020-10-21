import React from 'react'
import Header from '../../components/header'
import Icons from '../../components/Icons'
import IconLOGO from '../../assets/Images/logo-nave.png'
import { HomeContainer, ContentContainer, NaversFormsContainer, PageTitleNaversContainer, SectionNaversContainer, ButtonNaversContainer } from '../../components/containers'
import Button from '../../components/buttons'
import Forms from '../../components/forms'
import { Link } from 'react-router-dom'
import ReturnButtonIcon from '../../assets/Images/arrow-icon.png'
import Text from '../../components/Texts'
import Label from '../../components/Labels'

function EditarNaver () {
    return (
  <HomeContainer>
    <Header>
      <Link to='/home' style={{ textDecoration: 'none' }}>
        <Icons header src={IconLOGO}/>
      </Link>
        <Button header>Sair</Button>
    </Header>
        <ContentContainer addeditnaver>
          <SectionNaversContainer>
            <PageTitleNaversContainer>
              <Link to='/home' style={{ textDecoration: 'none' }}>
                <Icons src={ReturnButtonIcon} alt="ReturnButton" ReturnButton />
              </Link>
              <Text adicionarnavers>Editar Naver</Text>
            </PageTitleNaversContainer>  
            <NaversFormsContainer>
              <Label labelnaver>Nome
                <Forms adicionarnaverform placeholder="Nome" type="text"></Forms>
              </Label>
              <Label labelnaver>Cargo  
                <Forms adicionarnaverform placeholder="Cargo" type="text"></Forms>
              </Label>
              <Label labelnaver>Idade  
                <Forms adicionarnaverform placeholder="Idade" type="text"></Forms>
              </Label>
              <Label labelnaver>Tempo de Empresa  
                <Forms adicionarnaverform placeholder="Tempo de Empresa" type="text"></Forms>
              </Label>
              <Label labelnaver>Projetos que participou  
                <Forms adicionarnaverform placeholder="Projetos que participou" type="text"></Forms>
              </Label>
              <Label labelnaver>URL da foto do Naver  
                <Forms adicionarnaverform placeholder="URL da foto do Naver" type="text"></Forms>
              </Label>
            </NaversFormsContainer>
            <ButtonNaversContainer>
              <Button titlehome>Salvar</Button>
            </ButtonNaversContainer>  
          </SectionNaversContainer>
        </ContentContainer>    
        
  </HomeContainer>
    )
  }
  export default EditarNaver