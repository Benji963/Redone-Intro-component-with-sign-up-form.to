const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const firstNameError = document.querySelector(".first-name");
const lastNameError = document.querySelector(".last-name");
const emailError = document.querySelector(".email");
const passwordError = document.querySelector(".password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    firstNameError.style.display = "block";
    setError(firstName, "First Name cannot be empty");
  } else {
    firstNameError.style.display = "none";
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    lastNameError.style.display = "block";
    setError(lastName, "Last Name cannot be empty");
  } else {
    lastNameError.style.display = "none";
    setSuccess(lastName);
  }

  if (emailValue === "") {
    emailError.style.display = "block";
    setError(email, "Looks like this is not an email");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Looks like this is not an email");
  } else {
    emailError.style.display = "none";
    setSuccess(email);
  }

  if (passwordValue === "") {
    passwordError.style.display = "block";
    setError(password, "Password cannot be empty");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters");
  } else {
    passwordError.style.display = "none";
    setSuccess(password);
  }
};
