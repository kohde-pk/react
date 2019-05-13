import React, { Component } from 'react';
import {PropTypes} from 'prop-types';


class content extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        dateAdded: PropTypes.string.isRequired,
        timeToRead: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        onView: PropTypes.func
    }


    render() {
        const {title, content, owner, id, image, dateAdded, timeToRead, views} = this.props;
        
        return(
            <div className="card card-item">
                <div style={{ backgroundImage: `url(${image})` }} className="card-header">
                <img className="content-type" href={image} alt=""/>
                
                </div>
                <div className="card-info">
                    <p className="content-title">{title}</p>
                </div>
                <div className="card-footer">
                    <p className="content-owner">{owner}</p>   
                    <button className="buttons content-button">{id}</button> 
                    <p className="date-added">{dateAdded}</p>    
                    <p className="time-read">{timeToRead} min read</p>
                    <i className="view-icon fas fa-eye fa-1x">
                        <p className="views">{views} views</p> 
                    </i> 
                </div>
            </div>
        );
    }
}

export default content;