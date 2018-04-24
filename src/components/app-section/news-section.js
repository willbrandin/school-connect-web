import React, { Component } from 'react';
import FeatureHeading from './feature-heading'
import NewsList from '../news/news-list'

export default class NewsSection extends Component {
  
  render() {
    return (
        <div>
            <FeatureHeading
                title='News'
            />
            <NewsList />
        </div>
    )
  }
}