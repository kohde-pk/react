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
        console.log('handleChange', event.currentTarget.value);
    }


    showContent = key => {
        console.log('key', key)
        const myArr = this.state;
        console.log('myArr', myArr)

        // const myItem = this.state.cards.filter(this.state.cards.id)
        // const cards = { ...this.state.cards };
        // const cardContent = this.state.cards.content.content;
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
                            thisName={this.thisName}
                        />
                    ))}
                    </div>

            </React.Fragment>
        );
    }
}


export default Cards;