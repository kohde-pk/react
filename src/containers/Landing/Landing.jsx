import React, { Component } from 'react';
import bgImage from './../../assets/img/dashboard.png';
import NotificationButton from '../../components/UI/Button/NotificationButton/NotificationButton'
import './Landing.scss';

class landing extends Component {

    render() {
        return (
            <div className="container">
                <main>
                    <section className="landing-page">
                        <p className="landing-text">Discover what we can do</p>
                        <div className="landing-info">
                            <a href="/content" className="cta">View Articles</a>
                        </div>
                        <img className="landing-image" src={bgImage} alt=""/>
                    </section>
                </main>
                <section className="notification">
                    <NotificationButton btnText='Subscribe to Notifications' btnFunc='ask' />
                    <NotificationButton btnText='Unsubscribe to Notifications' btnFunc='remove' />
                </section>
                <footer>
                </footer>
            </div>
        )
    }
};

export default landing;