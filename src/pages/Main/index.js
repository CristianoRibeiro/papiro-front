import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import SideNav from './../../components/SideNav';
import Categories from './../../components/Categories';
import Post from '../Post'

import Api from '../../services/api';

function Main() {
  return(
    <Container>
      <Row>
        <Col xs="4">
        <SideNav/>
        </Col>
        <Col xs="5">
          <Post />
        </Col>
        <Col xs="3">
        <Categories/>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
