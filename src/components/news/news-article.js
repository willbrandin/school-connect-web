import React, { Component } from 'react';
import './news.css';

const NewsArticle = ({ title, story, pubDate, imgUrl }) => (
    <div className='news-item-container'>
        <div className='news-header-container'>
            <h2>{title}</h2>
            <a href='#'>Edit</a>
        </div>
        <div className='news-item-text-container'>
            <p className='news-item-story-text'>{story} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='news-item-story-date'>{pubDate}</p>
        </div>
        
    </div>
);



export default NewsArticle;