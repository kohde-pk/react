import React, { Component } from 'react';

import './Content.scss';
import axios from './../../axios';
import styled from "styled-components";

class article extends Component {
    onArticleSubmit(id) {
        axios
            .get("/content/json")
            .then(response => {
                console.log(response);
            });
    }
    state = {
        toggle: false,
    }
    render() {
        console.log(this.props);
        return (
            <div className="">
            <p>{this.props.content}</p>
            <p>{this.props.id}</p>

            
            </div>
        )
    }
};

export default article;

const div = styled.div`

  .hiddenContent {
    display: none;
  }
  .visibleContent {
    display: block;
    text-align: center;
  }
`;