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

    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn-close";
    div.appendChild(button);
    button.addEventListener("click", onClick);

    function onClick() {
      div.remove();
      // todoList.removeChild(div);
    }

    input.addEventListener("click", onClickChechbox);
    // function onClickChechbox() {
    //   div.removeChild("checkbox");
    //   div.appendChild("checkbox");
    // }

    function onClickChechbox() {
      div.remove();
      // todoList.removeChild(div);
      todoList.appendChild(div);
    }

    todoInput.value = "";
  }
}
