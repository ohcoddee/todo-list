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

    todoText.value = todoInput.value;
    todoText.className = "reset-input";

    button.addEventListener("click", onClickButton);
    function onClickButton() {
      div.remove();
    }

    checkbox.addEventListener("click", onClickCheckbox);
    function onClickCheckbox() {
      const checked = checkbox.checked;
      // console.log("지금 상태: ", checked);
      if (checked) {
        doneList.appendChild(div);
        todoText.style.textDecoration = "line-through";
      } else {
        todoList.appendChild(div);
        todoText.style.textDecoration = "none";
      }
    }

    todoInput.value = "";
  }
}
