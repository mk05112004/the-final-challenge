const webTrainingLink = document.getElementById("webTrainingLink");
document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-inputs"); // Updated ID here

    if (messageInput) {
        const showMessageInputButton = document.getElementById("show-message-inputs");

        showMessageInputButton.addEventListener("click", function () {
            if (messageInput.style.display === "none" || messageInput.style.display === "") {
                messageInput.style.display = "block";
            } else {
                messageInput.style.display = "none";
            }
        });
    }
});
// Get the "30DAy Backend" link by its id
const targetId = document.getElementById("targetId");

// Add a click event listener to the link 
webTrainingLink.addEventListener("click", function (event) {
  // Prevent the default link behavior (to avoid reloading the current page)
  event.preventDefault();

  // Redirect to the index.html page
  window.location.href = "index.html";
});


// Get the "Web Training" link by its id


// Add a click event listener to the link
webTrainingLink.addEventListener("click", function (event) {
  // Prevent the default link behavior (to avoid reloading the current page)
  event.preventDefault();

  // Redirect to the web.html page
  window.location.href = "web.html";
});
// Get the "tc Conference" link by its id
const tcConferenceLink = document.getElementById("tcConferenceLink");

// Add a click event listener to the link
tcConferenceLink.addEventListener("click", function (event) {
  // Prevent the default link behavior (to avoid reloading the current page)
  event.preventDefault();

  // Redirect to the conference.html page
  window.location.href = "conference.html";
});
// Get the "innoclickHuck" link by its id
const innoclickHuck = document.getElementById("innoclickHuck");

// Add a click event listener to the link
innoclickHuck.addEventListener("click", function (event) {
  // Prevent the default link behavior (to avoid reloading the current page)
  event.preventDefault();

  // Redirect to the conference.html page
  window.location.href = "huck.html";
});

// Get the "iPhone15Link" link by its id
const iPhone15Link = document.getElementById("iPhone15Link");

// Add a click event listener to the link
iPhone15Link.addEventListener("click", function (event) {
  // Prevent the default link behavior (to avoid reloading the current page)
  event.preventDefault();

  // Redirect to the phone.html page
  window.location.href = "phone.html";
});

