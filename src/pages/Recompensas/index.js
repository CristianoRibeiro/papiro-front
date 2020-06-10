import React from 'react';
import { Container, Row, Col,Jumbotron, } from 'reactstrap';
import ListarRecompensas from '../../components/Recompensas/ListarRecompensas';
import RecompensaContempladoPartial from '../../components/Recompensas/RecompensaUltimoContemplado';

function Recompensas() {
  
  return(

<Col xs="12" >
<Row>

<Col xs="7" >
<Container>
<ListarRecompensas></ListarRecompensas>
  </Container>
</Col>

<Col xs='5'>
<Container>
  <RecompensaContempladoPartial></RecompensaContempladoPartial>
</Container>
</Col>
</Row>

</Col>

  );
}

export default Recompensas;
