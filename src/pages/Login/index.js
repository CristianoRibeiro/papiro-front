import React, {useState} from 'react';
import { Link, withRouter } from "react-router-dom";
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';
import api from './../../services/api';
import { login, IdUsuario, nomeUsuario, tipoUsuario, pessoa } from "./../../services/auth";

import { Container } from "./styles";

function Login(props) {


  const schema = Yup.object().shape({
    username: Yup.string().required('O nome usuario é obrigatório'),
    password: Yup.string().required('A senha é obrigatório.')
  })
  async function handleSignIn(data) {
    try {
      let response = await api.post('/sessions', {
        username: data.username,
        password: data.password
      });

      // setDataUser(usuario.data.usuario);
      // setToken(usuario.data.token);
      login(response.data.token);
      IdUsuario(response.data.usuario.IdUsuario);
      nomeUsuario(response.data.usuario.username);
      tipoUsuario(response.data.usuario.CdTipoUsuario);
      pessoa(response.data.usuario.CdPessoa);

      props.history.push("/");

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

    return (
      <Container>
          <Form schema={schema} onSubmit={handleSignIn}>

            <Input
            name="username"
            className="form-control"
            placeholder="Digite o seu usuário"
            />
            <Input
              name="password"
              className="form-control"
              type="password"
              placeholder="Digite sua senha"
            />
            <button type="submit">Fazer login</button>
            <hr />
            <Link to="/signup">Cadastrar</Link>
          </Form>
        </Container>
    );

}

export default withRouter(Login);
