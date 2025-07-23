const addBtn = document.querySelector("#add-btn");
const notesContainer = document.querySelector("#notes-container");

const notes = JSON.parse(localStorage.getItem("notes")) || [];

renderNotes();
function renderNotes() {
  notes.forEach((item) => {
    const note = createNote(item);
    notesContainer.appendChild(note);
  });
}

addBtn.addEventListener("click", function (e) {
  const newNote = {
    id: Date.now(),
    title: "",
    description: "",
    x: 0,
    y: 0,
  };

  notes.push(newNote);
  updateLocalStorage();

  const note = createNote(newNote);
  notesContainer.appendChild(note);
});

function createNote({ id, title, description, x, y }) {
  const note = document.createElement("div");
  note.id = id;
  note.setAttribute("draggable", "true");
  note.className =
    "note absolute w-60 aspect-square p-4 flex flex-col bg-yellow-100 shadow-lg rounded-xl gap-3 hover:cursor-grab";

  if (y) note.style.top = y + "px";
  if (x) note.style.left = x + "px";
  if (x && y) note.style.transform = "translate(-50%,-50%)";

  const h2 = document.createElement("h2");
  h2.setAttribute("contenteditable", "true");
  h2.className =
    "note-title bg-transparent border-b-2 border-yellow-400 focus:outline-none text-lg font-semibold mb-2 text-yellow-500";
  h2.textContent = title || "title";

  const p = document.createElement("p");
  p.setAttribute("contenteditable", "true");
  p.className =
    "note-description bg-transparent resize-none flex-1 text-base text-yellow-400 focus:outline-none";
  p.textContent = description || "Description";

  note.appendChild(h2);
  note.appendChild(p);

  const noteElem = notes.find((n) => n.id === id);
  const index = notes.indexOf(noteElem);

  note.addEventListener("input", function (e) {
    if (index !== -1) {
      if (e.target.classList.contains("note-title")) {
        notes[index].title = e.target.textContent;
      }
      if (e.target.classList.contains("note-description")) {
        notes[index].description = e.target.textContent;
      }
      updateLocalStorage();
    }
  });

  // Add drag event listeners
  note.addEventListener("dragstart", function (e) {
    this.classList.add("absolute");

    if (index !== -1) {
      notes[index].y = e.clientY;
      notes[index].x = e.clientX;
      updateLocalStorage();
    }
  });

  note.addEventListener("drag", function (e) {
    this.style.top = e.clientY + "px";
    this.style.left = e.clientX + "px";
    this.style.transform = "translate(-50%,-50%)";

    if (index !== -1) {
      notes[index].y = e.clientY;
      notes[index].x = e.clientX;
      updateLocalStorage();
    }
  });

  note.addEventListener("dragend", function (e) {
    this.style.top = e.clientY + "px";
    this.style.left = e.clientX + "px";
    if (index !== -1) {
      notes[index].y = e.clientY;
      notes[index].x = e.clientX;
      updateLocalStorage();
    }
  });

  return note;
}

let timeout;
function updateLocalStorage() {
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    } else {
      localStorage.removeItem("notes");
    }
  }, 500);
}
