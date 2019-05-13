import React from 'react';

import './Cards.scss';

const Card = (props) => (

    <div className="list">
        <img className="list-thumb" src={props.image} alt=""/>
        <p className="list-title">{props.title}</p>
        <p className="list-author">Author: {props.owner}</p>
        <p className="list-id">ID: {props.id}</p>
        <button className="list-button">View Article</button>
    </div>


);

export default Card;