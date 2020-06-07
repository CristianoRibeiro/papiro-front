import React from 'react';
import { Container, Row, Col,Jumbotron, } from 'reactstrap';
import ConsultarComponentes from  './../../components/Conquistas/ConsultarConquistas'
import Api from '../../services/api';

function ListarConquistas() {
  return(

<Col xs="12" >
<Row>
<Container>
<ConsultarComponentes></ConsultarComponentes>
  </Container>


</Row>
</Col>
  );
}

export default ListarConquistas;
