const toggleChecked = (e) => {
  let parent = e.currentTarget.parentNode;
  console.log(e.currentTarget.parentNode);
  if (parent.classList.contains("checked")) {
    parent.classList.remove("checked");
  } else {
    let inputText = document.querySelector(".myText");
    // p è undefined
    parent.innerHTML = `<p class="text-item">${inputText.value}</p><button class="checked"> ✔️ Restore</button>`;
    // let itemText = document.querySelector(".text-item");
    // itemText = inputText.value;
    parent.classList.add("checked");

    // manca toggle al button
    // let restoreBtn = document.querySelector("button.done");
    // console.log(restoreBtn);

    const itemBtn = e.currentTarget;
    console.log(e.currentTarget);
    itemBtn.addEventListener("click", () => {
      if (itemBtn.classList.contains("checked")) {
        parent.classList.remove("checked");
      } else {
        parent.classList.add("checked");
        console.log("add");
      }
    });
  }
};

// e.currentTarget.addEventListener("click", (e) =>
//   e.currentTarget.parentNode.classList.contains("checked")
//     ? e.currentTarget.classList.remove("checked")
//     : e.currentTarget.classList.add("checked")
// );
// console.log(e.currentTarget);

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

const clickAdd = () => {
  let inputText = document.querySelector(".myText");
  if (inputText.value.length == 0) {
    alert("Please enter a task");
  } else {
    const newTask = document.createElement("li");
    newTask.classList.add("item");
    newTask.innerHTML = `<p class="text-item">${inputText.value}</p><button class="done"> ❗️ Done</button>`;
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
