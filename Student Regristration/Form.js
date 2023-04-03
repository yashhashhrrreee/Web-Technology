// Get form element and input fields
const form = document.getElementById('registration-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const gender = document.getElementById('gender');
const dob = document.getElementById('dob');
const mobileNo = document.getElementById('mobile-no');
const address = document.getElementById('address');
const country = document.getElementById('country');
const state = document.getElementById('state');
const city = document.getElementById('city');
const pincode = document.getElementById('pincode');
const qualifications = document.getElementById('qualifications');
const courseApplied = document.getElementById('course-applied');

// Add event listener to form submit event
form.addEventListener('submit', function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Validate input fields
  let errors = [];
  if (firstName.value.trim() === '') {
    errors.push('Please enter your first name');
  }
  if (lastName.value.trim() === '') {
    errors.push('Please enter your last name');
  }
  if (gender.value === '') {
    errors.push('Please select your gender');
  }
  if (dob.value === '') {
    errors.push('Please enter your date of birth');
  }
  if (mobileNo.value.trim() === '') {
    errors.push('Please enter your mobile number');
  } else if (!/^[0-9]{10}$/.test(mobileNo.value.trim())) {
    errors.push('Please enter a valid 10-digit mobile number');
  }
  if (address.value.trim() === '') {
    errors.push('Please enter your address');
  }
  if (country.value === '') {
    errors.push('Please select your country');
  }
  if (state.value.trim() === '') {
    errors.push('Please enter your state');
  }
  if (city.value.trim() === '') {
    errors.push('Please enter your city');
  }
  if (pincode.value.trim() === '') {
    errors.push('Please enter your pincode');
  } else if (!/^[0-9]{6}$/.test(pincode.value.trim())) {
    errors.push('Please enter a valid 6-digit pincode');
  }
  if (qualifications.value.trim() === '') {
    errors.push('Please enter your qualifications');
  }
  if (courseApplied.value === '') {
    errors.push('Please select a course');
  }

  // If there are any errors, display them
  if (errors.length > 0) {
    const errorList = document.getElementById('error-list');
    errorList.innerHTML = '';
    errors.forEach(function(error) {
      const li = document.createElement('li');
      li.innerText = error;
      errorList.appendChild(li);
    });
  } else {
    // If there are no errors, submit the form
    form.submit();
  }
});
