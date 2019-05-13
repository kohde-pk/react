import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://content-generator-e7566.firebaseio.com/'
});

export default instance;