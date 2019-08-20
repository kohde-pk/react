import React, { Component } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import Spinner from './../UI/Spinner/Spinner';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      blog: null,
      strDate: null,
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get('https://content-generator-e7566.firebaseio.com/content.json', {
        params: {
          orderBy: '"id"',
          equalTo: id
        }
      })
      .then( response => {
        const data = response.data;
        this.setState({ post: data });
        Object.keys(this.state.post).map(unit => {
          const blog = {...this.state.post[unit]};
          this.setState({ blog: blog });
          var arrDateAdded = this.state.blog.dateAdded.slice(0, 10).split('-');  
          var strDate = arrDateAdded[1] +'/'+ arrDateAdded[2] +'/'+ arrDateAdded[0];
          this.setState({ strDate: strDate });
          return blog;
        });
    })
      .catch( error => {
          console.log('Error: ', error);
    });
  }

  render() {

    return (
      this.state.blog === null 
      ? 
      <div className="center"><Spinner /></div>
      :
      <div className="post">
        <h4 className="list-title">{this.state.blog.title}</h4>
        <p className="list-author">Author: {this.state.blog.owner}</p>
        <div className="list-footer">
          <p className="list-time">{this.state.blog.timeToRead} minutes to read</p>
          <p className="list-date-added">Added: {this.state.strDate}</p>
          <p className="list-view">{this.state.blog.views} views</p>
        </div>
        <p className="list-content">
          <ReactMarkdown>
            {this.state.blog.content}
          </ReactMarkdown>
        </p>
        <a href="/content" className="button-article">I'm Done</a>
      </div>
    ) 

  }
}

export default Post;