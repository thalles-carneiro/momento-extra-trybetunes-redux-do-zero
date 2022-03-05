import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header, Loading, Music } from '../components';
import { fetchMusics } from '../redux/actions';

class Album extends Component {
  componentDidMount() {
    const { fetchMusicsDispatch, match: { params: { id } } } = this.props;
    fetchMusicsDispatch(id);
  }

  render() {
    const { isFeatching, musics } = this.props;

    return (
      <div data-testid="page-album">
        <Header />
        {
          isFeatching
          ? <Loading />
          : (
            musics.map((music) => <Music key={ music.trackId } music={ music } />)
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  musics: state.album.musics,
  isFeatching: state.album.isFeatching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMusicsDispatch: (id) => dispatch(fetchMusics(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);
