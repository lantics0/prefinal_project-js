// ---------- 1. Dark mode button ----------
var themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light mode";
  } else {
    themeBtn.textContent = "Dark mode";
  }
});


// ---------- 2. Back to top button ----------
var toTop = document.getElementById("toTop");

// Show the button only after scrolling down 400px
window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});

// Go back to the top when clicked
toTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// ---------- 3. Project filter ----------
var filterButtons = document.querySelectorAll(".filters button");
var projects = document.querySelectorAll(".project");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var choice = button.getAttribute("data-filter"); // all, done, or wip

    projects.forEach(function (project) {
      var badge = project.querySelector(".badge");

      if (choice === "all" || badge.classList.contains(choice)) {
        project.style.display = "";      // show it
      } else {
        project.style.display = "none";  // hide it
      }
    });
  });
});


// ---------- 4. Click email to copy ----------
var emailLink = document.querySelector('a[href^="mailto:"]');

emailLink.addEventListener("click", function (event) {
  event.preventDefault(); // stop the mail app from opening

  var email = "jmlanticse679@gmail.com";
  navigator.clipboard.writeText(email);
  alert("Email copied!");
});