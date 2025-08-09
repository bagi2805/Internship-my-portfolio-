function showSuccessMessage(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Invalid email address.");
    return false;
  }
  

  // ✅ Success alert
  alert("Your message has been received successfully! We will contact you soon.");

  // ✅ Reset form fields
  document.getElementById("contact-form").reset();

  return false; // Prevent actual form submission
}

function goHome() {
  const confirmExit = confirm("Are you sure you want to exit this page?");
  if (confirmExit) {
    window.location.href = "#home";
  }
}

