import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentDidMount() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return(
      <div className="App">
      <h1>Posts</h1>
      {this.state.posts.map(post =>
        <div key={post.id}>{post.title}</div>
      )}
        </div>
      );
  }
}

export default App;
