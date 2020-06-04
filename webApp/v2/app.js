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
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  // let name = document.querySelector('#name').value;
  // let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;

  // let det = document.querySelector('#det').value;
  let cost = document.querySelector('#cost').value;
  // let spots = document.querySelector('#spots').value;
  // let bi = document.getElementById("bi").checked;
  // let mc = document.getElementById("mc").checked;
  // let ca = document.getElementById("ca").checked;
  // let pt = document.getElementById("pt").checked;
  // let tr = document.getElementById("tr").checked;
  // let bo = document.getElementById("bo").checked;

  let lat = document.querySelector('#lat').value;
  let lng = document.querySelector('#lng').value;
  let timestamp = firebase.database.ServerValue.TIMESTAMP;

  // firebase.auth().languageCode = 'it';
  // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('submit', {
  //   'size': 'invisible',
  //   'callback': function(response) {
  //     // reCAPTCHA solved, allow signInWithPhoneNumber.
  //     var phoneNumber = phone;
  //     var appVerifier = window.recaptchaVerifier;
  //     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  //     .then(function (confirmationResult) {
  //       // SMS sent. Prompt user to type the code from the message, then sign the
  //       // user in with confirmationResult.confirm(code).
  //
  //       var code = "3453";
  //       var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
  //       sendMessage(phone, cost, lat, lng, timestamp);
  //
  //       window.confirmationResult = confirmationResult;
  //     }).catch(function (error) {
  //       // Error; SMS not sent
  //       window.recaptchaVerifier.render().then(function(widgetId) {
  //         grecaptcha.reset(widgetId);
  //       }
  //     });
  //   }
  // });


  //send message values
  sendMessage(phone, cost, lat, lng, timestamp);

  //Show Alert Message(5)
  document.querySelector('.alert3').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert3').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();

  setTimeout(function(){openWin()}, 500);

}

function openWin() {
  window.open("map.html", "_self");
}
// function verifyCode() {
//   window.open("verify.html", "_self");
// }

//Send Message to Firebase(4)

function sendMessage(phone, cost, lat, lng, timestamp) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    // name: name,
    // email: email,
    phone: phone,
    // det: det,
    cost: cost,
    // spots: spots,
    lat: lat,
    lng: lng,
    // bi: bi,
    // mc: mc,
    // ca: ca,
    // pt: pt,
    // tr: tr,
    // bo: bo,
    timestamp: timestamp
  });
}
