import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class CardContent extends React.Component {
    renderCard = (key) => {
        const card = this.props.cards[key];
        const isAvailable = card && card.id;
        // make sure the card is loaded before we continu
        if (!card) return null;

        if (!isAvailable) {
            return (
            <CSSTransition
                classNames="order"
                key={key}
                timeout={{ enter: 250, exit: 250 }}
            >
             <li key={key}>
                Sorry {card ? card.name : 'card'} is no longer available
            </li>
            </CSSTransition>
            );
        }
        return (
         <CSSTransition
            classNames="order"
            key={key}
            timeout={{ enter: 250, exit: 250 }}
            >

            <li key={key}>
                <span>
                <TransitionGroup
                    component="span"
                    className="count">
                        <CSSTransition
                            classNames="count"
                            key={key}
                            timeout={{ enter: 500, exit: 500 }}>
                        <span>{key}</span>
                        </CSSTransition>
                </TransitionGroup>
                    {card.owner}
                    
                    <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
                </span>
            </li>
        </CSSTransition>   
        );
    }
    render() {
        const cards = Object.keys(this.props.card);

        return (
            <div className="order-wrap">
                <h2>Article</h2>
                <TransitionGroup component="ul" className="order">
                    {cards.map(this.renderCard)}
                </TransitionGroup>
                <div className="total">
                    Total:
                    <strong>50</strong>
                </div>
                
            </div>
        )
    }
}

export default CardContent;