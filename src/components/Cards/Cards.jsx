import React, {useState,useEffect} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Text from '../Text'
import Icons from '../Icons'
import Modal from '../Modal'
import DefaultAvatar from '../../assets/Images/default-avatar.png'
import DeleteComponent from '../DeleteComponent'

import api from '../../services/api'
import {Row} from '../Grid'


function NaverCards(){

    const [navers, setNavers] = useState([])
    const [isExpandedCard, setExpandedCard] = useState(null)
    const [naverId, setNaverId] = useState('')

    const handleExpand = (id) => {
        setExpandedCard(id)
        setNaverId(id)
    }
    function handleExpandClose () {
      return(
        setExpandedCard(false)
      )
    }

  
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
            <Icons avatarnaver src={naver.url} onError={(e)=>{e.target.onerror = null; e.target.src=DefaultAvatar}} onClick={() => handleExpand(naver.id)}></Icons>
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

{isExpandedCard && (
        <Modal CloseModal={handleExpandClose} naverId={naverId} />
        
      )}

      
      
    </React.Fragment>     
    )
}

const ComponentContainer = styled(Row)`
  width: 100%;
  max-width: 1200px;
`

export default NaverCards