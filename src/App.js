import React, { Component } from 'react';
import SideNav from './components/nav-menu/nav';
import NewsSection from './components/app-section/news-section';

import './App.css';

class App extends Component {
  
  render() {
    var input = 'hello'
    return (
      
      <div className="App">
        <div className='menu-container'>
          <SideNav 
            //Redux state for school details?
            schoolName='Smith High School'
          />
          <div className='app-container'>
            <NewsSection />
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
