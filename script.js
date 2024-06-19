function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit random number
}

function sendOTP() {
  const phoneNumber = document.getElementById("phoneNumber").value;
  otp = generateOTP();

  console.log(`OTP sent to ${phoneNumber}: ${otp}`);
}

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const userOtp = document.getElementById("otp").value;
    if (fullName && email && phoneNumber && otp) {
      if (userOtp == otp.toString()) {
        alert("Registration successful!");
      } else {
        alert("Incorrect OTP. Please try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  });
