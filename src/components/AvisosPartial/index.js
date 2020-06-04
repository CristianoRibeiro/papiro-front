import React,{Component} from 'react';
import Api from '../../services/api';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  ListGroup, ListGroupItem, Badge,
  CardHeader
} from 'reactstrap';

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
        <CardHeader>Avisos</CardHeader>
  
         <CardBody>

         {avisos.map(avisos => (
    <li key={avisos.IdAviso}>
          {avisos.Aviso}
     
  </li>
))}

         </CardBody>
       </Card>
     </div>

      )}     
    }

    export default AvisosPartial;
  