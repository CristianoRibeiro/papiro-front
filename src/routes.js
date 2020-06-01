import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Avisos from './pages/Avisos'
import Recompensas from  './pages/Recompensas'
import Cargos from './pages/Cargos'
import Setor from './pages/Setor'
import Post from './pages/Post';

export default function Routes(){
  return (

      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Avisos/" exact component={Avisos} />
        <Route path="/Recompensas/" exact component={Recompensas} />
        <Route path="/Cargos/" exact component={Cargos} />
        <Route path="/Setor/" component={Setor} />
      </Switch>

  )
}
