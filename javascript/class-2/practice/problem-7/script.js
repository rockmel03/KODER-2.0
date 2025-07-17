const btns = document.querySelectorAll("button.btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const target = btn.getAttribute("data-target");

    document.querySelectorAll("section").forEach((section) => {
      section.id === target
        ? section.classList.add("active")
        : section.classList.remove("active");
    });
  });
});
