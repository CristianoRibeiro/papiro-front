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

<Col xs="12">
<Row>
<Col xs="2">
<Container>
<UserPane/>
    <SideNav/>
    </Container>
  </Col>

  <Col xs="7">
<Container>


    </Container>
  </Col>


  
  <Col xs="3">
<Container>

<AvisosPartial/>
        <br></br>
        <br></br>
        <RecompensasPartial/>
        <br></br>
        <br></br>

        <TopTopics/>


    </Container>
  </Col>
  </Row>
</Col>

  
  );
}

export default Main;
