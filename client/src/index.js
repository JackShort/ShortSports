import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker.jsx';

import './stylesheets/index.css';
import App from './components/App.jsx';
import Signup from './components/views/signup.jsx';
import Login from './components/views/login.jsx';
import CreatePost from './components/views/createpost.jsx';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/login' component={Login}/>
      <Route path='/post' component={CreatePost}/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
registerServiceWorker();
