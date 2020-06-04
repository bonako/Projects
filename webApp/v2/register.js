// Initialize Firebase(2)
var config = {
  apiKey: "AIzaSyDQ62BC1Gcg-tJJgl7rkqxuDO8x7cSP_08",
  authDomain: "parkingrabbit-bf78a.firebaseapp.com",
  databaseURL: "https://parkingrabbit-bf78a.firebaseio.com",
  projectId: "parkingrabbit-bf78a",
  storageBucket: "parkingrabbit-bf78a.appspot.com",
  messagingSenderId: "94492827210",
  appId: "1:94492827210:web:43ef5ed366dac05eb2d0b3"
};
firebase.initializeApp(config);

//Reference for form collection(3)
let formMessage = firebase.database().ref('users');

//listen for submit event//(1)
document
  .getElementById('registrationForm')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let paid = "no";


  //send message values
  sendMessage(email, password, paid);

  //Show Alert Message(5)
  document.querySelector('.alert3').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert3').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationForm').reset();

  setTimeout(function(){openWin()}, 2000);

}

function openWin() {
  window.open("landing.html", "_self");
}

//Send Message to Firebase(4)

function sendMessage(email, password, paid) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    email: email,
    password: password,
    paid: paid,
  });
}
