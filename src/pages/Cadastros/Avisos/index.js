import React, { useState } from 'react';
import {
  Button,
  Container,
  Col,
  Row
} from 'reactstrap';

import { Form, Input ,Textarea } from '@rocketseat/unform';
import Header from './../../../components/Header';

import {
  ContainerBG,
  Userinfo,
  Avatar,
  Postinfobot,
  PosttextComent,
} from './styles';

import api from '../../../services/api';

import { getIdUsuario } from "../../../services/auth";
import * as Yup from 'yup';


import avatar from '../../../images/user.png';

function Avisos(props) {

  const [error, setError] = useState('');



  const schema = Yup.object().shape({
    titulo: Yup.string().required('O titulo do Aviso é obrigatório'),
    mensagem: Yup.string().required('Digite sua mensagem do Aviso.')
  });



  async function handlerSubmit(data, {setSubmitting, resetForm}){

    try {


      let response = await api.post('/Aviso/Cadastrar', {
        TituloAviso: data.titulo,
        Aviso: data.mensagem,
        IsAtivo:true,
        CdUsuario: getIdUsuario()
      });
      resetForm({})

    } catch (error) {
      setSubmitting(false)
      setError('Error com a conexão!')

    }

  }

  return (
    <>
    <Header  {...props} />

    <Container>
      <Row>


      <Col sm="12" md={{ size: 8, offset: 2 }}>


      <legend>Cadastrar Aviso</legend>

      <ContainerBG>
      <Form className="form" schema={schema} onSubmit={handlerSubmit} >
          <div className="topwrap">
            <Userinfo>
                <Avatar>
                    <img src={avatar} alt="" />
                </Avatar>


            </Userinfo>
            <PosttextComent>
                  <div className="textwraper">
                      {error && (<div className="error">Error ao inserir</div>)}
                      <div className="postreply">Titulo</div>
                      <Input name="titulo" id="title"  placeholder="Titulo do aviso" />
                      <div className="postreply">Postar um novo aviso</div>
                      <Textarea name="mensagem" id="reply" placeholder="Digite aqui seu aviso" />
                  </div>
              </PosttextComent>
              <div className="clearfix"></div>
          </div>
          <Postinfobot>



              <div className="pull-right postreply">
                  <div className="pull-left smile"><a href="#"><i className="fa fa-smile-o"></i></a></div>
                  <div className="pull-left">
                  <Button className="ml-2 mr-4 btn-success btn-sm" type="submit" >
                      Publicar
                  </Button>
                  </div>
                  <div className="clearfix"></div>
              </div>


              <div className="clearfix"></div>
          </Postinfobot>
      </Form>
    </ContainerBG>

    </Col>
    </Row>
    </Container>

    </>
    );
}

export default Avisos;
