import React, {Component} from 'react';

import { Container, Row, Col } from 'reactstrap';

import Post from  './../../pages/Post';

import MgsTopico from './../../components/MgsTopico';
import UserPane from './../../components/UserPane';
import AvisosPartial from './../../components/AvisosPartial';
import RecompensasPartial from './../../components/RecompensasPartial';
import TopTopics from  './../../components/TopTopics';


import Api from '../../services/api';

class Main extends Component {
  state = {
    mensagens : []
  }


  componentDidMount() {
    this.getMensagensPostadas();
  }

  getMensagensPostadas  = async () => {

    const response = await Api.get('Mensagem/ObterTop3Mensagens');

    this.setState({
      mensagens: response.data
    })

  }

render(){

  const {mensagens} = this.state;
  return(

    <Container>
    <Row>
    <Col xs="3">
        <UserPane/>
    </Col>

      <Col xs="6">
        <MgsTopico />
        <Post mensagem={mensagens} />
      </Col>
      <Col xs="3">
          <AvisosPartial/>
          <br></br>
          <br></br>
          <RecompensasPartial/>
          <br></br>
          <br></br>

          <TopTopics/>
      </Col>
      </Row>
    </Container>


      );

};

}

export default Main;
