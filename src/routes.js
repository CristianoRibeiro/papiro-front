import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

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

export default function Routes(){
  return (

      <Switch>
        <Route path="/" exact component={Main} />

        <Route path="/Avisos/ListarAvisos/" exact component={Avisos} />
        <Route path="/Avisos/Cadastrar" exact component={CadastroAvisos} />

        <Route path="/Recompensas/ListarRecompensas/" exact component={Recompensas} />
       <Route path="/Recompensas/Cadastrar" exact component={CadastroRecompensas} />

        
        <Route path= "/Conquistas/ListarConquistas/" exact component={ListarConquistas} />
        <Route path="Conquistas/Cadastrar/" exact component={CadastroConquistas} />

        <Route path="Cargos/" exact component={Cargos} />
        <Route path="Setores/" exact component={Setores} />

        <Route path="Relatorios/" exact component={Relatorios} />

      </Switch>

  )
}
