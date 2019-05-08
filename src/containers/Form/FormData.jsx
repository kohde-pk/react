import React, { Component } from 'react';

import './Form.scss';

class ContentFormData extends Component {
    state = {
        contentForm: {
            owner: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: '*Owner Name'
                },
                value: ''
            },
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: '*Content Title'
                },
                value: ''
            },
            timeToRead: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    min: '0',
                    max: '59'
                },
                value: ''
            },
            timeToReadUnit: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'minutes', displayValue: 'Minutes'},
                        {value: 'hours', displayValue: 'Hours'}
                    ]
                },
                value: ''
            },
            contentType: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'article', displayValue: 'Article'},
                        {value: 'image', displayValue: 'Image'},
                        {value: 'url', displayValue: 'URL/Link'}
                    ]
                },
                value: ''
            },
            content: {
                elementType: 'textarea',
                elementConfig: {
                   rows: '4',
                   cols: '45',
                   pleaseholder: 'Please enter your content'
                },
                value: ''
            }
        }
    }
}

    render() {
        const formElementsArray = [];

        for (let key in this.state.contentForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contentForm[key]
            });
        }
        console.log(formElementsArray);
        let form = (
            <form>


            </form>
        );

        return (
            <div className={buttons}>
                {form}
            </div>
        );
    }

    export default ContentFormData;