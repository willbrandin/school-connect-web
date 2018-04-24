import React, { Component } from 'react';
import NewsArticle from './news-article';


const APIURL = 'http://dev.schoolconnected.net/api/news/5ad8c4ba3a46050014bca298';

class NewsList extends Component {

    constructor(props){
        super(props)
        this.state = {
            news: []
        }
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

    render(){

        const news = this.state.news.map((t) => (
            <NewsArticle
                key={t._id}
                {...t}
            />
        ));

        return (
            <div>
                {news}  
            </div>
        )
    }
}

export default NewsList