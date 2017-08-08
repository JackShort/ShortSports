import React, { Component } from 'react';
import '../../stylesheets/App.css';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('This was the post' + this.state.value);
    event.preventDefault();

    fetch('/api/post', {
      method: 'POST'
    });
  }

  render() {
    return(
      <div className="Signup">
        <form onSubmit={this.handleSubmit}>
          <label>
            Post:
            <textarea
              type="text"
              name="email"
              id="loginemail"
              value={this.state.value}
              onChange={this.handleChange}/>
              <br/>
          </label>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
      );
  }
}

export default CreatePost;
