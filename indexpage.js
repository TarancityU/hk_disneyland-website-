





document.addEventListener("DOMContentLoaded", function() {
  const promotionMessages = [
  "DISNEY PREMIER ACCESS & 1-DAY TICKET COMBO, STARTING FROM HK $798",
  "DISNEY PREMIER ACCESS & 8-ATTRACTIONS WITH 1 SHOW, STARTING FROM HK $379",
  "DISNEY PREMIER ACCESS - 1-ATTRACTION, STARTING FROM HK $79"
];

// Get the promotion information block and message element
const promotionInfo = document.getElementById("promotion_information");
const message = document.getElementById("messagee");

// Set a random message on page load
message.textContent = promotionMessages[Math.floor(Math.random() * promotionMessages.length)];

// Set up a timer to change the message every 3 seconds
let messageTimer = setInterval(() => {
  // Get a new random message
  const newMessage = promotionMessages[Math.floor(Math.random() * promotionMessages.length)];
  
  // Fade out the message, change the text, and fade it back in
  message.style.opacity = 0;
  setTimeout(() => {
    message.textContent = newMessage;
    message.style.opacity = 1;
  }, 500);
}, 3000);

// Get the video element and sources
const video = document.getElementById("Video1");
const sourceMp4 = document.querySelector('source[type="video/mp4"]');
const sourceOgg = document.querySelector('source[type="video/ogg"]');

// Set the default video source
sourceMp4.src = "https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.mp4";
sourceOgg.src = "https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.ogg";
video.load();

// Set up a timer to switch the video every time it ends

video.addEventListener("ended", () => {
  // Switch the source
  if (sourceMp4.src.endsWith("Castle.mp4")) {
    sourceMp4.src = "https://personal.cs.cityu.edu.hk/~cs2204/video/Musical_Journey.mp4";
    sourceOgg.src = "https://personal.cs.cityu.edu.hk/~cs2204/video/Musical_Journey.ogg";
  } else {
    sourceMp4.src = "https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.mp4";
    sourceOgg.src = "https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.ogg";
  }
  
  // Load and play the new video
  video.load();
  video.play();
});






  // Get references to the form elements
  const dateInput = document.getElementById("date");
  const timeSelect = document.getElementById("time");
  const guestsInput = document.getElementById("guests");
  const form = document.getElementById("myform");
  const errorSpan = document.getElementById("error");

  // Add a submit event listener to the form
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Get the values from the form
    const date = dateInput.value.trim();
    const time = timeSelect.value.trim();
    const guests = guestsInput.value.trim();

    // Check if any of the fields are blank
    if (date === "" || time === "" || guests === "") {
      errorSpan.innerText = "Data not completed, please re-enter";
      return;
    }

    // Call the reserve function with the form data
    const reservationResult = reserve(date, time, guests);

    // Display a message based on the result of the reservation
    if (reservationResult) {
      alert("Reservation done. Thank you.");
    } else {
      alert("Disneyland has reached the maximum number of visitors for the day");
    }

    // Clear the form and reset the error message
    form.reset();
    errorSpan.innerText = "";
  });

  

});

