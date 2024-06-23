// Hide the mobile number and email by default
document.getElementById("mobile").style.display = "none";
document.getElementById("email").style.display = "none";

// Show the mobile number and email when the button is clicked
document.getElementById("show-contact").addEventListener("click", function(){
  document.getElementById("mobile").style.display = "block";
  document.getElementById("email").style.display = "block";
});
