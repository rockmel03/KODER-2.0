const form = document.querySelector("form");
const usernameInput = form.querySelector("#username-input");
const usernameError = form.querySelector("#username-error");

const emailInput = form.querySelector("#email-input");
const emailError = form.querySelector("#email-error");

const passwordInput = form.querySelector("#password-input");
const passwordError = form.querySelector("#password-error");

const errorElem = document.querySelector("#error");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  errorElem.innerHTML = "";
  usernameInput.classList.remove("border-red-500", "outline-red-500");
  emailInput.classList.remove("border-red-500", "outline-red-500");
  passwordInput.classList.remove("border-red-500", "outline-red-500");

  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  const validationResult = validateForm({ username, email, password });

  if (!validationResult.status) {
    if (validationResult.errors?.["username"]) {
      usernameError.textContent = validationResult.errors.username;
      usernameInput.classList.add("border-red-500", "outline-red-500");
      usernameInput.focus();
      return;
    }
    if (validationResult.errors?.["email"]) {
      emailError.textContent = validationResult.errors.email;
      emailInput.classList.add("border-red-500", "outline-red-500");
      emailInput.focus();
      return;
    }
    if (validationResult.errors?.["password"]) {
      passwordError.textContent = validationResult.errors.password;
      passwordInput.classList.add("border-red-500", "outline-red-500");
      passwordInput.focus();
      return;
    }

    return;
  }

  // handle form submittion
  alert("Sign up success! \n" + JSON.stringify({ username, email, password }));
  form.reset();
});

function validateForm({ username, email, password }) {
  const errors = {};

  if (!username) errors.username = "Username is required";
  else if (username.length < 3)
    errors.username = "Username must be more than 3 characters";

  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;

  if (!email) errors.email = "Email is required";
  else if (!emailRegex.test(email)) errors.email = "Email must contain @ and .";

  if (!password) errors.password = "Password is required";
  else if (password.length < 6)
    errors.password = "Password must be more than 6 characters";
  else if (!passwordRegex.test(password)) {
    errors.password = "Password must include letters & a number";
  }

  return { status: Object.keys(errors).length === 0, errors };
}
