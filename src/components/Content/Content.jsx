import React from 'react';

const content = (props) => (
    // <article className="content-card">
        <div className="card card-item">
            <div className="card-header">
            <p className="content-type">{props.contentType}</p>
            </div>
            <div className="card-info">
                <a className="content-title" href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>
            </div>
            <div className="card-footer">
                <p className="content-owner">{props.owner}</p>    
                <p className="date-added">{props.dateAdded}</p>    
                <p className="time-read">{props.timeToRead} min read</p>
                <i className="view-icon fas fa-eye fa-1x">
                    <p className="views">   {props.views} views</p> 
                </i> 
            </div>
        </div>
    // </article>
);

export default content;