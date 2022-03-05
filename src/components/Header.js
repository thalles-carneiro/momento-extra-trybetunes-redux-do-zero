import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { name } = this.props;

    return (
      <header>
        <nav>
          <Link to="/profile">Perfil</Link>
          <br/>
          <Link to="/favorites">Favoritos</Link>
          <br/>
          <Link to="/album/1434899831">Álbum</Link>
        </nav>
        <p>{ name }</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.user.name,
});

export default connect(mapStateToProps, null)(Header);
