import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {Form, Input} from '@rocketseat/unform';
import { Container } from "./styles";

function SignUp() {

  function handleSignUp(data) {
    console.log(data);
  }


    return (
      <Container>
          <Form onSubmit={handleSignUp}>

            <Input
            name="email"
              className="form-control"
              placeholder="Nome de usuário"

            />
            <Input
            name="email"
              className="form-control"
              placeholder="Endereço de e-mail"

            />
            <Input
            name="email"
              placeholder="Senha"
            />
            <button type="submit">Cadastrar grátis</button>
            <hr />
            <Link to="/login">Fazer login</Link>
          </Form>
        </Container>
    );

}

export default SignUp;
