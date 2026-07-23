function updateTime() {
  const now = new Date(); // takes exact date and time from user's computer and saves it in 'now' variable
  const formatted = now.toLocaleTimeString(); // turns raw date/time into readable time string based on user's local standard format
  document.getElementById("timeDisplay").textContent = formatted; //finds html element with id 'timeDisplay' and swaps its text content with newly formatted time string
}
setInterval(updateTime, 1000); // 1000 milliseconds -> 1second, just means to change/ update the time every second

// Set the date we're counting down to
var countDownDate = new Date("July 22, 2026 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
