import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import Signup from './components/views/signup';

export default (
  <Route path='/' component={App}>
    <Route path='signup' component={Signup} />
  </Route>
);
