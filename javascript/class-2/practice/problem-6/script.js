const resendBtn = document.querySelector("#resend-btn");

resendBtn.addEventListener("click", function (e) {
  const timeElem = document.querySelector("#time");

  let time = 15; //in seconds
  timeElem.textContent = time + "s";
  this.setAttribute("disabled", true);

  const interval = setInterval(() => {
    time--;

    timeElem.textContent = time + "s";
    if (time <= 0) {
      timeElem.textContent = "";
      this.disabled = false;
      clearInterval(interval);
    }
  }, 1000);
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const inputValue = document.querySelector("input#otp").value;
  alert("your OTP is " + inputValue);
});
