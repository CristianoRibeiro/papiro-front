import React, { useState, useEffect } from 'react';
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

function Comentar(props) {
  const [error, setError] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if(props.post_id){
      getAllComentarios();
    }

  }, [props.post_id]);


  const schema = Yup.object().shape({
    mensagem: Yup.string().required('Digite sua mensagem do tópico.')
  });


  async function getAllComentarios(){

    try {

        setUpdate(true);
        const response = await api.get(`/Mensagem/Comentarios/?id=${props.post_id}`);

        setComentarios(response.data);
        setUpdate(false)


    } catch (error) {
      console.log(error);
    }
  }



  async function handlerSubmit(data, {setSubmitting, resetForm}){
    try {

      let response = await api.post('/Mensagem', {
        DsMensagem: data.mensagem,
        CdMsgPai: props.post_id,
        CdUsuario: getIdUsuario()
      });
      resetForm({})
      getAllComentarios();
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
                <Input multiline name="mensagem" id="reply" placeholder="Comentário..." />

                <Button className="mt-3 btn-info btn-sm" type="submit" >
                  Comentar
                </Button>
          </div>
      </TextComent>
      </Form>

      </Col>
      {comentarios &&

        comentarios.map(comentario => (
            <Col xs="12" key={comentario.IdMensagem}>
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

                          <div className="postreply">{comentario.Usuario.username}</div>
                          <p>{comentario.DsMensagem}</p>
                    </div>
                </TextComentarios>
                {/* <Opcoes>
                  <Button className="up my-2">
                    <FontAwesomeIcon size="sm" icon={faLightbulb} />
                  </Button>
                  <Button className="comentario">Comentar</Button>
                </Opcoes> */}
              </Col>
            </Row>
          </Col>

        ))


      }


    </Row>

  );
}

export default Comentar;
