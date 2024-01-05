function reg_success() {
    var firstName = document.getElementsByClassName('name')[0].value;
    var lastName = document.getElementsByClassName('name')[1].value;
    var email = document.getElementsByClassName('text-name')[0].value;
    var password = document.getElementsByClassName('text-name')[1].value;
    var confirmPassword = document.getElementsByClassName('text-name')[2].value;
    var country = document.getElementById('country').value;
  
    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "" || country === "Selectcountry") {
      document.getElementById('error-message').innerText = 'Please fill in all fields.';
      return false;
    } else {
      window.location.href = 'reg-success.html';
      return true;
    }
  }
  