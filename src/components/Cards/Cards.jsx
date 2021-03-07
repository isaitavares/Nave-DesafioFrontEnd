import React, {useState,useEffect} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Text from '../Texts'
import Icons from '../Icons'
import DefaultAvatar from '../../assets/Images/default-avatar.png'
import { Link } from 'react-router-dom'
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
      <Row key={naver.id} width='281px' margin='31px' gridRowGap='10px' flexDirection="column">    
            <Icons avatarnaver src={naver.url} onError={(e)=>{e.target.onerror = null; e.target.src=DefaultAvatar}}></Icons>
            <Text naversname>{naver.name}</Text>
            <Text naversjobtitle>{naver.job_role}</Text>
            <DeleteIcon cursor='pointer'/>
          <Link to='/naver/editar' style={{ textDecoration: 'none' }}>
              <CreateIcon style={{ color: 'black' }}/>
          </Link>
      </Row>
      ))}
    </React.Fragment>     
    )
}

export default NaverCards