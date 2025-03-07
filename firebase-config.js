// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtEjYM88LMBaFH7xVTviVuSRBVDmp9eQM",
  authDomain: "ntu-cat-quiz.firebaseapp.com",
  projectId: "ntu-cat-quiz",
  databaseURL: "https://ntu-cat-quiz-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "ntu-cat-quiz.firebasestorage.app",
  messagingSenderId: "1058077903126",
  appId: "1:1058077903126:web:0646f8c8a12a3f22a02837"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database(); 