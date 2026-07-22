function updateTime() {
  const now = new Date();
  const formatted = now.toLocaleTimeString(); 
  document.getElementById("timeDisplay").textContent = formatted;
}
setInterval(updateTime, 1000);

// ----- Part 2: Countdown -----
  // Set your target date/time here
  const targetDate = new Date("2026-08-01T00:00:00");
 
  function updateCountdown() {
    const now = new Date();
    let diff = targetDate - now; // milliseconds remaining
 
    if (diff <= 0) {
      document.getElementById("timeDisplay").textContent = "Time's up!";
      return;
    }
 
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
 
    document.getElementById("timeDisplay").textContent =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  }

