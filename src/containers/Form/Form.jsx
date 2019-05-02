
import React, { Component } from 'react';

import './Form.css';

class AddLinkForm extends Component {

    static defaultProps = {
        onClose() {}
    }
    constructor(props) {
        super(props);
        this.state = {
            owner: '',
            description: "",
            url: '',
            views: 0,
            lastView: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const {owner, description, url, views, lastView} = this.state;
        const {onClose} = this.props;

        return (
            <div className="form-container">
             <form className="add-form" onSubmit={this.handleSubmit}>
             <div className="form-header">
                <p>Add Content Link</p>
                <button 
                    className="close-button"
                    type="button"
                    onClick={onClose}>
                X
                </button>
            </div>
                <div className="form-line">
                    <label htmlFor="form-owner-input">Owner</label>
                </div>
                <div>
                    <input 
                        key="owner" 
                        value={owner} 
                        ype="text" 
                        id="form-owner-input"
                        size={46}
                        autoComplete="off"
                        onChange={this.handleChange}/>
                </div>
                <label
                    htmlFor='description-input'
                    style={{marginTop: '5px'}}
                >
                Description
                </label>
                <textarea
                    key='description'
                    id='description-input'
                    type='Description'
                    name='description'
                    rows='4'
                    cols='40'
                    autoComplete='off'
                    value={description}
                    onChange={this.handleChange}/>
                <div className="form-line">
                    <label htmlFor="form-url-input">Link to content:</label>
                </div>
                <div>
                    <input 
                        key="url" 
                        value={url} 
                        ype="text" 
                        id="form-url-input"
                        size={46}
                        autoComplete="off"
                        onChange={this.handleChange}/>
                </div> 
                <button
                    type="submit"
                    className="buttons"
                    style={{alignSelf: 'flex-end', marginRight: 0}}>
                    ADD
                </button>       
            </form>
            </div>
        )
    }
}

export default AddLinkForm;