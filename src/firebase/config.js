import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD_HuHESEuR8okaFXLAksSsSkaxUqGsgTs",
  authDomain: "tutorial-demo-ed922.firebaseapp.com",
  projectId: "tutorial-demo-ed922",
  storageBucket: "tutorial-demo-ed922.appspot.com",
  messagingSenderId: "1019614469414",
  appId: "1:1019614469414:web:3f2777e7721b21f34835e7"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
