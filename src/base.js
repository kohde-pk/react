import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCxCuNGyxjCjCmo9me5I_dR3idmevZexWo",
    authDomain: "content-generator-e7566.firebaseapp.com",
    databaseURL: "https://content-generator-e7566.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp } ;

//this is a default export
export default base;