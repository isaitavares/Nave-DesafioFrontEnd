import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import { ContentContainer } from '../../components/Containers'
import LogoNave from '../../components/Icons'
import IconLOGO from '../../assets/logo-nave.png'

function home () {
  return (
    <ContentContainer>
        <LogoNave src={IconLOGO}/> 
    </ContentContainer>
  )
}
export default home
