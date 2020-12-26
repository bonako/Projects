// code credit: https://firebase.google.com/docs/database/web/read-and-write

// Initialize Firebase(2)
var firebaseConfig = {
  apiKey: "AIzaSyDQ62BC1Gcg-tJJgl7rkqxuDO8x7cSP_08",
  authDomain: "parkingrabbit-bf78a.firebaseapp.com",
  databaseURL: "https://parkingrabbit-bf78a.firebaseio.com",
  projectId: "parkingrabbit-bf78a",
  storageBucket: "parkingrabbit-bf78a.appspot.com",
  messagingSenderId: "94492827210",
  appId: "1:94492827210:web:43ef5ed366dac05eb2d0b3"
};
firebase.initializeApp(firebaseConfig);

//Reference for form collection(3)
let formMessage = firebase.database().ref('giveawayform');

//listen for submit event//(1)
document
  .getElementById('giveawayform')
  .addEventListener('submit', formSubmit);


//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;

  let email = document.querySelector('#email').value;  

  //send message values
  sendMessage(name, email);

  //Show Alert Message(5)
  document.querySelector('.alert3').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert3').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('giveawayform').reset();

  setTimeout(function(){openWin()}, 500);

}


function openWin() {
  window.open("giveaways.html", "_self");
}


//Send Message to Firebase(4)

function sendMessage(name, email) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email
  });
}

// Code to retrieve and display content from database to html page
var entered = firebase.database().ref('giveawayform');

entered.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    document.getElementById("entered").innerHTML += childSnapshot.val().name + "<br>";
  });
});