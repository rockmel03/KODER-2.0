const form = document.querySelector("form");
const titleInput = form.querySelector("#title");
const urlInput = form.querySelector("#url");

const bookmarksList = document.querySelector("ul");
const errorElem = document.querySelector("#error");

const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

renderBookmarks();
form.addEventListener("submit", handleFromSubmit);

function renderBookmarks() {
  bookmarksList.innerHTML = "";
  bookmarks.forEach((bookmark) => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.textContent = bookmark.title;
    a.setAttribute("href", bookmark.url);
    a.setAttribute("target", "__blank");

    li.appendChild(a);
    bookmarksList.append(li);
  });
}

function handleFromSubmit(e) {
  e.preventDefault();

  const title = titleInput.value;
  const url = urlInput.value;
  errorElem.textContent = "";

  if (title && url) {
    if (!url.startsWith("http")) {
      return (errorElem.textContent = "Invalid Url");
    }

    bookmarks.push({ title, url });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderBookmarks();
  }
}
