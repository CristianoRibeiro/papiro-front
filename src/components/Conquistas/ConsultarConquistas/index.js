import React,{Component} from 'react';
import {
  Jumbotron,Form,FormGroup,Label,Input,Button,Row,Col
} from 'reactstrap';
import $ from 'jquery';

import Api from '../../../services/api';

class ConsultarConquistas extends Component{

constructor(props) {
  super(props);
  this.state = {
    NomeConquista:'',
    ValorConquista:'',
    STATUS:"Ativo",
    DataInício:'',
    DataFim:'' ,
    resultado:[]
  
  
  };

  this.handleSubmit = this.handleSubmit.bind(this);
 this.handleChangeNomeConquista=this.handleChangeNomeConquista.bind(this);
this.handleChangeValorConquista=this.handleChangeValorConquista.bind(this);
this.handleChangeSTATUS=this.handleChangeSTATUS.bind(this);
this.handleChangeDTInicio=this.handleChangeDTInicio.bind(this);
this.handleChangeDTFinal=this.handleChangeDTFinal.bind(this);


}

handleChangeNomeConquista(event) {
  this.setState({NomeConquista: event.target.value});
}
handleChangeValorConquista(event) {
  this.setState({ValorConquista: event.target.value});
}
handleChangeSTATUS(event) {
  this.setState({STATUS: event.target.value});
}
handleChangeDTInicio(event) {
  this.setState({DataInício: event.target.value});
}
handleChangeDTFinal(event) {
  this.setState({DataFim: event.target.value});
}

  async handleSubmit(event) {
    event.preventDefault();
    
const response= fetch(`http://localhost:3100/Conquista/ConsultarConquistaPorFiltro/`, {
  method: 'POST',
  body:  JSON.stringify({
    NoConquista:this.state.NomeConquista,
    ValorConquista:this.state.ValorConquista,
    DataInício:this.state.DataInício,
    DataFim:this.state.DataFim,
    STATUS:this.state.STATUS
  }),
  headers: {
      'content-type': 'application/json'
  }
}).then(response=>response.json())
.then(data => console.log(data) )


                             
    }

    render(){
      
     return(
       <>
      <h2> Consultar Conquistas </h2>
        <Jumbotron>
        <Form onSubmit={this.handleSubmit}>
        <Row> 
        <Col xs="4"><FormGroup><Label for="NoConquistaFiltro" className="mr-sm-2">Nome Conquista</Label>
        <Input type="string" name="NoConquistaFiltro" id="NoConquistaFiltro" placeholder="Filtro de busca" value={this.state.NomeConquista} onChange={this.handleChangeNomeConquista} />
      </FormGroup></Col>
        
      <Col xs="4">
      <FormGroup className="mb-6 mr-sm-6 mb-sm-2">
        <Label for="VlConquista" className="mr-sm-2">Valor de Conquista</Label>
        <Input type="VlConquista" name="VlConquista" id="VlConquista" placeholder="Filtro de busca"  value={this.state.ValorConquista} onChange={this.handleChangeValorConquista}/>
      </FormGroup>
      </Col>
      
      <Col xs="4">
      <FormGroup>
      <Label for="IsAtivo">Status: </Label>
      <Input type="select" name="select-IsAtivo" id="select-IsAtivo" value={this.state.STATUS} onChange={this.handleChangeSTATUS}>
          <option>Ativo</option>
          <option>Inativo</option>
          
        </Input>
      </FormGroup></Col>
</Row>


     <Row> 
     <Col xs="4">
     <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="DataInício" className="mr-sm-2">Data de Início:</Label>
        <Input type="date" name="DataInício" id="DataInício" placeholder="Filtro de busca"  value={this.state.DataInício} onChange={this.handleChangeDTInicio} />
      </FormGroup>
      </Col>

      <Col xs="4">
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="DataFim" className="mr-sm-2">Data de Encerramento:</Label>
        <Input type="date" name="DataFim" id="DataFim" placeholder="Filtro de busca"   value={this.state.DataFim} onChange={this.handleChangeDTFinal}/>
      </FormGroup>
      </Col>


</Row>
      
      
<br></br>
<Row>
      <Col xs="2">
      <Button type='submit' color='primary'> Pesquisar</Button>
      </Col>
      
      <Col xs="1">
      <Button type='reset' > Limpar</Button>
      </Col>

    
      </Row>
    </Form> 
        </Jumbotron>
</>
      )}    
    }  
  

    export default ConsultarConquistas;
  