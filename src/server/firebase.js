import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyASZ9GhGzJhUz69L7Qt-ry1Cno22oe9E6o",
  databaseURL:"https://videocall-2469b-default-rtdb.firebaseio.com"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
