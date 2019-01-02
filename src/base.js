import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC2Kikx6T6xnPQbTlI9WY0JXh9Pm1OZZxY",
  authDomain: "learning-beninner-react.firebaseapp.com",
  databaseURL: "https://learning-beninner-react.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
