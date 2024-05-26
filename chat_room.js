const firebaseConfig = {
    apiKey: "AIzaSyARO-06iEMxsxMwgriUo6-3WRw85SHLcAA",
    authDomain: "chat-b1b44.firebaseapp.com",
    databaseURL: "https://chat-b1b44-default-rtdb.firebaseio.com",
    projectId: "chat-b1b44",
    storageBucket: "chat-b1b44.appspot.com",
    messagingSenderId: "955370242004",
    appId: "1:955370242004:web:d595237a23ef1c8ed1a041"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome " + user_name + "!"
function addRoom(){
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding Room Name"
  });

  window.location = "chat_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 //End code
 });});}
getData();

function redirectToRoomName(name){
  localStorage.setItem("roomName",name);
  window.location = "chat_page";
}