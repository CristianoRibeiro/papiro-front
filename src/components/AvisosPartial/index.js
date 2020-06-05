import React,{Component} from 'react';
import Api from '../../services/api';
import {
  Card,
  CardHeader,CardBody
} from 'reactstrap';

import {Tittle}  from './styles';

class AvisosPartial extends Component{
  state={
      avisos:[]
  };


 async componentDidMount(){

    const response=await Api.get('Aviso/ObterAvisosAtivos');
    
    this.setState({
    
    avisos:response.data
    
    })  
    
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

    export default AvisosPartial;
  