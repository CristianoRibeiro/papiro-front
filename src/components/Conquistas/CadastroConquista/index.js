import React,{Component} from 'react';
import {
  Jumbotron,Form,FormGroup,Label,Input,Button,Row,Col
} from 'reactstrap';


class CadastroConquista extends Component{


 async componentDidMount(){}

    render(){
     return(
       <>
      <h2> Cadastrar Conquista</h2>
        <Jumbotron>
        <Form id='CadastrodeConquistas'>
      <FormGroup>
        <Label for="NoConquista">Nome de Conquista</Label>
        <Input type="string" name="NoConquista" id="NoConquista" placeholder="Insira o nome de cadastro para sua conquista!" />
      </FormGroup>

      <FormGroup>
        <Label for="DsConquista">Descrição de Conquista</Label>
        <Input type="string" name="DsConquista" id="DsConquista" placeholder="Insira aqui os detalhes de como realizar essa conquista!" />
      </FormGroup>

      <FormGroup>
      <Label for="ValorConquista">Valor de Conquista </Label>
      <Input type="select" name="select-vlConquista" id="select-vlConquista">
          <option>1 pt.</option>
          <option>5 pts.</option>
          <option>10 pts.</option>
          <option>15  pts.</option>
          <option>20  pts.</option>
          <option>25  pts.</option>
          <option>30  pts.</option>
          <option>60  pts.</option>
        </Input>
      </FormGroup>

      <Label for="RequisitosConquista"> Tipo de Requisitos de Conquista </Label>
      <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Up em mensagens
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Tempo de empresa
          </Label>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Participação em Plataforma
          </Label>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Por avaliação
          </Label>
        </FormGroup>
        <br></br>
        <FormGroup>
        <Label for="DuracaoPrevista">Data limite de Conquista</Label>
        <Input
          type="date"
          name="DuracaoPrevista"
          id="DuracaoPrevista"
          placeholder="Insira aqui a data limite para realização de conquista!"
        />
          </FormGroup>

      <Row>
      <Col xs="1">
      <Button type='submit' color='primary'> Salvar</Button>
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

    export default CadastroConquista;
