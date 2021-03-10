import React, {useState,useEffect} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Text from '../Text'
import Icons from '../Icons'
import DefaultAvatar from '../../assets/Images/default-avatar.png'
import DeleteComponent from '../DeleteComponent'

import api from '../../services/api'
import {Row} from '../Grid'


function NaverCards(){

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
  <React.Fragment>
      {navers.map((naver) => (
      <ComponentContainer key={naver.id} flexDirection="column" justifyContent='flex-start'>    
            <Icons avatarnaver src={naver.url} onError={(e)=>{e.target.onerror = null; e.target.src=DefaultAvatar}}></Icons>
              <Text fontWeight="large" fontSize="medium" lineHeight="16px">
                {naver.name}
              </Text>
              <Text fontWeight="medium" fontSize="medium" lineHeight="24px">
                {naver.job_role}
              </Text>
            <Row display="flex" justifyContent="flex-start">
                <DeleteComponent naverId={naver.id}/>
              <Link to={{
                pathname: `/naver/editar/${naver.id}`}} style={{ textDecoration: 'none' }}>
                  <CreateIcon style={{ color: 'black' }}/>
              </Link>
            </Row>               
      </ComponentContainer>
      ))}

      
      
    </React.Fragment>     
    )
}

const ComponentContainer = styled(Row)`
  width: 100%;
  max-width: 1200px;
`

const ModalComponentOutside = styled.div `
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  z-index: 1;
  display:flex;
  justify-content: center;
  align-items: center;
`
const ModalComponentCard = styled.div `

`

export default NaverCards