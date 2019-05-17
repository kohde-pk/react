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
        axios
        .get('/content.json')
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

    handleChange = event => {
        console.log(event.currentTarget.value);
    }


    showContent = key => {
        console.log(key)
        const myArr = this.state;
        console.log('myArr', myArr)
        const thisName = this.state.cards.find(function(o) {
            return o.id === key;
        })
        console.log(myArr)
        // const myItem = this.state.cards.filter(this.state.cards.id)
        // const cards = { ...this.state.cards };
        // const cardContent = this.state.cards.content.content;
        // console.log(cardContent)
        //console.log(cardContent);
        //cards.title = cards.title;
        // this.setState({ cards });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <p className="list-header">Available Articles</p>
                    {this.state.cards.map(card => (
                        <Card 
                            key={card.id}
                            id={card.id}
                            owner={card.owner}
                            title={card.title}
                            content={card.content}
                            image={card.image}
                            showContent={this.showContent}
                        />
                    ))}
                    </div>
                    <div className=" list list-container">
                        <p className="list-header">
                            Title 
                        </p>
                    </div>
            </React.Fragment>
        );
    }
}


export default Cards;