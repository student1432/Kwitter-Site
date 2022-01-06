var firebaseConfig = {
      apiKey: "AIzaSyATA3XIe4SLnWKVI4LMjel00vs86pAVVxM",
      authDomain: "kwitter-7d5dc.firebaseapp.com",
      databaseURL: "https://kwitter-7d5dc-default-rtdb.firebaseio.com",
      projectId: "kwitter-7d5dc",
      storageBucket: "kwitter-7d5dc.appspot.com",
      messagingSenderId: "279655547922",
      appId: "1:279655547922:web:59b0e894a61bcef30a84cb",
      measurementId: "G-PPX21KY8Z8"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("UserName");

   document.getElementById("user_name").innerHTML = "welcome " + user_name + " !!!!";

   function addRoom()
  {
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
           purpose : "adding a room name"

     });
       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html";
  }  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       row = "<div class='room_name' id="+Room_names+"  onclick='redirectToRoomName(this.id)'  >#"+Room_names+"</div><hr>";
       
       document.getElementById("output").innerHTML += row;

      });
  });

 

}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "Kwitter_page.html";
       
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";

}