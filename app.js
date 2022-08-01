const toggleChecked = (e, newTask) => {
  let parent = e.currentTarget.parentNode;
  let itemBtn = e.currentTarget;
  if (newTask.classList.contains("checked")) {
    parent.classList.remove("checked");
    itemBtn.innerHTML = `❗️ Done`;
  } else {
    parent.classList.add("checked");
    itemBtn.innerHTML = `✔️ Restore`;
  }
};

const clickAdd = () => {
  let inputText = document.querySelector(".myText");
  if (inputText.value.length == 0) {
    alert("Please enter a task");
  } else {
    const newTask = document.createElement("li");
    newTask.classList.add("item");
    newTask.innerHTML = `<p class="text-item">${inputText.value}</p><button class="done"> ❗️ Done</button>`;
    document.querySelector(".item-list").appendChild(newTask);
    newTask
      .querySelector("button")
      .addEventListener("click", (e) => toggleChecked(e, newTask));
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

const init = async () => {
  addTasks();
  // toggleChecked();
  // toggleItems();
};

init();
