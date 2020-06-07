import React,{Component} from 'react';
import {
  Jumbotron,Form,FormGroup,Label,Input,Button,Row,Col
} from 'reactstrap';


class ConsultarConquistas extends Component{


 async componentDidMount(){}
    
    render(){
     return(
       <>
      <h2> Consultar Conquistas </h2>
        <Jumbotron>
        <Form>
        <Row> 
        <Col xs="4"><FormGroup><Label for="NoConquistaFiltro" className="mr-sm-2">Nome Conquista</Label>
        <Input type="string" name="NoConquistaFiltro" id="NoConquistaFiltro" placeholder="Filtro de busca" />
      </FormGroup></Col>
        
      <Col xs="4">
      <FormGroup className="mb-6 mr-sm-6 mb-sm-2">
        <Label for="VlConquista" className="mr-sm-2">Valor de Conquista</Label>
        <Input type="VlConquista" name="VlConquista" id="VlConquista" placeholder="Filtro de busca" />
      </FormGroup>
      </Col>
      
      <Col xs="4">
      <FormGroup>
      <Label for="IsAtivo">Status: </Label>
      <Input type="select" name="select-IsAtivo" id="select-IsAtivo">
          <option>Ativo</option>
          <option>Inativo</option>
          
        </Input>
      </FormGroup></Col>
</Row>


     <Row> 
     <Col xs="4">
     <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="DataInício" className="mr-sm-2">Data de Início:</Label>
        <Input type="date" name="DataInício" id="DataInício" placeholder="Filtro de busca" />
      </FormGroup>
      </Col>

      <Col xs="4">
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="DataFim" className="mr-sm-2">Data de Encerramento:</Label>
        <Input type="date" name="DataFim" id="DataIníDataFimcio" placeholder="Filtro de busca" />
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
  