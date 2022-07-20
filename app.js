const addTasks = () => {
  const btnAdd = document.getElementById("addTask");
  //   console.log("btnAdd");

  const clickAdd = () => {
    const inputText = document.getElementById("myText").value;
    if (document.getElementById("myText").value.length == 0) {
      alert("Please enter a task");
    } else {
      const newTask = document.createElement("li");
      newTask.innerHTML = inputText + `<button class = "delete">Done</button>`;
      document.getElementById("tasks-list").appendChild(newTask);
      console.log(newTask.innerHTML);
    }
  };
  btnAdd?.addEventListener("click", clickAdd);
};

const deleteTask = document.querySelectorAll("button.delete");
for (let i = 0; i < deleteTask.length; i++) {
  deleteTask[i].addEventListener("click", function () {
    this.parentNode.remove();
  });
}

// const closeBtn = (e) => {
//   if (e.currentTarget.classList.contains("checked")) {
//     // checked => devo cancellare la task
//     // const allTasks = [...document.querySelectorAll("li")];
//     const newDoneBtn = [...document.querySelectorAll(".delete")];
//     // allTasks.forEach((el) => el.setAttribute("class", "hidden"));
//     // allTasks.forEach((el) => e.parentNode.remove());
//     newDoneBtn.forEach(
//       (el) =>
//         function () {
//           this.parentNode.remove();
//         }
//     );
//   } else {
//     e.currentTarget.classList.add("checked");
//   }
// };

// const toggleItems = () => {
//   // const allDoneBtn = [...document.querySelectorAll(".tasks button")];
//   const newDoneBtn = [...document.querySelectorAll(".delete")];
//   newDoneBtn.forEach((el) => el.addEventListener("click", closeBtn));
//   // allDoneBtn.forEach((el) => el.addEventListener("click", closeBtn));
// };

// Seleziono task

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

const init = async () => {
  addTasks();
  // toggleItems();
};

init();
