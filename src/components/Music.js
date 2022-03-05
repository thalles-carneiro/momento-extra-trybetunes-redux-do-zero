import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFavoriteSong, removeFavoriteSong } from '../redux/actions';

class Music extends Component {
  handleChange = ({ target: { checked } }) => {
    const {
      addFavoriteSongDispatch,
      removeFavoriteSongDispatch,
      music,
    } = this.props;

    if (checked) {
      addFavoriteSongDispatch(music);
    } else {
      removeFavoriteSongDispatch(music.trackId);
    }
  }

  render() {
    const { music, songs } = this.props;

    const isFavoriteSong = songs.some(({ trackId }) => trackId === music.trackId);

    return (
      <section>
        <input
          type="checkbox"
          checked={ isFavoriteSong }
          onChange={ this.handleChange }
        />
        <span>{ music.trackName }</span>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  songs: state.favorite.songs,
});

const mapDispatchToProps = (dispatch) => ({
  addFavoriteSongDispatch: (song) => dispatch(addFavoriteSong(song)),
  removeFavoriteSongDispatch: (songId) => dispatch(removeFavoriteSong(songId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Music);
