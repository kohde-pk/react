import React from 'react';

import './Content.scss';

const Article = (props) => (

        <div className="list-article">
          <p className="list-title">{this.props.title}</p>
          <p className="list-author">Author: {props.owner}</p>
          <p className="list-content">{props.content}</p>
          <div className="list-footer">
            <p className="list-time">{props.timeToRead} read</p>
            <p className="list-date-added">Added: {props.dateAdded}</p>
            <p className="list-view">{props.views} views</p>
          </div>
          <button className="buttons button-article">I've read enough</button>
        </div>
    )

export default Article;
