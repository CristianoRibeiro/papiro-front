import React,{Component} from 'react';
import {  Row, Col,Jumbotron,Button,Card,Container} from 'reactstrap';
import {  parseISO,format} from 'date-fns';
import Api from '../../services/api';


import {
  Pane
} from './style';

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
<Col xs="12" >
<Col xs="2" >
<Container>
  </Container>
</Col>
<Col xs="8" >



<Container>
<Jumbotron>
<h2> Avisos </h2>
<Row>
{avisos.map(avisos => (<Pane key={avisos.IdAvisos}>
<Card>
<h3>{avisos.TituloAviso}</h3>
<Card className='cardinterno'><p>{avisos.Aviso}</p></Card>
<label>Data de Cadastro: {avisos.createdAt}
</label>
</Card>
<br></br>
<br></br>
</Pane>     
    ))}   


<Col xs="2" >
<Container>
  </Container>
</Col>
</Row>
</Jumbotron>
  </Container>

</Col>
</Col>
  );
  
    }
  }

export default Avisos
