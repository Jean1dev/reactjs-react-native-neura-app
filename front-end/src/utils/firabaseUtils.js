import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBTF8VlDFbLknBBRuO5fKxiJ1kNyjcrsXU",
    authDomain: "neuraapp-d16f5.firebaseapp.com",
    databaseURL: "https://neuraapp-d16f5.firebaseio.com",
    projectId: "neuraapp-d16f5",
    storageBucket: "neuraapp-d16f5.appspot.com",
    messagingSenderId: "234137561137"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();