const form = document.querySelector('.login-form');
form.addEventListener('submit', loginSubmit);

function loginSubmit(evt) {
  evt.preventDefault();
  const userEmail = evt.target.elements.email.value;
  const userPas = evt.target.elements.password.value;

  if (userEmail && userPas) {
    const UserLoginData = { email: userEmail.trim(), password: userPas.trim() };
    console.log(UserLoginData);
    evt.target.reset();
  } else {
    alert('All form fields must be filled in');
  }
}
