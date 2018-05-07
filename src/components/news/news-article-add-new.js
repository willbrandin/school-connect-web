import React, { Component } from 'react';

class NewsForm extends Component {

  constructor(props){
    super(props);
    this.state = { 
      titleInputValue: '',
      storyInputValue: ''
      };
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleStoryChange = this.handleStoryChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitleChange(e){
    this.setState({
      titleInputValue: e.target.value //input value = event targe
    })
  }

  handleStoryChange(e){
    this.setState({
      storyInputValue: e.target.value //input value = event targe
    })
  }

  handleSubmit(){
    this.props.addNews(this.state.titleInputValue, this.state.storyInputValue);
  }

  render(){
    return (
        <div>
            <input 
              type='text'
              value={this.state.titleInputValue}
              onChange={ this.handleTitleChange }
              />

            <input 
              type='text' 
              value={this.state.storyInputValue}
              onChange={ this.handleStoryChange }
              />
            <button
              onClick={this.handleSubmit}
            >Add News</button>
        </div>
    )
  }
}

export default NewsForm