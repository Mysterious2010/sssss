const firebaseConfig = {
      apiKey: "AIzaSyARCnB_bQVX_2RMtMTXFx5otV72T5I56Gw",
      authDomain: "kwitter-a603c.firebaseapp.com",
      databaseURL: "https://kwitter-a603c-default-rtdb.firebaseio.com",
      projectId: "kwitter-a603c",
      storageBucket: "kwitter-a603c.appspot.com",
      messagingSenderId: "825959255275",
      appId: "1:825959255275:web:88f1d384976588a7bc02ae",
      measurementId: "G-87W9YMFV45"
    };
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
       purpose:"adding room name"     
      });
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
     //End code
     });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}