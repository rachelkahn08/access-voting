import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './App/App';
import Root from './App/Root';
 
let store = createStore(App)
 
render(
  <Root store={store} />,
  document.getElementById('root')
)