import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        <h1>
          Login
          <small>Oie</small>
        </h1>
      </Title>
      <p>texto qualquer</p>
      <button type="button">Enviar</button>
    </Container>
  );
}
