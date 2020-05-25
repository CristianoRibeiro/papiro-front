import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import Categories from './../../components/Categories'

function Main() {
  return(
    <Container>
      <Row>
        <Col xs="8">

        </Col>
        <Col xs="4">
          <Categories/>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
