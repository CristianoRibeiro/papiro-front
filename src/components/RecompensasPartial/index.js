import React,{Component}from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  ListGroup, ListGroupItem, Badge,
  CardHeader
} from 'reactstrap';

import Api from '../../services/api';

class RecompensasPartial extends Component{
  state={
      recompensas:[]
  };


 async componentDidMount(){

    const response=await Api.get('Recompensa/ObterTop3Recompensas');
    
    this.setState({
    
    recompensas:response.data
    
    })
    
    };
    
    render(){
      const{ recompensas}=this.state;

      return(<div>
        <Card>
        <CardHeader>Recompensas</CardHeader>
  
         <CardBody>
  
         {recompensas.map(recompensas => (
    <li key={recompensas.IdRecompensa}>
          {recompensas.DsRecompensa}
     
  </li>
  ))}
  
         </CardBody>
       </Card>
     </div>
  
      )}     
    } 
   

  export default RecompensasPartial;
