import React, { Component } from 'react';
import './nav.css';

export default class NavItems extends Component {

  render() {
    return (
        <div className='nav-list-items'>
            <ul>
                <li><a href="#" className='nav-item-active'>News</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a href="#">Home Links</a></li>
                <li><a href='#'>Messages</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
    )
  }
}
 