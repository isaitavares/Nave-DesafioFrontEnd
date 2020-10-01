import React from 'react';
import { BrowserRouter, Route }  from 'react-router-dom';
import login from './routes/Login/login';
import home from './routes/Home/home';

function Routes(){
    return(
        <BrowserRouter>
            <Route path='/login' exact component={login} />
            <Route path='/home' exact component={home} />
        </BrowserRouter>            
    );
}

export default Routes