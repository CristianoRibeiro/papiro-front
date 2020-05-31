import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import SideNav from './../../components/SideNav';
import Categories from './../../components/Categories';

function Main() {
  return(
    <Container>
      <Row>
        <Col xs="4">
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
