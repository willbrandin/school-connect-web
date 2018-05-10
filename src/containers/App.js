import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '../store';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Navbar'
import Main from '../components/main/main'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <div className="app-container">
          <Main />
        </div>
      </div>
    </Router>
  </Provider>
);


export default App;
