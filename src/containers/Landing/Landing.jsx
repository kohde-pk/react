import React, { Component } from 'react';

import bgImage from './../../assets/img/dashboard.png';
import './Landing.scss';

class landing extends Component {

    render() {
        return (
            <div className="container">
                <main>
                    <section className="landing-page">
                        <p className="landing-text">Discover what we can do</p>
                        <div className="landing-info">
                            <a href="/content" className="cta">View Content</a>
                        </div>
                        <img className="landing-image" src={bgImage} alt=""/>
                    </section>
                </main>
                <section className="notification">
                    <button className="notifications">
                        Subscribe to Notifications
                    </button>
                </section>
                <footer>
                </footer>
            </div>
        )
    }
};

export default landing;