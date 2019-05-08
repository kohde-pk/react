
import React, { Component } from 'react';

import '../../App.scss';
import './Form.scss';

class AddLinkForm extends Component {

    static defaultProps = {
       views: 0,
       onSave() {}
    }
    constructor(props) {
        super(props);
        this.state = {
            owner: '',
            title: '',
            contentType: '',
            content: "",
            timeToRead: '',
            timeToReadUnit: '',
            contentDate: '',
            url: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleReset(event) {
        event.preventDefault();
        this.setState({
            owner: '',
            title: '',
            contentType: '',
            content: "",
            timeToRead: '',
            timeToReadUnit: '',
            contentDate: '',
            url: ''
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSave({...this.state});
        this.setState({
            owner: '',
            title: '',
            contentType: '',
            content: "",
            timeToRead: '',
            timeToReadUnit: '',
            contentDate: '',
            url: ''
        })
    }
    
    render() {
        const {owner, title, contentType, content, timeToRead, timeToReadUnit, url, contentDate} = this.state;

        return (
            <div className="form-container">
             <form className="add-form" onSubmit={this.handleSubmit}>
                <div className="form-header">
                    <p>Add an Article</p>
                </div>
                    <div>
                        <input 
                            key="owner" 
                            name="owner"
                            type="text" 
                            id="form-owner-input"
                            size={60}
                            autoComplete="on"
                            placeholder="*Owner Name"
                            value={this.state.owner}
                            onChange={this.handleChange}
                            required/>
                    </div>
                    <div>
                        <input 
                            key="title" 
                            name="title"
                            type="text" 
                            id="form-title-input"
                            size={100}
                            autoComplete="off"
                            placeholder="*Content Title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            required/>
                    </div>
                    <div className="form-line">
                        <label htmlFor="form-title-input">*Time to Read:</label>
                        <input 
                            key="timeToRead"
                            name="timeToRead"
                            type="number" 
                            min="0"
                            max="59"
                            id="form-read-input"
                            autoComplete="off"
                            required
                            value={this.state.timeToRead}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="form-line">
                        <label htmlFor="form-image-input">Image to Display:</label>
                        <select
                            key="image"
                            name="image"
                            id="form-image"
                            value={this.state.image}
                            onChange={this.handleChange}
                            required>
                                <option value="https://media.giphy.com/media/xUOxf9lJKcBDrE6qmk/giphy.gif">Refresh</option>
                                <option value="https://media.giphy.com/media/3rgXBETfAu65Gw6jwA/giphy.gif">Switch On/Off</option>
                                <option value="https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif">Laptop</option>
                        </select>
                    </div>
                    <label
                        htmlFor='content-input'
                        style={{marginTop: '5px'}}>
                    *Content:
                    </label>
                    <textarea
                        key='content'
                        name='content'
                        id='content-input'
                        name='content'
                        rows='16'
                        cols='150'
                        spellCheck='true'
                        autoComplete='off'
                        placeholder="Where you add your text"
                        value={this.state.content}
                        onChange={this.handleChange}
                        required/>
                    <div className="button-container">
                        <button
                            type="button"
                            value="Reset"
                            className="buttons"
                            onClick={this.handleReset}
                            style={{alignSelf: 'flex-end', marginRight: '10px'}}>
                            RESET
                        </button> 
                        <button
                            type="submit"
                            className="buttons"
                            style={{alignSelf: 'flex-end', marginRight: '10px'}}>
                            ADD
                        </button>       
                    </div>
                </form>
            </div>
        )
    }
}

export default AddLinkForm;