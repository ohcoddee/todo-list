const todoInput = document.querySelector(".write-your-todo");
const todoList = document.querySelector(".todo-list");
const doneList = document.querySelector(".done-list");

todoInput.addEventListener("keypress", onKeyPress);

function onKeyPress(event) {
  if (event.code === "Enter") {
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const todoText = document.createElement("input");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn-close";

    todoList.appendChild(div);
    div.className = "form-check";
    div.appendChild(checkbox);
    div.appendChild(todoText);
    div.appendChild(button);

    checkbox.className = "form-check-input";
    checkbox.type = "checkbox";
    checkbox.value = "";
    checkbox.id = "flexCheckDefault";

    todoText.className = "form-check-label";
    // todoText.htmlFor = "flexCheckDefault";
    todoText.value = todoInput.value;
    todoText.style.border = "none";
    todoText.style.background = "none";
    todoText.style.outline = "none";

    button.addEventListener("click", onClickButton);
    function onClickButton() {
      div.remove();
    }

    checkbox.addEventListener("click", onClickCheckbox);
    function onClickCheckbox() {
      const checked = checkbox.checked;
      // console.log("지금 상태: ", checked);
      if (checked) {
        // todoList.removeChild(div);
        doneList.appendChild(div);
        todoText.style.textDecoration = "line-through";
      } else {
        // doneList.removeChild(div);
        todoList.appendChild(div);
        todoText.style.textDecoration = "none";
      }
    }

    todoInput.value = "";
  }
}

// function onClickButton(event) {
//   const button = event.target;
//   const div = button.parentNode;
//   todoList.removeChild(div);
// }

// function onClickCheckbox(event) {
//   const checkbox = event.target;
//   const div = button.parentNode;
//   const todoText = checkbox.nextSibling;

//   todoList.remove(div);
//   todoList.appendChild(div);
//   todoText.style.textDecoration = "line-through";
// }
