//Nicholas Estrada U78045514
function checkForm() {
  //Code referenced from https://www.w3resource.com/javascript/form/javascript-sample-registration-form-validation.php
  if (fname_validation()) {
    if (lname_validation()) {
      if (addr_validation()) {
        if (validateEmail()) {
          if (allnumeric()) {
            if (country_validation()) {
              if (validsex()) {
                if (passid_validation(password, 10, 20)) {
                  if (password_match(password, conf_password)) {

                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}

function fname_validation() {
  var namereg = /^[a-zA-Z]+$/;
  var fname = document.getElementById("fname").value;

  if (!namereg.test(fname)) {
    alert('Please enter your first name.');
    document.getElementById("fname").focus();
    return false;
  } else {
    return true;
  }
}

function lname_validation() {
  var namereg = /^[a-zA-Z]+$/;
  var lname = document.getElementById("lname").value;

  if (!namereg.test(lname)) {
    alert('Please enter your last name.');
    document.getElementById("lname").focus();
    return false;
  } else {
    return true;
  }
}

function addr_validation() {
  var address = document.getElementById("address").value;
  var user_input = /^[0-9\sa-zA-Z]+$/;

  if (!user_input.test(address)) {
    alert('Address must contain alphanumeric characters only.');
    return false;
  } else {
    document.getElementById("address").focus();
    return true;
  }
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  if (email.value.match(emailreg) || email == " ") {
    return true;
  } else {
    alert('Invalid email address.');
    document.getElementById("email").focus();
    return false;
  }
}

function allnumeric() {
  var phonenum = document.getElementById("phonenum").value;
  var numreg = /^[0-9]+$/;
  if (phonenum.value.match(numreg) || phonenum == " ") {
    return true;
  } else {
    alert('Phone number must only contain numbers.');
    document.getElementById("phonenum").focus();
    return false;
  }
}

function country_validation() {
  var country = document.getElementById("country").value;
  if (country.value == "Default") {
    alert('Please select a country from the list.');
    document.getElementById("country").focus();
    return false;
  } else {
    return true;
  }
}

function validsex() {
  var male = document.getElementById("male").value;
  var female = document.getElementById("female").value;

  x = 0;

  if (male.checked) {
    x++;
  }
  if (female.checked) {
    x++;
  }
  if (x == 0) {
    alert('Please select between male or female.');
    document.getElementById("male").focus();
    return false;
  } else {
    alert('Form Succesfully Submitted!');
    return true;
  }
}

function password_validation(password, min, max) {
  var password_len = password.value.length;

  if (password_len == 0 || password_len >= min || password_len < max) {
    alert("Password should not be empty and length should be between " + min + " to " + max);
    document.getElementById("password").focus();
    return false;
  }
  location.reload();
  return true;
}

function password_match(password, conf_password) {
  if (!password.value.match(conf_password)) {
    alert('Passwords do not match.');
    document.getElementById("conf_password").focus();
    return false;
  } else {
    return true;
  }
}
