import React, { Component } from 'react';
import propTypes from 'prop-types';

import './Cards.css';
import Link from '../../components/Icons/Link';
// import * as data from '../../assets/json/cards.json';

const loadData = {
    "data": [
        {
            "id": 1, 
            "owner":"Kathleen", 
            "content": "This is a link to my portfolio",
            "icon": "fas fa-link fa-1x",
            "url": "https://kohde-pk.github.io/ui",
            "views": "2",
            "lastView": "04/01/2019"
        },
        {
            "id": 2, 
            "owner":"Kathleen", 
            "content": "My favorite search engine",
            "icon": "fas fa-cloud fa-1x",
            "url": "https://google.com",
            "views": "14",
            "lastView": "04/28/2019"
        },
        {
            "id": 3, 
            "owner":"Ninod", 
            "content": "View our most recent customer site",
            "icon": "fas fa-link fa-1x",
            "url": "https://google.com",
            "views": "10",
            "lastView": "05/01/2019"
        }
    ]
}

console.log(loadData);
const fData = JSON.stringify(loadData);
console.log(fData);

class Card extends Component {
    static propTypes = {
        owner: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        content: propTypes.string.isRequired,
        timeToRead: propTypes.string.isRequired,
        image: propTypes.string.isRequired
    }
    render() {
        const {id, owner, content, icon, url, views, lastView} = this.props;
        return (
            
            <div className="card__group">
                <div className="card card__item">
                    <div className="header">Posted by: {owner}</div>
                        <Link />
                    <div className="main__content">{content}
                        <div className="main__url">
                        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="views"><i className="fas fa-eye fa-1x"></i> {views}</div>    
                        <div className="last-view"><i className="fas fa-eye fa-1x"></i> {lastView}</div>    
                    </div>
                </div>
            </div>
        )
    }

    updateViews () {

    }
}

export default Card;