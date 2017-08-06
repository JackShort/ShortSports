import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {posts: []};

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
