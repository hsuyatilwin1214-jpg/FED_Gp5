function updateTime() {
  const now = new Date();
  const formatted = now.toLocaleTimeString(); 
  document.getElementById("timeDisplay").textContent = formatted;
}
setInterval(updateTime, 1000);
