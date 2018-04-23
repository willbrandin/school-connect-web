import React, { Component } from 'react';
import SideNav from './components/nav-menu/nav';
import LogoBar from './components/logo-bar/logo-bar';

import './App.css';

class App extends Component {
  
  render() {
    var input = 'hello'
    return (
      
      <div className="App">
        <LogoBar />
        <SideNav 
          //Redux state for school details?
          schoolName='Smith High School'
        />
      </div>
    );
  }
}

export default App;
