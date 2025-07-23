const commentsContainer = document.querySelector(".comments");

function handleFormSubmit(e) {
  e.preventDefault();

  const commentValue = this.querySelector("input").value;

  const newComment = document.createElement("div");
  newComment.className = "comment bg-white p-4 rounded shadow mb-4";

  const header = document.createElement("div");
  header.className = "flex items-center mb-2";

  const userSpan = document.createElement("span");
  userSpan.className = "font-semibold text-gray-800 mr-2";
  userSpan.textContent = "user1";

  const timeSpan = document.createElement("span");
  timeSpan.className = "text-xs text-gray-500";
  timeSpan.textContent = "2 hours ago";

  header.appendChild(userSpan);
  header.appendChild(timeSpan);

  const commentText = document.createElement("p");
  commentText.className = "text-gray-700 mb-2";
  commentText.textContent = commentValue;

  const actions = document.createElement("div");
  actions.className = "flex space-x-4 text-sm text-gray-500";

  const replyBtn = document.createElement("button");
  replyBtn.className = "reply hover:underline";
  replyBtn.textContent = "Reply";

  const upvoteBtn = document.createElement("button");
  upvoteBtn.className = "hover:underline";
  upvoteBtn.textContent = "Upvote";

  const downvoteBtn = document.createElement("button");
  downvoteBtn.className = "hover:underline";
  downvoteBtn.textContent = "Downvote";

  actions.appendChild(replyBtn);
  actions.appendChild(upvoteBtn);
  actions.appendChild(downvoteBtn);

  newComment.appendChild(header);
  newComment.appendChild(commentText);
  newComment.appendChild(actions);

  const parentReplyBtn = this.parentElement.querySelector(".reply");
  if (parentReplyBtn) parentReplyBtn.disabled = false;

  this.parentElement.appendChild(newComment);
  this.remove();
}

function attachForm(element) {
  const form = document.createElement("form");
  form.className = "flex items-center space-x-2 mt-2";
  const input = document.createElement("input");
  input.type = "text";
  input.name = "reply";
  input.placeholder = "Type your reply";
  input.className =
    "border rounded px-3 py-2 flex-1 focus:outline-none focus:ring focus:border-blue-300";
  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Send";
  submit.className =
    "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition";
  form.appendChild(input);
  form.appendChild(submit);

  element.append(form);
  input.focus();

  form.addEventListener("submit", handleFormSubmit);
}

commentsContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("reply")) return;
  e.target.disabled = true;
  attachForm(e.target.parentElement.parentElement);
});
