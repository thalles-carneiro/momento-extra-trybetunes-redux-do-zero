import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProfileCard extends Component {
  render() {
    const { user: { name, email, image, description } } = this.props;

    return (
      <section>
        <img src={ image } alt={ name } />
        <p>{ name }</p>
        <p>{ email }</p>
        <p>{ description }</p>
        <Link to="/profile/edit">Editar</Link>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(ProfileCard);
