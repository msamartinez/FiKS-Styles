import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import store from './store/store';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const root = createRoot(document.getElementById('app'));

root.render(
  <Router>
    <Provider store={store}>
    <CssBaseline />
      <App />
    </Provider>
  </Router>
);
