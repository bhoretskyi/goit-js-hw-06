const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const mailFormEl = event.currentTarget.elements.email.value;
  const passwordFormEl = event.currentTarget.elements.password.value;
  if (mailFormEl === "" || passwordFormEl === "") {
    return alert("всі поля повинні бути заповнені");

  } 
  const formData = {
    mailFormEl,
    passwordFormEl,
  };
  console.log(formData);
  form.reset();
}
