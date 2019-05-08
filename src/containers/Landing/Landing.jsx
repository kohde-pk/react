import React from 'react';

import Circles from '../../components/Circles/Circles';
import ContentCard from '../../containers/Cards/ContentCard';

import './Landing.css';
// import AddLinkForm from '../Form/Form';

const landing = ( props ) => (
    <div className="container">
        <main>
            <section>
                <button className="cta">Get Started</button>
            </section>
            <Circles />
        </main>
        <footer>
        </footer>
    </div>
);

export default landing;