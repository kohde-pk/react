import React, { Component } from 'react';
import {PropTypes} from 'prop-types';


class Content extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        dateAdded: PropTypes.string.isRequired,
        timeToRead: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
    }
   

    render() {
        const {title, owner, content, image, dateAdded, timeToRead, views, onViewHandler} = this.props;
        
        return(
            <React.Fragment>
                <div className="card card-item">
                    <div style={{ backgroundImage: `url(${image})` }} className="card-header">
                    <img className="content-type" href={image} alt=""/>
                    
                    </div>
                    <div className="card-info">
                        <p className="content-title">{title}</p>
                    </div>
                    <div className="card-article">
                        <p className="content-text">{content}</p>
                    </div>
                    <div className="card-footer">
                        <p className="content-owner">{owner}</p>   
                        <button onClick={onViewHandler} className="content-button">Continue Reading...</button> 
                        <p className="date-added">{dateAdded}</p>    
                        <p className="time-read">{timeToRead} min read</p>
                        <i className="view-icon fas fa-eye fa-1x">
                            <p className="views">{views} views</p> 
                        </i> 
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Content;