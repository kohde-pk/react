import React from 'react';

import Circles from '../../components/Circles/Circles';
import Icons from '../../components/Icons/Icons';
import Cards from '../../containers/Cards/Cards';

import './Landing.css';
import AddLinkForm from '../Form/Form';

const landing = ( props ) => (
    <div className="container">
        <div className="landingHeader">
            <h1 className="rubberband">Content Share</h1>
            <details className="move-right dropdown">
                <div className="profile-box"></div>
                <summary className="btn" aria-haspopup='menu'>Contact Info</summary>
                <ul className="dropdown-content">
                    <li className="menu-dd">
                        <a href="mailto:kohde@prokarma.com?subject=ContentShare">kohde@prokarma.com</a>
                    </li>
                </ul>
            </details>
        </div>
        <main>
            <Icons />
            <section className="content">
                <p className="large__text">Let's start viewing</p>
                <p className="small__text">Click 'Get Started' to view the shared content.</p>
            </section>
            <section>
                <button className="cta">Get Started</button>
            </section>
            <Circles />
        </main>
        <section className="cards">
            <Cards />
        </section>
        <section className="form">
            <AddLinkForm />
        </section>

        <footer>
        </footer>
    </div>
);

export default landing;