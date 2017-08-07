import React, { Component } from 'react';
import '../../stylesheets/App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(req => {
      if (req.status === 200) {
        console.log('hello');
      } else {
        console.log('shit')
      }
    });
  }

  render() {
    return(
      <div className="Signup">
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              id="loginemail"
              onChange={this.handleChange}/>
              <br/>
          </label>

          <label>
            Password:
            <input
              type="password"
              name="password"
              id="loginpass"
              onChange={this.handleChange}/>
              <br/>
          </label>

          <input type="submit" value="Submit"/>
        </form>
      </div>
      );
  }
}

export default Login;
