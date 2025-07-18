const students = [
  { rollNo: 1, name: "Aarav Sharma", age: 16, marks: 88 },
  { rollNo: 2, name: "Priya Verma", age: 17, marks: 92 },
  { rollNo: 3, name: "Rohan Mehta", age: 16, marks: 75 },
  { rollNo: 4, name: "Simran Kaur", age: 15, marks: 81 },
  { rollNo: 5, name: "Vikram Patel", age: 17, marks: 67 },
  { rollNo: 6, name: "Anjali Rao", age: 16, marks: 95 },
  { rollNo: 7, name: "Kabir Das", age: 15, marks: 73 },
  { rollNo: 8, name: "Neha Sinha", age: 16, marks: 89 },
  { rollNo: 9, name: "Yash Malhotra", age: 17, marks: 78 },
  { rollNo: 10, name: "Divya Nair", age: 15, marks: 84 },
];

const studentsList = document.querySelector("ul");
const listBar = document.querySelector("#list-bar");

renderStudentsList(students);
function renderStudentsList(data) {
  studentsList.innerHTML = "";
  data.forEach((student) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = ` <p>${student.rollNo}</p>
      <p>${student.name} </p>
      <p>${student.age} </p>
      <p>${student.marks}</p>`;

    studentsList.appendChild(listItem);
  });
}

const sortedBy = {
  roll: 1,
  name: 1,
  age: 1,
  marks: 1,
};
listBar.addEventListener("click", function (e) {
  const id = e.target.id;
  if (!id) return;

  if (id === "roll") {
    students.sort((a, b) =>
      sortedBy[id] === 1 ? b.rollNo - a.rollNo : a.rollNo - b.rollNo
    );
  } else if (id === "name") {
    // sort according to name

    students.sort((a, b) => {
      /*  const char1Ascii = a.name.charCodeAt(0);
      const char2Ascii = b.name.charCodeAt(0);

      return sortedBy[id] === 1
        ? char2Ascii - char1Ascii
        : char1Ascii - char2Ascii; */

      return sortedBy[id] === 1
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
  } else if (id === "age") {
    students.sort((a, b) =>
      sortedBy[id] === 1 ? b.age - a.age : a.age - b.age
    );
  } else if (id === "marks") {
    students.sort((a, b) =>
      sortedBy[id] === 1 ? b.marks - a.marks : a.marks - b.marks
    );
  }

  sortedBy[id] === 1 ? (sortedBy[id] = 0) : (sortedBy[id] = 1);
  renderStudentsList(students);
});
