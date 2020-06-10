import React, { useState } from 'react';
import { Button, Row, Col, } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
faLightbulb
} from '@fortawesome/free-solid-svg-icons';

import { Form, Input ,Textarea } from '@rocketseat/unform';


import {
  Container,
  Userinfo,
  Avatar,
  TextComent,
  TextComentarios,
  Opcoes
 } from './styles';

import avatar from './../../images/user.png';

import api from '../../services/api';

import { getIdUsuario } from "./../../services/auth";
import * as Yup from 'yup';

function Comentar() {
  const [error, setError] = useState('');



  const schema = Yup.object().shape({
    titulo: Yup.string().required('O titulo do tópico é obrigatório'),
    mensagem: Yup.string().required('Digite sua mensagem do tópico.')
  });



  async function handlerSubmit(data, {setSubmitting, resetForm}){
    try {


      let response = await api.post('/Mensagem', {
        TituloMensagem: data.titulo,
        DsMensagem: data.mensagem,
        CdUsuario: getIdUsuario()
      });
      resetForm({})

    } catch (error) {
      setSubmitting(false)
      setError('Error com a conexão!')

    }
  }


  return(

    <Row>
      <Col xs="2">
        <Userinfo>
          <Avatar>
              <img src={avatar} alt="" />
          </Avatar>
        </Userinfo>
      </Col>
      <Col xs="10">
      <Form className="form" schema={schema} onSubmit={handlerSubmit} >
      <TextComent>
          <div className="comentwraper">

                <div className="postreply">Faça seu comentário:</div>
                <Textarea name="mensagem" id="reply" placeholder="Comentário..." />

                <Button className="mt-3 btn-info btn-sm" type="submit" >
                  Comentar
                </Button>
          </div>
      </TextComent>
      </Form>

      </Col>

      <Col xs="12">
        <Row className="justify-content-center">
          <Col xs="2">
            <Userinfo>
              <Avatar>
                  <img src={avatar} alt="" />
              </Avatar>
            </Userinfo>
          </Col>

          <Col xs="9">
            <TextComentarios>
                <div className="comentwraper">

                      <div className="postreply">Usuario.R:</div>
                      <p>dfsddfd</p>
                </div>
            </TextComentarios>
            <Opcoes>
              <Button className="up my-2">
                <FontAwesomeIcon size="sm" icon={faLightbulb} />
              </Button>

              <Button className="comentario">Comentarios</Button>
            </Opcoes>
          </Col>
        </Row>
      </Col>

    </Row>

  );
}

export default Comentar;
