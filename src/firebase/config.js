import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
apiKey: import.meta.env.VITE_API_KEY,
authDomain: "songstream-v2.firebaseapp.com",
projectId: "songstream-v2",
storageBucket: "songstream-v2.appspot.com",
messagingSenderId: "463532209578",
appId: "1:463532209578:web:a4d793b787aafef566e7d3"
 };



 // init firebase
 firebase.initializeApp(firebaseConfig)
 
 // init services
 const projectFirestore = firebase.firestore()
 const projectAuth = firebase.auth()
 const projectStorage = firebase.storage()
 
 // timestamp
 const timestamp = firebase.firestore.FieldValue.serverTimestamp
 
 export { projectFirestore, projectAuth, timestamp, projectStorage }
 