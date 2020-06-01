import React,{Component} from 'react';
import { Container, Row, Col,Jumbotron} from 'reactstrap';
import {Msg} from './style';
import Api from '../../services/api';

class Avisos extends Component{
state={
    avisos:[]
};

async componentDidMount(){

const response=await Api.get('Aviso');

this.setState({

avisos:response.data

})

};

render(){
    const{ avisos}=this.state;
    return(
    <Container>
      <Row>
        <Col xs="4">
            
        </Col>
     
        <Col xs="5" background-color='red'>
    
        <Msg>
        <card>
        

    {avisos.map(avisos => (
    <li key={avisos.IdAviso}>
          {avisos.Aviso}
     
  </li>
))}

</card>
</Msg>
        </Col>
        <Col xs="3">
       
        </Col>
      </Row>
    </Container>

)

}

}

export default Avisos;