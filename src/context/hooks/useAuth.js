import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const credentials = {
        email,
        password
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
            if(token){
                api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
                setAuthenticated(true);
            }

            setLoading(false);
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault()
            try {
                const { data: { token } } = await api.post('/users/login', credentials)
                    localStorage.setItem('token', JSON.stringify(token));
                    api.defaults.headers.Authorization = `Bearer ${token}`;
                    setAuthenticated(true);
                    console.log(token);        
            } catch (error) {
                console.log(error)
                alert('E-mail ou Senha Incorreta.')
            }       
    }

    const handleLogout = async () => {

            setAuthenticated(false);
                localStorage.removeItem('token');
                api.defaults.headers.Authorization = undefined;             
                history.push('/login');                
    }

    return { authenticated, handleLogin, handleLogout, loading, email, setEmail, password, setPassword } 
}