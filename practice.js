
const firebaseConfig = {
    apiKey: "AIzaSyDrq4FrT6dfMXXtToqK9cuaB3lXPtyCGq0",
    authDomain: "project-41-fdab2.firebaseapp.com",
    databaseURL: "https://project-41-fdab2-default-rtdb.firebaseio.com",
    projectId: "project-41-fdab2",
    storageBucket: "project-41-fdab2.appspot.com",
    messagingSenderId: "712503839209",
    appId: "1:712503839209:web:46493d72c0fc0bf71ea378",
    measurementId: "G-65C382B6YC"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function  addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
}