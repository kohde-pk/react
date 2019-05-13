import React, { Component } from 'react';

import '../../components/Content/Content.scss';
import Content from '../../components/Content/Content';
import Spinner from '../../components/UI/Spinner/Spinner';
import ContentModal from '../../containers/Modal/ContentModal';
import axios from '../../axios';

class ContentCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: null,
            teaser: null,
            error: null,
            isOpen: false,
            id: null
        }
        this.onView = this.onView.bind(this);

    }
        
    componentDidMount() {
        axios
            .get('/content.json')
            .then( response => {
                const data = Object.values(response.data);
                this.setState({ items: data, isOpen: false, id: data.id });
            }).catch( error => {
                console.log(error);
                this.setState({ error: true });
            }) ;
    }   

    toggleModal = () => {
        this.setState({ 
            isOpen: !this.state.isOpen 
        });
    }

    onView(id) {
        console.log(this.state.props);
    }

    render() {
        let contents = this.state.error ? <p style={{textAlign: 'center'}}>Houston, we have a problem.</p> : <Spinner />;
        
        if(this.state.items) {

            contents = this.state.items.map((content, index) => {
                return (
                    <div key={index}>
                            <Content
                                key={index}
                                id={content.id}
                                image={content.image}
                                title={content.title}
                                content={content.content}
                                owner={content.owner}
                                timeToRead={content.timeToRead}
                                views={content.views}
                                dateAdded={content.dateAdded} 
                                onView={content.onView}
                                />
                    </div>
                )
                });
            }

        return (
            <section className="content-container">
                {contents}
                <div>
                    {/* <button onClick={this.openModalHandler}>
                        View
                    </button> */}
                    <ContentModal 
                        show={this.state.isOpen}
                        onClose={this.toggleModal}
                        key={this.state.id}
                        id={this.state.key}
                        image={this.state.image}
                        title={this.state.title}
                        content={this.state.content}
                        owner={this.state.owner}
                        timeToRead={this.state.timeToRead}
                        views={this.state.views}
                        dateAdded={this.state.dateAdded}
                        onView={this.state.onView}
                        
                    />
                </div>
            </section>
            
        )
    }
}

export default ContentCard;