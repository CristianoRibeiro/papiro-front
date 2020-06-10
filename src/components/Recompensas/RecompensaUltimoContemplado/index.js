import React,{Component} from 'react';
import {
  Jumbotron,Card,Container,Row,Col
} from 'reactstrap';
import Api from '../../../services/api'
import { faCrown,faGift,faLevelUpAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class RecompensaContempladoPartial extends Component{
  state={

        NomeUsuario:'',
        TituloRecompensa:''

};

async componentDidMount(){

  const responseRecompensa=await Api.get('/Recompensa/UltimaRecompensaConcluida');
  const usuario=await Api.get('/User/Username/Id')

  this.setState({

  NomeUsuario:usuario.data,
  TituloRecompensa:responseRecompensa.data

  })

  };

    render(){
      const{ NomeUsuario}=this.state;
      const {TituloRecompensa}=this.state
     return(
       <>
        <Jumbotron>
        <h2>Último Contemplado <hr></hr> </h2>
        
        <Card>
        <Container>
    <Row>
      <Col xs="4">
   
                    <img src="" alt="" />
            
      </Col>
      <Col xs="8">
      <spam>{NomeUsuario}</spam>

      <h4>{TituloRecompensa}</h4>

      </Col>

    </Row>
    <Row>
        </Row>
  </Container>


        </Card>



        </Jumbotron>
</>
      )}    
    }  
  

    export default RecompensaContempladoPartial;
  