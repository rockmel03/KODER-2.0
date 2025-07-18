const form = document.querySelector("form");

const emailInput = form.querySelector("#email");
const pwdInput = form.querySelector("#password");

const formstate = JSON.parse(localStorage.getItem("formstate")) || {
  email: "",
  password: "",
};
emailInput.value = formstate.email;
pwdInput.value = formstate.password;

let timeout;
const onInputChange = function (e) {
  if (timeout) clearTimeout(timeout);
  const { name, value } = e.target;
  // console.log(e);

  timeout = setTimeout(() => {
    formstate[name] = value;
    localStorage.setItem("formstate", JSON.stringify(formstate));
  }, 500);
};

emailInput.addEventListener("input", onInputChange);
pwdInput.addEventListener("input", onInputChange);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(`email : ${formstate.email}, password: ${formstate.password}`);
});
