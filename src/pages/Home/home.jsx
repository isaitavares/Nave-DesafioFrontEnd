import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {Column} from '../../components/Grid'
import { ContentContainer, HomeContainer, PageTitleContainer, NaversContainer } from '../../components/containers'
import Header from '../../components/Header'
import Button from '../../components/buttons'
import Text from '../../components/Texts'
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
<HomeComponent alignItems='center'>
  <Header />
  <PageTitleContainer>
    <Text>Navers</Text>
    <Link to='/naver/adicionar' style={{ textDecoration: 'none' }}>
    <Button titlehome>Adicionar Naver</Button>
    </Link> 
  </PageTitleContainer>
    <ContentContainer home>
      <NaverCards />          
    </ContentContainer>
</HomeComponent>
  )
}

const HomeComponent = styled(Column)``

export default Home
