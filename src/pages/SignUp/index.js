import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {Form, Input} from '@rocketseat/unform';
import { Container } from "./styles";

import * as Yup from 'yup';
import api from './../../services/api';
import { login } from "./../../services/auth";

function SignUp(props) {
  const schema = Yup.object().shape({
    username: Yup.string().required('O nome usuario é obrigatório'),
    password: Yup.string().required('A senha é obrigatório.')
  })
  async function handleSignUp(data) {
    try {
      let response = await api.post('/sessions', {
        username: data.username,
        password: data.password
      });

      // setDataUser(usuario.data.usuario);
      // setToken(usuario.data.token);
      login(response.data.token);
      // localStorage.setItem('Usuario', `${token}`);
      // localStorage.setItem('Token', `${usuario}`);
      props.history.push("/");

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSignUp(data) {
    console.log(data);
  }


    return (
      <Container>
          <Form onSubmit={handleSignUp}>

            <Input
            name="usuario"
              className="form-control"
              placeholder="Nome de usuário"

            />
            <Input
            name="senha"
              className="form-control"
              placeholder="Endereço de e-mail"

            />

            <button type="submit">Cadastrar</button>
            <hr />
            <Link to="/login">Fazer login</Link>
          </Form>
        </Container>
    );

}

export default SignUp;
