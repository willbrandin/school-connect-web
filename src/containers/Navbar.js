import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  render(){
    return(
      <nav className="nav">
          <div>
            <h1>School Connect</h1>
          </div>
          <ul className="nav-list-items">
            <li>
              <Link to='/news'>News</Link>
            </li>
            <li>
              <Link to='/calendar'>Calendar</Link>
            </li>
            <li>
              <Link to='/homelinks'>Home Links</Link>
            </li>
            <li>
              <Link to='/messages'>Messages</Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
          </ul>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, null)(Navbar);