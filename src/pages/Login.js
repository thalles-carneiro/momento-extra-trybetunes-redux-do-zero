import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { createUser } from '../redux/actions';

class Login extends Component {
  state = {
    name: '',
    redirectToAlbum: false,
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ name: value });
  }

  handleClick = () => {
    const { name } = this.state;
    const { createUserDispatch } = this.props;

    createUserDispatch(name);

    this.setState({ redirectToAlbum: true })
  }

  render() {
    const { name, redirectToAlbum } = this.state;

    if (redirectToAlbum) {
      return <Redirect to="/album/1434899831" />;
    }

    return (
        <form>
            <input
              type="text"
              value={ name }
              placeholder="Nome"
              onChange={ this.handleChange }
            />
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createUserDispatch: (name) => dispatch(createUser(name)),
});

export default connect(null, mapDispatchToProps)(Login);
