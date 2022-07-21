const toggleChecked = (e) => {
  const parent = e.currentTarget.parentNode;
  // parent.remove();
  if (parent.classList.contains("checked")) {
    parent.classList.remove("checked");
  } else {
    let inputText = document.querySelector(".myText").value;
    parent.innerHTML = `<p>${inputText.value}</p><button class="restore">😃 Restore</button>`;
    parent.addEventListener("click", () => parent.classList.toggle("checked"));
  }

  // if (e.currentTarget.classList.contains("checked")) {
  //   const deleteTask = document.querySelectorAll("button.delete");
  //   for (let i = 0; i < deleteTask.length; i++) {
  //     deleteTask[i].addEventListener("click", function () {
  //       this.parentNode.remove();
  //     });
  //   }
  // } else {
  //   e.currentTarget.classList.add("checked");
  // }
};

const clickAdd = () => {
  let inputText = document.querySelector(".myText");
  if (inputText.value.length == 0) {
    alert("Please enter a task");
  } else {
    const newTask = document.createElement("li");
    newTask.classList.add("item");
    newTask.innerHTML = `<p>${inputText.value}</p><button class="done">🙁 Done</button>`;
    document.querySelector(".item-list").appendChild(newTask);
    newTask.querySelector("button").addEventListener("click", toggleChecked);
    inputText.value = "";
  }
};

const addTasks = () => {
  const inputText = document.querySelector(".myText");
  const btnAdd = document.querySelector(".addTask");
  //   console.log("btnAdd");
  inputText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      clickAdd();
    }
  });
  btnAdd.addEventListener("click", clickAdd);
};

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
  // toggleChecked();
  // toggleItems();
};

init();
