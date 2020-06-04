import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import SideNav from './../../components/SideNav';
import UserPane from './../../components/UserPane';
import AvisosPartial from './../../components/AvisosPartial';
import RecompensasPartial from './../../components/RecompensasPartial';
import TopTopics from  './../../components/TopTopics';

import Api from '../../services/api';

function Main() {
  return(
    <Container>
      <Row>
        <Col xs="2">
        <UserPane/>
        <SideNav/>
        </Col>
        <Col xs="6">
          
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
}

export default Main;
