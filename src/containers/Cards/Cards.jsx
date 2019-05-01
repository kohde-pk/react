import React from 'react';

import Card from './Card';
import './Cards.css';

const cards = ( ) => (
    <div className="container">
        <Card 
            owner='Kathleen'
            description='This is a link to my portfolio site.'
            icon='fas fa-link fa-1x'
            views='15'
            url='https://kohde-pk.github.io/ui'   
            lastView='04/01/2019'/>
    </div>
);

export default cards;