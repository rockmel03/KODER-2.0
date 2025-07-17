const form = document.querySelector("form");
const list = document.querySelector("ul");

const data = JSON.parse(localStorage.getItem("bookmarks")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const error = form.querySelector("#error");
  const title = form.querySelector("#title").value;
  const url = form.querySelector("#url").value;

  error.textContent = "";

  if (url.startsWith("http")) {
    data.push({ title, url });
    localStorage.setItem("bookmarks", JSON.stringify(data));
    renderBookmarks();
  } else {
    error.textContent = "Url must be starts from 'http://' or 'https://'";
  }
});

renderBookmarks();
function renderBookmarks() {
  list.innerHTML = "";
  data.forEach((item, idx) => {
    //   console.log(item.title, item.url);
    const li = document.createElement("li");
    li.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
    list.append(li);
  });
}
