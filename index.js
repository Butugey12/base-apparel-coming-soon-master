const submit = document.getElementById("submit-btn");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error")
const labelShow = document.getElementById("label");

submit.addEventListener("click" , function(event) {
  event.preventDefault();//prevent form submission

  // validate email input;
  const email = emailInput.value.trim();
  
  if (!isValidEmail(email)) {
    // Show error message and image
    errorMessage.style.display = "block";
    labelShow.style.display = "block";
  }
  else {
    errorMessage.style.display= "none";
    labelShow.style.display="none";
  }
  
})
function isValidEmail(email) {
  // Email validation logic
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}