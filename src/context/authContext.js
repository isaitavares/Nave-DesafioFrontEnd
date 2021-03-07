import React, {createContext} from 'react';
import useAuth from './hooks/useAuth'

const Context = createContext();


const AuthProvider = ({ children }) => {
    
    const { authenticated, loading, handleLogin, handleLogout, email, setEmail, password, setPassword } = useAuth()

    return (
        <Context.Provider value={{ authenticated, handleLogin, loading, handleLogout, email, setEmail, password, setPassword }}>
            { children }
        </Context.Provider>
    );
}

export { Context, AuthProvider };
