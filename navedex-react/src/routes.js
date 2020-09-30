import React from 'react';
import { BrowserRouter, Route }  from 'react-router-dom';
import login from './routes/Login/login';

function Routes(){
    return(
        <BrowserRouter>
            <Route path='/' exact component={login} />
        </BrowserRouter>            
    );
}

export default Routes