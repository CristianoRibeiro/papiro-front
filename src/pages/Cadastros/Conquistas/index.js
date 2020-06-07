import React from 'react';
import { Container, Row, Col,Jumbotron, } from 'reactstrap';
import {Base} from './style' ;
<<<<<<< HEAD
import {CadastroConquistas} from './../../../components/CadastrarConquista'
=======
import CadastroConquista from '../../../components/Conquistas/CadastroConquista'
import ConsultarConquistas from '../../../components/Conquistas/ConsultarConquistas'

>>>>>>> 38f7685ebb8718e5ab1d0791d1013fef1737c6c4


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
