const resultsContainer = document.querySelector("#results-container");

const throttle = (fn, delay) => {
  let lastCall = 0;
  return function (...arg) {
    const current = Date.now();
    if (current - lastCall > delay) {
      lastCall = current;
      fn(...arg);
    }
  };
};

const limit = 10;
let page = 0;
let isLoading = false;
let nextTrigger = 50;

const getUsers = async () => {
  if (isLoading) return;
  isLoading = true;
  try {
    const res = await fetch(
      `https://dummyjson.com/users?limit=${limit}&skip=${page * limit}`
    );
    const data = await res.json();
    page++;

    return data;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading = false;
  }
};

const renderUsers = (users) => {
  users.forEach((user) => {
    const name = user.firstName + " " + user.lastName;

    // create user card
    const userCard = document.createElement("div");
    userCard.className =
      "w-sm rounded overflow-hidden shadow-lg bg-white p-6 flex items-center space-x-4 my-2";

    const avatar = document.createElement("img");
    avatar.className = "w-16 h-16 rounded-full object-cover";
    avatar.src = user.image || "https://randomuser.me/api/portraits/men/1.jpg";
    avatar.alt = "User avatar";

    const infoDiv = document.createElement("div");

    const nameDiv = document.createElement("div");
    nameDiv.className = "font-bold text-xl";
    nameDiv.textContent = name;

    const emailP = document.createElement("p");
    emailP.className = "text-gray-600 text-sm";
    emailP.textContent = user.email;

    const ageP = document.createElement("p");
    ageP.className = "text-gray-500 text-xs mt-1";
    ageP.textContent = `Age: ${user.age}`;

    infoDiv.appendChild(nameDiv);
    infoDiv.appendChild(emailP);
    infoDiv.appendChild(ageP);

    userCard.appendChild(avatar);
    userCard.appendChild(infoDiv);

    resultsContainer.appendChild(userCard);
  });
};

getUsers().then((data) => {
  renderUsers(data.users);
});
function handleScroll(e) {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  if (scrolled >= nextTrigger && !isLoading) {
    nextTrigger = 80;
    getUsers().then((data) => {
      renderUsers(data.users);
    });
  }
}
document.addEventListener("scroll", throttle(handleScroll, 300));
