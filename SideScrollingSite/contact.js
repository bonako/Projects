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
let formMessage = firebase.database().ref('contactform');
// let giveaways = firebase.database().ref('giveaways');

//listen for submit event//(1)
document
  .getElementById('contactform')
  .addEventListener('submit', formSubmit);

// document.getElementById('giveawayform').addEventListener('submit', giveawayEntered);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;

  let email = document.querySelector('#email').value;
  let text = document.querySelector('#textarea').value;
  

  //send message values
  sendMessage(name, email, text);

  //Show Alert Message(5)
  document.querySelector('.alert3').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert3').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('contactform').reset();

  // setTimeout(function(){openWin()}, 500);

}

// //Submit form(1.2)
// function giveawayEntered(e) {
//   e.preventDefault();
//   // Get Values from the DOM
//   let name = document.querySelector('#name').value;

//   let email = document.querySelector('#email').value;  

//   //send message values
//   enterGiveaway(name, email);

//   //Show Alert Message(5)
//   document.querySelector('.alert3').style.display = 'block';

//   //Hide Alert Message After Seven Seconds(6)
//   setTimeout(function() {
//     document.querySelector('.alert3').style.display = 'none';
//   }, 7000);

//   //Form Reset After Submission(7)
//   document.getElementById('giveawayform').reset();

//   setTimeout(function(){openWinGiveaway()}, 500);

// }

function openWin() {
  window.open("contact.html", "_self");
}

// function openWinGiveaway() {
//   window.open("giveaways.html", "_self");
// }

//Send Message to Firebase(4)

function sendMessage(name, email, text) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    text: text
  });
}

// function enterGiveaway(name, email) {
//   let newFormMessage = giveaways.push();
//   newFormMessage.set({
//     name: name,
//     email: email
//   });
// }
