import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header, Music } from '../components';

class Favorites extends Component {
  render() {
    const { songs } = this.props;

    return (
      <div>
        <Header />
        {
          songs.length
          ? songs.map((song) => <Music key={ song.trackId } music={ song } />)
          : <p>Não existem músicas favoritadas</p>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  songs: state.favorite.songs,
});

export default connect(mapStateToProps, null)(Favorites);
