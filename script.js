// Simulated OTP generation function (for demo purposes)
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit random number
  }
  
  // Function to send OTP
  function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const otp = generateOTP();
    
    // Normally this would be sent via SMS or email, here we'll just display it
    console.log(`OTP sent to ${phoneNumber}: ${otp}`);
  }
  
  // Form submission handling
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Here you would typically validate form fields and send data to server
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const otp = document.getElementById('otp').value;
  
    // Example validation (you should implement more robust validation)
    if (fullName && email && phoneNumber && password && otp) {
      // Simulate registration success (replace with actual AJAX call)
      alert('Registration successful!');
      // Here you would typically send data to server for further processing
    } else {
      alert('Please fill in all fields.');
    }
  });
  