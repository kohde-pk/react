
import React, { Component } from 'react';
import firebase from 'firebase';

import '../../App.scss';
import './Form.scss';
import Login from '../../components/Login/Login';
import { firebaseApp } from '../../base';
import axios from '../../axios';

class AddLinkForm extends Component {

    static defaultProps = {
       views: 0,
       onSave() {}
    }
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            image: 'https://media.giphy.com/media/3ohhwxWDV25DWpgleU/giphy.gif',
            title: '',
            owner: '',
            content: "",
            views: '',
            timeToRead: '',
            dateAdded: '',
            dataCreated: '',
            offLine: [],
            hideEmail: true,
            email: '',
            password: '',
            uid: null,
            userEmail: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.authHandler({ user });
          }
        });
      }

    authHandler = async authData => {
        console.log('User Data', authData);
        this.setState({
            uid: authData.user.uid,
            userEmail: authData.user.email
          });
    }
    
    authenticate = (provider, email, password) => {
        console.log('auth', email);
        if (provider === 'Github') {
            const authProvider = new firebase.auth[`${provider}AuthProvider`]();
            firebaseApp
                .auth()
                .signInWithPopup(authProvider)
                .then(this.authHandler);
        } else if (provider === 'Email') {
            console.log(email);
            const authProvider = new firebase.auth().signInWithEmailAndPassword(email, password);
            firebaseApp
                .auth()
                .signInWithPopup(authProvider)
        }
    };

    logout = async () => {
        console.log("Logging out!");
        await firebase.auth().signOut();
        this.setState({ uid: null });
      };

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSave(data) {
        this.setState((prevState, props) => {
            // const newData = {...data};
            return {
                items: [...this.state.items]
            }
        });
    };

    handleReset(event) {
        event.preventDefault();
        this.setState({
            image: '',
            title: '',
            owner: '',
            content: "",
            timeToRead: ''
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        const record = {
            id: new Date().valueOf(),   
            content: this.state.content,
            dateAdded: new Date(),
            dateCreated: this.state.dataCreated.slice(0, 10),
            image: this.state.image,
            owner: this.state.owner,
            timeToRead: this.state.timeToRead,
            title: this.state.title,
            views: 0
        }
        if (!(window.navigator.onLine)) {
            localStorage.setItem(record.id, JSON.stringify(record));
            console.log(JSON.stringify(record));
        } else {
            axios.post('/content.json', record)
                .then(response => console.log('response'))
                .catch(console.log(record));
    
            this.setState({
                image: '',
                title: '',
                owner: '',
                content: "",
                timeToRead: ''
            })
        }
    };
    
    render() {

        if (!this.state.uid) {
            return (
                <Login 
                    authenticate={this.authenticate} 
                    hideEmail={this.hideEmail} 
                    email={this.email}
                    password={this.password}    
                    />
            );
        }
        return (
            <div className="form-container">
             <form className="add-form" onSubmit={this.handleSubmit}>
                <div className="form-header">
                    <p>Add an Article</p>
                </div>
                <div className="form-area">
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
                        <label htmlFor="form-title-input">*Time to Read (minutes):</label>
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
                                <option value="https://media.giphy.com/media/3og0Ix8tq5zyKybM9a/giphy.gif">Beach</option>
                                <option value="https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif">Cat Typing</option>
                                <option value="https://media.giphy.com/media/26ybvRzJrDKvVl8R2/giphy.gif">Desk</option>
                                <option value="https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif">Laptop</option>
                                <option value="https://media.giphy.com/media/xUOxf9lJKcBDrE6qmk/giphy.gif">Refresh</option>
                                <option value="https://media.giphy.com/media/3o7aCVTfelG4XSbv3y/giphy.gif">Sailboat</option>
                                <option value="https://media.giphy.com/media/3rgXBETfAu65Gw6jwA/giphy.gif">Switch On/Off</option>
                                <option value="https://media.giphy.com/media/gz945ghj1zMyI/giphy.gif">USB</option>
                                <option value="https://media.giphy.com/media/hEWzGqKLNEs4E/giphy.gif">WiFi</option>
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
                        rows='16'
                        spellCheck='true'
                        autoComplete='off'
                        placeholder="Enter your content including Markdown"
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
                </div>
                </form>
            </div>
        );
    }
}

export default AddLinkForm;