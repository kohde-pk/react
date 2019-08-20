import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {   

    render() {
        const {title, owner, id, image, dateAdded, timeToRead, views} = this.props;
        return(
            <Fragment>
                <div className="card card-item">
                    <div style={{ backgroundImage: `url(${image})` }} className="card-header">
                    <img className="content-type" href={image} alt=""/>
                    
                    </div>
                    <div className="card-info">
                        <p className="content-title">{title}</p>
                        <p className="content-id">{id}</p>
                    </div>
                    <div className="card-footer">
                        <p className="content-owner">{owner}</p> 
                        <Link to={'/' + id}>
                            <p className="content-button">Read Article</p> 
                        </Link>  
                        <p className="date-added">{dateAdded}</p>    
                        <p className="time-read">{timeToRead} min read</p>
                        <i className="view-icon fas fa-eye fa-1x">
                            <p className="views">{views} views</p> 
                        </i> 
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Content;