import React from 'react';
import { BrowserRouter, Route }  from 'react-router-dom';
import Login from './routes/Login';
import Home from './routes/Home';
import RouteHandler from './routes/RouterHandler'
import AdicionarNaver from './routes/AdicionarNaver'
import EditarNaver from './routes/EditarNaver'
function Routes(){
    return(
        <BrowserRouter>
            <Route path='/login' exact component={Login} />
            <Route path='/home' exact component={Home} />
            <Route path='/adicionarnaver' exact component={AdicionarNaver} />
            <Route path='/editarnaver' exact component={EditarNaver} />
            <Route path='/' exact component={RouteHandler} />
        </BrowserRouter>            
    );
}

export default Routes