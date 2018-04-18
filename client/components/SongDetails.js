import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// graphql query
import getSongById from '../queries/getSongById';

class SongDetails extends Component {
  render() {
    return (
      <div>
        <h3>Song Details</h3>
      </div>
    );
  }
}

export default graphql(getSongById, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetails);
