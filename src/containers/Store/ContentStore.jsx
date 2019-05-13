import React, { Component } from 'react';

export default function ContentStore(WrappedComponent) {
    return class extends Component {
        state = {
            image: 'https://media.giphy.com/media/3ohhwxWDV25DWpgleU/giphy.gif',
            title: '',
            owner: '',
            content: "",
            views: 0,
            timeToRead: 0,
            dateAdded: new Date(),
            dataCreated: new Date(),
        };

        render() {
            return <WrappedComponent 
                title={this.state.title}{...this.props} />;
        }
    };
}