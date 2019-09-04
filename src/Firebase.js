import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyDd6DjGFzBaBBnBlpwrWZPV9lEmei77UjY",
  authDomain: "vue-boards-85e81.firebaseapp.com",
  databaseURL: "https://vue-boards-85e81.firebaseio.com",
  projectId: "vue-boards-85e81",
  storageBucket: ""
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
