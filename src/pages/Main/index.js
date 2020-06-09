import React, {useState, useEffect} from 'react';

import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import Post from  './../../pages/Post';

import Header from './../../components/Header';

import MgsTopico from './../../components/MgsTopico';
import UserPane from './../../components/UserPane';
import AvisosPartial from './../../components/AvisosPartial';
import RecompensasPartial from './../../components/RecompensasPartial';
import TopTopics from  './../../components/TopTopics';

import './styles.css';
import Api from '../../services/api';

function Main(props) {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    getMensagensPostadas();
  }, [mensagens]);



  async function getMensagensPostadas() {

    const response = await Api.get('/Mensagem');
    console.log(response);
    setMensagens(
      response.data
    );

  };


  return(
    <>
    <Header  {...props} />

    <Container>
    <Row>
    <Col xs="3">
        <UserPane/>
    </Col>

      <Col xs="6">
        <MgsTopico />

        <Pagination className="paginationforum" aria-label="Page navigation example">
          <PaginationItem>
              <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                1
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#" />
            </PaginationItem>
          </Pagination>



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

    </>
    );



}

export default Main;
