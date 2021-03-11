import './wdyr'
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import {AuthProvider} from './context/authContext'
import {BrowserRouter} from 'react-router-dom'
import GlobalStyle from './theme/globalStyle';


ReactDOM.render(
  <React.StrictMode>        
    <BrowserRouter>    
      <AuthProvider value={{ authenticated: false }}>
        <GlobalStyle/>                
        <Routes />            
      </AuthProvider>      
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);
