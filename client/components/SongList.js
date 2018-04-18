import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

// graphql queries
import fetchSongs from '../queries/fetchSongs.js';
//graphql mutations
import deleteSong from '../mutations/deleteSong';

class SongList extends Component {
  onSongDelete(id) {
    this.props.mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          <Link to={`/songs/${song.id}`}>
            {song.title}
          </Link>
          <i className="material-icons" onClick={() => this.onSongDelete(song.id)}>
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-medium red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

// Weird workaround to associate mutliple queries/mutations
// to the same component
export default graphql(deleteSong)(
  graphql(fetchSongs)(SongList)
);
