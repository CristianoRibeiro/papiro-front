import React, { useState } from 'react';
import {
  Button,
  Container,
  Col,
  Row,
  Jumbotron
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

function CadastroRecompensas(props) {

  const [error, setError] = useState('');



  const schema = Yup.object().shape({
    valor: Yup.number().required('O valor da Recompensa é obrigatório'),
    descricao: Yup.string().required('Digite sua descrição da Recompensa.')
  });



  async function handlerSubmit(data, {setSubmitting, resetForm}){

    try {


      let response = await api.post('/Recompensa', {
        DsRecompensa: data.descricao,
        ValorPontuacao: data.valor,
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



    <Jumbotron>
<legend>Cadastrar Recompensa</legend>
<hr></hr>



<Row>


<Col sm="12" md={{ size: 10, offset: 1 }}>



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
                <div className="postreply">Postar uma novo Recompensa</div>
                <Textarea name="descricao" id="reply" placeholder="Digite aqui a descrição da Recompensa" />
                <div className="postreply">Valor da Pontuação</div>
                <Input name="valor" type="number" id="title"  placeholder="00" />

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



      </Jumbotron>
    </Container>

    </>
    );
}

export default CadastroRecompensas;
