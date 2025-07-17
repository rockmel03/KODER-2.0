const input = document.querySelector("input#image-input");
const label = document.querySelector("label");
const errorElem = document.querySelector("#error");

input.addEventListener("input", function (e) {
  errorElem.textContent = "";
  const allowedMimeType = ["image/jpeg", "image/png"];
  const maxAllowedSize = 2 * 1024 * 1024; // 2mb

  if (e.target.files.length > 0) {
    const file = e.target.files[0];

    if (!(allowedMimeType.includes(file.type) && file.size <= maxAllowedSize)) {
      return (errorElem.textContent =
        "Images under 2MB and 'jpeg' or 'png' format are allowed Only ");
    }

    const imageElem = document.createElement("img");
    imageElem.setAttribute("src", URL.createObjectURL(file));

    label.innerHTML = "";
    console.log(imageElem);
    label.append(imageElem);
  } else {
    errorElem.textContent("Please select a file first");
  }
});
