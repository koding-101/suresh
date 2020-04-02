const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//Validate email format
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Show input error message
function showError(input, message){
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

//Show success message
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'  
}

//Check required fields
function checkRequired(arr) {
  arr.forEach(function(input) {
    if (input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input)  
    } 
  })
}

//Change first Char to upper case
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//Check email format 
function checkEmail(email) {
  validateEmail(email.value)? showSuccess(email): showError(email, `${getFieldName(email)} format in not correct`)
}

//Check passwords
function checkPasswordsMatch(pwd1, pwd2) {
  if (pwd1.value !== pwd2.value) {
    showError(pwd2, 'Passwords do not match');
  }
}

//Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters`
    )
  } else if (input.value.length > max) {
    showError(
        input,
        `${getFieldName(input)} must be less than ${min} characters`
    )
  } else {
    showSuccess(input)  
  }
}
//Event Listener
form.addEventListener('submit', function(e) {
  e.preventDefault()

  checkRequired([username, email, password, password2])
  if (username.value.length >0) {
    checkLength(username, 3 , 15)
  }
  if (password.value.length > 0) {
    checkLength(password, 6 , 25)
  }
  if (email.value.length > 0) {
    checkEmail(email)
  }
  checkPasswordsMatch(password, password2)
});
