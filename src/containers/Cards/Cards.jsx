import React, { Component } from 'react';

import Card from './Card';
import './Cards.scss';
import axios from '../../axios';

class Cards extends Component {
    state = {
        cards: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/content.json')
            .then(response => {
            const fetchedData = [];
            for (let key in response.data) {
                fetchedData.push({
                    ...response.data[key],
                    key: response.data.key
                });
            }
                this.setState({loading: false, cards: fetchedData});
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    editCard = (id) => {
        return new Promise((resolve, reject) => {
            axios
                .put(`content/notes`, {id})
                .then(() => {
                    resolve();
                    return;
                })
                .catch(error => {
                    reject(error.message);
                    return;
                });
        });
        
    };
    render() {
        return (
            <div>
                <p className="list-header">Available Articles</p>
                {this.state.cards.map((card, index) => (
                    <Card 
                    key={index}
                    id={card.id}
                    owner={card.owner}
                    title={card.title}
                    image={card.image}    
                    />
                ))}
            </div>  
        );
    }
}


export default Cards;