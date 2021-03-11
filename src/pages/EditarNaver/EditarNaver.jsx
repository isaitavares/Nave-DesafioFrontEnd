import React, {useState,useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styled from 'styled-components'
import moment from 'moment'
import { Link } from 'react-router-dom'

import 
{Alert,
Header,
Icons,
HomeContainer,
ContentContainer,
NaversFormsContainer,
PageTitleNaversContainer,
SectionNaversContainer,
ButtonNaversContainer,
Button,
Input,
Text,
Label} from '../../components'
import api from '../../services/api'
import IconLOGO from '../../assets/Images/logo-nave.png'


function EditarNaver () {

  const history = useHistory()
  const { id } = useParams()
  const [alert, setAlert] = useState(false)
  const [naver, setNaver] = useState({})
  const [formData, setFormData] = useState({
    name: '',
    job_role: '',
    birthdate: '',
    admission_date: '',
    project: '',
    url: '',
  })

  useEffect(() => {
    const fetchNavers = async () => {
      try {
        const { data } = await api.get(`/navers/${id}`)
        setNaver(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchNavers()
  }, [id])

  useEffect(() => {
    setFormData({
      name: naver.name,
      job_role: naver.job_role,
      birthdate: moment(naver.birthdate).format('DD/MM/YYYY'),
      admission_date: moment(naver.admission_date).format('DD/MM/YYYY'),
      project: naver.project,
      url: naver.url,
    })
  }, [naver])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { name, job_role, birthdate, admission_date, project, url } = formData

    const data = {
      name,
      job_role,
      birthdate,
      admission_date,
      project,
      url,
    }

    try {
      console.log(data)
      await api.put(`/navers/${naver.id}`, data)
      setAlert(true)
    } catch (err) {
      console.log(err)
      await toast.error("Erro na edição",{
        position: "top-center",
        hideProgressBar: false,
        autoClose: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
    return (
  <HomeContainer>

    <ToastContainer style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100px'}} />
    
    <Header>
      <Link to='/home' style={{ textDecoration: 'none' }}>
        <Icons header src={IconLOGO}/>
      </Link>
        <Button header>Sair</Button>
    </Header>
        <ContentContainer addeditnaver>
          <SectionNaversContainer>
            <PageTitleNaversContainer>
              <Link to='/home' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <BackIcon />
              </Link>
              <Text fontWeight="600" fontSize="mediumlarge">Editar Naver</Text>
            </PageTitleNaversContainer>  
            <NaversFormsContainer>
              <Label fontWeight="600" textAlign="left" fontSize="small">Nome
                <Input
                adicionarnaverform
                placeholder="Nome"
                name='name'
                type="text"
                defaultValue={formData.name}
                onChange={handleInputChange}
                 />
              </Label>
              <Label fontWeight="600" textAlign="left" fontSize="small">Cargo  
                <Input
                adicionarnaverform
                placeholder="Cargo"
                name='job_role'
                type="text"
                defaultValue={formData.job_role}
                onChange={handleInputChange} />
              </Label>
              <Label fontWeight="600" textAlign="left" fontSize="small">Idade  
                <Input
                adicionarnaverform
                placeholder="Idade"
                name='birthdate'
                type="text"
                defaultValue={formData.birthdate}
                onChange={handleInputChange} />
              </Label>
              <Label fontWeight="600" textAlign="left" fontSize="small">Tempo de Empresa  
                <Input
                adicionarnaverform
                placeholder="Tempo de Empresa"
                name='admission_date'
                type="text"
                defaultValue={formData.admission_date}
                onChange={handleInputChange} />
              </Label>
              <Label fontWeight="600" textAlign="left" fontSize="small">Projetos que participou  
                <Input
                adicionarnaverform
                placeholder="Projetos que participou"
                name="project"
                type="text"
                defaultValue={formData.project}
                onChange={handleInputChange} />
              </Label>
              <Label fontWeight="600" textAlign="left" fontSize="small">URL da foto do Naver  
                <Input
                adicionarnaverform
                placeholder="URL da foto do Naver"
                name="url"
                type="text"
                defaultValue={formData.url}
                onChange={handleInputChange} />
              </Label>
            </NaversFormsContainer>
            <ButtonNaversContainer>
              <Button
              color="white"
              bg="black"
              width="176px"
              height="40px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={handleSubmit}>Salvar</Button>
            </ButtonNaversContainer>  
          </SectionNaversContainer>
        </ContentContainer>
        {alert && (
          <Alert
            title='Naver Atualizado'
            message='Naver atualizado com sucesso!'
            closeIcon='true'
            changeAlert={() => {
              history.push('/')
            }}
          />
      )}         
        
  </HomeContainer>
    )
  }

  const BackIcon = styled(ArrowBackIosIcon) `
  && {
      color: #212121;
  }
`;
  export default EditarNaver