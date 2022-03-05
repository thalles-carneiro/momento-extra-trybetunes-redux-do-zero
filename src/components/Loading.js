import React, { Component } from 'react';

import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

class Loading extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Spinner animation="border" role="status" size="lg" />
        <span>Carregando...</span>
      </Container>
    );
  }
}

export default Loading;
