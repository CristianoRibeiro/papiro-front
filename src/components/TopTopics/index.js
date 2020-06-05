import React,{Component} from 'react';
import Api from '../../services/api';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  ListGroup, ListGroupItem, Badge,
  CardHeader
} from 'reactstrap';

class TopTopics extends Component{
  state={
      topmensagens:[]
  };


 async componentDidMount(){

    const response=await Api.get('Mensagem/ObterTop3Mensagens');
    
    this.setState({
    
      topmensagens:response.data
    
    })
    
    };
    
    render(){
      const{ topmensagens}=this.state;
      return(<div>
        <Card>
        <CardHeader>Top Topics</CardHeader>
  
         <CardBody>

         {topmensagens.map(topmensagens => (
    <li key={topmensagens.IdMensagem}>
          {topmensagens.TituloMensagem}
     
  </li>
))}

         </CardBody>
       </Card>
     </div>

      )}     
    }

    export default TopTopics;
  