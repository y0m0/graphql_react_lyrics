import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// graphql query
import getSongById from '../queries/getSongById';

class SongDetails extends Component {
  render() {
    const { song } = this.props.data;

    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>{song.title}</h3>
      </div>
    );
  }
}

// this is needed because the song ID is a required argument of the query
// and we have to pass it from the props to the graphql query
export default graphql(getSongById, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetails);
