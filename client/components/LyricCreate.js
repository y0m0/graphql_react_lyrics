import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// graphql mutations
import addLyricToSong from '../mutations/addLyricToSong';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Add a Lyric</label>
          <input
            value={this.state.content}
            onChange={event => this.setState({ content: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default graphql(addLyricToSong)(SongCreate);
