//
//
//Code from W3schools: https://www.w3schools.com/howto/howto_js_countdown.asp
//
//

// var d = new Date(2020,8,31,0,0,0,0);
// var end = d.getTime();

// var countdown = setInterval(function() {
//   var now = new Date().getTime();
//   let timeleft = Math.floor(end-now/1000);
//   var days = Math.floor(timeleft / (60 * 60 * 24));
//   var hours = Math.floor((timeleft % (* 60 * 60 * 24)) / (60 * 60));
//   var minutes = Math.floor((timeleft % (* 60 * 60)) / (60));
//   var seconds = Math.floor((timeleft % (60)));

//   document.getElementById("time").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
// });


// Set the date we're counting down to
var countDownDate = new Date("Aug 31, 2020 11:59:59").getTime();

// Update the count down every 1 second
var timer = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var time = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (time < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "OVER";
  }
}, 1000);

// set minutes
//var mins = Math.floor(((giveawayEnd-nowTimeStamp)/1000)/60);
 
// calculate the seconds (don't change this! unless time progresses at a different speed for you...)
//var secs = (giveawayEnd-nowTimeStamp)/1000;
// function countdown() {
//   setTimeout('Decrement()',1000);
// }
// function Decrement() {
//   if (document.getElementById) {
//     days = document.getElementById("days");
//     hours = document.getElementById("hours");
//     minutes = document.getElementById("minutes");
//     seconds = document.getElementById("seconds");
//     // if less than a minute remaining
//     if (seconds < 59) {
//       seconds.value = secs;
//     }
//                 else {
//                   days.value = getdays();
//                   hours.value = gethours();
//       minutes.value = getminutes();
//       seconds.value = getseconds();
//       document.getElementById("time").innerHTML = ds + "d " + hrs + "h "
//   + mins + "m " + secs + "s ";
//     }
//                 if(mins<2)
//                     {
//                         minutes.style.color="red";
//                         seconds.style.color="red";
//                     }
//                  if(mins<0)
//                  {
// alert('time up');
// document.forms["s"].submit();
// //location.href = "index.jsp";
// days.value=0;
// hours.value=0;
// minutes.value=0;
// seconds.value=0;
//                  }
//                  else
//                      {
//     secs--;
//     setTimeout('Decrement()',1000);
//                      }
//             }
// }
// function getdays() {
//   // minutes is seconds divided by 60, rounded down
//   ds = Math.floor(gethours() / 24);
       
//   return ds;
// }
// function gethours() {
//   // minutes is seconds divided by 60, rounded down
//   hrs = hrs-Math.floor(ds *24 );
       
//   return hrs;
// }
// function getminutes() {
//   // minutes is seconds divided by 60, rounded down
//   mins = mins-Math.floor(hrs * 60);
       
//   return mins;
// }
// function getseconds() {
//   // take mins remaining (as seconds) away from total seconds remaining
//   return secs-Math.round(mins *60);
// }
