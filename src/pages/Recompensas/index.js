import React from 'react';
import { Container, Row, Col,Jumbotron, } from 'reactstrap';
import ListarRecompensas from '../../components/Recompensas/ListarRecompensas';
import Api from '../../services/api';

function Recompensas() {
  return(

<Col xs="12" >
<Row>

<Col xs="8" >
<Container>
<ListarRecompensas></ListarRecompensas>
  </Container>

</Col>
</Row>

</Col>

  );
}

export default Recompensas;
