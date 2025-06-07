// Messages array
const messages = [
  "I love you more than anything in this world. 💌",
  "Every moment with you is a blessing. 🌹",
  "You are the reason I smile every day. 😍",
  "My heart beats your name always. ❤️",
  "I promise to stand by you forever. 🌙",
  "You are the most beautiful fate I've ever had. ✨",
];

// Get elements
const messageBox = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

// Button click event
nextBtn.addEventListener("click", () => {
  index++;
  messageBox.classList.remove("show");

  setTimeout(() => {
    if (index < messages.length) {
      messageBox.innerText = messages[index];
    } else {
      messageBox.innerText = "No more love messages 💖";
      nextBtn.disabled = true;
      nextBtn.innerText = "Finished 💘";
    }
    messageBox.classList.add("show");

    // Vibrate instead of playing sound
    if (navigator.vibrate) {
      navigator.vibrate(200); // vibrate for 200ms
    } else {
      console.log("Vibration not supported on this device");
    }
  }, 300);
});

// Time update function
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours.toString().padStart(2, "0");

  document.getElementById(
    "current-time"
  ).textContent = `${hours}:${minutes} ${ampm}`;
}

updateTime();
setInterval(updateTime, 60000);
