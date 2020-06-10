import React, { useState } from 'react';
import {
  Button,
} from 'reactstrap';

import { Form, Input ,Textarea } from '@rocketseat/unform';

import {
  Container,
  Userinfo,
  Avatar,
  Postinfobot,
  PosttextComent,
} from './styles';

import api from '../../services/api';

import { getIdUsuario } from "./../../services/auth";
import * as Yup from 'yup';


import avatar from './../../images/user.png';

function MgsTopico() {

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

  return (
      <Container>
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
                      <Input name="titulo" id="title"  placeholder="Titulo do topíco" />
                      <div className="postreply">Postar um novo tópico</div>
                      <Textarea name="mensagem" id="reply" placeholder="Digite aqui seu tópico" />
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
    </Container>
    );
}

export default MgsTopico;
