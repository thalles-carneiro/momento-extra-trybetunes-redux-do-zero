import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { updateUser } from '../redux/actions';

class FormProfileEdit extends Component {
  state = {
    name: '',
    email: '',
    image: '',
    description: '',
    redirectToProfile: false
  }

  componentDidMount() {
    const { user } = this.props;

    this.setState({ ...user });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { redirectToProfile, ...userInfo } = this.state;
    const { updateUserDispatch } = this.props;

    updateUserDispatch(userInfo);

    this.setState({ redirectToProfile: true });
  }

  render() {
    const { name, email, image, description, redirectToProfile } = this.state;

    if (redirectToProfile) {
      return <Redirect to="/profile" />
    }

    return (
      <section>
        <input
          type="text"
          name="name"
          value={ name }
          placeholder="Nome"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          name="email"
          value={ email }
          placeholder="E-mail"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          name="image"
          value={ image }
          placeholder="Link da Imagem"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          name="description"
          value={ description }
          placeholder="Descrição"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Finalizar
        </button>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserDispatch: (userInfo) => dispatch(updateUser(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormProfileEdit);
