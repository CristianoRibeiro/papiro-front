import React from 'react';
import { Container, Row, Col,Jumbotron, } from 'reactstrap';
import {Base} from './style' ;
import CadastroConquista from '../../../components/Conquistas/CadastroConquista'
import ConsultarConquistas from '../../../components/Conquistas/ConsultarConquistas'




function Conquistas() {
  return(



<Col xs="12" >
<Row>
<Container>
<CadastroConquista>
</CadastroConquista>

  </Container>

<Container>

<ConsultarConquistas></ConsultarConquistas>

</Container>
</Row>
</Col>
  );
}

export default Conquistas;
