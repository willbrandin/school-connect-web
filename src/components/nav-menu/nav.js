import React, { Component } from 'react';
import NavItems from './nav-items';
import './nav.css';

export default class NavMenu extends Component {
  // state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // const { activeItem } = this.state

    return (
      <div className='nav'>
        <h1>{this.props.schoolName}</h1>
        <NavItems />
        {/* <a href='#' className='nav-text-simple-link'>Log Out</a> */}
      </div>
    )
  }
} 