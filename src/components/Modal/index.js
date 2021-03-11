import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'
import CreateIcon from '@material-ui/icons/Create';
import moment from 'moment'

import {DeleteComponent,Text} from '../'
import api from '../../services/api'
import DefaultAvatar from '../../assets/Images/default-avatar.png'

import { Row, Column} from '../Grid'

const Modal = ({naverId, CloseModal}) => {
    const [naver, setNaver] = useState([])

    useEffect(() => {
        async function fetchNavers() {
          try {
            const { data } = await api.get(`/navers/${naverId}`)
            setNaver(data)
          } catch (err) {
            console.log(err)
          }
        }
        fetchNavers()
      }, [naverId])


        return(
            <ModalComponentOutside>
                <ModalComponentCard>
                    <CustomRow>
                        <AvatarNaver src={naver.url} onError={(e)=>{e.target.onerror = null; e.target.src=DefaultAvatar}}/>
                    </CustomRow>
                    <Column width={1}>
                    <Row display='flex' width={1} justifyContent='flex-end' pr='21px' pt='21px'>
                        <CloseIconStyled onClick={CloseModal}/>
                    </Row>
                        <CustomRow ml='30px' height={1}>
                            <CustomColumn>
                                <Text fontWeight='600' fontSize='mediumlarge' mb='15px' lineHeight='24px'>{naver.name}</Text>
                                <Text fontWeight='400' fontSize='small' mb='24px' lineHeight='24px'>{naver.job_role}</Text>
                                <Text fontWeight='600' fontSize='mediumlarge' mb='15px' lineHeight='24px'>Idade</Text>
                                <Text fontWeight='400' fontSize='small'mb='24px' lineHeight='24px'>{moment().diff(naver.birthdate, 'years')} anos</Text>
                                <Text fontWeight='600' fontSize='mediumlarge' mb='15px' lineHeight='24px'>Tempo de empresa</Text>
                                <Text fontWeight='400' fontSize='small' lineHeight='24px' mb='24px'>{moment().diff(naver.admission_date, 'years')} anos</Text>
                                <Text fontWeight='600' fontSize='mediumlarge' mb='15px' lineHeight='24px'>Projetos que participou</Text>
                                <Text fontWeight='400' fontSize='small' mb='24px' lineHeight='24px'>{naver.project}</Text>
                                    <CustomColumn justifyContent='flex-end' display='flex' height={1} width={1}>
                                        <Row mb='27px'>                                            
                                            <DeleteComponent naverId={naver.id}/>
                                            <Link to={{
                                                pathname: `/naver/editar/${naver.id}`}} style={{ textDecoration: 'none' }}>
                                                <CreateIcon style={{ color: 'black' }}/>
                                            </Link>
                                        </Row>
                                    </CustomColumn>
                            </CustomColumn>
                        </CustomRow>
                    </Column>
                </ModalComponentCard>    
            </ModalComponentOutside>
        )
}
const ModalComponentOutside = styled.div `
  width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    z-index: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
`
const ModalComponentCard = styled.div `
    height:80%;
    width: 80%;
    background-color: #fff;
    display:flex;
    flex-direction: row;

`

const CloseIconStyled = styled(CloseIcon) `
&& {
    color: #212121;
    cursor: pointer;
    :hover {
        color: #313030 !important;
  }
}
`;

const AvatarNaver = styled.img`
    display:flex;
    height:100%;
    width:100%;
`
const CustomRow = styled(Row)`
    width:70%;
    height:100%;
`
const CustomColumn = styled(Column)`
    height:100%;
    width:100%;
`

export default Modal