const form = document.querySelector("form");
const commentsList = document.querySelector("ul");

const commentsArray = JSON.parse(localStorage.getItem("comments")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const comment = this.querySelector(`input[type="text"]`).value;
  commentsArray.push({ id: Date.now(), content: comment, replies: [] });

  updateLocalStorage();
  commentsList.innerHTML = "";
  renderComments(commentsArray, commentsList);
});

renderComments(commentsArray, commentsList);

function renderComments(comments, list) {
  comments.forEach((comment) => {
    const listItem = document.createElement("li");

    const div = document.createElement("div");
    listItem.append(div);

    const p = document.createElement("p");
    p.textContent = comment.content;
    div.append(p);

    const innerForm = document.createElement("form");
    const replyInput = document.createElement("input");
    replyInput.setAttribute("type", "text");
    replyInput.setAttribute("required", true);

    innerForm.append(replyInput);

    const btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.textContent = "Reply";
    innerForm.append(btn);
    div.append(innerForm);

    const replyList = document.createElement("ul");
    renderComments(comment.replies, replyList);

    listItem.append(replyList);

    innerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      comment.replies.push({
        id: Date.now(),
        content: replyInput.value,
        replies: [],
      });

      updateLocalStorage();
      replyList.innerHTML = "";
      renderComments(comment.replies, replyList);
    });

    list.append(listItem);
  });
}

function updateLocalStorage() {
  localStorage.setItem("comments", JSON.stringify(commentsArray));
}
