import React, { Component } from 'react';
import SideNav from './components/nav-menu/nav';
import LogoBar from './components/logo-bar/logo-bar';
import NewsList from './components/news/news-list';

import './App.css';

class App extends Component {
  
  render() {
    var input = 'hello'
    return (
      
      <div className="App">
        <LogoBar />
        <div className='menu-app-container'>
          <SideNav 
            //Redux state for school details?
            schoolName='Smith High School'
          />
          <NewsList />
        </div>
      </div>
    );
  }
}

export default App;
