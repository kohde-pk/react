import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCxCuNGyxjCjCmo9me5I_dR3idmevZexWo",
    authDomain: "content-generator-e7566.firebaseapp.com",
    databaseURL: "https://content-generator-e7566.firebaseio.com",
    projectId: "content-generator-e7566",
    storageBucket: "content-generator-e7566.appspot.com",
    messagingSenderId: "676260759054",
    appId: "1:676260759054:web:841837047bbc15b8"
});

navigator.serviceWorker
    .register('./serviceWorker.js')
    .then((registration) => {
        firebase.messaging().useServiceWorker(registration);
    });

const base = Rebase.createClass(firebaseApp.database());
const messaging = firebase.messaging();

export { firebaseApp, messaging } ;

//this is a default export
export default base;