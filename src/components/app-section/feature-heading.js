import React, { Component } from 'react';
import '../../App.css'

export default class FeatureHeading extends Component {

  render() {
    return (
        <div className='feature-heading'>
            <h1 className='feature-title'>{this.props.title}</h1>
            <a href='#' className='feature-link'>Add</a>
        </div>
    )
  }
}