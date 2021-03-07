import React, {useState} from 'react'
import Header from '../../components/Header'
import Icons from '../../components/Icons'
import IconLOGO from '../../assets/Images/logo-nave.png'
import { HomeContainer, ContentContainer, NaversFormsContainer, PageTitleNaversContainer, SectionNaversContainer, ButtonNaversContainer } from '../../components/containers'
import Button from '../../components/buttons'
import Forms from '../../components/forms'
import { Link } from 'react-router-dom'
import ReturnButtonIcon from '../../assets/Images/arrow-icon.png'
import Text from '../../components/Texts'
import Label from '../../components/Labels'
import api from '../../services/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdicionarNaver () {

  

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

    const CustomToast = ({ closeToast }) => {
      return(
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , width: '200px'}}>
          <p>Erro no Cadastro.</p>
          <br />
          <button onClick={closeToast}>OKAY!</button>
        </div>
      )
    }

    try {
      await api.post('/navers', data)
      await toast.success("Cadastrou",{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log(err)
      await toast.error(<CustomToast/>,{
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
              <Link to='/home' style={{ textDecoration: 'none' }}>
                <Icons src={ReturnButtonIcon} alt="ReturnButton" ReturnButton />
              </Link>
              <Text adicionarnavers>Adicionar Naver</Text>
            </PageTitleNaversContainer>  
            <NaversFormsContainer>
              <Label labelnaver>Nome
                <Forms
                adicionarnaverform
                placeholder="Nome"
                name="name"
                type="text"
                onChange={handleInputChange}>

                </Forms>
              </Label>
              <Label labelnaver>Cargo  
                <Forms
                adicionarnaverform
                placeholder="Cargo"
                name="job_role"
                type="text"
                onChange={handleInputChange}></Forms>
              </Label>
              <Label labelnaver>Idade  
                <Forms
                adicionarnaverform
                placeholder="Idade"
                name="birthdate"
                type="text"
                onChange={handleInputChange}></Forms>
              </Label>
              <Label labelnaver>Tempo de Empresa  
                <Forms
                adicionarnaverform
                placeholder="Tempo de Empresa"
                name="admission_date"
                type="text"
                onChange={handleInputChange}></Forms>
              </Label>
              <Label labelnaver>Projetos que participou  
                <Forms
                adicionarnaverform
                placeholder="Projetos que participou"
                name="project"
                type="text"
                onChange={handleInputChange}></Forms>
              </Label>
              <Label labelnaver>URL da foto do Naver  
                <Forms
                adicionarnaverform
                placeholder="URL da foto do Naver"
                name="url"
                type="text"
                onChange={handleInputChange}></Forms>
              </Label>
            </NaversFormsContainer>
            <ButtonNaversContainer>
              <Button titlehome onClick={handleSubmit} >Salvar</Button>
            </ButtonNaversContainer> 
          </SectionNaversContainer>          
        </ContentContainer>            
  </HomeContainer>
    )
  }
  export default AdicionarNaver