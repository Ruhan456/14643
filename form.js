document.getElementById('loginButton').onclick = function() {
    validatePassword();
  };

  document.getElementById('password').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      validatePassword();
    }
  });

  function validatePassword() {
    var passwordEntered = document.getElementById('password').value;
    var correctPassword = 'Rumi'; // Replace with your actual password

    if (passwordEntered === correctPassword) {
      window.location.href = '14643.html'; // Replace with the actual page you want to redirect to
    } else {
      var alertBox = document.querySelector('.alert-box');
      alertBox.style.top = '0'; // Show the alert box
      alertBox.innerHTML = 'Incorrect password. Please try again.';
    }
  }