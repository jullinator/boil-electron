let firebase = require('firebase')

  var config = {
    apiKey: "AIzaSyBbSWqoToaDUaH5MHPN8xjVPzo6jtvKbxo",
    authDomain: "library-357fa.firebaseapp.com",
    databaseURL: "https://library-357fa.firebaseio.com",
    storageBucket: "library-357fa.appspot.com",
    messagingSenderId: "338664189898"
  };
  firebase.initializeApp(config);
  const db = firebase.database()
  const auth = firebase.auth()
  module.exports = {
  	db,
  	auth
  }