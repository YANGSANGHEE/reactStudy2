import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

