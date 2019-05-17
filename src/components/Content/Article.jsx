import React, { Component } from 'react';

import './Content.scss';
import axios from './../../axios';

import styled from "styled-components";

class Article extends Component {
    onArticleSubmit(id) {
        axios
            .get("/content/json")
            .then(response => {
                // console.log(response);
            });
    }
    state = {
        toggle: false,
    }
    render() {
        console.log('Article', this.props);
        return (
            <div className="list-article">
              <p>{this.props.content}</p>
              <p>{this.props.id}</p>
            </div>
        )
    }
};

export default Article;

const div = styled.div`

  .hiddenContent {
    display: none;
  }
  .visibleContent {
    display: block;
    text-align: center;
  }
`;