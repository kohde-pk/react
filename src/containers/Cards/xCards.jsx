import React, { Component } from 'react';

import ContentCard from './Card';
import './Cards.css';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "items": [
                {
                    id: 0, 
                    title: "Portfolio site", 
                    owner:"Kathleen", 
                    contentType: "link",
                    content: "View our most recent customer site",
                    icon: "fas fa-link fa-1x",
                    url: "https://google.com",
                    views: "10",
                    timeToRead: "15 minutes",
                    dateAdded: "05/01/2019",
                    dateCreated: "04/01/2019"
                },
                {
                    id: 1, 
                    title: "Continuous Integration and Continuous Delivery for Database Changes", 
                    owner:"Ashoke Bhowmick", 
                    contentType: "link",
                    content: " The article also recommends some processes that help in overcoming this bottleneck and allow streamlining application code delivery and database changes into a single delivery pipeline.",
                    icon: "fas fa-link fa-1x",
                    url: "https://https://prokarma001.sharepoint.com/:w:/r/sites/CoEConnect/_layouts/15/Doc.aspx?sourcedoc=%7BD88B1865-0A9F-46A6-9E3A-B0677AEBF6FC%7D&file=f-1-6-3014372_Ashoke_Bhowmick.docx&action=default&mobileredirect=true.com",
                    views: "0",
                    timeToRead: "15 minutes",
                    dateAdded: "05/03/2019",
                    dateCreated: "12/12/2018"
                },
                {
                    id: 2, 
                    title: "SOA on Blockchain", 
                    owner:"Santosh Patil", 
                    contentType: "link",
                    content: "Organizations which value security, privacy, transparency and preservation of asset value should see the Blockchain as a critical component of their application portfolios as they move into these uncertain times.  ",
                    icon: "fas fa-link fa-1x",
                    url: "https://prokarma001.sharepoint.com/:w:/r/sites/CoEConnect/_layouts/15/Doc.aspx?sourcedoc=%7B05974549-D2BF-4D41-ACF9-9715A40B8A43%7D&file=f-1-6-3102665_Santosh_Patil.docx&action=default&mobileredirect=true",
                    views: "10",
                    timeToRead: "5 minutes",
                    dateAdded: "05/03/2019",
                    dateCreated: "12/12/2018"
                }
            ],
            nextId: 3,
            showForm: false
        }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleSave = this.handleSaveß.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSave(data) {
        this.setState((prevState, props) => {
            const newData = {...item, id: this.state.nextId};
            console.log(newData);
            return {
                nextId: prevState.nextId + 1,
                items: [...this.state.items, newItem]
            }
        });
    }

    handleAdd(data) {
        this.setState((prevState, props) => {
            const newData = {...item, id: this.state.nextId};
            return {
                nextId: prevState.nextId + 1,
                items: [...this.state.items, newItem]
            }
        });
    }

    render() {
        const {showForm} = this.state;
        return (
            <div className="container">
            { showForm ? 
                <ContentCard 
                    onSave={this.handleSave}
                    onAdd={this.handleAdd}
                    onClose={() => this.setState({showForm: false})} />
                    : null }
            </div>
        );
    }
}

export default cards;