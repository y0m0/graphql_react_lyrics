import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// graphql mutations
import likeLyric from '../mutations/likeLyric';

class LyricList extends Component {
  onLike(id) {
    this.props.mutate({ variables: { id } });
  }

  renderLyrics() {
    return this.props.lyrics.map(lyric => {
      return (
        <li key={lyric.id} className="collection-item">
          {lyric.content}
          <div className="vote-box">
            <i
              onClick={() => this.onLike(lyric.id)}
              className="material-icons"
            >
              thumb_up
            </i>
            {lyric.likes}
          </div>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="collection">
          {this.renderLyrics()}
        </ul>
      </div>
    );
  }
}

export default graphql(likeLyric)(LyricList);
