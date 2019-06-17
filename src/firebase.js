import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
 apiKey: "AIzaSyCeaP_VG9ZbKmLsK7YIdhZvsA2g99Gv0wA",
 authDomain: "ui-challenge-97b20.firebaseapp.com",
 databaseURL: "https://ui-challenge-97b20.firebaseio.com",
 projectId: "ui-challenge-97b20",
 storageBucket: "ui-challenge-97b20.appspot.com",
 messagingSenderId: "745594925825",
 //appId: "1:745594925825:web:2a7e9f0a2b3eab65"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();