import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { newStore } from './store';

import Home from './app/home/Home';
import Layout from './components/layout/Layout';

import './styles/main.scss';

const store = newStore();

ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <Home />
    </Layout>
  </Provider>,
  document.getElementById('root')
);