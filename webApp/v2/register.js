// Initialize Firebase(2)
var config = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  databaseURL: "YOUR_URL",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_ID"
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
