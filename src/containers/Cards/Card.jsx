import React from 'react';
import { Link } from 'react-router-dom';

import './Cards.scss';

const Card = (props) => (

    <div className="list">
        <p className="list-title">{props.title}</p>
        <p className="list-author">Author: {props.owner}</p>
        <p className="list-id">ID: {props.id}</p>
        <Link className="list-button" to={'/' + props.id}>
            <p>Read Article</p> 
        </Link> 
        {/* <button className="list-button" onClick={() => props.showContent(props)}>View Article</button> */}
    </div>


);

export default Card;