const todoInput = document.querySelector(".write-your-todo");
const todoList = document.querySelector(".todo-list");

todoInput.addEventListener("keypress", onKeyPress);

function onKeyPress(event) {
  if (event.code === "Enter") {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    todoList.appendChild(div);

    div.className = "form-check";
    div.appendChild(input);
    div.appendChild(label);

    input.className = "form-check-input";
    input.type = "checkbox";
    input.value = "";
    input.id = "flexCheckDefault";

    label.className = "form-check-label";
    label.htmlFor = "flexCheckDefault";
    label.innerText = todoInput.value;

    todoInput.value = "";
  }
}
