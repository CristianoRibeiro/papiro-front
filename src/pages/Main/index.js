import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import SideNav from './../../components/SideNav';
import UserPane from './../../components/UserPane';
import Categories from './../../components/Categories';


import Api from '../../services/api';

function Main() {
  return(
    <Container>
      <Row>
        <Col xs="4">
        <UserPane/>
        <SideNav/>
        </Col>
        <Col xs="5">
          
        </Col>
        <Col xs="3">
        <Categories/>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
