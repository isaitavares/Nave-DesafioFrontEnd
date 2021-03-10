import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Header from '../../components/Header'
import Icons from '../../components/Icons'
import IconLOGO from '../../assets/Images/logo-nave.png'
import { HomeContainer, ContentContainer, NaversFormsContainer, PageTitleNaversContainer, SectionNaversContainer, ButtonNaversContainer } from '../../components/containers'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import Text from '../../components/Text'
import Label from '../../components/Label'
import api from '../../services/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from '../../components/Alert'

function AdicionarNaver () {

  const history = useHistory();
  const [alert, setAlert] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    job_role: '',
    birthdate: '',
    admission_date: '',
    project: '',
    url: '',
  })

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
      await api.post('/navers', data)
      setAlert(true)
    } catch (err) {
      console.log(err)
      await toast.error("Erro no Cadastro.",{
        position: "top-center",
        hideProgressBar: false,
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

    return (
      
  <HomeContainer>

    <ToastContainer />

    <Header>
      <Link to='/home' style={{ textDecoration: 'none' }}>
        <Icons header src={IconLOGO}/>
      </Link>
        <Button color='blue' backgroundColor="black">Sair</Button>
    </Header>    
        <ContentContainer addeditnaver>        
          <SectionNaversContainer>
            <PageTitleNaversContainer>
              <Link to='/home' style={{ textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
                <BackIcon/>
              </Link>
              <Text fontWeight="600" fontSize="mediumlarge" >Adicionar Naver</Text>
            </PageTitleNaversContainer>  
            <NaversFormsContainer>
              <Label textAlign="left" fontWeight="600" fontSize="small">Nome
                <Input
                adicionarnaverform
                placeholder="Nome"
                name="name"
                type="text"
                required
                onChange={handleInputChange} />
              </Label>
              <Label textAlign="left" fontWeight="600" fontSize="small">Cargo  
                <Input
                adicionarnaverform
                placeholder="Cargo"
                name="job_role"
                type="text"
                onChange={handleInputChange} />
              </Label>
              <Label textAlign="left" fontWeight="600" fontSize="small">Idade  
                <Input
                adicionarnaverform
                placeholder="Idade"
                name="birthdate"
                type="text"
                onChange={handleInputChange} />
              </Label>
              <Label textAlign="left" fontWeight="600" fontSize="small">Tempo de Empresa  
                <Input
                adicionarnaverform
                placeholder="Tempo de Empresa"
                name="admission_date"
                type="text"
                onChange={handleInputChange} />
              </Label>
              <Label textAlign="left" fontWeight="600" fontSize="small">Projetos que participou  
                <Input
                adicionarnaverform
                placeholder="Projetos que participou"
                name="project"
                type="text"
                onChange={handleInputChange} />
              </Label>
              <Label textAlign="left" fontWeight="600" fontSize="small">URL da foto do Naver  
                <Input
                adicionarnaverform
                placeholder="URL da foto do Naver"
                name="url"
                type="text"
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
              onClick={handleSubmit} >Salvar</Button>
            </ButtonNaversContainer> 
          </SectionNaversContainer>          
        </ContentContainer>
        {alert && (
          <Alert
            title='Naver Criado'
            message='Naver criado com sucesso'
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
  export default AdicionarNaver