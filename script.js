// 🎮 Part 1: Event Handling
document.getElementById("messageBtn").addEventListener("click", function () {
  document.getElementById("messageOutput").textContent = "Button was clicked!";
});

// 🎮 Part 2: Interactive Elements
// Light/Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", function () {
  count++;
  document.getElementById("count").textContent = count;
});

// FAQ Section (toggle answer on click)
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");
faqAnswer.style.display = "none"; // hide initially
faqQuestion.addEventListener("click", function () {
  faqAnswer.style.display = faqAnswer.style.display === "none" ? "block" : "none";
});

// 📋✅ Part 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success Message
  if (isValid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully! 🎉";
    document.getElementById("signupForm").reset();
  }
});
