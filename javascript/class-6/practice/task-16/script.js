const btnsContainer = document.querySelector("#btns-container");
const toastConatiner = document.querySelector("#toast-container");

btnsContainer.addEventListener("click", function (e) {
  if (e.target.id === "success-btn") {
    toast.success("This is a Success Toast");
  }
  if (e.target.id === "error-btn") {
    toast.error("This is a Error Toast");
  }
  if (e.target.id === "info-btn") {
    toast.info("This is a Info Toast");
  }
});

function toast(
  message,
  { background, color } = { background: "white", color: "black" }
) {
  const toastElem = document.createElement("div");
  toastElem.className =
    "w-full max-w-md px-4 py-2 rounded shadow-lg animate-fade-in";
  toastElem.style.background = background;
  toastElem.style.color = color;

  toastElem.textContent = message;
  toastConatiner.appendChild(toastElem);
  setTimeout(() => {
    toastElem.remove();
  }, 3000);
}

toast.__proto__.success = function (message) {
  toast(message, { background: "#16A34A", color: "white" });
};

toast.__proto__.error = function (message) {
  toast(message, { background: "#DF2B2B", color: "white" });
};

toast.__proto__.info = function (message) {
  toast(message, { background: "#3B82F6", color: "white" });
};
