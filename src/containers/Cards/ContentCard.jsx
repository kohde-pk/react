import React, { Component } from 'react';
// import propTypes from 'prop-types';

import AddLinkForm from '../../containers/Form/Form';

import Content from '../../components/Content/Content';
import '../../components/Content/Content.scss';


class ContentCard extends Component {
    // static propTypes = {
    //     title: propTypes.string.isRequired,
    //     owner: propTypes.string.isRequired,
    //     content: propTypes.string.isRequired,
    //     timeToRead: propTypes.number.isRequired,
    //     dateAdded: propTypes.string.isRequired
    // }

    constructor(props) {
        super(props);
        this.state = {
            "items": [
                {
                    id: 0, 
                    image: "backgroundImage: url(../../assets/img/office.jpg)",
                    title: "Portfolio site", 
                    owner:"Kathleen", 
                    content: "View our most recent customer site",
                    views: "10",
                    timeToRead: "15",
                    dateAdded: "05/01/2019",
                    dateCreated: "04/01/2019"
                },
                {
                    id: 1,
                    image: "backgroundImage: url(../../assets/img/water.jpg)",
                    title: "Continuous Integration and Continuous Delivery for Database Changes", 
                    owner:"Ashoke Bhowmick", 
                    content: "The article also recommends some processes that help in overcoming this bottleneck and allow streamlining application code delivery and database changes into a single delivery pipeline.",
                    views: "0",
                    timeToRead: "15",
                    dateAdded: "05/03/2019",
                    dateCreated: "12/12/2018"
                },
                {
                    id: 2,
                    image: "backgroundImage: url(../../assets/img/desk.jpg)",
                    title: "Digital Twins", 
                    owner:"Rohit Kumar", 
                    content: "In this paper we are going to explain about digital twins, it’s usage and how it works",
                    views: "0",
                    timeToRead: "20",
                    dateAdded: "05/07/2019",
                    dateCreated: "12/12/2018"
                },
                {
                    id: 3,
                    image: "backgroundImage: url(../../assets/img/office.jpg)",
                    title: "Setting up environment for performance testing", 
                    owner:"Sumit Kumar", 
                    content: "In this paper, we will discuss the challenges faced while the preparation of accurate test environment, tips for preparing accurate test environment, different test environment options, test environment validation checklist and some troubleshooting techniques.",
                    views: "0",
                    timeToRead: "15",
                    dateAdded: "05/07/2019",
                    dateCreated: "12/12/2018"
                },
                {
                    id: 4,
                    image: "backgroundImage: url(../../assets/img/ink.jpg)",
                    title: "SOA on Blockchain", 
                    owner:"Santosh Patil", 
                    content: "Organizations which value security, privacy, transparency and preservation of asset value should see the Blockchain as a critical component of their application portfolios as they move into these uncertain times.",
                    views: "10",
                    timeToRead: "5",
                    dateAdded: "05/03/2019",
                    dateCreated: "12/12/2018"
                }
            ],
            nextId: 5,
            error: false
        }

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(item) {
        this.setState((prevState, props) => {
            const newItem = {...item, id: this.state.nextId};
            return {
                nextId: prevState.nextId + 1,
                items: [...this.state.items, newItem],
            }
        });
    }
    render() {
        let contents = <p style={{textAlign: 'center'}}>Houston, we have a problem.</p>;
        if(!this.state.error) {
            contents = this.state.items.map(content => {
                return <Content
                    key={content.id}
                    image={content.image}
                    title={content.title}
                    content={content.content}
                    owner={content.owner}
                    timeToRead={content.timeToRead}
                    views={content.views}
                    dateAdded={content.dateAdded} />
            });
        }
  
        return (
            <section className="content-container">
                {contents}
            </section>
            
        )
    }
}

export default ContentCard;