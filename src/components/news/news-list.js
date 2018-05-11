import React, { Component } from 'react';
import NewsArticle from './news-article';
import NewsForm from './news-article-add-new';


const APIURL = 'http://stg.schoolconnected.net/api/news/5ad7da89a220b9e4aa3f2099';

class NewsList extends Component {

    constructor(props){
        super(props)
        this.state = {
            news: []
        }
        this.addNews = this.addNews.bind(this)
    }

    componentWillMount(){
				this.loadNews();
				
    }

    loadNews(){
        fetch(APIURL)
        .then(response => {
            if (!response.ok){
                if(response.status >= 400 && response < 500) {
                    return response.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: 'Please try again later. Server not responding.'}
                }
            }
            return response.json();
        })
        .then(news => this.setState({news}));
    }

    addNews(title, story){
      
    }

    render(){

        const news = this.state.news.map((t) => (
            <NewsArticle
                key={t._id}
                {...t}
            />
        ));

        return (
            <div>
                <NewsForm 
                  addNews={ this.addNews }
                />
                {news}  
            </div>
        )
    }
}

export default NewsList