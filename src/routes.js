import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from "./services/auth";

import Main from './pages/Main';

import Avisos from './pages/Avisos'
import CadastroAvisos from  './pages/Cadastros/Avisos'

import Recompensas from  './pages/Recompensas'
import CadastroRecompensas from  './pages/Cadastros/Recompensas'

import CadastroConquistas from  './pages/Cadastros/Conquistas'
import ListarConquistas from  './pages/Conquistas'

import Cargos from './pages/Gestão/Cargos'

import Setores from './pages/Gestão/Setores'

import Relatorios from './pages/Gestão/Relatorios'


import Login from './pages/Login';
import SignUp from './pages/SignUp';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);


const Routes = () => {



  return (

      <Switch>
        <PrivateRoute path="/" exact component={Main} />
        {/* <PrivateRoute path="/:page" exact component={Main} /> */}

        <PrivateRoute path="/Avisos/ListarAvisos/" exact component={Avisos} />
        <PrivateRoute path="/Avisos/Cadastrar" exact component={CadastroAvisos} />

        <PrivateRoute path="/Recompensas/ListarRecompensa/" exact component={Recompensas} />
       <PrivateRoute path="/Recompensas/Cadastrar" exact component={CadastroRecompensas} />


        <PrivateRoute path= "/Conquistas/ListarConquistas/" exact component={ListarConquistas} />
        <PrivateRoute path="Conquistas/Cadastrar/" exact component={CadastroConquistas} />

        <PrivateRoute path="Cargos/" exact component={Cargos} />
        <PrivateRoute path="Setores/" exact component={Setores} />

        <PrivateRoute path="Relatorios/" exact component={Relatorios} />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="*" component={() => <h1>Page not found</h1>} />


      </Switch>

  )
}

export default Routes;
