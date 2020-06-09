import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';
import api from './../../services/api';

import { Container } from "./styles";

function Login() {
  const schema = Yup.object().shape({
    username: Yup.string().required('O nome usuario é obrigatório'),
    password: Yup.string().required('A senha é obrigatório.')
  })
  async function handleSignUp(data) {
    try {
      let usuario = await api.post('/sessions', {
        username: data.username,
        password: data.password
      });
      console.log(usuario);
    } catch (error) {
      console.log(error);
    }
  }

    return (
      <Container>
          <Form schema={schema} onSubmit={handleSignUp}>

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

export default Login;
