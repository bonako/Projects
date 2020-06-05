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
  .getElementById('loginform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;

  //send message values
  sendMessage(email, password);
}

function openWin() {
  window.open("map.html", "_self");
}

//Send Message to Firebase(4)

function sendMessage(email, password, paid) {
  var users = firebase.database().ref('users');
  var count = 0;
  users.on("child_added", function(snapshot) {
    var user = snapshot.val();

    if ((email == user.email) && (password == user.password)) {
        window.open("map.html", "_self");
        document.querySelector('.alert3').style.display = 'block';

        //Hide Alert Message After Seven Seconds(6)
        setTimeout(function() {
          document.querySelector('.alert3').style.display = 'none';
        }, 7000);
        setTimeout(function(){openWin()}, 2000);
      }
    else {
      count++;
      };
  });

  if (count != 0) {
    document.querySelector('.alert2').style.display = 'block';
    setTimeout(function() {
      document.querySelector('.alert2').style.display = 'none';
    }, 7000);
    document.getElementById('loginform').reset();
  }


}
