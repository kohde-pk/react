import React from 'react';

import bgImage from './../../assets/img/dashboard.png';

import './Landing.scss';
// import AddLinkForm from '../Form/Form';

const landing = ( props ) => (
    <div className="container">
        <main>
            <section className="landing-page">
                <p className="landing-text">Discover what we can do</p>
                <div className="landing-info">
                    <a href="/content" className="cta">View Content</a>
                </div>
                {/* <Circles /> */}
                <img className="landing-image" src={bgImage} alt=""/>
            </section>
        </main>
        <footer>
        </footer>
    </div>
);

export default landing;
