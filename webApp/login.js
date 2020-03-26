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
  .getElementById('loginForm')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;

  //send message values
  sendMessage(email, password);

  //Show Alert Message(5)
  //document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  // setTimeout(function() {
  //   document.querySelector('.alert').style.display = 'none';
  // }, 7000);

  //Form Reset After Submission(7)
  //document.getElementById('loginForm').reset();

  //setTimeout(function(){openWin()}, 2000);

}

function openWin() {
  window.open("pay.html", "_self");
}

//Send Message to Firebase(4)

function sendMessage(email, password, paid) {
  // let newFormMessage = formMessage.push();
  // newFormMessage.set({
  //   email: email,
  //   password: password,
  //   paid: paid,
  // });

  var users = firebase.database().ref('users');
  var count = 0;
  users.on("child_added", function(snapshot) {
    var user = snapshot.val();

    if ((email == user.email) && (password == user.password)) {
        document.querySelector('.alert').style.display = 'block';

        //Hide Alert Message After Seven Seconds(6)
        setTimeout(function() {
          document.querySelector('.alert').style.display = 'none';
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
    document.getElementById('loginForm').reset();
  }


}
