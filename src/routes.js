import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Avisos from './pages/Avisos'
import Recompensas from  './pages/Recompensas'
import CadastroAvisos from  './pages/Cadastros/Avisos'
import CadastroConquistas from  './pages/Cadastros/Conquistas'
import CadastroSetor from  './pages/Cadastros/Setor'
import CadastroRecompensas from  './pages/Cadastros/Recompensas'
import CadastroCargo from  './pages/Cadastros/Cargos'


export default function Routes(){
  return (

      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Avisos/" exact component={Avisos} />
        <Route path="/Recompensas/" exact component={Recompensas} />

        <Route path="/Cadastrar/Avisos/" exact component={CadastroAvisos} />
        <Route path="/Cadastrar/Recompensas/" exact component={CadastroRecompensas} />
        <Route path="/Cadastrar/Conquistas/" exact component={CadastroConquistas} />
        <Route path="/Cadastrar/Setor/" exact component={CadastroSetor} />
        <Route path="/Cadastrar/Cargo/" exact component={CadastroCargo} />


      </Switch>

  )
}
