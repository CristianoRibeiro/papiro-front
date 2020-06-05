import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Pane}  from './styles';
import {Link}  from 'react-router-dom';
import SideNav from './../../components/SideNav';

import Api from '../../services/api';

class UserPane extends Component{
    state={
        user:"",
        pontuacao:""
    };

    async componentDidMount(){
    
        const Id='1';
        const response=await Api.get("User/Username/Id");

        this.setState({
        
        user:response.data
        
        
        })
        
        console.log(this.state.user);
        };


render(){
    const{ user}=this.state;
return (

    <Pane>

<div className="card">
    <Container>
    <Row>
      <Col xs="4">
      <img scr="teste-de-liderança.png"/>
      </Col>
      <Col xs="8">
      <div className="userName">
      
      <h3>{user}    Pontuação:45 </h3>

        </div>
      </Col>
 
    </Row>
    <Row>
        <SideNav></SideNav>
        </Row>
  </Container>
  </div>
</Pane>

);

    
}
}

export default UserPane;

