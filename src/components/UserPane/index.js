import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Pane}  from './styles';
import {Link}  from 'react-router-dom';
import SideNav from './../../components/SideNav';

import Api from '../../services/api';
import avatar from './../../images/user.png';

class UserPane extends Component{
    state={
        Usuario:"",
        Pontuacao:""
    };

    async componentDidMount(){

       
        this.setState({

        Usuario:localStorage.getItem("@papiro-nomeUsuario"),
        Pontuacao:localStorage.getItem("@papiro-Pontuacao"),
        TipoUsuario:localStorage.getItem("@papiro-CdTipoUsuario"),


        })

        console.log(this.state.user);
        };


render(){
    const{ Usuario,Pontuacao}=this.state;
return (

    <Pane>

<div className="card">
    <Container>
    <Row>
      <Col xs="4">
      <img src={avatar} alt="" />
      </Col>
      <Col xs="8">
      <div className="userName"> 

      <h3>{Usuario} Pontuacao: {Pontuacao} </h3>

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

