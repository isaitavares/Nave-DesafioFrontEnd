import React, {useContext} from 'react';
import { Context } from '../context/authContext'
import { Switch, Route, Redirect }  from 'react-router-dom';
import { Login, Home, AdicionarNaver, EditarNaver } from '../pages';
import {Notfound,LoadingComponent,Text,Row} from '../components'

function CustomRoute({ isPrivate, ...rest }) {
    const { authenticated, loading } = useContext(Context);

    
    if (loading){
        return (
            <Row>
                <LoadingComponent/>
                <Text fontSize='large' fontWeight='600'>Carregando...</Text>
            </Row>
            )
    }

    if (isPrivate && !authenticated) {
        return <Redirect to="/login"/>
    }

    return <Route {...rest} />
}


function Routes(){
    return(
        <Switch>
            <CustomRoute path='/login' exact component={Login} />
            <CustomRoute isPrivate path='/home' exact component={Home} />
            <CustomRoute isPrivate path='/naver/adicionar' exact component={AdicionarNaver} />
            <CustomRoute path={`/naver/editar/:id`} exact component={EditarNaver} />

            <CustomRoute exact path='/'><Redirect to='/home'/></CustomRoute>
            <CustomRoute component={Notfound} />
       </Switch>
                    
    );
}

export default Routes