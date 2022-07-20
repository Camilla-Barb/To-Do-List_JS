const addTasks = () => {
  const btnAdd = document.getElementById("addTask");
  //   console.log("btnAdd");

  const clickAdd = () => {
    const inputText = document.getElementById("myText").value;
    const task = document.createElement("li");
    task.innerHTML = inputText + `<button>Done</button>`;
    document.getElementById("tasks-list").appendChild(task);
  };
  btnAdd?.addEventListener("click", clickAdd);
};

// const toggleItems = () => {
//   const listItem = document.querySelector("ul");
//   listItem.addEventListener(
//     "click",
//     function (e) {
//       if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");
//       }
//     },
//     false
//   );
// };

// const closeBtn = () => {
//   const btn = [...document.querySelectorAll("button#close")];
//   console.log(btn);
//   const item = [...document.getElementsByTagName("li")];
//   console.log(item);
//   item.forEach((el) => el.classList.remove("hidden"));
//   item
//     .filter((el) => el.button.id === el.currentTarget.button.id)
//     .forEach((el) => el.classList.add("hidden"));
//   btn.addEventListener("click", closeBtn);
// };

const closeBtn = (e) => {
  if (e.currentTarget.classList.contains("checked")) {
    e.currentTarget.classList.remove("checked");
  } else {
    e.currentTarget.classList.add("checked");
  }
};

const toggleItems = () => {
  const allDoneBtn = [...document.querySelectorAll("button")];
  allDoneBtn.forEach((el) => el.addEventListener("click", closeBtn));
};

const init = async () => {
  addTasks();
  toggleItems();
  // closeBtn();
};

init();
