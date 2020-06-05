import React,{Component} from 'react';
import Api from '../../services/api';
import {
  Card,
  CardHeader,CardBody
} from 'reactstrap';

import {Tittle}  from './styles';

class CadastroConquista extends Component{
  state={
    
  };


 async componentDidMount(){

    
    };
    
    render(){
      const{ avisos}=this.state;
      return(<div>
        <Card>
        <CardHeader>   <Tittle> Avisos</Tittle></CardHeader>
  
         <CardBody>

         {avisos.map(avisos => (
    <li key={avisos.IdAviso}>
          {avisos.TituloAviso}
     
  </li>
))}

         </CardBody>
       </Card>
     </div>

      )}     
    }

    export default CadastroConquista;
  