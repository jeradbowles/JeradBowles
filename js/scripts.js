const submitBtn = document.getElementById('myButton');

const validate = (e) => {
  e.preventDefault();
  const firstname = document.getElementById('firstname');
  const emailAddress = document.getElementById('email-address');
  if (firstname.value === "") {
    alert("firstname enter your first name.");
    firstname.focus();
    return false;
  }
  if (lastename.value === "") {
    alert("firstname enter your last name.");
    lastname.focus();
    return false;
  }
  if (email.value === "") {
    alert("Please enter your email address.");
    email.focus();
    return false;
  }
  
  return true;
}

submitBtn.addEventListener('click', validate);