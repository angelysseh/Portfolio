// Form submission handler
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Message sent! Thank you for contacting me.");
      form.reset();
    });
  }
});

