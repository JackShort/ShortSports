import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker.jsx';

import './stylesheets/index.css';
import App from './components/App.jsx';
import Signup from './components/views/signup.jsx';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import browserHistory from 'history/createBrowserHistory'

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/signup' component={Signup}/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
registerServiceWorker();
