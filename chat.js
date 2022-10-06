// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDoqm641DlDyukOMwkwRFIuKiWeLyEHs7w",
    authDomain: "project100-6d548.firebaseapp.com",
    databaseURL: "https://project100-6d548-default-rtdb.firebaseio.com",
    projectId: "project100-6d548",
    storageBucket: "project100-6d548.appspot.com",
    messagingSenderId: "944652791257",
    appId: "1:944652791257:web:2d8fd38c9d56a8a6453dc8"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



